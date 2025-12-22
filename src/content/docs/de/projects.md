---
title: Projekte
description: Verwalten Sie Ihre PHP-Projekte von der lokalen Entwicklung bis zur Produktionsbereitstellung.
sidebar:
  order: 1
---

Fadogen verwaltet Ihre PHP-Projekte von der lokalen Entwicklung bis zur Produktionsbereitstellung.

## Projekte verwalten

### Überwachte Ordner

Fadogen überwacht automatisch die von Ihnen konfigurierten Ordner, um Ihre PHP-Projekte zu erkennen.

1. Gehen Sie zu **Projekte**
2. Klicken Sie auf das **Ordner verwalten**-Symbol in der Symbolleiste
3. Fügen Sie den Ordner hinzu, der Ihre Projekte enthält

## Lokale Entwicklung

### Lokale URLs

Jedes Projekt erhält eine lokale URL im Format `https://projektname.localhost`.

### URL anpassen

1. Wählen Sie das Projekt aus
2. Klicken Sie auf den URL-Namen
3. Bearbeiten Sie nach Wunsch

### Projektkonfiguration

Jedes Projekt kann seine eigene Konfiguration haben:
- PHP-Version
- Node.js-Version

Diese Einstellungen werden in der `.fadogen`-Datei im Projektstammverzeichnis gespeichert.

## Ihre Arbeit teilen

Teilen Sie Ihre lokale Entwicklungsseite mit anderen, um Feedback zu erhalten, auf verschiedenen Geräten zu testen oder Ihre Arbeit zu demonstrieren — alles ohne auf einen Server zu deployen.

Greifen Sie auf die Tunnel-Optionen im **Entwicklung**-Tab in der Projektdetailansicht zu.

### Schneller Tunnel

Erstellen Sie einen sofortigen Tunnel mit einer zufälligen `*.trycloudflare.com`-URL. Keine Konfiguration erforderlich.

:::note
Schnelle Tunnel sind temporär und werden nach einiger Zeit automatisch ohne Vorwarnung beendet. Verwenden Sie sie nur für kurze Sharing-Sessions.
:::

### Benutzerdefinierte Domain

Verwenden Sie Ihre eigene Domain für den Tunnel. Dies erfordert:
- Eine konfigurierte [Cloudflare-Integration](/de/integrations/config/cloudflare/)
- Eine aktive Domain bei Cloudflare

### Passwortschutz

Beide Tunnel-Typen unterstützen Passwortschutz:
- **Benutzername**: `user`
- **Passwort**: zufällig generiert

Die Anmeldedaten werden beim Start des Tunnels angezeigt.

### Frontend-Projekte

Bei Frontend-Projekten (SPA) müssen Sie Ihr Projekt builden, bevor Sie einen Tunnel erstellen. Fadogen stellt die gebauten Dateien aus den folgenden Verzeichnissen bereit:

| Framework | Build-Verzeichnis |
|-----------|-------------------|
| Laravel, Symfony | — (direkt bereitgestellt) |
| Next.js | `out` |
| Nuxt | `.output/public` |
| SvelteKit | `build` |
| React, Vue, Svelte | `dist` |

:::caution[Sicherheit]
Beenden Sie den Tunnel, sobald Sie Ihre Seite nicht mehr teilen müssen. Solange er aktiv ist, ist Ihre lokale Entwicklungsumgebung im Internet erreichbar.
:::

## Produktionsbereitstellung

### Voraussetzungen

- Ein [bereitgestellter Server](/de/deployment/servers/)
- Ein GitHub-Repository, das mit Ihrem Projekt verknüpft ist (klicken Sie auf das **GitHub**-Symbol bei einem Projekt, um es schnell zu verknüpfen)

### Ein Projekt mit einem Server verknüpfen

1. Wählen Sie ein Projekt unter **Projekte**
2. Gehen Sie zum Tab **Produktion**
3. Wählen Sie den Zielserver
4. Wählen Sie die Domain-Zone aus Ihren DNS-Integrationen (nur Cloudflare, wenn hinter einem Tunnel)
5. Konfigurieren Sie optional eine Subdomain (eine Warnung erscheint, wenn bereits in Verwendung)
6. Wählen Sie einen Backup-Anbieter, falls konfiguriert (S3, Dropbox)
7. Klicken Sie auf **Verknüpfen**

### Verknüpfungsprozess

Fadogen wird:
1. DNS-Einträge für Ihre Domain erstellen
2. Traefik für SSL-Zertifikate konfigurieren (wenn kein Cloudflare Tunnel verwendet wird)
3. GitHub Secrets für CI/CD einrichten

### Ein Deployment auslösen

Nach der Verknüpfung können Deployments ausgelöst werden:
- **Automatisch**: bei jedem Pull Request, der in `main` gemergt wird
- **Aus der App**: Klicken Sie auf die **Deploy**-Schaltfläche in der Symbolleiste
- **Von GitHub**: Führen Sie den Workflow manuell über den Actions-Tab aus

### Umgebungsvariablen

Klicken Sie auf die **Umgebung**-Schaltfläche in der Symbolleiste, um Produktionsvariablen anzuzeigen und zu bearbeiten.

Änderungen werden automatisch mit GitHub Secrets synchronisiert und verschlüsselt in der App gespeichert.
