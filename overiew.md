# Maturitní projekt — Web pro Reklik

**Název projektu:** Reklik (firemní web + self‑hosted galerie)

**Autor:** Tomáš Dvořák

**Repozitář:** [https://github.com/Dvorinka/reklik](https://github.com/Dvorinka/reklik)

**Live demo / doména galerie:** [https://foto.reklik.net](https://foto.reklik.net) (self‑hosted galerie běžící na serveru s io200)

---

## 1. Přehled (Overview)

Cílem maturitního projektu je vytvořit moderní, responzivní web pro fotografické studio **Reklik** s vlastním řešením galerie hostovaným na interním serveru. Projekt obsahuje:

* statický / dynamický frontend (HTML, CSS, JavaScript) pro prezentaci firmy, portfolia a kontaktů;
* self‑hosted galerii (io200) běžící na Ubuntu/Proxmox serveru a dostupnou přes zabezpečený Cloudflare tunnel (cloudflared) bez potřeby port‑forwardingu;
* backend / server konfiguraci (Apache2, PHP, MariaDB) pro případné CMS nebo dynamický obsah;
* konfigurace domén a reverzního tunelu (cloudflared) pro bezpečné vystavení interní služby ven.

Tento dokument slouží jako technická dokumentace: popis architektury, nasazení, konfigurace serveru, závislosti a doporučení pro další rozvoj.

---

## 2. Technologie a stack

* Frontend: HTML5, CSS3 (v projektu může být použit Tailwind / vlastní CSS podle repozitáře), Vanilla JavaScript
* Galerie: io200 (self‑hosted), viz [https://www.io200.com/](https://www.io200.com/)
* Web server: Apache2
* PHP: pro případné malé CMS nebo API integrace
* Databáze: MariaDB (pokud bude potřeba ukládat metadata)
* Tunelování: Cloudflare Tunnel (cloudflared) — origin tunnel, žádné port‑forwarding
* Host: vlastní server ve vnitřní síti (Proxmox VM / Ubuntu)

---

## 3. Architektura / komponenty

1. **Frontend repository** — `https://github.com/Dvorinka/reklik`

   * statické soubory v `/var/www/html` (nebo podle DocumentRoot v konfiguraci Apache)
   * struktura složek: `css/`, `js/`, `img/`, `assets/`, `pages/` atd. (podrobnosti viz repozitář)

2. **Galerie (io200)**

   * běží v Ubuntu VM (Proxmox)
   * nainstalováno podle oficiálního instalačního manuálu io200: `https://www.io200.com/documentation#installation-manual`
   * nasazeno na lokální IP `192.168.0.185` (v uvedeném příkladu)

3. **Cloudflared tunneling**

   * tunel vytváří zabezpečené spojení mezi Cloudflare a lokálním serverem, takže není třeba otevírat porty směrem z internetu
   * konfigurace tunelu je uložena v `/etc/cloudflared/config.yml`

4. **Apache virtual host**

   * nastavení `ServerName` a `DocumentRoot` + `AllowOverride All` pro běh webu a .htaccess

---

## 4. Serverové konfigurace (ukázky)

### Apache (příklad `/etc/apache2/sites-available/000-default.conf`)

```apache
<VirtualHost *:80>
    ServerName foto.reklik.net
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    <Directory /var/www/html>
        AllowOverride All
    </Directory>

</VirtualHost>
```

> Poznámka: `AllowOverride All` umožní použít `.htaccess` soubory — používejte opatrně a zabezpečte, co je třeba.

### cloudflared config (`/etc/cloudflared/config.yml`)

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

> Poznámka: `noTLSVerify: true` znamená, že cloudflared nebude validovat certifikát backendu. To bývá užitečné pro lokální interní služby, ale pokud je možné, doporučuji nasadit správný TLS certifikát v Apache a vypnout `noTLSVerify`.

---

## 5. Instalace a nasazení — krok za krokem (dodatek pro správce)

### Předpoklady (server)

* Ubuntu (na VM nebo fyzickém stroji)
* Sudo/root přístup
* Proxmox (pokud používáte VM)
* Cloudflare konto a doména s přidaným DNS záznamem (CNAME/Hostname pro tunel)

### 1) Apache + PHP + MariaDB

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install apache2 php libapache2-mod-php mariadb-server php-mysql -y
sudo systemctl enable --now apache2
sudo systemctl enable --now mariadb
```

Konfigurujte databázi podle potřeby (pokud je potřeba metadata galerie):

```bash
sudo mysql_secure_installation
# vytvoření DB a uživatele
mysql -u root -p
CREATE DATABASE reklik_db;
CREATE USER 'reklik'@'localhost' IDENTIFIED BY 'sileheslo';
GRANT ALL PRIVILEGES ON reklik_db.* TO 'reklik'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### 2) Deploy frontendu

* Klonujte repozitář do `/var/www/html` nebo jiného DocumentRoot

```bash
cd /var/www
sudo rm -rf html/*
sudo git clone https://github.com/Dvorinka/reklik.git html
sudo chown -R www-data:www-data /var/www/html
```

* Pokud používáte build step (npm, webpack), proveďte build lokálně nebo na serveru podle README v repozitáři.

### 3) Instalace a konfigurace cloudflared

Postup (shrnutí):

* Stáhnout a nainstalovat `cloudflared` podle oficiálního návodu.
* Přihlásit tunel k Cloudflare: `cloudflared tunnel login` a následně `cloudflared tunnel create <name>`.
* Vygenerovat `config.yml` jako výše a spustit službu jako systemd nebo pomocí `cloudflared service install`.

Po instalaci ověřte status:

```bash
sudo systemctl status cloudflared
```

### 4) io200 galerie — instalační shrnutí

* Postupujte podle oficiální dokumentace: [https://www.io200.com/documentation#installation-manual](https://www.io200.com/documentation#installation-manual)
* Doporučené nastavení: nasadit io200 do samostatného adresáře v `/var/www/io200` nebo jako samostatný virtuální host.
* Ujistěte se, že galerií vytvořená metadata a obrázky mají správná práva (www-data).

---

## 6. Bezpečnostní doporučení

* Používejte HTTPS: i když Cloudflare poskytuje TLS mezi klientem a Cloudflare, zvažte povolení TLS mezi cloudflared a backend (vypnout `noTLSVerify` po nasazení certifikátu na Apache).
* Pravidelné zálohy: zálohujte soubory `/var/www`, DB (pokud existuje) a složku s obrázky (galerie).
* Omezit přístup k administraci galerie pomocí základní autentizace nebo IP‑whitelistu.
* Aktualizace systému a balíčků (security updates).
* Pokud používáte `.htaccess`, zkontrolujte pravidla, aby neumožňovala nahrávání škodlivých souborů.

---

## 7. Testování a nasazení (kontrola)

* Po nasazení frontend projektu ověřit:

  * responzivitu (mobil / tablet / desktop)
  * rychlost načítání (optimalizace obrázků)
  * funkčnost galerie (nahrávání, prohlížení, kategorizace)
* Ověřit logs: `/var/log/apache2/error.log` a `access.log` a logy cloudflared (`journalctl -u cloudflared`)

---

## 8. Známé chyby / omezení

* cloudflared `noTLSVerify: true` — bezpečnostní riziko v případě MITM v síti; doporučeno robustnější TLS nastavení.
* Omezené systémové zdroje (4GB RAM, 2 vCPU) — při velkém provozu může být potřeba zvýšit kapacity.
* Pokud se galerie nebo web stane náročným (mnoho současných uživatelů a vysoké I/O), zvažte oddělení galerie na vlastní VM a použití CDN pro statické assety.

---

## 9. Možné rozšíření (Future work)

* Přidat administrátorské rozhraní pro nahrávání a správu galerií (pokud io200 nepokrývá požadavky)
* Optimalizace obrázků (generování více rozlišení, lazy loading)
* Integrace jednoduchého CMS pro správu textů na stránce
* Monitoring a alerting (Prometheus, Grafana nebo jednoduché health checks)
* CI/CD pipeline pro automatické nasazení při push na GitHub

---

## 10. Kontakty a další zdroje

* Repo: `https://github.com/Dvorinka/reklik`
* Oficiální dokumentace io200: `https://www.io200.com/documentation#installation-manual`
* Cloudflared docs: viz dokumentace Cloudflare Tunnel

---

Pokud chceš, mohu do dokumentace přidat konkrétní části z repozitáře (stručný popis struktury složek, použitých knihoven, nebo příklady kódu), nebo vytvořit `README.md` přímo v repozitáři připravený k nasazení. Stačí poslat další podklady a doplním to.
