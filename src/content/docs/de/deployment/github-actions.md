---
title: GitHub Actions
description: CI/CD mit Push-to-Deploy über GitHub Actions.
---

Fadogen generiert automatisch GitHub Actions Workflows, wenn Sie ein Projekt erstellen.

## Funktionen

- **Zero-Downtime-Deployments** dank Docker Swarm
- **Multi-Architektur-Unterstützung**: AMD64 und ARM64 ohne Konfiguration
- **Cloudflare Tunnel-Unterstützung**: funktioniert automatisch, wenn Ihr Server einen Tunnel verwendet
- **Automatische Backup-Wiederherstellung**: stellt Backups wieder her, wenn kein Volume auf dem Server existiert, aber Backups in Ihrer Backup-Integration erkannt werden

:::tip[Datenbank-Migrationen]
Für Zero-Downtime-Deployments verwenden Sie progressive Migrationen: Deployen Sie zuerst mit nullable Feldern, dann fügen Sie Constraints in einem zweiten Deployment hinzu. Dies stellt sicher, dass die alte Version weiterläuft, während die neue startet. Siehe [Parallel Change](https://martinfowler.com/bliki/ParallelChange.html) für weitere Details.
:::

## Funktionsweise

1. Verknüpfen Sie Ihr Projekt mit einem Server
2. Pushen Sie Code zu Ihrem GitHub-Repository
3. GitHub Actions führt den generierten Workflow aus
4. Ihre Anwendung wird ohne Ausfallzeit deployed

## Generierter Workflow

Fadogen erstellt eine vollständige Workflow-Datei in Ihrem Repository unter `.github/workflows/deploy.yml`.

Der Workflow handhabt:

- Erstellen Ihrer Anwendung
- Verbindung zum Server über Tunnel (falls zutreffend)
- Backup-Wiederherstellung (falls zutreffend)
- Deployment zu Docker Swarm mit Rolling Updates (Zero Downtime)

## Secrets

Fadogen erstellt und verwaltet automatisch diese Secrets in Ihrem GitHub-Repository.

### GitHub Actions Secrets

| Secret                  | Beschreibung                                           |
| ----------------------- | ------------------------------------------------------ |
| `SSH_HOST`              | Server-Hostname oder Cloudflare-Tunnel-Hostname        |
| `SSH_PORT`              | SSH-Port (Standard: 22)                                |
| `SSH_USER`              | SSH-Benutzername                                       |
| `SSH_PRIVATE_KEY`       | Vollständiger privater SSH-Schlüssel                   |
| `ENV_FILE_BASE64`       | Vollständige `.env.production`-Datei in Base64 kodiert |
| `USE_CLOUDFLARE_TUNNEL` | `"true"` oder `"false"`                                |

### GitHub Actions Variablen

| Variable      | Beschreibung                                                           |
| ------------- | ---------------------------------------------------------------------- |
| `SYSTEM_ARCH` | Server-Architektur (`x86_64`, `aarch64`)                               |
| `STACK_ID`    | Eindeutiger Stack-Identifier für Docker Swarm (z.B. `my-app-a1b2c3d4`) |

:::note[Warum STACK_ID?]
Die Variable `STACK_ID` stellt sicher, dass Ihr Deployment Umbenennungen des GitHub-Repositories überlebt. Sie wird einmalig bei der ersten Deployment-Konfiguration generiert (Format: `{repo-name}-{hash}`) und ändert sich nie. Docker-Volumes verwenden diese ID als Präfix, sodass das Umbenennen Ihres Repositories Ihre Daten nicht verwaist.
:::

## Ein Deployment auslösen

Deployments können auf drei Arten ausgelöst werden:

- **Automatisch**: bei jedem Pull Request, der in `main` gemergt wird (Standard)
- **Aus der App**: Klicken Sie auf die **Deploy**-Schaltfläche in der Symbolleiste
- **Von GitHub**: Führen Sie den Workflow manuell über den Actions-Tab aus
