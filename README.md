# Actual course page is at [https://TiraLabra.github.io/2023_p4/](https://TiraLabra.github.io/2023_p4/)

# TL/DR

When setting up a new course the idea is that it's enough to fork/copy this repo and update the relevant info in `_config.yml` and `assets/fuu.js`, and publish **GitHub Pages**.

In `_config.yml` at least the following need to be changed:
* tile/entitle
* description/endescription
* url

In `assets/fuu.js`:
* Add course timing related event to the timing object.
    * The "dl#", "demo" and "end" events are used for filling in timing details on multiple pages
    * The rest of the events will only be used for calendar generation
* Set the `doodleSent` constant to `false` by default and to `true` after having sent a doodle for demo timing.

While developing, use `bundle exec jekyll serve --incremental` to locally test the site.

# Typical course workflow

## 1. Creating course environment

On GitHub it's not possible to have forks of repositories in the same organization. So to set up a new course, a new repository must be created, and the contents of a previous course copied into the new repository.

```bash
<new repo>$ cp -r ../<old repo>/* .
<new repo>$ cp ../<old repo>/.gitignore .
<new repo>$ git add .gitignore
<new repo>$ git add .
<new repo>$ git commit -m "init course page"
<new repo>$ git push
```

**Note:** Do not copy the `.git` directory from the old repository. And do remember to copy the `.gitignore` file.

## 2. Updating course data

### `README.md`:

Update the course url: `[https://TiraLabra.github.io/<old repo>/](https://TiraLabra.github.io/<old repo>/) -> [https://TiraLabra.github.io/<new repo>/](https://TiraLabra.github.io/<new repo>/)`

### [`_config.yml`](_config.yml):

change the following

```yml
title: "Tiralabra - <old name>"
entitle: "Data Structures Lab, <old name>"
email: ''
description: "Helsingin yliopiston Aineopintojen harjoitustyö: Tietorakenteet ja algoritmit - kurssin kurssisivu"
endescription: "Course page for the Data Structures Project course at the University of Helsinki"
baseurl: '/<old repo>'
url: https://tiralabra.github.io/<old repo>/
```

to

```yml
title: "Tiralabra - <new name>"
entitle: "Data Structures Lab, <new name>"
email: ''
description: "Helsingin yliopiston Aineopintojen harjoitustyö: Tietorakenteet ja algoritmit - kurssin kurssisivu"
endescription: "Course page for the Data Structures Project course at the University of Helsinki"
baseurl: '/<new repo>'
url: https://tiralabra.github.io/<new repo>/
```

### [`assets/fuu.js`](assets/fuu.js)

**Change the doodle status**

from: `const doodleSent = true;`
to: `const doodleSent = false;`

**Update the Course assistant data** value in `const tas =` according the example and the instructions in the file.

**Comment out the demo session events:**

```js
    /*"demo": {"date": "2020-06-24", "fi": "Demotilaisuus", "en": "Demo Session", "common": "12-14 Zoom"},
    "demo2": {"date": "2020-06-24", "fi": "Demotilaisuus", "en": "Demo Session", "common": "16-18 Zoom"},*/
```

**Update the course time table.** 

The fields `start`, `demo`, `end` and `dl#` have a special meaning and are used to set up the pages in muptiple places. All other events are just used to fill in the "calendar". Typically just update the times and dates for `start`, `end` and `dl#` events. While adding and removing `paja` events as necessary.

### Push changes to git

```bash
<new repo>$ git commit -am "material update for current iteration"
<new repo>$ git push
```

## 3. Update lecture slides

Lecture slides can be edited in the [kalvot/aloitusluento.md](aloitusluento.md) and [kalvot/lecture.md](lecture.md) files.

Update the date of the lecture and the lecturer in the preamble of the files.

Update the course material links `https://tiralabra.github.io/<old repo>/` to `https://tiralabra.github.io/<new repo/` in **2** places for each of the slide sets.

Make modifications as desired...

The makefile contains recipes for converting the `.md` files to `.pdf` slides. E.g. `make aloitusluento.pdf` should work on at least university cublli linux systems.

Then push changes to git: 

```bash
<new repo>/kalvot$ git commit -am "slide update"
<new repo>/kalvot$ git push
```

## 4. Enable GitHub pages

* Navigate to the repository settings on GitHub
* Scroll down to **GitHub Pages**
* Select `master` in the **source** dropdown
* Click save

The `github.io` should become available after a while.

**<span style="color:red">Note:</span>** After this point it is convenient to modify the course pages using the file editing functionality on github.

## 5. Updating the site during the course

Changes to the course web site can be made by pushing changes to the `index.md` files in the repository. As changes are pushed to git, GitHub Pages should automatically recompile and depoloy the site. Some times the action is not triggered for some reason, and when that happens pushing another change typically resolves the issue. 

**Note** that you do need to change both the Finnish and English source materials unless the changes are only to the `assets/fuu.js` file.

## 5. Trigger the `Doodle sent` state.

When the doodle for determining available demo times has been sent, change the `const doodleSent` value to `true`. This will update the relevant places on the Finnish and English course pages.

## 6. Add demo sessions.

**Uncomment the demo session event(s):**

```js
    "demo": {"date": "2020-06-24", "fi": "Demotilaisuus", "en": "Demo Session", "common": "12-14 Zoom"},
    "demo2": {"date": "2020-06-24", "fi": "Demotilaisuus", "en": "Demo Session", "common": "16-18 Zoom"},
```

and update the times, dates and locations.
