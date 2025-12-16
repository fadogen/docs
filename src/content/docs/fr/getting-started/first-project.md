---
title: Premier projet
description: Créez votre premier projet avec Fadogen.
---

## Ajouter un dossier surveillé

1. Ouvrez Fadogen
2. Allez dans **Projets**
3. Cliquez sur l'icône **Gérer les dossiers** dans la barre d'outils
4. Ajoutez le dossier contenant vos projets (ex : `~/Developer`)

Fadogen détectera automatiquement tous les projets PHP dans ce dossier.

## Créer un nouveau projet

1. Cliquez sur l'icône **Nouveau projet** dans la barre d'outils
2. Sélectionnez **Laravel** ou **Symfony**
3. Choisissez l'emplacement et le nom du projet
4. Personnalisez votre stack (version PHP, base de données, etc.)
5. Cliquez sur **Créer** dans la barre d'outils

Fadogen va :
- Créer le projet localement avec Composer
- Installer les dépendances sélectionnées dans le formulaire
- Générer les [fichiers Docker](/fr/reference/docker/) et le [workflow GitHub Actions](/fr/deployment/github-actions/)

Votre projet est maintenant accessible à `https://nom-du-projet.localhost`.
