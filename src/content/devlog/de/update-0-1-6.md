---
title: "Devlog #3: Update 0.1.6 – Zähere Krieger, Auto-Loot und klügere Monster"
date: 2026-10-11
lang: de
version: "0.1.6"
summary: "Zähere Krieger und Vorkämpfer, Auto-Loot, klügere Monster, Rückkauf und leuchtende verfeinerte Waffen."
---

Hallo zusammen!

Update 0.1.6 ist da. Diesmal geht es darum, wie sich das Spiel *anfühlt*: Krieger und Vorhut sind jetzt echte Frontkämpfer, die Beute sammelt sich auf Wunsch von selbst ein, Shops und Stat-Buttons sparen dir viele Klicks, Monster bleiben nicht mehr an Felsen hängen, verfeinerte Waffen leuchten, und ein paar lästige Fehler sind weg.

## Tank-Überarbeitung für Krieger und Vorhut

Die beiden Nahkampf-Tank-Jobs spielen sich jetzt wirklich wie Tanks.

- **Mehr HP:** Das HP-Wachstum des Kriegers steigt von 1,8 auf 2,5, die Vorhut kommt auf 3,2.
- **Angeborene Verteidigung:** Beide Jobs bekommen mit jedem Basislevel DEF (Krieger +0,2, Vorhut +0,3 pro Level).
- **Fertigkeiten:**

| Fertigkeit | Vorher | Jetzt |
|---|---|---|
| Blade Discipline | +4 ATK pro Level | +6 ATK pro Level |
| Iron Constitution | +8 Max-HP pro Level | +30 Max-HP und +2 DEF pro Level |
| Crushing Blow | 130 % – 400 % ATK | 160 % – 430 % ATK |
| Rending Thrust | 150 % ATK, +30 % pro Level | 180 % ATK, +30 % pro Level |
| Cinder Burst | 140 % – 320 % ATK | 170 % – 350 % ATK |
| Lance Doctrine (Vorhut) | +5 ATK pro Level | +8 ATK pro Level |
| Valor Oath (Vorhut) | DEF 5 – 25 | DEF 10 – 50 |

## Auto-Loot

Mit **V** schaltest du Auto-Loot ein und aus. Solange es an ist, hebt dein Charakter jede Beute in Reichweite von selbst auf – Schluss mit Leertaste hämmern nach dem Kampf. Die Einstellung bleibt zwischen den Sitzungen gespeichert.

## Klügere Monster

Verfolgende Monster **laufen jetzt um Hindernisse herum** (Mauern, Felsen und so weiter), statt dagegen zu drücken. Auf offenem Gelände ändert sich nichts, dort bleibt die einfache direkte Verfolgung.

## Weniger Klicken

- **Gedrückt halten für Stat-Punkte:** Halte im Statusfenster die **+**-Taste gedrückt, und es verteilt weiter Punkte.
- **Shop-Button „Max“:** Kaufe so viel, wie deine Kronen hergeben, oder verkaufe einen ganzen Stapel mit einem Klick.
- **Pet-Reiter:** Mit ausgerüstetem Sammel-Pet hat das Inventar einen neuen **Pet**-Reiter, der die Tasche deines Pets öffnet und schließt.
- **Zurückkaufen:** Jeder Shop hat jetzt den Reiter **Buy Back**. Aus Versehen etwas verkauft? Deine letzten 20 Verkäufe kaufst du zum selben Preis zurück, Ausrüstung kommt mit Verfeinerung, Karten und Haltbarkeit genau so zurück, wie sie war.
- **Ein Gespräch, eine Quest:** Nimmst du eine Quest an, schließt sich das Fenster, statt dir sofort die nächste anzubieten. Was du angenommen hast, steht im Nachrichtenlog. Für die nächste Quest sprichst du den NPC einfach noch einmal an.

## Verfeinerte Waffen und Schilde leuchten

Deine Verfeinerung sieht man jetzt auch an deinem Charakter:

- **+3:** ein leichter, heller Schimmer
- **+5:** ein deutlicher bläulicher Lichtsaum
- **+7:** ein goldener Saum mit einem Lichtstreifen, der über die Klinge wandert
- **+10:** das „Excellent“-Leuchten – wechselnde Regenbogenfarben, schneller Glanz und Funkeln

Im Koop sehen deine Mitspieler das Leuchten natürlich auch.

## Ausrüstung nutzt sich langsamer ab

Die Haltbarkeit sank zu schnell, deshalb ist der Verschleiß jetzt fünfmal niedriger: Waffen verlieren 0,12 % pro Treffer statt 0,6 %, Rüstungen 0,04 % pro erlittenem Treffer statt 0,2 %. Du brauchst den Reparaturservice des Schmieds deutlich seltener.

## Fehlerbehebungen

- **Kein Schaden mehr nach dem Teleport:** Wer verfolgt wurde und sich in die Stadt teleportierte, bekam manchmal weiter Schaden – vor allem im Koop, wo verlassene Karten im Hintergrund weiterlaufen. Monster greifen jetzt nur noch Spieler auf ihrer eigenen Karte an, und nach jedem Kartenwechsel bist du 1,5 Sekunden lang vor Treffern geschützt.
- **Sammel-Pets in der Gruppe:** Dein Pet hob auch Beute auf, die für andere Gruppenmitglieder reserviert war. Jetzt sammelt es nur, was dir gehört oder niemandem mehr gehört.

## Dein Feedback

Fühlen sich Krieger und Vorhut jetzt richtig an, oder sind sie zu zäh? Sammelt Auto-Loot zu viel ein? Sag es mir auf [Discord](https://discord.gg/wkMzgF4yV9), hier in den Kommentaren oder auf **spareforge.net**.

SpareForge ist weiterhin in der Alpha, also rechne mit Fehlern und Balance-Änderungen – und sichere bitte deine Spielstände.

Viel Erfolg bei der Jagd!
