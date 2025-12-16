---
title: GitHub Actions
description: CI/CD with push-to-deploy using GitHub Actions.
---

Fadogen automatically generates GitHub Actions workflows when you create a project.

## Features

- **Zero-downtime deployments** thanks to Docker Swarm
- **Multi-architecture support**: AMD64 and ARM64 without configuration
- **Cloudflare Tunnel support**: works automatically if your server uses a tunnel
- **Automatic backup restoration**: restores backups if no volume exists on the server but backups are detected in your backup integration

:::tip[Database migrations]
For zero-downtime deployments, use progressive migrations: first deploy with nullable fields, then add constraints in a second deployment. This ensures the old version keeps running while the new one starts. See [Parallel Change](https://martinfowler.com/bliki/ParallelChange.html) for more details.
:::

## How It Works

1. Link your project to a server
2. Push code to your GitHub repository
3. GitHub Actions runs the generated workflow
4. Your application is deployed with zero downtime

## Generated Workflow

Fadogen creates a complete workflow file in your repository at `.github/workflows/deploy.yml`.

The workflow handles:
- Building your application
- Connecting to the server via tunnel (if applicable)
- Backup restoration (if applicable)
- Deploying to Docker Swarm with rolling updates (zero downtime)

## Required Secrets

Fadogen automatically creates these secrets in your GitHub repository:
- Server connection credentials (SSH)
- Application environment variables

## Trigger a Deployment

Deployments can be triggered in three ways:

- **Automatically**: on each pull request merged to `main` (default)
- **From the app**: click the **Deploy** button in the toolbar
- **From GitHub**: run the workflow manually via the Actions tab
