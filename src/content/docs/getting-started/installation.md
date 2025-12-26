---
title: Installation
description: How to download and install Fadogen on macOS.
---

## Download and install

[Download Fadogen](https://github.com/fadogen/app/releases/latest/download/Fadogen.dmg), open the `.dmg` and drag Fadogen to Applications.

## First Setup

On first launch, Fadogen will:
1. Install TLS certificates for local HTTPS
2. Configure shell integration (bash/zsh/fish)

### TLS Certificates

A system prompt will appear asking you to install the Caddy root certificate in your keychain. This is required for local HTTPS to work without browser warnings.

- **If you accept**: Local HTTPS will work seamlessly. **Restart your browsers** after accepting for the certificate to be recognized.
- **If you refuse**: Your local sites will still work, but browsers will display security warnings for HTTPS connections.

## Updates

To update Fadogen, click **Fadogen** in the menu bar and select **Check for Updates**. You can also enable automatic updates from this menu.
