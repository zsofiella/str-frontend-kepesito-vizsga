# Training360 "cinema" képesítő vizsga

- __Feladat beadása űrlapon:__ `https://forms.office.com/r/A4CHveP7yY`

- Két feladatcsoportban összesen 6 feladat van. 
- Az angulár keretrendszer, a szükséges tesztkörnyezet valamint Bootsrap konfigurálva van.
- Maximális pontszám: 100 pont, 51 pont kell az elégséges eredményhez. 

# Javascript algoritmikus és DOM feladatok:
- Lépj be a JS-task mappába
- Ha még nem tetted meg, telepítsd a node package manager-rel a szükséges függőségeket!

JEST Tesztkörnyezet futtatása: 
- npm run test

# 1. FELADAT 
- Algoritmusok (15 pont összesen)
- Ha még nem tetted meg telepítsd a teszteléshez szükséges függőségeket! 
(JS-task mappa)
- A __test__ mappákban találod a teszteket. Értelmezd őket! 

- Feladatod, hogy sikeresen lefussanak a tesztek!
- Feladat forrás file:  task01-algorithm/main.js és index.html

- Az index.html csak a vizuális ellenőrzés lehetőségét adja, 
teszt szempontjából lényegtelen tartalma

Adott egy objektumlista ("movieList"), amelyben 7 film adatai találhatók. Le szeretnénk szűrni ezeket a filmeket két szempont szerint:
 - a megjelenés éve (adott évben megjelent)
 - időtartam szerint (maximális időtartam percben, kevesebb is lehet)

Adott egy  "movieFilter()" metódus. Benne kell a logikát megírnod:
- A metódus három paramétert kap: az eredeti listát, a megjelenés évét, maximális időtartamot. 
- A metódus a szűrést követően adja vissza a leszűrt listában csak a film címeket!
- A tökéletes megoldáshoz törekedj a "Clean Code" és a funkcionális programozás elveire!

# 2. FELADAT
DOM manipuláció (20 pont összesen)

- forrás file: => task02-dom/dom.js, index.html

Az index.html megnyitása, használata csak a vizuális ellenőrzés lehetőségét adja, 
teszt szempontjából lényegtelen tartalma

Adott az index.html-ben egy 'nav' elem. Megjelölve egy id=link-list' attributummal.
Adott egy "changeOuterLinks" függvény a dom.js fille-ban. 

1. Feladat: a megadott függvény logikájának megírása.
 A 'nav' elemen belüli linkek belső innerHtml tartalmát vizsgálja meg:

- Ha a link belső szövege tartalmazza az 'outer-link' szövegrészt,  akkor a linkre történő kattintásnál új ablakban kell 
  megjelennie a tartalomnak (target attributum használata)
- Ezek a linkek innerHTML tartalma legyen kiemelve ('strong' elem segítségével)
- Többi link tulajdonságai ne változzanak meg.

2. Feladat: Manipuláld a 'nav' elemének stílus jegyeit a changeOuterLinks függvényben:
- Legyen megjelenése: 'flex'
- Benne lévő linkek oszlopba rendezödjenek
- 'nav' szélessége 30% legyen
- margin property segitségével középen (alul-felül 0 az érték, oldalt:  'auto')
- Legyen egy 'solid' kék ('blue') színű kerete. Vastagsága 1px;
- Húzd be a belső tartalmat minden oldaról a padding segítségével. Értéke legyen 16px

Egy segéd kép: 

https://docs.google.com/document/d/1OOq3FhhV5Grq23YG8BHM1_o3LI2QbxE4bh1r4mggVc0/edit
"

# Angular "Cinema" projekt szimuláció vizsga
Telepítsd a node package manager-rel a szükséges függőségeket! (angular-cinema-project/cinema mappa)

- 3 komponens szelektorát már elhelyeztük az app komponensben. Neked az egyes komponensek file-jaiban kell majd dolgoznod.
- Összes JASMINE test futtatása: npm run test 
- Fejlesztés alatt érdemes külön az egyes komponensre futattni a teszteket (lásd később)


# 3. FELADAT
- Űrlap és validátorok használata (20 pont összesen)

(forrás: Movie komponens).

Ehhez a komponenshez tartozó teszt futtatása: ng test --include='**/movie/*.spec.ts'

Feladathoz egy segéd kép:

https://docs.google.com/document/d/1Rij8PUAd2KESb5vS6avjs3LDKo-3QX8qkWvZCn7aZW0/edit

1. Készíts Bootsrap segítségével egy űrlapot, amivel filmeket  lehet regisztrálni.
2. Készíts egy "md" méretü container-t (bootsrap osztály) a html "section" eleméből.
Adj háttérszínt a konténernek: rgb(53, 53, 50). Kerekítsd le kicsit az éleit: 
border-radius: 12px
3. Helyezz el benne egy boostrap formot a következő beviteli mezőkkel:

-  LABEL és INPUT mező (bootsrap osztály használat LABEL-re és INPUT-ra) 
input mező típusa: "text" , id="title". A label for attribútuma mutasson az input mező id-ra. 
Label mező belső szöveges tartalma: "Movie Title:"

- LABEL és INPUT mező (bootsrap osztály használat LABEL-re és INPUT-ra) 
input mező típusa: "text", id="year". A label for attribútuma mutasson az id-ra.
Label mező belső szöveges tartalma: "Release year:"

- LABEL és SELECT mező (bootsrap osztály használat LABEL-re és SELECT-re). 
select mező id="category". A label for attribútuma mutasson az id-ra.
Label mező belső szöveges tartalma: "Category:"  
(alapértelmezetten megjelenő szöveg: 'Choose Category')
Választható opciók és értékek a select mező esetében: 
"Drama", "Action", "Fantasy" (érték megegyzik a megjelenéssel)

- Valamennyi LABEL mező szövege kapjon bootstrap 'warning' színkódot. 
Az 2. és 3. input mező egymás mellett jelenjen meg.

4. Helyezz el egy gombot a form végén. Bootsrap osztályt használj, 
szín típus a BUTTON elemen: 'warning'. Felirata: 'Save'
Ha a form 'invalid' (bármelyik mezője nem kap értéket), akkor a gomb 'disabled', 
vagyis nem kattintható.

5. Helyezz egy egy 'small' elemet a gomb alá a következő  szöveges tartalommal: 
'Fill all field to save!'
Használj Bootsrap klassz-t a szöveg színezésére ("danger" szinkód)
Ha érvénytelen a form, meg kell jelennie az figyelmeztető üzenetnek. 
Ha érvényes a kitöltés, akkor kattintható a gomb és eltűnik az üzenet.

6. Készíts a egy Template-Driven formot a következő validátorokkal:
- title: input mező min 5 max 25 karakter, és csak betűk, ékezetes betűk vagy szóköz lehet.
- year: input mező csak szám karaktereket fogadhat el, 1900 és 2021 közötti számokat.
- category: select mező kijelöltnek kell lennie (választania kell a felhasználónak)

7. Adott egy "saveMovie" metódus. Visszatérési értékei legyenek a form értékei 
(kulcs-érték párok, például: {title: 'MyTitle', year: 2000, category: 'Action'}).
Ha minden beviteli mező helyesen van kitöltve, és rákattint a felhasználó a 
'Save' gombra, akkor le kell futnia a metódusnak. 
Elég most csak a konzolra kiíratni az értékeket.


# 4. FELADAT
- HTTP hívás, renderelés, SCSS használata (15 pont összesen)

(forrás: Movie-list komponens).

Ehhez a komponenshez tartozó teszt futtatása: 
ng test --include='**/movie-list/*.spec.ts'
Megjegyzés: a tesztekhez nem kell szervert használni, csak a müködés vizuális ellenőrzéséhez.

__Szerver:__ minden vizsgázó kap egy automata szervert, aminek az elérhetősége:  
"https://testServer/githubName", például: "https://tr360-frontend-exam-april.azurewebsites.net/kisspista/movies". A "kisspista" helyére mindenki írja be a 
saját Github felhasználói nevét.

1. Készíts egy sima táblázatot az alábbi elemekkel:
- Adott egy 'thead' elem.  Hozz létre benne egy sorban 4 oszlopot ('th') elem: Szöveges tartalmak: 'Title', 'Year', 'Category' + egy üres oszlop elem
- Adott egy 'tbody' elem is. Benne kell majd megjeleníteni direktíva segítségével a  ts. file-ban található "movieList" nevű lista elemeket soronként. A ciklusban megjelenő 'tr' elemeket lásd el "class="table-row" jelöléssel.
2. Adott egy httpService osztály, és egy "getMovieList" metódus a service mappában. HttpClient és a metódus segítségével készíts egy "GET" lekérdezést a "https://testserver/githubname/movies" címre.
3. Kösd össze a Movie-list komponessel a service osztályt. Ehhez adott még a html tartalomban egy 'button' elem (id="get-button"), és egy üres metódus a ts file-ban ("getMovieList"). 
Ha a gombra kattintunk ki kell renderelődnie az oldalnak, és megjeleníteni a serveren található objektumoknak megfelelő tartalmait ('td' elemeken belül):

Egy segédkép a megoldáshoz:

https://docs.google.com/document/d/1bs1rU2zyZW2wlQQUlu_epvL2Ks684GmYiuygRtFR3Ro/edit


4. A negyedik oszlopban helyez el a 'td' elemen belül egy gombot. Felirata: 'Delete'. Jelöld meg a id="delete-button" attributummal. Kösd össze ezt a gombot a ts. file-ban lévő üres "deleteMovie" metódussal.
Ha gombra kattintanak, akkor a service osztályon keresztül történő 'DELETE' http hívással ki kell törölni az adott elemet a serveren található listából.
Amikor a DELETE hívás lefutott('complete'), akkor hívódjon meg ismét egy GET kérés és frissüljön meg a lista (html-ben történő megjelenésben is).

5. Formázd meg kicsit a táblázatodat, használj fel adott szineket, és mixin-eket és ágyazd egymásba a szelektorokat a "nesting" segitségével!
Törekedj arra, hogy a scss tartalom a 'table-section' elemből eredjen, és minden más szelektor beágyazott legyen (nesting használata)!

 Adott 3 mixin különböző stílus jegyekkel a _mixin.scss file-ban:
- 'cinema-background-style'  ('th' elem és get Movies gomb formázása)
- 'set-text' (a táblázat 'th', 'td' és a get Movies gomb formázásához
- 'delete-style' (A 'delete' button formázásához)

- Használd fel a 'get Movies' feliratú gombhoz, a fejléc és adatok formázásához a  'set-text'  mixin-t.

 Táblázat jelenjen meg középen, a 'table-holder' jelöléssel ellátott 'section' elem beállításai: 
- Használj flex-box-ot. A flex-direction oszlopos rendezésében helyezd a beltartartalmakat középre (table, és getMovies button)
- a 'delete-button' elem formázásához  használd a 'delete-style' mixin-t.
- a 'tbody' minden második sorának háttérszíne legyen (background property): rgb(170, 170, 170).
- Minden tovább egyéni formázás megengedett.

Segítségül egy "van egy másolat" az adatbázisról a db-recap.json file-ban. (cinema mappa alatt)


# 5. FELADAT
- Szülő-Gyerek komponens interakció, adatkötések. (15 pont összesen)

(forrás: Movie-details- és App-komponens)

- Tesztek futtatása (adatkötések): ng test --include='**/movie-details/*.spec.ts' 
- App Komponens (interakció teszt):  ng test --include='**/app/*.spec.ts'

1. Adott a movie-details tamplate-jében egy class="detail-section" jelöléssel elátott 'section elem
2. Helyezz el benne egy 'div' elemet (class="card"), 
3. A 'div'-en belül helyezz el 3 elemet: egy 'img', egy 'h3', egy 'p' elem.
4. Kösd össze az elemek megfelelő tartalmait a ts. file-ben lévő "chosenMovieCategory" property-vel. Adatkötéseket használj.
5. Segítségül egy kép:

https://docs.google.com/document/d/1tgm-ykFfdsmLTc4zC-lFSUn7zbcgiZDZGROelhZ3mKA/edit

6. A szülő (App) komponensben van:
- 3 'button' elem az app.component.html file-ban ('Fantasy', 'Drama', 'Action').
- az app.component.ts-ben egy üres "selectCategory" metódus,
- és egy "categoryCardList" lista

7. Kösd össze a szülő-gyerek komponenst. Ha valamelyik gombra kattintanak, ki kell választani a szülőnek a megfelelő objektumot a "categoryCardList"-ből, 
és át kell adni a gyerek komponensnek az objektumot. Ehhez van segítségül még egy "chosenByCategory" változó is. 
A kártya adatainak, és képének meg kell változnia a kiválasztott elemnek megfelelően. Használj Input() dekorátort a megfelelő helyen.

8. Formázd meg a kártyát kicsit:
- Kártya ("card") beállítása:
- 1. szélessége: 650px. 
- 2. Helyezd középre. Alul-felül 3%, oldalt automatikus margin
- 3. Padding mértéket minden oldalról 1rem
- 4. háttérszín: rgb(73, 73, 65);
- Img: 90% széles, középen jelenjen meg a kártyán (ugyan az a  margin beállítás mint "card" elemen)
- h3, p szövege középen legyen  (text-align), szöveg szín: rgb(214, 176, 106);


# 6. FELADAT
- Github Deploy (15 pont összesen).

1. Állítsd be a Github fiókodban a saját Github oldalad. (https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site)
2. Klónozd le az oldalad repo -ját a gépedre.
3. Builded le az alkalmazást.
3. A dist/<projekt név> tartalmát töltsd fel a github pages -re.
5. Az elkészült komponenseknek meg kell jelenniük a külső url hivatkozáson.


