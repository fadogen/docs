---
title: Provisionierung
description: Wie Fadogen Server mit Ansible provisioniert.
---

Fadogen verwendet Ansible, um VPS-Server automatisch zu provisionieren.

## Eigenständiges Ansible

Ansible und Python sind in Fadogen gebündelt:
- Kein System-Python erforderlich
- Keine pip-Installationen
- Vollständig isolierte Umgebung

## Provisionierungs-Workflow

### Phase 1: Server-Verbindung
1. VPS über Cloud-Anbieter-API erstellen oder mit einem benutzerdefinierten Server verbinden
2. Auf IP-Adresszuweisung warten (bei Cloud-Anbieter)
3. Auf SSH-Verfügbarkeit warten

### Phase 2: SSH-Einrichtung (als root)
1. Zielbenutzer mit sudo-Berechtigungen erstellen
2. SSH-öffentlichen Schlüssel deployen
3. Passwortloses sudo konfigurieren

### Phase 3: Server-Provisionierung (als Zielbenutzer)
1. Python-Pakete installieren (docker, jsondiff)
2. SSH härten (Passwort-Auth deaktivieren, root-Login deaktivieren)
3. fail2ban für Brute-Force-Schutz konfigurieren
4. Automatische Sicherheitsupdates aktivieren
5. NTP-Zeitsynchronisation konfigurieren
6. iptables-Firewall einrichten
7. Docker CE installieren
8. Docker Swarm initialisieren
9. Traefik Reverse Proxy deployen

### Phase 4: Cloudflare Tunnel (Optional)
1. cloudflared-Daemon installieren
2. Tunnel mit Token konfigurieren
3. Tunnel-Konnektivität testen
4. SSH-Port 22 schließen (nur Tunnel-Zugang)

## Was installiert wird

### Sicherheit
- SSH-Härtung (nur schlüsselbasierte Auth)
- fail2ban-Schutz
- Automatische Sicherheitsupdates
- iptables-Firewall

### Container-Plattform
- Docker CE
- Docker Swarm (einzelner Knoten)

### Reverse Proxy
- Traefik 3.x
- Docker Swarm Service Discovery

### Optional
- Cloudflare Tunnel für privaten Serverzugriff

SSL-Zertifikate werden pro Site über Let's Encrypt DNS-01-Challenge beim Deployen von Projekten konfiguriert.

## Logs

Provisionierungs-Logs werden in Echtzeit an die Benutzeroberfläche gestreamt.

## Fehlerbehebung

Die Provisionierung kann aus verschiedenen Gründen fehlschlagen (Anbieterprobleme, Internetausfall, etc.). Die einfachste Lösung ist, den Server zu löschen und neu zu beginnen.

Wenn das Problem weiterhin besteht, erstellen Sie bitte [ein Issue auf GitHub](https://github.com/fadogen/app/issues).
