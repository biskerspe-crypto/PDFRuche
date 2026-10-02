import fs from 'fs';
import path from 'path';

const messagesDir = path.resolve('messages');

const translations = {
  en: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "100% Local Browser Engine",
      zeroUploads: "Zero Cloud Uploads",
      titlePrefix: "The Creative Powerhouse for",
      titleAccent: "Everything PDF",
      subtitle: "Manipulate, convert, compress, organize and secure your documents with extreme privacy. Powered entirely by client-side WebAssembly — lightning-fast and completely free."
    },
    stats: {
      toolsLabel: "Specialized PDF Tools",
      toolsSubtext: "For editing, converting & optimizing",
      privacyLabel: "Client-Side Privacy",
      privacySubtext: "Documents never leave your device",
      speedLabel: "Server Waiting Time",
      speedSubtext: "Instant WebAssembly execution",
      languagesLabel: "Supported Languages",
      languagesSubtext: "Full localized international interface"
    },
    studio: {
      badge: "Interactive Workspace",
      title: "Explore the Complete",
      titleAccent: "Tools",
      subtitle: "Instant access to {count}+ free utilities. Click any card to launch its specialized workbench.",
      searchPlaceholder: "Filter tools...",
      formatLabel: "Format:",
      allFormats: "All Formats",
      showingTools: "Showing {count} tools",
      hotBadge: "HOT",
      defaultDesc: "Fast, local browser-based PDF processing.",
      openToolAria: "Open {title}",
      favAdd: "Add to favorites",
      favRemove: "Remove from favorites",
      emptyTitle: "No tools matched your criteria",
      emptyDesc: "Try adjusting your search terms or clearing active filters.",
      resetFilters: "Reset Filters",
      categories: {
        all: "All Tools",
        popular: "Popular",
        favorites: "Favorites ({count})",
        editAnnotate: "Edit & Annotate",
        organizeManage: "Organize & Manage",
        convertToPdf: "Convert to PDF",
        convertFromPdf: "Convert from PDF",
        optimizeRepair: "Optimize & Repair",
        securePdf: "Security & Protect"
      }
    },
    bento: {
      badge: "Under The Hood",
      title: "Engineered for",
      titleAccent: "Maximum Performance",
      subtitle: "We reinvented document processing by eliminating the server completely. Fast, private, and unstoppable.",
      card1: {
        badge: "100% Privacy Guarantee",
        title: "Zero-Knowledge Local Browser Processing",
        desc: "Unlike conventional online converters, your confidential documents are never uploaded to any remote server or cloud database. All operations run directly in your browser's isolated memory sandbox.",
        tag1: "No Server Uploads",
        tag2: "GDPR & HIPAA Compliant",
        tag3: "Ephemeral Memory"
      },
      card2: {
        badge: "Pure Hardware Speed",
        title: "WebAssembly & GPU Powered",
        desc: "Compiled C++ and Rust engines execute natively on your device CPU for ultra-low latency without server queues.",
        tag1: "0s Queue Time",
        tag2: "Near-Native IO"
      },
      card3: {
        badge: "Bulk Workflow",
        title: "Multi-File Batch Reactor",
        desc: "Combine, extract, or convert dozens of documents simultaneously with intelligent multi-threaded chunking.",
        tag1: "Up to 100 Files",
        tag2: "1-Click ZIP Export"
      },
      card4: {
        badge: "Unlimited Freedom",
        title: "No Accounts, No Paywalls, No File Limits",
        desc: "No credit cards, no subscriptions, and no arbitrary file size caps. Everything is ready immediately whenever you need it, and can even function offline as an installed PWA.",
        formatsLabel: "Supported formats:",
        browseAll: "Browse All Formats"
      }
    },
    workflow: {
      badge: "Effortless Journey",
      title: "How It Works in",
      titleAccent: "3 Simple Beats",
      subtitle: "No complicated settings, no accounts, no delays. From file to result in under 5 seconds.",
      step1: {
        title: "Pick or Drop Your File",
        desc: "Select your PDF, Office document or image. The smart auto-detector matches the ideal tool immediately.",
        highlight: "Zero latency file ingest"
      },
      step2: {
        title: "Adjust, Edit & Optimize",
        desc: "Rearrange pages, customize compression ratio, draw electronic signatures, or encrypt with 256-bit AES security.",
        highlight: "Client-side WASM engine"
      },
      step3: {
        title: "Instant Local Download",
        desc: "Get your pristine document saved straight to your disk without waiting for remote server queues or email links.",
        highlight: "Direct memory streaming"
      },
      tag: "Interactive & Automatic",
      cta: "Launch the Interactive Studio"
    },
    faq: {
      badge: "Got Questions?",
      title: "Frequently Asked",
      titleAccent: "Questions",
      subtitle: "Everything you need to know about PDFRuche privacy, technology and capabilities.",
      q1: "Are my documents safe, private, and truly never uploaded to any server?",
      a1: "Yes, 100%. PDFRuche runs completely in your browser via client-side WebAssembly. Your files are processed in local memory and are never transmitted over the internet or saved to any cloud server.",
      q2: "Are there any file size limitations or paywalls?",
      a2: "No artificial limits. You can process documents of virtually any size, merge dozens of PDFs at once, and use every single tool without subscriptions, paywalls, or hidden fees.",
      q3: "Can I use PDFRuche offline as a Progressive Web App (PWA)?",
      a3: "Absolutely. PDFRuche can be installed on macOS, Windows, Linux, Android, and iOS as a standalone PWA. Once loaded, the tools can work entirely offline without an internet connection.",
      q4: "What file formats are supported?",
      a4: "PDFRuche supports PDF, Microsoft Word (DOCX/DOC), Excel (XLSX/XLS), PowerPoint (PPTX/PPT), Images (JPG, PNG, WEBP, SVG, TIFF, BMP), Text (TXT, RTF), and EPUB.",
      q5: "How does client-side WebAssembly PDF processing work?",
      a5: "We compile high-performance C++ and Rust PDF rendering and transformation engines into WebAssembly (WASM). This allows your device CPU and GPU to execute complex operations directly within the browser tab at near-native speeds."
    }
  },
  fr: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "Moteur 100% Navigateur Local",
      zeroUploads: "Zéro Envoi vers le Cloud",
      titlePrefix: "Le Hub Créatif Ultime pour",
      titleAccent: "Tous vos PDF",
      subtitle: "Manipulez, convertissez, compressez, organisez et sécurisez vos documents en toute confidentialité. Propulsé par WebAssembly en local — ultra rapide et entièrement gratuit."
    },
    stats: {
      toolsLabel: "Outils PDF Spécialisés",
      toolsSubtext: "Pour éditer, convertir et optimiser",
      privacyLabel: "Confidentialité 100% Locale",
      privacySubtext: "Les fichiers ne quittent jamais votre appareil",
      speedLabel: "Temps d'Attente Serveur",
      speedSubtext: "Exécution instantanée WebAssembly",
      languagesLabel: "Langues Supportées",
      languagesSubtext: "Interface internationale complète"
    },
    studio: {
      badge: "Espace de Travail Interactif",
      title: "Explorez la Suite Complète d'",
      titleAccent: "Outils",
      subtitle: "Accès instantané à plus de {count} outils gratuits. Cliquez sur une carte pour lancer son atelier dédié.",
      searchPlaceholder: "Filtrer les outils...",
      formatLabel: "Format :",
      allFormats: "Tous les Formats",
      showingTools: "{count} outils affichés",
      hotBadge: "POPULAIRE",
      defaultDesc: "Traitement PDF local, rapide et confidentiel dans le navigateur.",
      openToolAria: "Ouvrir {title}",
      favAdd: "Ajouter aux favoris",
      favRemove: "Retirer des favoris",
      emptyTitle: "Aucun outil ne correspond à vos critères",
      emptyDesc: "Essayez de modifier votre recherche ou de réinitialiser les filtres actifs.",
      resetFilters: "Réinitialiser les Filtres",
      categories: {
        all: "Tous les Outils",
        popular: "Populaires",
        favorites: "Favoris ({count})",
        editAnnotate: "Éditer & Annoter",
        organizeManage: "Organiser & Gérer",
        convertToPdf: "Convertir en PDF",
        convertFromPdf: "Convertir depuis PDF",
        optimizeRepair: "Optimiser & Réparer",
        securePdf: "Sécurité & Protection"
      }
    },
    bento: {
      badge: "Sous le Capot",
      title: "Conçu pour une",
      titleAccent: "Performance Maximale",
      subtitle: "Nous avons réinventé le traitement de documents en éliminant complètement les serveurs. Rapide, privé et inarrêtable.",
      card1: {
        badge: "Garantie Confidentialité 100%",
        title: "Traitement Local Sans Envoi Externe",
        desc: "Contrairement aux convertisseurs en ligne classiques, vos documents confidentiels ne sont jamais téléversés sur un serveur distant. Tout s'exécute directement dans le bac à sable isolé de votre navigateur.",
        tag1: "Zéro Téléversement Serveur",
        tag2: "Conforme RGPD & HIPAA",
        tag3: "Mémoire Éphémère"
      },
      card2: {
        badge: "Vitesse Matérielle Pure",
        title: "Propulsé par WebAssembly & GPU",
        desc: "Les moteurs C++ et Rust compilés s'exécutent nativement sur le processeur de votre appareil pour une latence minimale sans file d'attente.",
        tag1: "0s d'Attente",
        tag2: "Performances Natives"
      },
      card3: {
        badge: "Traitement par Lots",
        title: "Moteur Multi-Fichiers Simultané",
        desc: "Combinez, extrayez ou convertissez des dizaines de documents en même temps grâce à notre architecture multi-thread.",
        tag1: "Jusqu'à 100 Fichiers",
        tag2: "Export ZIP en 1 Clic"
      },
      card4: {
        badge: "Liberté Totale",
        title: "Sans Compte, Sans Abonnement, Sans Limite",
        desc: "Pas de carte bancaire, pas d'inscription obligatoire et aucune restriction de taille de fichier arbitraire. Fonctionne même hors-ligne en PWA.",
        formatsLabel: "Formats supportés :",
        browseAll: "Voir Tous les Formats"
      }
    },
    workflow: {
      badge: "Parcours Simple",
      title: "Comment ça marche en",
      titleAccent: "3 Étapes Faciles",
      subtitle: "Pas de configuration complexe, aucun compte requis. Du fichier au résultat en moins de 5 secondes.",
      step1: {
        title: "Choisissez ou Déposez votre Fichier",
        desc: "Sélectionnez votre PDF, document bureautique ou image. Le détecteur automatique active directement l'outil parfait.",
        highlight: "Prise en charge instantanée"
      },
      step2: {
        title: "Ajustez, Modifiez & Optimisez",
        desc: "Réorganisez les pages, réglez la compression, signez électroniquement ou verrouillez avec un chiffrement AES 256 bits.",
        highlight: "Moteur WASM côté client"
      },
      step3: {
        title: "Téléchargement Local Immédiat",
        desc: "Récupérez votre document traité directement sur votre disque, sans attendre d'e-mail ou de file d'attente serveur.",
        highlight: "Génération mémoire directe"
      },
      tag: "Interactif & Automatique",
      cta: "Lancer le Studio Interactif"
    },
    faq: {
      badge: "Des Questions ?",
      title: "Questions",
      titleAccent: "Fréquentes",
      subtitle: "Tout ce que vous devez savoir sur la confidentialité, la technologie et les capacités de PDFRuche.",
      q1: "Mes documents sont-ils en sécurité et vraiment jamais envoyés sur un serveur ?",
      a1: "Oui, à 100%. PDFRuche fonctionne entièrement dans votre navigateur grâce à WebAssembly. Vos fichiers sont traités en mémoire vive locale et ne sont jamais transmis sur Internet ni stockés sur un serveur cloud.",
      q2: "Y a-t-il des limites de taille de fichier ou des frais cachés ?",
      a2: "Aucune limite artificielle. Vous pouvez traiter des documents de toute taille, fusionner des dizaines de fichiers et utiliser tous les outils sans abonnement ni frais cachés.",
      q3: "Puis-je utiliser PDFRuche hors ligne en tant qu'application (PWA) ?",
      a3: "Absolument. PDFRuche s'installe sur macOS, Windows, Linux, Android et iOS comme une application PWA. Une fois installée, les outils fonctionnent même sans connexion Internet.",
      q4: "Quels formats de fichiers sont pris en charge ?",
      a4: "PDFRuche prend en charge le format PDF, Microsoft Word (DOCX/DOC), Excel (XLSX/XLS), PowerPoint (PPTX/PPT), les images (JPG, PNG, WEBP, SVG, TIFF, BMP), le texte (TXT, RTF) et EPUB.",
      q5: "Comment fonctionne le traitement PDF via WebAssembly dans le navigateur ?",
      a5: "Nous compilons des moteurs haute performance en C++ et Rust sous forme de WebAssembly (WASM). Cela permet au processeur de votre appareil d'effectuer les calculs complexes directement dans l'onglet à vitesse quasi-native."
    }
  },
  es: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "Motor 100% Local en el Navegador",
      zeroUploads: "Cero Subidas a la Nube",
      titlePrefix: "El Centro Creativo para",
      titleAccent: "Todo sobre PDF",
      subtitle: "Manipula, convierte, comprime, organiza y protege tus documentos con total privacidad. Impulsado por WebAssembly local: ultrarrápido y completamente gratuito."
    },
    stats: {
      toolsLabel: "Herramientas PDF Especializadas",
      toolsSubtext: "Para editar, convertir y optimizar",
      privacyLabel: "Privacidad 100% Local",
      privacySubtext: "Los archivos nunca salen de tu dispositivo",
      speedLabel: "Tiempo de Espera en Servidor",
      speedSubtext: "Ejecución instantánea con WebAssembly",
      languagesLabel: "Idiomas Disponibles",
      languagesSubtext: "Interfaz internacional completa"
    },
    studio: {
      badge: "Espacio de Trabajo Interactivo",
      title: "Explora la Suite Completa de",
      titleAccent: "Herramientas",
      subtitle: "Acceso instantáneo a más de {count} utilidades gratuitas. Haz clic en cualquier tarjeta para abrir su taller dedicado.",
      searchPlaceholder: "Filtrar herramientas...",
      formatLabel: "Formato:",
      allFormats: "Todos los Formatos",
      showingTools: "Mostrando {count} herramientas",
      hotBadge: "POPULAR",
      defaultDesc: "Procesamiento de PDF local, rápido y privado en el navegador.",
      openToolAria: "Abrir {title}",
      favAdd: "Añadir a favoritos",
      favRemove: "Eliminar de favoritos",
      emptyTitle: "Ninguna herramienta coincide con tus criterios",
      emptyDesc: "Prueba a cambiar los términos de búsqueda o restablecer los filtros.",
      resetFilters: "Restablecer Filtros",
      categories: {
        all: "Todas las Herramientas",
        popular: "Populares",
        favorites: "Favoritos ({count})",
        editAnnotate: "Editar y Anotar",
        organizeManage: "Organizar y Gestionar",
        convertToPdf: "Convertir a PDF",
        convertFromPdf: "Convertir desde PDF",
        optimizeRepair: "Optimizar y Reparar",
        securePdf: "Seguridad y Proteger"
      }
    },
    bento: {
      badge: "Bajo el Capó",
      title: "Diseñado para el",
      titleAccent: "Máximo Rendimiento",
      subtitle: "Reinventamos el procesamiento de documentos eliminando los servidores por completo. Rápido, privado e imparable.",
      card1: {
        badge: "Garantía de Privacidad 100%",
        title: "Procesamiento Local en el Navegador",
        desc: "A diferencia de los conversores tradicionales, tus documentos confidenciales nunca se suben a ningún servidor. Todo se ejecuta en el entorno seguro de tu navegador.",
        tag1: "Sin Subidas a Servidores",
        tag2: "Conforme con RGPD e HIPAA",
        tag3: "Memoria Efímera"
      },
      card2: {
        badge: "Velocidad de Hardware Puro",
        title: "Impulsado por WebAssembly y GPU",
        desc: "Motores compilados en C++ y Rust se ejecutan de forma nativa en la CPU de tu dispositivo sin colas de espera.",
        tag1: "0s de Espera",
        tag2: "Rendimiento Casi Nativo"
      },
      card3: {
        badge: "Procesamiento por Lotes",
        title: "Procesador Multi-Archivo",
        desc: "Combina, extrae o convierte decenas de documentos simultáneamente con procesamiento multi-hilo.",
        tag1: "Hasta 100 Archivos",
        tag2: "Exportación ZIP en 1 Clic"
      },
      card4: {
        badge: "Libertad Total",
        title: "Sin Cuentas, Sin Pagos, Sin Límites",
        desc: "Sin tarjetas de crédito, sin suscripciones y sin límites de tamaño. Funciona incluso sin conexión como PWA.",
        formatsLabel: "Formatos compatibles:",
        browseAll: "Ver Todos los Formatos"
      }
    },
    workflow: {
      badge: "Proceso Sencillo",
      title: "Cómo Funciona en",
      titleAccent: "3 Simples Pasos",
      subtitle: "Sin configuraciones complejas ni cuentas. Del archivo al resultado en menos de 5 segundos.",
      step1: {
        title: "Elige o Arrastra tu Archivo",
        desc: "Selecciona tu PDF, documento o imagen. El detector automático activa la herramienta ideal de inmediato.",
        highlight: "Carga sin latencia"
      },
      step2: {
        title: "Ajusta, Edita y Optimiza",
        desc: "Reorganiza páginas, ajusta la compresión, firma electrónicamente o cifra con AES de 256 bits.",
        highlight: "Motor WASM del cliente"
      },
      step3: {
        title: "Descarga Local Inmediata",
        desc: "Guarda tu documento directamente en tu disco sin esperar colas remotas ni enlaces por correo.",
        highlight: "Flujo directo en memoria"
      },
      tag: "Interactivo y Automático",
      cta: "Iniciar el Estudio Interactivo"
    },
    faq: {
      badge: "¿Preguntas?",
      title: "Preguntas",
      titleAccent: "Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre la privacidad, tecnología y funciones de PDFRuche.",
      q1: "¿Mis documentos están seguros y realmente nunca se suben a ningún servidor?",
      a1: "Sí, 100%. PDFRuche funciona completamente en tu navegador mediante WebAssembly. Los archivos se procesan en la memoria local y nunca se transmiten por Internet.",
      q2: "¿Hay límites de tamaño de archivo o costes ocultos?",
      a2: "No hay límites artificiales. Puedes procesar documentos de cualquier tamaño y usar todas las herramientas sin suscripciones.",
      q3: "¿Puedo usar PDFRuche sin conexión como Progressive Web App (PWA)?",
      a3: "Por supuesto. PDFRuche se puede instalar en macOS, Windows, Linux, Android e iOS como PWA y funcionar sin conexión a Internet.",
      q4: "¿Qué formatos de archivo son compatibles?",
      a4: "PDFRuche admite PDF, Word (DOCX/DOC), Excel (XLSX/XLS), PowerPoint (PPTX/PPT), imágenes (JPG, PNG, WEBP, SVG, TIFF, BMP), texto (TXT, RTF) y EPUB.",
      q5: "¿Cómo funciona el procesamiento de PDF con WebAssembly en el navegador?",
      a5: "Compilamos motores de C++ y Rust de alto rendimiento en WebAssembly (WASM), permitiendo que tu dispositivo procese documentos directamente a velocidades casi nativas."
    }
  },
  de: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "100% Lokale Browser-Engine",
      zeroUploads: "Keine Cloud-Uploads",
      titlePrefix: "Das Kreativ-Kraftpaket für",
      titleAccent: "Alles rund um PDF",
      subtitle: "Bearbeiten, konvertieren, komprimieren, organisieren und schützen Sie Ihre Dokumente mit maximaler Privatsphäre. Vollständig lokal über WebAssembly — blitzschnell und kostenlos."
    },
    stats: {
      toolsLabel: "Spezialisierte PDF-Werkzeuge",
      toolsSubtext: "Zum Bearbeiten, Konvertieren & Optimieren",
      privacyLabel: "100% Lokale Privatsphäre",
      privacySubtext: "Dateien verlassen Ihr Gerät niemals",
      speedLabel: "Server-Wartezeit",
      speedSubtext: "Sofortige WebAssembly-Ausführung",
      languagesLabel: "Unterstützte Sprachen",
      languagesSubtext: "Vollständig lokalisierte Benutzeroberfläche"
    },
    studio: {
      badge: "Interaktiver Arbeitsbereich",
      title: "Entdecken Sie die komplette",
      titleAccent: "Werkzeugsuite",
      subtitle: "Sofortiger Zugriff auf über {count} kostenlose Werkzeuge. Klicken Sie auf eine Karte, um den Arbeitsbereich zu öffnen.",
      searchPlaceholder: "Werkzeuge filtern...",
      formatLabel: "Format:",
      allFormats: "Alle Formate",
      showingTools: "{count} Werkzeuge angezeigt",
      hotBadge: "BELIEBT",
      defaultDesc: "Schnelle, lokale und private PDF-Verarbeitung im Browser.",
      openToolAria: "{title} öffnen",
      favAdd: "Zu Favoriten hinzufügen",
      favRemove: "Aus Favoriten entfernen",
      emptyTitle: "Keine Werkzeuge entsprechen Ihren Kriterien",
      emptyDesc: "Versuchen Sie, Ihre Suchbegriffe anzupassen oder Filter zurückzusetzen.",
      resetFilters: "Filter zurücksetzen",
      categories: {
        all: "Alle Werkzeuge",
        popular: "Beliebt",
        favorites: "Favoriten ({count})",
        editAnnotate: "Bearbeiten & Kommentieren",
        organizeManage: "Organisieren & Verwalten",
        convertToPdf: "In PDF umwandeln",
        convertFromPdf: "Aus PDF umwandeln",
        optimizeRepair: "Optimieren & Reparieren",
        securePdf: "Sicherheit & Schützen"
      }
    },
    bento: {
      badge: "Unter der Haube",
      title: "Entwickelt für",
      titleAccent: "Maximale Leistung",
      subtitle: "Wir haben die Dokumentenverarbeitung neu erfunden, indem wir Server komplett überflüssig gemacht haben. Schnell, privat und kompromisslos.",
      card1: {
        badge: "100% Datenschutzgarantie",
        title: "Zero-Knowledge Lokale Browser-Verarbeitung",
        desc: "Im Gegensatz zu herkömmlichen Online-Konvertern werden Ihre vertraulichen Dokumente niemals auf Remoteserver hochgeladen.",
        tag1: "Keine Server-Uploads",
        tag2: "DSGVO- & HIPAA-konform",
        tag3: "Flüchtiger Speicher"
      },
      card2: {
        badge: "Reine Hardware-Geschwindigkeit",
        title: "WebAssembly- & GPU-gestützt",
        desc: "Kompilierte C++- und Rust-Engines laufen nativ auf Ihrer Geräte-CPU für extrem geringe Latenz ohne Warteschlangen.",
        tag1: "0s Wartezeit",
        tag2: "Fast native Leistung"
      },
      card3: {
        badge: "Stapelverarbeitung",
        title: "Multi-Datei Batch-Reaktor",
        desc: "Kombinieren, extrahieren oder konvertieren Sie Dutzende Dokumente gleichzeitig mit intelligentem Multithreading.",
        tag1: "Bis zu 100 Dateien",
        tag2: "1-Klick ZIP-Export"
      },
      card4: {
        badge: "Grenzenlose Freiheit",
        title: "Keine Konten, keine Bezahlschranken, keine Limits",
        desc: "Keine Kreditkarten, keine Abonnements und keine künstlichen Dateigrößenbegrenzungen. Funktioniert auch offline als PWA.",
        formatsLabel: "Unterstützte Formate:",
        browseAll: "Alle Formate anzeigen"
      }
    },
    workflow: {
      badge: "Müheloser Ablauf",
      title: "So funktioniert es in",
      titleAccent: "3 einfachen Schritten",
      subtitle: "Keine komplizierten Einstellungen, keine Registrierung. Vom Dokument zum Ergebnis in unter 5 Sekunden.",
      step1: {
        title: "Datei auswählen oder ablegen",
        desc: "Wählen Sie Ihr PDF, Office-Dokument oder Bild. Die automatische Erkennung wählt sofort das passende Tool.",
        highlight: "Sofortige Dateiübernahme"
      },
      step2: {
        title: "Anpassen, Bearbeiten & Optimieren",
        desc: "Seiten neu ordnen, Kompressionsrate wählen, elektronisch signieren oder mit 256-Bit-AES verschlüsseln.",
        highlight: "Clientseitige WASM-Engine"
      },
      step3: {
        title: "Sofortiger lokaler Download",
        desc: "Speichern Sie das fertige Dokument direkt auf Ihrer Festplatte ohne Server-Wartezeiten oder E-Mail-Links.",
        highlight: "Direktes Memory-Streaming"
      },
      tag: "Interaktiv & Automatisch",
      cta: "Interaktives Studio starten"
    },
    faq: {
      badge: "Haben Sie Fragen?",
      title: "Häufig gestellte",
      titleAccent: "Fragen",
      subtitle: "Alles, was Sie über Datenschutz, Technologie und Funktionen von PDFRuche wissen müssen.",
      q1: "Sind meine Dokumente sicher und werden wirklich nie auf Server hochgeladen?",
      a1: "Ja, zu 100%. PDFRuche läuft vollständig in Ihrem Browser über WebAssembly. Ihre Dateien werden nur im lokalen Speicher verarbeitet.",
      q2: "Gibt es Dateigrößenbegrenzungen oder versteckte Kosten?",
      a2: "Keine künstlichen Einschränkungen. Sie können Dokumente jeder Größe bearbeiten und alle Werkzeuge kostenlos nutzen.",
      q3: "Kann ich PDFRuche offline als Progressive Web App (PWA) nutzen?",
      a3: "Absolut. PDFRuche kann auf macOS, Windows, Linux, Android und iOS als PWA installiert werden und offline arbeiten.",
      q4: "Welche Dateiformate werden unterstützt?",
      a4: "PDFRuche unterstützt PDF, Word (DOCX/DOC), Excel (XLSX/XLS), PowerPoint (PPTX/PPT), Bilder (JPG, PNG, WEBP, SVG), Text und EPUB.",
      q5: "Wie funktioniert die PDF-Verarbeitung über WebAssembly im Browser?",
      a5: "Wir kompilieren C++- und Rust-Engines in WebAssembly (WASM), sodass Ihr Gerät die Berechnungen direkt im Browser-Tab durchführt."
    }
  },
  it: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "Motore 100% Locale nel Browser",
      zeroUploads: "Zero Caricamenti sul Cloud",
      titlePrefix: "Il Centro Creativo per",
      titleAccent: "Tutto sui PDF",
      subtitle: "Manipola, converti, comprimi, organizza e proteggi i tuoi documenti in totale privacy. Alimentato da WebAssembly locale: ultra veloce e completamente gratuito."
    },
    stats: {
      toolsLabel: "Strumenti PDF Specializzati",
      toolsSubtext: "Per modificare, convertire e ottimizzare",
      privacyLabel: "Privacy 100% Locale",
      privacySubtext: "I file non lasciano mai il tuo dispositivo",
      speedLabel: "Tempo di Attesa Server",
      speedSubtext: "Esecuzione istantanea con WebAssembly",
      languagesLabel: "Lingue Supportate",
      languagesSubtext: "Interfaccia internazionale completa"
    },
    studio: {
      badge: "Spazio di Lavoro Interattivo",
      title: "Esplora la Suite Completa di",
      titleAccent: "Strumenti",
      subtitle: "Accesso immediato a oltre {count} strumenti gratuiti. Clicca su qualsiasi scheda per aprire il suo laboratorio dedicato.",
      searchPlaceholder: "Filtra strumenti...",
      formatLabel: "Formato:",
      allFormats: "Tutti i Formati",
      showingTools: "{count} strumenti mostrati",
      hotBadge: "POPOLARE",
      defaultDesc: "Elaborazione PDF locale, veloce e privata nel browser.",
      openToolAria: "Apri {title}",
      favAdd: "Aggiungi ai preferiti",
      favRemove: "Rimuovi dai preferiti",
      emptyTitle: "Nessuno strumento corrisponde ai criteri",
      emptyDesc: "Prova a modificare i termini di ricerca o a reimpostare i filtri.",
      resetFilters: "Reimposta Filtri",
      categories: {
        all: "Tutti gli Strumenti",
        popular: "Popolari",
        favorites: "Preferiti ({count})",
        editAnnotate: "Modifica e Annota",
        organizeManage: "Organizza e Gestisci",
        convertToPdf: "Converti in PDF",
        convertFromPdf: "Converti da PDF",
        optimizeRepair: "Ottimizza e Ripara",
        securePdf: "Sicurezza e Proteggi"
      }
    },
    bento: {
      badge: "Sotto il Cofano",
      title: "Progettato per le",
      titleAccent: "Massime Prestazioni",
      subtitle: "Abbiamo reinventato l'elaborazione dei documenti eliminando del tutto i server. Veloce, privato e inarrestabile.",
      card1: {
        badge: "Garanzia Privacy 100%",
        title: "Elaborazione Locale Zero-Knowledge",
        desc: "A differenza dei convertitori tradizionali, i tuoi documenti riservati non vengono mai caricati su alcun server remoto.",
        tag1: "Nessun Upload sul Server",
        tag2: "Conforme a GDPR e HIPAA",
        tag3: "Memoria Effimera"
      },
      card2: {
        badge: "Velocità Hardware Pura",
        title: "Alimentato da WebAssembly e GPU",
        desc: "Motori C++ e Rust compilati vengono eseguiti nativamente sulla CPU del tuo dispositivo per latenza quasi zero.",
        tag1: "0s di Attesa",
        tag2: "Prestazioni Quasi Native"
      },
      card3: {
        badge: "Elaborazione Batch",
        title: "Reattore Multi-File",
        desc: "Combina, estrai o converti dozzine di documenti contemporaneamente con elaborazione multi-thread.",
        tag1: "Fino a 100 File",
        tag2: "Esportazione ZIP in 1 Clic"
      },
      card4: {
        badge: "Libertà Illimitata",
        title: "Senza Account, Senza Abbonamenti, Senza Limiti",
        desc: "Nessuna carta di credito, nessun costo nascosto e nessun limite di dimensione. Funziona anche offline come PWA.",
        formatsLabel: "Formati supportati:",
        browseAll: "Vedi Tutti i Formati"
      }
    },
    workflow: {
      badge: "Flusso Semplice",
      title: "Come Funziona in",
      titleAccent: "3 Semplici Passaggi",
      subtitle: "Nessuna configurazione complessa, nessun account. Dal file al risultato in meno di 5 secondi.",
      step1: {
        title: "Scegli o Trascina il Tuo File",
        desc: "Seleziona il tuo PDF, documento o immagine. Il rilevatore automatico seleziona subito lo strumento ideale.",
        highlight: "Caricamento senza latenza"
      },
      step2: {
        title: "Regola, Modifica e Ottimizza",
        desc: "Riorganizza pagine, regola la compressione, firma digitalmente o proteggi con crittografia AES a 256 bit.",
        highlight: "Motore WASM lato client"
      },
      step3: {
        title: "Download Locale Istantaneo",
        desc: "Salva il tuo documento pulito direttamente sul disco senza attendere code di server remoti o link e-mail.",
        highlight: "Streaming diretto in memoria"
      },
      tag: "Interattivo e Automatico",
      cta: "Avvia lo Studio Interattivo"
    },
    faq: {
      badge: "Domande?",
      title: "Domande",
      titleAccent: "Frequenti",
      subtitle: "Tutto quello che c'è da sapere sulla privacy, tecnologia e funzionalità di PDFRuche.",
      q1: "I miei documenti sono al sicuro e davvero mai inviati a un server?",
      a1: "Sì, al 100%. PDFRuche funziona completamente nel tuo browser tramite WebAssembly. I file rimangono sempre nella memoria locale.",
      q2: "Ci sono limiti di dimensione dei file o costi nascosti?",
      a2: "Nessun limite artificiale. Puoi elaborare documenti di qualsiasi dimensione e usare tutti gli strumenti gratuitamente.",
      q3: "Posso usare PDFRuche offline come Progressive Web App (PWA)?",
      a3: "Certamente. PDFRuche può essere installato su macOS, Windows, Linux, Android e iOS come PWA e funzionare senza connessione Internet.",
      q4: "Quali formati di file sono supportati?",
      a4: "PDFRuche supporta PDF, Word (DOCX/DOC), Excel (XLSX/XLS), PowerPoint (PPTX/PPT), immagini (JPG, PNG, WEBP, SVG), testo ed EPUB.",
      q5: "Come funziona l'elaborazione PDF tramite WebAssembly nel browser?",
      a5: "Compiliamo motori ad alte prestazioni C++ e Rust in WebAssembly (WASM), consentendo al tuo dispositivo di elaborare direttamente i file alla massima velocità."
    }
  },
  pt: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "Motor 100% Local no Navegador",
      zeroUploads: "Zero Envios para a Nuvem",
      titlePrefix: "O Centro Criativo para",
      titleAccent: "Tudo sobre PDF",
      subtitle: "Manipule, converta, comprima, organize e proteja seus documentos com máxima privacidade. Executado localmente via WebAssembly — ultrarrápido e gratuito."
    },
    stats: {
      toolsLabel: "Ferramentas PDF Especializadas",
      toolsSubtext: "Para editar, converter e otimizar",
      privacyLabel: "Privacidade 100% Local",
      privacySubtext: "Os ficheiros nunca saem do seu dispositivo",
      speedLabel: "Tempo de Espera no Servidor",
      speedSubtext: "Execução instantânea via WebAssembly",
      languagesLabel: "Idiomas Suportados",
      languagesSubtext: "Interface internacional completa"
    },
    studio: {
      badge: "Espaço de Trabalho Interativo",
      title: "Explore a Suite Completa de",
      titleAccent: "Ferramentas",
      subtitle: "Acesso instantâneo a mais de {count} utilitários gratuitos. Clique em qualquer cartão para abrir o ambiente dedicado.",
      searchPlaceholder: "Filtrar ferramentas...",
      formatLabel: "Formato:",
      allFormats: "Todos os Formatos",
      showingTools: "{count} ferramentas exibidas",
      hotBadge: "POPULAR",
      defaultDesc: "Processamento de PDF local, rápido e privado no navegador.",
      openToolAria: "Abrir {title}",
      favAdd: "Adicionar aos favoritos",
      favRemove: "Remover dos favoritos",
      emptyTitle: "Nenhuma ferramenta corresponde aos seus critérios",
      emptyDesc: "Tente ajustar os termos de pesquisa ou redefinir os filtros.",
      resetFilters: "Redefinir Filtros",
      categories: {
        all: "Todas as Ferramentas",
        popular: "Populares",
        favorites: "Favoritos ({count})",
        editAnnotate: "Editar e Anotar",
        organizeManage: "Organizar e Gerir",
        convertToPdf: "Converter para PDF",
        convertFromPdf: "Converter de PDF",
        optimizeRepair: "Otimizar e Reparar",
        securePdf: "Segurança e Proteger"
      }
    },
    bento: {
      badge: "Nos Bastidores",
      title: "Projetado para",
      titleAccent: "Desempenho Máximo",
      subtitle: "Reinventamos o processamento de documentos eliminando os servidores por completo. Rápido, privado e imparável.",
      card1: {
        badge: "Garantia de Privacidade 100%",
        title: "Processamento Local no Navegador",
        desc: "Ao contrário dos conversores convencionais, seus documentos confidenciais nunca são enviados para nenhum servidor externo.",
        tag1: "Sem Envios para Servidor",
        tag2: "Conforme RGPD e HIPAA",
        tag3: "Memória Efémera"
      },
      card2: {
        badge: "Velocidade de Hardware Puro",
        title: "Impulsionado por WebAssembly e GPU",
        desc: "Motores C++ e Rust compilados executam nativamente na CPU do seu dispositivo sem filas de espera.",
        tag1: "0s de Espera",
        tag2: "Desempenho Quase Nativo"
      },
      card3: {
        badge: "Processamento em Lote",
        title: "Processador Multi-Ficheiros",
        desc: "Combine, extraia ou converta dezenas de documentos simultaneamente com processamento multi-threaded.",
        tag1: "Até 100 Ficheiros",
        tag2: "Exportação ZIP num Clique"
      },
      card4: {
        badge: "Liberdade Total",
        title: "Sem Contas, Sem Pagamentos, Sem Limites",
        desc: "Sem cartões de crédito, sem assinaturas e sem limites artificiais de tamanho. Funciona até offline como PWA.",
        formatsLabel: "Formatos suportados:",
        browseAll: "Ver Todos os Formatos"
      }
    },
    workflow: {
      badge: "Fluxo Simples",
      title: "Como Funciona em",
      titleAccent: "3 Passos Simples",
      subtitle: "Sem configurações complexas nem contas. Do ficheiro ao resultado em menos de 5 segundos.",
      step1: {
        title: "Escolha ou Arraste o seu Ficheiro",
        desc: "Selecione o seu PDF, documento ou imagem. O detetor automático ativa a ferramenta ideal de imediato.",
        highlight: "Carregamento sem latência"
      },
      step2: {
        title: "Ajuste, Edite e Otimize",
        desc: "Reorganize páginas, ajuste a compressão, assine digitalmente ou proteja com encriptação AES de 256 bits.",
        highlight: "Motor WASM do cliente"
      },
      step3: {
        title: "Descarregamento Local Imediato",
        desc: "Guarde o seu documento diretamente no disco sem esperar por filas remotas ou links por e-mail.",
        highlight: "Streaming direto em memória"
      },
      tag: "Interativo e Automático",
      cta: "Iniciar o Studio Interativo"
    },
    faq: {
      badge: "Dúvidas?",
      title: "Perguntas",
      titleAccent: "Frequentes",
      subtitle: "Tudo o que precisa de saber sobre a privacidade, tecnologia e recursos do PDFRuche.",
      q1: "Os meus documentos estão seguros e nunca são enviados para um servidor?",
      a1: "Sim, 100%. O PDFRuche funciona totalmente no seu navegador através de WebAssembly. Os ficheiros são processados na memória local.",
      q2: "Existem limites de tamanho ou cobranças ocultas?",
      a2: "Nenhum limite artificial. Pode processar documentos de qualquer tamanho e usar todas as ferramentas gratuitamente.",
      q3: "Posso usar o PDFRuche offline como Progressive Web App (PWA)?",
      a3: "Com certeza. O PDFRuche pode ser instalado no macOS, Windows, Linux, Android e iOS como PWA e funcionar offline.",
      q4: "Quais formatos de ficheiro são suportados?",
      a4: "O PDFRuche suporta PDF, Word (DOCX/DOC), Excel (XLSX/XLS), PowerPoint (PPTX/PPT), imagens (JPG, PNG, WEBP, SVG), texto e EPUB.",
      q5: "Como funciona o processamento de PDF via WebAssembly no navegador?",
      a5: "Compilamos motores de alto desempenho C++ e Rust em WebAssembly (WASM), permitindo que o seu dispositivo processe tudo com velocidade máxima."
    }
  },
  ja: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "100% ローカルブラウザエンジン",
      zeroUploads: "クラウド送信ゼロ",
      titlePrefix: "すべてのPDFのための",
      titleAccent: "クリエイティブ・パワーハウス",
      subtitle: "極めて安全なプライバシーでドキュメントを操作、変換、圧縮、整理、保護。クライアント側WebAssembly搭載 — 超高速で完全無料。"
    },
    stats: {
      toolsLabel: "特化型PDFツール",
      toolsSubtext: "編集・変換・最適化のために",
      privacyLabel: "100% クライアント側プライバシー",
      privacySubtext: "ファイルが端末外に出ることはありません",
      speedLabel: "サーバー待ち時間",
      speedSubtext: "WebAssemblyによる瞬時実行",
      languagesLabel: "対応言語",
      languagesSubtext: "完全ローカライズされた多言語UI"
    },
    studio: {
      badge: "インタラクティブ・ワークスペース",
      title: "充実の",
      titleAccent: "ツールスイートを探索",
      subtitle: "{count}以上の無料ユーティリティに即座にアクセス。カードをクリックして専用ワークスペースを起動。",
      searchPlaceholder: "ツールを検索...",
      formatLabel: "形式：",
      allFormats: "すべての形式",
      showingTools: "{count} 件のツールを表示中",
      hotBadge: "人気",
      defaultDesc: "高速で安全なローカルブラウザ型PDF処理。",
      openToolAria: "{title} を開く",
      favAdd: "お気に入りに追加",
      favRemove: "お気に入りから削除",
      emptyTitle: "条件に一致するツールが見つかりません",
      emptyDesc: "検索条件を変更するか、フィルターをリセットしてください。",
      resetFilters: "フィルターをリセット",
      categories: {
        all: "すべてのツール",
        popular: "人気",
        favorites: "お気に入り ({count})",
        editAnnotate: "編集と注釈",
        organizeManage: "整理と管理",
        convertToPdf: "PDFに変換",
        convertFromPdf: "PDFから変換",
        optimizeRepair: "最適化と修復",
        securePdf: "セキュリティと保護"
      }
    },
    bento: {
      badge: "内部テクノロジー",
      title: "極限の",
      titleAccent: "パフォーマンス設計",
      subtitle: "サーバー通信を完全に排除し、ドキュメント処理を再構築。高速、セキュア、無制限。",
      card1: {
        badge: "100% プライバシー保証",
        title: "ゼロナレッジ・ローカルブラウザ処理",
        desc: "従来のオンライン変換ツールとは異なり、機密ドキュメントがリモートサーバーに送信されることはありません。",
        tag1: "サーバー送信なし",
        tag2: "GDPR / HIPAA 準拠",
        tag3: "一時メモリ内処理"
      },
      card2: {
        badge: "純粋なハードウェア性能",
        title: "WebAssembly & GPU アクセラレーション",
        desc: "最適化されたC++およびRustエンジンが端末のCPU上でネイティブ実行され、待ち時間なしで処理します。",
        tag1: "待ち時間0秒",
        tag2: "ネイティブ級の速度"
      },
      card3: {
        badge: "一括バッチ処理",
        title: "マルチファイル・リアクター",
        desc: "マルチスレッド分割により、多数のドキュメントを同時に結合、抽出、変換できます。",
        tag1: "最大100ファイル",
        tag2: "1クリックZIP出力"
      },
      card4: {
        badge: "完全な自由",
        title: "アカウント不要・課金なし・制限なし",
        desc: "クレジットカード不要、定期購入なし、ファイルサイズ制限なし。PWAとしてオフラインでも動作します。",
        formatsLabel: "対応フォーマット：",
        browseAll: "すべての形式を見る"
      }
    },
    workflow: {
      badge: "スムーズな体験",
      title: "わずか",
      titleAccent: "3つの簡単ステップ",
      subtitle: "複雑な設定やアカウント作成は一切不要。ファイル選択から結果まで5秒以内。",
      step1: {
        title: "ファイルを選択またはドロップ",
        desc: "PDF、オフィス文書、または画像を選択。自動検出器が最適なツールを即座に提案します。",
        highlight: "遅延ゼロのファイル読込"
      },
      step2: {
        title: "調整・編集・最適化",
        desc: "ページの並べ替え、圧縮率の調整、電子署名、256ビットAES暗号化などを実行。",
        highlight: "クライアントWASMエンジン"
      },
      step3: {
        title: "ローカルへ即時ダウンロード",
        desc: "サーバー待機やメール受信を待つことなく、完成したファイルを端末に直接保存。",
        highlight: "メモリ直結ストリーミング"
      },
      tag: "インタラクティブ＆自動化",
      cta: "スタジオを起動する"
    },
    faq: {
      badge: "よくあるご質問",
      title: "FAQ・",
      titleAccent: "質問と回答",
      subtitle: "PDFRucheのプライバシー、テクノロジー、機能についての詳細をご確認いただけます。",
      q1: "ファイルは安全で、本当にサーバーへ送信されませんか？",
      a1: "はい、100%安全です。PDFRucheはWebAssemblyを使用して完全にブラウザ内で動作し、ファイルが外部へ送信されることはありません。",
      q2: "ファイルサイズ制限や隠れた料金はありますか？",
      a2: "制限はありません。あらゆるサイズのドキュメントを処理でき、すべてのツールを完全無料でご利用いただけます。",
      q3: "PWAとしてオフラインで使用できますか？",
      a3: "はい。macOS、Windows、Linux、Android、iOSにPWAとしてインストール可能で、オフラインでも機能します。",
      q4: "どのようなファイル形式に対応していますか？",
      a4: "PDF、Word (DOCX/DOC)、Excel (XLSX/XLS)、PowerPoint (PPTX/PPT)、画像 (JPG, PNG, WEBP, SVG)、テキスト、EPUBに対応しています。",
      q5: "WebAssemblyによるPDF処理はどのように機能しますか？",
      a5: "高性能なC++およびRustエンジンをWebAssembly (WASM) にコンパイルし、お使いの端末上で直接ネイティブに近い速度で実行します。"
    }
  },
  ko: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "100% 로컬 브라우저 엔진",
      zeroUploads: "클라우드 업로드 0건",
      titlePrefix: "모든 PDF를 위한",
      titleAccent: "크리에이티브 파워하우스",
      subtitle: "최고의 보안으로 문서를 편집, 변환, 압축, 구성 및 보호하세요. 클라이언트 측 WebAssembly 구동 — 번개처럼 빠르고 완전 무료."
    },
    stats: {
      toolsLabel: "전문 PDF 도구",
      toolsSubtext: "편집, 변환 및 최적화용",
      privacyLabel: "100% 클라이언트 보안",
      privacySubtext: "파일이 기기를 절대 떠나지 않습니다",
      speedLabel: "서버 대기 시간",
      speedSubtext: "WebAssembly 즉각 실행",
      languagesLabel: "지원 언어",
      languagesSubtext: "완벽하게 현지화된 다국어 UI"
    },
    studio: {
      badge: "인터랙티브 워크스페이스",
      title: "전체",
      titleAccent: "도구 둘러보기",
      subtitle: "{count}개 이상의 무료 유틸리티에 즉시 접근하세요. 카드를 클릭하여 전용 워크벤치를 시작하세요.",
      searchPlaceholder: "도구 검색...",
      formatLabel: "포맷:",
      allFormats: "모든 포맷",
      showingTools: "{count}개 도구 표시 중",
      hotBadge: "인기",
      defaultDesc: "브라우저 기반의 안전하고 빠른 로컬 PDF 처리.",
      openToolAria: "{title} 열기",
      favAdd: "즐겨찾기에 추가",
      favRemove: "즐겨찾기에서 제거",
      emptyTitle: "조건과 일치하는 도구가 없습니다",
      emptyDesc: "검색어를 변경하거나 필터를 초기화해 보세요.",
      resetFilters: "필터 초기화",
      categories: {
        all: "모든 도구",
        popular: "인기",
        favorites: "즐겨찾기 ({count})",
        editAnnotate: "편집 및 주석",
        organizeManage: "구성 및 관리",
        convertToPdf: "PDF로 변환",
        convertFromPdf: "PDF에서 변환",
        optimizeRepair: "최적화 및 복구",
        securePdf: "보안 및 보호"
      }
    },
    bento: {
      badge: "핵심 기술",
      title: "최상의 성능을 위한",
      titleAccent: "엔지니어링",
      subtitle: "서버를 완전히 배제하여 문서 처리를 새롭게 정의했습니다. 빠르고 안전하며 무제한입니다.",
      card1: {
        badge: "100% 개인정보 보장",
        title: "제로 지식 로컬 브라우저 처리",
        desc: "기존 온라인 변환기와 달리 기밀 문서가 원격 서버로 전송되지 않습니다. 브라우저의 격리된 메모리에서 직접 실행됩니다.",
        tag1: "서버 업로드 없음",
        tag2: "GDPR 및 HIPAA 준수",
        tag3: "임시 메모리 처리"
      },
      card2: {
        badge: "순수 하드웨어 속도",
        title: "WebAssembly 및 GPU 구동",
        desc: "컴파일된 C++ 및 Rust 엔진이 기기 CPU에서 네이티브로 실행되어 대기 시간 없이 초고속으로 작동합니다.",
        tag1: "대기 시간 0초",
        tag2: "네이티브급 성능"
      },
      card3: {
        badge: "일괄 처리",
        title: "다중 파일 배치 리액터",
        desc: "멀티스레딩 기술로 수십 개의 문서를 동시에 결합, 추출 또는 변환할 수 있습니다.",
        tag1: "최대 100개 파일",
        tag2: "원클릭 ZIP 다운로드"
      },
      card4: {
        badge: "완전한 자유",
        title: "계정 없음, 요금 없음, 제한 없음",
        desc: "신용카드, 구독, 파일 크기 제한이 없습니다. PWA로 오프라인에서도 사용할 수 있습니다.",
        formatsLabel: "지원 포맷:",
        browseAll: "모든 포맷 보기"
      }
    },
    workflow: {
      badge: "손쉬운 진행",
      title: "단",
      titleAccent: "3단계로 완료",
      subtitle: "복잡한 설정이나 계정 없이 파일 선택부터 결과까지 5초 안에 완료됩니다.",
      step1: {
        title: "파일 선택 또는 드롭",
        desc: "PDF, 문서 또는 이미지를 선택하면 스마트 자동 감지기가 알맞은 도구를 즉시 찾아줍니다.",
        highlight: "지연 없는 파일 로딩"
      },
      step2: {
        title: "조정, 편집 및 최적화",
        desc: "페이지 재정렬, 압축률 설정, 전자 서명, 256비트 AES 암호화 등을 손쉽게 적용하세요.",
        highlight: "클라이언트 WASM 엔진"
      },
      step3: {
        title: "즉각적인 로컬 다운로드",
        desc: "서버 대기나 이메일 수신 없이 완성된 문서를 디스크에 바로 저장하세요.",
        highlight: "다이렉트 메모리 스트리밍"
      },
      tag: "인터랙티브 & 자동화",
      cta: "스튜디오 시작하기"
    },
    faq: {
      badge: "자주 묻는 질문",
      title: "궁금한 점이",
      titleAccent: "있으신가요?",
      subtitle: "PDFRuche의 개인정보 보호, 기술 및 기능에 대해 알아보세요.",
      q1: "문서가 안전하며 정말 서버로 업로드되지 않나요?",
      a1: "네, 100% 안전합니다. PDFRuche는 WebAssembly를 통해 브라우저 내부에서만 실행되므로 파일이 인터넷으로 전송되지 않습니다.",
      q2: "파일 크기 제한이나 숨겨진 요금이 있나요?",
      a2: "인위적인 제한이 없습니다. 모든 크기의 문서를 무료로 무제한 처리할 수 있습니다.",
      q3: "PWA로 오프라인에서도 사용할 수 있나요?",
      a3: "물론입니다. macOS, Windows, Linux, Android, iOS에 PWA로 설치하여 인터넷 없이도 작동합니다.",
      q4: "어떤 파일 형식을 지원하나요?",
      a4: "PDF, Word (DOCX/DOC), Excel (XLSX/XLS), PowerPoint (PPTX/PPT), 이미지 (JPG, PNG, WEBP, SVG), 텍스트, EPUB을 지원합니다.",
      q5: "WebAssembly 기반 PDF 처리는 어떻게 작동하나요?",
      a5: "고성능 C++ 및 Rust 엔진을 WebAssembly로 컴파일하여 기기에서 네이티브에 가까운 속도로 직접 연산합니다."
    }
  },
  zh: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "100% 本地浏览器引擎",
      zeroUploads: "零云端上传",
      titlePrefix: "全能强大的",
      titleAccent: "PDF 创意工具箱",
      subtitle: "以极高隐私安全处理、转换、压缩、整理和保护您的文档。完全基于本地 WebAssembly 技术构建 — 极速且完全免费。"
    },
    stats: {
      toolsLabel: "专业 PDF 工具",
      toolsSubtext: "满足编辑、转换与优化需求",
      privacyLabel: "100% 本地隐私安全",
      privacySubtext: "文件绝不离开您的设备",
      speedLabel: "服务器等待时间",
      speedSubtext: "WebAssembly 毫秒级即时执行",
      languagesLabel: "支持语言",
      languagesSubtext: "全界面国际化多语言支持"
    },
    studio: {
      badge: "交互式工作区",
      title: "探索完整的",
      titleAccent: "工具套件",
      subtitle: "即时访问 {count}+ 款免费工具。点击任意卡片即可进入专属工作台。",
      searchPlaceholder: "搜索工具...",
      formatLabel: "格式：",
      allFormats: "所有格式",
      showingTools: "显示 {count} 款工具",
      hotBadge: "热门",
      defaultDesc: "快速、安全且注重隐私的本地浏览器 PDF 处理。",
      openToolAria: "打开 {title}",
      favAdd: "添加到收藏",
      favRemove: "取消收藏",
      emptyTitle: "未找到符合条件的工具",
      emptyDesc: "请尝试更换搜索词或重置筛选条件。",
      resetFilters: "重置筛选",
      categories: {
        all: "全部工具",
        popular: "热门推荐",
        favorites: "我的收藏 ({count})",
        editAnnotate: "编辑与标注",
        organizeManage: "组织与管理",
        convertToPdf: "转为 PDF",
        convertFromPdf: "从 PDF 转换",
        optimizeRepair: "优化与修复",
        securePdf: "安全与加密"
      }
    },
    bento: {
      badge: "硬核技术",
      title: "专为",
      titleAccent: "极致性能打造",
      subtitle: "彻底剔除云端服务器依赖，重新定义文档处理体验。极速、私密、随心所欲。",
      card1: {
        badge: "100% 隐私承诺",
        title: "零知识本地沙箱处理",
        desc: "与传统在线转换器不同，您的机密文件绝不会上传至任何远程服务器。所有运算均在浏览器隔离内存中完成。",
        tag1: "零服务器上传",
        tag2: "符合 GDPR / HIPAA",
        tag3: "即时内存运算"
      },
      card2: {
        badge: "纯粹硬件算力",
        title: "WebAssembly 与 GPU 加速",
        desc: "编译自 C++ 与 Rust 的底层引擎直接在您的设备 CPU 上原生运行，无需等待排队。",
        tag1: "0 秒排队",
        tag2: "接近原生性能"
      },
      card3: {
        badge: "批量高效处理",
        title: "多文件并发批处理",
        desc: "通过多线程分块架构，支持同时合并、提取或转换数十份文档。",
        tag1: "支持多达 100 个文件",
        tag2: "一键 ZIP 打包导出"
      },
      card4: {
        badge: "无限自由",
        title: "免注册、无付费墙、无文件大小限制",
        desc: "无需信用卡，无强制订阅，更无体积门槛。支持作为 PWA 离线运行。",
        formatsLabel: "支持格式：",
        browseAll: "浏览所有格式"
      }
    },
    workflow: {
      badge: "极简流程",
      title: "仅需",
      titleAccent: "3 步轻松搞定",
      subtitle: "无需繁琐设置或注册账号。从选文件到完成只需 5 秒。",
      step1: {
        title: "选择或拖入文件",
        desc: "选择您的 PDF、Office 文档或图片，智能探测器即刻匹配最适合的工具。",
        highlight: "零延迟文件加载"
      },
      step2: {
        title: "调整、编辑与优化",
        desc: "重排页面、调整压缩比、绘制电子签名或设置 256 位 AES 强力加密。",
        highlight: "客户端 WASM 引擎"
      },
      step3: {
        title: "即时本地保存",
        desc: "处理完毕直接保存在本地硬盘，无需等待邮件发送或远程链接下载。",
        highlight: "内存直流导出"
      },
      tag: "智能交互自动化",
      cta: "启动交互式工作区"
    },
    faq: {
      badge: "常见问题",
      title: "解答您的",
      titleAccent: "所有疑问",
      subtitle: "了解关于 PDFRuche 隐私安全、底层技术与功能的全部信息。",
      q1: "我的文件安全吗？真的不会上传到服务器吗？",
      a1: "是的，100% 安全。PDFRuche 完全基于 WebAssembly 在您的本地浏览器中运行，文件绝不通过网络发送到任何云端服务器。",
      q2: "有文件大小限制或隐藏费用吗？",
      a2: "没有任何人为限制。您可以免费处理任意大小的文件，使用所有工具无任何费用。",
      q3: "可以作为 PWA 离线使用吗？",
      a3: "当然可以。PDFRuche 支持在 macOS、Windows、Linux、Android 及 iOS 上安装为 PWA，离线环境下也能正常使用。",
      q4: "支持哪些文件格式？",
      a4: "支持 PDF、Word (DOCX/DOC)、Excel (XLSX/XLS)、PowerPoint (PPTX/PPT)、各类图片、文本文件及 EPUB。",
      q5: "浏览器端 WebAssembly 技术是如何工作的？",
      a5: "我们将高性能 C++ 和 Rust 引擎编译为 WebAssembly (WASM)，直接利用您的设备硬件算力在网页标签内完成复杂运算。"
    }
  },
  "zh-TW": {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "100% 本地瀏覽器引擎",
      zeroUploads: "零雲端上傳",
      titlePrefix: "全能強大的",
      titleAccent: "PDF 創意工具箱",
      subtitle: "以極高隱私安全處理、轉換、壓縮、整理與保護您的文件。完全基於本地 WebAssembly 技術構建 — 極速且完全免費。"
    },
    stats: {
      toolsLabel: "專業 PDF 工具",
      toolsSubtext: "滿足編輯、轉換與最佳化需求",
      privacyLabel: "100% 本地隱私安全",
      privacySubtext: "檔案絕不離開您的裝置",
      speedLabel: "伺服器等待時間",
      speedSubtext: "WebAssembly 毫秒級即時執行",
      languagesLabel: "支援語言",
      languagesSubtext: "全介面國際化多語言支援"
    },
    studio: {
      badge: "互動式工作區",
      title: "探索完整的",
      titleAccent: "工具套件",
      subtitle: "即時存取 {count}+ 款免費工具。點擊任意卡片即可進入專屬工作台。",
      searchPlaceholder: "搜尋工具...",
      formatLabel: "格式：",
      allFormats: "所有格式",
      showingTools: "顯示 {count} 款工具",
      hotBadge: "熱門",
      defaultDesc: "快速、安全且注重隱私的本地瀏覽器 PDF 處理。",
      openToolAria: "開啟 {title}",
      favAdd: "加入收藏",
      favRemove: "取消收藏",
      emptyTitle: "未找到符合條件的工具",
      emptyDesc: "請嘗試更換搜尋詞或重設篩選條件。",
      resetFilters: "重設篩選",
      categories: {
        all: "全部工具",
        popular: "熱門推薦",
        favorites: "我的收藏 ({count})",
        editAnnotate: "編輯與標註",
        organizeManage: "組織與管理",
        convertToPdf: "轉為 PDF",
        convertFromPdf: "從 PDF 轉換",
        optimizeRepair: "最佳化與修復",
        securePdf: "安全與加密"
      }
    },
    bento: {
      badge: "硬核技術",
      title: "專為",
      titleAccent: "極致效能打造",
      subtitle: "徹底剔除雲端伺服器依賴，重新定義文件處理體驗。極速、私密、隨心所欲。",
      card1: {
        badge: "100% 隱私承諾",
        title: "零知識本地沙箱處理",
        desc: "與傳統線上轉換器不同，您的機密檔案絕不會上傳至任何遠端伺服器。",
        tag1: "零伺服器上傳",
        tag2: "符合 GDPR / HIPAA",
        tag3: "即時記憶體運算"
      },
      card2: {
        badge: "純粹硬體算力",
        title: "WebAssembly 與 GPU 加速",
        desc: "編譯自 C++ 與 Rust 的底層引擎直接在您的裝置 CPU 上原生運行，無需等待排隊。",
        tag1: "0 秒排隊",
        tag2: "接近原生效能"
      },
      card3: {
        badge: "批次高效處理",
        title: "多檔案並發批處理",
        desc: "透過多執行緒分塊架構，支援同時合併、擷取或轉換數十份文件。",
        tag1: "支援多達 100 個檔案",
        tag2: "一鍵 ZIP 打包匯出"
      },
      card4: {
        badge: "無限自由",
        title: "免註冊、無付費牆、無檔案大小限制",
        desc: "無需信用卡，無強制訂閱，更無體積門檻。支援作為 PWA 離線運行。",
        formatsLabel: "支援格式：",
        browseAll: "瀏覽所有格式"
      }
    },
    workflow: {
      badge: "極簡流程",
      title: "僅需",
      titleAccent: "3 步輕鬆搞定",
      subtitle: "無需繁瑣設定或註冊帳號。從選檔案到完成只需 5 秒。",
      step1: {
        title: "選擇或拖入檔案",
        desc: "選擇您的 PDF、Office 文件或圖片，智慧探測器即刻匹配最適合的工具。",
        highlight: "零延遲檔案載入"
      },
      step2: {
        title: "調整、編輯與最佳化",
        desc: "重排頁面、調整壓縮比、繪製電子簽名或設定 256 位元 AES 強力加密。",
        highlight: "客戶端 WASM 引擎"
      },
      step3: {
        title: "即時本地儲存",
        desc: "處理完畢直接儲存在本機硬碟，無需等待郵件發送或遠端連結下載。",
        highlight: "記憶體直流匯出"
      },
      tag: "智慧互動自動化",
      cta: "啟動互動式工作區"
    },
    faq: {
      badge: "常見問題",
      title: "解答您的",
      titleAccent: "所有疑問",
      subtitle: "了解關於 PDFRuche 隱私安全、底層技術與功能的全部資訊。",
      q1: "我的檔案安全嗎？真的不會上傳到伺服器嗎？",
      a1: "是的，100% 安全。PDFRuche 完全基於 WebAssembly 在您的本地瀏覽器中運行，檔案絕不透過網路發送到任何雲端伺服器。",
      q2: "有檔案大小限制或隱藏費用嗎？",
      a2: "沒有任何人工限制。您可以免費處理任意大小的檔案，使用所有工具無任何費用。",
      q3: "可以作為 PWA 離線使用嗎？",
      a3: "當然可以。PDFRuche 支援在 macOS、Windows、Linux、Android 及 iOS 上安裝為 PWA，離線環境下也能正常使用。",
      q4: "支援哪些檔案格式？",
      a4: "支援 PDF、Word (DOCX/DOC)、Excel (XLSX/XLS)、PowerPoint (PPTX/PPT)、各類圖片、文字檔及 EPUB。",
      q5: "瀏覽器端 WebAssembly 技術是如何運作的？",
      a5: "我們將高效能 C++ 和 Rust 引擎編譯為 WebAssembly (WASM)，直接利用您的裝置硬體算力在網頁標籤內完成複雜運算。"
    }
  },
  ar: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "محرك متصفح محلي 100%",
      zeroUploads: "صفر رفع إلى السحابة",
      titlePrefix: "المنصة الإبداعية الشاملة لكل ما يخص",
      titleAccent: "ملفات PDF",
      subtitle: "عدّل، حوّل، اضغط، نظّم واحمِ مستنداتك بأعلى معايير الخصوصية. مدعوم بالكامل بتقنية WebAssembly المحلية — فائق السرعة ومجاني تماماً."
    },
    stats: {
      toolsLabel: "أدوات PDF متخصصة",
      toolsSubtext: "للتحرير والتحويل والتحسين",
      privacyLabel: "خصوصية محلية 100%",
      privacySubtext: "ملفاتك لا تغادر جهازك أبداً",
      speedLabel: "وقت انتظار الخادم",
      speedSubtext: "تنفيذ فوري عبر WebAssembly",
      languagesLabel: "اللغات المدعومة",
      languagesSubtext: "واجهة متعددة اللغات بالكامل"
    },
    studio: {
      badge: "مساحة العمل التفاعلية",
      title: "استكشف المجموعة الكاملة من",
      titleAccent: "الأدوات",
      subtitle: "وصول فوري لأكثر من {count} أداة مجانية. انقر على أي بطاقة لبدء العمل فوراً.",
      searchPlaceholder: "البحث في الأدوات...",
      formatLabel: "الصيغة:",
      allFormats: "جميع الصيغ",
      showingTools: "عرض {count} أداة",
      hotBadge: "شائع",
      defaultDesc: "معالجة ملفات PDF محلية وسريعة وآمنة في المتصفح.",
      openToolAria: "فتح {title}",
      favAdd: "إضافة إلى المفضلة",
      favRemove: "إزالة من المفضلة",
      emptyTitle: "لم يتم العثور على أدوات مطابقة",
      emptyDesc: "جرب تغيير مصطلحات البحث أو إعادة تعيين عوامل التصفية.",
      resetFilters: "إعادة ضبط التصفية",
      categories: {
        all: "جميع الأدوات",
        popular: "الأكثر استخداماً",
        favorites: "المفضلة ({count})",
        editAnnotate: "تحرير وتعليق",
        organizeManage: "تنظيم وإدارة",
        convertToPdf: "تحويل إلى PDF",
        convertFromPdf: "تحويل من PDF",
        optimizeRepair: "تحسين وإصلاح",
        securePdf: "أمان وحماية"
      }
    },
    bento: {
      badge: "التقنية المبتكرة",
      title: "مصمم لتحقيق",
      titleAccent: "أقصى أداء",
      subtitle: "أعدنا ابتكار معالجة المستندات بإلغاء الحاجة للخوادم تماماً. سريع، آمن، وبدون حدود.",
      card1: {
        badge: "ضمان خصوصية 100%",
        title: "معالجة محلية بدون خوادم",
        desc: "على عكس المحولات التقليدية، لا يتم رفع مستنداتك السرية إلى أي خادم خارجي على الإطلاق.",
        tag1: "بدون رفع للملفات",
        tag2: "متوافق مع GDPR و HIPAA",
        tag3: "معالجة بالذاكرة المؤقتة"
      },
      card2: {
        badge: "سرعة عتاد حقيقية",
        title: "مدعوم بـ WebAssembly و GPU",
        desc: "محركات C++ و Rust المجمعة تعمل مباشرة على معالج جهازك بدون طوابير انتظار.",
        tag1: "0 ثوانٍ انتظار",
        tag2: "أداء فائق السرعة"
      },
      card3: {
        badge: "معالجة دفعات متعددة",
        title: "معالج الملفات المتعددة",
        desc: "ادمج أو استخرج أو حوّل عشرات المستندات في وقت واحد بفضل المعالجة المتوازية.",
        tag1: "حتى 100 ملف",
        tag2: "تصدير ZIP بنقرة واحدة"
      },
      card4: {
        badge: "حرية مطلقة",
        title: "بدون حسابات، بدون اشتراكات، بدون قيود",
        desc: "لا حاجة لبطاقات ائتمان أو اشتراكات أو قيود على حجم الملفات. يعمل بدون إنترنت كـ PWA.",
        formatsLabel: "الصيغ المدعومة:",
        browseAll: "عرض جميع الصيغ"
      }
    },
    workflow: {
      badge: "تجربة سلسة",
      title: "كيف يعمل في",
      titleAccent: "3 خطوات بسيطة",
      subtitle: "بدون إعدادات معقدة أو حسابات. من الملف إلى النتيجة في أقل من 5 ثوانٍ.",
      step1: {
        title: "اختر أو اسحب ملفك",
        desc: "حدد ملف PDF أو مستند أو صورة. يكتشف النظام الأداة المثالية فوراً.",
        highlight: "تحميل فوري بدون تأخير"
      },
      step2: {
        title: "عدّل، نسّق وحسّن",
        desc: "أعد ترتيب الصفحات، اضبط الضغط، وقّع إلكترونياً أو شفّر بـ AES 256 بت.",
        highlight: "محرك WASM من جانب العميل"
      },
      step3: {
        title: "تنزيل محلي فوري",
        desc: "احفظ مستندك مباشرة على جهازك دون انتظار خوادم بعيدة أو روابط بريد.",
        highlight: "تصدير مباشر من الذاكرة"
      },
      tag: "تفاعلي وتلقائي",
      cta: "تشغيل الاستوديو التفاعلي"
    },
    faq: {
      badge: "الأسئلة الشائعة",
      title: "إجابات على",
      titleAccent: "استفساراتك",
      subtitle: "كل ما تحتاج معرفته حول خصوصية وتقنيات وإمكانيات PDFRuche.",
      q1: "هل مستنداتي آمنة ولا يتم رفعها لأي خادم أبداً؟",
      a1: "نعم 100%. يعمل PDFRuche بالكامل في متصفحك عبر WebAssembly. تتم معالجة ملفاتك محلياً ولا تُنقل عبر الإنترنت.",
      q2: "هل هناك قيود على حجم الملفات أو رسوم مخفية؟",
      a2: "لا توجد أي قيود مصطنعة. يمكنك معالجة مستندات بأي حجم واستخدام كافة الأدوات مجاناً.",
      q3: "هل يمكن استخدام PDFRuche بدون إنترنت كـ PWA؟",
      a3: "بالتأكيد. يمكن تثبيت PDFRuche على كافة الأنظمة وتطبيقه للعمل أوفلاين بدون إنترنت.",
      q4: "ما هي صيغ الملفات المدعومة؟",
      a4: "يدعم PDF، Word، Excel، PowerPoint، الصور (JPG, PNG, WEBP, SVG)، والنصوص و EPUB.",
      q5: "كيف تعمل معالجة PDF عبر WebAssembly داخل المتصفح؟",
      a5: "نقوم بتجميع محركات عالية الأداء بلغات C++ و Rust إلى WebAssembly ليعالج جهازك كل العمليات مباشرة بأقصى سرعة."
    }
  },
  id: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "100% Mesin Browser Lokal",
      zeroUploads: "Nol Unggahan ke Cloud",
      titlePrefix: "Pusat Kreatif Utama untuk",
      titleAccent: "Segala Kebutuhan PDF",
      subtitle: "Manipulasi, konversi, kompres, atur, dan amankan dokumen Anda dengan privasi total. Ditenagai oleh WebAssembly lokal — sangat cepat dan gratis."
    },
    stats: {
      toolsLabel: "Alat PDF Khusus",
      toolsSubtext: "Untuk mengedit, mengonversi & mengoptimalkan",
      privacyLabel: "Privasi 100% Lokal",
      privacySubtext: "File tidak pernah meninggalkan perangkat Anda",
      speedLabel: "Waktu Tunggu Server",
      speedSubtext: "Eksekusi instan WebAssembly",
      languagesLabel: "Bahasa yang Didukung",
      languagesSubtext: "Antarmuka internasional lengkap"
    },
    studio: {
      badge: "Ruang Kerja Interaktif",
      title: "Jelajahi Rangkaian Lengkap",
      titleAccent: "Alat PDF",
      subtitle: "Akses instan ke {count}+ utilitas gratis. Klik kartu apa pun untuk meluncurkan alat terkait.",
      searchPlaceholder: "Cari alat...",
      formatLabel: "Format:",
      allFormats: "Semua Format",
      showingTools: "Menampilkan {count} alat",
      hotBadge: "POPULER",
      defaultDesc: "Pemrosesan PDF lokal, cepat, dan aman di browser.",
      openToolAria: "Buka {title}",
      favAdd: "Tambah ke favorit",
      favRemove: "Hapus dari favorit",
      emptyTitle: "Tidak ada alat yang cocok dengan kriteria Anda",
      emptyDesc: "Coba sesuaikan istilah pencarian atau reset filter aktif.",
      resetFilters: "Reset Filter",
      categories: {
        all: "Semua Alat",
        popular: "Populer",
        favorites: "Favorit ({count})",
        editAnnotate: "Edit & Anotasi",
        organizeManage: "Atur & Kelola",
        convertToPdf: "Konversi ke PDF",
        convertFromPdf: "Konversi dari PDF",
        optimizeRepair: "Optimalkan & Perbaiki",
        securePdf: "Keamanan & Lindungi"
      }
    },
    bento: {
      badge: "Teknologi di Balik Layar",
      title: "Dirancang untuk",
      titleAccent: "Performa Maksimal",
      subtitle: "Kami mengubah pemrosesan dokumen dengan menghilangkan server sepenuhnya. Cepat, privat, dan tanpa batas.",
      card1: {
        badge: "Jaminan Privasi 100%",
        title: "Pemrosesan Browser Lokal Tanpa Jejak",
        desc: "Tidak seperti konverter online biasa, dokumen rahasia Anda tidak pernah diunggah ke server jarak jauh.",
        tag1: "Tanpa Unggah ke Server",
        tag2: "Sesuai GDPR & HIPAA",
        tag3: "Memori Sementara"
      },
      card2: {
        badge: "Kecepatan Perangkat Keras Murni",
        title: "Ditenagai WebAssembly & GPU",
        desc: "Mesin C++ dan Rust yang dikompilasi berjalan langsung di CPU perangkat Anda tanpa antrean.",
        tag1: "0 Detik Waktu Tunggu",
        tag2: "Kecepatan Mendekati Native"
      },
      card3: {
        badge: "Pemrosesan Massal",
        title: "Reaktor Batch Multi-File",
        desc: "Gabungkan, ekstrak, atau konversi puluhan dokumen sekaligus dengan pemrosesan multi-utas.",
        tag1: "Hingga 100 File",
        tag2: "Ekspor ZIP 1-Klik"
      },
      card4: {
        badge: "Kebebasan Penuh",
        title: "Tanpa Akun, Tanpa Biaya, Tanpa Batas",
        desc: "Tanpa kartu kredit, tanpa langganan, dan tanpa batas ukuran file. Berfungsi bahkan saat offline sebagai PWA.",
        formatsLabel: "Format yang didukung:",
        browseAll: "Lihat Semua Format"
      }
    },
    workflow: {
      badge: "Langkah Mudah",
      title: "Cara Kerja dalam",
      titleAccent: "3 Langkah Sederhana",
      subtitle: "Tanpa pengaturan rumit, tanpa akun. Dari file hingga hasil dalam waktu kurang dari 5 detik.",
      step1: {
        title: "Pilih atau Tarik File Anda",
        desc: "Pilih PDF, dokumen Office, atau gambar Anda. Detektor pintar langsung mencocokkan alat yang tepat.",
        highlight: "Pemuatan file tanpa latensi"
      },
      step2: {
        title: "Sesuaikan, Edit & Optimalkan",
        desc: "Atur ulang halaman, sesuaikan rasio kompresi, beri tanda tangan elektronik, atau enkripsi dengan AES 256-bit.",
        highlight: "Mesin WASM sisi klien"
      },
      step3: {
        title: "Unduh Lokal Instan",
        desc: "Simpan dokumen Anda langsung ke perangkat tanpa menunggu antrean server atau tautan email.",
        highlight: "Streaming memori langsung"
      },
      tag: "Interaktif & Otomatis",
      cta: "Luncurkan Studio Interaktif"
    },
    faq: {
      badge: "Punya Pertanyaan?",
      title: "Pertanyaan yang",
      titleAccent: "Sering Diajukan",
      subtitle: "Semua yang perlu Anda ketahui tentang privasi, teknologi, dan fitur PDFRuche.",
      q1: "Apakah dokumen saya aman dan benar-benar tidak pernah diunggah ke server?",
      a1: "Ya, 100%. PDFRuche berjalan sepenuhnya di browser Anda melalui WebAssembly. File Anda diproses di memori lokal.",
      q2: "Apakah ada batasan ukuran file atau biaya tersembunyi?",
      a2: "Tidak ada batasan buatan. Anda dapat memproses dokumen ukuran apa pun dan menggunakan semua alat secara gratis.",
      q3: "Bisakah saya menggunakan PDFRuche secara offline sebagai PWA?",
      a3: "Tentu saja. PDFRuche dapat diinstal di macOS, Windows, Linux, Android, dan iOS sebagai PWA dan bekerja offline.",
      q4: "Format file apa saja yang didukung?",
      a4: "PDFRuche mendukung PDF, Word (DOCX/DOC), Excel (XLSX/XLS), PowerPoint (PPTX/PPT), Gambar (JPG, PNG, WEBP, SVG), Teks, dan EPUB.",
      q5: "Bagaimana cara kerja pemrosesan PDF WebAssembly di browser?",
      a5: "Kami mengompilasi mesin performa tinggi C++ dan Rust ke WebAssembly (WASM), memungkinkan perangkat Anda memproses file dengan cepat."
    }
  },
  vi: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "100% Động Cơ Trình Duyệt Cục Bộ",
      zeroUploads: "Không Tải Lên Đám Mây",
      titlePrefix: "Trung Tâm Sáng Tạo Toàn Diện Cho",
      titleAccent: "Mọi Tác Vụ PDF",
      subtitle: "Xử lý, chuyển đổi, nén, sắp xếp và bảo mật tài liệu của bạn với quyền riêng tư tuyệt đối. Được hỗ trợ bởi WebAssembly cục bộ — siêu nhanh và hoàn toàn miễn phí."
    },
    stats: {
      toolsLabel: "Công Cụ PDF Chuyên Dụng",
      toolsSubtext: "Chỉnh sửa, chuyển đổi & tối ưu hóa",
      privacyLabel: "Bảo Mật 100% Cục Bộ",
      privacySubtext: "Tệp không bao giờ rời khỏi thiết bị của bạn",
      speedLabel: "Thời Gian Chờ Máy Chủ",
      speedSubtext: "Thực thi tức thì với WebAssembly",
      languagesLabel: "Ngôn Ngữ Hỗ Trợ",
      languagesSubtext: "Giao diện quốc tế hóa hoàn chỉnh"
    },
    studio: {
      badge: "Không Gian Làm Việc Tương Tác",
      title: "Khám Phá Bộ Công Cụ",
      titleAccent: "Toàn Diện",
      subtitle: "Truy cập tức thì vào hơn {count} tiện ích miễn phí. Nhấp vào thẻ bất kỳ để mở không gian chuyên dụng.",
      searchPlaceholder: "Tìm kiếm công cụ...",
      formatLabel: "Định dạng:",
      allFormats: "Tất Cả Định Dạng",
      showingTools: "Đang hiển thị {count} công cụ",
      hotBadge: "HOT",
      defaultDesc: "Xử lý PDF cục bộ, nhanh chóng và an toàn trong trình duyệt.",
      openToolAria: "Mở {title}",
      favAdd: "Thêm vào yêu thích",
      favRemove: "Xóa khỏi yêu thích",
      emptyTitle: "Không tìm thấy công cụ phù hợp",
      emptyDesc: "Hãy thử thay đổi từ khóa tìm kiếm hoặc đặt lại bộ lọc.",
      resetFilters: "Đặt Lại Bộ Lọc",
      categories: {
        all: "Tất Cả Công Cụ",
        popular: "Phổ Biến",
        favorites: "Yêu Thích ({count})",
        editAnnotate: "Chỉnh Sửa & Chú Thích",
        organizeManage: "Sắp Xếp & Quản Lý",
        convertToPdf: "Chuyển Sang PDF",
        convertFromPdf: "Chuyển Từ PDF",
        optimizeRepair: "Tối Ưu & Sửa Chữa",
        securePdf: "Bảo Mật & Khóa"
      }
    },
    bento: {
      badge: "Công Nghệ Cốt Lõi",
      title: "Được Thiết Kế Cho",
      titleAccent: "Hiệu Suất Tối Đa",
      subtitle: "Chúng tôi định nghĩa lại việc xử lý tài liệu bằng cách loại bỏ hoàn toàn máy chủ trung gian. Nhanh, bảo mật và không giới hạn.",
      card1: {
        badge: "Đảm Bảo Bảo Mật 100%",
        title: "Xử Lý Trình Duyệt Cục Bộ Không Dấu Vết",
        desc: "Không giống như các công cụ chuyển đổi trực tuyến thông thường, tài liệu mật của bạn không bao giờ bị tải lên bất kỳ máy chủ từ xa nào.",
        tag1: "Không Tải Lên Máy Chủ",
        tag2: "Tuân Thủ GDPR & HIPAA",
        tag3: "Xử Lý Trên Bộ Nhớ Tạm"
      },
      card2: {
        badge: "Tốc Độ Phần Cứng Thuần Túy",
        title: "Sức Mạnh WebAssembly & GPU",
        desc: "Các công cụ biên dịch từ C++ và Rust chạy trực tiếp trên CPU thiết bị của bạn với độ trễ cực thấp.",
        tag1: "0s Thời Gian Chờ",
        tag2: "Tốc Độ Gần Như Gốc"
      },
      card3: {
        badge: "Xử Lý Hàng Loạt",
        title: "Bộ Xử Lý Đa Tệp Đồng Thời",
        desc: "Kết hợp, trích xuất hoặc chuyển đổi hàng chục tài liệu cùng lúc với kiến trúc đa luồng thông minh.",
        tag1: "Lên Đến 100 Tệp",
        tag2: "Xuất ZIP 1-Click"
      },
      card4: {
        badge: "Tự Do Tuyệt Đối",
        title: "Không Cần Tài Khoản, Không Phí Ẩn, Không Giới Hạn",
        desc: "Không cần thẻ tín dụng, không đăng ký định kỳ và không giới hạn kích thước tệp. Hoạt động ngoại tuyến như một ứng dụng PWA.",
        formatsLabel: "Định dạng hỗ trợ:",
        browseAll: "Xem Tất Cả Định Dạng"
      }
    },
    workflow: {
      badge: "Quy Trình Dễ Dàng",
      title: "Hoạt Động Trong",
      titleAccent: "3 Bước Đơn Giản",
      subtitle: "Không cài đặt phức tạp, không cần tài khoản. Từ tệp đến kết quả trong chưa đầy 5 giây.",
      step1: {
        title: "Chọn Hoặc Kéo Thả Tệp",
        desc: "Chọn tệp PDF, tài liệu văn phòng hoặc hình ảnh. Bộ nhận diện tự động sẽ ghép nối công cụ lý tưởng ngay lập tức.",
        highlight: "Tải tệp không độ trễ"
      },
      step2: {
        title: "Điều Chỉnh, Chỉnh Sửa & Tối Ưu",
        desc: "Sắp xếp lại các trang, tùy chỉnh tỷ lệ nén, vẽ chữ ký điện tử hoặc mã hóa với chuẩn bảo mật AES 256-bit.",
        highlight: "Động cơ WASM phía client"
      },
      step3: {
        title: "Tải Về Trực Tiếp Tức Thì",
        desc: "Lưu tài liệu đã hoàn thành trực tiếp vào ổ đĩa của bạn mà không cần đợi hàng đợi máy chủ hoặc liên kết email.",
        highlight: "Truyền trực tiếp từ bộ nhớ"
      },
      tag: "Tương Tác & Tự Động",
      cta: "Khởi Chạy Studio Tương Tác"
    },
    faq: {
      badge: "Câu Hỏi Thường Gặp",
      title: "Giải Đáp",
      titleAccent: "Thắc Mắc",
      subtitle: "Mọi thông tin bạn cần biết về quyền riêng tư, công nghệ và khả năng của PDFRuche.",
      q1: "Tài liệu của tôi có an toàn và thực sự không bị tải lên máy chủ không?",
      a1: "Vâng, 100% an toàn. PDFRuche chạy hoàn toàn trong trình duyệt của bạn thông qua WebAssembly. Tệp của bạn được xử lý trong bộ nhớ cục bộ.",
      q2: "Có giới hạn kích thước tệp hoặc chi phí ẩn nào không?",
      a2: "Không có giới hạn nhân tạo nào. Bạn có thể xử lý tài liệu ở mọi kích thước và sử dụng miễn phí tất cả các công cụ.",
      q3: "Tôi có thể sử dụng PDFRuche ngoại tuyến dưới dạng PWA không?",
      a3: "Chắc chắn rồi. PDFRuche có thể được cài đặt trên macOS, Windows, Linux, Android và iOS dưới dạng PWA và hoạt động ngoại tuyến.",
      q4: "Hỗ trợ những định dạng tệp nào?",
      a4: "PDFRuche hỗ trợ PDF, Word (DOCX/DOC), Excel (XLSX/XLS), PowerPoint (PPTX/PPT), Hình ảnh (JPG, PNG, WEBP, SVG), Văn bản và EPUB.",
      q5: "Xử lý PDF bằng WebAssembly trong trình duyệt hoạt động như thế nào?",
      a5: "Chúng tôi biên dịch các động cơ hiệu suất cao C++ và Rust thành WebAssembly (WASM), cho phép thiết bị của bạn xử lý trực tiếp với tốc độ tối đa."
    }
  },
  ro: {
    hero: {
      liveBadge: "PDFRuche",
      localEngine: "Motor 100% Local în Browser",
      zeroUploads: "Fără Încărcare în Cloud",
      titlePrefix: "Centrul Creativ Suprem pentru",
      titleAccent: "Tot ce Înseamnă PDF",
      subtitle: "Manipulați, convertiți, comprimați, organizați și securizați documentele cu confidențialitate maximă. Rulare complet locală prin WebAssembly — ultrarapid și gratuit."
    },
    stats: {
      toolsLabel: "Instrumente PDF Specializate",
      toolsSubtext: "Pentru editare, conversie și optimizare",
      privacyLabel: "Confidențialitate 100% Locală",
      privacySubtext: "Fișierele nu părăsesc niciodată dispozitivul",
      speedLabel: "Timp de Așteptare Server",
      speedSubtext: "Execuție instantanee WebAssembly",
      languagesLabel: "Limbi Disponibile",
      languagesSubtext: "Interfață internațională completă"
    },
    studio: {
      badge: "Spațiu de Lucru Interactiv",
      title: "Explorați suita completă de",
      titleAccent: "Instrumente",
      subtitle: "Acces instantaneu la peste {count} utilitare gratuite. Faceți clic pe orice card pentru a lansa atelierul dedicat.",
      searchPlaceholder: "Filtrați instrumentele...",
      formatLabel: "Format:",
      allFormats: "Toate Formatele",
      showingTools: "{count} instrumente afișate",
      hotBadge: "POPULAR",
      defaultDesc: "Procesare PDF locală, rapidă și sigură în browser.",
      openToolAria: "Deschide {title}",
      favAdd: "Adaugă la favorite",
      favRemove: "Elimină din favorite",
      emptyTitle: "Niciun instrument nu corespunde criteriilor",
      emptyDesc: "Încercați să ajustați termenii de căutare sau să resetați filtrele.",
      resetFilters: "Resetați Filtrele",
      categories: {
        all: "Toate Instrumentele",
        popular: "Populare",
        favorites: "Favorite ({count})",
        editAnnotate: "Editare și Adnotare",
        organizeManage: "Organizare și Gestionare",
        convertToPdf: "Conversie în PDF",
        convertFromPdf: "Conversie din PDF",
        optimizeRepair: "Optimizare și Reparare",
        securePdf: "Securitate și Protecție"
      }
    },
    bento: {
      badge: "Tehnologie Avansată",
      title: "Proiectat pentru",
      titleAccent: "Performanță Maximă",
      subtitle: "Am reinventat procesarea documentelor eliminând complet serverele. Rapid, privat și fără limite.",
      card1: {
        badge: "Garanție de Confidențialitate 100%",
        title: "Procesare Locală în Browser",
        desc: "Spre deosebire de convertoarele online clasice, documentele dumneavoastră confidențiale nu sunt încărcate niciodată pe servere.",
        tag1: "Fără Upload pe Server",
        tag2: "Conform GDPR & HIPAA",
        tag3: "Procesare în Memorie Locală"
      },
      card2: {
        badge: "Viteză Hardware Pură",
        title: "Alimentat de WebAssembly și GPU",
        desc: "Motoarele compilate C++ și Rust rulează direct pe procesorul dispozitivului pentru o latență aproape nulă.",
        tag1: "0s Timp de Așteptare",
        tag2: "Performanță Nativă"
      },
      card3: {
        badge: "Procesare în Masă",
        title: "Procesare Multi-Fișier Simultană",
        desc: "Combinați, extrageți sau convertiți zeci de documente în același timp prin procesare multi-threading.",
        tag1: "Până la 100 de Fișiere",
        tag2: "Export ZIP cu 1 Clic"
      },
      card4: {
        badge: "Libertate Deplină",
        title: "Fără Conturi, Fără Plăți, Fără Limite",
        desc: "Fără carduri, fără abonamente și fără limite de dimensiune. Funcționează chiar și offline ca PWA.",
        formatsLabel: "Formate acceptate:",
        browseAll: "Vezi Toate Formatele"
      }
    },
    workflow: {
      badge: "Flux Simplu",
      title: "Cum Funcționează în",
      titleAccent: "3 Pași Simpli",
      subtitle: "Fără configurări complicate, fără conturi. De la fișier la rezultat în mai puțin de 5 secunde.",
      step1: {
        title: "Alegeți sau Trageți Fișierul",
        desc: "Selectați PDF-ul, documentul Office sau imaginea. Detectorul automat selectează imediat instrumentul ideal.",
        highlight: "Încărcare fără latență"
      },
      step2: {
        title: "Ajustați, Editați și Optimizați",
        desc: "Reorganizați paginile, reglați compresia, semnați electronic sau criptați cu securitate AES pe 256 de biți.",
        highlight: "Motor WASM pe client"
      },
      step3: {
        title: "Descărcare Locală Imediată",
        desc: "Salvați documentul final direct pe disc, fără a aștepta servere la distanță sau linkuri pe e-mail.",
        highlight: "Streaming direct din memorie"
      },
      tag: "Interactiv & Automat",
      cta: "Lansați Studioul Interactiv"
    },
    faq: {
      badge: "Întrebări?",
      title: "Întrebări",
      titleAccent: "Frecvente",
      subtitle: "Tot ce trebuie să știți despre confidențialitatea, tehnologia și capacitățile PDFRuche.",
      q1: "Sunt documentele mele în siguranță și chiar nu ajung pe servere?",
      a1: "Da, 100%. PDFRuche rulează în întregime în browserul dumneavoastră prin WebAssembly. Fișierele sunt procesate doar în memoria locală.",
      q2: "Există limite de dimensiune sau costuri ascunse?",
      a2: "Nu există limite artificiale. Puteți procesa documente de orice dimensiune și puteți utiliza gratuit toate instrumentele.",
      q3: "Pot folosi PDFRuche offline ca aplicație (PWA)?",
      a3: "Cu siguranță. PDFRuche se poate instala pe macOS, Windows, Linux, Android și iOS ca PWA și funcționează offline.",
      q4: "Ce formate de fișiere sunt acceptate?",
      a4: "PDFRuche acceptă PDF, Word (DOCX/DOC), Excel (XLSX/XLS), PowerPoint (PPTX/PPT), imagini (JPG, PNG, WEBP, SVG), text și EPUB.",
      q5: "Cum funcționează procesarea PDF prin WebAssembly în browser?",
      a5: "Compilăm motoare performante C++ și Rust în WebAssembly (WASM), permițând dispozitivului să efectueze operațiunile la viteză maximă."
    }
  }
};

// Update all 14 files
const locales = ['en', 'fr', 'es', 'de', 'it', 'pt', 'ja', 'ko', 'zh', 'zh-TW', 'ar', 'id', 'vi', 'ro'];

locales.forEach(loc => {
  const filePath = path.join(messagesDir, `${loc}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!data.home) data.home = {};
    data.home.v4 = translations[loc] || translations.en;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`Updated ${loc}.json`);
  }
});

