---
title: GitHub
description: Konfigurieren Sie die GitHub-Integration für CI/CD.
---

Die GitHub-Integration ermöglicht automatisierte Deployments über GitHub Actions.

## Funktionen

- **CI/CD**: Automatisierte Push-to-Deploy-Workflows
- **Secrets**: Repository-Secrets für Deployments verwalten

## Fine-grained Personal Access Token erstellen

1. Gehen Sie zu [GitHub Fine-grained tokens](https://github.com/settings/personal-access-tokens)
2. Klicken Sie auf **Generate new token**
3. Geben Sie ihm einen Namen und legen Sie ein Ablaufdatum fest

### Repository-Zugriff

Wählen Sie **All repositories**, um Fadogen die Verwaltung aller Ihrer Repositories zu erlauben.

### Berechtigungen

Gehen Sie zu **Repository permissions** und setzen Sie:

| Berechtigung | Zugriff | Zweck |
|--------------|---------|-------|
| Actions | Read and write | GitHub Actions Workflows starten |
| Administration | Read and write | Repositories aus Fadogen erstellen |
| Contents | Read-only | Lokale Repos synchronisieren, wenn auf GitHub umbenannt |
| Metadata | Read-only | Erforderlich (standardmäßig aktiviert) |
| Secrets | Read and write | Deployment-Secrets speichern |

4. Klicken Sie auf **Generate token**
5. Kopieren Sie den Token

## Zu Fadogen hinzufügen

1. Gehen Sie zu **Integrationen**
2. Klicken Sie auf **Integration hinzufügen**
3. Wählen Sie **GitHub**
4. Fügen Sie Ihren Personal Access Token ein
5. Klicken Sie auf **Speichern**

## GitHub verwenden

### Automatische Secret-Verwaltung

Wenn Sie eine Site mit einem Server verknüpfen, erstellt Fadogen automatisch die erforderlichen Secrets in Ihrem Repository.

### Ein Deployment auslösen

Deployments können auf drei Arten ausgelöst werden:
- **Automatisch**: bei jedem Pull Request, der in `main` gemergt wird (Standard)
- **Aus der App**: Klicken Sie auf die **Deploy**-Schaltfläche in der Symbolleiste
- **Von GitHub**: Führen Sie den Workflow manuell über den Actions-Tab aus
