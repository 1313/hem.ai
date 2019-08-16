[![Build Status](https://travis-ci.com/1313/hemsmart.svg?branch=master)](https://travis-ci.com/1313/hemsmart)

# Introduktion

Hemsmart är ett automatiskt hjälpmedel för inhandling av livsmedel och sånt man behöver i hemmet. Den kan koppla upp sig mot diverse onlinematbutiker och lägga beställningar åt en automatiskt.

## Specifikation

### Algoritm

- Veckovisa beställningar
  - Specifikation
    - Input: Antal mål per vecka
    - Input: Budget veckovis
    - Input: Profil, Vegetariansk, Vegan osv...
    - Output: Ingredienslista som matchar given input
    - Output: Recept för antalet givna mål
  - Kriterier
    - Varierade rätter baserat på primär och sekundär receptingrediens
    - Optimera inköp av mängd
    - Hålla budget och matcha profil

### Datamodel

- Schema för inköp
- Receptbank
  - Receptinstruktioner
  - Referenser till ingredienser
- Ingrediensbank
  - Ingrediens id
  - Kopplingar till produkter i onlinebutiker
  - Uppdaterade priser

## UX/UI

### Instaadd

- Snabbnavigering för att lägga till ad hoc produkter inför veckoleverans
- Markera när någon kontinerligt använd produkt, tex toapapper behöver inhandlas igen

## Integrationer

- Onlineaffärer
  - Livsmedel
    - Coop Online
    - Mathem
    - Mat.se
    - Hemköp
    - Ica
    - Citygross
  - Husdjur
    - Vetzoo
- Internetbanker
  - Tink api
