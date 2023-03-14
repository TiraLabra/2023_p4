% Aineopintojen harjoitustyö: Tietorakenteet ja algoritmit (Tiralabra)
% Hannu Kärnä
% 18.1.2023

# Ohjaajat

- Ohjaajat
    - Hannu Kärnä -- etunimi.sukunimi@helsinki.fi
- Yhteyttä sähköpostilla tai telegrammissa kurssikanavalla

- Telegram-kanava https://t.me/tkttiralabra/
- Kurssisivu https://tiralabra.github.io/2023_p3/

# Mistä kyse?

- Kurssilla toteutetaan itse jokin "vaativaa" algoritmia / algoritmeja käyttävä ohjelma ja aiheesta riippuen myös ohjelman käyttämiä tietorakenteita. Esitietoihin kuuluvalla Tira-kurssilla opitut asiat eivät täytä tätä määritelmää. Esim. täysin brute force sudoku-ratkaisija ei sovellu aiheeksi, se on joskus ollut tehtävänä jo Ohjelmoinnin jatkokurssilla.

# Esitietovaatimukset

- Esitietoja:
    - **TiRA**
        - Pakollinen.
    - **OT**
        - Todella hyödyllinen, mutta kurssimateriaalesta löytyy tarvittavat tiedot testaamisen tekemiseen ja vähän esimerkkejä projektirakenteista.
        - Ohjelmistotekniikka-kurssin materiaali on kaikkien luettavissa. Sieltä löytyvät tarvittavat ohjeet Java- ja Python-projekteihin.
- Ota yhteyttä, jos et ole varma riittävätkö esitietosi kurssin sujuvaan suorittamiseen. Kurssi on liian työläs, jos joudut samalla kertaamaan asioita, jotka tarvitaan työn pohjaksi.

# Kurssin sisältö

- Toteutuskieli ohjaajan hyväksyttävä. Ainakin Java ja Python kelpaavat.
    - Ota huomioon, että vaaditaan automaattinen yksikkötestaus ja jonkinlainen testikattavuusraportointi.
- Käytössä **Git**-versionhallinta sekä **GitHub**
- Harjoitustyö on **yksilötyö**.
- Tuloksena **suoritettava ohjelma**, ei pelkkä kirjasto tms.
- Ohjelmalla oltava **käyttöliittymä**.

# Kurssin sisältö

- Esimerkkiaiheita:
    - Reitinhakualgoritmien vertailu
    - Pakkausalgoritmien vertailu
    - Laskennallinen luovuus: musiikkia, tekstiä
    - Koneoppiminen: tekstin tunnistus, kivi-sakset-paperi
    - Ratkaisijat (miinaharava, nonogrammi, 15-peli, pasianssit...)
        - Ks. miinaharavatemplaatti gitistä!
    - Pelit (ristinolla, shakki, korttipelit, lautapelit)
        - Ks. shakkitemplaatti gitistä! 
- **Valitse ennen kaikkea jokin itseäsi kiinnostava aihe!**

# Koodaustyyli

- Kurssilla edellytetään, että kirjoitettu koodi on laadukasta ja helppolukuista. Kannattaa käyttää tyylitarkastusta. Esim java checkstyle.
- Projektin nimen olisi syytä olla aihetta kuvaava.
- Sovelletaan OT kurssilla opittuja projektirakenteita.
    - Ei kaikki koodi projektin juureen samaan tiedostoon.
- Sovelletaan myös muita hyvän koodaustyylin perjaatteita kuten DRY ja Single responsibility.

# Kurssin kulku

- **Deadlinet** kurssisivun aikataulun mukaan.
    - Kunkin viikkopalautuksen perusteella saa 0-2 pistettä etenemisestä aikataulun mukaan.
    - Palautukset tehdään *pushaamalla* projektin kunkin hetkinen tilanne GitHubiin.
        - Ei sähköpostipalautuksia tms.
    - Suuri osa pisteistä -- ja siten arvosanasta -- tulevat deadlinejen ja koodikatselmusten perusteella.
    - Ohjaaja antaa palautetta edistymisestä joka deadlinen jälkeen -- perusteellisempaa palautetta kannattaa pyytää sähköpostilla tai telegrammissa.
    - Lisäaikaa saa **hyvällä syyllä**, **etukäteen pyytämällä**

# Kurssin kulku

- Neljännellä viikolla 8.2.2023 klo 12.15 on luento testauksesta luokassa B221
- Muu ohjaus tapahtuu Zoomissa, ota yhteyttä niin sovitaan aika. Helpoimmin molemmille sopiva aika saadaan sovittua Telegramissa.
- Labtoolissa ei kannata esittää kysymyksiä, jos tarvitset nopeaa apua, niistä ei tule ohjaajalle tietoa sähköpostiin.
- Kurssin Telegram-kanavalta voi saada apua ohjaajalta tai muilta kurssilaisilta.
    
# Kurssin kulku

- Deadline 4 ja 5 yhteydessä **koodikatselmointi**
    - Jokainen opiskelija saa toisen opiskelijan projektin katselmoitavaksi
    - Katselmoitava projekti pyritään valitsemaan niin, että sen tutkimisesta on hyötyä oman työn tekemisessä
    - Opiskelijat kirjoittavat palautetta toisen projektista
    - Tarkoitus oppia lukemaan ja ymmärtämään toisten koodia
    - Tärkeitä myös palautteen saajalle
    - Maksimipisteet yhdestä katselmoinnista on **4**
    - Arvosanan 5 vaatimuksiin kuuluu, että molemmat katselmoinnit on tehty

# Kurssin kulku

- Kurssin lopuksi pakollinen **demotilaisuus**
    - Jokainen opiskelija esittelee muille projektiaan noin 10 minuutin ajan
    - Opiskelijat paikalla koko demotilaisuuden ajan
    - Harjoitustyön ei tarvitse olla demossa vielä aivan valmis
- Kurssilla **ei ole kurssikoetta**

# Motivointi

- Kyseessä on yksi LuK-tutkinnon mukavimmista kursseista - voit toteuttaa mitä itse haluat!
- Jos jäät jumiin, pyydä apua ohjaajalta matalalla kynnyksellä. Tehokas opiskelu on yhdistelmä itse tekemistä ja neuvojen hyödyntämistä.


# Valmiita projektipohjia Javalla

- Syksyllä 2019 ohtuprojekteina tehtiin kaksi uutta Java-projektipohjaa tiralabraa varten
    - Shakki ja
    - Miinaharava
- Jos jompi kumpi aiheista kiinnostaa kannattaa tutustua repositorioihin. Linkit löytyvät kurssisivulta aiheideoista.

# Kiitos!

- **Tervetuloa kurssille!**
- Kaikki tarvittava löytyy kurssisivulta: https://tiralabra.github.io/2023_p3/
    - Kannattaa lukea koko sivusto läpi tarkkaan!

# Kysymyksiä?
