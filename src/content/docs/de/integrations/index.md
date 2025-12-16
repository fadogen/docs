---
title: Integrationen
description: Verbinden Sie Fadogen mit Cloud-Anbietern und Diensten.
---

Fadogen integriert sich mit Cloud-Anbietern und Diensten, um Server-Bereitstellung, DNS-Verwaltung, sichere Tunnel und Backups zu ermöglichen.

:::note[Datenschutz]
Fadogen hat keinen Backend-Server — nur Cloudflare R2 hostet die vorkompilierten Binärdateien. Ihre API-Tokens werden verschlüsselt in Ihrem privaten iCloud-Konto gespeichert.
:::

| Anbieter | VPS | DNS | Tunnel | Backup |
|----------|:---:|:---:|:------:|:------:|
| [Bunny](/de/integrations/config/bunny) | | ✓ | | |
| [Cloudflare](/de/integrations/config/cloudflare) | | ✓ | ✓ | ✓ |
| [DigitalOcean](/de/integrations/config/digitalocean) | ✓ | ✓ | | |
| [Dropbox](/de/integrations/config/dropbox) | | | | ✓ |
| [Hetzner](/de/integrations/config/hetzner) | ✓ | ✓ | | |
| [Linode](/de/integrations/config/linode) | ✓ | ✓ | | |
| [Scaleway](/de/integrations/config/scaleway) | | | | ✓ |
| [Vultr](/de/integrations/config/vultr) | ✓ | ✓ | | |

## VPS

Erstellen und verwalten Sie Server bei unterstützten Cloud-Anbietern. Nicht erforderlich, wenn Sie [manuelle Server](/de/deployment/servers#manueller-server) verwenden.

## DNS

Automatisieren Sie die DNS-Eintragserstellung beim Verknüpfen von Projekten. Sie können DNS manuell bei Ihrem Anbieter konfigurieren, müssen dann aber auch die Serverkonfiguration manuell aktualisieren.

## Tunnel

Stellen Sie Ihre Server sicher über Cloudflare Tunnel bereit, ohne Firewall-Ports zu öffnen. Empfohlen für erhöhte Sicherheit.

## Backup

Speichern Sie verschlüsselte Backups Ihrer bereitgestellten Anwendungen. Backups werden automatisch wiederhergestellt, wenn auf einen neuen Server deployed wird.

## CI/CD

[GitHub](/de/integrations/config/github) ist für automatisierte Deployments erforderlich. Verknüpfen Sie Ihr Projekt mit einem GitHub-Repository, um Push-to-Deploy zu aktivieren.

## Eine Integration hinzufügen

1. Gehen Sie zu **Integrationen**
2. Klicken Sie auf **Integration hinzufügen**
3. Wählen Sie den Anbieter
4. Geben Sie Ihre API-Anmeldedaten ein
5. Klicken Sie auf **Speichern**

Siehe die Konfigurationsanleitungen in der Seitenleiste für detaillierte Anweisungen zu jedem Anbieter.
