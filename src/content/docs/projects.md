---
title: Projects
description: Manage your PHP projects from local development to production deployment.
sidebar:
  order: 1
---

Fadogen manages your PHP projects from local development to production deployment.

## Managing Projects

### Watched Folders

Fadogen automatically monitors folders you configure to detect your PHP projects.

1. Go to **Projects**
2. Click the **Manage Folders** icon in the toolbar
3. Add the folder containing your projects

## Local Development

### Local URLs

Each project receives a local URL in the format `https://project-name.localhost`.

### Customize the URL

1. Select the project
2. Click on the URL name
3. Edit as desired

### Per-Project Configuration

Each project can have its own configuration:
- PHP version
- Node.js version

These settings are stored in the `.fadogen` file at the project root.

## Sharing Your Work

Share your local development site with others to get feedback, test on different devices, or demo your work — all without deploying to a server.

Access tunnel options from the **Development** tab in the project detail view.

### Quick Tunnel

Create an instant tunnel with a random `*.trycloudflare.com` URL. No configuration required.

:::note
Quick tunnels are temporary and will stop automatically after some time without warning. Use them for short sharing sessions only.
:::

### Custom Domain Tunnel

Use your own domain for the tunnel. This requires:
- A configured [Cloudflare integration](/integrations/config/cloudflare/)
- An active domain on Cloudflare

### Password Protection

Both tunnel types support password protection:
- **Username**: `user`
- **Password**: randomly generated

The credentials are displayed when the tunnel starts.

### Frontend Projects

For frontend projects (SPA), you must build your project before creating a tunnel. Fadogen serves the built files from the following directories:

| Framework | Build Directory |
|-----------|-----------------|
| Laravel, Symfony | — (served directly) |
| Next.js | `out` |
| Nuxt | `.output/public` |
| SvelteKit | `build` |
| React, Vue, Svelte | `dist` |

:::caution[Security]
Stop the tunnel as soon as you no longer need to share your site. While active, your local development environment is exposed to the internet.
:::

## Production Deployment

### Prerequisites

- A [provisioned server](/deployment/servers/)
- A GitHub repository linked to your project (click the **GitHub** icon on a project to link it quickly)

### Link a Project to a Server

1. Select a project in **Projects**
2. Go to the **Production** tab
3. Select the target server
4. Select the domain zone from your DNS integrations (only Cloudflare if behind a tunnel)
5. Optionally configure a subdomain (a warning appears if already in use)
6. Select a backup provider if configured (S3, Dropbox)
7. Click **Link**

### Linking Process

Fadogen will:
1. Create DNS records for your domain
2. Configure Traefik for SSL certificates (if not using Cloudflare Tunnel)
3. Set up GitHub secrets for CI/CD

### Trigger a Deployment

Once linked, deployments can be triggered:
- **Automatically**: on each pull request merged to `main`
- **From the app**: click the **Deploy** button in the toolbar
- **From GitHub**: run the workflow manually via the Actions tab

### Environment Variables

Click the **Environment** button in the toolbar to view and edit production variables.

Changes are automatically synced to GitHub secrets and stored encrypted in the app.
