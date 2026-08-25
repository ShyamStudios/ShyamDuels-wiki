# Private obfuscation symbols

Every distributed obfuscated build must retain its exact ZKM `ChangeLog.txt` and
obfuscated bytecode. The mapping contains original class, method, field, flow, and
scrambled-line information. It must never be committed, placed in either JAR, or sent
to a client.

## Storage design

The Dev Build workflow stores three commit-keyed assets in the private `dev-symbols`
GitHub prerelease:

- `ShyamDuels-symbols-<full-sha>.zkm.enc` — gzip-compressed mapping encrypted with AES-256-GCM.
- `ShyamDuels-symbols-<full-sha>.json` — build identity, key ID, and SHA-256 checksums.
- `ShyamDuels-bytecode-<full-sha>.jar` — the exact verified obfuscated bytecode used for translation.

Symbols are preserved before the rolling client build is published. A missing key,
mapping, encryption failure, or symbol upload failure stops the workflow, so an
undebuggable JAR cannot reach `/devbuild`.

The encryption key is never passed to the Discord bot and is not stored in a release.
The `dev-symbols` release is separate from `dev-latest`, so retained assets cannot
interfere with the bot's exact current-build lookup.

## One-time key setup

Generate the 32-byte Base64 key locally:

```powershell
.\tools\symbols.ps1 generate-key
```

Immediately store the printed value in the company password manager. Add the same
value as the repository Actions secret `ZKM_SYMBOL_ENCRYPTION_KEY` under:

`Settings -> Secrets and variables -> Actions -> New repository secret`

Do not put the key in a source file, `.env`, workflow, chat, ticket, Discord message,
or shell command that will be saved in history. Losing the key makes the archived
mappings unrecoverable. When rotating the key, retain old keys and label them with the
`key_id` found in each symbol metadata JSON.

## Identify the affected build

Use the full commit SHA recorded in the Discord delivery audit database. The delivered
filename's signature ID is also linked to that commit in the audit record. For an
unmodified CI JAR, `META-INF/MANIFEST.MF` contains `ShyamDuels-Build-Commit` as an
additional fallback.

Always verify that the reported client JAR SHA-256 equals `jar_sha256` in the symbol
metadata before translating its trace. A mismatched checksum means the wrong mapping,
a modified JAR, or a different licensed delivery.

## Download and decrypt a mapping

Authenticate GitHub CLI with an account allowed to read the private repository, then
download the three assets for the full commit SHA:

```powershell
$sha = '0123456789abcdef0123456789abcdef01234567'
$destination = "private-symbols\$sha"
gh release download dev-symbols `
  --repo ShyamStudios/ShyamDuelsv2 `
  --pattern "*$sha*" `
  --dir $destination
```

Load the key without writing it into command history:

```powershell
$secureKey = Read-Host 'Paste symbol key' -AsSecureString
$pointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureKey)
try {
    $env:SHYAMDUELS_SYMBOL_KEY = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($pointer)
} finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($pointer)
}
```

Decrypt the mapping:

```powershell
.\tools\symbols.ps1 decrypt `
  "$destination\ShyamDuels-symbols-$sha.zkm.enc" `
  "$destination\ChangeLog.txt"
```

Clear the process environment after use:

```powershell
Remove-Item Env:SHYAMDUELS_SYMBOL_KEY
```

## Translate a client stack trace

Use an official trusted Zelix KlassMaster installation:

1. Open `Tools -> Stack Trace Translate`.
2. Select the decrypted `ChangeLog.txt` for the exact full commit SHA.
3. Select `ShyamDuels-bytecode-<full-sha>.jar` as the obfuscated bytecode.
4. Add the matching Java/Paper dependency classpath when available.
5. Paste the complete stack trace and translate it.

Providing the exact bytecode lets Zelix distinguish overloaded obfuscated methods.
The mapping also translates scrambled source line numbers back to their originals.

After the incident is resolved, remove the decrypted `ChangeLog.txt` and any temporary
copies. Keep only the encrypted release archive, metadata, exact bytecode, and the key
in the password manager.
