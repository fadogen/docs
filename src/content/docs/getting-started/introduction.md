---
title: Introduction
description: Discover Fadogen, the free and open-source PHP development and deployment environment for macOS.
---

## Overview

**Fadogen** is a free and open-source PHP development and deployment environment for macOS.

It provides a **single, unified workflow** to build and operate Laravel and Symfony applications — from local development to production — using one native app.

No manual configuration.  
No complex toolchain.  
No paid SaaS required.

---

## What problem does Fadogen solve?

Modern PHP development often requires combining multiple tools:

- local environment managers
- runtime versioning
- Docker configurations
- CI/CD pipelines
- server provisioning
- backup strategies

Fadogen replaces this fragmented setup with a **cohesive, local-first experience** that covers the full lifecycle of your application.

---

## Local development

Fadogen provides everything you need to work locally, out of the box:

- **Multi-version PHP** with per-project isolation
- **Node.js and Bun** with version management
- **Databases**: MariaDB, MySQL, PostgreSQL
- **Caches**: Redis, Valkey
- **Web server**: Caddy with automatic HTTPS
- **Email testing**: Mailpit
- **Realtime**: Built-in Laravel Reverb support

All services are bundled and managed by the app.

---

## Project generation

Create new projects in minutes:

- Laravel or Symfony
- Database and cache selection
- Frontend and tooling options
- Production-ready defaults

Fadogen generates:

- the application codebase
- a multi-stage Dockerfile
- a compose.yaml
- a GitHub Actions CI/CD workflow

You own everything.

---

## Production deployment

Deploy your applications directly from Fadogen:

- **VPS provisioning** on Hetzner, DigitalOcean, Vultr, Linode
- **One-click deployments** with zero downtime
- **GitHub Actions integration** for push-to-deploy
- **DNS management** across providers
- **Automatic SSL certificates**
- **Database backups** to S3-compatible storage or Dropbox
- **Automatic restore** during new deployments

You can also deploy on your own servers using Cloudflare Tunnel, without opening any ports.

---

## Privacy and control

Fadogen is designed with privacy in mind:

- No accounts
- No telemetry
- No credentials stored on external servers

All sensitive data stays on your machine, encrypted and synced via iCloud.

---

## Requirements

- macOS 15.0 (Sequoia) or later
- Apple Silicon

---

## Next steps

Start by installing Fadogen and creating your first project:

- [Installation](/getting-started/installation/)
- [First Project](/getting-started/first-project/)

For deeper dives, explore the documentation sections on projects, deployment and infrastructure.
