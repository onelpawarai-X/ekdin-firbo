/* ==========================================================
   গভীর — a deck-building dungeon crawler
   ========================================================== */

/* ---------------- cards ---------------- */
const CARDS = {
  strike:   { n:'আঘাত',          c:1, t:'atk',   i:'🗡️', d:'৬ ক্ষতি' },
  strikeP:  { n:'আঘাত+',         c:1, t:'atk',   i:'🗡️', d:'৯ ক্ষতি', up:1 },
  defend:   { n:'প্রতিরক্ষা',      c:1, t:'skill', i:'🛡️', d:'৫ বর্ম' },
  defendP:  { n:'প্রতিরক্ষা+',     c:1, t:'skill', i:'🛡️', d:'৮ বর্ম', up:1 },
  heavy:    { n:'ভারী আঘাত',      c:2, t:'atk',   i:'🪓', d:'১৪ ক্ষতি' },
  heavyP:   { n:'ভারী আঘাত+',     c:2, t:'atk',   i:'🪓', d:'১৯ ক্ষতি', up:1 },
  twin:     { n:'দ্বিগুণ ছুরি',     c:1, t:'atk',   i:'⚔️', d:'৪ ক্ষতি ×২' },
  twinP:    { n:'দ্বিগুণ ছুরি+',    c:1, t:'atk',   i:'⚔️', d:'৬ ক্ষতি ×২', up:1 },
  cleave:   { n:'ঝাঁঝালো আঘাত',    c:1, t:'atk',   i:'💥', d:'৭ ক্ষতি, সবার উপর' },
  cleaveP:  { n:'ঝাঁঝালো আঘাত+',   c:1, t:'atk',   i:'💥', d:'১০ ক্ষতি, সবার উপর', up:1 },
  poison:   { n:'বিষাক্ত ছুরি',     c:1, t:'atk',   i:'🧪', d:'৪ ক্ষতি + ৩ বিষ' },
  poisonP:  { n:'বিষাক্ত ছুরি+',    c:1, t:'atk',   i:'🧪', d:'৬ ক্ষতি + ৪ বিষ', up:1 },
  weaken:   { n:'দুর্বলতা',        c:1, t:'skill', i:'🕸️', d:'২ দুর্বল' },
  weakenP:  { n:'দুর্বলতা+',       c:1, t:'skill', i:'🕸️', d:'৩ দুর্বল', up:1 },
  bulwark:  { n:'ঢাল প্রাচীর',     c:2, t:'skill', i:'🏰', d:'১২ বর্ম' },
  bulwarkP: { n:'ঢাল প্রাচীর+',    c:2, t:'skill', i:'🏰', d:'১৬ বর্ম', up:1 },
  mend:     { n:'নিরাময়',         c:1, t:'skill', i:'💚', d:'৫ প্রাণ ফেরত' },
  mendP:    { n:'নিরাময়+',        c:1, t:'skill', i:'💚', d:'৮ প্রাণ ফেরত', up:1 },
  focus:    { n:'তীক্ষ্ণতা',       c:1, t:'power', i:'🔥', d:'স্থায়ী +২ শক্তি' },
  focusP:   { n:'তীক্ষ্ণতা+',      c:1, t:'power', i:'🔥', d:'স্থায়ী +৩ শক্তি', up:1 },
  thorns:   { n:'কাঁটা',          c:1, t:'power', i:'🌵', d:'স্থায়ী +৩ কাঁটা' },
  thornsP:  { n:'কাঁটা+',         c:1, t:'power', i:'🌵', d:'স্থায়ী +৪ কাঁটা', up:1 },
  execute:  { n:'মৃত্যুদণ্ড',       c:2, t:'atk',   i:'☠️', d:'২২ ক্ষতি · নিঃশেষ' },
  executeP: { n:'মৃত্যুদণ্ড+',      c:2, t:'atk',   i:'☠️', d:'৩০ ক্ষতি · নিঃশেষ', up:1 },
  bladedance:{ n:'অসি নাচ',        c:1, t:'power', i:'🌪️', d:'প্রতি পালায় ৪ ক্ষতি' },
  bladedanceP:{ n:'অসি নাচ+',      c:1, t:'power', i:'🌪️', d:'প্রতি পালায় ৬ ক্ষতি', up:1 },
  bloodlet: { n:'রক্তপাত',        c:0, t:'skill', i:'🩸', d:'৩ প্রাণ দিয়ে +২ শক্তি' },
  bloodletP:{ n:'রক্তপাত+',       c:0, t:'skill', i:'🩸', d:'২ প্রাণ দিয়ে +২ শক্তি', up:1 },
  curse:    { n:'অভিশাপ',        c:1, t:'curse', i:'💀', d:'কিছুই হয় না' },
};

const UPGRADE = {
  strike:'strikeP', defend:'defendP', heavy:'heavyP', twin:'twinP', cleave:'cleaveP',
  poison:'poisonP', weaken:'weakenP', bulwark:'bulwarkP', mend:'mendP', focus:'focusP',
  thorns:'thornsP', execute:'executeP', bladedance:'bladedanceP', bloodlet:'bloodletP',
};

const REWARD_POOL = ['heavy','twin','cleave','poison','weaken','bulwark','mend','focus','thorns','execute','bladedance','bloodlet'];

/* ---------------- enemies ---------------- */
const ENEMIES = {
  rat:      { n:'ইঁদুর',        i:'🐀', hp:[13,17], pat:[{t:'atk',v:5}] },
  bat:      { n:'বাদুড়',       i:'🦇', hp:[11,15], pat:[{t:'atk',v:4},{t:'atk',v:4}] },
  slime:    { n:'স্লাইম',      i:'🟢', hp:[19,24], pat:[{t:'atk',v:6}] },
  skeleton: { n:'কঙ্কাল',      i:'💀', hp:[27,33], pat:[{t:'atk',v:9},{t:'blk',v:6}] },
  goblin:   { n:'গবলিন',      i:'👺', hp:[24,29], pat:[{t:'atk',v:7},{t:'atk',v:10}] },
  warrior:  { n:'যোদ্ধা',      i:'🪖', hp:[33,39], pat:[{t:'atk',v:10},{t:'blk',v:8}] },
  ghost:    { n:'ভূত',        i:'👻', hp:[30,36], pat:[{t:'atk',v:9},{t:'weak',v:2}] },
  golem:    { n:'পাথর দানব',   i:'🗿', hp:[46,53], pat:[{t:'blk',v:12},{t:'atk',v:12}] },
  serpent:  { n:'সাপ',        i:'🐍', hp:[29,35], pat:[{t:'poison',v:4},{t:'atk',v:8}] },
  knight:   { n:'অন্ধকার যোদ্ধা',i:'⚔️', hp:[51,59], pat:[{t:'atk',v:14},{t:'blk',v:10}] },
  drake:    { n:'ড্রাগন শাবক',  i:'🐉', hp:[45,51], pat:[{t:'atk',v:13},{t:'str',v:2}] },
  sorcerer: { n:'জাদুকর',      i:'🧙', hp:[39,45], pat:[{t:'atk',v:9},{t:'str',v:3},{t:'atk',v:12}] },
  wraith:   { n:'প্রেত',       i:'🌫️', hp:[44,50], pat:[{t:'atk',v:12},{t:'weak',v:2}] },
  titan:    { n:'টাইটান',      i:'👹', hp:[62,70], pat:[{t:'atk',v:16},{t:'blk',v:14}] },
};

const BOSSES = {
  warden: { n:'প্রহরী',        i:'🛡️', hp:[92,92],  pat:[{t:'atk',v:12},{t:'blk',v:14},{t:'atk',v:18}], boss:1 },
  shadow: { n:'ছায়া রাজা',    i:'👑', hp:[148,148],pat:[{t:'atk',v:15},{t:'atk',v:8},{t:'str',v:3},{t:'atk',v:20}], boss:1 },
  heart:  { n:'গভীরের হৃদয়',  i:'🫀', hp:[210,210],pat:[{t:'atk',v:19},{t:'poison',v:6},{t:'atk',v:26},{t:'blk',v:20}], boss:1 },
};

const POOLS = [
  [ 'rat','bat','slime' ],                    // floors 1-4
  [ 'skeleton','goblin','warrior' ],           // 5-8
  [ 'ghost','golem','serpent' ],               // 9-12
  [ 'knight','drake','sorcerer' ],             // 13-16
  [ 'wraith','titan','knight','sorcerer' ],    // 17-24
];

/* ---------------- relics ---------------- */
const RELICS = {
  ember:  { n:'অঙ্গার',      i:'🔥', d:'প্রতি পালায় শুরুতে ১ শক্তি বেশি' },
  heart:  { n:'পাথরের হৃদয়', i:'🪨', d:'সর্বোচ্চ প্রাণ +১৫' },
  fang:   { n:'দাঁত',        i:'🦷', d:'প্রথম আঘাতে প্রতি পালায় +৩ ক্ষতি' },
  eye:    { n:'তৃতীয় চোখ',   i:'👁️', d:'প্রতি পালায় ১ কার্ড বেশি তোলা' },
  coin:   { n:'সোনার মুদ্রা', i:'🪙', d:'লড়াই শেষে ২৫ স্বর্ণ বেশি' },
  shell:  { n:'খোলস',        i:'🐚', d:'প্রতি পালায় শুরুতে ৩ বর্ম' },
};

/* ---------------- state ---------------- */
const S = {
  floor:1, hp:70, maxHp:70, gold:99,
  deck:[], relics:[],
  depth:1,
  // combat
  enemies:[], hand:[], drawPile:[], discardPile:[], exhaustPile:[],
  mana:0, maxMana:3, block:0, str:0, thorns:0, bladeDance:0,
  sel:0, turn:0, busy:false, playedThisTurn:0, weakTurns:0, fangUsed:false, combatOver:false,
};

let MUTED = false;

/* ---------------- dom helpers ---------------- */
const $ = id => document.getElementById(id);
const scr = ['title','map','combat','reward','shop','rest','event','end'];
function show(name){
  scr.forEach(s => $('scr-'+s).classList.toggle('hidden', s !== name));
}

const bn = n => String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
const rnd = (a,b) => Math.floor(Math.random()*(b-a+1))+a;
const pick = arr => arr[Math.floor(Math.random()*arr.length)];

/* ---------------- audio ---------------- */
let AC = null;
function beep(freq, dur, type, vol){
  if (MUTED) return;
  try{
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const o = AC.createOscillator(), g = AC.createGain();
    o.type = type || 'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(vol || 0.05, AC.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, AC.currentTime + dur);
    o.connect(g); g.connect(AC.destination);
    o.start(); o.stop(AC.currentTime + dur);
  }catch(e){}
}
const sfxHit  = () => beep(150, .12, 'square', .06);
const sfxBlock= () => beep(420, .1, 'sine', .05);
const sfxCard = () => beep(660, .06, 'triangle', .04);
const sfxHeal = () => beep(720, .16, 'sine', .05);
const sfxGold = () => { beep(880,.08,'triangle',.05); setTimeout(()=>beep(1180,.1,'triangle',.04),70); };
const sfxWin  = () => { beep(520,.1,'triangle',.05); setTimeout(()=>beep(700,.1,'triangle',.05),90); setTimeout(()=>beep(900,.2,'triangle',.05),180); };

/* ---------------- floating numbers ---------------- */
function floatNum(el, text, cls){
  if (!el) return;
  const r = el.getBoundingClientRect();
  const d = document.createElement('div');
  d.className = 'float-num ' + (cls||'dmg');
  d.textContent = text;
  d.style.left = (r.left + r.width/2) + 'px';
  d.style.top  = (r.top + r.height/3) + 'px';
  $('fx-layer').appendChild(d);
  setTimeout(()=>d.remove(), 950);
}
function shake(el){
  if (!el) return;
  el.classList.add('shake');
  setTimeout(()=>el.classList.remove('shake'), 300);
}

/* ---------------- save ---------------- */
const SAVE = 'gobhir-save-v1';
function loadSave(){
  try{ return JSON.parse(localStorage.getItem(SAVE)) || {}; }catch(e){ return {}; }
}
function saveBest(o){
  const s = loadSave();
  s.bestFloor = Math.max(s.bestFloor||0, o.floor||0);
  if (o.won) s.bestDepth = Math.max(s.bestDepth||0, o.depth||1);
  s.runs = (s.runs||0) + (o.run?1:0);
  s.wins = (s.wins||0) + (o.won?1:0);
  localStorage.setItem(SAVE, JSON.stringify(s));
}

/* ==========================================================
   RUN SETUP
   ========================================================== */
function newRun(depth){
  S.floor = 1;
  S.maxHp = 70;
  S.hp = 70;
  S.gold = 99;
  S.relics = [];
  S.depth = depth || 1;
  S.deck = [];
  for (let i=0;i<5;i++) S.deck.push({id:'strike'});
  for (let i=0;i<4;i++) S.deck.push({id:'defend'});
  S.deck.push({id:'heavy'});
  goMap();
}

function depthMul(){ return 1 + (S.depth-1)*0.18; }

/* ==========================================================
   MAP
   ========================================================== */
function bossForFloor(f){
  if (f === 8)  return 'warden';
  if (f === 16) return 'shadow';
  if (f === 24) return 'heart';
  return null;
}

function goMap(){
  show('map');
  paintTop();
  paintTrack();

  $('map-floor').textContent = bn(S.floor) + '/' + bn(24);
  $('map-hp').textContent = bn(Math.max(0,S.hp)) + '/' + bn(S.maxHp);
  $('map-gold').textContent = bn(S.gold);
  $('map-deck').textContent = bn(S.deck.length);

  const relics = $('map-relics');
  relics.innerHTML = S.relics.map(r =>
    `<div class="relic" title="${RELICS[r].n} — ${RELICS[r].d}">${RELICS[r].i}</div>`).join('');

  const boss = bossForFloor(S.floor);
  const opts = [];

  if (boss){
    $('map-title').textContent = 'প্রহরী দাঁড়িয়ে আছে।';
    opts.push({ k:'boss', id:boss, ico:BOSSES[boss].i, name:BOSSES[boss].n,
      desc:'এটা এড়ানো যাবে না।' });
  } else {
    $('map-title').textContent = 'কোথায় যাবেন?';
    opts.push({ k:'fight', ico:'⚔️', name:'লড়াই', desc:'শত্রু, তারপর পুরস্কার' });
    if (S.floor % 3 === 0 && S.floor > 2)
      opts.push({ k:'elite', ico:'👹', name:'অভিজাত', desc:'কঠিন, কিন্তু ভালো পুরস্কার' });
    if (Math.random() < .55)
      opts.push({ k:'rest', ico:'🔥', name:'বিশ্রাম', desc:'প্রাণ ফেরান বা কার্ড শান দিন' });
    if (Math.random() < .5)
      opts.push({ k:'shop', ico:'🛒', name:'দোকান', desc:'স্বর্ণ খরচ করুন' });
    if (Math.random() < .35)
      opts.push({ k:'event', ico:'❓', name:'রহস্য', desc:'কিছু অজানা আছে' });
  }

  const box = $('map-options');
  box.innerHTML = '';
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'opt' + (o.k === 'boss' ? ' boss-opt' : '');
    b.innerHTML = `<span class="oi">${o.ico}</span>
      <span class="ot"><span class="on">${o.name}</span><span class="od">${o.desc}</span></span>`;
    b.onclick = () => chooseOption(o);
    box.appendChild(b);
  });
}

function paintTop(){}

function paintTrack(){
  const t = $('map-track');
  t.innerHTML = '';
  for (let f=1; f<=24; f++){
    const d = document.createElement('div');
    d.className = 'tick' + (bossForFloor(f) ? ' boss' : '')
      + (f < S.floor ? ' done' : '') + (f === S.floor ? ' now' : '');
    t.appendChild(d);
  }
}

function chooseOption(o){
  if (o.k === 'fight')  startCombat(false);
  else if (o.k === 'elite') startCombat('elite');
  else if (o.k === 'boss')  startCombat('boss', o.id);
  else if (o.k === 'rest')  goRest();
  else if (o.k === 'shop')  goShop();
  else if (o.k === 'event') goEvent();
}

/* ==========================================================
   COMBAT
   ========================================================== */
function makeEnemy(key, kind){
  const src = kind === 'boss' ? BOSSES[key] : ENEMIES[key];
  const m = depthMul();
  const hp = Math.round(rnd(src.hp[0], src.hp[1]) * m);
  const bonus = kind === 'elite' ? 1.35 : 1;
  return {
    key, name:src.n, ico:src.i, pat:src.pat,
    hp: Math.round(hp*bonus), maxHp: Math.round(hp*bonus),
    block:0, str:0, poison:0, weak:0, turn:0, boss:!!src.boss,
    mul: m * (kind === 'elite' ? 1.18 : 1),
  };
}

function startCombat(kind, bossKey){
  S.inCombat = true;
  S.combatOver = false;
  S.winResolved = false;
  S.enemies = [];
  S.block = 0; S.str = 0; S.thorns = 0; S.bladeDance = 0; S.weakTurns = 0;
  S.playedThisTurn = 0;
  S.turn = 0;
  S.hand = []; S.drawPile = []; S.discardPile = []; S.exhaustPile = [];
  S.sel = 0;
  S.kind = kind || 'normal';

  if (kind === 'boss'){
    S.enemies.push(makeEnemy(bossKey, 'boss'));
  } else if (kind === 'elite'){
    const pool = POOLS[Math.min(4, Math.floor((S.floor-1)/5))];
    S.enemies.push(makeEnemy(pick(pool), 'elite'));
  } else {
    const idx = Math.min(4, Math.floor((S.floor-1)/5));
    const pool = POOLS[idx];
    const n = S.floor >= 9 ? (Math.random() < .45 ? 2 : 1) : (Math.random() < .2 ? 2 : 1);
    for (let i=0;i<n;i++) S.enemies.push(makeEnemy(pick(pool), 'normal'));
  }

  S.drawPile = shuffle(S.deck.map(c => ({...c})));
  show('combat');
  startPlayerTurn();
}

function shuffle(a){
  for (let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}

function handSize(){
  return 5 + (S.relics.includes('eye') ? 1 : 0);
}

function startPlayerTurn(){
  S.turn++;
  S.block = 0;
  S.playedThisTurn = 0;
  S.fangUsed = false;
  if (S.relics.includes('shell')) S.block += 3;

  const bonusMana = S.relics.includes('ember') ? 1 : 0;
  S.mana = S.maxMana + bonusMana;

  for (let i=0;i<handSize();i++) drawOne();

  if (S.bladeDance > 0){
    const alive = S.enemies.filter(e => e.hp > 0);
    if (alive.length){
      const t = pick(alive);
      damageEnemy(t, S.bladeDance + S.str);
    }
  }

  log(`— পালা ${bn(S.turn)} —`, 'hl');
  renderCombat();
}

function drawOne(){
  if (!S.drawPile.length){
    if (!S.discardPile.length) return;
    S.drawPile = shuffle(S.discardPile);
    S.discardPile = [];
    log('পুনরায় মিশ্রণ।');
  }
  S.hand.push(S.drawPile.pop());
}

function cardDef(card){ return CARDS[card.id]; }

function log(txt, cls){
  const box = $('combat-log');
  if (!box) return;
  const d = document.createElement('div');
  if (cls) d.className = cls;
  d.innerHTML = txt;
  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
  while (box.children.length > 60) box.removeChild(box.firstChild);
}

function damageEnemy(e, amount, isAttack){
  if (e.hp <= 0) return;
  let dmg = Math.max(0, Math.round(amount));
  if (isAttack && e.weak > 0) dmg = Math.round(dmg * 0.75);
  if (isAttack && S.weakTurns > 0) dmg = Math.round(dmg * 0.75);
  if (isAttack && S.relics.includes('fang') && !S.fangUsed){
    dmg += 3; S.fangUsed = true;
  }
  if (e.block > 0){
    const absorbed = Math.min(e.block, dmg);
    e.block -= absorbed;
    dmg -= absorbed;
  }
  e.hp -= dmg;
  const el = document.querySelector(`.enemy[data-i="${S.enemies.indexOf(e)}"]`);
  if (dmg > 0) floatNum(el, '-' + bn(dmg), 'dmg');
  if (el) shake(el);
  sfxHit();
  if (e.hp <= 0){
    e.hp = 0;
    log(`<span class="hl">${e.name}</span> শেষ।`);
  }
}

function damagePlayer(amount){
  let dmg = Math.max(0, Math.round(amount));
  if (S.block > 0){
    const ab = Math.min(S.block, dmg);
    S.block -= ab;
    dmg -= ab;
    if (ab > 0) floatNum($('player-panel'), '+' + bn(ab) + ' বর্ম', 'blk');
  }
  if (dmg > 0){
    S.hp -= dmg;
    floatNum($('player-panel'), '-' + bn(dmg), 'dmg');
    shake($('player-panel'));
    sfxHit();
  }
  if (S.hp < 0) S.hp = 0;
}

/* ---------------- card play ---------------- */
function playCard(handIdx){
  if (S.busy) return;
  const card = S.hand[handIdx];
  if (!card) return;
  const d = cardDef(card);
  if (S.mana < d.c) return;
  if (d.t === 'curse'){ log('অভিশাপ নিষ্ক্রিয়।'); return; }

  const alive = S.enemies.filter(e => e.hp > 0);
  if (!alive.length) return;
  const target = S.enemies[S.sel] && S.enemies[S.sel].hp > 0 ? S.enemies[S.sel] : alive[0];

  S.mana -= d.c;
  S.hand.splice(handIdx, 1);
  S.playedThisTurn++;
  sfxCard();

  const str = S.str;
  switch (card.id){
    case 'strike': case 'strikeP': {
      const base = card.id === 'strikeP' ? 9 : 6;
      damageEnemy(target, base + str, true);
      break;
    }
    case 'heavy': case 'heavyP': {
      const base = card.id === 'heavyP' ? 19 : 14;
      damageEnemy(target, base + str, true);
      break;
    }
    case 'twin': case 'twinP': {
      const base = card.id === 'twinP' ? 6 : 4;
      damageEnemy(target, base + str, true);
      if (target.hp > 0) damageEnemy(target, base + str, true);
      break;
    }
    case 'cleave': case 'cleaveP': {
      const base = card.id === 'cleaveP' ? 10 : 7;
      alive.forEach(e => damageEnemy(e, base + str, true));
      break;
    }
    case 'poison': case 'poisonP': {
      const bd = card.id === 'poisonP' ? 6 : 4;
      const bp = card.id === 'poisonP' ? 4 : 3;
      damageEnemy(target, bd + str, true);
      target.poison += bp;
      log(`${target.name} বিষাক্ত (${bn(bp)}).`);
      break;
    }
    case 'execute': case 'executeP': {
      const base = card.id === 'executeP' ? 30 : 22;
      damageEnemy(target, base + str, true);
      S.exhaustPile.push(card);
      log('মৃত্যুদণ্ড — কার্ড নিঃশেষ।');
      renderCombat();
      return;
    }
    case 'defend': case 'defendP': {
      S.block += card.id === 'defendP' ? 8 : 5;
      sfxBlock();
      break;
    }
    case 'bulwark': case 'bulwarkP': {
      S.block += card.id === 'bulwarkP' ? 16 : 12;
      sfxBlock();
      break;
    }
    case 'mend': case 'mendP': {
      const h = card.id === 'mendP' ? 8 : 5;
      S.hp = Math.min(S.maxHp, S.hp + h);
      floatNum($('player-panel'), '+' + bn(h), 'heal');
      sfxHeal();
      break;
    }
    case 'weaken': case 'weakenP': {
      target.weak += card.id === 'weakenP' ? 3 : 2;
      break;
    }
    case 'focus': case 'focusP': {
      S.str += card.id === 'focusP' ? 3 : 2;
      log(`শক্তি +${bn(card.id === 'focusP' ? 3 : 2)}.`);
      break;
    }
    case 'thorns': case 'thornsP': {
      S.thorns += card.id === 'thornsP' ? 4 : 3;
      log(`কাঁটা +${bn(card.id === 'thornsP' ? 4 : 3)}.`);
      break;
    }
    case 'bladedance': case 'bladedanceP': {
      S.bladeDance += card.id === 'bladedanceP' ? 6 : 4;
      log(`অসি নাচ +${bn(card.id === 'bladedanceP' ? 6 : 4)}.`);
      break;
    }
    case 'bloodlet': case 'bloodletP': {
      const loss = card.id === 'bloodletP' ? 2 : 3;
      S.hp = Math.max(1, S.hp - loss);
      S.mana += 2;
      break;
    }
  }

  if (d.t !== 'power') S.discardPile.push(card);

  S.enemies.forEach((e,i) => { if (e.hp <= 0 && S.sel === i){ const a = S.enemies.findIndex(x=>x.hp>0); if (a>=0) S.sel = a; } });
  renderCombat();
  checkOutcome();
}

/* ---------------- enemy turn ---------------- */
function endTurn(){
  if (S.busy || S.combatOver) return;
  S.busy = true;
  S.discardPile.push(...S.hand);
  S.hand = [];
  renderCombat();
  log('শত্রুর পালা…', 'hl');

  setTimeout(() => {
    S.enemies.forEach(e => {
      if (e.hp <= 0) return;
      e.block = 0;
    });

    let step = 0;
    const aliveNow = () => S.enemies.filter(e => e.hp > 0);

    const doOne = () => {
      const list = aliveNow();
      if (step >= list.length || S.hp <= 0){ finishEnemyTurn(); return; }
      const e = list[step];
      enemyAct(e);
      renderCombat();
      step++;
      if (S.hp <= 0){ finishEnemyTurn(); return; }
      setTimeout(doOne, 380);
    };
    doOne();
  }, 260);
}

function enemyAct(e){
  // poison ticks first
  if (e.poison > 0){
    const p = e.poison;
    e.hp -= p;
    e.poison = Math.max(0, e.poison - 1);
    const el = document.querySelector(`.enemy[data-i="${S.enemies.indexOf(e)}"]`);
    floatNum(el, '-' + bn(p), 'dmg');
    log(`${e.name}-এর বিষ — ${bn(p)} ক্ষতি।`);
    if (e.hp <= 0){ e.hp = 0; log(`<span class="hl">${e.name}</span> বিষে মরে গেল।`); return; }
  }

  const intent = e.pat[e.turn % e.pat.length];
  e.turn++;

  if (intent.t === 'atk'){
    let dmg = Math.round(intent.v * e.mul) + e.str;
    if (e.weak > 0) dmg = Math.round(dmg * 0.75);
    damagePlayer(dmg);
    log(`${e.name} আঘাত করল — <span class="dmg">${bn(dmg)}</span>.`);
    if (S.thorns > 0) damageEnemy(e, S.thorns, false);
  }
  else if (intent.t === 'blk'){
    e.block += Math.round(intent.v * e.mul);
    log(`${e.name} বর্ম নিল (${bn(Math.round(intent.v*e.mul))}).`, 'blk');
  }
  else if (intent.t === 'str'){
    e.str += intent.v;
    log(`${e.name} শক্তি বাড়াল।`);
  }
  else if (intent.t === 'weak'){
    log(`${e.name} দুর্বলতা দিল।`);
    S.weakTurns = (S.weakTurns||0) + intent.v;
  }
  else if (intent.t === 'poison'){
    damagePlayer(Math.round(intent.v * e.mul));
    log(`${e.name} বিষ ঢালল — ${bn(Math.round(intent.v*e.mul))} ক্ষতি।`, 'dmg');
  }

  if (e.weak > 0) e.weak--;
}

function checkOutcome(){
  if (S.combatOver) return true;
  if (S.hp <= 0){ S.combatOver = true; gameOver(false); return true; }
  if (S.enemies.every(e => e.hp <= 0)){ S.combatOver = true; winCombat(); return true; }
  return false;
}

function finishEnemyTurn(){
  S.busy = false;
  if (S.weakTurns > 0) S.weakTurns--;
  if (checkOutcome()) return;
  startPlayerTurn();
}

/* ---------------- render ---------------- */
function renderCombat(){
  // player
  const pp = $('player-panel');
  const hpPct = Math.max(0, S.hp / S.maxHp * 100);
  const orbs = [];
  for (let i=0;i<Math.max(S.mana, 3);i++)
    orbs.push(`<div class="orb ${i < S.mana ? 'on':''}"></div>`);

  pp.innerHTML = `
    <div class="p-avatar">🧝</div>
    <div class="p-info">
      <div class="p-name"><b>তুমি</b><span>⚡ ${bn(S.mana)} / ${bn(Math.max(S.maxMana,3))}</span></div>
      <div class="bar hpbar"><div class="fill" style="width:${hpPct}%"></div>
        <div class="txt">${bn(Math.max(0,S.hp))} / ${bn(S.maxHp)}</div></div>
      <div class="mana-row">${orbs.join('')}</div>
    </div>
    ${S.block > 0 ? `<div class="block-badge">🛡️ ${bn(S.block)}</div>` : ''}
    ${S.str > 0 || S.thorns > 0 || S.bladeDance > 0 || S.weakTurns > 0 ? `<div style="position:absolute;right:8px;bottom:5px;font-size:10px;color:var(--dim)">
      ${S.str>0?'🔥'+bn(S.str)+' ':''}${S.thorns>0?'🌵'+bn(S.thorns)+' ':''}${S.bladeDance>0?'🌪️'+bn(S.bladeDance)+' ':''}${S.weakTurns>0?'🕸️'+bn(S.weakTurns):''}</div>` : ''}
  `;

  // enemies
  const en = $('enemies');
  en.innerHTML = '';
  S.enemies.forEach((e, i) => {
    const pct = Math.max(0, e.hp / e.maxHp * 100);
    const intent = e.pat[e.turn % e.pat.length];
    let intTxt = '', intCls = '';
    if (e.hp > 0){
      if (intent.t === 'atk'){
        let d = Math.round(intent.v * e.mul) + e.str;
        if (e.weak > 0) d = Math.round(d * .75);
        intTxt = '⚔️ ' + bn(d); intCls = '';
      }
      else if (intent.t === 'blk'){ intTxt = '🛡️ বর্ম'; intCls = 'def'; }
      else if (intent.t === 'str'){ intTxt = '🔥 শক্তি'; intCls = ''; }
      else if (intent.t === 'weak'){ intTxt = '🕸️ দুর্বল'; intCls = 'def'; }
      else if (intent.t === 'poison'){ intTxt = '🧪 বিষ'; intCls = ''; }
    }

    const effs = [];
    if (e.poison > 0) effs.push(`<span class="eff poison">বিষ ${bn(e.poison)}</span>`);
    if (e.weak > 0)   effs.push(`<span class="eff weak">দুর্বল ${bn(e.weak)}</span>`);
    if (e.str > 0)    effs.push(`<span class="eff str">শক্তি ${bn(e.str)}</span>`);

    const d = document.createElement('div');
    d.className = 'enemy' + (i === S.sel ? ' sel' : '') + (e.hp <= 0 ? ' dead' : '');
    d.dataset.i = i;
    d.innerHTML = `
      <div class="e-ico">${e.ico}</div>
      <div class="e-name">${e.name}</div>
      <div class="bar hpbar"><div class="fill" style="width:${pct}%"></div>
        <div class="txt">${bn(Math.max(0,e.hp))}</div></div>
      <div class="e-int ${intCls}">${intTxt}</div>
      <div class="effects">${effs.join('')}</div>
      ${e.block > 0 ? `<div style="font-size:10px;color:var(--block);margin-top:2px">🛡️ ${bn(e.block)}</div>` : ''}
    `;
    d.onclick = () => { if (e.hp > 0){ S.sel = i; renderCombat(); } };
    en.appendChild(d);
  });

  // hand
  const hand = $('hand');
  hand.innerHTML = '';
  S.hand.forEach((card, i) => {
    const d = cardDef(card);
    const can = S.mana >= d.c;
    const el = document.createElement('div');
    el.className = 'card ' + d.t + (can ? '' : ' unplayable');
    el.innerHTML = `
      <div class="c-cost">${bn(d.c)}</div>
      <div class="c-ico">${d.i}</div>
      <div class="c-name">${d.n}</div>
      <div class="c-desc">${d.d}</div>`;
    el.onclick = () => playCard(i);
    hand.appendChild(el);
  });

  // piles
  $('piles').innerHTML = `
    <div class="pile">🂠 <b>${bn(S.drawPile.length)}</b></div>
    <div class="pile">🗑️ <b>${bn(S.discardPile.length)}</b></div>
    <div class="pile">⚡ <b>${bn(S.mana)}</b></div>`;

  const anyPlayable = S.hand.some(c => S.mana >= cardDef(c).c && cardDef(c).t !== 'curse');
  $('btn-end').className = 'end-btn' + (anyPlayable ? '' : ' ready');
}

/* ---------------- combat end ---------------- */
function winCombat(){
  if (S.winResolved) return;
  S.winResolved = true;
  S.busy = false;
  sfxWin();
  const goldBase = S.kind === 'boss' ? 90 : S.kind === 'elite' ? 55 : rnd(14, 26);
  const gold = goldBase + (S.relics.includes('coin') ? 25 : 0);
  S.gold += gold;
  log(`<span class="gld">+${bn(gold)} স্বর্ণ</span>`);

  setTimeout(() => {
    if (S.kind === 'boss'){
      if (S.floor === 24){ gameOver(true); return; }
      // boss reward: relic
      const owned = S.relics;
      const avail = Object.keys(RELICS).filter(r => !owned.includes(r));
      if (avail.length){
        const gained = pick(avail);
        S.relics.push(gained);
        applyRelic(gained);
      }
      S.hp = Math.min(S.maxHp, S.hp + Math.round(S.maxHp * 0.30));
      nextFloor();
      return;
    }
    goReward();
  }, 620);
}

function applyRelic(r){
  if (r === 'heart'){ S.maxHp += 15; S.hp += 15; }
}

function goReward(){
  show('reward');
  const el = $('scr-reward');
  const choices = shuffle(REWARD_POOL.slice()).slice(0, 3);
  el.innerHTML = `
    <div class="panel-scr">
      <div class="panel-title">পুরস্কার</div>
      <div class="panel-sub">একটা কার্ড নিন — নাহলে ডেক হালকা থাকবে।</div>
      <div class="card-choices" id="rw-cards"></div>
      <button class="btn" id="rw-skip">কিছু নেব না</button>
    </div>`;

  const box = $('rw-cards');
  choices.forEach(id => {
    const d = CARDS[id];
    const c = document.createElement('div');
    c.className = 'card ' + d.t;
    c.innerHTML = `<div class="c-cost">${bn(d.c)}</div><div class="c-ico">${d.i}</div>
      <div class="c-name">${d.n}</div><div class="c-desc">${d.d}</div>`;
    c.onclick = () => { S.deck.push({id}); nextFloor(); };
    box.appendChild(c);
  });
  $('rw-skip').onclick = () => nextFloor();
}

function nextFloor(){
  S.floor++;
  S.maxHp += 5;
  S.hp = Math.min(S.maxHp, S.hp + 5);
  if (S.floor === 9)  S.maxMana = 4;
  if (S.floor === 17) S.maxMana = 5;
  if (S.floor > 24){ gameOver(true); return; }
  goMap();
}

/* ---------------- rest ---------------- */
function goRest(){
  show('rest');
  const el = $('scr-rest');
  const heal = Math.round(S.maxHp * 0.40);
  const upgradable = S.deck.filter(c => UPGRADE[c.id]);
  el.innerHTML = `
    <div class="panel-scr">
      <div class="panel-title">🔥 বিশ্রাম</div>
      <div class="panel-sub">আগুনের পাশে বসে কী করবেন?</div>
      <button class="btn primary" id="rest-heal">ঘুমাই
        <small>${bn(heal)} প্রাণ ফেরত</small></button>
      <button class="btn" id="rest-up" ${upgradable.length?'':'disabled'}>কার্ড শান দিই
        <small>একটা কার্ড চিরতরে শক্তিশালী হয়</small></button>
    </div>`;
  $('rest-heal').onclick = () => {
    S.hp = Math.min(S.maxHp, S.hp + heal);
    sfxHeal();
    nextFloor();
  };
  $('rest-up').onclick = () => {
    if (!upgradable.length) return;
    show('reward');
    $('scr-reward').innerHTML = `
      <div class="panel-scr">
        <div class="panel-title">কোন কার্ড?</div>
        <div class="panel-sub">একটা বেছে নিন — এটা স্থায়ী।</div>
        <div class="card-choices" id="up-list"></div>
      </div>`;
    const box = $('up-list');
    upgradable.forEach(c => {
      const d = CARDS[c.id];
      const el2 = document.createElement('div');
      el2.className = 'card ' + d.t;
      el2.innerHTML = `<div class="c-cost">${bn(d.c)}</div><div class="c-ico">${d.i}</div>
        <div class="c-name">${d.n}</div><div class="c-desc">${d.d}</div>`;
      el2.onclick = () => { c.id = UPGRADE[c.id]; nextFloor(); };
      box.appendChild(el2);
    });
  };
}

/* ---------------- shop ---------------- */
function goShop(){
  show('shop');
  const el = $('scr-shop');
  const stock = shuffle(REWARD_POOL.slice()).slice(0, 3).map(id => ({ id, price: rnd(45, 78) }));
  const relicId = pick(Object.keys(RELICS).filter(r => !S.relics.includes(r)) || ['ember']);
  const relicPrice = 140;

  el.innerHTML = `
    <div class="panel-scr">
      <div class="panel-title">🛒 দোকান</div>
      <div class="panel-sub">স্বর্ণ আছে: <b style="color:var(--gold)">${bn(S.gold)}</b></div>
      <div id="shop-list"></div>
      <button class="btn" id="shop-leave">বেরিয়ে যাই</button>
    </div>`;

  const list = $('shop-list');

  stock.forEach(s => {
    const d = CARDS[s.id];
    const row = document.createElement('div');
    row.className = 'shop-item' + (S.gold < s.price ? ' cant' : '');
    row.innerHTML = `<div class="si-ico">${d.i}</div>
      <div class="si-t"><div class="si-n">${d.n}</div><div class="si-d">${d.d}</div></div>
      <div class="si-p">${bn(s.price)}</div>`;
    row.onclick = () => {
      if (S.gold < s.price) return;
      S.gold -= s.price; S.deck.push({id:s.id});
      sfxGold(); row.classList.add('cant');
      $('scr-shop').querySelector('.panel-sub').innerHTML =
        `স্বর্ণ আছে: <b style="color:var(--gold)">${bn(S.gold)}</b>`;
    };
    list.appendChild(row);
  });

  if (relicId){
    const r = RELICS[relicId];
    const row = document.createElement('div');
    row.className = 'shop-item' + (S.gold < relicPrice ? ' cant' : '');
    row.innerHTML = `<div class="si-ico">${r.i}</div>
      <div class="si-t"><div class="si-n">${r.n} <span style="color:var(--gold);font-size:11px">◆</span></div>
      <div class="si-d">${r.d}</div></div><div class="si-p">${bn(relicPrice)}</div>`;
    row.onclick = () => {
      if (S.gold < relicPrice) return;
      S.gold -= relicPrice; S.relics.push(relicId); applyRelic(relicId);
      sfxGold(); row.classList.add('cant');
      $('scr-shop').querySelector('.panel-sub').innerHTML =
        `স্বর্ণ আছে: <b style="color:var(--gold)">${bn(S.gold)}</b>`;
    };
    list.appendChild(row);
  }

  const rm = document.createElement('div');
  rm.className = 'shop-item' + (S.gold < 60 ? ' cant' : '');
  rm.innerHTML = `<div class="si-ico">✂️</div>
    <div class="si-t"><div class="si-n">কার্ড বাদ</div><div class="si-d">একটা দুর্বল কার্ড ডেক থেকে সরান</div></div>
    <div class="si-p">${bn(60)}</div>`;
  rm.onclick = () => {
    if (S.gold < 60) return;
    S.gold -= 60;
    show('reward');
    $('scr-reward').innerHTML = `
      <div class="panel-scr"><div class="panel-title">কোন কার্ড বাদ?</div>
      <div class="card-choices" id="rm-list"></div></div>`;
    const b = $('rm-list');
    S.deck.forEach((c, i) => {
      const d = CARDS[c.id];
      const e2 = document.createElement('div');
      e2.className = 'card ' + d.t;
      e2.innerHTML = `<div class="c-cost">${bn(d.c)}</div><div class="c-ico">${d.i}</div>
        <div class="c-name">${d.n}</div><div class="c-desc">${d.d}</div>`;
      e2.onclick = () => { S.deck.splice(i,1); nextFloor(); };
      b.appendChild(e2);
    });
  };
  list.appendChild(rm);

  $('shop-leave').onclick = () => nextFloor();
}

/* ---------------- events ---------------- */
const EVENTS = [
  { t:'ভাঙা বেদি', d:'একটা পাথরের বেদি। উপরে একটা সোনার পেয়ালা।',
    o:[ { l:'পেয়ালা নিই', f:()=>{ S.gold += 70; sfxGold(); return 'সোনা পেলেন।'; } },
        { l:'হাত দিই না', f:()=>{ S.hp = Math.min(S.maxHp, S.hp+12); return 'শান্তি — প্রাণ ফিরল।'; } } ] },
  { t:'আহত পথিক', d:'একজন আহত মানুষ হাত বাড়িয়ে আছে।',
    o:[ { l:'সাহায্য করি', f:()=>{ if (S.gold>=30){ S.gold-=30; return 'কৃতজ্ঞতা ছাড়া কিছু পেলেন না। কিন্তু ভালো লাগল।'; } return 'হাতে কিছু ছিল না।'; } },
        { l:'এগিয়ে যাই', f:()=>{ S.hp = Math.min(S.maxHp, S.hp+8); return 'বিশ্রাম নিলেন।'; } } ] },
  { t:'কালো কুয়া', d:'গভীর থেকে কিছু একটা ডাকছে।',
    o:[ { l:'নিচে নামি', f:()=>{ const r=Math.random(); if(r<.55){ S.gold+=110; return 'সোনার সিন্দুক!'; } S.hp=Math.max(1,S.hp-18); return 'কিছু কামড়াল।'; } },
        { l:'দূরে থাকি', f:()=>{ return 'বুদ্ধিমানের কাজ।'; } } ] },
  { t:'পুরনো তলোয়ার', d:'মরচে ধরা তলোয়ার, কিন্তু ধার এখনো আছে।',
    o:[ { l:'নিই', f:()=>{ S.deck.push({id:'heavy'}); return 'ভারী আঘাত যোগ হল।'; } },
        { l:'গলিয়ে দিই', f:()=>{ S.gold += 50; sfxGold(); return 'স্বর্ণ পেলেন।'; } } ] },
];

function goEvent(){
  const ev = pick(EVENTS);
  show('event');
  const el = $('scr-event');
  el.innerHTML = `
    <div class="panel-scr">
      <div class="panel-title">${ev.t}</div>
      <div class="panel-sub">${ev.d}</div>
      <div id="ev-btns"></div>
    </div>`;
  const box = $('ev-btns');
  ev.o.forEach(o => {
    const b = document.createElement('button');
    b.className = 'btn';
    b.textContent = o.l;
    b.onclick = () => {
      const res = o.f();
      el.innerHTML = `<div class="panel-scr">
        <div class="panel-title">${ev.t}</div>
        <div class="panel-sub">${res}</div>
        <button class="btn primary" id="ev-go">এগিয়ে যাই</button></div>`;
      $('ev-go').onclick = () => nextFloor();
    };
    box.appendChild(b);
  });
}

/* ---------------- end ---------------- */
function gameOver(won){
  show('end');
  const el = $('scr-end');
  saveBest({ floor:S.floor, won, depth:S.depth, run:true });

  const saved = loadSave();
  if (won){
    el.innerHTML = `
      <div class="end-ico">🏆</div>
      <div class="end-title win">গভীর শেষ</div>
      <div class="end-desc">চব্বিশ তলা। তিন প্রহরী। তুমি নিচে গিয়েছিলে, আর ফিরে এসেছ।<br>
        ${S.depth < 5 ? 'আরও গভীরে যাওয়া যায় — ওখানে অন্ধকার আরও ঘন।' : 'সব গভীরতা শেষ। তুমি এখন কিংবদন্তি।'}</div>
      <div class="end-stats">
        <div class="es"><div class="es-l">প্রাণ বাকি</div><div class="es-v" style="color:var(--hp2)">${bn(S.hp)}</div></div>
        <div class="es"><div class="es-l">স্বর্ণ</div><div class="es-v" style="color:var(--gold)">${bn(S.gold)}</div></div>
        <div class="es"><div class="es-l">ডেক</div><div class="es-v">${bn(S.deck.length)}</div></div>
        <div class="es"><div class="es-l">গভীরতা</div><div class="es-v">${bn(S.depth)}</div></div>
      </div>
      ${S.depth < 5 ? `<button class="btn primary" id="end-next">গভীরতা ${bn(S.depth+1)} — আরও নিচে</button>` : ''}
      <button class="btn" id="end-again">আবার শুরু</button>`;
    if ($('end-next')) $('end-next').onclick = () => newRun(S.depth + 1);
  } else {
    el.innerHTML = `
      <div class="end-ico">💀</div>
      <div class="end-title lose">এখানেই শেষ</div>
      <div class="end-desc">তুমি ${bn(S.floor)} তলায় থেমে গেলে।<br>
        সবচেয়ে দূর: ${bn(saved.bestFloor||S.floor)} তলা।<br><br>
        মৃত্যু মানে শেষ নয় — প্রতিবার নতুন কার্ড, নতুন পথ।</div>
      <div class="end-stats">
        <div class="es"><div class="es-l">তলা</div><div class="es-v">${bn(S.floor)}</div></div>
        <div class="es"><div class="es-l">স্বর্ণ</div><div class="es-v" style="color:var(--gold)">${bn(S.gold)}</div></div>
        <div class="es"><div class="es-l">ডেক</div><div class="es-v">${bn(S.deck.length)}</div></div>
        <div class="es"><div class="es-l">সেরা</div><div class="es-v" style="color:var(--gold)">${bn(saved.bestFloor||S.floor)}</div></div>
      </div>
      <button class="btn primary" id="end-again">আবার নামি</button>`;
  }
  $('end-again').onclick = () => newRun(1);
  S.inCombat = false;
}

/* ---------------- wiring ---------------- */
$('btn-start').onclick = () => { sfxCard(); newRun(1); };
$('btn-end').onclick = () => endTurn();
$('btn-mute').onclick = (e) => {
  MUTED = !MUTED;
  e.target.textContent = MUTED ? '🔇' : '🔊';
};

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' '){
    if (!$('scr-combat').classList.contains('hidden')){ e.preventDefault(); endTurn(); }
  }
  const n = Number(e.key);
  if (n >= 1 && n <= 9 && !$('scr-combat').classList.contains('hidden')){
    if (S.hand[n-1]) playCard(n-1);
  }
});

// title meta
(function initTitle(){
  const s = loadSave();
  const bits = [];
  if (s.bestFloor) bits.push('সেরা তলা: ' + bn(s.bestFloor));
  if (s.wins) bits.push('জয়: ' + bn(s.wins));
  if (s.bestDepth > 1) bits.push('সেরা গভীরতা: ' + bn(s.bestDepth));
  $('meta-info').textContent = bits.join(' · ');
})();
