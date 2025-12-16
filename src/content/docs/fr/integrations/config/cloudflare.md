---
title: Cloudflare
description: Configurer l'intégration Cloudflare pour le DNS, Tunnel et R2.
---

Cloudflare fournit la gestion DNS, les tunnels sécurisés et le stockage objet.

## Fonctionnalités

- **DNS** : Gérer les zones et enregistrements DNS
- **Tunnel** : Accès SSH sécurisé sans exposer de ports
- **R2** : Stockage objet pour les backups

## Obtenir votre Global API Key

:::caution[Global API Key requise]
Fadogen nécessite la Global API Key, pas un API Token. Les API Tokens retournent une erreur 403 lors du listing des zones — une [limitation connue](https://community.cloudflare.com/t/register-and-manage-domains-with-cloudflare-registrar-api/453793) (en anglais) de l'architecture Cloudflare.
:::

1. Allez sur le [Dashboard Cloudflare](https://dash.cloudflare.com/)
2. Allez dans **Profile** > **API Tokens**
3. Descendez jusqu'à **Global API Key**
4. Cliquez sur **View** et copiez la clé

## Ajouter à Fadogen

1. Allez dans **Intégrations**
2. Cliquez sur **Ajouter une intégration**
3. Sélectionnez **Cloudflare**
4. Entrez votre email Cloudflare et votre Global API Key
5. Cliquez sur **Enregistrer**

## Utiliser Cloudflare

### Gestion DNS

Vos zones DNS Cloudflare sont automatiquement disponibles lors de la liaison d'un site à un serveur.

:::note
Vos domaines doivent utiliser les serveurs de noms Cloudflare. Mettez à jour les serveurs de noms chez votre registraire de domaine pour pointer vers Cloudflare.
:::

### Cloudflare Tunnel

Créez des tunnels sécurisés pour accéder à vos serveurs via SSH sans exposer le port 22.

1. Déployez un site sur un serveur
2. Activez Cloudflare Tunnel
3. Accédez à votre serveur via le hostname du tunnel

#### SSH via Tunnel (externe)

Fadogen se connecte automatiquement aux tunnels. Pour vous connecter depuis un terminal externe, installez `cloudflared` :

```bash
brew install cloudflared
```

Connectez-vous à votre serveur :

```bash
ssh -o ProxyCommand='/opt/homebrew/bin/cloudflared access ssh --hostname %h' user@tunnel.example.com
```

### Stockage R2 (Backups)

Fadogen configure automatiquement R2 pour les backups :
- **Identifiants R2** : Créés automatiquement lors de l'ajout de l'intégration Cloudflare
- **Bucket R2** : Créé automatiquement (`fadogen-backups`) lorsque vous activez les backups pour un site

Lors de la liaison d'un site à un serveur, sélectionnez Cloudflare R2 comme destination de sauvegarde.
