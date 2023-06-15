interface Resources {
  "ns1": {
    "title": "Willkommen!",
    "description": {
      "part1": "Dies ist nur ein einfaches Beispiel für die Verwendung von i18next mit Typescript",
      "part2": "😉"
    },
    "inter": "interpoliert {{val}}"
  },
  "ns2": {
    "description": {
      "part1": "Um den geeigneten Typ für die t-Funktion abzuleiten, sollten Sie die Typerweiterung verwenden, um den Ressourcentyp zu überschreiben.",
      "part2": "Schauen Sie sich @types/i18next an, um ein Beispiel zu sehen."
    }
  }
}

export default Resources;
