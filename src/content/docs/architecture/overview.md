---
title: Architecture Overview
description: Technical overview of Fadogen's architecture.
---

Fadogen is a **100% self-contained** native macOS application.

## Everything Included

All tools are bundled directly in the application:

- **PHP** (previous major version)
- **Node.js** (latest LTS)
- **Caddy** (web server)
- **Ansible** (provisioning)
- **Python** (for Ansible)

No external tools required. No need for Homebrew or other package managers.

## Independent Binaries

Binaries are compiled from the public repository [fadogen/binaries](https://github.com/fadogen/binaries) and automatically distributed via R2 storage. They are regularly updated.

The application downloads and updates the necessary binaries transparently.

## Privacy

- **No server communication**: everything runs locally
- **Secure data**: stored in iCloud and encrypted
- **Open source**: the code is auditable

## Distribution

Fadogen is distributed via **GitHub Releases** with:
- Developer ID signing
- Apple notarization

### Why Not the Mac App Store?

The Mac App Store sandbox prevents:
1. Installing SSL certificates for local HTTPS
2. Downloading binaries after installation

## License

Fadogen is licensed under **AGPLv3**. This license was chosen to ensure that any potential forks remain open source and useful to everyone.
