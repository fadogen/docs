---
title: Caddy
description: Web server with automatic HTTPS.
---

[Caddy](https://caddyserver.com) is the web server used by Fadogen. It automatically manages HTTPS certificates for your local projects.

## Automatic HTTPS

All your projects are accessible via HTTPS with valid certificates.

URLs are in the format `https://project-name.localhost`.

## Automatic Configuration

Fadogen automatically generates the Caddy configuration for each detected project.

The configuration is automatically reloaded when:
- A project is added or removed
- A project's settings change

## Logs

View Caddy logs in **Caddy** > **Logs** to debug issues.

## PHP-FPM

Caddy uses PHP-FPM to execute PHP scripts. Each project uses its configured PHP version.
