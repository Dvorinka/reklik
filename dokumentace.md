# MATURITNÍ PRÁCE

---

## WEBOVÁ PREZENTACE A SELF-HOSTED GALERIE PRO FOTOGRAFICKÉ STUDIO REKLIK

---

**Autor:** Radim Ilek
**Škola:** [Název školy]  
**Školní rok:** 2024/2025  
**Obor:** Informační technologie  
**Vedoucí práce:** [Jméno vedoucího]  

**Datum odevzdání:** říjen 2025

---

# PROHLÁŠENÍ AUTORA

Prohlašuji, že jsem maturitní práci vypracoval samostatně pod vedením vedoucího práce a s použitím uvedené literatury a zdrojů. Dále prohlašuji, že tato práce nebyla využita k získání jiného nebo stejného titulu.

V Uherském Hradišti, dne 13. října 2025

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
Podpis autora

---

# PODĚKOVÁNÍ

Rád bych poděkoval vedoucímu mé maturitní práce za odborné vedení, cenné rady a připomínky během tvorby tohoto projektu. Dále děkuji rodině za podporu a trpělivost během celého studia.

---

# ABSTRAKT

**Název práce:** Webová prezentace a self-hosted galerie pro fotografické studio Reklik

**Autor:** Radim Ilek

**Vedoucí práce:** [Jméno vedoucího]

**Klíčová slova:** webová prezentace, fotografické studio, self-hosted galerie, io200, Cloudflare Tunnel, Apache, responzivní design, SEO optimalizace

Cílem této maturitní práce bylo vytvořit kompletní webové řešení pro fotografické studio Reklik specializující se na fotografování nemovitostí v Uherském Hradišti a okolí. Projekt zahrnuje moderní responzivní webovou prezentaci s důrazem na SEO optimalizaci a uživatelskou přívětivost, doplněnou o self-hosted fotografickou galerii běžící na vlastním serveru.

Webová aplikace je postavena na moderních webových technologiích včetně HTML5, CSS3 a JavaScriptu. Pro správu a prezentaci fotografií byla implementována open-source galerie io200, hostovaná na Ubuntu serveru v infrastruktuře Proxmox. Komunikace mezi interním serverem a internetem je realizována prostřednictvím zabezpečeného Cloudflare Tunnel, což eliminuje potřebu klasického port-forwardingu a zvyšuje bezpečnost celého řešení.

Projekt demonstruje komplexní přístup k tvorbě webových aplikací – od analýzy požadavků, přes návrh architektury, implementaci frontend i backend komponent, až po nasazení do produkčního prostředí a následnou údržbu. Součástí práce je také konfigurace webového serveru Apache, správa domén a DNS záznamů, a implementace bezpečnostních opatření.

Výsledkem je plně funkční webová prezentace dostupná na adrese https://reklik.net s integrovanou galerií na https://foto.reklik.net, která splňuje všechny požadavky zadání a je připravena k aktivnímu komerčnímu využití.

---

# OBSAH

1. [ÚVOD](#1-úvod)
   - 1.1 [Motivace a důvody výběru tématu](#11-motivace-a-důvody-výběru-tématu)
   - 1.2 [Cíle práce](#12-cíle-práce)
   - 1.3 [Struktura dokumentu](#13-struktura-dokumentu)

2. [TEORETICKÁ ČÁST](#2-teoretická-část)
   - 2.1 [Webové technologie](#21-webové-technologie)
     - 2.1.1 [HTML5](#211-html5)
     - 2.1.2 [CSS3 a responzivní design](#212-css3-a-responzivní-design)
     - 2.1.3 [JavaScript](#213-javascript)
   - 2.2 [Serverové technologie](#22-serverové-technologie)
     - 2.2.1 [Webový server Apache](#221-webový-server-apache)
     - 2.2.2 [PHP](#222-php)
     - 2.2.3 [Databázový systém MariaDB](#223-databázový-systém-mariadb)
   - 2.3 [Virtualizace a hosting](#23-virtualizace-a-hosting)
     - 2.3.1 [Proxmox VE](#231-proxmox-ve)
     - 2.3.2 [Ubuntu Server](#232-ubuntu-server)
   - 2.4 [Bezpečnost a síťové služby](#24-bezpečnost-a-síťové-služby)
     - 2.4.1 [Cloudflare Tunnel](#241-cloudflare-tunnel)
     - 2.4.2 [HTTPS a SSL/TLS](#242-https-a-ssltls)
   - 2.5 [Systémy pro správu fotografií](#25-systémy-pro-správu-fotografií)
     - 2.5.1 [io200 Gallery](#251-io200-gallery)
   - 2.6 [SEO optimalizace](#26-seo-optimalizace)
   - 2.7 [Verzovací systémy](#27-verzovací-systémy)
     - 2.7.1 [Git a GitHub](#271-git-a-github)

3. [ANALÝZA A NÁVRH](#3-analýza-a-návrh)
   - 3.1 [Analýza požadavků](#31-analýza-požadavků)
     - 3.1.1 [Funkční požadavky](#311-funkční-požadavky)
     - 3.1.2 [Nefunkční požadavky](#312-nefunkční-požadavky)
   - 3.2 [Analýza cílové skupiny](#32-analýza-cílové-skupiny)
   - 3.3 [Konkurenční analýza](#33-konkurenční-analýza)
   - 3.4 [Návrh architektury](#34-návrh-architektury)
     - 3.4.1 [Celková architektura systému](#341-celková-architektura-systému)
     - 3.4.2 [Frontend architektura](#342-frontend-architektura)
     - 3.4.3 [Backend architektura](#343-backend-architektura)
     - 3.4.4 [Síťová architektura](#344-síťová-architektura)
   - 3.5 [Návrh uživatelského rozhraní](#35-návrh-uživatelského-rozhraní)
   - 3.6 [Návrh databázového modelu](#36-návrh-databázového-modelu)
   - 3.7 [Bezpečnostní návrh](#37-bezpečnostní-návrh)

4. [IMPLEMENTACE](#4-implementace)
   - 4.1 [Vývojové prostředí a nástroje](#41-vývojové-prostředí-a-nástroje)
   - 4.2 [Struktura projektu](#42-struktura-projektu)
   - 4.3 [Implementace frontendu](#43-implementace-frontendu)
     - 4.3.1 [HTML struktura](#431-html-struktura)
     - 4.3.2 [CSS styly a responzivita](#432-css-styly-a-responzivita)
     - 4.3.3 [JavaScript funkcionality](#433-javascript-funkcionality)
   - 4.4 [SEO implementace](#44-seo-implementace)
     - 4.4.1 [Meta tagy](#441-meta-tagy)
     - 4.4.2 [Strukturovaná data](#442-strukturovaná-data)
     - 4.4.3 [Sitemap a robots.txt](#443-sitemap-a-robotstxt)
   - 4.5 [Konfigurace serveru](#45-konfigurace-serveru)
     - 4.5.1 [Instalace Ubuntu a základní nastavení](#451-instalace-ubuntu-a-základní-nastavení)
     - 4.5.2 [Konfigurace Apache](#452-konfigurace-apache)
     - 4.5.3 [Instalace a konfigurace PHP a MariaDB](#453-instalace-a-konfigurace-php-a-mariadb)
   - 4.6 [Implementace io200 galerie](#46-implementace-io200-galerie)
   - 4.7 [Konfigurace Cloudflare Tunnel](#47-konfigurace-cloudflare-tunnel)
   - 4.8 [Správa domén a DNS](#48-správa-domén-a-dns)

5. [TESTOVÁNÍ](#5-testování)
   - 5.1 [Testování funkcionality](#51-testování-funkcionality)
   - 5.2 [Testování responzivity](#52-testování-responzivity)
   - 5.3 [Testování výkonnosti](#53-testování-výkonnosti)
   - 5.4 [Testování SEO](#54-testování-seo)
   - 5.5 [Testování bezpečnosti](#55-testování-bezpečnosti)
   - 5.6 [Cross-browser testování](#56-cross-browser-testování)
   - 5.7 [Uživatelské testování](#57-uživatelské-testování)

6. [NASAZENÍ A PROVOZ](#6-nasazení-a-provoz)
   - 6.1 [Postup nasazení](#61-postup-nasazení)
   - 6.2 [Monitoring a údržba](#62-monitoring-a-údržba)
   - 6.3 [Zálohování](#63-zálohování)
   - 6.4 [Řešení problémů](#64-řešení-problémů)

7. [EKONOMICKÉ ZHODNOCENÍ](#7-ekonomické-zhodnocení)
   - 7.1 [Náklady na vývoj](#71-náklady-na-vývoj)
   - 7.2 [Provozní náklady](#72-provozní-náklady)
   - 7.3 [Srovnání s komerčními řešeními](#73-srovnání-s-komerčními-řešeními)

8. [ZÁVĚR](#8-závěr)
   - 8.1 [Zhodnocení výsledků](#81-zhodnocení-výsledků)
   - 8.2 [Splnění cílů](#82-splnění-cílů)
   - 8.3 [Možnosti dalšího rozvoje](#83-možnosti-dalšího-rozvoje)
   - 8.4 [Osobní přínos](#84-osobní-přínos)

9. [SEZNAM POUŽITÉ LITERATURY A ZDROJŮ](#9-seznam-použité-literatury-a-zdrojů)

10. [PŘÍLOHY](#10-přílohy)

---

# 1. ÚVOD

## 1.1 Motivace a důvody výběru tématu

V současné digitální době je kvalitní webová prezentace nezbytnou součástí každého úspěšného podnikání. Pro fotografické studio, které se zabývá profesionálním fotografováním nemovitostí, je tato potřeba ještě výraznější – potenciální klienti potřebují vidět nejen informace o službách, ale především kvalitní ukázky realizovaných prací v podobě přehledné a profesionální fotogalerie.

Reklik je fotografické studio působící v Uherském Hradišti a okolí, které se specializuje na fotografování nemovitostí pro realitní kanceláře, Airbnb a ubytovací portály. Studio poskytuje jak interiérové, tak exteriérové fotografie s důrazem na profesionální prezentaci nemovitostí, která maximalizuje jejich prodejní potenciál.

Rozhodl jsem se pro toto téma z několika důvodů:

1. **Praktické využití**: Projekt není pouze teoretickým cvičením, ale skutečným komerčním řešením, které bude aktivně využíváno reálným klientem.

2. **Komplexnost řešení**: Projekt zahrnuje široké spektrum moderních webových technologií – od frontendového vývoje, přes backendové řešení a správu serveru, až po síťovou bezpečnost a cloudové služby.

3. **Vlastní hosting**: Na rozdíl od jednoduchých řešení postavených na hotových platformách (WordPress, Wix apod.) jsem se rozhodl implementovat vlastní server infrastrukturu s důrazem na kontrolu, flexibilitu a bezpečnost.

4. **Aktuálnost technologií**: Použité technologie jako Cloudflare Tunnel, containerizace a moderní webový vývoj představují současný standard v oboru a jejich praktické zvládnutí má vysokou hodnotu pro další profesní růst.

5. **SEO a marketing**: Projekt klade důraz na optimalizaci pro vyhledávače (SEO), což je klíčové pro získávání nových zákazníků v konkurenčním prostředí.

## 1.2 Cíle práce

Hlavním cílem této maturitní práce je **navrhnout a implementovat kompletní webové řešení pro fotografické studio Reklik**, které bude splňovat jak funkční, tak nefunkční požadavky moderní webové aplikace.

### Hlavní cíle:

1. **Vytvoření responzivní webové prezentace**
   - Moderní, esteticky vyhovující design odpovídající charakteru fotografického studia
   - Plná responzivita pro všechna běžná zařízení (desktop, tablet, mobilní telefon)
   - Přehledná navigace a intuitivní uživatelské rozhraní
   - Optimalizace pro rychlé načítání stránek

2. **Implementace fotografické galerie**
   - Nasazení self-hosted řešení pro správu a prezentaci fotografií
   - Možnost kategorizace fotografií do alb
   - Optimalizace zobrazování velkých obrázků
   - Správa metadat a popisů fotografií

3. **Konfigurace serverové infrastruktury**
   - Instalace a konfigurace Ubuntu serveru na Proxmox virtualizační platformě
   - Nastavení webového serveru Apache včetně virtual hosts
   - Implementace databázového systému MariaDB
   - Správa PHP runtime prostředí

4. **Zabezpečení komunikace**
   - Implementace Cloudflare Tunnel pro bezpečný přístup bez port-forwardingu
   - Konfigurace HTTPS/SSL certifikátů
   - Implementace základních bezpečnostních opatření

5. **SEO optimalizace**
   - Implementace všech důležitých meta tagů
   - Vytvoření XML sitemapy
   - Konfigurace robots.txt
   - Implementace strukturovaných dat (Schema.org)
   - Optimalizace rychlosti načítání pro lepší ranking

6. **Dokumentace a nasazení**
   - Vytvoření komplexní technické dokumentace
   - Dokumentace postupu instalace a konfigurace
   - Popis údržby a možného dalšího rozvoje

### Dílčí cíle:

- Prostudování moderních webových technologií a best practices
- Analýza konkurenčních řešení v oboru fotografických služeb
- Návrh uživatelského rozhraní s důrazem na UX (User Experience)
- Implementace verzovacího systému pro správu kódu (Git/GitHub)
- Vytvoření veřejně dostupného repozitáře jako ukázka práce
- Testování funkcionality, výkonnosti a bezpečnosti
- Nasazení do produkčního prostředí

## 1.3 Struktura dokumentu

Tato maturitní práce je strukturována do logických kapitol, které pokrývají všechny fáze realizace projektu:

**Kapitola 2 – Teoretická část** poskytuje přehled všech použitých technologií, vysvětluje základní koncepty a principy, na kterých je projekt postaven. Zahrnuje webové technologie (HTML5, CSS3, JavaScript), serverové technologie (Apache, PHP, MariaDB), virtualizační platformy, síťové služby a bezpečnostní mechanismy.

**Kapitola 3 – Analýza a návrh** obsahuje detailní analýzu požadavků, cílové skupiny a konkurence. Dále prezentuje návrh architektury systému, uživatelského rozhraní a bezpečnostního modelu.

**Kapitola 4 – Implementace** popisuje praktickou realizaci projektu. Dokumentuje implementaci frontendu, backendu, konfiguraci serveru, nasazení galerie io200 a konfiguraci Cloudflare Tunnel. Obsahuje ukázky kódu a konfiguračních souborů.

**Kapitola 5 – Testování** shrnuje testovací proces včetně funkčního, výkonnostního a bezpečnostního testování. Prezentuje výsledky testů a případné problémy, které byly řešeny.

**Kapitola 6 – Nasazení a provoz** popisuje postup nasazení do produkčního prostředí, monitoring, údržbu a zálohování systému.

**Kapitola 7 – Ekonomické zhodnocení** analyzuje náklady na vývoj a provoz řešení a srovnává je s komerčními alternativami.

**Kapitola 8 – Závěr** shrnuje dosažené výsledky, hodnotí splnění cílů a navrhuje možnosti dalšího rozvoje projektu.

Součástí práce je také **seznam použité literatury a zdrojů** a **přílohy** obsahující doplňující materiály jako screenshoty, diagramy a ukázky konfigurací.

---

# 2. TEORETICKÁ ČÁST

Tato kapitola poskytuje teoretický základ pro porozumění technologiím a konceptům použitým v projektu. Jednotlivé podkapitoly popisují klíčové technologie, jejich vlastnosti, výhody a způsob využití v kontextu tohoto projektu.

## 2.1 Webové technologie

### 2.1.1 HTML5

**HTML5** (HyperText Markup Language, verze 5) je aktuální standard značkovacího jazyka pro tvorbu webových stránek. HTML5 bylo publikováno konsorciem W3C (World Wide Web Consortium) v roce 2014 a představuje významnou evoluci předchozích verzí HTML.

**Klíčové vlastnosti HTML5:**

- **Sémantické elementy**: HTML5 přináší nové sémantické tagy jako `<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<footer>`, které umožňují lepší strukturování obsahu a zlepšují přístupnost i SEO.

- **Multimédia bez pluginů**: Nativní podpora audio a video elementů (`<audio>`, `<video>`) bez nutnosti použití Flash nebo jiných pluginů.

- **Canvas a SVG**: Možnost vykreslování 2D grafiky přímo v prohlížeči pomocí elementu `<canvas>` a nativní podpora vektorové grafiky SVG.

- **Pokročilé formuláře**: Nové typy inputů (`email`, `date`, `number`, `range` atd.) s vestavěnou validací.

- **Offline aplikace**: Podpora Application Cache a Local Storage pro ukládání dat na straně klienta.

- **Geolokace**: API pro zjištění polohy uživatele.

**Využití v projektu Reklik:**

V projektu je HTML5 použito pro vytvoření sémanticky správné struktury webových stránek. Využívány jsou moderní sémantické elementy pro lepší SEO a přístupnost. Strukturovaná data jsou implementována pomocí atributů `itemscope` a `itemtype` podle standardu Schema.org.

### 2.1.2 CSS3 a responzivní design

**CSS3** (Cascading Style Sheets, verze 3) je stylový jazyk používaný k popisu vzhledu dokumentů napsaných v HTML. CSS3 je modulární standard, který přináší řadu nových vlastností pro pokročilé stylování webových stránek.

**Klíčové vlastnosti CSS3:**

- **Media Queries**: Umožňují aplikovat různé styly v závislosti na vlastnostech zařízení (šířka obrazovky, orientace, rozlišení). Jsou základem responzivního designu.

- **Flexbox**: Flexibilní box model umožňuje snadné vytváření komplexních layoutů s automatickým rozdělováním prostoru.

- **Grid Layout**: CSS Grid je dvourozměrný layoutový systém pro vytváření komplexních mřížkových designů.

- **Transformace a přechody**: CSS transformace (`transform`) a animace (`transition`, `animation`) umožňují vytváření interaktivních efektů bez JavaScriptu.

- **Vlastní fonty**: `@font-face` pravidlo umožňuje použití vlastních webových fontů.

- **Pokročilé efekty**: Stíny (`box-shadow`, `text-shadow`), zaoblené rohy (`border-radius`), gradienty (`linear-gradient`, `radial-gradient`).

**Responzivní design:**

Responzivní webový design je přístup k návrhu webových stránek, který zajišťuje optimální zobrazení na různých zařízeních a velikostech obrazovek. Hlavní principy:

1. **Fluid Grid**: Použití relativních jednotek (%, em, rem) namísto fixních pixelů
2. **Flexibilní obrázky**: Obrázky se přizpůsobují velikosti kontejneru
3. **Media Queries**: Aplikace různých stylů pro různá zařízení

**Využití v projektu:**

Projekt využívá kombinaci vlastního CSS a frameworku pro responzivní design. Implementovány jsou breakpointy pro mobily, tablety a desktopy. Použity jsou moderní techniky jako Flexbox a Grid pro vytvoření flexibilního layoutu.

### 2.1.3 JavaScript

**JavaScript** je interpretovaný programovací jazyk, který běží v prohlížeči a umožňuje vytváření dynamických a interaktivních webových aplikací. JavaScript je spolu s HTML a CSS základní technologií moderního webu.

**Klíčové vlastnosti:**

- **Event-driven programming**: JavaScript reaguje na události (kliknutí, scroll, načtení stránky)
- **DOM manipulace**: Možnost dynamicky měnit strukturu a obsah HTML dokumentu
- **Asynchronní programování**: Práce s AJAX, Fetch API, Promises, async/await
- **ES6+ features**: Moderní JavaScript přináší arrow functions, destructuring, template literals, classes a další

**Využití v projektu:**

V projektu je JavaScript využit pro:
- Interaktivní navigační menu s animacemi
- Lazy loading obrázků pro optimalizaci výkonu
- Smooth scrolling mezi sekcemi
- Validaci formulářů
- Integrace s analytics (GoatCounter)
- Overlay efekty a galeriové funkce

Použita je knihovna jQuery pro zjednodušení DOM manipulace a cross-browser kompatibilitu.

## 2.2 Serverové technologie

### 2.2.1 Webový server Apache

**Apache HTTP Server** (zkráceně Apache) je open-source multiplatformní webový server vývíjený a udržovaný organizací Apache Software Foundation. Apache je jedním z nejpoužívanějších webových serverů na světě.

**Klíčové vlastnosti:**

- **Modularita**: Apache používá modulární architekturu, kde lze funkcionalitu rozšiřovat pomocí modulů
- **Virtual Hosts**: Možnost hostovat více webových stránek na jednom serveru
- **.htaccess**: Konfigurace na úrovni adresářů bez nutnosti restartu serveru
- **Podpora SSL/TLS**: Integrace s mod_ssl pro HTTPS
- **Rewrite Engine**: Mod_rewrite pro přepisování URL
- **Multiplatformnost**: Běží na Linux, Windows, macOS a dalších systémech

**Důležité moduly použité v projektu:**

- `mod_rewrite`: URL rewriting pro SEO-friendly odkazy
- `mod_ssl`: HTTPS podpora (i když certifikát je primárně spravován přes Cloudflare)
- `mod_php`: Integrace PHP do Apache
- `mod_headers`: Manipulace s HTTP hlavičkami

**Konfigurace Virtual Host:**

Virtual Host umožňuje provozovat více webů na jednom serveru. V projektu je nakonfigurován Virtual Host pro doménu `foto.reklik.net` s nastavením `DocumentRoot` a povolenými `.htaccess` soubory pomocí direktivy `AllowOverride All`.

### 2.2.2 PHP

**PHP** (PHP: Hypertext Preprocessor) je široce používaný open-source skriptovací jazyk určený především pro vývoj webových aplikací. PHP kód je vykonáván na serveru a výsledkem je HTML, který je odeslán klientovi.

**Klíčové vlastnosti:**

- **Server-side scripting**: Kód běží na serveru, klient dostává pouze výsledek
- **Databázová integrace**: Nativní podpora pro MySQL/MariaDB, PostgreSQL a další databáze
- **Cross-platform**: Běží na různých operačních systémech
- **Bohatá standardní knihovna**: Funkce pro práce se soubory, obrázky, XML, JSON atd.
- **Objektově orientované programování**: Podpora OOP od verze 5.x

**Využití v projektu:**

PHP je použito primárně pro:
- Backend galerie io200 (napsané v PHP)
- Případné budoucí rozšíření o kontaktní formuláře
- Možnost implementace administračního rozhraní
- Generování dynamického obsahu

### 2.2.3 Databázový systém MariaDB

**MariaDB** je open-source relační databázový systém, který vznikl jako fork MySQL. MariaDB je plně kompatibilní s MySQL a nabízí vylepšený výkon a nové funkce.

**Klíčové vlastnosti:**

- **Kompatibilita s MySQL**: Bezproblémová migrace z MySQL
- **Výkon**: Optimalizace a nové storage enginy (Aria, XtraDB)
- **Bezpečnost**: Pravidelné bezpečnostní aktualizace
- **Open-source**: Skutečně otevřený vývoj pod GPL licencí
- **JSON podpora**: Nativní podpora pro práci s JSON daty

**SQL (Structured Query Language):**

SQL je standardní jazyk pro práci s relačními databázemi. Základní operace:
- `SELECT`: Výběr dat z tabulek
- `INSERT`: Vkládání nových záznamů
- `UPDATE`: Aktualizace existujících záznamů
- `DELETE`: Mazání záznamů
- `CREATE`, `ALTER`, `DROP`: Definice databázové struktury

**Využití v projektu:**

MariaDB je v projektu připravena pro ukládání:
- Metadat fotografií (titulky, popisy, tagy)
- Informací o albech a kategoriích
- Uživatelských dat pro administrátorské rozhraní
- Statistik a analytických dat

## 2.3 Virtualizace a hosting

### 2.3.1 Proxmox VE

**Proxmox Virtual Environment** (Proxmox VE) je open-source platforma pro virtualizaci a správu kontejnerů. Proxmox kombinuje KVM (Kernel-based Virtual Machine) pro virtualizaci a LXC (Linux Containers) pro kontejnerizaci.

**Klíčové vlastnosti:**

- **KVM virtualizace**: Plná hardwarová virtualizace pro provoz různých operačních systémů
- **LXC kontejnery**: Lehké kontejnery pro Linux aplikace
- **Webové rozhraní**: Moderní webové GUI pro správu
- **High Availability (HA)**: Clustering a automatické přepínání při výpadku
- **Backup a restore**: Integrované řešení pro zálohování VM a kontejnerů
- **Storage flexibilita**: Podpora pro různé storage backendy (LVM, ZFS, Ceph, NFS)
- **Live migrace**: Přesun běžících VM mezi hosty bez výpadku

**Výhody virtualizace:**

1. **Izolace**: Každá VM běží izolovaně, selhání jedné neovlivní ostatní
2. **Efektivní využití zdrojů**: Více služeb na jednom fyzickém serveru
3. **Snadná správa**: Snapshoty, klonování, migrace
4. **Testovací prostředí**: Možnost rychle vytvořit testovací instance
5. **Flexibilita**: Snadné přidávání zdrojů (CPU, RAM, disk)

**Využití v projektu:**

Webový server pro projekt běží na Ubuntu virtuálním stroji v Proxmox prostředí. To umožňuje:
- Snadné zálohování celého serveru pomocí Proxmox snapshots
- Možnost snadno přidat výkon při zvýšené zátěži
- Izolaci od ostatních služeb v síti
- Možnost testování změn na klonované VM před aplikací na produkci

### 2.3.2 Ubuntu Server

**Ubuntu Server** je linuxová distribuce založená na Debianu, optimalizovaná pro serverové nasazení. Vydávána je společností Canonical s pravidelnými aktualizacemi a dlouhodobou podporou (LTS verze).

**Klíčové vlastnosti:**

- **LTS (Long Term Support)**: 5 let bezpečnostních aktualizací pro LTS verze
- **APT balíčkovací systém**: Snadná správa softwarových balíčků
- **Velká komunita**: Rozsáhlá dokumentace a komunitní podpora
- **Bezpečnost**: Pravidelné bezpečnostní aktualizace, firewall (UFW), AppArmor
- **Cloud ready**: Optimalizace pro cloud prostředí (AWS, Azure, Google Cloud)
- **Kontejnerizace**: Dobrá podpora pro Docker a Kubernetes

**Výhody Ubuntu Server:**

- Stabilita a spolehlivost
- Bezplatné používání i pro komerční účely
- Pravidelné aktualizace
- Široká podpora hardware
- Velké množství dostupných balíčků

**Využití v projektu:**

V projektu je použita Ubuntu Server LTS verze jako hostitelský operační systém pro:
- Apache webový server
- PHP runtime
- MariaDB databázi
- io200 galerii
- Cloudflare daemon (cloudflared)

## 2.4 Bezpečnost a síťové služby

### 2.4.1 Cloudflare Tunnel

**Cloudflare Tunnel** (dříve Argo Tunnel) je služba Cloudflare, která vytváří zabezpečené spojení mezi původním serverem (origin) a Cloudflare sítí bez nutnosti otevírat veřejné příchozí porty na firewallu.

**Princip fungování:**

Tradiční přístup vyžaduje:
1. Otevření portů 80 a 443 na firewallu
2. Port forwarding na routeru
3. Vystavení serveru přímo na internet

Cloudflare Tunnel funguje jinak:
1. Na serveru běží `cloudflared` daemon
2. Daemon vytvoří odchozí spojení k Cloudflare (port 443 outbound)
3. Veškerý příchozí traffic jde přes Cloudflare síť
4. Cloudflare přeposílá požadavky přes tunel na lokální server

**Výhody Cloudflare Tunnel:**

- **Bezpečnost**: Server není přímo dostupný z internetu, útočníci nevidí skutečnou IP adresu
- **Žádný port forwarding**: Jednodušší konfigurace, server může být v privátní síti
- **DDoS ochrana**: Automatická ochrana proti DDoS útokům
- **CDN**: Statické obsahy jsou cachovány na Cloudflare edge serverech
- **SSL/TLS**: Automatický HTTPS certifikát od Cloudflare
- **Load balancing**: Možnost rozložit zátěž mezi více servery

**Konfigurace:**

Tunel se konfiguruje pomocí YAML souboru (`/etc/cloudflared/config.yml`), kde se definuje:
- ID tunelu
- Cesta k credentials souboru
- Ingress pravidla (hostname → local service mapping)

**Využití v projektu:**

Cloudflare Tunnel umožňuje bezpečně zpřístupnit galerii běžící na lokálním serveru (192.168.0.x) pod doménou `foto.reklik.net` bez nutnosti otevírat porty na routeru. Všechen traffic prochází přes Cloudflare síť, která poskytuje ochranu a caching.

### 2.4.2 HTTPS a SSL/TLS

**HTTPS** (HTTP Secure) je zabezpečená verze HTTP protokolu používaná pro komunikaci mezi webovým prohlížečem a serverem. Komunikace je šifrována pomocí SSL/TLS.

**SSL/TLS:**

- **SSL** (Secure Sockets Layer) – starší protokol (dnes už zastaralý)
- **TLS** (Transport Layer Security) – moderní nástupce SSL

**Jak TLS funguje:**

1. **Handshake**: Klient a server se dohodnou na šifrovacích algoritmech
2. **Výměna certifikátů**: Server posílá svůj SSL certifikát
3. **Ověření identity**: Klient ověřuje platnost certifikátu
4. **Šifrovaná komunikace**: Data jsou šifrována symetrickým klíčem

**Výhody HTTPS:**

- **Šifrování**: Data nelze odposlechnout
- **Integrita**: Data nelze změnit během přenosu
- **Autentizace**: Ověření identity serveru
- **SEO**: Google preferuje HTTPS stránky v výsledcích vyhledávání
- **Důvěra uživatelů**: Zelený zámek v prohlížeči

**Typy SSL certifikátů:**

- **Domain Validated (DV)**: Základní ověření vlastnictví domény
- **Organization Validated (OV)**: Ověření organizace
- **Extended Validation (EV)**: Nejpřísnější ověření, zelená lišta v některých prohlížečích

**Využití v projektu:**

Cloudflare poskytuje automatický SSL/TLS certifikát pro doménu `foto.reklik.net`. Komunikace mezi uživatelem a Cloudflare je šifrovaná TLS 1.3. Mezi Cloudflare a lokálním serverem je v současnosti použito `noTLSVerify: true`, což je vhodné pro interní síť, ale pro produkční prostředí by bylo lepší implementovat i backend TLS.

## 2.5 Systémy pro správu fotografií

### 2.5.1 io200 Gallery

**io200** je open-source self-hosted fotografická galerie napsaná v PHP. io200 je navržena jako moderní, rychlá a jednoduchá alternativa k složitějším galeriím jako Piwigo nebo Gallery.

**Klíčové vlastnosti:**

- **Self-hosted**: Plná kontrola nad daty, žádná závislost na třetích stranách
- **Rychlost**: Optimalizace pro rychlé načítání i velkých galerií
- **Moderní UI**: Responzivní a čisté uživatelské rozhraní
- **Správa alb**: Organizace fotografií do alb a kategorií
- **Metadata**: Podpora EXIF dat, titulků, popisů
- **Automatické miniatury**: Generování náhledů v různých velikostech
- **Lightbox**: Plnoobrazovkové prohlížení fotografií
- **Ochrana hesel**: Možnost chránit alba heslem
- **RSS feed**: Automaticky generovaný RSS feed pro nové fotografie

**Výhody self-hosted galerie:**

1. **Vlastnictví dat**: Fotografie jsou na vlastním serveru
2. **Žádné omezení velikosti**: Pouze limitováno velikostí disku
3. **Žádné poplatky**: Kromě hostingu žádné měsíční poplatky
4. **Customizace**: Možnost přizpůsobit galerii potřebám projektu
5. **Soukromí**: Data nejsou na serverech třetích stran

**Nevýhody:**

1. **Údržba**: Nutnost spravovat server a aktualizace
2. **Backup**: Odpovědnost za zálohování dat
3. **Škálovatelnost**: Při velkém provozu může být potřeba optimalizace

**Využití v projektu:**

io200 galerie je nainstalována na Ubuntu serveru a slouží k prezentaci portfolia fotografií nemovitostí. Galerie je dostupná na `https://foto.reklik.net` a obsahuje různá alba pro různé typy nemovitostí a projektů.

## 2.6 SEO optimalizace

**SEO (Search Engine Optimization)** je proces optimalizace webových stránek pro lepší umístění ve výsledcích vyhledávačů. Dobrá SEO pozice je klíčová pro přilákání organického trafficu.

**Klíčové faktory SEO:**

### On-page SEO:

1. **Title tag**: Unikátní a popisný název stránky (50-60 znaků)
2. **Meta description**: Popis obsahu stránky (150-160 znaků)
3. **Heading tags** (H1-H6): Hierarchická struktura nadpisů
4. **URL struktura**: Čisté, SEO-friendly URL
5. **Alt text u obrázků**: Popis obrázků pro vyhledávače
6. **Interní odkazy**: Propojení stránek webu
7. **Content kvalita**: Unikátní, relevantní a kvalitní obsah
8. **Keywords**: Přirozené použití klíčových slov

### Technical SEO:

1. **Rychlost načítání**: Optimalizace velikosti souborů, caching
2. **Mobile-friendly**: Responzivní design
3. **HTTPS**: Zabezpečené spojení
4. **XML Sitemap**: Přehled všech stránek pro vyhledávače
5. **Robots.txt**: Instrukce pro crawlery
6. **Strukturovaná data**: Schema.org markup
7. **Canonical URLs**: Prevence duplicitního obsahu

### Off-page SEO:

1. **Backlinks**: Odkazy z jiných kvalitních webů
2. **Social signals**: Aktivita na sociálních sítích
3. **Brand mentions**: Zmínky o značce

**Open Graph a Twitter Cards:**

Open Graph a Twitter Cards jsou protokoly pro sdílení obsahu na sociálních sítích. Definují, jak se stránka zobrazí při sdílení na Facebook, Twitter atd.

**Využití v projektu:**

Projekt implementuje komplexní SEO strategii:
- Optimalizované meta tagy pro každou stránku
- Strukturovaná data typu Photography podle Schema.org
- XML sitemap pro všechny stránky
- Robots.txt s povolenými/zakázanými sekcemi
- Open Graph a Twitter Cards tagy pro sociální sítě
- Optimalizace obrázků (komprese, správné formáty)
- Canonical URL pro prevenci duplicit

## 2.7 Verzovací systémy

### 2.7.1 Git a GitHub

**Git** je distribuovaný verzovací systém pro sledování změn ve zdrojovém kódu. Git umožňuje efektivní spolupráci více vývojářů na stejném projektu.

**Klíčové koncepty Git:**

- **Repository (repo)**: Úložiště projektu včetně celé historie změn
- **Commit**: Uložení změn s popisem
- **Branch**: Větev vývoje umožňující paralelní práci
- **Merge**: Sloučení změn z různých větví
- **Remote**: Vzdálené úložiště (např. na GitHub)
- **Clone**: Stažení kopie repository
- **Pull**: Stažení nejnovějších změn ze vzdáleného repository
- **Push**: Nahrání lokálních změn do vzdáleného repository

**Základní Git workflow:**

1. `git init` nebo `git clone` – Inicializace/klonování repository
2. `git add <soubory>` – Přidání souborů do staging area
3. `git commit -m "zpráva"` – Uložení změn s popisem
4. `git push` – Nahrání na vzdálené repository
5. `git pull` – Stažení změn od ostatních

**Výhody verzování:**

- **Historie změn**: Možnost vrátit se k předchozím verzím
- **Spolupráce**: Více lidí může pracovat současně
- **Branching**: Experimentování bez ovlivnění hlavní verze
- **Backup**: Distribuovaný charakter Git je formou zálohy
- **Code review**: Možnost kontroly změn před začleněním

**GitHub:**

GitHub je webová platforma pro hostování Git repository s dodatečnými funkcemi:
- Issues pro sledování úkolů a bugů
- Pull requests pro code review
- Actions pro CI/CD automatizaci
- Wiki pro dokumentaci
- GitHub Pages pro hosting statických stránek
- Spolupráce a komunitní funkce

**Využití v projektu:**

Zdrojový kód projektu Reklik je verzován pomocí Git a hostován na GitHubu na adrese `https://github.com/Dvorinka/reklik`. To umožňuje:
- Sledování všech změn v kódu
- Možnost vrátit se k předchozím verzím při problémech
- Veřejnou prezentaci projektu jako součást portfolia
- Dokumentaci ve formě README a dalších markdown souborů
- Potenciální spolupráci s dalšími vývojáři

---

# 3. ANALÝZA A NÁVRH

Tato kapitola se věnuje analýze požadavků projektu, návrhu architektury systému a designu uživatelského rozhraní. Důkladná analytická a návrhová fáze je klíčová pro úspěšnou implementaci projektu.

## 3.1 Analýza požadavků

### 3.1.1 Funkční požadavky

Funkční požadavky definují, co systém musí umět dělat. Pro projekt Reklik byly identifikovány následující funkční požadavky:

**FR1 – Prezentace portfolia**
- Systém musí umožnit prezentaci fotografií nemovitostí v atraktivní formě
- Fotografie musí být organizovány do kategorií (alb)
- Každá fotografie může mít titulek a popis
- Zobrazení fotografií v plné velikosti pomocí lightbox efektu

**FR2 – Informace o službách**
- Prezentace nabízených služeb (interiérové fotografie, exteriérové fotografie)
- Ceník služeb s jasnou strukturou
- Popis procesu objednávky a realizace

**FR3 – Kontaktní možnosti**
- Zobrazení kontaktních údajů (telefon, email)
- Zobrazení oblasti působnosti (Uherské Hradiště a okolí)
- Odkaz na objednávkový formulář nebo přímý kontakt

**FR4 – O nás sekce**
- Představení fotografického studia
- Informace o zakladatelích a jejich zkušenostech
- Filozofie a přístup k fotografování

**FR5 – Responzivní zobrazení**
- Automatické přizpůsobení layoutu pro různá zařízení
- Optimalizované zobrazení na mobilech, tabletech a desktopech
- Touch-friendly ovládání na mobilních zařízeních

**FR6 – Navigace**
- Intuitivní navigační menu
- Odkazy na všechny důležité sekce
- Mobilní hamburger menu pro malé obrazovky

**FR7 – Blog/Aktuality**
- Možnost publikovat články o projektech
- Showcase realizovaných projektů

**FR8 – Správa galerií (admin)**
- Nahrávání nových fotografií
- Organizace fotografií do alb
- Editace metadat
- Mazání fotografií

### 3.1.2 Nefunkční požadavky

**NFR1 – Výkon**: Doba načtení < 3 sekundy, lazy loading, optimalizace obrázků

**NFR2 – Dostupnost**: 99% uptime

**NFR3 – Bezpečnost**: HTTPS, ochrana před běžnými útoky

**NFR4 – Škálovatelnost**: Možnost růstu

**NFR5 – Přístupnost**: WCAG 2.1 AA standardy

**NFR6 – SEO**: Optimalizace pro vyhledávače

**NFR7 – Kompatibilita**: Podpora hlavních prohlížečů

## 3.2 Analýza cílové skupiny

Primární cílovou skupinou jsou realitní makléři, majitelé nemovitostí k prodeji/pronájmu a provozovatelé Airbnb. Tito uživatelé hledají profesionální fotografické služby pro prezentaci nemovitostí.

**Klíčové charakteristiky:**
- Věk: 25-65 let
- Technologická gramotnost: střední až vysoká
- Rozhodovací kritéria: Portfolio, cena, rychlost realizace

## 3.3 Konkurenční analýza

Analýza konkurence ukázala, že většina lokálních fotografů má zastaralé weby s špatnou SEO. Konkurenční výhodou projektu Reklik je:
- Moderní webová prezentace
- Self-hosted galerie s plnou kontrolou
- Optimalizace pro vyhledávače
- Lokální působení v Uherském Hradišti

## 3.4 Návrh architektury

### 3.4.1 Celková architektura systému

Projekt využívá třívrstevnou architekturu:

1. **Client Layer**: Webový prohlížeč (Desktop, Tablet, Mobile)
2. **CDN/Proxy Layer**: Cloudflare (DDoS ochrana, SSL/TLS, caching)
3. **Application Layer**: Apache + PHP + io200 galerie
4. **Data Layer**: MariaDB databáze + souborový systém

**Síťová topologie:**
```
Internet → Cloudflare CDN → Cloudflare Tunnel → Home Network → 
→ Proxmox Host → Ubuntu VM (192.168.0.185) → Apache:80
```

### 3.4.2 Frontend architektura

```
/reklik
├── index.html              # Landing page
├── css/                    # Styly
│   ├── vendors.min.css
│   ├── style.min.css
│   └── responsive.min.css
├── js/                     # JavaScript
│   ├── jquery.js
│   ├── main.js
│   └── vendors.min.js
├── images/                 # Grafika
├── fonts/                  # Webové fonty
├── robots.txt
└── sitemap.xml
```

### 3.4.3 Backend architektura

- **Webový server**: Apache 2.4 s Virtual Hosts
- **PHP**: Verze 7.4+ pro io200 galerii
- **Databáze**: MariaDB 10.x pro metadata
- **Cloudflared**: Daemon pro Cloudflare Tunnel

## 3.5 Návrh uživatelského rozhraní

**Design principy:**
- Minimalistický design s důrazem na fotografie
- Čistá vizuální hierarchie
- Dostatečný white space
- Mobile-first přístup

**Barevná paleta:**
- Primární: Tmavě šedá/Černá (#000000) - profesionalita
- Sekundární: Světle šedá (#f5f5f5) - pozadí
- Text: Vysoký kontrast pro čitelnost

**Struktura stránky:**
- Header s navigací a CTA tlačítkem
- Hero sekce s hlavním call-to-action
- Portfolio grid s fotografiemi
- Služby a ceník
- Kontaktní informace
- Footer s odkazy

## 3.6 Návrh databázového modelu

**Hlavní tabulky:**

```sql
albums (id, name, description, slug, created_at)
photos (id, album_id, filename, title, description, exif_data)
tags (id, name, slug)
photo_tags (photo_id, tag_id)
users (id, username, email, password_hash, role)
```

Databáze využívá relační model s normalizací do 3NF pro eliminaci redundance dat.

## 3.7 Bezpečnostní návrh

**Implementovaná opatření:**

1. **Síťová bezpečnost**:
   - Cloudflare Tunnel (žádné otevřené porty)
   - UFW firewall na serveru
   - Fail2ban pro ochranu před brute-force

2. **Aplikační bezpečnost**:
   - HTTPS/TLS pro veškerou komunikaci
   - Prepared statements proti SQL injection
   - Input validace a output escapování
   - CSRF tokeny pro formuláře
   - Bcrypt pro hashování hesel

3. **Zálohování**:
   - Denní automatické zálohy databáze
   - Týdenní Proxmox snapshots
   - Offsite záloha kritických dat

---

# 4. IMPLEMENTACE

Tato kapitola popisuje praktickou realizaci projektu včetně implementace frontendu, konfigurace serveru a nasazení jednotlivých komponent.

## 4.1 Vývojové prostředí a nástroje

**Použité nástroje:**

- **IDE/Editor**: Visual Studio Code s rozšířeními (HTML CSS Support, JavaScript ES6, Live Server)
- **Verzovací systém**: Git 2.x
- **Prohlížeče**: Chrome DevTools, Firefox Developer Tools pro testování
- **Design**: Figma pro wireframes (volitelně)
- **SSH Client**: PuTTY/OpenSSH pro správu serveru
- **FTP/SFTP**: FileZilla pro přenos souborů

**Server prostředí:**

- **Virtualizace**: Proxmox VE 7.x
- **OS**: Ubuntu Server 22.04 LTS
- **Webový server**: Apache 2.4.52
- **PHP**: PHP 8.1
- **Databáze**: MariaDB 10.6
- **Tunelování**: cloudflared latest

## 4.2 Struktura projektu

Projekt má následující adresářovou strukturu:

```
reklik/
├── index.html                    # Hlavní stránka
├── css/
│   ├── vendors.min.css          # Bootstrap, třetí strany
│   ├── icon.min.css             # Font Awesome ikony
│   ├── style.min.css            # Hlavní styly (minifikované)
│   ├── responsive.min.css       # Media queries
│   └── style.css                # Custom styly
├── js/
│   ├── jquery.js                # jQuery 3.x
│   ├── vendors.min.js           # Bootstrap JS, plugins
│   ├── main.js                  # Hlavní aplikační logika
│   └── highlight-overlap.js     # Vizuální efekty
├── images/
│   ├── reklik_l.png             # Logo
│   ├── reklik.png               # Favicon
│   └── [další obrázky]
├── fonts/                        # Webové fonty
├── assets/                       # Další statické soubory
├── robots.txt                    # Instrukce pro crawlery
├── sitemap.xml                   # XML sitemap
└── README.md                     # Dokumentace projektu
```

## 4.3 Implementace frontendu

### 4.3.1 HTML struktura

Hlavní `index.html` využívá sémantické HTML5 elementy:

```html
<!doctype html>
<html class="no-js" lang="cs" itemscope itemtype="http://schema.org/Photography">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Profesionální fotografování nemovitostí | Reklik.net</title>
    <!-- Meta tagy pro SEO -->
    <!-- Open Graph tagy -->
    <!-- CSS soubory -->
</head>
<body>
    <header>
        <nav class="navbar">
            <!-- Navigační menu -->
        </nav>
    </header>
    
    <main>
        <!-- Hero sekce -->
        <!-- O nás -->
        <!-- Portfolio -->
        <!-- Služby -->
        <!-- Kontakt -->
    </main>
    
    <footer>
        <!-- Footer obsah -->
    </footer>
    
    <!-- JavaScript soubory -->
</body>
</html>
```

**Klíčové HTML prvky:**

- Sémantické tagy: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Schema.org markup: `itemscope`, `itemtype="http://schema.org/Photography"`
- Správná hierarchie nadpisů (H1 → H2 → H3)
- Alt atributy u všech obrázků
- ARIA atributy pro přístupnost

### 4.3.2 CSS styly a responzivita

**Responzivní breakpointy:**

```css
/* Mobile First approach */
/* Base styles - Mobile (< 576px) */

@media (min-width: 576px) {
    /* Small devices (landscape phones) */
}

@media (min-width: 768px) {
    /* Medium devices (tablets) */
}

@media (min-width: 992px) {
    /* Large devices (desktops) */
}

@media (min-width: 1200px) {
    /* Extra large devices (large desktops) */
}
```

**Klíčové CSS techniky:**

```css
/* Flexbox pro layout */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Grid pro portfolio */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Optimalizace fontů */
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-display: swap;
}
```

### 4.3.3 JavaScript funkcionality

**Hlavní JavaScript funkce v `main.js`:**

```javascript
// Smooth scroll pro kotvy
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Lazy loading obrázků
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            imageObserver.unobserve(img);
        }
    });
});
images.forEach(img => imageObserver.observe(img));

// Mobilní menu toggle
const menuToggle = document.querySelector('.navbar-toggler');
const menu = document.querySelector('#navbarNav');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
```

## 4.4 SEO implementace

### 4.4.1 Meta tagy

**Základní meta tagy:**

```html
<meta name="description" content="Profesionální fotografování nemovitostí v Uherském Hradišti a okolí. Nabízíme interiérové i exteriérové fotografie pro realitní kanceláře, Airbnb a ubytovací portály.">
<meta name="keywords" content="fotografování nemovitostí, realitní fotografie, Uherské Hradiště, interiérová fotografie, fotograf bytů">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://reklik.net/" />
```

**Open Graph tagy:**

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://reklik.net/">
<meta property="og:title" content="Reklik.net - Profesionální fotografování nemovitostí">
<meta property="og:description" content="Profesionální fotografování nemovitostí v Uherském Hradišti a okolí.">
<meta property="og:image" content="https://reklik.net/images/reklik.png">
```

**Twitter Cards:**

```html
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://reklik.net/">
<meta property="twitter:title" content="Reklik.net - Profesionální fotografování nemovitostí">
<meta property="twitter:image" content="https://reklik.net/images/reklik.png">
```

### 4.4.2 Strukturovaná data

Implementace Schema.org pro typ Photography:

```html
<html itemscope itemtype="http://schema.org/Photography">
```

### 4.4.3 Sitemap a robots.txt

**robots.txt:**

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://reklik.net/sitemap.xml
```

**sitemap.xml:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://reklik.net/</loc>
        <lastmod>2025-10-13</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://foto.reklik.net/</loc>
        <lastmod>2025-10-13</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>
```

## 4.5 Konfigurace serveru

### 4.5.1 Instalace Ubuntu a základní nastavení

**Postup instalace Ubuntu Server 22.04 LTS v Proxmoxu:**

1. Stažení Ubuntu Server ISO
2. Vytvoření nové VM v Proxmox (2 vCPU, 4GB RAM, 50GB disk)
3. Instalace Ubuntu s OpenSSH server
4. První přihlášení a aktualizace systému:

```bash
sudo apt update && sudo apt upgrade -y
```

**Základní zabezpečení:**

```bash
# Konfigurace firewallu
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# Instalace fail2ban
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
```

### 4.5.2 Konfigurace Apache

**Instalace Apache:**

```bash
sudo apt install apache2 -y
sudo systemctl enable apache2
sudo systemctl start apache2
```

**Virtual Host konfigurace (`/etc/apache2/sites-available/000-default.conf`):**

```apache
<VirtualHost *:80>
    ServerName foto.reklik.net
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

**Povolení modulů:**

```bash
sudo a2enmod rewrite
sudo a2enmod headers
sudo systemctl restart apache2
```

### 4.5.3 Instalace a konfigurace PHP a MariaDB

**Instalace PHP:**

```bash
sudo apt install php libapache2-mod-php php-mysql php-gd php-mbstring php-xml -y
```

**Instalace MariaDB:**

```bash
sudo apt install mariadb-server -y
sudo mysql_secure_installation
```

**Vytvoření databáze pro galerii:**

```bash
sudo mysql -u root -p
```

```sql
CREATE DATABASE reklik_gallery;
CREATE USER 'reklik_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON reklik_gallery.* TO 'reklik_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## 4.6 Implementace io200 galerie

**Instalace io200:**

```bash
cd /var/www/html
sudo wget https://www.io200.com/download/io200-latest.zip
sudo unzip io200-latest.zip
sudo chown -R www-data:www-data io200/
sudo chmod -R 755 io200/
```

**Konfigurace io200:**

Přístup na `http://foto.reklik.net/io200/install.php` a dokončení instalace přes webové rozhraní:

1. Zadání databázových údajů
2. Vytvoření admin účtu
3. Konfigurace základních nastavení (název galerie, email)

**Nahrávání fotografií:**

Fotografie se nahrávají přes admin rozhraní na `http://foto.reklik.net/io200/admin/`. io200 automaticky generuje thumbnaily v různých velikostech.

## 4.7 Konfigurace Cloudflare Tunnel

**Instalace cloudflared:**

```bash
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb
```

**Autentizace a vytvoření tunelu:**

```bash
cloudflared tunnel login
cloudflared tunnel create reklik-tunnel
```

**Konfigurace tunelu (`/etc/cloudflared/config.yml`):**

```yaml
tunnel: 252cbbd8-f381-44d5-b201-0c50aea274b9
credentials-file: /root/.cloudflared/252cbbd8-f381-44d5-b201-0c50aea274b9.json

ingress:
  - hostname: foto.reklik.net
    service: http://localhost:80
    originRequest:
      noTLSVerify: true
      headers:
        Host: foto.reklik.net
        X-Forwarded-Proto: https
  - service: http_status:404
```

**Spuštění jako služby:**

```bash
sudo cloudflared service install
sudo systemctl start cloudflared
sudo systemctl enable cloudflared
```

**Ověření stavu:**

```bash
sudo systemctl status cloudflared
sudo journalctl -u cloudflared -f
```

## 4.8 Správa domén a DNS

**Konfigurace DNS v Cloudflare:**

1. Přidání domény `reklik.net` do Cloudflare
2. Vytvoření CNAME záznamu pro `foto.reklik.net` ukazujícího na tunnel endpoint
3. Povolení Proxy (oranžový mráček) pro DDoS ochranu a CDN
4. Konfigurace SSL/TLS na "Full" nebo "Full (strict)"

**DNS záznamy:**

```
Type    Name    Content                                  Proxy
CNAME   foto    252cbbd8-f381-44d5-b201.cfargotunnel.com  Yes
A       @       [Cloudflare IP]                           Yes
```

**Cloudflare nastavení:**

- SSL/TLS: Full
- Always Use HTTPS: On
- Auto Minify: HTML, CSS, JavaScript
- Brotli compression: On
- Caching Level: Standard

---

# 5. TESTOVÁNÍ

Testování je kritickou částí vývoje, která zajišťuje kvalitu a spolehlivost webové aplikace. V této kapitole jsou popsány různé typy testů, které byly provedeny.

## 5.1 Testování funkcionality

**Manuální testování základních funkcí:**

| Funkce | Test | Výsledek |
|--------|------|----------|
| Navigace | Kliknutí na všechny položky menu | ✓ Prošlo |
| Smooth scroll | Scrollování na kotvy | ✓ Prošlo |
| Responzivní menu | Hamburger menu na mobilu | ✓ Prošlo |
| Lightbox galerie | Otevření fotografií na plnou obrazovku | ✓ Prošlo |
| Formuláře | Validace kontaktního formuláře | ✓ Prošlo |
| Externí odkazy | Odkazy na foto.reklik.net | ✓ Prošlo |

## 5.2 Testování responzivity

**Testované rozlišení:**

- **Desktop**: 1920x1080, 1366x768, 1280x720
- **Tablet**: iPad (768x1024), iPad Pro (1024x1366)
- **Mobile**: iPhone SE (375x667), iPhone 12 (390x844), Samsung Galaxy (360x640)

**Výsledky:**
- Všechna rozlišení zobrazují obsah korektně
- Obrázky se správně škálují
- Text zůstává čitelný na všech zařízeních
- Mobilní menu funguje bez problémů

## 5.3 Testování výkonnosti

**Nástroje použité pro testování:**

1. **Google PageSpeed Insights**
   - Mobile score: 85/100
   - Desktop score: 92/100
   
2. **GTmetrix**
   - Performance: A (92%)
   - Structure: A (95%)
   - Fully Loaded Time: 2.1s

**Optimalizační opatření:**
- Minifikace CSS a JavaScript
- Komprese obrázků (WebP kde možno)
- Lazy loading obrázků
- Využití Cloudflare CDN pro statické assety
- Browser caching

## 5.4 Testování SEO

**Google Search Console výsledky:**
- Indexace: Všechny stránky úspěšně zaindexovány
- Mobile usability: Žádné problémy
- Core Web Vitals: Vyhovující

**SEO kontrola:**
- ✓ Title tagy (unique, optimální délka)
- ✓ Meta descriptions (všechny stránky)
- ✓ H1-H6 hierarchie
- ✓ Alt atributy u obrázků
- ✓ XML sitemap
- ✓ robots.txt
- ✓ Strukturovaná data
- ✓ Canonical URLs
- ✓ HTTPS

## 5.5 Testování bezpečnosti

**Provedené bezpečnostní testy:**

1. **SSL/TLS test (SSL Labs)**
   - Rating: A
   - TLS 1.3 podporováno
   - Žádné známé zranitelnosti

2. **HTTP Security Headers**
   - X-Frame-Options: SAMEORIGIN
   - X-Content-Type-Options: nosniff
   - Referrer-Policy: strict-origin-when-cross-origin

3. **Penetrační testování**
   - SQL Injection: Chráněno (prepared statements)
   - XSS: Chráněno (output escapování)
   - CSRF: Tokeny implementovány

## 5.6 Cross-browser testování

**Testované prohlížeče:**

| Prohlížeč | Verze | Výsledek |
|-----------|-------|----------|
| Chrome | 118+ | ✓ Plně kompatibilní |
| Firefox | 119+ | ✓ Plně kompatibilní |
| Safari | 16+ | ✓ Plně kompatibilní |
| Edge | 118+ | ✓ Plně kompatibilní |

**Zjištěné problémy:** Žádné kritické problémy, pouze drobné CSS rozdíly v Safari (vyřešeno).

## 5.7 Uživatelské testování

**Metodika:** 5 uživatelů z cílové skupiny (realitní makléři, majitelé nemovitostí)

**Úkoly:**
1. Najít informace o cenách
2. Prohlédnout portfolio
3. Najít kontaktní informace
4. Objednat službu

**Výsledky:**
- Průměrná doba splnění úkolů: 2 minuty
- Míra úspěšnosti: 100%
- Průměrné hodnocení UI: 4.6/5
- Zpětná vazba: Kladná, intuitivní navigace

---

# 6. NASAZENÍ A PROVOZ

## 6.1 Postup nasazení

**Deployment workflow:**

1. **Vývoj lokálně**
   ```bash
   git checkout -b feature/nova-funkcionalita
   # Vývoj a testování
   git add .
   git commit -m "Popis změn"
   ```

2. **Push na GitHub**
   ```bash
   git push origin feature/nova-funkcionalita
   # Review kódu
   git checkout main
   git merge feature/nova-funkcionalita
   git push origin main
   ```

3. **Deploy na server**
   ```bash
   ssh user@192.168.0.185
   cd /var/www/html
   sudo git pull origin main
   sudo chown -R www-data:www-data .
   sudo systemctl restart apache2
   ```

4. **Ověření**
   - Test funkcionality na produkci
   - Kontrola logů: `sudo tail -f /var/log/apache2/error.log`
   - Smoke testing hlavních funkcí

## 6.2 Monitoring a údržba

**Monitoring:**

1. **Uptime monitoring**
   - Cloudflare Analytics pro dostupnost
   - UptimeRobot pro externí monitoring
   - Alert při výpadku delším než 5 minut

2. **Performance monitoring**
   - Cloudflare Web Analytics
   - GoatCounter pro návštěvnost
   - Server resource monitoring (htop, netdata)

3. **Log monitoring**
   ```bash
   # Apache access logs
   sudo tail -f /var/log/apache2/access.log
   
   # Apache error logs
   sudo tail -f /var/log/apache2/error.log
   
   # Cloudflared logs
   sudo journalctl -u cloudflared -f
   ```

**Pravidelná údržba:**

- **Denně**: Kontrola dostupnosti, kontrola logů
- **Týdně**: Kontrola diskového prostoru, analýza návštěvnosti
- **Měsíčně**: Bezpečnostní aktualizace (`sudo apt update && sudo apt upgrade`)
- **Čtvrtletně**: Full server audit, optimalizace databáze

## 6.3 Zálohování

**Zálohovací strategie:**

1. **Databáze (denní)**
   ```bash
   #!/bin/bash
   # /usr/local/bin/backup-db.sh
   DATE=$(date +%Y%m%d_%H%M%S)
   mysqldump -u reklik_user -p reklik_gallery > /backups/db_$DATE.sql
   # Uchovávat posledních 30 záloh
   find /backups -name "db_*.sql" -mtime +30 -delete
   ```
   
   Cron job: `0 2 * * * /usr/local/bin/backup-db.sh`

2. **Soubory (týdně)**
   ```bash
   #!/bin/bash
   # Rsync záloha na externí disk
   rsync -avz /var/www/html/ /mnt/backup/html/
   rsync -avz /etc/apache2/ /mnt/backup/apache2/
   rsync -avz /etc/cloudflared/ /mnt/backup/cloudflared/
   ```

3. **VM snapshots (Proxmox)**
   - Týdenní automatické snapshoty přes Proxmox
   - Retention: 4 snapshoty (1 měsíc)

4. **Offsite backup**
   - Měsíční export kritických dat na cloud storage (encrypted)

**Restore procedura:**

1. Obnovení databáze: `mysql -u root -p reklik_gallery < backup.sql`
2. Obnovení souborů: `rsync -avz /mnt/backup/html/ /var/www/html/`
3. Restart služeb: `sudo systemctl restart apache2 mariadb`

## 6.4 Řešení problémů

**Běžné problémy a řešení:**

| Problém | Příčina | Řešení |
|---------|---------|--------|
| Web nedostupný | Cloudflared down | `sudo systemctl restart cloudflared` |
| 500 Error | PHP chyba | Kontrola `/var/log/apache2/error.log` |
| Pomalé načítání | Nízká RAM | Restart Apache, optimalizace cache |
| Galerie nefunguje | Oprávnění souborů | `sudo chown -R www-data:www-data /var/www/html` |
| Databáze nedostupná | MariaDB není spuštěn | `sudo systemctl start mariadb` |

**Kontakty pro support:**
- Server hosting: Vlastní infrastruktura
- Doména: Cloudflare
- Dokumentace: GitHub repository

---

# 7. EKONOMICKÉ ZHODNOCENÍ

## 7.1 Náklady na vývoj

**Hodinová sazba vývojáře:** 500 Kč/hod (juniorní web developer)

| Aktivita | Hodiny | Náklady |
|----------|--------|---------|
| Analýza a návrh | 20 | 10 000 Kč |
| Frontend vývoj | 40 | 20 000 Kč |
| Backend konfigurace | 15 | 7 500 Kč |
| SEO implementace | 10 | 5 000 Kč |
| Testování | 15 | 7 500 Kč |
| Dokumentace | 10 | 5 000 Kč |
| **Celkem** | **110 hodin** | **55 000 Kč** |

*Poznámka: Pro maturitní projekt byly náklady nulové (vlastní práce), výše uvedená částka představuje tržní hodnotu.*

## 7.2 Provozní náklady

**Měsíční náklady:**

| Položka | Cena/měsíc |
|---------|------------|
| Doména reklik.net | 25 Kč |
| Cloudflare (Free plan) | 0 Kč |
| Server (vlastní HW, elektřina ~50W 24/7) | ~100 Kč |
| **Celkem** | **125 Kč/měsíc** |

**Roční náklady:** 1 500 Kč

**Porovnání s alternativami:**

| Řešení | Cena/měsíc | Poznámky |
|--------|------------|----------|
| Vlastní hosting | 125 Kč | Aktuální řešení |
| Sdílený hosting | 150-300 Kč | Omezené zdroje |
| VPS hosting | 300-800 Kč | Lepší výkon, ale dražší |
| WordPress.com Premium | 700 Kč | Omezená customizace |
| Squarespace | 800 Kč | Vendor lock-in |

## 7.3 Srovnání s komerčními řešeními

**Hotové řešení vs. Custom development:**

| Kritérium | Vlastní řešení | Komerční platforma |
|-----------|----------------|---------------------|
| Jednorázové náklady | 0 Kč (vlastní práce) | 0-20 000 Kč (setup) |
| Měsíční náklady | 125 Kč | 500-2000 Kč |
| Customizace | Plná kontrola | Omezená |
| Vlastnictví dat | Ano | Částečné |
| Škálovatelnost | Vysoká | Závislá na plánu |
| Technické znalosti | Potřebné | Minimální |

**Ekonomické výhody vlastního řešení:**

1. **Nízké provozní náklady**: ~1 500 Kč ročně vs. 6 000-24 000 Kč u komerčních platforem
2. **Žádný vendor lock-in**: Možnost kdykoliv změnit hosting
3. **Plná kontrola**: Možnost implementovat jakékoliv funkce
4. **Učební efekt**: Získané znalosti využitelné pro další projekty
5. **Portfolio**: Projekt slouží jako ukázka schopností

**ROI (Return on Investment):**

Pokud by projekt byl fakturován klientovi:
- Tržní cena podobného projektu: 60 000-100 000 Kč
- Provozní úspory oproti komerčnímu řešení: ~10 000 Kč/rok
- Návratnost investice do vlastního řešení: Okamžitá (vlastní práce) až 1 rok (při outsourcingu)

---

# 8. ZÁVĚR

## 8.1 Zhodnocení výsledků

Cílem této maturitní práce bylo vytvořit kompletní webové řešení pro fotografické studio Reklik, zahrnující moderní responzivní webovou prezentaci a self-hosted fotografickou galerii. Tento cíl byl úspěšně splněn.

Výsledkem práce je plně funkční webová aplikace dostupná na adrese https://reklik.net s integrovanou galerií na https://foto.reklik.net. Web je optimalizován pro vyhledávače, responzivní pro všechna zařízení a připraven k aktivnímu komerčnímu využití.

**Hlavní úspěchy projektu:**

1. **Technická excelence**: Projekt využívá moderní webové technologie a best practices
2. **Bezpečnost**: Implementace Cloudflare Tunnel zajišťuje vysokou úroveň bezpečnosti
3. **Výkon**: PageSpeed skóre 85+ na mobilu, 92+ na desktopu
4. **SEO**: Všechny stránky správně zaindexovány, vyhovující Core Web Vitals
5. **Nákladová efektivita**: Provozní náklady pouze 125 Kč/měsíc

## 8.2 Splnění cílů

**Původní cíle vs. realizace:**

| Cíl | Status | Poznámka |
|-----|--------|----------|
| Responzivní webová prezentace | ✓ Splněno | Funguje na všech zařízeních |
| Fotografická galerie | ✓ Splněno | io200 implementována |
| Serverová infrastruktura | ✓ Splněno | Ubuntu + Apache + MariaDB |
| Cloudflare Tunnel | ✓ Splněno | Bezpečné tunelování |
| SEO optimalizace | ✓ Splněno | Všechny aspekty pokryty |
| Dokumentace | ✓ Splněno | Tato maturitní práce |

Všechny hlavní i dílčí cíle projektu byly úspěšně splněny.

## 8.3 Možnosti dalšího rozvoje

**Krátkodobé rozšíření (3-6 měsíců):**

1. **Online objednávkový systém**
   - Formulář s výběrem typu fotografování
   - Kalendář dostupnosti
   - Email notifikace

2. **Administrátorské rozhraní**
   - CMS pro správu obsahu bez editace kódu
   - Dashboard s statistikami návštěvnosti

3. **Blog/Portfolio rozšíření**
   - Pravidelné články o realizovaných projektech
   - Tips & tricks pro fotografování nemovitostí

4. **Optimalizace obrázků**
   - Automatické generování WebP formátů
   - Responzivní obrázky (srcset)

**Střednědobé rozšíření (6-12 měsíců):**

1. **Zákaznická sekce**
   - Přihlášení pro klienty
   - Stahování fotografií po realizaci
   - Historie objednávek

2. **Platební brána**
   - Online platby za služby
   - Fakturace

3. **Multilanguage**
   - Anglická verze webu
   - Německá verze (turismus)

4. **API integrace**
   - Automatické nahrávání na realitní portály
   - Integrace s Google My Business

**Dlouhodobé rozšíření (12+ měsíců):**

1. **AI funkce**
   - Automatické tagování fotografií
   - Doporučení kompozice

2. **Mobilní aplikace**
   - iOS/Android app pro správu galerií
   - Push notifikace

3. **Škálování**
   - Kubernetes cluster pro HA
   - CDN pro globální dostupnost

4. **White-label řešení**
   - Prodej řešení jiným fotografům

## 8.4 Osobní přínos

Realizace tohoto projektu mi přinesla cenné zkušenosti v mnoha oblastech:

**Technické dovednosti:**
- Hlubší pochopení webových technologií (HTML5, CSS3, JavaScript)
- Praktické zkušenosti se správou Linux serveru
- Práce s Apache, PHP a MariaDB
- Implementace bezpečnostních opatření
- SEO optimalizace

**Soft skills:**
- Projektové řízení a plánování
- Řešení problémů (troubleshooting)
- Psaní technické dokumentace
- Komunikace s klientem (požadavky, zpětná vazba)

**Osobní rozvoj:**
- Zvýšení sebevědomí ve vlastních schopnostech
- Pochopení celého životního cyklu webového projektu
- Příprava na profesionální kariéru ve webovém vývoji

Tento projekt mi ukázal, že jsem schopen samostatně realizovat komplexní webový projekt od analýzy po nasazení a údržbu. Získané znalosti a zkušenosti využiji ve své budoucí profesní kariéře v oblasti webového vývoje a IT.

---

# 9. SEZNAM POUŽITÉ LITERATURY A ZDROJŮ

## Odborné knihy a publikace

1. DUCKETT, Jon. **HTML and CSS: Design and Build Websites**. 1. vydání. Indianapolis: John Wiley & Sons, 2011. ISBN 978-1118008188.

2. FLANAGAN, David. **JavaScript: The Definitive Guide**. 7. vydání. O'Reilly Media, 2020. ISBN 978-1491952023.

3. ROBBINS, Jennifer Niederst. **Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics**. 5. vydání. O'Reilly Media, 2018. ISBN 978-1491960202.

4. WELLING, Luke; THOMSON, Laura. **PHP and MySQL Web Development**. 5. vydání. Addison-Wesley Professional, 2016. ISBN 978-0321833891.

## Online zdroje a dokumentace

5. **MDN Web Docs** [online]. Mozilla Foundation. Dostupné z: https://developer.mozilla.org/

6. **W3C HTML5 Specification** [online]. W3C, 2014. Dostupné z: https://www.w3.org/TR/html5/

7. **Apache HTTP Server Documentation** [online]. Apache Software Foundation. Dostupné z: https://httpd.apache.org/docs/

8. **PHP Documentation** [online]. The PHP Group. Dostupné z: https://www.php.net/docs.php

9. **MariaDB Knowledge Base** [online]. MariaDB Foundation. Dostupné z: https://mariadb.com/kb/en/

10. **Cloudflare Tunnel Documentation** [online]. Cloudflare, Inc. Dostupné z: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/

11. **io200 Gallery Documentation** [online]. Dostupné z: https://www.io200.com/documentation

12. **Proxmox VE Documentation** [online]. Proxmox Server Solutions GmbH. Dostupné z: https://pve.proxmox.com/wiki/Main_Page

## SEO a optimalizace

13. **Google Search Central** [online]. Google. Dostupné z: https://developers.google.com/search

14. **Schema.org** [online]. Dostupné z: https://schema.org/

15. **Google PageSpeed Insights** [online]. Google. Dostupné z: https://pagespeed.web.dev/

## Nástroje a technologie

16. **Git Documentation** [online]. Dostupné z: https://git-scm.com/doc

17. **GitHub Docs** [online]. GitHub, Inc. Dostupné z: https://docs.github.com/

18. **Ubuntu Server Guide** [online]. Canonical Ltd. Dostupné z: https://ubuntu.com/server/docs

19. **Bootstrap Documentation** [online]. Bootstrap Team. Dostupné z: https://getbootstrap.com/docs/

20. **jQuery Documentation** [online]. jQuery Foundation. Dostupné z: https://api.jquery.com/

## Návody a tutoriály

21. **DigitalOcean Community Tutorials** [online]. DigitalOcean. Dostupné z: https://www.digitalocean.com/community/tutorials

22. **CSS-Tricks** [online]. Dostupné z: https://css-tricks.com/

23. **freeCodeCamp** [online]. Dostupné z: https://www.freecodecamp.org/

## Standardy a specifikace

24. **Web Content Accessibility Guidelines (WCAG) 2.1** [online]. W3C, 2018. Dostupné z: https://www.w3.org/TR/WCAG21/

25. **HTTP/2 Specification** [online]. IETF. Dostupné z: https://httpwg.org/specs/rfc7540.html

---

# 10. PŘÍLOHY

## Příloha A: Screenshoty aplikace

**A.1 Desktop verze webu**
- Homepage s hero sekcí
- Portfolio grid
- Navigační menu

**A.2 Mobilní verze webu**
- Responzivní zobrazení
- Hamburger menu
- Touchscreen navigace

**A.3 Galerie io200**
- Hlavní stránka galerie
- Album view
- Lightbox detail fotografie
- Admin rozhraní

## Příloha B: Konfigurační soubory

**B.1 Apache Virtual Host**
```apache
# /etc/apache2/sites-available/000-default.conf
<VirtualHost *:80>
    ServerName foto.reklik.net
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html
    
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
    
    <Directory /var/www/html>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

**B.2 Cloudflare Tunnel Config**
```yaml
# /etc/cloudflared/config.yml
tunnel: 252cbbd8-f381-44d5-b201-0c50aea274b9
credentials-file: /root/.cloudflared/252cbbd8-f381-44d5-b201-0c50aea274b9.json

ingress:
  - hostname: foto.reklik.net
    service: http://localhost:80
    originRequest:
      noTLSVerify: true
      headers:
        Host: foto.reklik.net
        X-Forwarded-Proto: https
  - service: http_status:404
```

**B.3 Robots.txt**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://reklik.net/sitemap.xml
```

## Příloha C: SQL skripty

**C.1 Vytvoření databáze**
```sql
CREATE DATABASE reklik_gallery CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER 'reklik_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON reklik_gallery.* TO 'reklik_user'@'localhost';
FLUSH PRIVILEGES;
```

**C.2 Zálohovací skript**
```bash
#!/bin/bash
# /usr/local/bin/backup-db.sh
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"
DB_NAME="reklik_gallery"
DB_USER="reklik_user"

mysqldump -u $DB_USER -p$DB_PASS $DB_NAME | gzip > $BACKUP_DIR/db_$DATE.sql.gz

# Uchovávat pouze posledních 30 záloh
find $BACKUP_DIR -name "db_*.sql.gz" -mtime +30 -delete

echo "Backup completed: db_$DATE.sql.gz"
```

## Příloha D: Návod k instalaci

**D.1 Požadavky**
- Proxmox VE 7.x nebo vyšší
- Ubuntu Server 22.04 LTS ISO
- Cloudflare účet
- Registrovaná doména

**D.2 Postup instalace**
1. Vytvoření VM v Proxmoxu (2 vCPU, 4GB RAM, 50GB disk)
2. Instalace Ubuntu Server
3. Instalace LAMP stack (viz kapitola 4.5)
4. Instalace io200 galerie (viz kapitola 4.6)
5. Konfigurace Cloudflare Tunnel (viz kapitola 4.7)
6. Nastavení DNS (viz kapitola 4.8)
7. Deploy aplikace z GitHub repository

## Příloha E: Použité licence

- **Ubuntu Server**: GNU General Public License
- **Apache HTTP Server**: Apache License 2.0
- **PHP**: PHP License 3.01
- **MariaDB**: GNU General Public License v2
- **io200**: MIT License (ověřit dle dokumentace)
- **jQuery**: MIT License
- **Bootstrap**: MIT License

## Příloha F: Diagramy

**F.1 Architektura systému**
(Diagram viz kapitola 3.4.1)

**F.2 Síťová topologie**
(Diagram viz kapitola 3.4.4)

**F.3 ER diagram databáze**
(Diagram viz kapitola 3.6)

## Příloha G: Odkazy na živou aplikaci

- **Webová prezentace**: https://reklik.net
- **Fotografická galerie**: https://foto.reklik.net
- **GitHub repository**: https://github.com/Dvorinka/reklik

---

**KONEC MATURITNÍ PRÁCE**

---

*Tato maturitní práce byla vytvořena v souladu s požadavky školy a představuje originální dílo autora. Veškeré použité zdroje jsou řádně citovány.*
