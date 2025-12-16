---
title: First Project
description: Create your first project with Fadogen.
---

## Add a Watched Folder

1. Open Fadogen
2. Go to **Projects**
3. Click the **Manage Folders** icon in the toolbar
4. Add the folder containing your projects (e.g., `~/Developer`)

Fadogen will automatically detect all PHP projects in this folder.

## Create a New Project

1. Click the **New Project** icon in the toolbar
2. Select **Laravel** or **Symfony**
3. Choose the location and project name
4. Customize your stack (PHP version, database, etc.)
5. Click **Create** in the toolbar

Fadogen will:
- Create the project locally with Composer
- Install the dependencies selected in the form
- Generate [Docker files](/reference/docker/) and [GitHub Actions workflow](/deployment/github-actions/)

Your project is now available at `https://project-name.localhost`.
