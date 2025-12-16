---
title: GitHub
description: Configure GitHub integration for CI/CD.
---

GitHub integration enables automated deployments via GitHub Actions.

## Capabilities

- **CI/CD**: Automated push-to-deploy workflows
- **Secrets**: Manage repository secrets for deployments

## Create a Fine-grained Personal Access Token

1. Go to [GitHub Fine-grained tokens](https://github.com/settings/personal-access-tokens)
2. Click **Generate new token**
3. Give it a name and set an expiration date

### Repository Access

Select **All repositories** to allow Fadogen to manage any of your repositories.

### Permissions

Go to **Repository permissions** and set:

| Permission | Access | Purpose |
|------------|--------|---------|
| Actions | Read and write | Launch GitHub Actions workflows |
| Administration | Read and write | Create repositories from Fadogen |
| Contents | Read-only | Sync local repos if renamed on GitHub |
| Metadata | Read-only | Required (enabled by default) |
| Secrets | Read and write | Store deployment secrets |

4. Click **Generate token**
5. Copy the token

## Add to Fadogen

1. Go to **Integrations**
2. Click **Add Integration**
3. Select **GitHub**
4. Paste your Personal Access Token
5. Click **Save**

## Using GitHub

### Automatic Secret Management

When linking a site to a server, Fadogen automatically creates the necessary secrets in your repository.

### Trigger a Deployment

Deployments can be triggered in three ways:
- **Automatically**: on each pull request merged to `main` (default)
- **From the app**: click the **Deploy** button in the toolbar
- **From GitHub**: run the workflow manually via the Actions tab
