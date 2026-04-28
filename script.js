/* ============================================================
   Magyar Irodalom – Érettségi Segédlet · script.js
   ============================================================ */

/* ============================================================
   1. MAIN SECTION NAVIGATION
   ============================================================ */
function showMain(id, btn) {
  document.querySelectorAll('.main-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.main-tab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

/* ============================================================
   2. MŰFAJOK – sub-tab navigation
   ============================================================ */
function mufShow(id, btn, cls) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.className = 'tab-btn');
  document.getElementById(id).classList.add('active');
  btn.classList.add(cls);
}

/* ============================================================
   3. VERSTANI – sub-tab navigation
   ============================================================ */
function versShow(idx) {
  document.querySelectorAll('.vers-sub-nav button').forEach((b, i) => b.classList.toggle('active', i === idx));
  [0,1,2,3,4].forEach(i => {
    const p = document.getElementById('vp' + i);
    if (p) p.classList.toggle('active', i === idx);
  });
}

/* ============================================================
   4. SZERZŐK – topic tab navigation
   ============================================================ */
function showTemakor(idx) {
  document.querySelectorAll('.temakor-tabs button').forEach((b, i) => b.classList.toggle('active', i === idx));
  document.querySelectorAll('.temakor-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + idx).classList.add('active');
}

/* ============================================================
   5. MŰFAJOK DATA
   ============================================================ */
const epikaData = [
  { title:"Eposz", desc:"Hősi tetteket megéneklő hosszú verses elbeszélés. Természetfeletti elemek, invokáció (múzsa megszólítása), in medias res (dolgok közepébe csapva) kezdés jellemzi. Az ókori epika csúcsa.", example:"Vörösmarty: Zalán futása · Arany: Toldi · Homérosz: Iliász, Odüsszeia", forma:"Verses", jellemzo:"in medias res, invokáció, csodás elemek, hős-központú", extra:["Két fő típusa: népi eposz (Homérosz) és műeposz (Vergilius, Vörösmarty).","Kötelező elemek: enumeráció (sereg-felsorolás), istenek beavatkozása, hosszú hasonlatok.","Stílusa fennkölt, emelkedett."] },
  { title:"Regény", desc:"Hosszú prózai mű összetett cselekménnyel és szereplőkkel. Fajtái: történelmi, társadalmi, lélektani, levélregény (epistolaris), fejlődési regény (Bildungsroman), pikareszk.", example:"Jókai: Az arany ember · Mikszáth: Beszterce ostroma · Móricz: Légy jó mindhalálig", forma:"Próza", jellemzo:"hosszú, összetett cselekmény, sok szereplő, társadalmi-lélektani ábrázolás", extra:["A regény a 18–19. század legfontosabb műfaja.","Elbeszélői módok: egyes szám 1. személyű (belső), egyes szám 3. személyű (mindentudó), szabad függő beszéd.","Alműfajok: detektívregény, sci-fi, fantasy, romantikus regény."] },
  { title:"Kisregény", desc:"A regénynél rövidebb, az elbeszélésnél hosszabb prózai alkotás. Kevesebb szereplő, egyetlen domináns konfliktus, sűrített lélekábrázolás.", example:"Kosztolányi: Édes Anna · Kafka: Az átváltozás · Steinbeck: Egerek és emberek", forma:"Próza", jellemzo:"tömörebb regény, egy fő konfliktus, intenzív lélekábrázolás", extra:["Angolul: novella (nem tévesztendő össze a magyar 'novella' fogalmával!).","Hossza általában 20 000–50 000 szó között."] },
  { title:"Novella", desc:"Rövid prózai elbeszélés, egyetlen szituációra, feszített cselekményre fókuszálva. Csattanós végkifejlet, kevés szereplő, kis tér–idő. A 19. sz. egyik legfontosabb műfaja.", example:"Móricz: Tragédia · Csehov: A ló · Kosztolányi: Caligula · Maupassant novellái", forma:"Próza", jellemzo:"rövid, egyetlen helyzet, csattanó, kevés szereplő", extra:["Különbség elbeszélés vs. novella: a novella tömörebb, csattanóra épül; az elbeszélés tágabb, lazább szerkezetű.","Keretes szerkezet: a novellán belül egy másik történet keretben jelenik meg."] },
  { title:"Elbeszélés", desc:"Rövidebb prózai mű, tágabb terjedelemben, lazább szerkezettel mint a novella. Nincsen feltétlenül csattanó, a hangulat és a leírás is fontos szerepet kap.", example:"Mikszáth elbeszélései · Turgenyev: Egy vadász feljegyzései", forma:"Próza", jellemzo:"lazább szerkezet, hangulat, leírás is fontos", extra:["A 'short story' angolul az elbeszélést és a novellát egyaránt takarja.","Ritkán keretes szerkezetű."] },
  { title:"Ballada", desc:"Verses epikai műfaj drámai feszültséggel és lírával vegyítve. Sűrített, sejtelmes elbeszélés sok kihagyással, ismétléssel és párbeszéddel. Bűn–bűnhődés téma jellemzi.", example:"Arany: V. László, Ágnes asszony, Szondi két apródja · Vörösmarty: Vén Borbála", forma:"Verses", jellemzo:"drámai sűrítés, kihagyás, ismétlés, bűn–bűnhődés, líra+epika+dráma", extra:["Arany János a ballada mestere – a 'balladakirály' jelzőt kapta.","Három műfaj ötvözete: epikai elbeszélés + lírai hangulat + drámai párbeszéd.","Tipikus témái: bűn, szerelem, hazafiság, történelmi tragédia."] },
  { title:"Mese", desc:"Csodás elemekkel teli népi vagy műmese. Jó és rossz küzdelme, boldog vég (happy end), jellegzetes szerkezet (hármas szám), állandó fordulatok.", example:"Magyar népmesék · Andersen meséi · Grimm testvérek · Arany László: Eredeti népmesék", forma:"Próza (ritkán verses)", jellemzo:"csodás elemek, hármas szám, jó győz, formulás kezdés–zárás", extra:["Népmese: szóbeli hagyományból; műmese: egy szerző alkotása.","Típusai: tündérmese, állatmese, tréfás mese, legendamese.","Formulás kezdés: 'Egyszer volt, hol nem volt...'"] },
  { title:"Monda", desc:"Történeti, helyi vagy hiedelemmondák. Valós esemény vagy személy körül csodás elemek rakódnak le. Nem kizárólag boldog vég; tragikus is lehet.", example:"Magyar mondák (hun mondák, Csodaszarvas-monda) · Történelmi mondák (Mátyás-mondák)", forma:"Próza", jellemzo:"valós mag + csodás elem, konkrét hely/idő/személy", extra:["Fajtái: helyi monda, történeti monda, hiedelemmonda.","A mesétől eltér: van konkrét helyszíne, esetleg valós szereplője."] },
  { title:"Fabula (állatmese)", desc:"Rövid, rendszerint verses elbeszélés állatszereplőkkel, amelyek emberi tulajdonságokat testesítenek meg, és erkölcsi tanulsággal (morál) zárul.", example:"Aesopus · La Fontaine · Phaedrus · Krilov fabulái", forma:"Verses (ritkán próza)", jellemzo:"állatszereplők, emberi hibák tükre, morál a végén", extra:["Az állatok allegorikusan képviselnek emberi típusokat (pl. a róka = ravaszság).","A morál explicit kimondása kötelező elem."] },
  { title:"Anekdota", desc:"Rövid, szellemes, valós vagy valósnak tűnő történet egyetlen szituációval, szellemes fordulattal vagy csattanóval. A humor és a jellemrajz az elsődleges.", example:"Mikszáth Kálmán anekdotái · Politikai anekdoták · Bon mot-ok", forma:"Próza", jellemzo:"rövid, szellemes, csattanó, jellemrajz, humor", extra:["Közel áll a vicchez, de valós személyhez/eseményhez kötődik.","Mikszáth stílusának alappillére az anekdotikus elbeszélés."] }
];

const liraData = [
  { title:"Dal", desc:"Rövid, zenei hatású lírai vers, közvetlen érzelmi kifejezéssel. Ritmikus forma, sokszor refrén. Fajtái: népdal (szóbeli hagyomány) és műdal (egy szerző alkotása).", example:"Petőfi: Szeptember végén · Ady: Héja-nász az avaron · József A.: Altató", forma:"Verses", jellemzo:"rövid, zenei, közvetlen érzelem, refrén is lehet", extra:["A legősibb lírai műfaj.","Dalciklus: több dal egységes kompozíciója (pl. Petőfi: Cipruslombok).","Serenade, szerenád: este ablak alatt énekelt dal."] },
  { title:"Óda", desc:"Emelkedett hangú, magasztaló vers. Hősi eszméknek, személyeknek, természeti erőknek szól. Ünnepélyes, fennkölt stílus, hosszabb terjedelem.", example:"Berzsenyi: A magyarokhoz · Kölcsey: Hymnus · Horatius ódái · Keats ódái", forma:"Verses", jellemzo:"magasztaló, fennkölt hang, emelkedett stílus", extra:["Az antik görög lírából ered (Pindarosz, Szapphó).","Pindarikus óda: ünnepélyes; Horatiusi óda: személyesebb, filozofikus.","Az alkaiosi és szapphói versszakok jellegzetes ódai formák."] },
  { title:"Himnusz", desc:"Istent, hazát vagy eszmét dicsőítő, ünnepélyes lírai mű. A legmagasztosabb hangnem, szakrális–vallásos jelleg. Közösségi funkciója van.", example:"Kölcsey: Himnusz (1823) · Vörösmarty: Szózat · Biblia: Zsoltárok", forma:"Verses", jellemzo:"dicsőítés, szakrális hang, közösségi funkció", extra:["Az ódánál még emelkedettebb, szakrálisabb.","Nemzeti himnusz: egy nép közösségi identitásának verse.","A Himnusz és a Szózat különbsége: Kölcsey könyörög, Vörösmarty rendel."] },
  { title:"Elégia", desc:"Bánatos, búsongó hangvételű vers. Elveszett értékeket, múltat, halált, reménytelen szerelmet sirat. Mélabús, elgondolkodó tónus, lassú ritmus.", example:"Vörösmarty: Vén cigány · Petőfi: Egy gondolat bánt engemet · Arany: V. László", forma:"Verses", jellemzo:"bánat, veszteség, múlt siratása, mélabú", extra:["Az antik elégiának kötött formája volt (disztichon: hexameter + pentameter).","Modern elégiában a forma szabad, a hangulat az elsődleges.","Elégikus hangulat ≠ gyászköltemény – lehet szépségérzet is benne."] },
  { title:"Epigramma", desc:"Rövid, tömör, csattanóval záruló vers. Eredete: sírkő-felirat (görög: epi+gramma). Ma sokszor szatirikus, elmés gondolat koncentrált formában.", example:"Kölcsey: Huszt ('Régi dicsőségünk...') · Kazinczy epigrammái · Martialis", forma:"Verses (klasszikusan disztichon)", jellemzo:"tömörség, csattanó, elmés gondolat", extra:["Klasszikusan disztichonosban íródott (hexameter + pentameter).","Kölcsey Husztja az egyik legismertebb magyar epigramma.","A sírfelirat (epitáfium) az epigramma speciális formája."] },
  { title:"Szatíra", desc:"Gúnyos, bíráló hangvételű vers vagy próza. Társadalmi visszásságokat, emberi gyengéket, politikai hibákat tesz nevetségessé, éles kritikával.", example:"Csokonai: Dorottya · Petőfi: A magyar nemes · Juvenalis szatírái · Swift: Gulliver", forma:"Verses vagy próza", jellemzo:"gúny, társadalomkritika, irónia, szarkazmus", extra:["Eszközei: irónia, szarkazmus, paródia, groteszk.","A szatíra nem műnem, hanem hangnem – lehet verses vagy prózai."] },
  { title:"Szonett", desc:"14 soros, szigorú rímképletű versforma. Olasz szonett: 2 quartett (ABBA ABBA) + 2 tercett. Angol (shakespeare-i): 3 quartett (ABAB CDCD EFEF) + couplet (GG).", example:"Babits: Ősz és tavasz között · Tóth Árpád szonettjei · Shakespeare 154 szonettje", forma:"Verses (kötött forma)", jellemzo:"14 sor, kötött rímképlet, fordulat (volta) a 9. sornál", extra:["A volta (fordulat) a 9. sornál: az első 8 sor felteszi a kérdést, az utolsó 6 megválaszolja.","Petrarca: a reneszánsz szonett megalapítója.","Szonett-koszorú: 15 szonett, ahol az utolsó sor mindig a következő első sora."] },
  { title:"Zsoltár", desc:"Vallásos lírai ének, isten-szólítás, panasz vagy hálaadás formájában. A Biblia Zsoltárok könyvéből ered; versfordítások és modern feldolgozások egyaránt léteznek.", example:"Biblia: Zsoltárok könyve · Ady: Zsoltár fiú-arcával · Szenczi Molnár Albert zsoltárfordításai", forma:"Verses", jellemzo:"vallásos, kérés–panasz–hálaadás, bibliai hagyomány", extra:["Zsoltártípusok: dicséret-zsoltár, panasz-zsoltár, hálazsoltár.","Szenczi Molnár Albert 150 zsoltárt fordított magyarra (1607)."] },
  { title:"Rapszódia", desc:"Szenvedélyes, szabad, szabálytalan formájú lírai mű. Az érzelmek hevessége szabdalja szét a formát – hirtelen hangnem- és képváltások jellemzik.", example:"Petőfi: Apostol · Ady rapszódiái · Vörösmarty: Vén cigány (rapszódikus elemek)", forma:"Verses (szabad)", jellemzo:"szenvedély, szabad forma, hirtelen váltások, hangulati disszonancia", extra:["A zenei rapszódiától (pl. Liszt) ihletet kapott.","Nem kötött forma – a tartalom határozza meg a ritmust."] }
];

const dramaData = [
  { title:"Tragédia", desc:"A főhős bukásával, halálával végződő dráma. Nagy, nemes jellem küzd legyőzhetetlen erőkkel – sorssal, hatalommal, belső gyengéivel. Katarzis (megtisztulás) az érzés.", example:"Katona: Bánk bán · Madách: Az ember tragédiája · Szophoklész: Oidipusz · Shakespeare: Hamlet", forma:"Drámai (párbeszéd)", jellemzo:"főhős bukása, tragikus vétség (hamartia), katarzis", extra:["Arisztotelész szerint a tragédia a katarzis (félelem + részvét → megtisztulás) forrása.","Tragikus vétség (hamartia): a hős hibája, amely bukásához vezet.","Három egység: hely, idő, cselekmény egysége (klasszicista szabály)."] },
  { title:"Vígjáték (komédia)", desc:"Humoros, vidám kimenetelű dráma. Emberi gyarlóságokat, társadalmi típusokat tükröz félreértéseken, összezavarásokon át. Mindig boldog vég.", example:"Molière: Fösvény, A képzelt beteg · Goldoni vígjátékai · Csiky Gergely: A nagymama", forma:"Drámai (párbeszéd)", jellemzo:"humor, félreértés, boldog vég, emberi gyarlóságok kigúnyolása", extra:["Típusai: helyzetkomikum (komikus helyzet), jellemkomikum (komikus figura), szókomikum (nyelvi humor).","Komédia szerkezete általában: szituáció–bonyodalom–megoldás (mindig happy end).","Commedia dell'arte: rögtönzésen alapuló olasz népi vígjáték, állandó figurákkal (Arlecchino, Colombina stb.)."] },
  { title:"Tragikomédia", desc:"Tragikus és komikus elemek keverednek, a kimenetel bizonytalan vagy ambivalens. A valóság árnyaltabb képét nyújtja – nem fekete-fehér.", example:"Csehov: Három nővér, Cseresznyéskert · Beckett: Godot-ra várva · Örkény: Tóték", forma:"Drámai (párbeszéd)", jellemzo:"vegyes hangnem, ambivalens vég, tragikus + komikus egyszerre", extra:["Csehov maga vígjátéknak nevezte darabjait, bár mások tragikusnak érezték – ez a tragikomédia lényege.","A 20. századi abszurd dráma (Beckett, Ionesco) szinte mind tragikomédia."] },
  { title:"Polgári dráma / színmű", desc:"A hétköznapi ember életét, erkölcsi dilemmáit, társadalmi konfliktusait ábrázolja realista szemlélettel. Nincs magasztos hős – átlagember áll a középpontban.", example:"Ibsen: A vadkacsa, Nóra · Hauptmann: Takácsok · Csehov drámái", forma:"Drámai (párbeszéd)", jellemzo:"realista, hétköznapi hős, társadalmi kérdések, erkölcsi dilemmák", extra:["A 19. sz. második felétől terjed el.","A jól megcsinált darab (pièce bien faite): gördülékeny, csúcspont felé haladó drámaszerkezet.","Naturalista dráma: szélsőséges realista ábrázolás."] },
  { title:"Bohózat (farce)", desc:"Erősen komikus, cselekvés-alapú dráma. Álruhák, félreértések, felcserélt személyek, fizikai humor. Kevés lélekrajz, sok nevetés – szórakoztatás az elsődleges cél.", example:"Feydeau vígjátékai · Arisztophanész komédiái · Molière: Scapin furfangjai", forma:"Drámai (párbeszéd)", jellemzo:"fizikai humor, félreértés, álruha, gag-szerű helyzetek", extra:["Angolul: farce – szó szerint 'töltött' (mint a tömött, sűrű tréfa).","A mai szitkomok (sitcom) nagyrészt bohózati hagyományból erednek."] },
  { title:"Misztériumjáték", desc:"Középkori egyházi dráma, amely bibliai jeleneteket elevenít meg (pl. Jézus születése, passió). A liturgiából nőtt ki, latinul, majd népi nyelveken.", example:"Passió-játékok · Betlehemes játék · Mária-siralom (első magyar drámai szöveg)", forma:"Drámai (verses-prózai)", jellemzo:"bibliai tartalom, vallásos cél, szimbolikus szereplők", extra:["A Mária-siralom (13. sz.) az első ismert magyar drámai szöveg.","Moralitás: allegorikus középkori dráma, elvont fogalmak (Erény, Bűn) küzdelme – rokon műfaj.","A középkori dráma anyja, a modern dráma őse."] },
  { title:"Abszurd dráma", desc:"20. századi drámai irányzat: az emberi lét értelmetlenségét, a kommunikáció lehetetlenségét ábrázolja nonlineáris cselekménnyel, ismétlésekkel, logikátlan párbeszédekkel.", example:"Beckett: Godot-ra várva · Ionesco: Kopasz énekesnő · Örkény: Tóték", forma:"Drámai (párbeszéd)", jellemzo:"értelmetlenség, ismétlés, kommunikáció-képtelenség, nonlineáris", extra:["Az abszurd elmélete Albert Camus-tól ered (Sziszüphosz mítosza, 1942).","Megváltás nincs: Godot nem jön el – a várás maga az élet.","Örkény groteszk abszurdja: látszólag hétköznapi helyzet, mögötte borzalom."] }
];

const summaryRows = [
  ...epikaData.map(d => ({nem:'epika', mufaj:d.title, forma:d.forma, jellemzo:d.jellemzo.split(',')[0], pelda:d.example.split('·')[0].trim()})),
  ...liraData.map(d  => ({nem:'lira',  mufaj:d.title, forma:d.forma, jellemzo:d.jellemzo.split(',')[0], pelda:d.example.split('·')[0].trim()})),
  ...dramaData.map(d => ({nem:'drama', mufaj:d.title, forma:d.forma, jellemzo:d.jellemzo.split(',')[0], pelda:d.example.split('·')[0].trim()}))
];

const quizData = [
  { q:"Melyik nem jellemzője az elbeszélő nézőpont és a narrátor jelenléte?", opts:["Líra","Epika","Dráma","Elégia"], ans:1 },
  { q:"Arany János V. László, Ágnes asszony c. verse melyik műfajba tartozik?", opts:["Novella","Elbeszélés","Ballada","Szonett"], ans:2 },
  { q:"Melyik lírai műfaj jellemzője a csattanóval záruló rövid, tömör forma?", opts:["Óda","Elégia","Epigramma","Rapszódia"], ans:2 },
  { q:"Katona József Bánk bánja melyik drámai műfajba sorolható?", opts:["Komédia","Tragédia","Tragikomédia","Bohózat"], ans:1 },
  { q:"Mit jelent az 'in medias res' szerkezet az eposzban?", opts:["Könyörgő megszólítás","A dolgok közepébe csapva kezdés","A múzsa megszólítása","Három egység betartása"], ans:1 },
  { q:"Melyik műfaj ötvözi az epikát, a lírát és a drámát?", opts:["Regény","Fabula","Ballada","Szatíra"], ans:2 },
  { q:"A szonett hány sorból áll?", opts:["10","12","14","16"], ans:2 },
  { q:"Melyik drámai műfajban vegyülnek a tragikus és komikus elemek?", opts:["Misztériumjáték","Tragikomédia","Vígjáték","Bohózat"], ans:1 },
  { q:"Kölcsey Ferenc Huszt c. verse melyik lírai műfaj?", opts:["Dal","Elégia","Epigramma","Himnusz"], ans:2 },
  { q:"Melyik epikai műfaj zárulhat kötelezően erkölcsi tanulsággal (morállal)?", opts:["Novella","Anekdota","Fabula","Monda"], ans:2 },
  { q:"Az abszurd dráma melyik szerzőhöz kötődik leginkább?", opts:["Shakespeare","Molière","Beckett","Ibsen"], ans:2 },
  { q:"Mi a különbség népmese és műmese között?", opts:["A népmese mindig verses","A műmesének egy szerzője van, a népmese szóbeli hagyomány","A népmesében nincs csodás elem","A műmesét csak gyerekeknek írják"], ans:1 }
];

/* ── Render card grids ── */
function renderCards(data, containerId, nem) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = data.map((d, i) => `
    <div class="card ${nem}" onclick="openModal(${nem}Data[${i}],'${nem}')">
      <span class="card-tag">${nem}</span>
      <div class="card-title">${d.title}</div>
      <div class="card-desc">${d.desc.substring(0, 120)}…</div>
      <div class="card-example"><span>Pl. </span>${d.example.split('·')[0].trim()}</div>
    </div>
  `).join('');
}

/* ── Render summary table ── */
function renderSummary() {
  const tbody = document.getElementById('summary-tbody');
  if (!tbody) return;
  tbody.innerHTML = summaryRows.map(r => `
    <tr>
      <td><span class="nem-badge ${r.nem}">${r.nem}</span></td>
      <td><strong>${r.mufaj}</strong></td>
      <td>${r.forma}</td>
      <td>${r.jellemzo}</td>
      <td><em>${r.pelda}</em></td>
    </tr>
  `).join('');
}

/* ── Quiz ── */
let quizScore = 0, quizAnswered = 0;

function renderQuiz() {
  const el = document.getElementById('quiz-container');
  if (!el) return;
  el.innerHTML = quizData.map((q, i) => `
    <div class="quiz-card" id="qcard-${i}">
      <div class="quiz-question"><span class="qnum">${i+1}.</span>${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((o, j) => `<button class="quiz-option" onclick="answer(${i},${j},${q.ans})">${o}</button>`).join('')}
      </div>
      <div class="quiz-feedback" id="qfb-${i}"></div>
    </div>
  `).join('');
  updateScore();
}

function answer(qi, chosen, correct) {
  const card = document.getElementById('qcard-' + qi);
  if (card.dataset.done) return;
  card.dataset.done = '1';
  quizAnswered++;
  const opts = card.querySelectorAll('.quiz-option');
  opts[correct].classList.add('correct');
  if (chosen !== correct) {
    opts[chosen].classList.add('wrong');
    const fb = document.getElementById('qfb-' + qi);
    fb.textContent = `✗ Helytelen. A helyes válasz: ${quizData[qi].opts[correct]}`;
    fb.className = 'quiz-feedback show err';
  } else {
    quizScore++;
    const fb = document.getElementById('qfb-' + qi);
    fb.textContent = '✓ Helyes!';
    fb.className = 'quiz-feedback show ok';
  }
  opts.forEach(o => o.style.pointerEvents = 'none');
  updateScore();
}

function updateScore() {
  const el = document.getElementById('score-display');
  if (el) el.textContent = `${quizScore} / ${quizAnswered}`;
}

function resetQuiz() {
  quizScore = 0; quizAnswered = 0;
  renderQuiz();
}

/* ── Modal ── */
function openModal(d, nem) {
  document.getElementById('modal-body').innerHTML = `
    <span class="modal-tag ${nem}">${nem}</span>
    <h2>${d.title}</h2>
    <div class="modal-section"><h3>Definíció</h3><p>${d.desc}</p></div>
    <div class="modal-section"><h3>Forma · Jellemzők</h3><p><strong>Forma:</strong> ${d.forma}<br><strong>Kulcsjellemzők:</strong> ${d.jellemzo}</p></div>
    <div class="modal-section"><h3>Tudnivalók érettségire</h3><ul>${d.extra.map(e => `<li>${e}</li>`).join('')}</ul></div>
    <div class="modal-section"><h3>Példák</h3><div class="highlight-box ${nem}">${d.example}</div></div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modal-overlay') || e.currentTarget.classList.contains('modal-close')) {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ============================================================
   6. SZERZŐK DATA + RENDER
   ============================================================ */
const adatok = [
  // ── 1. KÖTELEZŐ ──
  { temakor:0, nev:"Petőfi Sándor", elet:"1823–1849", korszak:"Romantika / Népiességi mozgalom", bio:"A magyar romantika és népiességi mozgalom kiemelkedő alakja. Rövid élete alatt hatalmas életművet alkotott. A szabadságharc jelképe.", muvek:[{cim:"János vitéz",ev:"1844",t:"epika",mufaj:"Elbeszélő költemény",tema:"Népmese, szerelem, hősi kaland",sz:"Kukorica Jancsi, Iluska, a mostoha, francia király lánya"},{cim:"Nemzeti dal",ev:"1848",t:"lira",mufaj:"Óda/himnusz",tema:"Hazaszeretet, forradalmi felhívás",sz:""},{cim:"Az apostol",ev:"1848",t:"epika",mufaj:"Elbeszélő költemény",tema:"Forradalmi hős tragédiája, társadalmi igazságtalanság",sz:"Szilveszter, Margit (felesége)"},{cim:"Szeptember végén",ev:"1847",t:"lira",mufaj:"Elégia",tema:"Szerelem, elmúlás, halálsejtelem",sz:""},{cim:"A puszta télen",ev:"1848",t:"lira",mufaj:"Tájköltészet",tema:"Az Alföld téli képe, népiességi természetkép",sz:""},{cim:"Egy gondolat bánt engemet…",ev:"1846",t:"lira",mufaj:"Rapszódia",tema:"Hősi halál vágya, szabadságeszme",sz:""},{cim:"Szabadság, szerelem",ev:"1847",t:"lira",mufaj:"Dal",tema:"Legfőbb értékek: szabadság és szerelem",sz:""},{cim:"Reszket a bokor, mert…",ev:"1846",t:"lira",mufaj:"Dal",tema:"Szerelmi boldogság, népdal-hangvétel",sz:"Júlia (Szendrey Júlia)"},{cim:"Föltámadott a tenger…",ev:"1848",t:"lira",mufaj:"Forradalmi vers",tema:"A népfelkelés dicsőítése",sz:""},{cim:"Az alföld",ev:"1844",t:"lira",mufaj:"Tájvers",tema:"Az Alföld szépségének dicsőítése, szülőföld-szeretet",sz:""}] },
  { temakor:0, nev:"Arany János", elet:"1817–1882", korszak:"Romantika / Realizmus", bio:"A 19. sz. legnagyobb epikusaként tartják számon. Balladái és elbeszélő költeményei kiemelkedők. Petőfi legjobb barátja, az MTA főtitkára.", muvek:[{cim:"Toldi",ev:"1846",t:"epika",mufaj:"Elbeszélő költemény",tema:"Nemzeti hős, erő vs. erkölcs, felnőtté válás",sz:"Toldi Miklós, György (bátyja), Bence, az anya, Lajos király"},{cim:"Toldi estéje",ev:"1848",t:"epika",mufaj:"Elbeszélő költemény",tema:"Öregség, elmúlás, hősi értékek pusztulása",sz:"Öreg Toldi, Lajos király, Bence"},{cim:"Szondi két apródja",ev:"1856",t:"lira",mufaj:"Ballada",tema:"Hősiesség, hazaszeretet, hűség a halálban",sz:"Szondi György (emléke), két apród, Ali pasa követe"},{cim:"A walesi bárdok",ev:"1857",t:"lira",mufaj:"Ballada",tema:"Zsarnokság, nemzeti ellenállás, szabadság",sz:"Edward király, az ötszáz walesi bárd"},{cim:"Ágnes asszony",ev:"1853",t:"lira",mufaj:"Ballada",tema:"Bűn, őrület, bűnhődés",sz:"Ágnes asszony"},{cim:"V. László",ev:"1853",t:"lira",mufaj:"Ballada",tema:"Zsarnokság, bűn és bűnhődés",sz:"V. László, Hunyadi László"},{cim:"Tetemre hívás",ev:"1877",t:"lira",mufaj:"Ballada",tema:"Gyilkosság, bűn leleplezése",sz:"Kund Abigél, a meggyilkolt ifjú"},{cim:"Buda halála",ev:"1863",t:"epika",mufaj:"Hun eposz",tema:"Attila és Buda testvérviszálya",sz:"Attila, Buda, Ildikó, Detre"},{cim:"Epilógus",ev:"1877",t:"lira",mufaj:"Elégia",tema:"Életmérleg, elmúlás, be nem teljesült remények",sz:""},{cim:"Őszikék (ciklus)",ev:"1877–82",t:"lira",mufaj:"Elégia/lírai versek",tema:"Öregség, magány, halálközelség, emlékezés",sz:""}] },
  { temakor:0, nev:"Vörösmarty Mihály", elet:"1800–1855", korszak:"Romantika", bio:"A magyar romantika vezéralakja, nyelvteremtő költő. Eposzai, drámai költeményei és lírai versei egyaránt kiemelkedők.", muvek:[{cim:"Szózat",ev:"1836",t:"lira",mufaj:"Óda/himnusz",tema:"Hazaszeretet, a magyarság sorsa",sz:""},{cim:"Csongor és Tünde",ev:"1831",t:"drama",mufaj:"Drámai költemény",tema:"Boldogságkeresés, szerelem, filozofikus keret",sz:"Csongor, Tünde, Ilma, Balga, Mirigy, az Éj"},{cim:"Vén cigány",ev:"1854",t:"lira",mufaj:"Rapszódia",tema:"Remény a pusztulás után, nemzeti sors",sz:""},{cim:"Zalán futása",ev:"1825",t:"epika",mufaj:"Eposz",tema:"Honfoglalás, nemzeti múlt dicsőítése",sz:"Árpád, Zalán, Ete, Hajna"},{cim:"Előszó",ev:"1850–51",t:"lira",mufaj:"Elégia",tema:"Szabadságharc bukása, apokaliptikus látomás",sz:""}] },
  { temakor:0, nev:"Jókai Mór", elet:"1825–1904", korszak:"Romantika / Realizmus", bio:"'A nagy mesemondó.' ~200 regény szerzője. Kalandos, romantikus regényei itthon és külföldön egyaránt óriási sikert arattak.", muvek:[{cim:"Az arany ember",ev:"1872",t:"regeny",mufaj:"Regény",tema:"Boldogság, pénz vs. szabadság, kettős élet",sz:"Timár Mihály, Tímea, Noémi, Athalie, Brazovics"},{cim:"A kőszívű ember fiai",ev:"1869",t:"regeny",mufaj:"Regény",tema:"1848-as szabadságharc, hazaszeretet",sz:"Baradlay Richárd, Jenő, Ödön, Baradlayné, Plankenhorst Alfonsine"},{cim:"Fekete gyémántok",ev:"1870",t:"regeny",mufaj:"Regény",tema:"Ipar, modernizáció, romantikus kaland",sz:"Berend Iván, Evila, Ormosné"},{cim:"Egy magyar nábob",ev:"1853",t:"regeny",mufaj:"Regény",tema:"Magyar nemesség reformkori átalakulása",sz:"Kárpáthy János, Kárpáthy Zoltán, Mayer Fanny"},{cim:"Az új földesúr",ev:"1863",t:"regeny",mufaj:"Regény",tema:"Bach-korszak, passzív ellenállás",sz:"Ankerschmidt, Garanvölgyi Ádám"}] },
  { temakor:0, nev:"Mikszáth Kálmán", elet:"1847–1910", korszak:"Realizmus / Kritikai realizmus", bio:"'A nagy palóc.' Ironikus, humoros novellái és regényei a dzsentri világ és kisemberi sorsok remek képét adják.", muvek:[{cim:"A Noszty fiú esete Tóth Marival",ev:"1908",t:"regeny",mufaj:"Regény",tema:"Dzsentri hanyatlás, pénz és házasság",sz:"Noszty Feri, Tóth Mari, Tóth Mihály, Kopereczky báró"},{cim:"Szent Péter esernyője",ev:"1895",t:"regeny",mufaj:"Regény",tema:"Kisemberi sors, véletlenek láncolata, népi humor",sz:"Glogova Bálint, Wibra György, Veronka"},{cim:"Beszterce ostroma",ev:"1896",t:"regeny",mufaj:"Regény",tema:"Elmaradott nemesi világ, különcség",sz:"Pongrácz István gróf, Apolka"},{cim:"A jó palócok",ev:"1882",t:"epika",mufaj:"Novellakötet",tema:"Palóc falusi élet, humor, szegénység",sz:"Filcsik, Prakovszky és más palóc figurák"},{cim:"Az a fekete folt",ev:"1881",t:"epika",mufaj:"Novella",tema:"Önfeláldozó szerelem, tragikus végzet",sz:"Olej Bilyi, a leány"}] },
  { temakor:0, nev:"Ady Endre", elet:"1877–1919", korszak:"Szecesszió / Szimbolizmus / Modernség", bio:"A Nyugat-mozgalom vezéralakja. Szimbolista versei gyökeresen megváltoztatták a magyar lírát.", muvek:[{cim:"Góg és Magóg fia vagyok én…",ev:"1906",t:"lira",mufaj:"Hitvallás-vers",tema:"Magyar sors, küldetéstudat, bezártság",sz:""},{cim:"A magyar Ugaron",ev:"1905",t:"lira",mufaj:"Szimbolista vers",tema:"Elmaradottság, parlagi Magyarország kritikája",sz:""},{cim:"Héja-nász az avaron",ev:"1905",t:"lira",mufaj:"Szimbolista szerelmi vers",tema:"Szerelem mint pusztítás, ragadozó-szimbolika",sz:""},{cim:"Az ős Kaján",ev:"1907",t:"lira",mufaj:"Rapszódia",tema:"A pusztító démon és a költő harca",sz:"Az ős Kaján (szimbolikus alak)"},{cim:"Kocsi-út az éjszakában",ev:"1909",t:"lira",mufaj:"Elégia",tema:"Magány, szétesés, az élet töredezettségének képe",sz:""},{cim:"Intés az őrzőkhöz",ev:"1918",t:"lira",mufaj:"Vers",tema:"Felelősség, figyelmeztetés háborúban",sz:""}] },
  { temakor:0, nev:"Babits Mihály", elet:"1883–1941", korszak:"Nyugat / Klasszikus modernség", bio:"A Nyugat folyóirat főszerkesztője. Klasszikus műveltségű, intellektuális líra és regények szerzője. Dante-fordítása máig alapmű.", muvek:[{cim:"In Horatium",ev:"1903",t:"lira",mufaj:"Óda (Horatius-átköltés)",tema:"Klasszikus hagyomány, a vers örökkévalósága",sz:""},{cim:"A lírikus epilógja",ev:"1903",t:"lira",mufaj:"Szonett",tema:"Szubjektivizmus, megismerés korlátai, az én-börtön",sz:""},{cim:"Esti kérdés",ev:"1911",t:"lira",mufaj:"Filozofikus vers",tema:"Élet értelme, kozmikus kérdések",sz:""},{cim:"Húsvét előtt",ev:"1916",t:"lira",mufaj:"Vers",tema:"Háborúellenesség, békevágy, humanizmus",sz:""},{cim:"Jónás könyve",ev:"1938",t:"epika",mufaj:"Elbeszélő költemény",tema:"Próféta-sors, a költő felelőssége",sz:"Jónás próféta, Isten, a niniveliek"},{cim:"Jónás imája",ev:"1940",t:"lira",mufaj:"Ima/lírai vers",tema:"Halálfélelem, az utolsó szó kimondásának vágya",sz:""},{cim:"Halálfiai",ev:"1927",t:"regeny",mufaj:"Regény",tema:"Dzsentri hanyatlás, generációs szembenállás",sz:"Imrus (Sátordy Imre), az apa, Pista"}] },
  { temakor:0, nev:"Kosztolányi Dezső", elet:"1885–1936", korszak:"Nyugat / Impresszionizmus", bio:"A Nyugat első generációjának tagja. Lírájában és prózájában az élet szépségét és az elmúlást állítja szembe.", muvek:[{cim:"Édes Anna",ev:"1926",t:"regeny",mufaj:"Regény",tema:"Cselédlány sorsa, kiszolgáltatottság, gyilkosság",sz:"Édes Anna, Vizy Kornél, Vizyné, Jancsi"},{cim:"Pacsirta",ev:"1924",t:"regeny",mufaj:"Regény",tema:"Csúnya lány, szülők elfojtott élete",sz:"Pacsirta, Vajkay Ákos, Vajkayné, Ijas Miklós"},{cim:"Nero, a véres költő",ev:"1922",t:"regeny",mufaj:"Regény",tema:"Hatalom és művészet, zsarnokság",sz:"Nero, Seneca, Agrippina"},{cim:"Esti Kornél",ev:"1933",t:"epika",mufaj:"Novellaciklus",tema:"Kettős személyiség, kalandok, az élet fonákja",sz:"Esti Kornél (alteregó)"},{cim:"Hajnali részegség",ev:"1933",t:"lira",mufaj:"Vers",tema:"A szépség hirtelen megélése, csoda a hétköznapokban",sz:""},{cim:"Halotti beszéd",ev:"1933",t:"lira",mufaj:"Vers",tema:"Az ember egyedisége, elmúlás, gyász",sz:""},{cim:"Boldog, szomorú dal",ev:"1910",t:"lira",mufaj:"Dal",tema:"Az élet szépségének és fájdalmának kettőssége",sz:""}] },
  { temakor:0, nev:"József Attila", elet:"1905–1937", korszak:"Avantgárd / Szociális líra / Pszichoanalitikus modernség", bio:"A 20. sz. magyar lírájának egyik legnagyobb alakja. Szegénységből küzdötte fel magát, személyes tragédiái és kora nyomora verseibe ivódtak.", muvek:[{cim:"Nem én kiáltok",ev:"1925",t:"lira",mufaj:"Expresszionista vers",tema:"Avantgárd kiáltás, a világ megváltoztatásának vágya",sz:""},{cim:"Tiszta szívvel",ev:"1925",t:"lira",mufaj:"Dal/vers",tema:"Kívülállás, dacos szegénység, erkölcsi tisztaság",sz:""},{cim:"Külvárosi éj",ev:"1932",t:"lira",mufaj:"Szociális líra",tema:"Munkásnyomor, ipari táj, sötétség és szolidaritás",sz:""},{cim:"Mama",ev:"1931",t:"lira",mufaj:"Elégia",tema:"Anya-elvesztés, gyermekkor, bűntudat",sz:"Az anya (Pőcze Borbála)"},{cim:"Óda",ev:"1933",t:"lira",mufaj:"Szerelmi óda",tema:"Szenvedélyes szerelem, a nő dicsőítése",sz:"A megszólított nő"},{cim:"A Dunánál",ev:"1936",t:"lira",mufaj:"Filozofikus óda",tema:"Történelem, idő, magyarság, egyéni és kollektív sors",sz:""},{cim:"Reménytelenül",ev:"1933",t:"lira",mufaj:"Elégia",tema:"Céltalanság, magány, kiúttalanság",sz:""},{cim:"Hazám (szonettciklus)",ev:"1937",t:"lira",mufaj:"Szonettciklus",tema:"Magyarság sorsa, szegénység, társadalmi igazságtalanság",sz:""}] },
  // ── 2. RÉGI MAGYAR IRODALOM ──
  { temakor:1, nev:"Janus Pannonius", elet:"1434–1472", korszak:"Reneszánsz / Humanizmus", bio:"Az első nagy magyar humanista költő, latin nyelven írt. Pécsi püspök, Mátyás király udvarában élt.", muvek:[{cim:"Búcsú Váradtól",ev:"1458 k.",t:"lira",mufaj:"Elégia (latin)",tema:"Búcsú az ifjúkor városától, nosztalgia, elmúlás",sz:""},{cim:"Egy dunántúli mandulafáról",ev:"1460-as évek",t:"lira",mufaj:"Epigramma",tema:"Korai tavasz, természet és emberi sors párhuzama",sz:""},{cim:"Pannónia dicsérete",ev:"1458 k.",t:"lira",mufaj:"Panegyrikus vers",tema:"Magyarország dicsérete, humanista büszkeség",sz:""},{cim:"Saját lelkéhez",ev:"1470-es évek",t:"lira",mufaj:"Elégia",tema:"Betegség, halálközelség, számvetés",sz:""}] },
  { temakor:1, nev:"Balassi Bálint", elet:"1554–1594", korszak:"Reneszánsz", bio:"A magyar reneszánsz líra megteremtője. Katonaköltő, viharos életű nemes. Három verscsoportja: istenes, vitézi és szerelmi versek.", muvek:[{cim:"Egy katonaének",ev:"1589 k.",t:"lira",mufaj:"Vitézi ének",tema:"A végvári élet dicsőítése, szabadság, hazaszeretet",sz:""},{cim:"Adj már csendességet…",ev:"1590 k.",t:"lira",mufaj:"Istenes vers/könyörgés",tema:"Istenkereső fohász, belső nyugalom vágya, bűnbánat",sz:""},{cim:"Hogy Júliára talála…",ev:"1588 k.",t:"lira",mufaj:"Szerelmi vers",tema:"Szerelmi találkozás, a szeretett nő dicsőítése",sz:"Júlia (Losonczy Anna)"},{cim:"Búcsúverse (Ó, én édes hazám…)",ev:"1589",t:"lira",mufaj:"Búcsúvers",tema:"Búcsú a hazától, száműzetés, fájdalom",sz:""}] },
  { temakor:1, nev:"Zrínyi Miklós", elet:"1620–1664", korszak:"Barokk", bio:"Hadvezér és költő. A magyar barokk eposz megteremtője. Célja a törökellenes harc ösztönzése volt.", muvek:[{cim:"Szigeti veszedelem",ev:"1651",t:"epika",mufaj:"Barokk eposz (15 ének)",tema:"Szigetvár 1566-os ostroma, hősi önfeláldozás, vallási és nemzeti eszme",sz:"Zrínyi Miklós (dédapa), Szulejmán, Delimán, Cumilla"},{cim:"Az török áfium ellen való orvosság",ev:"1660",t:"epika",mufaj:"Politikai röpirat",tema:"Magyar önvédelem szükségessége, cselekvésre felhívás",sz:""}] },
  { temakor:1, nev:"Mikes Kelemen", elet:"1690–1761", korszak:"Barokk / Felvilágosodás átmenete", bio:"II. Rákóczi Ferenc hű szolgája, emigrációban Rodostóban írta leveleit. A magyar próza egyik legszebb korai emléke.", muvek:[{cim:"Törökországi levelek",ev:"1717–1758",t:"epika",mufaj:"Fiktív levelek / emlékirat-szerű próza",tema:"Száműzetés, honvágy, emigráns élet Rodostóban",sz:"A levélíró (Mikes), a fiktív nénje, II. Rákóczi Ferenc"}] },
  { temakor:1, nev:"Csokonai Vitéz Mihály", elet:"1773–1805", korszak:"Felvilágosodás / Rokokó / Szentimentalizmus", bio:"A felvilágosodás és rokokó egyik legnagyobb magyar lírikusa. Debrecenből elűzték, szegénységben élt.", muvek:[{cim:"A Reményhez",ev:"1803",t:"lira",mufaj:"Óda",tema:"A remény elvesztése, Lilla elvesztése, életbölcselet",sz:"Lilla (Vajda Julianna)"},{cim:"Az estve",ev:"1794",t:"lira",mufaj:"Filozofikus vers/elégia",tema:"Természet és társadalom ellentéte, felvilágosodás-kritika",sz:""},{cim:"Tartózkodó kérelem",ev:"1803",t:"lira",mufaj:"Rokokó dal",tema:"Finom, játékos szerelmi vallomás",sz:"Lilla"},{cim:"Dorottya",ev:"1804",t:"epika",mufaj:"Komikus eposz",tema:"Vénlányok harca a farsangon, társadalmi szatíra",sz:"Dorottya, Karnevál (Cupido)"}] },
  // ── 3. 19–20. SZ. PORTRÉK ──
  { temakor:2, nev:"Berzsenyi Dániel", elet:"1776–1836", korszak:"Klasszicizmus / Romantika", bio:"A magyar klasszicizmus egyik legnagyobb lírikusa. Horatius-követő ódái a nemzeti és erkölcsi témákat dolgozzák fel.", muvek:[{cim:"A magyarokhoz (I.)",ev:"1797",t:"lira",mufaj:"Óda (horatiusi)",tema:"Magyar erkölcsök hanyatlása, figyelmeztetés",sz:""},{cim:"Közelítő tél",ev:"1804 k.",t:"lira",mufaj:"Elégia",tema:"Öregség, elmúlás, az élet alkonyának szépsége",sz:""},{cim:"Osztályrészemhez",ev:"1798 k.",t:"lira",mufaj:"Óda",tema:"A vidéki élet dicsérete, megelégedettség",sz:""}] },
  { temakor:2, nev:"Kölcsey Ferenc", elet:"1790–1838", korszak:"Romantika / Klasszicizmus", bio:"A Himnusz szerzője. Kritikus, szónok, politikus. A reformkor szellemi vezére.", muvek:[{cim:"Himnusz",ev:"1823",t:"lira",mufaj:"Himnusz/óda",tema:"Magyar nép sorsa, bűn és bűnhődés motívuma",sz:""},{cim:"Huszt",ev:"1831",t:"lira",mufaj:"Szonett",tema:"Nemzeti múlt romjai, 'Hass, alkoss, gyarapíts!'",sz:""},{cim:"Vanitatum vanitas",ev:"1823",t:"lira",mufaj:"Filozofikus vers",tema:"Az élet hiábavalóságának pesszimista képe",sz:""},{cim:"Parainesis Kölcsey Kálmánhoz",ev:"1834",t:"epika",mufaj:"Intő prózai mű",tema:"Erkölcsi intelem: hazaszeretet, becsület, munka",sz:""}] },
  { temakor:2, nev:"Gárdonyi Géza", elet:"1863–1922", korszak:"Realizmus / Romantika", bio:"Egri remete, néptanítóból lett világhírű regényíró.", muvek:[{cim:"Egri csillagok",ev:"1901",t:"regeny",mufaj:"Történelmi regény",tema:"Eger 1552-es ostroma, hazaszeretet, hősiesség",sz:"Bornemissza Gergely, Dobó István, Jumurdzsák, Cecey Éva"},{cim:"A láthatatlan ember",ev:"1902",t:"regeny",mufaj:"Történelmi regény",tema:"Attila hun birodalma, görög rabszolga kalandjai",sz:"Zéta, Emőke, Attila"}] },
  { temakor:2, nev:"Móricz Zsigmond", elet:"1879–1942", korszak:"Realizmus / Naturalizmus", bio:"A 20. sz. magyar realista prózájának kiemelkedő alakja. A paraszti és úri Magyarország kritikus ábrázolója.", muvek:[{cim:"Sárarany",ev:"1910",t:"regeny",mufaj:"Regény",tema:"Paraszti sors, ösztönök és társadalom konfliktusa",sz:"Turi Dani, Eszti"},{cim:"Légy jó mindhalálig",ev:"1920",t:"regeny",mufaj:"Regény/ifjúsági",tema:"Diákélet, árvaság, erkölcsi próbatétel, Debrecen",sz:"Nyilas Misi, Pósalaky, Bella néni"},{cim:"Rokonok",ev:"1932",t:"regeny",mufaj:"Regény",tema:"Korrupció, kisváros, az úri középosztály erkölcsi züllése",sz:"Kopjáss István, Lina"},{cim:"Barbárok",ev:"1932",t:"epika",mufaj:"Novella",tema:"Alföldi pusztai világ, erőszak, emberi kegyetlenség",sz:"Bodri Gáspár, a juhász"}] },
  { temakor:2, nev:"Krúdy Gyula", elet:"1878–1933", korszak:"Szecesszió / Impresszionizmus", bio:"Az álom és az emlékezés mestere. Impresszionista, nosztalgikus prózájában a 19. sz. végi Magyarország elevenedik meg.", muvek:[{cim:"Szindbád ifjúsága",ev:"1911",t:"epika",mufaj:"Novellakötet",tema:"Szindbád kalandjai, nőszerelem, emlékezés, nosztalgia",sz:"Szindbád (vándor-alak), különböző nők"},{cim:"A vörös postakocsi",ev:"1913",t:"regeny",mufaj:"Regény",tema:"Budapest éjszakai világa, bohém élet, nosztalgia",sz:"Rezeda Kázmér, különböző nőalakok"}] },
  { temakor:2, nev:"Karinthy Frigyes", elet:"1887–1938", korszak:"Nyugat / Groteszk / Szatíra", bio:"A magyar irodalom nagy humoristája. Paródiái, esszéi és fantasztikus regényei kiemelkedők.", muvek:[{cim:"Így írtok ti",ev:"1912",t:"epika",mufaj:"Irodalmi paródiák",tema:"Kortárs írók stílusának parodizálása",sz:""},{cim:"Tanár úr kérem",ev:"1916",t:"epika",mufaj:"Humoros elbeszélések",tema:"Iskolai élet, diák-tanár viszony, humor",sz:""},{cim:"Utazás a koponyám körül",ev:"1937",t:"epika",mufaj:"Önéletrajzi regény/esszé",tema:"Agydaganat-műtétje, halálközelség, az agy titkai",sz:"Karinthy maga, az orvosok"}] },
  { temakor:2, nev:"Márai Sándor", elet:"1900–1989", korszak:"Nyugat / Polgári humanizmus", bio:"A polgári világ és értékrendjének nagy írója. 1948-ban emigrált.", muvek:[{cim:"A gyertyák csonkig égnek",ev:"1942",t:"regeny",mufaj:"Regény",tema:"Barátság, árulás, évtizedes hallgatás, számvetés",sz:"Henrik (tábornok), Konrád, Krisztina"},{cim:"Egy polgár vallomásai",ev:"1934",t:"epika",mufaj:"Önéletrajzi regény",tema:"Polgári értékek, kassai gyermekkor, polgári identitás",sz:"A narrátor (Márai maga)"}] },
  { temakor:2, nev:"Illyés Gyula", elet:"1902–1983", korszak:"Népi mozgalom / Szürrealizmus", bio:"A népi írói mozgalom vezéralakja. A puszta szegény népe és a magyar sors foglalkoztatja.", muvek:[{cim:"Puszták népe",ev:"1936",t:"epika",mufaj:"Szociográfia/emlékirat",tema:"Az alföldi cselédek, pusztai szegényparasztok élete",sz:""},{cim:"Egy mondat a zsarnokságról",ev:"1950 (pub.1956)",t:"lira",mufaj:"Politikai vers",tema:"Totalitárius zsarnokság mindent átható jelenléte",sz:""}] },
  { temakor:2, nev:"Radnóti Miklós", elet:"1909–1944", korszak:"Nyugat / Klasszikus modernség", bio:"Zsidó származása miatt munkaszolgálatra vitték, 1944-ben Borban agyonlőtték. Verseit bori noteszéből mentették meg.", muvek:[{cim:"Erőltetett menet",ev:"1944",t:"lira",mufaj:"Vers/mártírlíra",tema:"Halálmars, a hazatérés reménye",sz:""},{cim:"Razglednicák (1–4.)",ev:"1944",t:"lira",mufaj:"Búcsúversek",tema:"Halálmars állomásai, pusztulás, szerelem emléke",sz:"Fifi (Gyarmati Fanni)"},{cim:"Nem tudhatom…",ev:"1944",t:"lira",mufaj:"Hazaszeretet-vers",tema:"Magyarország, a szülőhaza, fájdalom",sz:""},{cim:"Hetedik ecloga",ev:"1944",t:"lira",mufaj:"Ecloga",tema:"Fogolytábor, álom a hazáról, szerelem és remény",sz:"Fifi"}] },
  { temakor:2, nev:"Szabó Magda", elet:"1917–2007", korszak:"20. sz. második fele", bio:"A 20. sz. egyik legjelentősebb magyar írónője. Az ajtó és az Abigél világhírnévre tett szert.", muvek:[{cim:"Az ajtó",ev:"1987",t:"regeny",mufaj:"Regény",tema:"Írónő és takarítónője kapcsolata, titkos múlt, hűség és árulás",sz:"Az írónő (narrátor), Emerenc (takarítónő)"},{cim:"Abigél",ev:"1970",t:"regeny",mufaj:"Ifjúsági regény",tema:"Zárdaiskola, második világháború, lányok barátsága",sz:"Vitay Georgina (Gina), Kőnig Gábor, Susanna, Abigél (szobor)"}] },
  { temakor:2, nev:"Örkény István", elet:"1912–1979", korszak:"Abszurd / Groteszk", bio:"A magyar abszurd irodalom megteremtője. Egyperces novelláival és drámáival világhírnévre tett szert.", muvek:[{cim:"Tóték",ev:"1967",t:"drama",mufaj:"Groteszk dráma",tema:"Hatalom, kiszolgáltatottság, a hétköznapi abszurd",sz:"Tót, Ágika (lánya), az Őrnagy"},{cim:"Macskajáték",ev:"1971",t:"drama",mufaj:"Dráma",tema:"Két nővér levelezése, öregség, emlékezés",sz:"Giza, Erzsi (két nővér)"},{cim:"Egyperces novellák",ev:"1968",t:"epika",mufaj:"Novellaciklus/miniatűr",tema:"Abszurd humor, a valóság fonákja",sz:""}] },
  { temakor:2, nev:"Pilinszky János", elet:"1921–1981", korszak:"Katolikus modernség / Egzisztencializmus", bio:"A 20. sz. egyik legjelentősebb katolikus költője. A holokauszt élménye mélyen meghatározta.", muvek:[{cim:"Apokrif",ev:"1956",t:"lira",mufaj:"Hosszúvers/látomás",tema:"Isten-keresés, pusztulás utáni világ, magányos ember sorsa",sz:""},{cim:"Harbach 1944",ev:"1946",t:"lira",mufaj:"Vers/tanúságtétel",tema:"Koncentrációs tábor, áldozatok szenvedése",sz:""},{cim:"Négysoros",ev:"1970 k.",t:"lira",mufaj:"Miniatűr vers",tema:"Az emberi lét sűrített képe, szegénység és tartás",sz:""}] },
  // ── 4. HATÁRON TÚLI ──
  { temakor:3, nev:"Tamási Áron", elet:"1897–1966", korszak:"Népi modernség / Erdélyi irodalom", bio:"Az erdélyi székelység nagy írója. Meseregényei a székely nép humorát és tragikumát ábrázolják.", muvek:[{cim:"Ábel a rengetegben",ev:"1932",t:"regeny",mufaj:"Regény",tema:"Székely fiú önállósodása, erdő, természetközelség, humor",sz:"Ábel, a Csobán"},{cim:"Ábel az országban",ev:"1933",t:"regeny",mufaj:"Regény",tema:"Ábel szembesülése a várossal és a hatalommal",sz:"Ábel"},{cim:"Ábel Amerikában",ev:"1934",t:"regeny",mufaj:"Regény",tema:"Kivándorlás, idegenség, székely identitás megőrzése",sz:"Ábel"}] },
  { temakor:3, nev:"Wass Albert", elet:"1908–1998", korszak:"Erdélyi irodalom / Emigráció", bio:"Erdélyi magyar nemesi regényíró. 1944-ben emigrált. Műveiben Erdély elvesztése és a magyar sors a fő téma.", muvek:[{cim:"Adjátok vissza a hegyeimet!",ev:"1949",t:"regeny",mufaj:"Regény",tema:"Erdély elvesztése, trianoni trauma, honvágy",sz:"Dávid Tamás, Erdély mint szimbolikus táj"},{cim:"A funtineli boszorkány",ev:"1959",t:"regeny",mufaj:"Regény (háromkötetes)",tema:"Erdélyi hegyi emberek sorsa, természet és ember, mítosz",sz:"Funtineli boszorkány, Köves Gábor"}] },
  { temakor:3, nev:"Sütő András", elet:"1927–2006", korszak:"Erdélyi irodalom / Drámai modernség", bio:"Az erdélyi magyar irodalom kiemelkedő drámaírója. Drámái a kisebbségi lét és az emberi méltóság kérdéseit dolgozzák fel.", muvek:[{cim:"Anyám könnyű álmot ígér",ev:"1970",t:"epika",mufaj:"Szociográfiai napló/esszé",tema:"Erdélyi falusi élet, kisebbségi sors",sz:"Az anya, Sütő maga"},{cim:"Csillag a máglyán",ev:"1975",t:"drama",mufaj:"Dráma",tema:"Szellemi szabadság vs. inkvizíció",sz:"Szervét Mihály, Kálvin"}] },
  { temakor:3, nev:"Dsida Jenő", elet:"1907–1938", korszak:"Erdélyi irodalom / Nyugat-hatás", bio:"Az erdélyi magyar líra kiemelkedő fiatal tehetsége, 31 évesen halt meg. Katolikus vallásossága és a kisebbségi sors fájdalma hatja át verseit.", muvek:[{cim:"Psalmus Hungaricus",ev:"1936",t:"lira",mufaj:"Zsoltár-vers/hitvallás",tema:"Kisebbségi magyarság sorsa, Isten-keresés",sz:""},{cim:"Nagycsütörtök",ev:"1933",t:"lira",mufaj:"Vers/vallási líra",tema:"Jézus elhagyatottsága és a kisebbségi lét párhuzama",sz:""}] },
  { temakor:3, nev:"Kányádi Sándor", elet:"1929–2018", korszak:"Erdélyi irodalom / Népi modernség", bio:"Az erdélyi magyar irodalom egyik legkiemelkedőbb 20. sz-i lírikusa.", muvek:[{cim:"Halottak napja Bécsben",ev:"1975",t:"lira",mufaj:"Vers",tema:"Emigráció, gyökértelenség, hazavágyás",sz:""}] },
  // ── 5. SZÍNHÁZ ÉS DRÁMA ──
  { temakor:4, nev:"Szophoklész", elet:"Kr.e. 497–406", korszak:"Antik görög dráma", bio:"Az antik görög tragédia egyik legnagyobb mestere. Kb. 123 drámát írt, ebből 7 maradt fenn. Bevezette a harmadik színészt és a díszleteket.", muvek:[{cim:"Antigoné",ev:"Kr.e. 441 k.",t:"drama",mufaj:"Tragédia",tema:"Isteni törvény vs. emberi törvény, kötelesség és hatalom konfliktusa, női ellenállás",sz:"Antigoné, Kreón, Iszméné, Haimón, Teiresziász"},{cim:"Oidipusz király",ev:"Kr.e. 429 k.",t:"drama",mufaj:"Tragédia",tema:"Végzet és szabad akarat, önismeret, bűn és bűnhődés",sz:"Oidipusz, Iokaszté, Kreón, Teiresziász"}] },
  { temakor:4, nev:"Shakespeare, William", elet:"1564–1616", korszak:"Reneszánsz / Angol dráma", bio:"Az angol irodalom és a világirodalom legjelentősebb drámaírója. Londonban a Globe Színházban mutatta be darabjait.", muvek:[{cim:"Hamlet",ev:"1601 k.",t:"drama",mufaj:"Tragédia",tema:"Bosszú, halál, tétovázás, az élet értelme, hatalom és erkölcs",sz:"Hamlet, Claudius (nagybáty/király), Gertrud (anya), Ophélia, Horatio, Polonius, Laertes"},{cim:"Rómeó és Júlia",ev:"1595 k.",t:"drama",mufaj:"Tragédia",tema:"Szerelem és gyűlölet, végzet, fiatalság tragédiája, családi viszály",sz:"Rómeó Montague, Júlia Capulet, Lőrinc barát, Mercutio, Tybalt"},{cim:"Macbeth",ev:"1606 k.",t:"drama",mufaj:"Tragédia",tema:"Becsvágy, bűn, hatalomvágy, lelkiismeret",sz:"Macbeth, Lady Macbeth, Duncan király, Banquo, Macduff"},{cim:"A szentivánéji álom",ev:"1595 k.",t:"drama",mufaj:"Komédia",tema:"Szerelem és illúzió, álom és valóság, tündérvilág",sz:"Puck, Titánia, Oberón, Hermia, Lysander, Helena, Demetrius"}] },
  { temakor:4, nev:"Molière (Jean-Baptiste Poquelin)", elet:"1622–1673", korszak:"Francia klasszicizmus", bio:"A francia vígjáték megteremtője. XIV. Lajos udvarában alkotott. Komédiái társadalmi visszásságokat, emberi gyengeségeket gúnyolnak ki.", muvek:[{cim:"A fösvény (L'Avare)",ev:"1668",t:"drama",mufaj:"Vígjáték",tema:"A kapzsiság mint emberi bűn, pénzimádat",sz:"Harpagon (a fösvény), Cléante (fia), Élise (lánya), Valère, Marianne"},{cim:"Tartuffe",ev:"1664",t:"drama",mufaj:"Vígjáték/szatíra",tema:"Vallási képmutatás, álszentség leleplezése, társadalmi kritika",sz:"Tartuffe (álszent), Orgon (becsapott gazda), Elmire (felesége)"},{cim:"A képzelt beteg",ev:"1673",t:"drama",mufaj:"Vígjáték",tema:"Képzelt betegség, orvosok kritikája, emberi önzőség",sz:"Argan (a beteg), Béline (felesége), Angélique (lánya), Toinette (szolgáló)"}] },
  { temakor:4, nev:"Katona József", elet:"1791–1830", korszak:"Romantika", bio:"A magyar dráma megteremtője. A Bánk bán c. műve a magyar nemzeti dráma alapköve. Életében alig ismerték el, csak halála után vált híressé.", muvek:[{cim:"Bánk bán",ev:"1815 (bemutató: 1833)",t:"drama",mufaj:"Tragédia / nemzeti dráma",tema:"Haza és szerelem konfliktusa, idegenek uralma, becsület és bosszú, népi elégedetlenség",sz:"Bánk bán (nádor), Melinda (felesége), Ottó (herceg), Gertrudis (királyné), II. András (király), Tiborc (paraszt), Petur bán"}] },
  { temakor:4, nev:"Madách Imre", elet:"1823–1864", korszak:"Romantika", bio:"A magyar és a világirodalom egyik legjelentősebb drámai költeménye szerzője. Az ember tragédiája egyetlen nagy műve, amellyel világhírnevet szerzett.", muvek:[{cim:"Az ember tragédiája",ev:"1861",t:"drama",mufaj:"Drámai költemény (15 szín)",tema:"Az emberiség sorsa, optimizmus vs. pesszimizmus, haladás és pusztulás, szabadság és szükségszerűség",sz:"Ádám (az emberiség jelképe), Éva (az örök nő), Lucifer (a tagadás szelleme), az Úr"}] },
  { temakor:4, nev:"Ibsen, Henrik", elet:"1828–1906", korszak:"Realizmus / Naturalizmus", bio:"A modern dráma atyja. Norvég drámaíró, aki a társadalmi konvenciók és a polgári képmutatás ellen lázadt.", muvek:[{cim:"A babaház (Nóra)",ev:"1879",t:"drama",mufaj:"Realista dráma",tema:"A nő önállósága, polgári házasság kritikája, hazugság és önbecsapás",sz:"Nóra, Helmer (férje), Krogstad, Linde asszony, Dr. Rank"},{cim:"Hedda Gabler",ev:"1890",t:"drama",mufaj:"Lélektani dráma",tema:"Szabadságvágy, unalom, pusztító személyiség, manipuláció",sz:"Hedda Gabler, Tesman (férje), Lövborg, Brack bíró"}] },
  { temakor:4, nev:"Csehov, Anton", elet:"1860–1904", korszak:"Realizmus / Szimbolizmus", bio:"Az orosz realizmus és a modern dráma egyik legnagyobb alakja. Drámáiban nem drámai konfliktus van, hanem hangulat, csend és elmúlás.", muvek:[{cim:"A Cseresznyéskert",ev:"1904",t:"drama",mufaj:"Tragikomédia",tema:"A régi világ elmúlása, nemesség hanyatlása, nosztalgia és tehetetlenség",sz:"Ranyevszkaja (a birtokos), Lopakhin (kereskedő), Ánya, Gajev, Trofimov"},{cim:"Három nővér",ev:"1901",t:"drama",mufaj:"Dráma",tema:"Vágyakozás a jobb élet után, tétlenség, az idő múlása",sz:"Olga, Mása, Irina (három nővér), Versinin, Tuzenbah, Andrej"}] },
  // ── 6. VILÁGIRODALOM ──
  { temakor:5, nev:"Homérosz", elet:"Kr.e. 8. sz. k.", korszak:"Antik görög irodalom / Eposz", bio:"Az európai irodalom alapítója. Neve alatt két nagy eposz maradt fenn, amelyek az európai irodalom alapkövei.", muvek:[{cim:"Iliász",ev:"Kr.e. 8. sz. k.",t:"epika",mufaj:"Eposz (24 ének)",tema:"Trójai háború 51 napja, harag és hősi dicsőség, végzet, barátság és gyász",sz:"Akhilleusz, Hektór, Patroklosz, Agamemnón, Priamosz, Helené, Párisz"},{cim:"Odüsszeia",ev:"Kr.e. 8. sz. k.",t:"epika",mufaj:"Eposz (24 ének)",tema:"Hosszú hazatérés, hűség és kaland, a ravasz hős, hazaszeretet",sz:"Odüsszeusz, Pénelopé, Télemakhosz, Kirké, Kalüpszó, Polüphémosz"}] },
  { temakor:5, nev:"Dante Alighieri", elet:"1265–1321", korszak:"Középkor / Trecento", bio:"A középkori olasz irodalom és az európai irodalom egyik legnagyobb alakja. Száműzetésben írta fő művét. Babits Mihály fordította magyarra.", muvek:[{cim:"Isteni Színjáték (Divina Commedia)",ev:"1307–1321",t:"epika",mufaj:"Elbeszélő költemény / látomásirodalom",tema:"Lélek útja a bűntől az üdvösségig, középkori világkép, politikai kritika, szerelem és hit",sz:"Dante (utazó), Vergilius (vezető a pokolban/purgatóriumban), Beatrice (vezető a paradicsomban)"}] },
  { temakor:5, nev:"Cervantes, Miguel de", elet:"1547–1616", korszak:"Reneszánsz / Spanyol irodalom", bio:"A modern regény atyjának tartják. Don Quijote c. műve az első modern európai regény.", muvek:[{cim:"Don Quijote",ev:"1605–1615",t:"regeny",mufaj:"Regény (két rész)",tema:"Illúzió és valóság, lovagi eszmék és prózai világ, az idealizmus kudarca, barátság",sz:"Don Quijote (Alonso Quijano), Sancho Panza (fegyverhordozója), Dulcinea (eszménykép)"}] },
  { temakor:5, nev:"Goethe, Johann Wolfgang von", elet:"1749–1832", korszak:"Sturm und Drang / Klasszicizmus / Romantika", bio:"A német irodalom legnagyobb alakja. Weimari klasszicizmus vezéralakja. Tudós, természetkutató és költő egyszerre.", muvek:[{cim:"Faust I–II.",ev:"1808 / 1832",t:"drama",mufaj:"Drámai költemény",tema:"Tudásvágy és az emberi törekvés, ördögi paktum, megváltás, az élet értelme",sz:"Faust (tudós), Mefisztó (az ördög), Gretchen (Margit), Wagner (Faust tanítványa)"},{cim:"Az ifjú Werther szenvedései",ev:"1774",t:"regeny",mufaj:"Levélregény",tema:"Beteljesületlen szerelem, szentimentalizmus, öngyilkosság mint kiút",sz:"Werther, Lotte (szeretett nő), Albert (Lotte jegyese/férje)"}] },
  { temakor:5, nev:"Dosztojevszkij, Fjodor Mihajlovics", elet:"1821–1881", korszak:"Orosz realizmus / Pszichológiai realizmus", bio:"A lélektani regény mestere. Regényei az emberi lélek mélységeit, a bűnt és a megváltást vizsgálják.", muvek:[{cim:"Bűn és bűnhődés",ev:"1866",t:"regeny",mufaj:"Lélektani regény",tema:"Gyilkosság és lelkiismeret, az elméleti bűn valósága, vezeklés és megváltás",sz:"Raszkolnyikov, Szonya (prostituált, megmentője), Porfirij (vizsgálóbíró)"},{cim:"A Karamazov testvérek",ev:"1879–1880",t:"regeny",mufaj:"Regény",tema:"Apagyilkosság, hit és kétely, az emberi természet ellentétei, Isten létezése",sz:"Fjodor Karamazov (apa), Dmitrij, Iván, Aljosa (fiai)"}] },
  { temakor:5, nev:"Kafka, Franz", elet:"1883–1924", korszak:"Modernizmus / Expresszionizmus", bio:"A 20. sz. egyik legjelentősebb prózaírója. Az elidegenedés, a bürokrácia és az emberi kiszolgáltatottság szimbolikus ábrázolója.", muvek:[{cim:"Az átváltozás (Die Verwandlung)",ev:"1915",t:"epika",mufaj:"Kisregény/novella",tema:"Elidegenedés, a haszontalanná vált ember sorsa, család és társadalom elutasítása",sz:"Gregor Samsa (bogárrá változott), a család (apa, anya, húg)"},{cim:"A per (Der Proceß)",ev:"1925 (posztumusz)",t:"regeny",mufaj:"Regény",tema:"Értelmetlen bürokrácia, bűn nélküli bűnösség, az egyén tehetetlensége a rendszerrel szemben",sz:"Josef K. (főhős), a bírák, az ügyvéd, Leni"}] },
  { temakor:5, nev:"Camus, Albert", elet:"1913–1960", korszak:"Egzisztencializmus / Abszurd", bio:"Francia-algériai regényíró és esszéista. 1957-ben Nobel-díjat kapott. Az abszurd és a lázadás filozofikus gondolkodója.", muvek:[{cim:"Az idegen (L'Étranger)",ev:"1942",t:"regeny",mufaj:"Regény",tema:"Az élet abszurditása, közöny, elidegenedés, az értelmetlen büntetés",sz:"Meursault (főhős, az idegen), Marie (barátnője), Raymond, az arab"},{cim:"Sziszüphosz mítosza",ev:"1942",t:"epika",mufaj:"Filozofikus esszé",tema:"Az abszurd lét elfogadása, 'Sziszüphoszt boldognak kell elképzelni'",sz:""}] }
];

/* ── Render szerzők ── */
function renderSzerzok() {
  const panelDiv = document.getElementById('temakor-panels');
  if (!panelDiv) return;

  const temakorNevek = ['1. Kötelező szerzők','2. Régi magyar irodalom','3. 19–20. sz. portrék','4. Határon túli irodalom','5. Színház és dráma','6. Világirodalom'];

  [0,1,2,3,4,5].forEach(tk => {
    const panel = document.createElement('div');
    panel.className = 'temakor-panel' + (tk === 0 ? ' active' : '');
    panel.id = 'panel-' + tk;

    const szerzokEbben = adatok.filter(sz => sz.temakor === tk);
    const navDiv = document.createElement('div');
    navDiv.className = 'szerzo-nav';

    szerzokEbben.forEach((sz, i) => {
      const btn = document.createElement('button');
      btn.textContent = sz.nev;
      if (i === 0) btn.classList.add('active');
      btn.onclick = () => {
        navDiv.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        panel.querySelectorAll('.szerzo-card').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('sc-' + tk + '-' + i).classList.add('active');
      };
      navDiv.appendChild(btn);
    });
    panel.appendChild(navDiv);

    szerzokEbben.forEach((sz, i) => {
      const card = document.createElement('div');
      card.className = 'szerzo-card' + (i === 0 ? ' active' : '');
      card.id = 'sc-' + tk + '-' + i;

      const rows = sz.muvek.map(m => {
        const tLabel = m.t==='lira'?'líra':m.t==='regeny'?'regény':m.t==='drama'?'dráma':'epika';
        const tagHtml = `<span class="tag ${m.t}">${tLabel}</span>`;
        const szHtml = m.sz
          ? `<span class="szereplok">${m.sz}</span>`
          : `<span style="color:var(--color-text-secondary);font-size:11px;">–</span>`;
        return `<tr>
          <td><strong>${m.cim}</strong></td>
          <td style="white-space:nowrap;font-size:12px;">${m.ev}</td>
          <td>${tagHtml} <span style="font-size:12px;">${m.mufaj}</span></td>
          <td style="font-size:12px;">${m.tema}</td>
          <td>${szHtml}</td>
        </tr>`;
      }).join('');

      card.innerHTML = `
        <div class="szerzo-header">
          <h2>${sz.nev}</h2>
          <div class="meta">${sz.elet} · ${sz.korszak}</div>
        </div>
        <div class="szerzo-body">
          <p class="bio">${sz.bio}</p>
          <div class="szerzo-section-title">Főbb művek</div>
          <table class="data-table">
            <thead><tr>
              <th>Cím</th><th>Év</th><th>Műfaj</th><th>Téma</th><th>Fontosabb szereplők</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>`;
      panel.appendChild(card);
    });

    panelDiv.appendChild(panel);
  });
}


/* ============================================================
   8. GYAKORLÓ MODULE  (v2)
   ============================================================ */

/* ── State ── */
const GYK = {
  selectedTk: new Set([0,1,2,3,4,5]),
  mode: 'random',
  qtype: 'both',
  qLimit: 0,          // 0 = all
  questions: [],
  current: 0,
  correct: 0,
  wrong: [],
  answered: false,
  roundNum: 1,
  _wrongPairs: [],
  _statSort: { authors: 'asc', temakor: 'asc' },
};

const TK_NAMES = [
  '1. Kötelező szerzők',
  '2. Régi magyar irodalom',
  '3. 19–20. sz. portrék',
  '4. Határon túli irodalom',
  '5. Színház és dráma',
  '6. Világirodalom'
];

/* ── DOMContentLoaded: wire up all controls ── */
document.addEventListener('DOMContentLoaded', () => {

  /* Filter buttons */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tk = parseInt(btn.dataset.tk);
      btn.classList.toggle('active');
      if (GYK.selectedTk.has(tk)) GYK.selectedTk.delete(tk);
      else GYK.selectedTk.add(tk);
      gykUpdateSetupInfo();
    });
  });

  /* Mode buttons */
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      GYK.mode = btn.dataset.mode;
    });
  });

  /* Qtype buttons */
  document.querySelectorAll('.qtype-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.qtype-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      GYK.qtype = btn.dataset.qt;
      gykUpdateSetupInfo();
    });
  });

  /* Preset count buttons */
  document.querySelectorAll('.qcount-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.qcount-preset').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      GYK.qLimit = parseInt(btn.dataset.n);
      document.getElementById('gyk-qcount-input').value = '';
      gykUpdateSetupInfo();
    });
  });

  /* Manual number input */
  const qInput = document.getElementById('gyk-qcount-input');
  if (qInput) {
    qInput.addEventListener('input', () => {
      document.querySelectorAll('.qcount-preset').forEach(b => b.classList.remove('active'));
      const v = parseInt(qInput.value);
      GYK.qLimit = (isNaN(v) || v < 1) ? 0 : v;
      gykUpdateSetupInfo();
    });
  }

  /* Stat sort buttons */
  document.querySelectorAll('.stat-sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const sort   = btn.dataset.sort;
      document.querySelectorAll(`.stat-sort-btn[data-target="${target}"]`)
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      GYK._statSort[target] = sort;
      gykRenderStatPage();
    });
  });

  gykUpdateSetupInfo();
  gykRenderStatPage();
});

/* ── Setup info updater ── */
function gykUpdateSetupInfo() {
  const pairs = gykBuildPairs(GYK.selectedTk, GYK.qtype);
  const total = pairs.length;
  const limit = GYK.qLimit;
  const inRound = (limit > 0 && limit < total) ? limit : total;

  document.getElementById('setup-pair-count').textContent = total;
  document.getElementById('setup-selected-count').textContent =
    (limit > 0 && limit < total) ? limit : 'mind';
  document.getElementById('gyk-start-btn').disabled = total < 4;
}

/* ── Build question pairs ── */
function gykBuildPairs(selectedTk, qtype) {
  const pairs = [];
  adatok.forEach(sz => {
    if (!selectedTk.has(sz.temakor)) return;
    sz.muvek.forEach(m => {
      if (qtype === 'both' || qtype === 'muvtol')
        pairs.push({ type:'muvtol', author: sz.nev, title: m.cim, temakor: sz.temakor });
      if (qtype === 'both' || qtype === 'szerzotol')
        pairs.push({ type:'szerzotol', author: sz.nev, title: m.cim, temakor: sz.temakor });
    });
  });
  return pairs;
}

/* ── Shuffle helper ── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── Build questions with wrong options ── */
function gykBuildQuestions(pairs) {
  const allAuthors = [...new Set(
    adatok.filter(sz => GYK.selectedTk.has(sz.temakor)).map(sz => sz.nev)
  )];
  const allTitles = [...new Set(
    adatok.filter(sz => GYK.selectedTk.has(sz.temakor)).flatMap(sz => sz.muvek.map(m => m.cim))
  )];

  // Ensure enough wrong options even if pool is small
  const authorPool = allAuthors.length > 3 ? allAuthors :
    [...new Set(adatok.map(sz => sz.nev))];
  const titlePool = allTitles.length > 3 ? allTitles :
    [...new Set(adatok.flatMap(sz => sz.muvek.map(m => m.cim)))];

  return pairs.map(p => {
    if (p.type === 'muvtol') {
      const wrongs = shuffle(authorPool.filter(a => a !== p.author)).slice(0, 3);
      const options = shuffle([p.author, ...wrongs]);
      return { ...p, options, correct: p.author };
    } else {
      const wrongs = shuffle(titlePool.filter(t => t !== p.title)).slice(0, 3);
      const options = shuffle([p.title, ...wrongs]);
      return { ...p, options, correct: p.title };
    }
  });
}

/* ── START ── */
function gykStart(pairs) {
  GYK.correct = 0;
  GYK.wrong = [];
  GYK.current = 0;
  GYK.answered = false;

  if (!pairs) {
    pairs = gykBuildPairs(GYK.selectedTk, GYK.qtype);
    if (GYK.mode === 'random') {
      pairs = shuffle(pairs);
    } else {
      const grouped = {};
      pairs.forEach(p => {
        if (!grouped[p.temakor]) grouped[p.temakor] = [];
        grouped[p.temakor].push(p);
      });
      pairs = [0,1,2,3,4,5].flatMap(tk => shuffle(grouped[tk] || []));
    }
    // Apply limit
    if (GYK.qLimit > 0 && GYK.qLimit < pairs.length) {
      pairs = pairs.slice(0, GYK.qLimit);
    }
  }

  GYK.questions = gykBuildQuestions(pairs);
  gykShowScreen('gyk-quiz');
  gykRenderQuestion();
}

/* ── Retry only wrong answers ── */
function gykRetryWrong() {
  GYK.roundNum++;
  const seen = new Set();
  GYK._wrongPairs = GYK.wrong
    .filter(w => {
      const k = w.type + '|' + w.author + '|' + w.title;
      if (seen.has(k)) return false;
      seen.add(k); return true;
    })
    .map(w => ({ type: w.type, author: w.author, title: w.title, temakor: 0 }));

  gykStart(shuffle(GYK._wrongPairs));
}

/* ── Exit mid-round, save partial results ── */
function gykExitMidRound() {
  if (!confirm('Biztosan kilépsz? Az eddigi válaszaid elmentjük a statisztikába.')) return;

  // Only count questions that were answered so far
  const answered = GYK.current; // number of questions answered (current index = next to answer)
  const savedCorrect = GYK.correct;
  const savedWrong = GYK.wrong;

  if (answered > 0) {
    gykSaveRound(savedCorrect, answered, savedWrong, true);
    gykRenderStatPage();
  }

  GYK.roundNum = 1;
  gykShowScreen('gyk-setup');
  gykUpdateSetupInfo();
}

/* ── Render question ── */
function gykRenderQuestion() {
  const q = GYK.questions[GYK.current];
  const total = GYK.questions.length;

  document.getElementById('gyk-progress-bar').style.width = (GYK.current / total * 100) + '%';
  document.getElementById('gyk-q-counter').textContent = (GYK.current + 1) + ' / ' + total;
  document.getElementById('gyk-score-good').textContent = '✓ ' + GYK.correct;
  document.getElementById('gyk-score-bad').textContent  = '✗ ' + GYK.wrong.length;

  document.getElementById('gyk-q-type-label').textContent =
    q.type === 'muvtol' ? '📖 Ki írta ezt a művet?' : '✍️ Melyik mű a szerzőé?';

  document.getElementById('gyk-q-text').textContent =
    q.type === 'muvtol' ? `„${q.title}"` : q.author;

  const optEl = document.getElementById('gyk-options');
  optEl.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'gyk-option-btn';
    btn.textContent = opt;
    btn.onclick = () => gykAnswer(opt, btn);
    optEl.appendChild(btn);
  });

  document.getElementById('gyk-feedback').innerHTML = '';
  document.getElementById('gyk-feedback').className = 'gyk-feedback';
  document.getElementById('gyk-next-btn').style.display = 'none';
  GYK.answered = false;
}

/* ── Answer handler ── */
function gykAnswer(chosen, btn) {
  if (GYK.answered) return;
  GYK.answered = true;

  const q = GYK.questions[GYK.current];
  const isCorrect = chosen === q.correct;

  document.querySelectorAll('.gyk-option-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === q.correct) b.classList.add('correct');
    else if (b === btn && !isCorrect) b.classList.add('wrong');
  });

  if (isCorrect) {
    GYK.correct++;
    document.getElementById('gyk-feedback').innerHTML = '<span class="fb-ok">✓ Helyes!</span>';
    document.getElementById('gyk-feedback').className = 'gyk-feedback fb-ok-wrap';
  } else {
    GYK.wrong.push({
      author: q.author, title: q.title, type: q.type,
      yourAnswer: chosen, correctAnswer: q.correct
    });
    const hint = q.type === 'muvtol'
      ? `A helyes válasz: <strong>${q.correct}</strong>`
      : `A helyes mű: <strong>${q.correct}</strong>`;
    document.getElementById('gyk-feedback').innerHTML = `<span class="fb-bad">✗ Sajnos nem!</span> ${hint}`;
    document.getElementById('gyk-feedback').className = 'gyk-feedback fb-bad-wrap';
  }

  document.getElementById('gyk-score-good').textContent = '✓ ' + GYK.correct;
  document.getElementById('gyk-score-bad').textContent  = '✗ ' + GYK.wrong.length;
  document.getElementById('gyk-next-btn').style.display = 'block';
}

/* ── Next question ── */
function gykNext() {
  GYK.current++;
  if (GYK.current >= GYK.questions.length) {
    gykFinishRound();
  } else {
    gykRenderQuestion();
  }
}

/* ── Finish round ── */
function gykFinishRound() {
  const total = GYK.questions.length;
  const pct   = Math.round(GYK.correct / total * 100);

  gykSaveRound(GYK.correct, total, GYK.wrong, false);
  gykRenderStatPage();

  const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🌟' : pct >= 60 ? '👍' : pct >= 40 ? '💪' : '📖';
  document.getElementById('gyk-result-emoji').textContent = emoji;
  document.getElementById('gyk-result-title').textContent = GYK.roundNum + '. kör vége!';
  document.getElementById('gyk-result-score').innerHTML =
    `<span class="res-correct">${GYK.correct}</span> / ${total} helyes &nbsp;·&nbsp; <span class="res-pct">${pct}%</span>`;

  const wrongSection = document.getElementById('gyk-wrong-section');
  const wrongList    = document.getElementById('gyk-wrong-list');
  if (GYK.wrong.length > 0) {
    wrongSection.style.display = 'block';
    wrongList.innerHTML = GYK.wrong.map(w => `
      <div class="wrong-item">
        <div class="wrong-pair"><em>„${w.title}"</em> — <strong>${w.author}</strong></div>
        <div class="wrong-detail">Te: <span class="wrong-your">${w.yourAnswer}</span></div>
      </div>
    `).join('');
    document.getElementById('gyk-retry-wrong-btn').style.display =
      GYK.wrong.length >= 1 ? 'block' : 'none';
    document.getElementById('gyk-retry-wrong-btn').textContent =
      `🔁 Hibák újra (${GYK.roundNum + 1}. kör)`;
  } else {
    wrongSection.style.display = 'none';
    document.getElementById('gyk-retry-wrong-btn').style.display = 'none';
  }

  gykShowScreen('gyk-results');
}

function gykBackToSetup() {
  GYK.roundNum = 1;
  gykShowScreen('gyk-setup');
  gykUpdateSetupInfo();
}

/* ── Screen switching ── */
function gykShowScreen(id) {
  document.querySelectorAll('.gyk-screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ══════════════════════════════════════════
   STATISTICS  (localStorage)
   ══════════════════════════════════════════ */
const STATS_KEY = 'irodalom_gyk_stats_v2';

function gykLoadStats() {
  try {
    return JSON.parse(localStorage.getItem(STATS_KEY)) ||
      { rounds: [], authors: {}, temakor: {} };
  } catch(e) {
    return { rounds: [], authors: {}, temakor: {} };
  }
}

function gykSaveRound(correct, total, wrong, partial) {
  const stats = gykLoadStats();
  const now   = new Date();

  // Build set of wrong question keys
  const wrongKeys = new Set(wrong.map(w => `${w.author}|${w.title}|${w.type}`));

  // Slice to answered questions only
  const answeredQs = GYK.questions.slice(0, GYK.current + (partial ? 0 : 0));
  // All answered questions = indices 0..current-1 when partial, or all when finished
  const qs = partial
    ? GYK.questions.slice(0, GYK.current)
    : GYK.questions;

  qs.forEach(q => {
    // Author stats
    if (!stats.authors[q.author]) stats.authors[q.author] = { asked:0, correct:0, temakor: q.temakor };
    stats.authors[q.author].asked++;
    stats.authors[q.author].temakor = q.temakor;

    const key = `${q.author}|${q.title}|${q.type}`;
    if (!wrongKeys.has(key)) stats.authors[q.author].correct++;

    // Temakor stats — use original temakor from author data
    const tkIdx = adatok.find(a => a.nev === q.author)?.temakor ?? 0;
    const tkKey = tkIdx.toString();
    if (!stats.temakor[tkKey]) stats.temakor[tkKey] = { asked:0, correct:0, name: TK_NAMES[tkIdx] };
    stats.temakor[tkKey].asked++;
    if (!wrongKeys.has(key)) stats.temakor[tkKey].correct++;
  });

  const dateStr = now.toLocaleDateString('hu-HU') + ' ' +
    now.toLocaleTimeString('hu-HU', {hour:'2-digit',minute:'2-digit'});

  stats.rounds.unshift({
    date: dateStr,
    correct, total,
    pct: Math.round(correct / total * 100),
    wrongCount: wrong.length,
    partial: !!partial
  });
  if (stats.rounds.length > 30) stats.rounds = stats.rounds.slice(0, 30);

  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function gykClearStats() {
  if (confirm('Biztosan törlöd az összes statisztikát?')) {
    localStorage.removeItem(STATS_KEY);
    gykRenderStatPage();
  }
}

/* ── Render the full Statisztika page ── */
function gykRenderStatPage() {
  const stats = gykLoadStats();
  renderStatRounds(stats.rounds);
  renderStatAuthors(stats.authors, GYK._statSort.authors);
  renderStatTemakor(stats.temakor, GYK._statSort.temakor);
}

function pctClass(p) { return p >= 80 ? 'good' : p >= 50 ? 'mid' : 'bad'; }
function pctBar(p) {
  const col = p >= 80 ? '#3B6D11' : p >= 50 ? '#c9a96e' : '#b34040';
  return `<div class="stats-bar-wrap"><div class="stats-bar" style="width:${p}%;background:${col}"></div></div>`;
}

function renderStatRounds(rounds) {
  const el = document.getElementById('stat-rounds-content');
  if (!el) return;
  if (!rounds || rounds.length === 0) {
    el.innerHTML = '<p class="stats-empty">Még nincs adat. Játssz egy kört!</p>';
    return;
  }
  el.innerHTML = `
    <table class="stats-table">
      <thead><tr><th>Dátum</th><th>Eredmény</th><th>%</th><th></th></tr></thead>
      <tbody>
        ${rounds.map(r => `
          <tr>
            <td style="white-space:nowrap">${r.date}</td>
            <td><strong>${r.correct} / ${r.total}</strong></td>
            <td>
              ${pctBar(r.pct)}
              <span class="stats-pct ${pctClass(r.pct)}">${r.pct}%</span>
            </td>
            <td>${r.partial ? '<span class="partial-badge">félbehagyott</span>' : ''}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;
}

function renderStatAuthors(authors, sort) {
  const el = document.getElementById('stat-authors-content');
  if (!el) return;
  const entries = Object.entries(authors || {})
    .filter(([,v]) => v.asked > 0)
    .map(([name, v]) => ({
      name,
      pct: Math.round(v.correct / v.asked * 100),
      correct: v.correct,
      asked: v.asked
    }));

  if (entries.length === 0) {
    el.innerHTML = '<p class="stats-empty">Még nincs adat.</p>'; return;
  }

  entries.sort((a,b) => sort === 'asc' ? a.pct - b.pct : b.pct - a.pct);

  el.innerHTML = `
    <table class="stats-table">
      <thead><tr><th>Szerző</th><th>Helyes</th><th>Arány</th></tr></thead>
      <tbody>
        ${entries.map(a => `
          <tr>
            <td>${a.name}</td>
            <td>${a.correct} / ${a.asked}</td>
            <td>
              ${pctBar(a.pct)}
              <span class="stats-pct ${pctClass(a.pct)}">${a.pct}%</span>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;
}

function renderStatTemakor(temakor, sort) {
  const el = document.getElementById('stat-temakor-content');
  if (!el) return;
  const entries = Object.entries(temakor || {})
    .filter(([,v]) => v.asked > 0)
    .map(([key, v]) => ({
      name: v.name || TK_NAMES[parseInt(key)] || key,
      pct: Math.round(v.correct / v.asked * 100),
      correct: v.correct,
      asked: v.asked
    }));

  if (entries.length === 0) {
    el.innerHTML = '<p class="stats-empty">Még nincs adat.</p>'; return;
  }

  entries.sort((a,b) => sort === 'asc' ? a.pct - b.pct : b.pct - a.pct);

  el.innerHTML = `
    <table class="stats-table">
      <thead><tr><th>Témakör</th><th>Helyes</th><th>Arány</th></tr></thead>
      <tbody>
        ${entries.map(t => `
          <tr>
            <td>${t.name}</td>
            <td>${t.correct} / ${t.asked}</td>
            <td>
              ${pctBar(t.pct)}
              <span class="stats-pct ${pctClass(t.pct)}">${t.pct}%</span>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;
}



document.addEventListener('DOMContentLoaded', () => {
  // Műfajok
  renderCards(epikaData, 'epika-cards', 'epika');
  renderCards(liraData,  'lira-cards',  'lira');
  renderCards(dramaData, 'drama-cards', 'drama');
  renderSummary();
  renderQuiz();

  // Szerzők
  renderSzerzok();

  // Activate defaults
  document.querySelector('.tab-btn').click();       // first mufajok tab
  versShow(0);                                      // first vers tab
});