window.LEARNING_DATA = {
  securityTasks: [
    {
      id: "q1",
      type: "Grundverständnis",
      question: "Erkläre den Titel «Hinter den Schlagzeilen» als journalistisches Programm. Was soll hinter der sichtbaren Nachricht erkennbar werden?",
      prompt: "Formuliere 5-7 Sätze. Beziehe mindestens eine konkrete Filmszene oder Beobachtung ein.",
      criteria: ["Titel gedeutet", "konkreter Filmbeleg", "Rechercheprozess erwähnt", "redaktionelle Auswahl erklärt"],
      keywords: ["recherche", "auswahl", "prüfung", "quelle", "redaktion", "beleg", "entscheidung", "öffentlichkeit"],
      horizon: "Eine starke Antwort zeigt: Schlagzeilen sind nicht einfach Fakten in Kurzform, sondern das Ergebnis von Recherche, Auswahl, Prüfung, Zuspitzung und Verantwortung. Hinter der Nachricht stehen Quellen, Interessen, redaktionelle Routinen und ethische Entscheidungen.",
      followUp: "Welche Stelle im Film eignet sich am besten, um diesen Prozess sichtbar zu machen? Notiere eine Zeitmarke."
    },
    {
      id: "q2",
      type: "Recherche",
      question: "Rekonstruiere eine Recherchekette aus dem Film: Von welchem Hinweis geht sie aus, welche Prüfbewegung folgt, und wann wäre eine Aussage veröffentlichungsreif?",
      prompt: "Arbeite in drei Schritten: Hinweis, Gegenprüfung, veröffentlichbare Aussage.",
      criteria: ["Hinweis benannt", "Gegenprüfung beschrieben", "unabhängige Quelle bedacht", "Grenze des Wissens markiert"],
      keywords: ["hinweis", "gegencheck", "unabhängig", "dokument", "interview", "stellungnahme", "gesichert", "unsicher"],
      horizon: "Professionelle Recherche macht aus einem Hinweis erst nach Gegenprüfung eine belastbare Aussage. Wichtig sind unabhängige Quellen, Dokumente oder Daten, die Konfrontation Betroffener und eine klare Trennung zwischen gesichertem Wissen und offener Vermutung.",
      followUp: "Welche zusätzliche Quelle würdest du suchen, um diese Recherche robuster zu machen?"
    },
    {
      id: "q3",
      type: "Quellenkritik",
      question: "Unterscheide an einem Beispiel aus dem Film zwischen Quelle, Beleg und Deutung.",
      prompt: "Schreibe drei kurze Abschnitte: Was ist die Quelle? Was belegt sie wirklich? Welche Deutung wäre vorsichtig oder problematisch?",
      criteria: ["Quelle präzise benannt", "Beleg begrenzt formuliert", "Deutung getrennt", "Überinterpretation vermieden"],
      keywords: ["quelle", "beleg", "deutung", "aussage", "kontext", "interesse", "perspektive", "prüfen"],
      horizon: "Eine Quelle liefert Material, aber sie belegt nie automatisch jede daraus abgeleitete Behauptung. Gute Analyse fragt: Wer spricht? In welchem Kontext? Was lässt sich daraus tatsächlich schließen, und wo beginnt Interpretation?",
      followUp: "Wo könnte der Film selbst eine Deutung nahelegen, die man kritisch gegenprüfen sollte?"
    },
    {
      id: "q4",
      type: "Medienethik",
      question: "Entwirf eine medienethische Abwägung: Wann darf eine Redaktion belastende Informationen veröffentlichen, obwohl Personen dadurch Schaden nehmen könnten?",
      prompt: "Begründe mit öffentlichem Interesse, Verhältnismäßigkeit, Schutz der Person und Möglichkeit zur Stellungnahme.",
      criteria: ["öffentliches Interesse geprüft", "Personenschutz berücksichtigt", "Verhältnismäßigkeit abgewogen", "Stellungnahme erwähnt"],
      keywords: ["öffentliches interesse", "privatsphäre", "verhältnismäßig", "stellungnahme", "schutz", "schaden", "fair", "personen"],
      horizon: "Eine überzeugende Abwägung trennt Neugier von öffentlichem Interesse. Sie fragt, ob die Information für das Verständnis eines relevanten Problems nötig ist, ob Betroffene fair gehört wurden und ob Details weggelassen werden können, ohne den Kern zu verfälschen.",
      followUp: "Formuliere eine alternative, schonendere Veröffentlichungsform für denselben Sachverhalt."
    },
    {
      id: "q5",
      type: "Medienwirkung",
      question: "Beurteile die demokratische Funktion von Medien im Film. Sind Medien hier eher Kontrollinstanz, Orientierungsangebot, Forum oder Machtfaktor?",
      prompt: "Wähle nicht nur einen Begriff. Gewichte mindestens zwei Funktionen und zeige die Spannung zwischen ihnen.",
      criteria: ["mindestens zwei Medienfunktionen", "Gewichtung vorgenommen", "Spannung beschrieben", "Filmbezug hergestellt"],
      keywords: ["kontrolle", "orientierung", "forum", "macht", "öffentlichkeit", "demokratie", "kritik", "vertrauen"],
      horizon: "Medien informieren nicht nur. Sie schaffen Öffentlichkeit, kontrollieren Macht, geben Orientierung und werden selbst zu Akteuren mit Einfluss. Eine starke Antwort erkennt diese Doppelrolle: Medien beobachten Macht und üben zugleich selbst Macht aus.",
      followUp: "Welche Medienfunktion erscheint dir heute besonders gefährdet? Begründe mit einem aktuellen Beispiel."
    },
    {
      id: "q6",
      type: "Darstellung",
      question: "Analysiere eine Minute Filmgestaltung: Wie lenken Bild, Ton, Schnitt und Sprache deine Deutung journalistischer Arbeit?",
      prompt: "Nutze eine konkrete Zeitmarke und beschreibe Wirkung, nicht nur Inhalt.",
      criteria: ["Zeitmarke genannt", "Bild analysiert", "Ton oder Schnitt analysiert", "Wirkung auf Deutung erklärt"],
      keywords: ["bild", "ton", "schnitt", "sprache", "wirkung", "montage", "perspektive", "deutung"],
      horizon: "Filmische Mittel sind keine bloße Verpackung. Bildausschnitt, Reihenfolge, Musik, Pausen, Off-Kommentar und Schnittgeschwindigkeit entscheiden mit, ob Journalismus ruhig, hektisch, glaubwürdig, mächtig oder verletzlich erscheint.",
      followUp: "Wie könnte dieselbe Szene anders montiert werden, um eine andere Wirkung zu erzeugen?"
    },
    {
      id: "q7",
      type: "Fehlerkultur",
      question: "Entwickle eine professionelle Fehlerkultur für eine Redaktion: Was passiert, wenn nach Veröffentlichung ein relevanter Fehler entdeckt wird?",
      prompt: "Beschreibe konkrete Schritte von Prüfung über Korrektur bis Vertrauensarbeit.",
      criteria: ["Fehlerprüfung", "transparente Korrektur", "Verantwortung übernommen", "Lernschritt benannt"],
      keywords: ["korrektur", "transparent", "fehler", "vertrauen", "prüfung", "verantwortung", "richtigstellung", "lernen"],
      horizon: "Glaubwürdigkeit entsteht nicht dadurch, dass Fehler unsichtbar bleiben. Professionelle Redaktionen prüfen Kritik, korrigieren nachvollziehbar, erklären Änderungen und verbessern Abläufe, damit derselbe Fehler nicht wiederkehrt.",
      followUp: "Sollten Korrekturen prominent sichtbar sein oder am Ende des Artikels stehen? Begründe."
    },
    {
      id: "q8",
      type: "Digitale Öffentlichkeit",
      question: "Diskutiere, wie digitale Plattformen journalistische Qualität zugleich erleichtern und gefährden.",
      prompt: "Arbeite mit einer Doppelthese: ein Gewinn, ein Risiko, eine Konsequenz für Rechercheethik.",
      criteria: ["Gewinn digitaler Öffentlichkeit", "Risiko benannt", "Konsequenz für Recherche", "eigene Position"],
      keywords: ["tempo", "reichweite", "plattform", "aufmerksamkeit", "feedback", "desinformation", "prüfung", "algorithmus"],
      horizon: "Digitale Plattformen erleichtern Zugang, Quellenkontakt und Reichweite. Gleichzeitig erhöhen sie Tempo, Konkurrenzdruck, Emotionalisierung und Fehlerfolgen. Daraus folgt nicht weniger, sondern mehr Bedarf an Transparenz, Gegenprüfung und redaktioneller Verantwortung.",
      followUp: "Welche Regel würdest du einer Redaktion für Social-Media-Veröffentlichungen geben?"
    }
  ],
  methods: [
    "Hinweis oder Frage formulieren",
    "Vorwissen und Begriffe klären",
    "mögliche Interessen der Quellen prüfen",
    "Dokumente, Daten und Augenzeugen suchen",
    "unabhängige Gegenquellen einholen",
    "Betroffene mit Vorwürfen konfrontieren",
    "Aussage, Beleg und Unsicherheit sauber trennen",
    "Veröffentlichung ethisch und rechtlich abwägen"
  ],
  sources: [
    {
      title: "Anonymer Social-Media-Post",
      strength: 35,
      verdict: "Hinweis, aber noch kein Beleg",
      note: "Kann eine Spur eröffnen. Ohne Urheber, Kontext und Gegenprüfung ist die Quelle schwach."
    },
    {
      title: "Originaldokument mit Datum, Herkunft und überprüfbarer Signatur",
      strength: 92,
      verdict: "starker Beleg",
      note: "Sehr belastbar, wenn Echtheit, Kontext und Vollständigkeit geprüft werden."
    },
    {
      title: "Interview mit direkt betroffener Person",
      strength: 70,
      verdict: "wichtige Perspektive",
      note: "Nähe zum Geschehen ist wertvoll, aber Erinnerung, Interesse und Emotion müssen eingeordnet werden."
    },
    {
      title: "Pressemitteilung einer Organisation",
      strength: 48,
      verdict: "interessengeleitete Quelle",
      note: "Nützlich für Positionen und Faktenbehauptungen, aber nicht neutral. Gegencheck nötig."
    },
    {
      title: "Mehrere unabhängige Fachpersonen mit unterschiedlichen Perspektiven",
      strength: 84,
      verdict: "starke Einordnung",
      note: "Besonders hilfreich, wenn die Expertise relevant ist und die Einschätzungen nicht voneinander abgeschrieben sind."
    }
  ],
  dilemmas: [
    {
      id: "d1",
      title: "Tempo gegen Genauigkeit",
      scenario: "Eine Nachricht verbreitet sich schnell. Ihr habt zwei Hinweise, aber noch keine zweite unabhängige Bestätigung.",
      left: "Sofort publizieren",
      right: "Weiter prüfen",
      advice: "Je schwerer der Vorwurf, desto höher die Prüfpflicht. Möglich ist eine transparente Zwischenform: Was ist gesichert, was noch nicht?"
    },
    {
      id: "d2",
      title: "Öffentliches Interesse gegen Privatsphäre",
      scenario: "Eine Person steht im Zentrum einer Geschichte. Die privaten Details erhöhen die Aufmerksamkeit, sind aber nicht alle für den Kern nötig.",
      left: "Details zeigen",
      right: "Person schützen",
      advice: "Veröffentliche nur, was für das Verständnis der öffentlichen Frage nötig ist. Neugier ist nicht dasselbe wie öffentliches Interesse."
    },
    {
      id: "d3",
      title: "Nähe gegen Distanz",
      scenario: "Eine Quelle wirkt sympathisch und öffnet euch Türen. Gleichzeitig verfolgt sie eigene Interessen.",
      left: "Vertrauen",
      right: "Distanz halten",
      advice: "Gute Recherche braucht Beziehung und Skepsis zugleich. Nähe darf nicht dazu führen, dass Gegenperspektiven fehlen."
    },
    {
      id: "d4",
      title: "Starke Bilder gegen faire Darstellung",
      scenario: "Eine dramatische Szene macht den Beitrag eindrücklich, könnte aber den Gesamtsachverhalt verzerren.",
      left: "Dramaturgie nutzen",
      right: "Kontext ergänzen",
      advice: "Starke Bilder sind legitim, wenn sie kontextualisiert werden. Ohne Kontext können sie aus Information Manipulation machen."
    }
  ],
  seminarQuestions: [
    "Welche Vorstellung von gutem Journalismus vermittelt der Film?",
    "Wo zeigt der Film journalistische Macht, wo journalistische Begrenztheit?",
    "Welche Rolle spielen Zweifel, Nichtwissen und Korrektur im Rechercheprozess?",
    "Wann wird eine Geschichte gesellschaftlich relevant und wann bleibt sie bloße Aufmerksamkeit?",
    "Wie unterscheiden sich Wahrheit, Genauigkeit, Ausgewogenheit und Neutralität?",
    "Welche Verantwortung hat das Publikum für die Qualität öffentlicher Debatten?",
    "Welche Medienfunktion ist heute am meisten gefährdet: Information, Kritik, Kontrolle, Bildung oder Forum?",
    "Wie müsste Journalismus arbeiten, damit junge Menschen ihm eher vertrauen?"
  ],
  productionTasks: [
    "Erstellt ein Storyboard für eine zweiminütige Mini-Reportage über ein Thema an eurer Schule.",
    "Entwickelt eine Quellenliste mit mindestens fünf Quellenarten: Person, Dokument, Daten, Beobachtung, Expertin oder Experte.",
    "Schreibt eine faire Interviewanfrage an eine Person, die von eurer Recherche betroffen wäre.",
    "Formuliert drei Überschriften zur gleichen Geschichte: sachlich, zugespitzt, problematisch. Begründet die Unterschiede.",
    "Produziert einen 45-Sekunden-Audiobeitrag, der eine Aussage, einen Beleg und eine offene Frage klar trennt."
  ],
  debateRoles: [
    {
      role: "Chefredaktion",
      goal: "Publizierbarkeit, Verantwortung und Profil der Redaktion sichern."
    },
    {
      role: "Rechercheteam",
      goal: "Belege, Gegenchecks und offene Unsicherheiten transparent machen."
    },
    {
      role: "Betroffene Person",
      goal: "Fairness, Kontext und Schutz vor unnötiger Bloßstellung einfordern."
    },
    {
      role: "Publikum",
      goal: "Verständlichkeit, Relevanz und Vertrauen prüfen."
    },
    {
      role: "Medienkritik",
      goal: "Macht, Framing, Auslassungen und ökonomische Interessen sichtbar machen."
    }
  ]
};
