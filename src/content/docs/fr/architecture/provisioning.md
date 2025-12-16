---
title: Provisionnement
description: Comment Fadogen provisionne les serveurs avec Ansible.
---

Fadogen utilise Ansible pour provisionner automatiquement les serveurs VPS.

## Ansible autonome

Ansible et Python sont intégrés à Fadogen :
- Pas de Python système requis
- Pas d'installations pip
- Environnement totalement isolé

## Workflow de provisionnement

### Phase 1 : Connexion au serveur
1. Créer le VPS via l'API du fournisseur cloud, ou se connecter à un serveur personnalisé
2. Attendre l'attribution de l'adresse IP (si fournisseur cloud)
3. Attendre la disponibilité SSH

### Phase 2 : Configuration SSH (en root)
1. Créer l'utilisateur cible avec les permissions sudo
2. Déployer la clé publique SSH
3. Configurer sudo sans mot de passe

### Phase 3 : Provisionnement du serveur (en utilisateur cible)
1. Installer les packages Python (docker, jsondiff)
2. Sécuriser SSH (désactiver l'auth par mot de passe, désactiver le login root)
3. Configurer fail2ban pour la protection contre les attaques par force brute
4. Activer les mises à jour de sécurité automatiques
5. Configurer la synchronisation NTP
6. Configurer le pare-feu iptables
7. Installer Docker CE
8. Initialiser Docker Swarm
9. Déployer le reverse proxy Traefik

### Phase 4 : Cloudflare Tunnel (optionnel)
1. Installer le daemon cloudflared
2. Configurer le tunnel avec le token
3. Tester la connectivité du tunnel
4. Fermer le port SSH 22 (accès tunnel uniquement)

## Ce qui est installé

### Sécurité
- Durcissement SSH (authentification par clé uniquement)
- Protection fail2ban
- Mises à jour de sécurité automatiques
- Pare-feu iptables

### Plateforme de conteneurs
- Docker CE
- Docker Swarm (single-node)

### Reverse Proxy
- Traefik 3.x
- Découverte de services Docker Swarm

### Optionnel
- Cloudflare Tunnel pour l'accès privé au serveur

Les certificats SSL sont configurés par site via le challenge DNS-01 de Let's Encrypt lors du déploiement des projets.

## Logs

Les logs de provisionnement sont diffusés en temps réel dans l'interface.

## Dépannage

Le provisionnement peut échouer pour diverses raisons (problèmes fournisseur, coupure internet, etc.). La solution la plus simple est de supprimer le serveur et de recommencer.

Si le problème persiste, veuillez [créer une issue sur GitHub](https://github.com/fadogen/app/issues).
