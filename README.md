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
- [Tournament System](user-guide/tournaments.html)
- [Configuration Files](user-guide/configuration.html)
- [PlaceholderAPI](user-guide/placeholders.html)
- [Migration Guide](user-guide/migration.html)

## Plugin facts (v2.0)

- **Server:** Paper 1.21+ (API `1.21`)
- **Java:** 21+
- **Required plugins:** FastAsyncWorldEdit, packetevents, LuckPerms, PlaceholderAPI
- **Optional:** Nexo (custom menu icons)
- **Database:** SQLite (default) or MySQL (configured in `database.yml`, merged at runtime under `database.*`)

