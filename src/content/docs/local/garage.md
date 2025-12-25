---
title: Garage
description: Local S3 storage for Laravel with Fadogen.
---

[Garage](https://garagehq.deuxfleurs.fr/) is a lightweight, self-hosted S3-compatible object storage.

Click the **Refresh** icon in the toolbar to check for new versions.

## Installation

1. Go to **Garage** in the sidebar
2. Click **Install**

## Configuration

### Port

Default S3 API port: `3900`

Modifiable if needed.

### Environment Variables

```bash
AWS_ENDPOINT_URL="https://s3.localhost"
AWS_REGION=garage
AWS_ACCESS_KEY_ID=GK6661646f67656e3067617261
AWS_SECRET_ACCESS_KEY=6661646f67656e67617261676573656372657430303030303030303030303030
```

Click the **Connection** icon in the toolbar to view credentials.

### AWS CLI

To use the AWS CLI with Garage, add the CA bundle path:

```bash
AWS_CA_BUNDLE="/Users/USER/Library/Application Support/Fadogen/config/php/cacert.pem"
```

Replace `USER` with your macOS username.

## Laravel

When creating a project with Fadogen and S3 storage enabled, a bucket is created automatically with your project name and these variables are added to `.env`:

```bash
AWS_ACCESS_KEY_ID=GK6661646f67656e3067617261
AWS_SECRET_ACCESS_KEY=6661646f67656e67617261676573656372657430303030303030303030303030
AWS_DEFAULT_REGION=garage
AWS_BUCKET=myapp
AWS_USE_PATH_STYLE_ENDPOINT=true
AWS_ENDPOINT=https://s3.localhost
```

The `league/flysystem-aws-s3-v3` package is installed automatically.

## Auto-Start

Enable auto-start to launch Garage when Fadogen starts.

## Data

Data is stored in `~/Library/Application Support/Fadogen/garage/data/`.

Binaries are installed in `/Users/Shared/Fadogen` (shared across Mac accounts).
