const timing = {
    "start": {"date": "2023-01-18", "fi": "Aloitusluento", "en": "Starting lecture", "common": "14.15-16"},
   /* "paja1": {"date": "2020-09-07", "en": "Workshop", "fi": "Paja", "common": "12-14 & 16-18 Zoom"},
    "paja2": {"date": "2020-09-08", "en": "Workshop", "fi": "Paja", "common": "12-16 Zoom"},
    "paja3": {"date": "2020-09-14", "en": "Workshop", "fi": "Paja", "common": "12-14 & 16-18 Zoom"},
    "paja4": {"date": "2020-09-15", "en": "Workshop", "fi": "Paja", "common": "12-16 Zoom"},
    "paja5": {"date": "2020-09-21", "en": "Workshop", "fi": "Paja", "common": "12-14 & 16-18 Zoom"},
    "paja7": {"date": "2020-09-28", "en": "Workshop", "fi": "Paja", "common": "12-14 & 16-18 Zoom"},
    "paja8": {"date": "2020-09-29", "en": "Workshop", "fi": "Paja", "common": "12-16 Zoom"},
    "paja9": {"date": "2020-10-05", "en": "Workshop", "fi": "Paja", "common": "12-14 & 16-18 Zoom"},
    "paja10": {"date": "2020-10-06", "en": "Workshop", "fi": "Paja", "common": "12-16 Zoom"},
    "paja11": {"date": "2020-10-12", "en": "Workshop", "fi": "Paja", "common": "12-14 & 16-18 Zoom"},
    "paja12": {"date": "2020-10-13", "en": "Workshop", "fi": "Paja", "common": "12-16 Zoom"},*/
    "dl1": {"date": "2023-01-22T23:59:59+03:00", "en": "DL 1", "fi": "DL 1"}, 
    "dl2": {"date": "2023-01-29T23:59:59+03:00", "en": "DL 2", "fi": "DL 2"},
    "dl3": {"date": "2023-02-05T23:59:59+03:00", "en": "DL 3", "fi": "DL 3"},
    "dl4": {"date": "2023-02-12T23:59:59+03:00", "en": "DL 4", "fi": "DL 4"},
    /*"dl0": {"date": "2022-06-18T23:59:59+03:00", "en": "Holiday", "fi": "Loma"},*/
    "dl5": {"date": "2023-02-19T23:59:59+03:00", "en": "DL 5", "fi": "DL 5"},
    "dl6": {"date": "2023-02-26T23:59:59+03:00", "en": "DL 6", "fi": "DL 6"},
    "dl7": {"date": "2023-02-27T23:59:59+03:00", "en": "Finalizing week", "fi": "Viimeistelyviikko"},
    "dl8": {"date": "2023-03-06T23:59:59+03:00", "en": "Demo week", "fi": "Demoviikko"},
    /*"demo": {"date": "2020-10-26", "fi": "Demotilaisuus", "en": "Demo Session", "common": "12-14 Zoom"},
    "demo2": {"date": "2020-10-26", "fi": "Demotilaisuus", "en": "Demo Session", "common": "16-18 Zoom"},
    "demo3": {"date": "2020-10-28", "fi": "Demotilaisuus", "en": "Demo Session", "common": "14-16 Zoom"},
    "demo4": {"date": "2020-10-29", "fi": "Demotilaisuus", "en": "Demo Session", "common": "12-14 Zoom"},*/
    "end": {"date": "2023-03-12T23:59:59+03:00", "en": "Final submission", "fi": "Loppupalautus"}
};

const doodleSent = false;

/*
Available fields for TAs:
    name     - required.
    email    - will be used if present.
    fiEmail  - will take precedende in Finnish materials if present.
    enEmail  - will take precedende in English materials if present.
    if no email is present, first-name.last-name@helsinki.fi will be used.
    social   - will be used if present.
    fiSocial - will take precedende in Finnish materials if present.
    enSocial - will take precedende in English materials if present.
*/
const tas = [
    
    {"name": "Hannu Kärnä (fi)", "social": "TG: Hannu Kärnä"},
    //{"name": "Saska Dönges (en)", "social": "TG: @saskeli"},
];

const enDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const enMonths = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];

function getHM(d) {
    return d.getHours() + ":" + d.getMinutes();
}

function enDate(d) {
    return enMonths[d.getMonth()] + " " + d.getDate() + ".";
}

function enString(s) {
    var date = new Date(s);
    return enDays[date.getDay()] + " " + enDate(date) + " at " + getHM(date);
}

function fiEvent(event) {
    var date = new Date(event.date);
    return fiDays[date.getDay()] + " " + fiDate(date) + ", " + event.common;
}

function enEvent(event) {
    var date = new Date(event.date);
    return enDays[date.getDay()] + " " + enDate(date) + ", " + event.common;
}

const fiDays = ["sunnuntaina", "maanantaina", "tiistaina", "keskiviikkona", "torstaina", "perjantaina", "lauantaina"];

function fiDate(d) {
    return d.getDate() + "." + (d.getMonth() + 1) + ".";
}

function fiString(s) {
    var date = new Date(s);
    return fiDays[date.getDay()] + " " + fiDate(date) + " klo " + getHM(date);
}

function convWeek(s) {
    var dat = new Date(s);
    return {"week": dat.getWeek(), "date": getMonday(dat), "object": s};
}

function getRow(o, f) {
    var td = document.createElement("td");
    return "<b>" + o.week + "</b><br/>" + f(getMonday(o.date)) + " -";
}

function getCells(elems, heads, f) {
    var rows = [heads.map(s => {
        var elem = document.createElement("th");
        elem.innerHTML = s;
        return elem;
    })];
    var rw = 100;
    for (var i = 0; i < elems.length; i++) {
        while (elems[i].week > rw + 1) {
            cells = [...Array(8)].map(_ => document.createElement("td"));
            var ph = {"week": rw + 1, "date": new Date().setDate(elems[1].date.getDate() - (7 * (elems[1].week - rw - 1)))}
            cells[0].innerHTML = getRow(ph, f);
  //          rw = elems[i].week;
            rows.push(cells);
            rw = rw + 1
        }
        if (elems[i].week !== rw) {
            cells = [...Array(8)].map(_ => document.createElement("td"));
            cells[0].innerHTML = getRow(elems[i], f);
            rw = elems[i].week;
            rows.push(cells);
        }
    }
    return rows;
}

function fillCells(rows, minWk, key) {
    Object.values(timing).forEach(event => {
        var date = new Date(event.date);
        var rowOffset = date.getWeek() - minWk + 1;
        var colOffset = date.getDay() === 0 ? 7 : date.getDay();
        var common = event["common"] ? event["common"] : getHM(date);
        if (rows[rowOffset][colOffset].innerHTML) {
            rows[rowOffset][colOffset].innerHTML = rows[rowOffset][colOffset].innerHTML + "<br/><b>" + event[key] + "</b><br/>" + common;
        } else {
            rows[rowOffset][colOffset].innerHTML = "<b>" + event[key] + "</b><br/>" + common;
        }
    });
    return rows;
}

function makeTable(rows) {
    var tab = document.createElement("table");
    rows.forEach(cells => {
        var row = document.createElement("tr");
        cells.forEach(cell => {
            row.appendChild(cell);
        });
        tab.appendChild(row);
    });
    return tab
}

function makeCalendarEn() {
    var wk = Object.values(timing).map(v => convWeek(v.date));
    wk.sort((a, b) => a.date < b.date ? -1 : 1);
    rows = getCells(wk, ["Week", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], enDate);

    var minWk = wk[0].week;
    rows = fillCells(rows, minWk, "en");

    return makeTable(rows);
}

function makeCalendarFi() {
    var wk = Object.values(timing).map(v => convWeek(v.date));
    wk.sort((a, b) => a.date < b.date ? -1 : 1);
    rows = getCells(wk, ["Viikko", "Ma", "Ti", "Ke", "To", "Pe", "La", "Su"], fiDate);

    var minWk = wk[0].week;
    rows = fillCells(rows, minWk, "fi");

    return makeTable(rows);
}

// https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

// This script is released to the public domain and may be used, modified and
// distributed without restrictions. Attribution not necessary but appreciated.
// Source: https://weeknumber.net/how-to/javascript

// Returns the ISO week of the date.
Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                        - 3 + (week1.getDay() + 6) % 7) / 7);
}
