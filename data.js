window.LEARNING_DATA = {
  quiz: [
    {
      id: "q1",
      type: "Grundverständnis",
      question: "Was meint der Titel «Hinter den Schlagzeilen» am treffendsten?",
      options: [
        "Schlagzeilen sind nur der sichtbare Endpunkt eines längeren Recherche- und Auswahlprozesses.",
        "Schlagzeilen entstehen vor allem, damit möglichst viele Menschen klicken.",
        "Die wichtigste journalistische Arbeit besteht darin, eine pointierte Überschrift zu formulieren.",
        "Gute Medien vermeiden jede Zuspitzung vollständig."
      ],
      answer: 0,
      feedback: [
        "Genau. Der Film lädt dazu ein, nicht nur das fertige Produkt zu sehen, sondern Arbeitsschritte, Entscheidungen und Verantwortung dahinter.",
        "Klicklogik kann eine Rolle spielen, erklärt aber nicht das Ganze. Recherche, Prüfung, Auswahl und Verantwortung sind zentraler.",
        "Die Überschrift ist wichtig, aber sie steht am Ende eines Prozesses, nicht an seinem Anfang.",
        "Zuspitzung ist nicht grundsätzlich falsch. Entscheidend ist, ob sie korrekt, fair und nicht irreführend ist."
      ],
      followUp: "Suche im Film eine Stelle, an der sichtbar wird, dass eine veröffentlichte Nachricht vorher ausgewählt, geprüft oder gewichtet wurde."
    },
    {
      id: "q2",
      type: "Recherche",
      question: "Welche Handlung ist bei einer heiklen Recherche am ehesten ein Zeichen professioneller Sorgfalt?",
      options: [
        "Eine einzelne plausible Quelle verwenden, wenn sie gut klingt.",
        "Mehrere voneinander unabhängige Quellen prüfen und Betroffenen Gelegenheit zur Stellungnahme geben.",
        "Mit der Veröffentlichung warten, bis alle Beteiligten völlig einverstanden sind.",
        "Die emotional stärkste Aussage wählen, weil sie Aufmerksamkeit erzeugt."
      ],
      answer: 1,
      feedback: [
        "Plausibilität genügt nicht. Gerade gut klingende Geschichten brauchen Gegenprüfung.",
        "Richtig. Unabhängigkeit, Gegencheck und Stellungnahme schützen vor Fehlern und unfairer Darstellung.",
        "Einverständnis aller Betroffenen ist nicht immer erreichbar. Entscheidend ist faire, sorgfältige und begründbare Arbeit.",
        "Emotion kann erzählen helfen, ersetzt aber keine Prüfung und kann manipulativ werden."
      ],
      followUp: "Welche Personen oder Dokumente müssten in einer Recherche aus dem Film zusätzlich befragt oder geprüft werden?"
    },
    {
      id: "q3",
      type: "Quellenkritik",
      question: "Was ist der wichtigste Unterschied zwischen Quelle und Beleg?",
      options: [
        "Eine Quelle ist immer objektiv, ein Beleg immer subjektiv.",
        "Eine Quelle liefert Material; ein Beleg stützt eine konkrete Aussage nachvollziehbar.",
        "Ein Beleg ist nur dann gültig, wenn er aus Social Media stammt.",
        "Quelle und Beleg bedeuten im Journalismus dasselbe."
      ],
      answer: 1,
      feedback: [
        "Keine Quelle ist automatisch objektiv. Auch Dokumente, Daten oder Expertinnen müssen eingeordnet werden.",
        "Ja. Aus Quellen werden erst durch genaue Zuordnung, Kontext und Prüfung belastbare Belege.",
        "Social Media kann ein Hinweis oder Material sein, ist aber nicht automatisch belastbar.",
        "Die Begriffe hängen zusammen, sind aber nicht identisch."
      ],
      followUp: "Formuliere zu einer Filmszene: Welche Quelle liegt vor, und welche Aussage kann sie wirklich belegen?"
    },
    {
      id: "q4",
      type: "Medienethik",
      question: "Wann ist eine Veröffentlichung trotz möglicher Belastung für Einzelpersonen eher gerechtfertigt?",
      options: [
        "Wenn die Geschichte sehr unterhaltsam ist.",
        "Wenn ein erhebliches öffentliches Interesse besteht und die Darstellung verhältnismäßig bleibt.",
        "Wenn andere Medien wahrscheinlich ebenfalls darüber berichten.",
        "Wenn die betroffene Person nicht erreichbar war."
      ],
      answer: 1,
      feedback: [
        "Unterhaltung allein rechtfertigt keinen Eingriff in Persönlichkeitsrechte.",
        "Richtig. Öffentliches Interesse, Verhältnismäßigkeit, Wahrheitsgehalt und Fairness müssen zusammen gedacht werden.",
        "Das Verhalten anderer Medien ersetzt keine eigene ethische Prüfung.",
        "Nicht-Erreichbarkeit kann vorkommen, macht eine Veröffentlichung aber nicht automatisch fair."
      ],
      followUp: "Nenne eine Szene oder Situation, in der Schutz von Personen und Informationsinteresse miteinander kollidieren könnten."
    },
    {
      id: "q5",
      type: "Medienwirkung",
      question: "Warum sind Medien für demokratische Gesellschaften mehr als Informationslieferanten?",
      options: [
        "Sie entscheiden allein, was politisch richtig ist.",
        "Sie schaffen Öffentlichkeit, kontrollieren Macht, ordnen Konflikte und ermöglichen gemeinsame Debatten.",
        "Sie ersetzen Gerichte, Parlamente und Schulen.",
        "Sie sollen vor allem neutrale Unterhaltung ohne gesellschaftliche Wirkung liefern."
      ],
      answer: 1,
      feedback: [
        "Medien sollen nicht allein entscheiden, was richtig ist. Sie sollen informieren, prüfen, einordnen und Kritik ermöglichen.",
        "Genau. Medien strukturieren Öffentlichkeit und machen Macht, Interessen und Konflikte sichtbar.",
        "Medien ersetzen Institutionen nicht, können sie aber beobachten und kritisieren.",
        "Auch Unterhaltung kann wirken. Journalismus hat darüber hinaus eine öffentliche Aufgabe."
      ],
      followUp: "Welche Funktion der Medien wird im Film besonders stark sichtbar: Information, Kritik, Kontrolle, Orientierung oder Forum?"
    },
    {
      id: "q6",
      type: "Darstellung",
      question: "Welche Frage hilft am besten, journalistische Inszenierung kritisch zu analysieren?",
      options: [
        "Wirkt die Szene teuer produziert?",
        "Welche Auswahl von Bildern, Tönen und Stimmen lenkt meine Deutung?",
        "Sind alle Aussagen im gleichen Tempo gesprochen?",
        "Gefällt mir die Moderatorin oder der Moderator?"
      ],
      answer: 1,
      feedback: [
        "Produktionsqualität kann Wirkung haben, beantwortet aber nicht die zentrale Analysefrage.",
        "Richtig. Journalismus zeigt nie alles. Auswahl und Montage prägen Bedeutung.",
        "Tempo kann eine Rolle spielen, ist aber nur ein Detail.",
        "Sympathie ist eine Reaktion, aber keine tragfähige Analyse."
      ],
      followUp: "Wähle eine Filmminute und beschreibe, wie Bild, Ton, Schnitt und Sprache deine Wahrnehmung steuern."
    },
    {
      id: "q7",
      type: "Fehlerkultur",
      question: "Was wäre eine professionelle Reaktion, wenn nach Veröffentlichung ein relevanter Fehler entdeckt wird?",
      options: [
        "Den Fehler still löschen, damit kein Vertrauensverlust entsteht.",
        "Den Fehler transparent korrigieren und erklären, was geändert wurde.",
        "Die Kritik ignorieren, wenn der Beitrag insgesamt gut gemeint war.",
        "Den Beitrag sofort komplett zurückziehen, unabhängig von Art und Größe des Fehlers."
      ],
      answer: 1,
      feedback: [
        "Stilles Löschen kann Vertrauen stärker beschädigen, weil es Korrekturen unsichtbar macht.",
        "Ja. Korrekturtransparenz ist Teil journalistischer Glaubwürdigkeit.",
        "Gute Absichten ersetzen keine Verantwortung für Genauigkeit.",
        "Manchmal ist Rückzug nötig, aber nicht jeder Fehler verlangt denselben Schritt."
      ],
      followUp: "Wie sollte eine Redaktion sichtbar machen, dass sie aus einem Fehler gelernt hat?"
    },
    {
      id: "q8",
      type: "Digitale Öffentlichkeit",
      question: "Was verändert sich durch digitale Plattformen für journalistische Arbeit besonders stark?",
      options: [
        "Recherche wird überflüssig, weil Informationen überall verfügbar sind.",
        "Tempo, Reichweite, Konkurrenz um Aufmerksamkeit und Rückmeldungen des Publikums nehmen zu.",
        "Ethik spielt online keine Rolle mehr.",
        "Nur gedruckte Medien können Vertrauen herstellen."
      ],
      answer: 1,
      feedback: [
        "Gerade weil Informationen überall verfügbar sind, wird Prüfung wichtiger.",
        "Richtig. Digitale Öffentlichkeit erhöht Tempo und Sichtbarkeit, aber auch Fehler- und Empörungsrisiken.",
        "Ethik wird online nicht kleiner, sondern oft komplizierter.",
        "Vertrauen hängt nicht am Trägermedium, sondern an Arbeitsweise, Transparenz und Qualität."
      ],
      followUp: "Welche digitale Herausforderung erkennt man im Film oder in eurem eigenen Medienalltag besonders deutlich?"
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
