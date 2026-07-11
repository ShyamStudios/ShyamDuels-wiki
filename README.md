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
- [Commands Reference](user-guide/commands.html)
- [Permissions](user-guide/permissions.html)
- [Configuration Files](user-guide/configuration.html)
- [PlaceholderAPI](user-guide/placeholders.html)
- [Migration Guide](user-guide/migration.html)

## Plugin facts (v2.0)

- **Server:** Paper 1.21+ (API `1.21`)
- **Java:** 21+
- **Required plugins:** FastAsyncWorldEdit, packetevents, LuckPerms, PlaceholderAPI
- **Optional:** Nexo (custom menu icons)
- **Database:** SQLite (default) or MySQL — configured in `database.yml` (merged at runtime under `database.*`)

## Recent doc sync notes

Documentation was last synced against the plugin source to reflect:

- Granular `/shyamduels reload-*` commands (no single `reload` command)
- `/profile` command and default right-click profile interaction
- `/kiteditor save|reset|leave` in-editor commands
- `/ffa list` admin permission, legacy `/practice` aliases
- Expanded API services reference (DuelService, PartyService, QueueService, etc.)
- Missing config sections: kill-regen, combat, cosmetics, join commands, party external-commands
