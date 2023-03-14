---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Tiralabra
---

<script src="assets/fuu.js"></script>

## Link to English materials

[Link to English materials](en/)

<noscript><h2 style="color:red;font-weight:bold;">Sivuston sisältö ei näy oikein ilman javascript tukea</h2>
Salli scriptit ainakin lähteestä <code>tiralabra.github.io</code>.
</noscript>

## Ohjaaja

<ul>
<script>
var script = document.scripts[document.scripts.length - 1];
tas.forEach(ta => {
  var elem = document.createElement("li");
  s = ta.name;
  if (ta.fiEmail) {
    s = s + ", " + ta.fiEmail;
  } else if (ta.email) {
    s = s + ", " + ta.email;
  } else {
    s = s + ", (etunumi.sukunimi@helsinki.fi)"
  }
  if (ta.fiSocial) {
    s = s + ", " + ta.fiSocial;
  } else if (ta.social) {
    s = s + ", " + ta.social;
  }
  elem.innerHTML = s;
  script.parentElement.insertBefore(elem, script);
});
</script>
</ul>

## 📅 Aikataulu

Tarkempi aikataulu [täällä](fi/aikataulu/).

<script>
    script = document.scripts[document.scripts.length - 1];
    script.parentElement.insertBefore(makeCalendarFi(), script);
</script>

## 📣 Ajankohtaista

* Kurssin ohjeistusta on muutettu aika paljon. Lue kaikki ohjeet uudestaan, jos olet keskeyttänyt kurssin tai muuten tutustunut aiempien kurssien ohjeisiin.
* <script>
   if (doodleSent) {
    if (timing["demo"]) {
      document.write("Demotilaisuuden ajankohdat on lyöty lukkoon. Ottakaa yhteyttä jos ette pääse paikalle.")
    } else {
      document.write("Doodle linkki demotilaisuuden aikatauluttamiseksi on lähetetty kurssille ilmoittautuneille opiskelijoille. Sähköposti on lähtenyt siihen osoitteseen mikä on labtooliin rekisteröity.")
    }
   } else {
    document.write("Kysely demotilaisuuden aikatauluttamiseksi lähetetään pari viikkoa ennen kurssin päättymistä.")
   }
  </script>
* Lopullinen palautus <script>document.write(fiString(timing["end"].date));</script>.

## Linkkejä materiaaliin

* [Aloitusluennon kalvot](kalvot/aloitusluento.pdf)

* [Tarkka aikataulu](fi/aikataulu)

* [Aiheideoita](fi/aiheet)

* [Tietoja dokumentaatiosta](fi/dokumentaatio)

* [Ohjeita gitin käyttöön](fi/git-ohje)

* [Ohjeita ja esimerkkejä testauksen tekemiseen Javalla](https://github.com/TiraLabra/Testing-and-rmq)

* [Yksinkertaiset ohjeet Maven- tai Gradle-projektin luontiin](fi/maven-gradle)

* [Ohjeet palautuksien ja viikkoraportin tekemiseen](fi/palautukset)

* [Ohjeet vertaisarviointiin](fi/vertaisarvioinnit)

## 🗒️ Labtool

* [https://study.cs.helsinki.fi/labtool/](https://study.cs.helsinki.fi/labtool/)
* Kirjaudu Yliopiston tunnuksilla.

## Kurssiin [telegram-kanava](https://t.me/tkttiralabra)

## Ohjaus

<ul>
<script>
var script = document.scripts[document.scripts.length - 1];
if (timing["paja1"]) {
  var elem = document.createElement("li");
  elem.innerHTML = "Pajaohjausta järjestetään kalenterissa näkyviin aikoihin.";
  script.parentElement.insertBefore(elem, script);
  elem = document.createElement("li");
  elem.innerHTML = "Pajasta voi myös muihin aikoihin pyytää apua aloritmeihin liittyen.";
  script.parentElement.insertBefore(elem, script);
} else {
  var elem = document.createElement("li");
  elem.innerHTML = "Kurssilla ei järjestetä viikottaista pajaa. Henkilökohtaista ohjausta saa erikseen sovittuna ajankohtana Zoomissa, ota matalalla kynnyksellä yhteyttä ohjaajaan, jos tarvitset apua.";
  script.parentElement.insertBefore(elem, script);
}
</script>
<li>Voit ottaa yhteyttä sähköpostilla tai <a href="https://t.me/tkttiralabra">Telegramissa</a>, missä ainakin sopivan keskusteluajankohdan sopiminen on sujuvampaa.</li>
</ul>

## Demotilaisuus

<ul>
  <li id="demo" />
  <li><b>PAKOLLINEN!</b> Ota yhteyttä jos et pääse demotilaisuuteen, se on läpipääsyyn pakollinen!</li> 
<!--   <li>Lähtökohtaisesti kaikki demoavat omalta koneeltaan. Voi olla hyvä saapua demoon hyvissä ajoin ja varmistaa että projektori/ruudun jako toimii. Jos omaa kannettavaa ei ole kannattaa demoamisesta sopia kaverin tai ohjaajan kanssa erikseen.</li> -->
  <li>Korkeintaan 10 min per projekti.</li>
  <li>Ei tarvitse tehdä dioja, mutta halutessaan niitä voi käyttää. Huomaa kuitenkin, että aikaa on lähinnä vain ohjelman toiminnan näyttämiseen. </li>
</ul>

<script>
  var elem = document.getElementById("demo");
  if (timing["demo2"]) {
    elem.innerHTML = "Paikat ja ajat:";
    var ulelem = document.createElement("ul");
    Object.keys(timing).filter(name => name.startsWith("demo")).map(name => fiEvent(timing[name])).forEach(ev => {
      var lielem = document.createElement("li");
      lielem.innerHTML = ev;
      ulelem.appendChild(lielem);
    })
    elem.appendChild(ulelem);
  } else if (timing["demo"]) {
    elem.innerHTML = "Paikka ja aika: " + fiEvent(timing["demo"]) + ".";
  } else {
    elem.innerHTML = "Demotilaisuudet pidetään tenttiviikolla. Aika ja paikka vahvistuvat myöhemmin.";
  }
</script>

## Esimerkkiprojektit

* [Saskelin projekti](https://github.com/saskeli/NonogramSolver_TiRa) **Huom:** että etenkin tämän jälkeen kurssi on muuttunut.
* Ja Jussi sanoi että [oma projektinsa](https://github.com/yussiv/Compress) oli kiireessä tehty mahdollisimman helpolla suoritettu.
* Molemmat kuitenkin projektirakenteiltaan hyviä, jos haluaa esimerkkejä.

## 🏆 Kurssin suorittaminen
Kurssin työmäärä on opintopisteiden (4) perusteella n. 107 tuntia. Varaudu siis käyttämään työhön 15-20 tuntia viikossa jokaisella viikolla.

Kurssilla opiskelija toteuttaa ohjelman, joka ratkaisee jonkin ohjelmointiongelman. Ongelmanratkaisuun käytetään sopivia algoritmeja ja tietorakenteita. Aihe on vapaa, kunhan ratkaisussa on tarpeeksi algoritmista vaativuutta. Osa aihe-ehdotuksista on määritelty aika täsmällisesti niin, että ne ovat riittävän laajoja, mutta eivät toisaalta tarpeettoman työläitä. Työhön kuluva aika riippuu kuitenkin hyvin paljon aiemmasta osaamisesta. Jos valitset täysin oman aiheen, tai aihe-ehdotus ei ole täsmällinen, sovi mieluiten jo ensimmäisellä viikolla ennen määrittelydokumentin palautusta ohjaajan kanssa siitä, miten aihe kannattaa rajata, ja mitä sinun tulee toteuttaa itse, jotta saavutetaan sopiva laajuus. Suoritus ei edellytä oman algoritmin kehittämistä. Tämäkin on mahdollista, mikäli opiskelija haluaa haastavamman aiheen. Keskeistä työssä on, että ohjelma on tehokas ja toimii oikein. Mahdollisia aiheita voi katsoa [täältä](fi/aiheet).

Kurssi pidetään osittain verkkokurssina, kaikki viikoittaiset palautukset tapahtuvat verkon kautta. Toistaiseksi myös aloitusluento ja loppudemot pidetään etänä. Lisätietoa palautuksista [täällä](fi/palautukset).

Ohjelma toteutetaan **ohjaajan hyväksymällä** ohjelmointikielellä. Java soveltuu mihin tahansa aiheeseen. Python on joissakin asioissa hyvin hidas, mutta sillä voi tehdä lähes mitä vain, kunhan määritellään toteutustapa sopivasti. Joihinkin tarkoituksiin juuri Pythonille löytyy poikkeuksellisen hyvin ulkoisia kirjastoja. Automaattinen testaus ja testikattavuuden laskenta on pakollista tällä kurssilla kielestä riippumatta.

Muilla kielillä on kullakin omat vahvuutensa, mutta ohjaaja ei tunne kaikkia kieliä lainkaan. Jos valitset muun kielen kuin Javan tai Pythonin, joudut itsenäisemmin arvioimaan kielen sopivuutta valitsemaasi aiheeseen, etkä ehkä saa ohjaajalta yhtä hyvin neuvoja siihen, kuinka jokin asia kannattaa tehdä käyttämälläsi kielellä, tai kuinka esimerkiksi yksikkötestaus tapahtuu. Uutta kieltä ei kannata projektin yhteydessä alkaa opettelemaan, aikaa kuluu muutenkin paljon. Mutta jos tunnet jonkin kielen käytön hyvin, voi olla perusteltua valita projektiin juuri se. Koodikatselmointien kannalta vähemmän osattu kieli voi olla ongelma. Saatat joutua arvioimaan jollain itsellesi tuntemattomalla kielellä kirjoitettua koodia, koska katselmukset jaetaan niin, että Java-projektin tekevä arvioi toisen Java-projektin jne. Harvinaisemmilla kielillä on usein vain yksi projekti kullakin, ja niiden tekijät arvioivat toisiaan. Lisäksi saamasi palaute voi olla vähemmän hyödyllistä, jos sen laatija ei osaa käyttämääsi kieltä.

Kurssin ensisijainen tavoite on oppia toteuttamaan itse tietorakenteita ja algoritmeja, joita ei ole jo opittu kurssilla "Tietorakenteet ja algoritmit" tai sitä edeltävillä ohjelmointikursseilla. Kaikilla ohjelmointikielillä ei tietorakenteita voi tehdä itse niin tehokkaiksi, että esim. kahden algoritmin vertailun tulos vastaisi algoritmien tehokkuutta, eikä riipu hitaasta omasta tietorakenteesta. Tällöin käytetään kielen valmiita tietorakenteita, ja riittävä laajuus pitää saada pelkillä algoritmeilla. Tietorakenteita ei tarvitse toteuttaa itse muulloinkaan, jos algoritmit ovat riittävän vaativia. Alkeistyyppien matemaattisia funktioita ja merkkijonojen funktioita saa käyttää lopullisessa ohjelmassa, kokonaiseen tietorakenteeseen kohdistuvia valmiita operaatioita ei lähtökohtaisesti voi käyttää. Jos kielen valmiita tietorakenteita ja algoritmeja toteutetaan itse, on hyväksi koettu tapa laittaa ensin kuntoon algoritmin ydin käyttäen kielen standardikirjastojen valmista kalustoa. Kun ohjelma toimii oikein, korvataan valmiit välineet omilla toteutuksilla.

Ohjelman toiminnan oikeellisuuden testaaminen on olennaisen tärkeää, kun käytetään vaativia algoritmeja. Täytyy tutkia tuottaako algoritmi oikean tuloksen, ja toimiiko algoritmi myös niin tehokkaasti kuin sen tulisi. Oikeellisuustestaus tehdään mahdollisimman suurelta osin automaattisin yksikkötestein, joita laaditaan projektin alusta asti sitä mukaa, kun testattavaa koodia syntyy. Yleisohje testaamiseen löytyy testausdokumentin kohdalta [dokumentaatio-ohjeesta](fi/dokumentaatio), ja konkreettista mallia saa [testausohjeesta](https://github.com/TiraLabra/Testing-and-rmq), jossa on paljon yleispäteviä neuvoja, vaikka esimerkit on kirjoitettu Javalla.

Käyttöliittymä ei ole keskeisin asia kurssilla, mutta toimiva käyttöliittymä on tärkeä alusta asti. Joissakin tapauksessa jopa käynnistysparametrit ovat riittävä tapa kommunikoida ohjelman kanssa. Yleensä kuitenkin tarvitaan ainakin valikko-ohjaus komentoriviltä. Usein myös selkeä visualisointi on välttämätön jo ohjelman kehitysvaiheessa, jotta näkee toimiiko ohjelma oikein. Graafisenkin käyttöliittymän koodaamiseen kuluva aika voi säästyä kehitys- / testausvaiheessa, jos siitä on ennestään kokemusta, tai jos joutuu paljon kokeilemaan ohjelmaa erilaisilla parametrien arvoilla yms., vaikkapa valitsemaan pisteitä kartalta. Käyttöliittymässä saa käyttää mitä tahansa valmiita välineitä. Valikko + ASCII-grafiikka on usein riittävä käyttöliittymä, kunhan se on hyvin tehty. Esim. reitinhakuohjelmissa ASCII-grafiikka kyllä rajoittaa sekä käytetyn kartan kokoa, että sitä mitä asioita voidaan samassa kuvassa esittää.

## 📈 Arvosteluperusteet
* Ohjelma: 30 p
    * Toimivuus ja ominaisuudet 10 p
    * Testaus 10 p
    * Dokumentoiva koodi (JavaDoc sekä itsedokumentoiva) 5 p
    * Ohjelmakoodin selkeys 5 p

* Dokumentaatio 10 p
    * Aiheen määrittely 2p
    * Ongelman toteutus 3p
    * Testaus 3p (myös suorituskykytestaus!)
    * Käyttöohje 2p

* Arvostelu kurssin aikana 20p
    * Vertaisarvioinnit 2 * 4p = 8p
    * Viikkopalautukset 6 x 2p = 12 p

(Yhteensä 60 p)

Kukin työ arvioidaan omana kokonaisuutenaan, alla viitteelliset pisterajat. Arvosanaan 5 edellytetään riittävän pistemäärän lisäksi, että projektin laajuus on riittävä, testaus on vakuuttava, dokumentaatio on moitteeton ja molemmat vertaisarviot on tehty ohjeiden mukaisesti.

* 5: 50 p
* 4: 45 p
* 3: 40 p
* 2: 35 p
* 1: 30 p
