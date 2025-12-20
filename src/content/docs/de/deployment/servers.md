---
title: Server
description: Erstellen und verwalten Sie VPS-Server mit Fadogen.
---

Fadogen kann VPS-Server bei verschiedenen Cloud-Anbietern bereitstellen und verwalten.

## Unterstützte Anbieter

- DigitalOcean
- Hetzner
- Vultr
- Linode

## Server erstellen

### Von einem Cloud-Anbieter

1. Gehen Sie zu **Server**
2. Klicken Sie auf **Neuer Server**
3. Wählen Sie einen Cloud-Anbieter
4. Konfigurieren Sie den Server (Region, Größe, etc.)
5. Aktivieren Sie optional **Cloudflare Tunnel** (erfordert [Cloudflare-Integration](/de/integrations/config/cloudflare))
6. Klicken Sie auf **Erstellen**

Fadogen erstellt den Server über die Anbieter-API, wartet bis er bereit ist und provisioniert ihn.

### Benutzerdefinierter Server

Für Server, die manuell im Dashboard eines Anbieters erstellt wurden, oder selbst gehostete Server (Heimlabor, dedizierter Server, etc.):

1. Gehen Sie zu **Server**
2. Klicken Sie auf **Neuer Server**
3. Wählen Sie **Benutzerdefiniert**
4. Geben Sie SSH-Anmeldedaten an:
   - Host und Benutzer
   - Authentifizierung: Passwort oder SSH-Schlüssel (automatische Erkennung aus `~/.ssh` oder privaten Schlüsselinhalt einfügen)
5. Aktivieren Sie optional **Cloudflare Tunnel** (erfordert [Cloudflare-Integration](/de/integrations/config/cloudflare))
6. Klicken Sie auf **Erstellen**

:::note
Der Server sollte eine frische Installation ohne vorherige Konfiguration sein.
:::

:::tip
Verwenden Sie eine IP-Adresse oder einen Standard-DNS-Hostnamen anstelle eines mDNS-Hostnamens (z.B. `meinserver.local`). mDNS würde das Öffnen des UDP-Ports 5353 erfordern, was die Firewall-Konfiguration verkompliziert.
:::

## Provisionierung

Ein in der App eingebettetes Ansible-Playbook konfiguriert den Server automatisch.

:::caution
Schließen Sie die App nicht, während die Provisionierung läuft. Dieser Vorgang dauert 5-10 Minuten.
:::

:::note
Die Provisionierung kann aus verschiedenen Gründen fehlschlagen (Anbieterprobleme, Internetausfall, etc.). Die einfachste Lösung ist, den Server zu löschen und neu zu beginnen. Fadogen löscht auch den Server beim Anbieter, aber überprüfen Sie im Dashboard des Anbieters, ob die Löschung erfolgreich war, um unerwartete Kosten zu vermeiden. Wenn das Problem weiterhin besteht, erstellen Sie bitte [ein Issue auf GitHub](https://github.com/fadogen/app/issues).
:::

Die Provisionierung konfiguriert:
- Firewall (nur notwendige Ports, oder keine bei Verwendung von Cloudflare Tunnel)
- fail2ban (Intrusion Prevention)
- Docker Swarm
- Traefik (Reverse Proxy mit automatischem SSL)

## SSH-Schlüssel

Fadogen scannt automatisch Ihr `~/.ssh`-Verzeichnis nach verfügbaren Schlüsseln. Wenn kein Schlüssel existiert, wird automatisch einer erstellt.
