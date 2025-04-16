// Többnyelvű adatok a weboldal fordításához
const translations = {
    'hu': {
        // Navigáció
        'nav-home': 'Kezdőlap',
        'nav-features': 'Szolgáltatások',
        'nav-case-studies': 'Esettanulmányok',
        'nav-calculator': 'ROI Kalkulátor',
        'nav-testimonials': 'Vélemények',
        'nav-contact': 'Kapcsolat',
        
        // Hérosz szekció
        'hero-title': 'Növelje eladásait a Google Performance Max kampányokkal',
        'hero-subtitle': 'Szakértői szolgáltatásunk segítségével maximalizálja online marketingje teljesítményét és növelje a konverziókat',
        'hero-cta': 'Ingyenes konzultáció',
        
        // Szolgáltatások szekció
        'features-title': 'Miért válassza a Performance Max szolgáltatásunkat?',
        'feature1-title': 'Automatizált kampányok',
        'feature1-desc': 'Használja a Google AI-t a legjobb hirdetési lehetőségek megtalálásához minden csatornán keresztül, egyetlen kampányban.',
        'feature2-title': 'Precíz célzás',
        'feature2-desc': 'Találja meg a legjobb potenciális ügyfeleket a Google teljes ökoszisztémájában, beleértve a YouTube-ot, Discoveryt, Gmailt és keresést.',
        'feature3-title': 'Megnövelt konverziók',
        'feature3-desc': 'Átlagosan 30%-kal több konverziót érünk el ügyfeleinknek a hagyományos kampányokhoz képest, ugyanazon költségvetés mellett.',
        'feature4-title': 'Folyamatos optimalizálás',
        'feature4-desc': 'Csapatunk állandóan figyeli és finomítja a kampányokat a maximális teljesítmény érdekében.',
        'feature5-title': 'Időtakarékos megoldás',
        'feature5-desc': 'Nem kell több különálló kampányt kezelnie - minden egy helyen, egyszerűsítve az Ön életét.',
        'feature6-title': 'Jobb ROI',
        'feature6-desc': 'Alacsonyabb ügyfélszerzési költség és magasabb megtérülés a hirdetési költségvetés optimális felhasználásával.',
        
        // Esettanulmányok szekció
        'case-studies-title': 'Sikertörténetek',
        'case1-name': 'Divat Webáruház',
        'case1-role': 'Online ruházati kereskedés',
        'case1-desc': 'Ez a népszerű ruházati webáruház komoly kihívásokkal küzdött a szezonális forgalomingadozások miatt. A Performance Max kampányokkal sikerült stabilizálni az értékesítést és jelentősen növelni a kosárértéket.',
        'case1-metric1': 'Konverziók növekedése:',
        'case1-metric2': 'Kosárérték növekedés:',
        'case1-metric3': 'ROI:',
        
        'case2-name': 'Elektronikai Diszkont',
        'case2-role': 'Tech és elektronikai webáruház',
        'case2-desc': 'A magas értékű elektronikai termékeket forgalmazó webáruház nehezen találta meg a megfelelő közönséget. Az adatvezérelt Performance Max kampányokkal sikerült a valóban vásárlási szándékkal rendelkező ügyfeleket megtalálni.',
        'case2-metric1': 'Értékesítési érték növekedése:',
        'case2-metric2': 'Konverziós arány:',
        'case2-metric3': 'CPA csökkenés:',
        
        'case3-name': 'Kézműves Ajándékok',
        'case3-role': 'Niche ajándék webáruház',
        'case3-desc': 'Ez a kézműves ajándékokra specializálódott kisvállalkozás korábban nehezen találta meg célközönségét. A Performance Max pontosan célzott kampányoknak köszönhetően a forgalom és a konverziók drasztikusan megnőttek.',
        'case3-metric1': 'Weboldal forgalom:',
        'case3-metric2': 'Konverziók növekedése:',
        'case3-metric3': 'Új ügyfelek arány:',
        
        // ROI Kalkulátor szekció
        'calculator-title': 'ROI Kalkulátor',
        'calc-spend-label': 'Jelenlegi havi hirdetési költés (EUR)',
        'calc-conv-label': 'Jelenlegi havi konverziók száma',
        'calc-aov-label': 'Átlagos megrendelési érték (EUR)',
        'calc-margin-label': 'Átlagos haszonkulcs (%)',
        'calc-button': 'Kalkulálás',
        'calc-results-title': 'Az Ön becsült eredményei Performance Max szolgáltatásunkkal',
        'calc-expected-conv': 'Várható havi konverziók',
        'calc-expected-revenue': 'Várható havi bevétel',
        'calc-expected-profit': 'Várható havi haszon',
        'calc-expected-roi': 'Várható ROI',
        'calc-expected-growth': 'Ez ',
        
        // Vélemények szekció
        'testimonials-title': 'Amit ügyfeleink mondanak',
        'testimonial1-text': 'A Performance Max kampányok bevezetése óta webáruházunk forgalma jelentősen megnőtt. A csapat hozzáértő és mindig elérhető, ha kérdésünk van. Az eredmények magukért beszélnek - 200%-os ROI-t értünk el az első 3 hónapban!',
        'testimonial1-author': 'Kovács István',
        'testimonial1-role': 'VitaminShop tulajdonos',
        
        'testimonial2-text': 'Korábban más ügynökségekkel dolgoztunk együtt, de egyik sem tudott olyan eredményeket felmutatni, mint az AdMaximizer csapata. A Performance Max stratégiájuk valódi játékváltoztató volt számunkra - most kevesebb pénzt költünk hirdetésre, mégis több vásárlót érünk el.',
        'testimonial2-author': 'Nagy Júlia',
        'testimonial2-role': 'BabaStore marketingvezető',
        
        'testimonial3-text': 'Kis vállalkozásként eleinte szkeptikus voltam a Google Ads-szel kapcsolatban. Az AdMaximizer nem csak kiváló eredményeket hozott, hanem minden lépést elmagyaráztak, így mindig értettem, miért működnek a kampányaink. A Performance Max elképesztő megtérülést hoz nekünk minden hónapban.',
        'testimonial3-author': 'Tóth Balázs',
        'testimonial3-role': 'Kézműves Sajtok tulajdonos',
        
        // CTA szekció
        'cta-title': 'Készen áll a növekedésre?',
        'cta-text': 'Csatlakozzon több száz elégedett ügyfelünkhöz, akik már megtapasztalták a Performance Max erejét. Lépjen kapcsolatba velünk még ma egy ingyenes konzultációért!',
        'cta-button': 'Ingyenes konzultáció kérése',
        
        // Lábléc
        'footer-company': 'Vállalat',
        'footer-about': 'Rólunk',
        'footer-team': 'Csapatunk',
        'footer-careers': 'Karrier',
        'footer-contact': 'Kapcsolat',
        
        'footer-services': 'Szolgáltatások',
        'footer-pmax': 'Performance Max',
        'footer-search': 'Google Keresés',
        'footer-shopping': 'Google Shopping',
        'footer-display': 'Display hirdetések',
        
        'footer-resources': 'Erőforrások',
        'footer-blog': 'Blog',
        'footer-guides': 'Útmutatók',
        'footer-webinars': 'Webináriumok',
        'footer-case-studies': 'Esettanulmányok',
        
        'footer-connect': 'Kapcsolat',
        'footer-email': 'Email: info@admaximizer.com',
        'footer-phone': 'Telefon: +36 1 234 5678',
        
        'copyright-text': '© 2025 AdMaximizer. Minden jog fenntartva.'
    },
    
    'en': {
        // Navigation
        'nav-home': 'Home',
        'nav-features': 'Services',
        'nav-case-studies': 'Case Studies',
        'nav-calculator': 'ROI Calculator',
        'nav-testimonials': 'Testimonials',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Boost Your Sales with Google Performance Max Campaigns',
        'hero-subtitle': 'Maximize your online marketing performance and increase conversions with our expert services',
        'hero-cta': 'Get Free Consultation',
        
        // Features section
        'features-title': 'Why Choose Our Performance Max Services?',
        'feature1-title': 'Automated Campaigns',
        'feature1-desc': 'Leverage Google\'s AI to find the best ad opportunities across all channels in a single campaign.',
        'feature2-title': 'Precise Targeting',
        'feature2-desc': 'Find the best potential customers across Google\'s entire ecosystem, including YouTube, Discovery, Gmail, and Search.',
        'feature3-title': 'Increased Conversions',
        'feature3-desc': 'On average, we achieve 30% more conversions for our clients compared to traditional campaigns with the same budget.',
        'feature4-title': 'Continuous Optimization',
        'feature4-desc': 'Our team constantly monitors and refines campaigns for maximum performance.',
        'feature5-title': 'Time-Saving Solution',
        'feature5-desc': 'No need to manage multiple separate campaigns - everything in one place, simplifying your life.',
        'feature6-title': 'Better ROI',
        'feature6-desc': 'Lower customer acquisition cost and higher return through optimal use of your advertising budget.',
        
        // Case Studies section
        'case-studies-title': 'Success Stories',
        'case1-name': 'Fashion E-Store',
        'case1-role': 'Online clothing retailer',
        'case1-desc': 'This popular clothing e-commerce store was struggling with seasonal traffic fluctuations. With Performance Max campaigns, they were able to stabilize sales and significantly increase cart value.',
        'case1-metric1': 'Conversion increase:',
        'case1-metric2': 'Cart value increase:',
        'case1-metric3': 'ROI:',
        
        'case2-name': 'Electronics Discount Store',
        'case2-role': 'Tech and electronics e-commerce',
        'case2-desc': 'This high-value electronics retailer was struggling to find the right audience. With data-driven Performance Max campaigns, they successfully found customers with genuine purchase intent.',
        'case2-metric1': 'Sales value increase:',
        'case2-metric2': 'Conversion rate:',
        'case2-metric3': 'CPA decrease:',
        
        'case3-name': 'Handcrafted Gifts',
        'case3-role': 'Niche gift store',
        'case3-desc': 'This small business specializing in handcrafted gifts previously had difficulty finding its target audience. Thanks to precisely targeted Performance Max campaigns, traffic and conversions increased drastically.',
        'case3-metric1': 'Website traffic:',
        'case3-metric2': 'Conversion increase:',
        'case3-metric3': 'New customer ratio:',
        
        // ROI Calculator section
        'calculator-title': 'ROI Calculator',
        'calc-spend-label': 'Current monthly ad spend (EUR)',
        'calc-conv-label': 'Current monthly conversions',
        'calc-aov-label': 'Average order value (EUR)',
        'calc-margin-label': 'Average profit margin (%)',
        'calc-button': 'Calculate',
        'calc-results-title': 'Your estimated results with our Performance Max service',
        'calc-expected-conv': 'Expected monthly conversions',
        'calc-expected-revenue': 'Expected monthly revenue',
        'calc-expected-profit': 'Expected monthly profit',
        'calc-expected-roi': 'Expected ROI',
        'calc-expected-growth': 'That\'s a growth of ',
        
        // Testimonials section
        'testimonials-title': 'What Our Clients Say',
        'testimonial1-text': 'Since implementing Performance Max campaigns, our e-commerce store\'s traffic has increased significantly. The team is knowledgeable and always available when we have questions. The results speak for themselves - we achieved a 200% ROI in the first 3 months!',
        'testimonial1-author': 'John Smith',
        'testimonial1-role': 'VitaminShop Owner',
        
        'testimonial2-text': 'We\'ve worked with other agencies before, but none could deliver the results that the AdMaximizer team has. Their Performance Max strategy was a real game-changer for us - we\'re now spending less money on ads yet reaching more customers.',
        'testimonial2-author': 'Julia Parker',
        'testimonial2-role': 'BabyStore Marketing Manager',
        
        'testimonial3-text': 'As a small business, I was initially skeptical about Google Ads. AdMaximizer not only delivered excellent results but also explained every step, so I always understood why our campaigns were working. Performance Max brings us amazing returns every month.',
        'testimonial3-author': 'Robert Johnson',
        'testimonial3-role': 'Artisan Cheese Owner',
        
        // CTA section
        'cta-title': 'Ready to Grow?',
        'cta-text': 'Join hundreds of satisfied clients who have already experienced the power of Performance Max. Contact us today for a free consultation!',
        'cta-button': 'Request Free Consultation',
        
        // Footer
        'footer-company': 'Company',
        'footer-about': 'About Us',
        'footer-team': 'Our Team',
        'footer-careers': 'Careers',
        'footer-contact': 'Contact',
        
        'footer-services': 'Services',
        'footer-pmax': 'Performance Max',
        'footer-search': 'Google Search',
        'footer-shopping': 'Google Shopping',
        'footer-display': 'Display Ads',
        
        'footer-resources': 'Resources',
        'footer-blog': 'Blog',
        'footer-guides': 'Guides',
        'footer-webinars': 'Webinars',
        'footer-case-studies': 'Case Studies',
        
        'footer-connect': 'Connect',
        'footer-email': 'Email: info@admaximizer.com',
        'footer-phone': 'Phone: +1 234 567 890',
        
        'copyright-text': '© 2025 AdMaximizer. All rights reserved.'
    },
    
    'de': {
        // Navigation
        'nav-home': 'Startseite',
        'nav-features': 'Dienstleistungen',
        'nav-case-studies': 'Fallstudien',
        'nav-calculator': 'ROI-Rechner',
        'nav-testimonials': 'Testimonials',
        'nav-contact': 'Kontakt',
        
        // Hero section
        'hero-title': 'Steigern Sie Ihre Verkäufe mit Google Performance Max Kampagnen',
        'hero-subtitle': 'Maximieren Sie Ihre Online-Marketing-Leistung und steigern Sie Konversionen mit unseren Expertendienstleistungen',
        'hero-cta': 'Kostenlose Beratung erhalten',
        
        // Features section
        'features-title': 'Warum unsere Performance Max Dienste wählen?',
        'feature1-title': 'Automatisierte Kampagnen',
        'feature1-desc': 'Nutzen Sie Googles KI, um die besten Werbemöglichkeiten über alle Kanäle hinweg in einer einzigen Kampagne zu finden.',
        'feature2-title': 'Präzises Targeting',
        'feature2-desc': 'Finden Sie die besten potenziellen Kunden im gesamten Google-Ökosystem, einschließlich YouTube, Discovery, Gmail und Suche.',
        'feature3-title': 'Erhöhte Konversionen',
        'feature3-desc': 'Im Durchschnitt erzielen wir für unsere Kunden 30% mehr Konversionen im Vergleich zu traditionellen Kampagnen mit dem gleichen Budget.',
        'feature4-title': 'Kontinuierliche Optimierung',
        'feature4-desc': 'Unser Team überwacht und verfeinert ständig Kampagnen für maximale Leistung.',
        'feature5-title': 'Zeitsparende Lösung',
        'feature5-desc': 'Keine Notwendigkeit, mehrere separate Kampagnen zu verwalten - alles an einem Ort, vereinfacht Ihr Leben.',
        'feature6-title': 'Besserer ROI',
        'feature6-desc': 'Niedrigere Kundenakquisitionskosten und höhere Rendite durch optimale Nutzung Ihres Werbebudgets.',
        
        // Case Studies section
        'case-studies-title': 'Erfolgsgeschichten',
        'case1-name': 'Mode Online-Shop',
        'case1-role': 'Online-Bekleidungshändler',
        'case1-desc': 'Dieser beliebte Bekleidungs-E-Commerce-Shop hatte mit saisonalen Verkehrsschwankungen zu kämpfen. Mit Performance Max-Kampagnen konnten sie den Umsatz stabilisieren und den Warenkorbwert deutlich steigern.',
        'case1-metric1': 'Konversionssteigerung:',
        'case1-metric2': 'Warenkorbsteigerung:',
        'case1-metric3': 'ROI:',
        
        'case2-name': 'Elektronik-Discounter',
        'case2-role': 'Technik und Elektronik E-Commerce',
        'case2-desc': 'Dieser Elektronikhändler mit hochwertigen Produkten hatte Schwierigkeiten, die richtige Zielgruppe zu finden. Mit datengesteuerten Performance Max-Kampagnen fanden sie erfolgreich Kunden mit echter Kaufabsicht.',
        'case2-metric1': 'Umsatzsteigerung:',
        'case2-metric2': 'Konversionsrate:',
        'case2-metric3': 'CPA-Senkung:',
        
        'case3-name': 'Handgefertigte Geschenke',
        'case3-role': 'Nischen-Geschenkeladen',
        'case3-desc': 'Dieses Kleinunternehmen, das sich auf handgefertigte Geschenke spezialisiert hat, hatte zuvor Schwierigkeiten, seine Zielgruppe zu finden. Dank präzise ausgerichteter Performance Max-Kampagnen stiegen Traffic und Konversionen drastisch an.',
        'case3-metric1': 'Website-Traffic:',
        'case3-metric2': 'Konversionssteigerung:',
        'case3-metric3': 'Neukunden-Quote:',
        
        // ROI Calculator section
        'calculator-title': 'ROI-Rechner',
        'calc-spend-label': 'Aktuelle monatliche Werbeausgaben (EUR)',
        'calc-conv-label': 'Aktuelle monatliche Konversionen',
        'calc-aov-label': 'Durchschnittlicher Bestellwert (EUR)',
        'calc-margin-label': 'Durchschnittliche Gewinnmarge (%)',
        'calc-button': 'Berechnen',
        'calc-results-title': 'Ihre geschätzten Ergebnisse mit unserem Performance Max-Service',
        'calc-expected-conv': 'Erwartete monatliche Konversionen',
        'calc-expected-revenue': 'Erwarteter monatlicher Umsatz',
        'calc-expected-profit': 'Erwarteter monatlicher Gewinn',
        'calc-expected-roi': 'Erwarteter ROI',
        'calc-expected-growth': 'Das ist ein Wachstum von ',
        
        // Testimonials section
        'testimonials-title': 'Was unsere Kunden sagen',
        'testimonial1-text': 'Seit der Implementierung von Performance Max-Kampagnen hat der Traffic unseres E-Commerce-Shops deutlich zugenommen. Das Team ist kompetent und immer verfügbar, wenn wir Fragen haben. Die Ergebnisse sprechen für sich - wir haben in den ersten 3 Monaten einen ROI von 200% erzielt!',
        'testimonial1-author': 'Hans Schmidt',
        'testimonial1-role': 'VitaminShop Inhaber',
        
        'testimonial2-text': 'Wir haben zuvor mit anderen Agenturen zusammengearbeitet, aber keine konnte die Ergebnisse liefern, die das AdMaximizer-Team erzielt hat. Ihre Performance Max-Strategie war ein echter Game-Changer für uns - wir geben jetzt weniger Geld für Werbung aus und erreichen dennoch mehr Kunden.',
        'testimonial2-author': 'Julia Weber',
        'testimonial2-role': 'BabyStore Marketing Managerin',
        
        'testimonial3-text': 'Als kleines Unternehmen war ich anfangs skeptisch gegenüber Google Ads. AdMaximizer hat nicht nur hervorragende Ergebnisse geliefert, sondern auch jeden Schritt erklärt, so dass ich immer verstanden habe, warum unsere Kampagnen funktionieren. Performance Max bringt uns jeden Monat erstaunliche Renditen.',
        'testimonial3-author': 'Robert Müller',
        'testimonial3-role': 'Inhaber von Artisan Cheese',
        
        // CTA section
        'cta-title': 'Bereit zu wachsen?',
        'cta-text': 'Schließen Sie sich Hunderten zufriedener Kunden an, die bereits die Kraft von Performance Max erlebt haben. Kontaktieren Sie uns noch heute für eine kostenlose Beratung!',
        'cta-button': 'Kostenlose Beratung anfordern',
        
        // Footer
        'footer-company': 'Unternehmen',
        'footer-about': 'Über uns',
        'footer-team': 'Unser Team',
        'footer-careers': 'Karriere',
        'footer-contact': 'Kontakt',
        
        'footer-services': 'Dienstleistungen',
        'footer-pmax': 'Performance Max',
        'footer-search': 'Google Suche',
        'footer-shopping': 'Google Shopping',
        'footer-display': 'Display-Anzeigen',
        
        'footer-resources': 'Ressourcen',
        'footer-blog': 'Blog',
        'footer-guides': 'Leitfäden',
        'footer-webinars': 'Webinare',
        'footer-case-studies': 'Fallstudien',
        
        'footer-connect': 'Verbinden',
        'footer-email': 'E-Mail: info@admaximizer.com',
        'footer-phone': 'Telefon: +49 123 4567890',
        
        'copyright-text': '© 2025 AdMaximizer. Alle Rechte vorbehalten.'
    },
    
    'fr': {
        // Navigation
        'nav-home': 'Accueil',
        'nav-features': 'Services',
        'nav-case-studies': 'Études de cas',
        'nav-calculator': 'Calculateur de ROI',
        'nav-testimonials': 'Témoignages',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Boostez vos ventes avec les campagnes Google Performance Max',
        'hero-subtitle': 'Maximisez votre performance marketing en ligne et augmentez les conversions avec nos services experts',
        'hero-cta': 'Consultation gratuite',
        
        // Features section
        'features-title': 'Pourquoi choisir nos services Performance Max ?',
        'feature1-title': 'Campagnes automatisées',
        'feature1-desc': 'Utilisez l\'IA de Google pour trouver les meilleures opportunités publicitaires sur tous les canaux en une seule campagne.',
        'feature2-title': 'Ciblage précis',
        'feature2-desc': 'Trouvez les meilleurs clients potentiels dans tout l\'écosystème Google, y compris YouTube, Discovery, Gmail et Search.',
        'feature3-title': 'Conversions augmentées',
        'feature3-desc': 'En moyenne, nous obtenons 30% de conversions en plus pour nos clients par rapport aux campagnes traditionnelles avec le même budget.',
        'feature4-title': 'Optimisation continue',
        'feature4-desc': 'Notre équipe surveille et affine constamment les campagnes pour une performance maximale.',
        'feature5-title': 'Solution gain de temps',
        'feature5-desc': 'Plus besoin de gérer plusieurs campagnes séparées - tout en un seul endroit, simplifiant votre vie.',
        'feature6-title': 'Meilleur ROI',
        'feature6-desc': 'Coût d\'acquisition client plus bas et rendement plus élevé grâce à une utilisation optimale de votre budget publicitaire.',
        
        // Case Studies section
        'case-studies-title': 'Histoires de réussite',
        'case1-name': 'Boutique Mode en ligne',
        'case1-role': 'Détaillant de vêtements en ligne',
        'case1-desc': 'Cette boutique e-commerce de vêtements populaire luttait contre les fluctuations saisonnières de trafic. Avec les campagnes Performance Max, ils ont pu stabiliser les ventes et augmenter significativement la valeur du panier.',
        'case1-metric1': 'Augmentation des conversions :',
        'case1-metric2': 'Augmentation de la valeur du panier :',
        'case1-metric3': 'ROI :',
        
        'case2-name': 'Magasin d\'électronique',
        'case2-role': 'E-commerce de tech et électronique',
        'case2-desc': 'Ce détaillant d\'électronique haut de gamme avait du mal à trouver le bon public. Avec les campagnes Performance Max basées sur les données, ils ont réussi à trouver des clients avec une véritable intention d\'achat.',
        'case2-metric1': 'Augmentation de la valeur des ventes :',
        'case2-metric2': 'Taux de conversion :',
        'case2-metric3': 'Diminution du CPA :',
        
        'case3-name': 'Cadeaux artisanaux',
        'case3-role': 'Boutique de cadeaux de niche',
        'case3-desc': 'Cette petite entreprise spécialisée dans les cadeaux artisanaux avait auparavant des difficultés à trouver son public cible. Grâce aux campagnes Performance Max précisément ciblées, le trafic et les conversions ont augmenté drastiquement.',
        'case3-metric1': 'Trafic du site web :',
        'case3-metric2': 'Augmentation des conversions :',
        'case3-metric3': 'Ratio de nouveaux clients :',
        
        // ROI Calculator section
        'calculator-title': 'Calculateur de ROI',
        'calc-spend-label': 'Dépenses publicitaires mensuelles actuelles (EUR)',
        'calc-conv-label': 'Conversions mensuelles actuelles',
        'calc-aov-label': 'Valeur moyenne de commande (EUR)',
        'calc-margin-label': 'Marge bénéficiaire moyenne (%)',
        'calc-button': 'Calculer',
        'calc-results-title': 'Vos résultats estimés avec notre service Performance Max',
        'calc-expected-conv': 'Conversions mensuelles attendues',
        'calc-expected-revenue': 'Revenus mensuels attendus',
        'calc-expected-profit': 'Bénéfice mensuel attendu',
        'calc-expected-roi': 'ROI attendu',
        'calc-expected-growth': 'C\'est une croissance de ',
        
        // Testimonials section
        'testimonials-title': 'Ce que disent nos clients',
        'testimonial1-text': 'Depuis la mise en place des campagnes Performance Max, le trafic de notre boutique en ligne a considérablement augmenté. L\'équipe est compétente et toujours disponible quand nous avons des questions. Les résultats parlent d\'eux-mêmes - nous avons obtenu un ROI de 200% au cours des 3 premiers mois !',
        'testimonial1-author': 'Jean Dupont',
        'testimonial1-role': 'Propriétaire de VitaminShop',
        
        'testimonial2-text': 'Nous avons travaillé avec d\'autres agences auparavant, mais aucune n\'a pu fournir les résultats que l\'équipe AdMaximizer a obtenus. Leur stratégie Performance Max a été un véritable changement de jeu pour nous - nous dépensons maintenant moins d\'argent en publicité tout en atteignant plus de clients.',
'testimonial2-author': 'Julie Martin',
'testimonial2-role': 'Responsable marketing de BabyStore',

'testimonial3-text': 'En tant que petite entreprise, j\'étais initialement sceptique à propos de Google Ads. AdMaximizer a non seulement fourni d\'excellents résultats, mais a également expliqué chaque étape, donc j\'ai toujours compris pourquoi nos campagnes fonctionnaient. Performance Max nous apporte des rendements incroyables chaque mois.',
'testimonial3-author': 'Robert Lefebvre',
'testimonial3-role': 'Propriétaire d\'Artisan Cheese',

// CTA section
'cta-title': 'Prêt à vous développer ?',
'cta-text': 'Rejoignez des centaines de clients satisfaits qui ont déjà expérimenté la puissance de Performance Max. Contactez-nous aujourd\'hui pour une consultation gratuite !',
'cta-button': 'Demander une consultation gratuite',

// Footer
'footer-company': 'Entreprise',
'footer-about': 'À propos de nous',
'footer-team': 'Notre équipe',
'footer-careers': 'Carrières',
'footer-contact': 'Contact',

'footer-services': 'Services',
'footer-pmax': 'Performance Max',
'footer-search': 'Google Search',
'footer-shopping': 'Google Shopping',
'footer-display': 'Annonces Display',

'footer-resources': 'Ressources',
'footer-blog': 'Blog',
'footer-guides': 'Guides',
'footer-webinars': 'Webinaires',
'footer-case-studies': 'Études de cas',

'footer-connect': 'Connecter',
'footer-email': 'Email: info@admaximizer.com',
'footer-phone': 'Téléphone: +33 1 23 45 67 89',

'copyright-text': '© 2025 AdMaximizer. Tous droits réservés.'
},

'es': {
// Navigation
'nav-home': 'Inicio',
'nav-features': 'Servicios',
'nav-case-studies': 'Casos de Éxito',
'nav-calculator': 'Calculadora de ROI',
'nav-testimonials': 'Testimonios',
'nav-contact': 'Contacto',

// Hero section
'hero-title': 'Aumente sus ventas con campañas Google Performance Max',
'hero-subtitle': 'Maximice el rendimiento de su marketing online y aumente las conversiones con nuestros servicios expertos',
'hero-cta': 'Consulta gratuita',

// Features section
'features-title': '¿Por qué elegir nuestros servicios Performance Max?',
'feature1-title': 'Campañas automatizadas',
'feature1-desc': 'Aproveche la IA de Google para encontrar las mejores oportunidades publicitarias en todos los canales en una sola campaña.',
'feature2-title': 'Segmentación precisa',
'feature2-desc': 'Encuentre los mejores clientes potenciales en todo el ecosistema de Google, incluyendo YouTube, Discovery, Gmail y Búsqueda.',
'feature3-title': 'Aumento de conversiones',
'feature3-desc': 'En promedio, logramos un 30% más de conversiones para nuestros clientes en comparación con las campañas tradicionales con el mismo presupuesto.',
'feature4-title': 'Optimización continua',
'feature4-desc': 'Nuestro equipo monitorea y refina constantemente las campañas para un rendimiento máximo.',
'feature5-title': 'Solución que ahorra tiempo',
'feature5-desc': 'No es necesario gestionar múltiples campañas separadas - todo en un solo lugar, simplificando su vida.',
'feature6-title': 'Mejor ROI',
'feature6-desc': 'Menor costo de adquisición de clientes y mayor retorno a través del uso óptimo de su presupuesto publicitario.',

// Case Studies section
'case-studies-title': 'Historias de éxito',
'case1-name': 'Tienda de Moda Online',
'case1-role': 'Minorista de ropa online',
'case1-desc': 'Esta popular tienda de comercio electrónico de ropa estaba luchando con las fluctuaciones de tráfico estacionales. Con las campañas Performance Max, pudieron estabilizar las ventas y aumentar significativamente el valor del carrito.',
'case1-metric1': 'Aumento de conversiones:',
'case1-metric2': 'Aumento del valor del carrito:',
'case1-metric3': 'ROI:',

'case2-name': 'Tienda de Descuento de Electrónica',
'case2-role': 'E-commerce de tecnología y electrónica',
'case2-desc': 'Este minorista de electrónica de alto valor tenía dificultades para encontrar la audiencia adecuada. Con campañas Performance Max basadas en datos, encontraron con éxito clientes con genuina intención de compra.',
'case2-metric1': 'Aumento del valor de ventas:',
'case2-metric2': 'Tasa de conversión:',
'case2-metric3': 'Disminución de CPA:',

'case3-name': 'Regalos Artesanales',
'case3-role': 'Tienda de regalos de nicho',
'case3-desc': 'Esta pequeña empresa especializada en regalos artesanales anteriormente tenía dificultades para encontrar su público objetivo. Gracias a las campañas Performance Max precisamente dirigidas, el tráfico y las conversiones aumentaron drásticamente.',
'case3-metric1': 'Tráfico del sitio web:',
'case3-metric2': 'Aumento de conversiones:',
'case3-metric3': 'Proporción de nuevos clientes:',

// ROI Calculator section
'calculator-title': 'Calculadora de ROI',
'calc-spend-label': 'Gasto mensual actual en publicidad (EUR)',
'calc-conv-label': 'Conversiones mensuales actuales',
'calc-aov-label': 'Valor promedio de pedido (EUR)',
'calc-margin-label': 'Margen de beneficio promedio (%)',
'calc-button': 'Calcular',
'calc-results-title': 'Sus resultados estimados con nuestro servicio Performance Max',
'calc-expected-conv': 'Conversiones mensuales esperadas',
'calc-expected-revenue': 'Ingresos mensuales esperados',
'calc-expected-profit': 'Beneficio mensual esperado',
'calc-expected-roi': 'ROI esperado',
'calc-expected-growth': 'Eso es un crecimiento del ',

// Testimonials section
'testimonials-title': 'Lo que dicen nuestros clientes',
'testimonial1-text': 'Desde la implementación de las campañas Performance Max, el tráfico de nuestra tienda de comercio electrónico ha aumentado significativamente. El equipo es conocedor y siempre está disponible cuando tenemos preguntas. Los resultados hablan por sí mismos - ¡logramos un ROI del 200% en los primeros 3 meses!',
'testimonial1-author': 'Juan Pérez',
'testimonial1-role': 'Propietario de VitaminShop',

'testimonial2-text': 'Hemos trabajado con otras agencias antes, pero ninguna pudo ofrecer los resultados que el equipo de AdMaximizer ha entregado. Su estrategia Performance Max fue un verdadero cambio de juego para nosotros - ahora gastamos menos dinero en anuncios pero llegamos a más clientes.',
'testimonial2-author': 'Julia García',
'testimonial2-role': 'Gerente de Marketing de BabyStore',

'testimonial3-text': 'Como pequeña empresa, inicialmente era escéptico sobre Google Ads. AdMaximizer no sólo entregó excelentes resultados, sino que también explicó cada paso, así que siempre entendí por qué nuestras campañas estaban funcionando. Performance Max nos trae retornos increíbles cada mes.',
'testimonial3-author': 'Roberto Sánchez',
'testimonial3-role': 'Propietario de Artisan Cheese',

// CTA section
'cta-title': '¿Listo para crecer?',
'cta-text': 'Únase a cientos de clientes satisfechos que ya han experimentado el poder de Performance Max. ¡Contáctenos hoy para una consulta gratuita!',
'cta-button': 'Solicitar consulta gratuita',

// Footer
'footer-company': 'Empresa',
'footer-about': 'Sobre nosotros',
'footer-team': 'Nuestro equipo',
'footer-careers': 'Carreras',
'footer-contact': 'Contacto',

'footer-services': 'Servicios',
'footer-pmax': 'Performance Max',
'footer-search': 'Google Search',
'footer-shopping': 'Google Shopping',
'footer-display': 'Anuncios Display',

'footer-resources': 'Recursos',
'footer-blog': 'Blog',
'footer-guides': 'Guías',
'footer-webinars': 'Webinars',
'footer-case-studies': 'Casos de éxito',

'footer-connect': 'Conectar',
'footer-email': 'Email: info@admaximizer.com',
'footer-phone': 'Teléfono: +34 912 345 678',

'copyright-text': '© 2025 AdMaximizer. Todos los derechos reservados.'
},

'it': {
// Navigation
'nav-home': 'Home',
'nav-features': 'Servizi',
'nav-case-studies': 'Case Study',
'nav-calculator': 'Calcolatore ROI',
'nav-testimonials': 'Testimonianze',
'nav-contact': 'Contatti',

// Hero section
'hero-title': 'Aumenta le tue vendite con le campagne Google Performance Max',
'hero-subtitle': 'Massimizza la tua performance di marketing online e aumenta le conversioni con i nostri servizi esperti',
'hero-cta': 'Consulenza gratuita',

// Features section
'features-title': 'Perché scegliere i nostri servizi Performance Max?',
'feature1-title': 'Campagne automatizzate',
'feature1-desc': 'Sfrutta l\'IA di Google per trovare le migliori opportunità pubblicitarie su tutti i canali in un\'unica campagna.',
'feature2-title': 'Targeting preciso',
'feature2-desc': 'Trova i migliori clienti potenziali in tutto l\'ecosistema Google, inclusi YouTube, Discovery, Gmail e Ricerca.',
'feature3-title': 'Conversioni aumentate',
'feature3-desc': 'In media, otteniamo il 30% in più di conversioni per i nostri clienti rispetto alle campagne tradizionali con lo stesso budget.',
'feature4-title': 'Ottimizzazione continua',
'feature4-desc': 'Il nostro team monitora e perfeziona costantemente le campagne per massimizzare le prestazioni.',
'feature5-title': 'Soluzione che fa risparmiare tempo',
'feature5-desc': 'Non è necessario gestire più campagne separate - tutto in un unico posto, semplificando la tua vita.',
'feature6-title': 'Migliore ROI',
'feature6-desc': 'Costo di acquisizione clienti più basso e rendimento più elevato attraverso l\'uso ottimale del tuo budget pubblicitario.'

// Case Studies section
'case-studies-title': 'Storie di successo',
'case1-name': 'Negozio di Moda Online',
'case1-role': 'Rivenditore di abbigliamento online',
'case1-desc': 'Questo popolare negozio di e-commerce di abbigliamento stava lottando con le fluttuazioni stagionali del traffico. Con le campagne Performance Max, sono stati in grado di stabilizzare le vendite e aumentare significativamente il valore del carrello.',
'case1-metric1': 'Aumento delle conversioni:',
'case1-metric2': 'Aumento del valore del carrello:',
'case1-metric3': 'ROI:',

'case2-name': 'Negozio di Elettronica',
'case2-role': 'E-commerce di tecnologia ed elettronica',
'case2-desc': 'Questo rivenditore di elettronica di alto valore aveva difficoltà a trovare il pubblico giusto. Con le campagne Performance Max basate sui dati, hanno trovato con successo clienti con una reale intenzione d\'acquisto.',
'case2-metric1': 'Aumento del valore delle vendite:',
'case2-metric2': 'Tasso di conversione:',
'case2-metric3': 'Diminuzione del CPA:',

'case3-name': 'Regali Artigianali',
'case3-role': 'Negozio di regali di nicchia',
'case3-desc': 'Questa piccola impresa specializzata in regali artigianali aveva precedentemente difficoltà a trovare il suo pubblico di riferimento. Grazie alle campagne Performance Max mirate con precisione, il traffico e le conversioni sono aumentati drasticamente.',
'case3-metric1': 'Traffico del sito web:',
'case3-metric2': 'Aumento delle conversioni:',
'case3-metric3': 'Percentuale di nuovi clienti:',

// ROI Calculator section
'calculator-title': 'Calcolatore ROI',
'calc-spend-label': 'Spesa pubblicitaria mensile attuale (EUR)',
'calc-conv-label': 'Conversioni mensili attuali',
'calc-aov-label': 'Valore medio dell\'ordine (EUR)',
'calc-margin-label': 'Margine di profitto medio (%)',
'calc-button': 'Calcola',
'calc-results-title': 'I tuoi risultati stimati con il nostro servizio Performance Max',
'calc-expected-conv': 'Conversioni mensili previste',
'calc-expected-revenue': 'Ricavi mensili previsti',
'calc-expected-profit': 'Profitto mensile previsto',
'calc-expected-roi': 'ROI previsto',
'calc-expected-growth': 'Questo è una crescita del ',

// Testimonials section
'testimonials-title': 'Cosa dicono i nostri clienti',
'testimonial1-text': 'Da quando abbiamo implementato le campagne Performance Max, il traffico del nostro negozio di e-commerce è aumentato in modo significativo. Il team è competente e sempre disponibile quando abbiamo domande. I risultati parlano da soli - abbiamo raggiunto un ROI del 200% nei primi 3 mesi!',
'testimonial1-author': 'Giovanni Rossi',
'testimonial1-role': 'Proprietario di VitaminShop',

'testimonial2-text': 'Abbiamo lavorato con altre agenzie prima, ma nessuna è stata in grado di fornire i risultati che il team di AdMaximizer ha ottenuto. La loro strategia Performance Max è stata un vero punto di svolta per noi - ora spendiamo meno soldi in pubblicità ma raggiungiamo più clienti.',
'testimonial2-author': 'Giulia Bianchi',
'testimonial2-role': 'Marketing Manager di BabyStore',

'testimonial3-text': 'Come piccola impresa, ero inizialmente scettico riguardo Google Ads. AdMaximizer non solo ha fornito risultati eccellenti, ma ha anche spiegato ogni passaggio, così ho sempre capito perché le nostre campagne funzionavano. Performance Max ci porta rendimenti straordinari ogni mese.',
'testimonial3-author': 'Roberto Ferretti',
'testimonial3-role': 'Proprietario di Artisan Cheese',

// CTA section
'cta-title': 'Pronto a crescere?',
'cta-text': 'Unisciti a centinaia di clienti soddisfatti che hanno già sperimentato la potenza di Performance Max. Contattaci oggi per una consulenza gratuita!',
'cta-button': 'Richiedi consulenza gratuita',

// Footer
'footer-company': 'Azienda',
'footer-about': 'Chi siamo',
'footer-team': 'Il nostro team',
'footer-careers': 'Carriere',
'footer-contact': 'Contatti',

'footer-services': 'Servizi',
'footer-pmax': 'Performance Max',
'footer-search': 'Google Search',
'footer-shopping': 'Google Shopping',
'footer-display': 'Display Ads',

'footer-resources': 'Risorse',
'footer-blog': 'Blog',
'footer-guides': 'Guide',
'footer-webinars': 'Webinar',
'footer-case-studies': 'Case study',

'footer-connect': 'Connettiti',
'footer-email': 'Email: info@admaximizer.com',
'footer-phone': 'Telefono: +39 02 1234 5678',

'copyright-text': '© 2025 AdMaximizer. Tutti i diritti riservati.'
},

'ru': {
// Navigation
'nav-home': 'Главная',
'nav-features': 'Услуги',
'nav-case-studies': 'Кейсы',
'nav-calculator': 'ROI Калькулятор',
'nav-testimonials': 'Отзывы',
'nav-contact': 'Контакты',

// Hero section
'hero-title': 'Увеличьте продажи с помощью кампаний Google Performance Max',
'hero-subtitle': 'Максимизируйте эффективность вашего онлайн-маркетинга и увеличьте конверсии с нашими экспертными услугами',
'hero-cta': 'Бесплатная консультация',

// Features section
'features-title': 'Почему выбирают наши услуги Performance Max?',
'feature1-title': 'Автоматизированные кампании',
'feature1-desc': 'Используйте ИИ Google для поиска лучших рекламных возможностей по всем каналам в единой кампании.',
'feature2-title': 'Точное таргетирование',
'feature2-desc': 'Находите лучших потенциальных клиентов во всей экосистеме Google, включая YouTube, Discovery, Gmail и Поиск.',
'feature3-title': 'Увеличенные конверсии',
'feature3-desc': 'В среднем мы достигаем на 30% больше конверсий для наших клиентов по сравнению с традиционными кампаниями с тем же бюджетом.',
'feature4-title': 'Постоянная оптимизация',
'feature4-desc': 'Наша команда постоянно отслеживает и совершенствует кампании для максимальной производительности.',
'feature5-title': 'Экономия времени',
'feature5-desc': 'Нет необходимости управлять несколькими отдельными кампаниями - всё в одном месте, упрощая вашу жизнь.',
'feature6-title': 'Лучший ROI',
'feature6-desc': 'Более низкая стоимость привлечения клиентов и более высокая отдача через оптимальное использование вашего рекламного бюджета.',

// Case Studies section
'case-studies-title': 'Истории успеха',
'case1-name': 'Интернет-магазин одежды',
'case1-role': 'Онлайн-ритейлер одежды',
'case1-desc': 'Этот популярный интернет-магазин одежды боролся с сезонными колебаниями трафика. С кампаниями Performance Max им удалось стабилизировать продажи и значительно увеличить среднюю стоимость корзины.',
'case1-metric1': 'Увеличение конверсий:',
'case1-metric2': 'Увеличение стоимости корзины:',
'case1-metric3': 'ROI:',

'case2-name': 'Магазин электроники',
'case2-role': 'Интернет-магазин техники и электроники',
'case2-desc': 'Этот продавец дорогой электроники испытывал трудности с поиском правильной аудитории. С помощью основанных на данных кампаний Performance Max они успешно нашли клиентов с настоящим намерением купить.',
'case2-metric1': 'Увеличение объёма продаж:',
'case2-metric2': 'Коэффициент конверсии:',
'case2-metric3': 'Снижение CPA:',

'case3-name': 'Магазин ручных подарков',
'case3-role': 'Нишевый магазин подарков',
'case3-desc': 'Этот малый бизнес, специализирующийся на ручных подарках, раньше испытывал трудности с поиском своей целевой аудитории. Благодаря точно нацеленным кампаниям Performance Max трафик и конверсии резко возросли.',
'case3-metric1': 'Трафик на сайте:',
'case3-metric2': 'Увеличение конверсий:',
'case3-metric3': 'Процент новых клиентов:',

// ROI Calculator section
'calculator-title': 'Калькулятор ROI',
'calc-spend-label': 'Текущие ежемесячные расходы на рекламу (EUR)',
'calc-conv-label': 'Текущие ежемесячные конверсии',
'calc-aov-label': 'Средняя стоимость заказа (EUR)',
'calc-margin-label': 'Средняя маржа прибыли (%)',
'calc-button': 'Рассчитать',
'calc-results-title': 'Ваши расчетные результаты с нашим сервисом Performance Max',
'calc-expected-conv': 'Ожидаемые ежемесячные конверсии',
'calc-expected-revenue': 'Ожидаемый ежемесячный доход',
'calc-expected-profit': 'Ожидаемая ежемесячная прибыль',
'calc-expected-roi': 'Ожидаемый ROI',
'calc-expected-growth': 'Это рост на ',

// Testimonials section
'testimonials-title': 'Что говорят наши клиенты',
'testimonial1-text': 'С момента внедрения кампаний Performance Max трафик нашего интернет-магазина значительно увеличился. Команда знающая и всегда доступна, когда у нас есть вопросы. Результаты говорят сами за себя - мы достигли 200% ROI в первые 3 месяца!',
'testimonial1-author': 'Иван Петров',
'testimonial1-role': 'Владелец VitaminShop',

'testimonial2-text': 'Мы работали с другими агентствами раньше, но ни одно не смогло предоставить результаты, которые команда AdMaximizer предоставила. Их стратегия Performance Max была настоящим переломным моментом для нас - теперь мы тратим меньше денег на рекламу, но охватываем больше клиентов.',
'testimonial2-author': 'Юлия Смирнова',
'testimonial2-role': 'Маркетинг-менеджер BabyStore',

'testimonial3-text': 'Как малый бизнес, я изначально скептически относился к Google Ads. AdMaximizer не только предоставил отличные результаты, но и объяснил каждый шаг, так что я всегда понимал, почему наши кампании работают. Performance Max приносит нам удивительные доходы каждый месяц.',
'testimonial3-author': 'Роберт Козлов',
'testimonial3-role': 'Владелец Artisan Cheese',

// CTA section
'cta-title': 'Готовы расти?',
'cta-text': 'Присоединяйтесь к сотням довольных клиентов, которые уже испытали мощь Performance Max. Свяжитесь с нами сегодня для бесплатной консультации!',
'cta-button': 'Запросить бесплатную консультацию',

// Footer
'footer-company': 'Компания',
'footer-about': 'О нас',
'footer-team': 'Наша команда',
'footer-careers': 'Карьера',
'footer-contact': 'Контакты',

'footer-services': 'Услуги',
'footer-pmax': 'Performance Max',
'footer-search': 'Google Поиск',
'footer-shopping': 'Google Покупки',
'footer-display': 'Медийная реклама',

'footer-resources': 'Ресурсы',
'footer-blog': 'Блог',
'footer-guides': 'Руководства',
'footer-webinars': 'Вебинары',
'footer-case-studies': 'Кейсы',

'footer-connect': 'Связаться',
'footer-email': 'Email: info@admaximizer.com',
'footer-phone': 'Телефон: +7 495 123 4567',

'copyright-text': '© 2025 AdMaximizer. Все права защищены.'
},

'pl': {
// Navigation
'nav-home': 'Strona główna',
'nav-features': 'Usługi',
'nav-case-studies': 'Studia przypadków',
'nav-calculator': 'Kalkulator ROI',
'nav-testimonials': 'Referencje',
'nav-contact': 'Kontakt',

// Hero section
'hero-title': 'Zwiększ sprzedaż dzięki kampaniom Google Performance Max',
'hero-subtitle': 'Maksymalizuj skuteczność marketingu online i zwiększ konwersje dzięki naszym specjalistycznym usługom',
'hero-cta': 'Darmowa konsultacja',

// Features section
'features-title': 'Dlaczego warto wybrać nasze usługi Performance Max?',
'feature1-title': 'Zautomatyzowane kampanie',
'feature1-desc': 'Wykorzystaj sztuczną inteligencję Google do znalezienia najlepszych możliwości reklamowych we wszystkich kanałach w jednej kampanii.',
'feature2-title': 'Precyzyjne targetowanie',
'feature2-desc': 'Znajdź najlepszych potencjalnych klientów w całym ekosystemie Google, w tym YouTube, Discovery, Gmail i Wyszukiwarkę.',
'feature3-title': 'Zwiększone konwersje',
'feature3-desc': 'Średnio osiągamy o 30% więcej konwersji dla naszych klientów w porównaniu do tradycyjnych kampanii z tym samym budżetem.',
'feature4-title': 'Ciągła optymalizacja',
'feature4-desc': 'Nasz zespół stale monitoruje i udoskonala kampanie dla maksymalnej wydajności.',
'feature5-title': 'Oszczędność czasu',
'feature5-desc': 'Nie ma potrzeby zarządzania wieloma oddzielnymi kampaniami - wszystko w jednym miejscu, upraszczając twoje życie.',
'feature6-title': 'Lepsze ROI',
'feature6-desc': 'Niższy koszt pozyskania klienta i wyższy zwrot dzięki optymalnemu wykorzystaniu budżetu reklamowego.',

// Case Studies section
'case-studies-title': 'Historie sukcesu',
'case1-name': 'Sklep odzieżowy online',
'case1-role': 'Sprzedawca odzieży online',
'case1-desc': 'Ten popularny sklep e-commerce z odzieżą zmagał się z sezonowymi wahaniami ruchu. Dzięki kampaniom Performance Max udało im się ustabilizować sprzedaż i znacznie zwiększyć wartość koszyka.',
'case1-metric1': 'Wzrost konwersji:',
'case1-metric2': 'Wzrost wartości koszyka:',
'case1-metric3': 'ROI:',

'case2-name': 'Sklep elektroniczny', 
'case2-role': 'E-commerce z elektroniką i technologią',
'case2-desc': 'Ten sprzedawca elektroniki wysokiej wartości miał trudności ze znalezieniem odpowiedniej grupy odbiorców. Dzięki opartym na danych kampaniom Performance Max skutecznie znaleźli klientów z prawdziwym zamiarem zakupu.',
'case2-metric1': 'Wzrost wartości sprzedaży:',
'case2-metric2': 'Współczynnik konwersji:',
'case2-metric3': 'Obniżenie CPA:',

'case3-name': 'Prezenty rękodzielnicze',
'case3-role': 'Niszowy sklep z prezentami',
'case3-desc': 'Ta mała firma specjalizująca się w prezentach rękodzielniczych wcześniej miała trudności ze znalezieniem swojej grupy docelowej. Dzięki precyzyjnie ukierunkowanym kampaniom Performance Max ruch i konwersje drastycznie wzrosły.',
'case3-metric1': 'Ruch na stronie:',
'case3-metric2': 'Wzrost konwersji:',
'case3-metric3': 'Współczynnik nowych klientów:',

// ROI Calculator section
'calculator-title': 'Kalkulator ROI',
'calc-spend-label': 'Obecne miesięczne wydatki na reklamę (EUR)',
'calc-conv-label': 'Obecne miesięczne konwersje',
'calc-aov-label': 'Średnia wartość zamówienia (EUR)',
'calc-margin-label': 'Średnia marża zysku (%)',
'calc-button': 'Oblicz',
'calc-results-title': 'Twoje szacowane wyniki z naszą usługą Performance Max',
'calc-expected-conv': 'Oczekiwane miesięczne konwersje',
'calc-expected-revenue': 'Oczekiwany miesięczny przychód',
'calc-expected-profit': 'Oczekiwany miesięczny zysk',
'calc-expected-roi': 'Oczekiwane ROI',
'calc-expected-growth': 'To wzrost o ',

// Testimonials section
'testimonials-title': 'Co mówią nasi klienci',
'testimonial1-text': 'Od czasu wdrożenia kampanii Performance Max ruch w naszym sklepie internetowym znacznie się zwiększył. Zespół jest kompetentny i zawsze dostępny, gdy mamy pytania. Wyniki mówią same za siebie - osiągnęliśmy 200% ROI w pierwsze 3 miesiące!',
'testimonial1-author': 'Jan Kowalski',
'testimonial1-role': 'Właściciel VitaminShop',

'testimonial2-text': 'Współpracowaliśmy wcześniej z innymi agencjami, ale żadna nie była w stanie dostarczyć wyników, które zespół AdMaximizer osiągnął. Ich strategia Performance Max była prawdziwą zmianą zasad gry dla nas - teraz wydajemy mniej pieniędzy na reklamy, a docieramy do większej liczby klientów.',
'testimonial2-author': 'Julia Nowak',
'testimonial2-role': 'Menedżer marketingu BabyStore',

'testimonial3-text': 'Jako mała firma, początkowo byłem sceptyczny wobec Google Ads. AdMaximizer nie tylko dostarczył doskonałe wyniki, ale także wyjaśnił każdy krok, więc zawsze rozumiałem, dlaczego nasze kampanie działają. Performance Max przynosi nam niesamowite zwroty każdego miesiąca.',
'testimonial3-author': 'Robert Wiśniewski',
'testimonial3-role': 'Właściciel Artisan Cheese',

// CTA section
'cta-title': 'Gotowy na rozwój?',
'cta-text': 'Dołącz do setek zadowolonych klientów, którzy już doświadczyli mocy Performance Max. Skontaktuj się z nami dzisiaj, aby uzyskać bezpłatną konsultację!',
'cta-button': 'Poproś o bezpłatną konsultację',

// Footer
'footer-company': 'Firma',
'footer-about': 'O nas',
'footer-team': 'Nasz zespół',
'footer-careers': 'Kariera',
'footer-contact': 'Kontakt',

'footer-services': 'Usługi',
'footer-pmax': 'Performance Max',
'footer-search': 'Google Search',
'footer-shopping': 'Google Shopping',
'footer-display': 'Reklamy displayowe',

'footer-resources': 'Zasoby',
'footer-blog': 'Blog',
'footer-guides': 'Przewodniki',
'footer-webinars': 'Webinaria',
'footer-case-studies': 'Studia przypadków',

'footer-connect': 'Połącz się',
'footer-email': 'Email: info@admaximizer.com',
'footer-phone': 'Telefon: +48 22 123 45 67',

'copyright-text': '© 2025 AdMaximizer. Wszelkie prawa zastrzeżone.'
},

'ja': {
// Navigation
'nav-home': 'ホーム',
'nav-features': 'サービス',
'nav-case-studies': '事例紹介',
'nav-calculator': 'ROI計算機',
'nav-testimonials': 'お客様の声',
'nav-contact': 'お問い合わせ',

// Hero section
'hero-title': 'Google Performance Maxキャンペーンで売上をアップ',
'hero-subtitle': '専門的なサービスでオンラインマーケティングのパフォーマンスを最大化し、コンバージョンを増加させましょう',
'hero-cta': '無料相談',

// Features section
'features-title': 'なぜ当社のPerformance Maxサービスを選ぶのか？',
'feature1-title': '自動化されたキャンペーン',
'feature1-desc': 'GoogleのAIを活用して、単一のキャンペーンですべてのチャネルにわたる最高の広告機会を見つけます。',
'feature2-title': '精密なターゲティング',
'feature2-desc': 'YouTube、Discovery、Gmail、検索など、Googleのエコシステム全体で最適な見込み客を見つけます。',
'feature3-title': 'コンバージョン増加',
'feature3-desc': '平均して、同じ予算の従来のキャンペーンと比較して、クライアントのコンバージョンを30％増加させています。',
'feature4-title': '継続的な最適化',
'feature4-desc': '当社のチームは、最大のパフォーマンスを発揮するためにキャンペーンを常に監視し改良しています。',
'feature5-title': '時間節約ソリューション',
'feature5-desc': '複数の別々のキャンペーンを管理する必要はありません - すべてが一箇所にあり、あなたの生活を簡素化します。',
'feature6-title': '優れたROI',
'feature6-desc': '広告予算の最適な使用により、顧客獲得コストの低減と高い投資収益率を実現します。',

// Case Studies section
'case-studies-title': '成功事例',
'case1-name': 'ファッションECサイト',
'case1-role': 'オンライン衣料品小売業',
'case1-desc': 'この人気の衣料品Eコマースストアは、季節的なトラフィックの変動に悩んでいました。Performance Maxキャンペーンにより、売上を安定させ、カート価値を大幅に増加させることができました。',
'case1-metric1': 'コンバージョン増加率:',
'case1-metric2': 'カート価値の増加:',
'case1-metric3': 'ROI:',

'case2-name': '電子機器ディスカウントストア',
'case2-role': '技術・電子機器Eコマース',
'case2-desc': 'この高価値電子機器小売業者は、適切な視聴者を見つけるのに苦労していました。データ駆動型Performance Maxキャンペーンにより、本物の購入意図を持つ顧客を見つけることに成功しました。',
'case2-metric1': '売上価値の増加:',
'case2-metric2': 'コンバージョン率:',
'case2-metric3': 'CPA減少:',

'case3-name': 'ハンドクラフトギフト',
'case3-role': 'ニッチギフトショップ',
'case3-desc': 'ハンドクラフトギフトを専門とするこの小規模ビジネスは、以前はターゲットオーディエンスを見つけるのに苦労していました。精密にターゲットを絞ったPerformance Maxキャンペーンのおかげで、トラフィックとコンバージョンが劇的に増加しました。',
'case3-metric1': 'ウェブサイトトラフィック:',
'case3-metric2': 'コンバージョン増加:',
'case3-metric3': '新規顧客比率:',

// ROI Calculator section
'calculator-title': 'ROI計算機',
'calc-spend-label': '現在の月間広告支出（EUR）',
'calc-conv-label': '現在の月間コンバージョン数',
'calc-aov-label': '平均注文額（EUR）',
'calc-margin-label': '平均利益率（%）',
'calc-button': '計算する',
'calc-results-title': '当社のPerformance Maxサービスによる推定結果',
'calc-expected-conv': '予想される月間コンバージョン数',
'calc-expected-revenue': '予想される月間収益',
'calc-expected-profit': '予想される月間利益',
'calc-expected-roi': '予想されるROI',
'calc-expected-growth': 'これは成長率',

// Testimonials section
'testimonials-title': 'お客様の声',
'testimonial1-text': 'Performance Maxキャンペーンを導入して以来、私たちのEコマースストアのトラフィックは大幅に増加しました。チームは知識が豊富で、質問があればいつでも対応してくれます。結果は明らかです - 最初の3ヶ月で200％のROIを達成しました！',
'testimonial1-author': '鈴木太郎',
'testimonial1-role': 'VitaminShopオーナー',

'testimonial2-text': '以前は他の代理店と協力していましたが、AdMaximizerチームが提供した結果を提供できた代理店はありませんでした。彼らのPerformance Max戦略は私たちにとって真のゲームチェンジャーでした - 今では広告にかける費用が少なくなり、より多くの顧客にリーチしています。',
'testimonial2-author': '佐藤恵子',
'testimonial2-role': 'BabyStoreマーケティングマネージャー',

'testimonial3-text': '小規模ビジネスとして、最初はGoogle Adsに懐疑的でした。AdMaximizerは優れた結果を提供するだけでなく、各ステップを説明してくれたので、キャンペーンがうまくいく理由を常に理解できました。Performance Maxは毎月驚くべきリターンをもたらしています。',
'testimonial3-author': '田中健太',
'testimonial3-role': 'Artisan Cheeseオーナー',

// CTA section
'cta-title': '成長する準備はできていますか？',
'cta-text': 'すでにPerformance Maxのパワーを体験した何百ものの満足しているクライアントに加わりましょう。無料相談のために今日お問い合わせください！',
'cta-button': '無料相談を依頼',

// Footer
'footer-company': '会社情報',
'footer-about': '私たちについて',
'footer-team': '私たちのチーム',
'footer-careers': 'キャリア',
'footer-contact': 'お問い合わせ',

'footer-services': 'サービス',
'footer-pmax': 'Performance Max',
'footer-search': 'Google検索',
'footer-shopping': 'Googleショッピング',
'footer-display': 'ディスプレイ広告',

'footer-resources': 'リソース',
'footer-blog': 'ブログ',
'footer-guides': 'ガイド',
'footer-webinars': 'ウェビナー',
'footer-case-studies': '事例紹介',

'footer-connect': '接続',
'footer-email': 'Eメール: info@admaximizer.com',
'footer-phone': '電話: +81 3 1234 5678',

'copyright-text': '© 2025 AdMaximizer. 全著作権所有。'
},

'zh': {
// Navigation
'nav-home': '首页',
'nav-features': '服务',
'nav-case-studies': '案例研究',
'nav-calculator': 'ROI计算器',
'nav-testimonials': '客户评价',
'nav-contact': '联系我们',

// Hero section
'hero-title': '通过Google Performance Max活动提升您的销售',
'hero-subtitle': '通过我们的专业服务最大化您的线上营销绩效并增加转化率',
'hero-cta': '免费咨询',

// Features section
'features-title': '为什么选择我们的Performance Max服务？',
'feature1-title': '自动化活动',
'feature1-desc': '利用Google的AI在单一活动中找到所有渠道的最佳广告机会。',
'feature2-title': '精准定位',
'feature2-desc': '在整个Google生态系统中找到最佳潜在客户，包括YouTube、Discovery、Gmail和搜索。',
'feature3-title': '提高转化率',
'feature3-desc': '平均而言，与相同预算的传统活动相比，我们为客户实现了30%的转化率提升。',
'feature4-title': '持续优化',
'feature4-desc': '我们的团队不断监控和完善活动，以获得最大的性能。',
'feature5-title': '节省时间的解决方案',
'feature5-desc': '无需管理多个单独的活动 - 所有内容都在一处，简化您的生活。',
'feature6-title': '更好的ROI',
'feature6-desc': '通过最优化使用您的广告预算，降低客户获取成本并提高回报率。',

// Case Studies section
'case-studies-title': '成功案例',
'case1-name': '时尚电商店',
'case1-role': '在线服装零售商',
'case1-desc': '这家受欢迎的服装电商面临季节性流量波动的挑战。通过Performance Max活动，他们能够稳定销售并显著增加购物车价值。',
'case1-metric1': '转化率提升:',
'case1-metric2': '购物车价值增加:',
'case1-metric3': 'ROI:',

'case2-name': '电子产品折扣店',
'case2-role': '科技与电子产品电商',
'case2-desc': '这家高价值电子产品零售商难以找到正确的受众。通过数据驱动的Performance Max活动，他们成功找到了真正有购买意向的客户。',
'case2-metric1': '销售价值增长:',
'case2-metric2': '转化率:',
'case2-metric3': 'CPA下降:',

'case3-name': '手工礼品店',
'case3-role': '利基礼品店',
'case3-desc': '这家专门经营手工礼品的小型企业之前难以找到目标受众。得益于精准定位的Performance Max活动，流量和转化率大幅增长。',
'case3-metric1': '网站流量:',
'case3-metric2': '转化率提升:',
'case3-metric3': '新客户比例:',

// ROI Calculator section
'calculator-title': 'ROI计算器',
'calc-spend-label': '当前每月广告支出（欧元）',
'calc-conv-label': '当前每月转化次数',
'calc-aov-label': '平均订单价值（欧元）',
'calc-margin-label': '平均利润率（%）',
'calc-button': '计算',
'calc-results-title': '使用我们的Performance Max服务的预估结果',
'calc-expected-conv': '预期每月转化次数',
'calc-expected-revenue': '预期每月收入',
'calc-expected-profit': '预期每月利润',
'calc-expected-roi': '预期ROI',
'calc-expected-growth': '这是一个增长率为',

// Testimonials section
'testimonials-title': '客户评价',
'testimonial1-text': '自从实施Performance Max活动以来，我们电商店的流量显著增加。团队知识渊博，当我们有问题时始终可用。结果不言而喻 - 我们在前3个月实现了200%的ROI！',
'testimonial1-author': '王小明',
'testimonial1-role': 'VitaminShop所有者',

'testimonial2-text': '我们之前与其他代理商合作过，但没有一家能够提供AdMaximizer团队所交付的结果。他们的Performance Max策略对我们来说是真正的游戏规则改变者 - 现在我们在广告上的支出更少，但接触到的客户更多。',
'testimonial2-author': '李娜',
'testimonial2-role': 'BabyStore营销经理',

'testimonial3-text': '作为一家小型企业，我最初对Google Ads持怀疑态度。AdMaximizer不仅提供了出色的结果，还解释了每一步，所以我始终理解为什么我们的活动能够成功。Performance Max每个月都为我们带来惊人的回报。',
'testimonial3-author': '张伟',
'testimonial3-role': 'Artisan Cheese所有者',

// CTA section
'cta-title': '准备好成长了吗？',
'cta-text': '加入数百名已经体验Performance Max力量的满意客户。立即联系我们获取免费咨询！',
'cta-button': '申请免费咨询',

// Footer
'footer-company': '公司',
'footer-about': '关于我们',
'footer-team': '我们的团队',
'footer-careers': '职业发展',
'footer-contact': '联系我们',

'footer-services': '服务',
'footer-pmax': 'Performance Max',
'footer-search': 'Google搜索',
'footer-shopping': 'Google购物',
'footer-display': '展示广告',

'footer-resources': '资源',
'footer-blog': '博客',
'footer-guides': '指南',
'footer-webinars': '网络研讨会',
'footer-case-studies': '案例研究',

'footer-connect': '连接',
'footer-email': '邮箱: info@admaximizer.com',
'footer-phone': '电话: +86 10 1234 5678',

'copyright-text': '© 2025 AdMaximizer. 保留所有权利。'
}
};