---
title: Docker
description: Referenz für die generierten Docker-Dateien.
---

Fadogen generiert optimierte, produktionsreife Docker-Dateien für Ihre PHP-Projekte.

## Dockerfile

### Basis-Image

Das generierte Dockerfile verwendet [serversideup/php](https://serversideup.net/open-source/docker-php/) Docker-Images mit [FrankenPHP](https://frankenphp.dev/).

:::tip[Danke an Server Side Up]
Wir sind dem [Server Side Up](https://serversideup.net/)-Team dankbar für ihre exzellenten Open-Source PHP Docker-Images. Ihre Arbeit ermöglicht es, optimierte, sichere und produktionsreife Container direkt einsatzbereit bereitzustellen.
:::

### Warum FrankenPHP?

- **Performance**: Basiert auf Caddy mit nativer PHP-Unterstützung
- **Einfachheit**: Einzelne Binärdatei, keine PHP-FPM- oder Nginx-Konfiguration nötig
- **Modern**: HTTP/3, Early Hints und Worker-Modus-Unterstützung
- **Produktionsreif**: Optimiert für containerisierte Deployments

### PHP-Erweiterungen

Die folgenden Erweiterungen sind standardmäßig installiert:

| Erweiterung | Zweck |
|-------------|-------|
| `bcmath` | Mathematik mit beliebiger Präzision |
| `intl` | Internationalisierungsfunktionen |

Zusätzliche Erweiterungen aus dem Basis-Image sind in der [serversideup/php-Dokumentation](https://serversideup.net/open-source/docker-php/docs) dokumentiert.

### Anpassung

Das generierte Dockerfile gehört Ihnen und kann angepasst werden. Häufige Anpassungen:

#### PHP-Erweiterungen hinzufügen

```dockerfile
RUN install-php-extensions redis imagick gd
```

#### Systempakete hinzufügen

```dockerfile
RUN apt-get update && apt-get install -y \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*
```

## Compose-Dateien

### compose.prod.yaml

Diese Datei definiert Ihren Produktions-Docker-Swarm-Stack. Sie enthält:

- Ihren Anwendungsdienst
- Datenbankdienst (falls konfiguriert)
- Cache-Dienst (falls konfiguriert)
- Netzwerk- und Volume-Konfigurationen

### compose.prod.certresolver.yaml

Diese Datei konfiguriert die automatische SSL-Zertifikatsgenerierung über Let's Encrypt.

:::note
Diese Datei wird nur benötigt, wenn Ihr Server **nicht** hinter einem Cloudflare Tunnel ist. Wenn Sie einen Cloudflare Tunnel verwenden, wird SSL von Cloudflare gehandhabt und Sie können diese Datei sicher löschen.
:::

## Verwandte Ressourcen

- [Server Side Up Docker PHP Dokumentation](https://serversideup.net/open-source/docker-php/docs)
- [FrankenPHP Dokumentation](https://frankenphp.dev/docs/)
- [GitHub Actions Workflow](/de/deployment/github-actions/)
