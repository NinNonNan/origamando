---
title: "Project #001 — Portable Plant Server"
date: 2026-05-20
draft: false
tags: ["raspberry-pi", "server", "ecology", "prototype"]
---

# Portable Plant Server

## Concept

Creare un piccolo server portatile ospitato all’interno di un vaso contenente una vera pianta.

L’idea è trasformare il server in un oggetto vivo e narrativo:
non solo un dispositivo tecnico, ma un ecosistema in miniatura che rappresenta il legame tra tecnologia, natura e sperimentazione.

---

## Obiettivo

Realizzare un prototipo da portare a fiere, laboratori ed eventi.

Il sistema deve:

- ospitare il sito Origamando localmente
- funzionare come hotspot WiFi autonomo
- essere completamente integrato nel vaso
- contenere una vera pianta
- essere alimentabile a batteria
- essere espandibile in futuro con pannello solare

---

## Hardware principale

### Raspberry Pi

Utilizzo di un vecchio Raspberry Pi 1 come server locale.

Funzioni previste:

- server web statico
- hotspot WiFi locale
- pagina di stato della pianta
- hosting del sito Origamando

---

### Adattatore WiFi USB

Necessario un dongle WiFi USB compatibile Linux/Raspberry Pi.

Preferenza per modelli:
- RTL8188
- Realtek compatibili Linux
- basso consumo energetico

---

### Alimentazione

Prima versione:

- powerbank USB interna al vaso

Versione futura:

- pannello solare portatile
- circuito di ricarica automatico

---

## Struttura fisica

### Contenitore

Preferenza per un vaso/contenitore:

- trasparente
- in plastica
- abbastanza grande da ospitare:
  - Raspberry Pi
  - batteria
  - cablaggio
  - sensori
  - pianta

L’effetto desiderato è quello di un piccolo ecosistema tecnologico visibile dall’esterno.

---

## Pianta

Preferenza per una pianta grassa o comunque resistente.

Motivi:

- bassa manutenzione
- resistenza al caldo
- resistenza agli spostamenti
- compatibilità con ambienti interni da fiera

---

## Sensori previsti

Possibili sensori collegati al Raspberry:

- umidità del terreno
- temperatura
- luminosità
- stato generale del sistema

---

## Funzioni software

### Hotspot locale

Il Raspberry crea una rete WiFi locale.

Visitando l’indirizzo locale del server sarà possibile accedere a:

- sito Origamando
- stato della pianta
- esperimenti
- dashboard del sistema

---

### Pagina “Plant Status”

Possibile sezione dedicata:

- livello umidità
- temperatura
- stato sensori
- uptime server
- stato energia

Ispirazione:
smart pots / terrari interattivi / ecosistemi digitali.

---

## Filosofia del progetto

Il sistema rappresenta l’unione tra:

- ecologia
- tecnologia
- narrazione
- sperimentazione

Il server non viene nascosto:
diventa parte visibile dell’esperimento.

---

## Evoluzioni future

Possibili upgrade:

- pannello solare
- illuminazione LED soft
- display e-ink
- sensori avanzati
- dashboard live
- sistema di boot narrativo
- integrazione con gli esperimenti del sito

---

## Nome temporaneo

- Plant Server
- Forest Node
- Origamando Seed Core
- Botanical Server Unit