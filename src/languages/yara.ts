import type { Language } from "../types";

export const yara = {
  slug: "yara",
  publishedDate: "2008-05-01",
  extensions: [".yar", ".yara"],
  author: "Victor M. Alvarez",
  website: "https://virustotal.github.io/yara/",
  paradigms: ["declarative", "pattern-matching"],
  tooling: {
    runtimes: ["yara", "yara-python", "libyara"],
    packageManagers: ["pip (yara-python)"],
    ecosystems: ["Security", "Malware Analysis", "Threat Intelligence", "Forensics"],
  },
  version: "4.5.2",
  logo: "https://avatars.githubusercontent.com/u/6306898?v=4",
  color: "#C62D42",
  i18n: {
    en: {
      name: "YARA",
      description:
        "A pattern-matching language for identifying and classifying malware samples based on textual and binary patterns, widely used in threat intelligence.",
      longDescription:
        "YARA (Yet Another Recursive Acronym) is a tool and rule language designed by Victor M. Alvarez at VirusTotal for identifying and classifying malware based on patterns found in files and processes. A YARA rule combines textual strings, byte patterns, and Boolean logic to describe families of malware.\n\nYARA rules are used extensively in antivirus products, security operations centers, incident response, and threat hunting. Each rule has a set of strings — hexadecimal sequences, text strings, or regular expressions — and a condition that must be satisfied for the rule to match. YARA runs as a standalone tool, as a Python library (yara-python), and is integrated into platforms like VirusTotal, MISP, Cuckoo Sandbox, and many SIEM systems.",
    },
    es: {
      name: "YARA",
      description:
        "Lenguaje de coincidencia de patrones para identificar muestras de malware por patrones textuales y binarios, ampliamente usado en inteligencia de amenazas.",
      longDescription:
        "YARA es una herramienta y lenguaje de reglas diseñado por Victor M. Alvarez en VirusTotal para identificar y clasificar malware basándose en patrones encontrados en archivos y procesos. Una regla YARA combina cadenas de texto, patrones de bytes y lógica booleana para describir familias de malware.\n\nLas reglas YARA se usan ampliamente en antivirus, centros de operaciones de seguridad, respuesta a incidentes y búsqueda de amenazas. Cada regla tiene un conjunto de cadenas — secuencias hexadecimales, texto o expresiones regulares — y una condición que debe cumplirse.",
    },
    it: {
      name: "YARA",
      description:
        "Linguaggio di pattern matching per identificare campioni di malware su pattern testuali e binari, ampiamente usato nell'intelligence sulle minacce.",
      longDescription:
        "YARA è uno strumento e un linguaggio di regole progettato da Victor M. Alvarez presso VirusTotal per identificare e classificare malware basandosi su pattern trovati in file e processi. Una regola YARA combina stringhe testuali, pattern di byte e logica booleana per descrivere famiglie di malware.\n\nLe regole YARA sono ampiamente utilizzate in antivirus, SOC, risposta agli incidenti e threat hunting. Ogni regola ha un insieme di stringhe — sequenze esadecimali, testo o espressioni regolari — e una condizione che deve essere soddisfatta.",
    },
    fr: {
      name: "YARA",
      description:
        "Langage de correspondance de motifs pour identifier des échantillons de malware par motifs textuels et binaires, utilisé en renseignement sur les menaces.",
      longDescription:
        "YARA est un outil et un langage de règles conçu par Victor M. Alvarez chez VirusTotal pour identifier et classifier les malwares en fonction de motifs trouvés dans des fichiers et des processus. Une règle YARA combine des chaînes textuelles, des motifs d'octets et une logique booléenne pour décrire des familles de malwares.\n\nLes règles YARA sont largement utilisées dans les antivirus, les SOC, la réponse aux incidents et la chasse aux menaces. Chaque règle contient un ensemble de chaînes et une condition qui doit être satisfaite.",
    },
    de: {
      name: "YARA",
      description:
        "Pattern-Matching-Sprache zur Identifizierung von Malware-Proben anhand textueller und binärer Muster, weit verbreitet in der Bedrohungsanalyse.",
      longDescription:
        "YARA ist ein Tool und eine Regelsprache, die von Victor M. Alvarez bei VirusTotal entwickelt wurde, um Malware anhand von Mustern in Dateien und Prozessen zu identifizieren und zu klassifizieren. Eine YARA-Regel kombiniert Textstrings, Byte-Muster und boolesche Logik, um Malware-Familien zu beschreiben.\n\nYARA-Regeln werden in Antivirenprodukten, Security Operations Centers, Incident Response und Threat Hunting eingesetzt. Jede Regel hat Strings — hexadezimale Sequenzen, Textstrings oder reguläre Ausdrücke — und eine Bedingung.",
    },
    pt: {
      name: "YARA",
      description:
        "Linguagem de correspondência de padrões para identificar amostras de malware por padrões textuais e binários, amplamente usada em inteligência de ameaças.",
      longDescription:
        "YARA é uma ferramenta e linguagem de regras projetada por Victor M. Alvarez na VirusTotal para identificar e classificar malware com base em padrões encontrados em arquivos e processos. Uma regra YARA combina strings de texto, padrões de bytes e lógica booleana para descrever famílias de malware.\n\nAs regras YARA são amplamente usadas em antivírus, centros de operações de segurança, resposta a incidentes e caça a ameaças. Cada regra tem um conjunto de strings — sequências hexadecimais, texto ou expressões regulares — e uma condição que deve ser satisfeita.",
    },
  },
} satisfies Language;
