import { LANGUAGES } from '../i18n/home';

// The visible FAQ and the FAQPage JSON-LD use the same text, so they always match.
export type QA = { q: string; a: string };

const langs = LANGUAGES.join(', ');

export const FAQ: Record<'en' | 'de', QA[]> = {
  en: [
    { q: 'Is SpareForge free?', a: "Yes, the alpha is free. In-app purchases are planned for later in the game's life. The alpha has none." },
    { q: 'Is SpareForge released?', a: 'No. SpareForge is a free alpha in active development. Expect bugs, balance changes and the occasional save reset.' },
    { q: 'How do I get the alpha?', a: 'Join the Discord server, click "Become a tester" in #welcome or type /apply, and wait for staff to accept you. The SpareForge bot then sends you a personal itch.io key by direct message. Redeem it on itch.io and download the game, or install it with the itch app.' },
    { q: 'Why do I need a key from Discord?', a: 'The alpha runs with a small group of testers. Discord is where bugs are reported, builds are discussed and updates are announced, so the key comes from there.' },
    { q: 'I never got my key. What now?', a: 'Make sure you allow direct messages from server members, then ask the staff on Discord. Never post your key in a public channel.' },
    { q: 'Which platforms are supported?', a: 'Windows PC. The game is played with keyboard and mouse; controllers are not supported yet.' },
    { q: 'Can I play with friends?', a: 'Yes, in LAN co-op for up to four players on the same home network. Online co-op over Steam is planned, but not available yet.' },
    { q: 'Which languages does the game have?', a: `Twelve, switchable live in Options: ${langs}.` },
    { q: 'Will my characters carry over to new versions?', a: 'Normally yes. If a save reset ever becomes necessary during the alpha, it is announced in advance. Back up your saves to be safe.' },
    { q: 'When is the Steam release?', a: 'A Steam release is planned, but there is no date and no store page yet.' },
    { q: 'Who makes SpareForge?', a: 'One person, in the Godot engine: the code, the pixel art, the music and the sound.' },
  ],
  de: [
    { q: 'Ist SpareForge kostenlos?', a: 'Ja, die Alpha ist kostenlos. In-App-Käufe sind für später im Lebenszyklus des Spiels geplant. Die Alpha hat keine.' },
    { q: 'Ist SpareForge schon erschienen?', a: 'Nein. SpareForge ist eine kostenlose Alpha in aktiver Entwicklung. Rechne mit Fehlern, Balance-Änderungen und gelegentlich zurückgesetzten Spielständen.' },
    { q: 'Wie komme ich an die Alpha?', a: 'Tritt dem Discord-Server bei, klicke in #welcome auf „Tester werden“ oder tippe /apply und warte, bis das Team dich annimmt. Dann schickt dir der SpareForge-Bot einen persönlichen itch.io-Key per Direktnachricht. Löse ihn auf itch.io ein und lade das Spiel herunter oder installiere es mit der itch-App.' },
    { q: 'Warum brauche ich einen Key von Discord?', a: 'Die Alpha läuft mit einer kleinen Testergruppe. Auf Discord werden Fehler gemeldet, Builds besprochen und Updates angekündigt, deshalb kommt der Key von dort.' },
    { q: 'Mein Key ist nicht angekommen. Was nun?', a: 'Erlaube Direktnachrichten von Servermitgliedern und frag dann das Team auf Discord. Poste deinen Key nie in einem öffentlichen Kanal.' },
    { q: 'Welche Plattformen werden unterstützt?', a: 'Windows-PC. Gespielt wird mit Tastatur und Maus; Controller werden noch nicht unterstützt.' },
    { q: 'Kann ich mit Freunden spielen?', a: 'Ja, im LAN-Koop mit bis zu vier Spielern im selben Heimnetzwerk. Online-Koop über Steam ist geplant, aber noch nicht verfügbar.' },
    { q: 'Welche Sprachen hat das Spiel?', a: `Zwölf, live umschaltbar in den Optionen: ${langs}.` },
    { q: 'Bleiben meine Charaktere in neuen Versionen erhalten?', a: 'Normalerweise ja. Falls während der Alpha ein Zurücksetzen nötig wird, wird es vorher angekündigt. Sichere zur Sicherheit deine Spielstände.' },
    { q: 'Wann erscheint SpareForge auf Steam?', a: 'Ein Steam-Release ist geplant, aber es gibt noch keinen Termin und noch keine Shopseite.' },
    { q: 'Wer macht SpareForge?', a: 'Eine Person, in der Godot-Engine: Code, Pixel-Art, Musik und Sound.' },
  ],
};
