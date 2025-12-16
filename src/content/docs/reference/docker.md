---
title: Docker
description: Reference for the generated Docker files.
---

Fadogen generates optimized, production-ready Docker files for your PHP projects.

## Dockerfile

### Base Image

The generated Dockerfile uses [serversideup/php](https://serversideup.net/open-source/docker-php/) Docker images with [FrankenPHP](https://frankenphp.dev/).

:::tip[Thanks to Server Side Up]
We're grateful to the [Server Side Up](https://serversideup.net/) team for their excellent open-source PHP Docker images. Their work makes it possible to provide optimized, secure, and production-ready containers out of the box.
:::

### Why FrankenPHP?

- **Performance**: Built on Caddy with native PHP support
- **Simplicity**: Single binary, no PHP-FPM or Nginx configuration needed
- **Modern**: HTTP/3, early hints, and worker mode support
- **Production-ready**: Optimized for containerized deployments

### PHP Extensions

The following extensions are installed by default:

| Extension | Purpose |
|-----------|---------|
| `bcmath` | Arbitrary precision mathematics |
| `intl` | Internationalization functions |

Additional extensions from the base image are documented in the [serversideup/php documentation](https://serversideup.net/open-source/docker-php/docs).

### Customization

The generated Dockerfile is yours to modify. Common customizations:

#### Add PHP Extensions

```dockerfile
RUN install-php-extensions redis imagick gd
```

#### Add System Packages

```dockerfile
RUN apt-get update && apt-get install -y \
    ffmpeg \
    && rm -rf /var/lib/apt/lists/*
```

## Compose Files

### compose.prod.yaml

This file defines your production Docker Swarm stack. It includes:

- Your application service
- Database service (if configured)
- Cache service (if configured)
- Network and volume configurations

### compose.prod.certresolver.yaml

This file configures automatic SSL certificate generation via Let's Encrypt.

:::note
This file is only needed if your server is **not** behind a Cloudflare Tunnel. If you're using a Cloudflare Tunnel, SSL is handled by Cloudflare and you can safely delete this file.
:::

## Related Resources

- [Server Side Up Docker PHP Documentation](https://serversideup.net/open-source/docker-php/docs)
- [FrankenPHP Documentation](https://frankenphp.dev/docs/)
- [GitHub Actions Workflow](/deployment/github-actions/)
