# 🌱 Origamando – Regole di struttura contenuti

Questo documento definisce le regole interne per la gestione dei contenuti del sito Origamando.

Non è pubblico.

---

# 🧠 Sistema shortcode

Il sito utilizza shortcode per mantenere coerenza e riusabilità.

---

## 🟢 org → Organizzazioni / Enti

Usato per soggetti esterni al progetto.

### Quando usarlo
- aziende
- ONG
- partner
- enti (es. ZeroCO2)

### Esempio
{{< org "https://www.zeroco2.eco" "ZeroCO2" >}}

### Regola mentale
“Chi è un soggetto indipendente dal progetto”

---

## 🟠 event → Eventi

Usato per eventi a cui il progetto ha partecipato o che fanno parte della narrazione.

### Quando usarlo
- fiere
- laboratori
- eventi culturali
- collaborazioni pubbliche

### Esempio
{{< event "https://sito-evento.com" "La Sicilia Abbraccia il Giappone 2026" >}}

### Regola mentale
“Quando e dove è successo qualcosa rilevante”

---

## 🔵 Link normale

Usato per informazioni non narrative.

### Quando usarlo
- fonti ufficiali
- link tecnici
- footer
- trasparenza

### Esempio
Sito ufficiale: https://www.zeroco2.eco

### Regola mentale
“Solo informazione, non parte della storia”

---

# ⚖️ Regola decisionale rapida

Quando scrivi un contenuto chiediti:

1. È un soggetto? → `org`
2. È un evento? → `event`
3. È solo informazione? → link normale

---

# 🌱 Regole ZeroCO2

- ZeroCO2 NON ha uno shortcode dedicato
- viene gestito tramite `org`

---

# 🌍 Regole contenuti forestali

- ogni albero piantato deve essere legato a un evento o fonte
- i dati strutturati (alberi, percentuali, fondi) devono essere centralizzati quando possibile
- la narrazione deve restare separata dai dati tecnici

---

# 📁 Contenuti privati

I contenuti personali o di lavoro non pubblici devono:

- essere fuori da `/content` oppure
- usare `draft: true`

---

# 🧭 Filosofia del progetto

Origamando Forest è:
- un laboratorio creativo
- un sistema narrativo
- un progetto con impatto reale

La struttura dei contenuti deve sempre mantenere:
- chiarezza
- riusabilità
- separazione tra dati e racconto