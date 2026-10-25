# ShyamDuels Documentation

Local HTML documentation for the ShyamDuels v2.0 Paper plugin.

## Live site

Published docs: [https://docs.shyamduels.fun/](https://docs.shyamduels.fun/)

## Browse locally

Open [`index.html`](index.html) in a browser to view the full documentation offline.

## Structure

| Section | Path | Contents |
|---------|------|----------|
| Home | `index.html` | Overview, requirements, feature index |
| User Guide | `user-guide/` | Setup, commands, permissions, configuration |
| Developer API | `api/` | Services, events, models, code examples |
| Assets | `assets/` | Shared CSS and navigation scripts |

## Key user-guide pages

- [Getting Started](user-guide/getting-started.html)
- [Arena Setup](user-guide/arena-setup.html)
- [Arena Instances & Automatic Capacity](user-guide/arena-instances.html)
- [Optional World Isolation](user-guide/world-isolation.html)
- [Commands Reference](user-guide/commands.html)
- [Permissions](user-guide/permissions.html)
- [Tournament System](user-guide/tournaments.html)
- [Advancements](user-guide/advancements.html)
- [Configuration Files](user-guide/configuration.html)
- [PlaceholderAPI](user-guide/placeholders.html)
- [Migration Guide](user-guide/migration.html)

## Recent core feature coverage

- Arena instances: default-off fixed pools and optional expansion, complete config/overrides,
  commands, shared reset budgets, source revisions, retirement, and storage/recovery rules.
- Configuration reference: world isolation, separate FFA/duel death loot and expiry,
  kill refill/regeneration, timed-border warning sounds, and round/match delays.
- Practice features: optional client-only XP score/skull animation and separate
  ranked/unranked 1v1 streak lore (menu-local tokens, not new PAPI placeholders).
- Upgrades & migration: additive defaults, backups, opt-in switches, and restart requirements.

Examples describe the implementation in this source tree. Check that the installed build
contains the feature before enabling it; this documentation change does not publish a JAR.
Merge example subsections into existing YAML rather than duplicating top-level keys.

## Plugin facts (v2.0)

- **Server:** Paper 1.21+ / Paper 26.x / Leaf 26.2 / 1.21.11 (API `1.21`)
- **Java:** 21+
- **Folia:** not supported by the current core plugin. Use Paper or a compatible fork;
  individual cosmetic features and dependency versions may require a newer server/client/JVM.
- **Required plugins:** FastAsyncWorldEdit, packetevents, LuckPerms, PlaceholderAPI
- **Optional:** Nexo (custom menu icons), FancyNpcs, SkinsRestorer (soft-dependencies for tab/nametag/skin hooks)
- **Database:** SQLite (default) or MySQL (configured in `database.yml`, merged at runtime under `database.*` with HikariCP pooling)


