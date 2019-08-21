[![Build Status](https://travis-ci.com/1313/hemsmart.svg?branch=master)](https://travis-ci.com/1313/hemsmart)
[![Coverage Status](https://coveralls.io/repos/github/1313/hemsmart/badge.svg?branch=master)](https://coveralls.io/github/1313/hemsmart?branch=master)
![GitHub package.json version](https://img.shields.io/github/package-json/v/1313/hemsmart)

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
    - Tid att laga
    - Allergier
    - Varierade rätter
    - Optimera inköp av mängd
    - Hålla budget och matcha profil
    - Livslängd på ingrediener (Decay value)

> Knapsack Branch and Bound approach
1. Select recipes based on tag profile
2. Take most valued recipes
3. If recipe is linked to neighbur decrease.

> Markov Chain approach
1. Greedy algo
2. markov model


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

## optimeringar
- prisjämförelse
- fylla ut budget rekomendation
- överraskaningsköp

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
  - Annat
    - Systembolaget 
- Internetbanker
  - Tink api
