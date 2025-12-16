---
title: Intégrations
description: Connectez Fadogen aux fournisseurs cloud et services.
---

Fadogen s'intègre aux fournisseurs cloud et services pour permettre le provisionnement de serveurs, la gestion DNS, les tunnels sécurisés et les backups.

:::note[Confidentialité]
Fadogen n'a pas de serveur backend — seul Cloudflare R2 héberge les binaires précompilés. Vos tokens API sont stockés chiffrés dans votre compte iCloud privé.
:::

| Fournisseur | VPS | DNS | Tunnel | Backup |
|-------------|:---:|:---:|:------:|:------:|
| [Bunny](/fr/integrations/config/bunny) | | ✓ | | |
| [Cloudflare](/fr/integrations/config/cloudflare) | | ✓ | ✓ | ✓ |
| [DigitalOcean](/fr/integrations/config/digitalocean) | ✓ | ✓ | | |
| [Dropbox](/fr/integrations/config/dropbox) | | | | ✓ |
| [Hetzner](/fr/integrations/config/hetzner) | ✓ | ✓ | | |
| [Linode](/fr/integrations/config/linode) | ✓ | ✓ | | |
| [Scaleway](/fr/integrations/config/scaleway) | | | | ✓ |
| [Vultr](/fr/integrations/config/vultr) | ✓ | ✓ | | |

## VPS

Créez et gérez des serveurs sur les fournisseurs cloud supportés. Non requis si vous utilisez des [serveurs custom](/fr/deployment/servers#serveur-custom).

## DNS

Automatisez la création d'enregistrements DNS lors de la liaison des projets. Vous pouvez configurer le DNS manuellement chez votre fournisseur, mais vous devrez également mettre à jour la configuration du serveur manuellement.

## Tunnel

Exposez vos serveurs de manière sécurisée via Cloudflare Tunnel sans ouvrir de ports sur le pare-feu. Recommandé pour une sécurité renforcée.

## Backup

Stockez des backups chiffrés de vos applications déployées. Les backups sont automatiquement restaurés lors du déploiement sur un nouveau serveur.

## CI/CD

[GitHub](/fr/integrations/config/github) est requis pour les déploiements automatisés. Liez votre projet à un dépôt GitHub pour activer le push-to-deploy.

## Ajouter une intégration

1. Allez dans **Intégrations**
2. Cliquez sur **Ajouter une intégration**
3. Sélectionnez le fournisseur
4. Entrez vos identifiants API
5. Cliquez sur **Enregistrer**

Consultez les guides de configuration dans la barre latérale pour des instructions détaillées sur chaque fournisseur.
