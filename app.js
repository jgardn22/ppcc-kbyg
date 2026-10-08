/* ============================================================
   PPCC 2026 · Know Before You Go · Healthcare & Life Sciences
   Vanilla JS. No dependencies. Content lives in data.js.
   ============================================================ */
(() => {
  'use strict';
  const D = window.KBYG;
  if (!D) return;

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function h(tag, props, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (v === false || v == null) continue;
      if (k === 'class') el.className = v;
      else if (k === 'dataset') Object.assign(el.dataset, v);
      else if (k === 'on') for (const [ev, fn] of Object.entries(v)) el.addEventListener(ev, fn);
      else el.setAttribute(k, v === true ? '' : v);
    }
    const add = (c) => {
      if (c == null || c === false) return;
      if (Array.isArray(c)) c.forEach(add);
      else el.append(c.nodeType ? c : document.createTextNode(String(c)));
    };
    kids.forEach(add);
    return el;
  }

  const ICONS = {
    pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm.75 5v5.2l4 2.4-.75 1.25-4.75-2.85V7h1.5z"/></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7 .5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM9 13c-3.3 0-6 1.8-6 4v2h12v-2c0-2.2-2.7-4-6-4zm7 .5c-.6 0-1.2.1-1.7.2 1.1.9 1.7 2.1 1.7 3.3v2h5v-1.5c0-2-2.2-4-5-4z"/></svg>',
    ext: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5z"/></svg>',
    chev: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21M10.5 7.5v6M7.5 10.5h6"/></svg>'
  };
  const icon = (name, size) => {
    const t = document.createElement('template');
    t.innerHTML = ICONS[name];
    const s = t.content.firstElementChild;
    s.classList.add('ico');
    if (size) { s.setAttribute('width', size); s.setAttribute('height', size); }
    return s;
  };
  const extLink = (label, href, cls) =>
    h('a', { class: cls || null, href, target: '_blank', rel: 'noopener noreferrer' },
      label, ' ', icon('ext', 13), h('span', { class: 'sr-only' }, ' (opens in a new tab)'));

  function copyPlain(text) {
    const legacy = () => new Promise((resolve, reject) => {
      const prev = document.activeElement;
      const ta = h('textarea', { 'aria-hidden': 'true', readonly: true, style: 'position:fixed;left:-9999px;top:0;opacity:0' });
      ta.value = text;
      document.body.append(ta);
      ta.focus({ preventScroll: true });
      ta.select();
      ta.setSelectionRange(0, text.length);
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      ta.remove();
      if (prev && prev.focus) prev.focus({ preventScroll: true });
      if (ok) resolve(); else reject(new Error('copy failed'));
    });
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).catch(legacy);
    return legacy();
  }

  // the code stays visible and selectable even when copying is blocked
  function codeChip(code) {
    const status = h('span', { class: 'sr-only', role: 'status' });
    const btn = h('button', { class: 'codechip-btn', type: 'button', 'aria-label': `Copy invitation code ${code}` }, 'Copy');
    let timer;
    btn.addEventListener('click', () => {
      copyPlain(code).then(
        () => { btn.textContent = 'Copied'; status.textContent = 'Invitation code copied.'; },
        () => { btn.textContent = 'Select code'; status.textContent = 'Copying was blocked. Select the code to copy it.'; });
      clearTimeout(timer);
      timer = setTimeout(() => { btn.textContent = 'Copy'; status.textContent = ''; }, 2400);
    });
    return h('span', { class: 'codewrap' },
      h('span', { class: 'codechip' }, h('span', { class: 'codechip-k' }, 'Invitation code'), h('b', { class: 'codechip-v' }, code), btn),
      status);
  }

  /* ---------- dates and times (Pacific / Las Vegas) ---------- */
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const todayOverride = new URLSearchParams(location.search).get('today');
  const ptToday = () => (todayOverride && /^\d{4}-\d{2}-\d{2}$/.test(todayOverride))
    ? todayOverride
    : new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  const utc = (iso) => new Date(iso + 'T00:00:00Z');
  const dayDiff = (a, b) => Math.round((utc(b) - utc(a)) / 86400000);
  const fmtMD = (iso) => `${MONTHS[utc(iso).getUTCMonth()]} ${utc(iso).getUTCDate()}`;
  const fmtDate = (iso) => `${DOW[utc(iso).getUTCDay()]}, ${fmtMD(iso)}`;
  const fmtTime = (t) => {
    if (!t) return '';
    let [H, M] = t.split(':').map(Number);
    const ap = H >= 12 ? 'PM' : 'AM';
    H = H % 12 || 12;
    return `${H}:${String(M).padStart(2, '0')} ${ap}`;
  };
  const mins = (t) => { const [H, M] = t.split(':').map(Number); return H * 60 + M; };
  const fmtMins = (m) => fmtTime(`${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`);
  const dayLabel = (iso) => (D.eventDays.find(d => d.date === iso) || {}).label || fmtDate(iso);

  /* ---------- storage ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('ppcc26-kbyg:' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('ppcc26-kbyg:' + k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };

  /* ============================================================
     Tabs + routing
     ============================================================ */
  const tabIds = D.tabs.map(t => t.id);
  const tablist = $('#tablist');

  function buildTabs() {
    D.tabs.forEach(t => {
      tablist.append(h('button', {
        class: 'tab', type: 'button', role: 'tab', id: 'tab-' + t.id,
        'aria-controls': 'panel-' + t.id, 'aria-selected': 'false', tabindex: '-1',
        on: { click: () => { location.hash = '#' + t.id; } }
      }, t.label, t.id === 'days' ? h('span', { class: 'soon' }, 'Soon') : null));
    });
    tablist.addEventListener('keydown', (e) => {
      const i = tabIds.indexOf(currentTab());
      let n = null;
      if (e.key === 'ArrowRight') n = (i + 1) % tabIds.length;
      else if (e.key === 'ArrowLeft') n = (i - 1 + tabIds.length) % tabIds.length;
      else if (e.key === 'Home') n = 0;
      else if (e.key === 'End') n = tabIds.length - 1;
      if (n == null) return;
      e.preventDefault();
      location.hash = '#' + tabIds[n];
      $('#tab-' + tabIds[n]).focus();
    });
  }

  const parseHash = () => {
    const [tab, sub] = location.hash.replace(/^#/, '').split('/');
    return { tab, sub: sub || '' };
  };
  const hashTab = () => {
    const { tab } = parseHash();
    return tabIds.includes(tab) ? tab : null;
  };
  let active = null;
  const currentTab = () => active || hashTab() || 'start';

  /* ----- hamburger menu (phones and small tablets) ----- */
  const menuBtn = $('#menu-btn'), navMenu = $('#nav-menu'), navScrim = $('#nav-scrim');
  const phoneNav = matchMedia('(max-width: 900px)');

  function setMenu(open, returnFocus) {
    if (open === !navMenu.hidden) return;
    navMenu.hidden = !open;
    navScrim.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('menu-open', open);
    if (open) ($('.nav-item[aria-current="page"]', navMenu) || $('.nav-item', navMenu)).focus({ preventScroll: true });
    else if (returnFocus) menuBtn.focus({ preventScroll: true });
  }

  function buildMenu() {
    D.tabs.forEach(t => navMenu.append(h('a', { class: 'nav-item', href: '#' + t.id, dataset: { tab: t.id } },
      h('span', { class: 'nav-label' }, t.label),
      t.id === 'days' ? h('span', { class: 'mini-soon' }, 'Coming soon') : null,
      icon('arrow', 18))));
    menuBtn.addEventListener('click', () => setMenu(navMenu.hidden));
    navScrim.addEventListener('click', () => setMenu(false, true));
    navMenu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    // keyboard users tabbing past the last item should not be left behind an open menu
    navMenu.addEventListener('focusout', (e) => {
      if (!navMenu.hidden && e.relatedTarget && !navMenu.contains(e.relatedTarget) && e.relatedTarget !== menuBtn) setMenu(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !navMenu.hidden) { e.preventDefault(); setMenu(false, true); }
    });
    phoneNav.addEventListener('change', () => { if (!phoneNav.matches) setMenu(false); });
  }

  function activate(id, userLink) {
    if (id === active) return;
    active = id;
    tabIds.forEach(t => {
      const sel = t === id;
      const tab = $('#tab-' + t);
      tab.setAttribute('aria-selected', String(sel));
      tab.tabIndex = sel ? 0 : -1;
      $('#panel-' + t).hidden = !sel;
    });
    const label = D.tabs.find(t => t.id === id).label;
    $('#menu-current').textContent = label;
    // every tab needs one page heading; Start Here already has its visible h1
    const docH1 = $('#doc-h1');
    docH1.hidden = id === 'start';
    docH1.textContent = `${label}: Know Before You Go for healthcare customers at PPCC 2026`;
    $$('.nav-item', navMenu).forEach(a => {
      if (a.dataset.tab === id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    document.title = id === 'start'
      ? 'Know Before You Go · PPCC 2026 for Healthcare & Life Sciences'
      : `${label} · Know Before You Go · PPCC 2026`;
    window.scrollTo({ top: 0, behavior: 'auto' });
    const selTab = $('#tab-' + id);
    if (selTab.scrollIntoView) selTab.scrollIntoView({ inline: 'center', block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
    if (userLink) $('#panel-' + id).focus({ preventScroll: true });
    updateFab();
  }
  /* ----- routing: #tab, plus #ground/maps, #ground/map-<id> and #<tab>/meet ----- */
  let maps = null, meet = null, pushedOverlay = false, pendingOpener = null;

  function syncOverlays(tab, sub, initial) {
    const hadOverlay = maps.isOpen() || meet.isOpen();
    const mapId = tab === 'ground' && sub.startsWith('map-') ? sub.slice(4) : null;
    if (mapId && D.maps.items.some(m => m.id === mapId)) {
      if (!maps.isOpen() || maps.currentId() !== mapId) maps.open(mapId, pendingOpener);
    } else if (maps.isOpen()) maps.close();
    if (sub === 'meet') { if (!meet.isOpen()) meet.open(pendingOpener); }
    else if (meet.isOpen()) meet.close();
    if (!maps.isOpen() && !meet.isOpen()) { pushedOverlay = false; pendingOpener = null; }
    // only scroll when arriving at the maps; closing a viewer or dialog must leave the page where it was
    if (tab === 'ground' && sub === 'maps' && !hadOverlay) {
      requestAnimationFrame(() => $('#maps').scrollIntoView({ block: 'start', behavior: (initial || reduceMotion) ? 'instant' : 'smooth' }));
    }
  }

  function route(initial) {
    const { sub } = parseHash();
    const t = hashTab() || (initial ? 'start' : null);
    if (t) activate(t, !initial);
    syncOverlays(t, sub, initial);
  }

  function pushOverlay(hash, opener) {
    pendingOpener = opener || null;
    pushedOverlay = true;
    location.hash = hash;
  }
  function popOverlay() {
    if (pushedOverlay) { pushedOverlay = false; history.back(); return; }
    history.replaceState(null, '', location.pathname + location.search + '#' + currentTab());
    syncOverlays(currentTab(), '', false);
  }
  const openMeet = (opener) => pushOverlay('#' + currentTab() + '/meet', opener);
  const openMap = (id, opener) => pushOverlay('#ground/map-' + id, opener);

  window.addEventListener('hashchange', () => { setMenu(false); route(false); });

  /* ============================================================
     Start Here
     ============================================================ */
  function renderCountdown() {
    const el = $('#countdown');
    const d = dayDiff(ptToday(), '2026-10-27');
    if (d > 1) el.textContent = `${d} days to go`;
    else if (d === 1) el.textContent = 'Tomorrow';
    else if (d <= 0 && d >= -2) el.textContent = `Day ${1 - d} of 3, happening now`;
    else { el.textContent = 'Thanks for joining us'; }
  }

  /* ----- video ----- */
  let iframe = null;
  const embedUrl = (t) =>
    `https://www.youtube-nocookie.com/embed/${D.video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1${t ? '&start=' + t : ''}`;
  const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  function setActiveChapter(t) {
    $$('.chapter').forEach(b => {
      if (Number(b.dataset.t) === t) b.setAttribute('aria-current', 'true');
      else b.removeAttribute('aria-current');
    });
  }
  function playVideo(t = 0) {
    const frame = $('#video-frame');
    if (!iframe) {
      iframe = h('iframe', {
        src: embedUrl(t), title: D.video.title,
        allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        allowfullscreen: true, referrerpolicy: 'strict-origin-when-cross-origin'
      });
      frame.textContent = '';
      frame.append(iframe);
    } else {
      iframe.src = embedUrl(t);
    }
    setActiveChapter(t);
    const r = frame.getBoundingClientRect();
    if (r.top < 120 || r.bottom > innerHeight) frame.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  }
  function goToVideo(t) {
    if (currentTab() !== 'start') {
      location.hash = '#start';
      setTimeout(() => playVideo(t), 60);
    } else playVideo(t);
  }

  function renderVideo() {
    $('#video-facade').addEventListener('click', () => playVideo(0));
    $$('[data-action="play-video"]').forEach(b => b.addEventListener('click', () => playVideo(0)));
    const list = $('#chapters');
    D.video.chapters.forEach(c => {
      list.append(h('li', {}, h('button', { class: 'chapter', type: 'button', dataset: { t: c.t }, on: { click: () => playVideo(c.t) } },
        h('time', {}, mmss(c.t)),
        h('span', {}, h('b', {}, c.title), h('small', {}, c.blurb)))));
    });
    $('#video-caption').append(
      `Presented by the Power HUG team: ${D.video.presenters}. `,
      extLink('Watch on YouTube', D.video.watchUrl), ' · ', extLink('Open the deck', D.video.deckUrl));

    const chap = $('.chapters');
    const more = h('button', { class: 'chapters-more', type: 'button', 'aria-expanded': 'false' });
    const moreLabel = () => {
      const open = chap.classList.contains('open');
      more.setAttribute('aria-expanded', String(open));
      more.textContent = '';
      more.append(open ? 'Show fewer topics' : `Show all ${D.video.chapters.length} topics`, icon('chev', 16));
    };
    more.addEventListener('click', () => { chap.classList.toggle('open'); moreLabel(); });
    moreLabel();
    chap.append(more);
  }

  /* ----- due soon ----- */
  function dueInfo(item) {
    if (!item.due) return null;
    const left = dayDiff(ptToday(), item.due);
    const md = fmtMD(item.due);
    if (item.soft) return left >= 0 ? { cls: 'expect', text: item.dueLabel || `Expected ${md}` } : { cls: 'past', text: 'Check Whova now' };
    if (left > 1) return { cls: 'soonp', text: `Due ${md} · ${left} days left` };
    if (left === 1) return { cls: 'soonp', text: `Due tomorrow · ${md}` };
    if (left === 0) return { cls: 'today', text: `Due today · ${md}` };
    return { cls: 'past', text: `Passed ${md}` };
  }
  const pillEl = (info) => info ? h('span', { class: 'pill ' + info.cls }, info.text) : null;

  function renderDue() {
    const done = store.get('done', {});
    const today = ptToday();
    const items = D.checklist
      .filter(i => i.due && !done[i.id] && dayDiff(today, i.due) >= 0)
      .sort((a, b) => a.due.localeCompare(b.due)).slice(0, 3);
    const band = $('#due-band');
    band.hidden = !items.length;
    const strip = $('#due-strip');
    strip.textContent = '';
    items.forEach(i => {
      strip.append(h('li', { class: 'stub' },
        h('div', { class: 'stub-date' }, h('span', {}, MONTHS[utc(i.due).getUTCMonth()]), h('b', {}, String(utc(i.due).getUTCDate()))),
        h('div', { class: 'stub-body' }, h('h3', {}, i.title), pillEl(dueInfo(i)))));
    });
  }

  /* ----- feature cards ----- */
  const featuredEvent = () => D.events.find(e => e.featured);

  function renderFeatures() {
    const r = D.roundtable;
    $('#feature-roundtable').append(
      h('span', { class: 'kicker' }, 'Don’t miss'),
      h('h3', {}, r.title),
      r.subtitle ? h('p', { class: 'feature-sub' }, r.subtitle) : null,
      h('div', { class: 'meta' }, h('span', { class: 'chip' }, r.when), h('span', { class: 'chip' }, r.time), r.room ? h('span', { class: 'chip' }, r.room) : null),
      h('p', {}, r.blurb),
      h('div', { class: 'feature-links' },
        h('a', { class: 'btn ghost sm', href: '#days' }, 'See Wednesday’s plan'),
        r.mapId ? h('a', { class: 'textlink', href: '#ground/map-' + r.mapId }, 'Find the room on the map') : null));
    const e = featuredEvent();
    $('#feature-evening').append(
      h('span', { class: 'kicker' }, 'Tuesday night'),
      h('h3', {}, `${e.host} ${e.title}`),
      h('div', { class: 'meta' },
        h('span', { class: 'chip' }, `${fmtTime(e.start)} to ${fmtTime(e.end)}`),
        h('span', { class: 'chip' }, e.venue),
        h('span', { class: 'chip' }, e.limit)),
      h('p', {}, 'Meet healthcare and life sciences peers and Microsoft insiders over drinks and small plates. No stage, no slides, no pitch.'),
      h('div', { class: 'feature-links' },
        extLink(e.reg.label, e.reg.url, 'btn primary sm'),
        h('a', { class: 'textlink', href: '#evenings' }, 'All evening events')));
  }

  const GUIDE_DESC = {
    before: 'A checklist with live deadlines, plus a way to request time with product group leaders. Your progress saves on this device.',
    ground: 'Venue maps you can zoom, badge pickup, the keynote-morning route and tips for getting around the MGM Grand.',
    evenings: 'Healthcare happy hours first, then every open event, with a Tuesday overlap timeline.',
    days: 'Our recommended sessions, one day at a time.',
    faq: 'Official answers and the links worth bookmarking.'
  };
  function renderGuide() {
    const ol = $('#guide-index');
    D.tabs.filter(t => t.id !== 'start').forEach((t, i) => {
      ol.append(h('li', {}, h('a', { href: '#' + t.id },
        h('span', { class: 'guide-num' }, String(i + 1).padStart(2, '0')),
        h('span', {}, h('span', { class: 'guide-title' }, t.label, t.id === 'days' ? h('span', { class: 'mini-soon' }, 'Coming soon') : null),
          h('span', { class: 'guide-desc', style: 'display:block' }, GUIDE_DESC[t.id])),
        h('span', { class: 'guide-arrow' }, icon('arrow', 22)))));
    });
  }

  /* ============================================================
     Checklist
     ============================================================ */
  function renderChecklist() {
    const root = $('#checklist');
    root.textContent = '';
    const done = store.get('done', {});
    D.checklistGroups.forEach(g => {
      const items = D.checklist.filter(i => i.group === g.id);
      const n = items.filter(i => done[i.id]).length;
      root.append(h('section', { class: 'cl-group', 'aria-labelledby': 'g-' + g.id },
        h('h3', { id: 'g-' + g.id }, g.title, h('span', { dataset: { gcount: g.id } }, `${n} of ${items.length}`)),
        h('ul', {}, items.map(it => checklistRow(it, !!done[it.id])))));
    });
    renderProgress();
  }

  function checklistRow(it, isDone) {
    const links = [];
    (it.links || []).forEach(l => {
      links.push(l.href.startsWith('mailto:') ? h('a', { href: l.href }, l.label) : extLink(l.label, l.href));
    });
    if (it.code) links.push(codeChip(it.code));
    const actions = [].concat(it.action || []);
    if (actions.includes('video')) links.push(h('button', { type: 'button', on: { click: () => goToVideo(0) } }, 'Play the video'));
    if (actions.includes('tab:evenings')) links.push(h('a', { href: '#evenings' }, 'See the evening events'));
    if (actions.includes('tab:ground')) links.push(h('a', { href: '#ground' }, 'See badge pickup hours'));
    if (actions.includes('maps')) links.push(h('a', { href: '#ground/maps' }, 'Open the maps'));
    actions.filter(a => a.startsWith('map:')).forEach(a => links.push(h('a', { href: '#ground/map-' + a.slice(4) }, 'Find the room on the map')));
    if (actions.includes('meet')) links.push(h('button', { class: 'btn primary sm', type: 'button', on: { click: (e) => openMeet(e.currentTarget) } }, 'Draft the request email'));
    const id = 'chk-' + it.id;
    return h('li', { class: 'cl-item' + (isDone ? ' done' : ''), dataset: { id: it.id } },
      h('input', { class: 'check', type: 'checkbox', id, checked: isDone, on: { change: (e) => toggleDone(it, e.target.checked) } }),
      h('div', {},
        h('label', { class: 'cl-title', for: id }, it.title),
        h('p', { class: 'cl-detail' }, it.detail),
        links.length ? h('div', { class: 'cl-links' }, links) : null),
      h('div', { class: 'cl-side' }, pillEl(dueInfo(it))));
  }

  function toggleDone(it, val) {
    const done = store.get('done', {});
    if (val) done[it.id] = true; else delete done[it.id];
    store.set('done', done);
    const row = $(`.cl-item[data-id="${it.id}"]`);
    if (row) row.classList.toggle('done', val);
    D.checklistGroups.forEach(g => {
      const items = D.checklist.filter(i => i.group === g.id);
      const el = $(`[data-gcount="${g.id}"]`);
      if (el) el.textContent = `${items.filter(i => done[i.id]).length} of ${items.length}`;
    });
    renderProgress();
    renderDue();
  }

  function renderProgress() {
    const done = store.get('done', {});
    const total = D.checklist.length;
    const n = D.checklist.filter(i => done[i.id]).length;
    const root = $('#progress');
    root.textContent = '';
    const kids = [
      h('div', { class: 'meter', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(total), 'aria-valuenow': String(n), 'aria-label': 'Checklist progress' }, h('i', { style: `width:${Math.round(n / total * 100)}%` })),
      h('span', { class: 'progress-text' }, n === total ? 'All done. See you in Las Vegas.' : `${n} of ${total} done`)
    ];
    if (n) kids.push(h('button', { class: 'linkbtn', type: 'button', on: { click: () => { store.set('done', {}); renderChecklist(); renderDue(); } } }, 'Reset'));
    root.append(...kids);
  }

  /* ============================================================
     On the ground
     ============================================================ */
  function renderBadgeHours() {
    const today = ptToday();
    const body = $('#badge-hours');
    D.badgeHours.forEach(r => {
      body.append(h('tr', { class: r.date === today ? 'today' : null },
        h('td', {}, r.day, r.tip ? h('span', { class: 'htag' }, r.tip) : null),
        h('td', {}, r.hours)));
    });
  }

  /* ============================================================
     Evening events
     ============================================================ */
  const state = { day: 'all', aud: 'all', reg: false, view: 'list' };
  let plan = store.get('plan', []);

  const canPlan = (e) => !e.noPlan && !!e.day && !!e.start;
  const span = (e) => { const s = mins(e.start); return [s, e.end ? mins(e.end) : s + 120]; };
  const timed = (e) => !!(e.day && e.start && e.group !== 'exec');
  const cmp = (a, b) => (a.start || a.sortAt ? mins(a.start || a.sortAt) : 9999) - (b.start || b.sortAt ? mins(b.start || b.sortAt) : 9999) || a.host.localeCompare(b.host);

  function passes(e) {
    if (state.day !== 'all' && !(e.days ? e.days.includes(state.day) : e.day === state.day)) return false;
    if (state.aud !== 'all' && e.audience !== state.aud) return false;
    if (state.reg && !(e.reg && e.reg.url)) return false;
    return true;
  }

  const tagEl = (aud) => h('span', { class: 'tag ' + aud }, D.audiences[aud]);

  function timeBlock(e) {
    if (e.options) return [h('b', { class: 'opt' }, e.options[0]), e.options.length > 1 ? h('span', {}, e.options.slice(1).join(' ')) : null];
    if (e.start) return [h('b', {}, fmtTime(e.start)), h('span', {}, e.end ? 'to ' + fmtTime(e.end) : (e.endNote || ''))];
    const [a, ...rest] = (e.timeNote || 'TBA').split(' · ');
    return [h('b', {}, a), h('span', {}, rest.join(' · '))];
  }

  function regButton(e) {
    if (e.reg && e.reg.url) return extLink(e.reg.label, e.reg.url, 'btn primary sm');
    if (e.access === 'ask') {
      const subject = encodeURIComponent(`PPCC 2026: ${e.host} ${e.title}`);
      return h('a', { class: 'btn ghost sm', href: `mailto:${D.contact.email}?subject=${subject}` }, 'Ask your Microsoft team');
    }
    return null;
  }

  function planButton(e) {
    if (!canPlan(e)) return null;
    const btn = h('button', { class: 'planbtn', type: 'button', dataset: { plan: e.id }, 'aria-pressed': String(plan.includes(e.id)), on: { click: () => togglePlan(e.id) } });
    btn.textContent = plan.includes(e.id) ? 'In my plan' : 'Add to plan';
    return btn;
  }

  function evRow(e) {
    const accessText = e.access === 'badge' ? D.accessLabels.badge : e.access === 'open' ? D.accessLabels.open : (e.reg ? D.accessLabels.register : null);
    return h('article', { class: 'ev', id: 'ev-' + e.id },
      h('div', { class: 'ev-time' }, timeBlock(e)),
      h('div', { class: 'ev-main' },
        h('div', { class: 'ev-tags' }, tagEl(e.audience), accessText ? h('span', { class: 'tag tbd' }, accessText) : null),
        h('h4', {}, e.title),
        h('p', { class: 'ev-host' }, 'Hosted by ', extLink(e.host, e.hostUrl)),
        h('div', { class: 'ev-meta' }, h('span', {}, e.venue), h('span', {}, e.kind)),
        h('p', { class: 'ev-sum' }, e.summary),
        e.regNote ? h('p', { class: 'ev-note' }, e.regNote) : null),
      h('div', { class: 'ev-actions' }, regButton(e), planButton(e)));
  }

  function busiestDay() {
    let best = null;
    D.eventDays.forEach(d => {
      const p = peakFor(d.date, D.events);
      const n = p ? p.n : 0;
      if (!best || n > best.n) best = { date: d.date, n };
    });
    return best && best.date;
  }

  function renderList() {
    const root = $('#events-list');
    root.textContent = '';
    const evs = D.events.filter(e => !e.featured && passes(e));
    const busy = busiestDay();
    let any = false;
    D.eventDays.forEach(d => {
      const items = evs.filter(e => !e.group && e.day === d.date).sort(cmp);
      if (!items.length) return;
      any = true;
      root.append(h('section', { class: 'day-group', 'aria-label': d.label },
        h('h3', { class: 'day-title' }, d.label, h('small', {}, d.n), d.date === busy ? h('span', { class: 'tag open' }, 'Busiest night') : null),
        items.map(evRow)));
    });
    const exec = evs.filter(e => e.group === 'exec');
    if (exec.length) {
      any = true;
      root.append(h('section', { class: 'day-group', 'aria-label': 'Executive experiences' },
        h('h3', { class: 'day-title' }, 'Executive experiences', h('small', {}, 'VP and C-suite · nomination')),
        exec.map(evRow)));
    }
    const pend = evs.filter(e => e.group === 'pending');
    if (pend.length) {
      any = true;
      root.append(h('section', { class: 'day-group', 'aria-label': 'Still being finalized' },
        h('h3', { class: 'day-title' }, 'Still being finalized', h('small', {}, 'Details coming')),
        pend.map(evRow)));
    }
    if (!any) {
      root.append(h('p', { class: 'empty' }, state.day === '2026-10-29'
        ? 'Nothing is listed for Thursday. The conference wraps mid-afternoon, so there are no evening events.'
        : 'No events match these filters. Try clearing one.'));
    }
  }

  /* ----- overlap math ----- */
  function peakFor(day, events) {
    const items = events.filter(e => e.day === day && timed(e)).map(span);
    if (!items.length) return null;
    const START = 12 * 60, END = 22 * 60;
    let max = 0, runStart = null, best = null;
    for (let t = START; t <= END; t += 15) {
      const n = items.filter(([s, en]) => s <= t && t < en).length;
      if (n > max) { max = n; best = [t, t + 15]; runStart = t; }
      else if (n === max && best && t === best[1]) { best[1] = t + 15; }
    }
    return max >= 3 ? { n: max, from: best[0], to: best[1] } : null;
  }

  function renderInsight() {
    const el = $('#events-insight');
    let txt = '';
    if (state.day === 'all') {
      const best = D.eventDays.map(d => ({ d, p: peakFor(d.date, D.events) })).filter(x => x.p).sort((a, b) => b.p.n - a.p.n)[0];
      if (best) txt = `${best.d.label} is the busiest night: ${best.p.n} events overlap between ${fmtMins(best.p.from)} and ${fmtMins(best.p.to)}. It’s fine to register for more than one and hop between them.`;
    } else {
      const d = D.eventDays.find(x => x.date === state.day);
      const p = peakFor(state.day, D.events);
      if (state.day === '2026-10-29') txt = 'Thursday: the conference wraps mid-afternoon, so no evening events are listed.';
      else if (state.day === '2026-10-26') txt = 'Monday is arrival night. Only hosted dinners and executive experiences are listed, and the conference itself starts Tuesday.';
      else if (p) txt = `${d.label}: up to ${p.n} events overlap between ${fmtMins(p.from)} and ${fmtMins(p.to)}.`;
    }
    el.textContent = txt;
  }

  /* ----- featured card ----- */
  function renderFeatured() {
    const e = featuredEvent();
    const root = $('#featured-event');
    const [hh, mm] = e.start.split(':').map(Number);
    const big = `${hh % 12 || 12}${mm ? ':' + String(mm).padStart(2, '0') : ''}`;
    root.append(h('article', { class: 'featured', id: 'ev-' + e.id },
      h('div', { class: 'featured-body' },
        h('div', { class: 'featured-kick' }, tagEl('hls'), h('span', {}, 'Featured evening event')),
        h('h3', {}, `${e.host} ${e.title}`),
        h('p', { class: 'hostline' }, 'Hosted by ', extLink(e.host, e.hostUrl)),
        h('div', { class: 'kv' },
          h('span', {}, icon('clock', 16), `${fmtDate(e.day)} · ${fmtTime(e.start)} to ${fmtTime(e.end)}`),
          h('span', {}, icon('pin', 16), e.venue),
          h('span', {}, icon('users', 16), e.limit)),
        h('p', {}, e.summary),
        e.tip ? h('p', { class: 'tipbox' }, e.tip) : null,
        h('div', { class: 'featured-actions' }, extLink(e.reg.label, e.reg.url, 'btn primary'), planButton(e)),
        h('p', { class: 'featured-note' }, e.regNote)),
      h('div', { class: 'featured-time', 'aria-hidden': 'true' },
        h('span', { class: 'ft-day' }, fmtDate(e.day)),
        h('span', { class: 'ft-big' }, big, h('small', {}, hh >= 12 ? 'PM' : 'AM')),
        h('span', { class: 'ft-end' }, `to ${fmtTime(e.end)}`),
        h('span', { class: 'ft-cap' }, 'Pacific time'))));
  }

  /* ----- controls ----- */
  function buildControls() {
    const root = $('#controls');
    const chips = (label, key, opts) => h('div', { class: 'chipgroup', role: 'group', 'aria-label': label },
      h('span', { class: 'lbl' }, label),
      h('div', { class: 'chips' }, opts.map(([val, text]) => h('button', { class: 'chipbtn', type: 'button', dataset: { key, val }, 'aria-pressed': 'false', on: { click: () => setFilter(key, val) } }, text))));
    root.append(
      chips('Day', 'day', [['all', 'All'], ...D.eventDays.map(d => [d.date, `${d.short} ${d.n.replace('Oct ', '')}`])]),
      chips('Show', 'aud', [['all', 'Everything'], ['hls', 'Healthcare'], ['open', 'All industries'], ['exec', 'Executive'], ['official', 'Official PPCC']]),
      h('label', { class: 'switch' },
        h('input', { type: 'checkbox', id: 'reg-only', on: { change: (e) => { state.reg = e.target.checked; renderEvents(); } } }),
        'Has a registration link'),
      h('div', { class: 'seg', role: 'group', 'aria-label': 'View' },
        h('button', { type: 'button', dataset: { view: 'list' }, 'aria-pressed': 'true', on: { click: () => setView('list') } }, 'List'),
        h('button', { type: 'button', dataset: { view: 'timeline' }, 'aria-pressed': 'false', on: { click: () => setView('timeline') } }, 'Timeline')));
  }
  function syncControls() {
    $$('.chipbtn').forEach(b => b.setAttribute('aria-pressed', String(state[b.dataset.key] === b.dataset.val)));
    $$('.seg button').forEach(b => b.setAttribute('aria-pressed', String(state.view === b.dataset.view)));
    const all = $('.chipbtn[data-key="day"][data-val="all"]');
    if (all) { all.disabled = state.view === 'timeline'; all.style.opacity = all.disabled ? '.4' : ''; }
  }
  function setFilter(key, val) {
    state[key] = val;
    if (state.view === 'timeline' && state.day === 'all') state.day = '2026-10-27';
    renderEvents();
  }
  function setView(v) {
    state.view = v;
    if (v === 'timeline' && state.day === 'all') state.day = '2026-10-27';
    renderEvents();
  }

  /* ----- timeline ----- */
  const shortTime = (t) => fmtTime(t).replace(':00', '');
  function barText(e) {
    const a = shortTime(e.start);
    if (!e.end) return a;
    const b = shortTime(e.end);
    const sameHalf = a.slice(-2) === b.slice(-2);
    return `${sameHalf ? a.slice(0, -3) : a} to ${b}`;
  }
  function renderTimeline() {
    const root = $('#events-timeline');
    root.textContent = '';
    const START = 12 * 60, END = 22 * 60, SPAN = END - START;
    const day = state.day;
    const all = D.events.filter(e => e.day === day && timed(e));
    const shown = all.filter(e => (state.aud === 'all' || e.audience === state.aud) && (!state.reg || (e.reg && e.reg.url))).sort(cmp);
    if (!shown.length) {
      root.append(h('p', { class: 'empty' }, day === '2026-10-29'
        ? 'Nothing is listed for Thursday. The conference wraps mid-afternoon.'
        : 'No timed events match these filters.'));
      return;
    }
    const hours = h('div', { class: 'tl-hours' });
    for (let hr = 12; hr < 22; hr++) hours.append(h('span', {}, `${hr % 12 || 12} ${hr >= 12 ? 'PM' : 'AM'}`));
    const body = h('div', { class: 'tl-body' });
    const peak = peakFor(day, D.events);
    shown.forEach(e => {
      const [s, en] = span(e);
      const openEnd = !e.end;
      const l = Math.max(0, (s - START) / SPAN);
      const w = Math.max(0.03, (Math.min(en, END) - Math.max(s, START)) / SPAN);
      const label = `${e.host}: ${e.title}`;
      const bar = h('button', {
        class: `tl-bar ${e.audience}${openEnd ? ' open-end' : ''}${plan.includes(e.id) ? ' inplan' : ''}`, type: 'button',
        style: `left:${(l * 100).toFixed(2)}%;width:${(w * 100).toFixed(2)}%`,
        title: `${label} · ${fmtTime(e.start)}${e.end ? ' to ' + fmtTime(e.end) : ''}`,
        'aria-label': `${label}, ${fmtTime(e.start)}${e.end ? ' to ' + fmtTime(e.end) : ''}. Show details.`,
        on: { click: () => jumpTo(e.id) }
      }, barText(e));
      body.append(h('div', { class: 'tl-row' },
        h('div', { class: 'tl-label' }, h('b', {}, e.host), h('span', {}, e.title)),
        h('div', { class: 'tl-track' }, bar)));
    });
    if (peak) body.append(h('div', { class: 'tl-peak', style: `--l:${((peak.from - START) / SPAN).toFixed(4)};--w:${((peak.to - peak.from) / SPAN).toFixed(4)}`, 'aria-hidden': 'true' }));
    const foot = [h('p', { class: 'tl-hint' }, 'Swipe sideways to see the whole evening.')];
    if (peak) foot.push(h('p', { class: 'tl-foot' }, `Shaded: the busiest window, ${fmtMins(peak.from)} to ${fmtMins(peak.to)}, with ${peak.n} events at once. Select any bar for details.`));
    foot.push(h('div', { class: 'tl-legend' }, ['hls', 'open', 'official'].map(tagEl)));
    foot.push(h('p', { class: 'tl-foot' }, 'Executive experiences and events without published times are not shown here. Switch to List to see them.'));
    root.append(h('div', { class: 'tl' }, h('div', { class: 'tl-inner' }, hours, body, foot)));
    // on phones the track scrolls sideways, so start at the first event instead of an empty noon
    requestAnimationFrame(() => {
      const tl = $('.tl', root);
      if (!tl || tl.scrollWidth <= tl.clientWidth + 2) return;
      const lw = parseFloat(getComputedStyle(tl).getPropertyValue('--lw')) || 0;
      const x = Math.min(...$$('.tl-bar', tl).map(b => b.getBoundingClientRect().left - tl.getBoundingClientRect().left + tl.scrollLeft));
      tl.scrollLeft = Math.max(0, x - lw - 18);
    });
  }

  function jumpTo(id) {
    state.view = 'list';
    if (state.aud !== 'all' || state.reg) { state.aud = 'all'; state.reg = false; $('#reg-only').checked = false; }
    renderEvents();
    const el = $('#ev-' + id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
  }

  /* ----- plan + calendar ----- */
  const planEvents = () => plan.map(id => D.events.find(e => e.id === id)).filter(e => e && canPlan(e))
    .sort((a, b) => a.day.localeCompare(b.day) || mins(a.start) - mins(b.start));

  function findConflicts(list) {
    const out = [];
    for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
      const a = list[i], b = list[j];
      if (a.day !== b.day) continue;
      const [as, ae] = span(a), [bs, be] = span(b);
      if (as < be && bs < ae) out.push([a, b]);
    }
    return out;
  }

  function togglePlan(id) {
    plan = plan.includes(id) ? plan.filter(x => x !== id) : [...plan, id];
    store.set('plan', plan);
    $$('[data-plan]').forEach(b => {
      const on = plan.includes(b.dataset.plan);
      b.setAttribute('aria-pressed', String(on));
      b.textContent = on ? 'In my plan' : 'Add to plan';
    });
    renderPlan();
    if (state.view === 'timeline') renderTimeline();
  }

  function renderPlan() {
    const root = $('#plan');
    root.textContent = '';
    const items = planEvents();
    root.append(h('h3', { id: 'plan-h' }, 'My plan', h('span', { class: 'plan-count' }, String(items.length))));
    if (!items.length) {
      root.append(h('p', { class: 'plan-empty' }, 'Tap “Add to plan” on any event with a time. We’ll flag overlaps and can export a calendar file.'));
    } else {
      root.append(h('ul', { class: 'plan-list' }, items.map(e => h('li', { class: 'plan-item' },
        h('div', {}, `${e.host}`, h('small', {}, `${fmtDate(e.day)} · ${fmtTime(e.start)}${e.end ? ' to ' + fmtTime(e.end) : ''}`)),
        h('button', { type: 'button', 'aria-label': `Remove ${e.host} from my plan`, on: { click: () => togglePlan(e.id) } }, 'Remove')))));
      const cf = findConflicts(items);
      if (cf.length) {
        root.append(h('div', { class: 'conflict', role: 'status' },
          h('b', {}, cf.length === 1 ? '1 overlap. ' : `${cf.length} overlaps. `),
          cf.map(([a, b]) => `${a.host} and ${b.host} overlap on ${dayLabel(a.day)}. `),
          'Arrive early at one, then head to the next.'));
      }
      root.append(h('div', { class: 'plan-actions' },
        h('button', { class: 'btn primary sm', type: 'button', on: { click: downloadIcs } }, 'Download calendar file'),
        h('button', { class: 'btn ghost sm', type: 'button', on: { click: () => { plan = []; store.set('plan', plan); togglePlanSync(); } } }, 'Clear plan')));
    }
    root.append(h('p', { class: 'plan-note' }, 'Saved in this browser only. Times are Pacific.'));
    updateFab();
  }
  function togglePlanSync() {
    $$('[data-plan]').forEach(b => { b.setAttribute('aria-pressed', 'false'); b.textContent = 'Add to plan'; });
    renderPlan();
    if (state.view === 'timeline') renderTimeline();
  }

  const icsText = (s) => String(s).replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, '-').replace(/·/g, '-')
    .replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');
  const fold = (line) => { const out = []; while (line.length > 73) { out.push(line.slice(0, 73)); line = ' ' + line.slice(73); } out.push(line); return out.join('\r\n'); };
  const stamp = (iso, hhmm) => new Date(`${iso}T${hhmm}:00-07:00`).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const addMin = (hhmm, m) => { const t = mins(hhmm) + m; return `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`; };

  function downloadIcs() {
    const items = planEvents();
    if (!items.length) return;
    const now = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//PPCC 2026 Know Before You Go//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'X-WR-CALNAME:PPCC 2026 evenings'];
    items.forEach(e => {
      const end = e.end || addMin(e.start, 120);
      const desc = [e.summary, e.reg && e.reg.url ? 'Register: ' + e.reg.url : null, e.endNote ? e.endNote + '.' : null, 'Partner event details can change. Confirm with the host.'].filter(Boolean).join('\n');
      lines.push('BEGIN:VEVENT', `UID:${e.id}@ppcc26-kbyg`, `DTSTAMP:${now}`, `DTSTART:${stamp(e.day, e.start)}`, `DTEND:${stamp(e.day, end)}`,
        `SUMMARY:${icsText(e.host + ': ' + e.title)}`, `LOCATION:${icsText(e.address ? e.venue + ', ' + e.address : e.venue + (/MGM Grand/.test(e.venue) ? ', Las Vegas' : ', MGM Grand area, Las Vegas'))}`, `DESCRIPTION:${icsText(desc)}`, 'END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    const blob = new Blob([lines.map(fold).join('\r\n') + '\r\n'], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = h('a', { href: url, download: 'ppcc-2026-evenings.ics' });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  let fab = null;
  function updateFab() {
    if (!fab) {
      fab = h('button', { class: 'plan-fab', type: 'button', hidden: true, on: { click: () => $('#plan').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }) } });
      document.body.append(fab);
    }
    const n = planEvents().length;
    fab.textContent = `My plan (${n})`;
    fab.hidden = !(n && currentTab() === 'evenings');
  }

  function renderEvents() {
    syncControls();
    renderInsight();
    const isTl = state.view === 'timeline';
    $('#events-list').hidden = isTl;
    $('#events-timeline').hidden = !isTl;
    if (isTl) renderTimeline(); else renderList();
  }

  /* ============================================================
     3 Perfect Days
     ============================================================ */
  function renderDays() {
    const root = $('#days-grid');
    D.days.forEach(d => {
      root.append(h('article', { class: 'day' },
        h('div', { class: 'day-top' },
          h('span', { class: 'day-num' }, `Day ${d.n}`),
          h('h3', { class: 'day-theme' }, d.theme),
          h('p', { class: 'day-date' }, `${d.label}, ${d.short}`),
          h('p', { class: 'day-line' }, d.line)),
        h('div', { class: 'soon-box' },
          h('h4', {}, 'Recommended sessions', h('span', {}, 'Coming soon')),
          h('div', { class: 'skel' }), h('div', { class: 'skel' }), h('div', { class: 'skel' })),
        d.hls ? h('div', { class: 'hls-callout' }, h('b', {}, d.hls.text), h('span', {}, d.hls.time)) : null,
        h('div', { class: 'agenda' },
          h('h4', {}, 'On the official agenda'),
          d.agenda.map(a => h('div', { class: 'ag' + (a.key ? ' key' : '') },
            h('time', {}, a.time),
            h('div', {}, h('b', {}, a.text), a.who ? h('small', {}, a.who) : null, a.note ? h('small', {}, a.note) : null)))),
        h('p', { class: 'day-evening' }, h('b', {}, 'Evening. '), d.evening)));
    });
    $('#days-updated').textContent = `${fmtMD(D.updated)}, 2026`;
  }

  /* ============================================================
     FAQ + links
     ============================================================ */
  function renderFaq() {
    const list = $('#faq-list');
    D.faq.forEach(f => list.append(h('details', { class: 'q', dataset: { text: (f.q + ' ' + f.a).toLowerCase() } },
      h('summary', {}, f.q),
      h('div', { class: 'ans' },
        h('p', {}, f.a),
        (f.code || f.links) ? h('div', { class: 'ans-cta ans-links' }, (f.links || []).map(l => extLink(l.label, l.href, 'btn ghost sm')), f.code ? codeChip(f.code) : null) : null,
        f.action === 'meet' ? h('div', { class: 'ans-cta' }, h('button', { class: 'btn primary sm', type: 'button', on: { click: (e) => openMeet(e.currentTarget) } }, 'Draft the request email')) : null,
        f.action === 'maps' ? h('div', { class: 'ans-cta' }, h('a', { class: 'btn primary sm', href: '#ground/maps' }, 'Open the maps')) : null,
        f.mapId ? h('div', { class: 'ans-cta' }, h('a', { class: 'btn primary sm', href: '#ground/map-' + f.mapId }, 'Find the room on the map')) : null))));
    $('#faq-search').addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      let n = 0;
      $$('details.q', list).forEach(d => { const hit = !q || q.split(/\s+/).every(w => d.dataset.text.includes(w)); d.hidden = !hit; if (hit) n++; });
      $('#faq-empty').hidden = n > 0;
    });
    const side = $('#links-side');
    D.links.forEach(g => side.append(h('div', { class: 'linkgroup' }, h('h3', {}, g.group),
      g.items.map(i => h('a', { href: i.href, target: '_blank', rel: 'noopener noreferrer' },
        h('span', {}, h('b', {}, i.label), h('small', {}, i.note)), icon('ext', 16), h('span', { class: 'sr-only' }, ' (opens in a new tab)'))))));
  }

  /* ============================================================
     Dialog helpers
     ============================================================ */
  const dlgs = {
    isOpen: (dlg) => dlg.hasAttribute('open'),
    show(dlg, opener) {
      dlg._opener = opener && document.contains(opener) ? opener : document.activeElement;
      if (typeof dlg.showModal === 'function') { if (!dlg.open) dlg.showModal(); }
      else { dlg.setAttribute('open', ''); dlg.classList.add('dlg-fallback'); }
      document.documentElement.classList.add('dlg-open');
    },
    hide(dlg) {
      if (dlg.hasAttribute('open')) { if (typeof dlg.close === 'function') dlg.close(); else dlg.removeAttribute('open'); }
      if (!$('dialog[open]')) document.documentElement.classList.remove('dlg-open');
      const el = dlg._opener;
      dlg._opener = null;
      if (el && el.focus && document.contains(el)) el.focus({ preventScroll: true });
    },
    // Esc and a click on the backdrop take the same path as the close button
    wire(dlg, onClose) {
      let downOnBackdrop = false;
      dlg.addEventListener('cancel', (e) => { e.preventDefault(); onClose(); });
      dlg.addEventListener('close', () => { if (!$('dialog[open]')) document.documentElement.classList.remove('dlg-open'); });
      dlg.addEventListener('pointerdown', (e) => { downOnBackdrop = e.target === dlg; });
      dlg.addEventListener('click', (e) => { if (e.target === dlg && downOnBackdrop) onClose(); });
    }
  };

  /* ============================================================
     Venue maps: cards on On the Ground, full-screen viewer
     ============================================================ */
  function renderMaps() {
    const M = D.maps;
    const official = $('#maps-official');
    official.href = M.official.href;
    official.textContent = '';
    official.append(M.official.label, ' ', icon('ext', 13), h('span', { class: 'sr-only' }, ' (opens in a new tab)'));
    const grid = $('#map-grid');
    M.items.forEach(m => grid.append(h('li', {},
      h('button', { class: 'map-card', type: 'button', dataset: { map: m.id }, 'aria-label': `Open map: ${m.title}`, on: { click: (e) => openMap(m.id, e.currentTarget) } },
        h('span', { class: 'map-thumb' },
          h('img', { src: m.thumb, width: m.tw, height: m.th, alt: '', loading: 'lazy', decoding: 'async' }),
          h('span', { class: 'map-open', 'aria-hidden': 'true' }, icon('zoom', 18))),
        h('span', { class: 'map-meta' }, h('b', {}, m.title), h('small', {}, m.blurb))))));
    $('#map-credit').append(
      'Maps are shown as presented in the ', extLink('Power HUG Know Before You Go session', D.video.watchUrl),
      '. They are a guide only, so follow the signs on site and check Whova for room locations.');
  }

  function createMapViewer() {
    const dlg = $('#map-dialog'), stage = $('#map-stage'), img = $('#map-img'), info = $('#map-info');
    const items = D.maps.items;
    const wide = matchMedia('(min-width: 1000px)');
    const v = { i: 0, s: 1, tx: 0, ty: 0, min: 1, max: 4, pointers: new Map(), pinch: null, multi: false, lastTap: null };
    const cur = () => items[v.i];
    const size = () => ({ w: stage.clientWidth, h: stage.clientHeight });
    const local = (e) => { const r = stage.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };

    function clamp() {
      const { w, h: sh } = size(), m = cur();
      const iw = m.w * v.s, ih = m.h * v.s;
      v.tx = iw <= w ? (w - iw) / 2 : Math.min(0, Math.max(w - iw, v.tx));
      v.ty = ih <= sh ? (sh - ih) / 2 : Math.min(0, Math.max(sh - ih, v.ty));
    }
    function apply() {
      img.style.transform = `translate3d(${v.tx.toFixed(2)}px, ${v.ty.toFixed(2)}px, 0) scale(${v.s.toFixed(4)})`;
      // aria-disabled keeps keyboard focus on the button when a zoom limit is reached
      $('#zoom-out').setAttribute('aria-disabled', String(v.s <= v.min * 1.001));
      $('#zoom-in').setAttribute('aria-disabled', String(v.s >= v.max * 0.999));
    }
    function limits() {
      const { w, h: sh } = size(), m = cur();
      v.min = Math.min(w / m.w, sh / m.h, 1);
      v.max = Math.max(v.min * 8, 3);
    }
    function reset() { limits(); v.s = v.min; clamp(); apply(); }
    function zoomAt(ns, cx, cy) {
      ns = Math.min(v.max, Math.max(v.min, ns));
      const k = ns / v.s;
      v.tx = cx - (cx - v.tx) * k;
      v.ty = cy - (cy - v.ty) * k;
      v.s = ns;
      clamp(); apply();
    }
    const zoomCenter = (k) => { const { w, h: sh } = size(); zoomAt(v.s * k, w / 2, sh / 2); };
    const panBy = (dx, dy) => { v.tx += dx; v.ty += dy; clamp(); apply(); };

    function fillInfo(m) {
      const body = $('#map-info-body');
      body.textContent = '';
      body.scrollTop = 0;
      body.append(h('p', {}, m.blurb));
      if (m.note) body.append(h('p', { class: 'mv-note' }, m.note));
      (m.directions || []).forEach(d => body.append(h('div', { class: 'dirs' },
        h('h3', {}, d.from), h('ol', {}, d.steps.map(s => h('li', {}, s))))));
      body.append(h('div', { class: 'mv-links' },
        extLink('Open the image full size', m.src),
        extLink(`Hear it explained (${mmss(m.videoAt)})`, `${D.video.watchUrl}&t=${m.videoAt}s`),
        extLink(D.maps.official.label, D.maps.official.href)));
    }
    function show(i) {
      v.i = (i + items.length) % items.length;
      const m = cur();
      $('#map-title').textContent = m.title;
      $('#map-count').textContent = `Map ${v.i + 1} of ${items.length}`;
      img.alt = m.alt;
      img.style.width = m.w + 'px';
      img.style.height = m.h + 'px';
      // show the cached thumbnail at once, then swap in the sharp image when it has loaded
      img.src = m.thumb;
      const full = new Image();
      full.onload = () => { if (cur() === m && dlgs.isOpen(dlg)) img.src = m.src; };
      full.src = m.src;
      fillInfo(m);
      reset();
    }
    function go(d) {
      show(v.i + d);
      history.replaceState(null, '', '#ground/map-' + cur().id);
    }

    /* drag to pan, pinch to zoom, double-tap to toggle zoom, wheel to zoom */
    function startPinch() {
      const [a, b] = [...v.pointers.values()];
      v.pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) || 1, mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2 };
      v.multi = true;
    }
    function updatePinch() {
      if (!v.pinch || v.pointers.size < 2) return;
      const [a, b] = [...v.pointers.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y) || 1;
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      const r = stage.getBoundingClientRect();
      const ns = Math.min(v.max, Math.max(v.min, v.s * d / v.pinch.d));
      const k = ns / v.s;
      const cx = v.pinch.mx - r.left, cy = v.pinch.my - r.top;
      v.tx = cx - (cx - v.tx) * k + (mx - v.pinch.mx);
      v.ty = cy - (cy - v.ty) * k + (my - v.pinch.my);
      v.s = ns;
      v.pinch = { d, mx, my };
      clamp(); apply();
    }
    function tap(e) {
      const [x, y] = local(e), now = performance.now(), last = v.lastTap;
      if (last && now - last.t < 320 && Math.hypot(x - last.x, y - last.y) < 40) {
        v.lastTap = null;
        if (v.s > v.min * 1.2) reset(); else zoomAt(Math.min(v.max, Math.max(1, v.min * 2)), x, y);
      } else v.lastTap = { x, y, t: now };
    }
    stage.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      try { stage.setPointerCapture(e.pointerId); } catch (err) { /* synthetic pointer */ }
      v.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, x0: e.clientX, y0: e.clientY, t0: performance.now() });
      if (v.pointers.size === 2) startPinch();
      stage.classList.add('grabbing');
    });
    stage.addEventListener('pointermove', (e) => {
      const p = v.pointers.get(e.pointerId);
      if (!p) return;
      const dx = e.clientX - p.x, dy = e.clientY - p.y;
      p.x = e.clientX; p.y = e.clientY;
      if (v.pointers.size === 1) panBy(dx, dy); else updatePinch();
    });
    const endPointer = (e) => {
      const p = v.pointers.get(e.pointerId);
      if (!p) return;
      v.pointers.delete(e.pointerId);
      if (e.type === 'pointerup' && !v.multi && Math.hypot(e.clientX - p.x0, e.clientY - p.y0) < 8 && performance.now() - p.t0 < 350) tap(e);
      if (v.pointers.size === 2) startPinch(); else if (v.pointers.size < 2) v.pinch = null;
      if (!v.pointers.size) { v.multi = false; stage.classList.remove('grabbing'); }
    };
    stage.addEventListener('pointerup', endPointer);
    stage.addEventListener('pointercancel', endPointer);
    // Safari reports pinches as gesture events whose default action zooms the whole page
    ['gesturestart', 'gesturechange', 'gestureend'].forEach(t => stage.addEventListener(t, (e) => e.preventDefault()));
    stage.addEventListener('wheel', (e) => {
      e.preventDefault();
      const dy = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaMode === 2 ? e.deltaY * 400 : e.deltaY;
      const [x, y] = local(e);
      zoomAt(v.s * Math.exp(-dy * (e.ctrlKey ? 0.01 : 0.0018)), x, y);
    }, { passive: false });

    dlg.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const onStage = e.target === stage || e.target === dlg;
      const zoomed = v.s > v.min * 1.01;
      const key = e.key;
      if (key === '+' || key === '=') { e.preventDefault(); zoomCenter(1.4); }
      else if (key === '-' || key === '_') { e.preventDefault(); zoomCenter(1 / 1.4); }
      else if (key === '0') { e.preventDefault(); reset(); }
      else if (onStage && key === 'ArrowLeft') { e.preventDefault(); if (zoomed) panBy(90, 0); else go(-1); }
      else if (onStage && key === 'ArrowRight') { e.preventDefault(); if (zoomed) panBy(-90, 0); else go(1); }
      else if (onStage && zoomed && key === 'ArrowUp') { e.preventDefault(); panBy(0, 90); }
      else if (onStage && zoomed && key === 'ArrowDown') { e.preventDefault(); panBy(0, -90); }
    });
    $('#map-prev').addEventListener('click', () => go(-1));
    $('#map-next').addEventListener('click', () => go(1));
    $('#zoom-in').addEventListener('click', () => zoomCenter(1.5));
    $('#zoom-out').addEventListener('click', () => zoomCenter(1 / 1.5));
    $('#zoom-fit').addEventListener('click', reset);
    $('#map-close').addEventListener('click', popOverlay);
    dlgs.wire(dlg, popOverlay);

    // keep the view sensible on rotation and when the info panel opens or closes
    const onResize = () => {
      if (!dlgs.isOpen(dlg)) return;
      const wasFit = v.s <= v.min * 1.01;
      limits();
      v.s = wasFit ? v.min : Math.min(v.max, Math.max(v.min, v.s));
      clamp(); apply();
    };
    if ('ResizeObserver' in window) new ResizeObserver(onResize).observe(stage);
    else window.addEventListener('resize', onResize);
    wide.addEventListener('change', () => { info.open = wide.matches; });

    return {
      isOpen: () => dlgs.isOpen(dlg),
      currentId: () => cur().id,
      open(id, opener) {
        dlgs.show(dlg, opener);
        info.open = wide.matches;
        v.pointers.clear(); v.pinch = null; v.multi = false; v.lastTap = null;
        stage.classList.remove('grabbing');
        show(Math.max(0, items.findIndex(m => m.id === id)));
        stage.focus({ preventScroll: true });
      },
      close() { dlgs.hide(dlg); }
    };
  }

  /* ============================================================
     Request a meeting with Microsoft product group leaders
     ============================================================ */
  function createMeet() {
    const dlg = $('#meet-dialog'), form = $('#meet-form');
    const fld = { name: $('#m-name'), org: $('#m-org'), role: $('#m-role'), details: $('#m-details'), outcome: $('#m-outcome') };
    const send = $('#meet-send'), copyBtn = $('#meet-copy'), msg = $('#meet-msg');
    const OTHER = D.meet.topics[D.meet.topics.length - 1];
    const enc = encodeURIComponent;
    const crlf = (s) => s.replace(/\n/g, '\r\n');
    let composed = null, long = false;

    const optEl = (group, text) => {
      const input = h('input', { type: 'checkbox', name: group, value: text });
      const label = h('label', { class: 'opt' }, input, h('span', {}, text));
      input.addEventListener('change', () => label.classList.toggle('on', input.checked));
      return label;
    };
    D.meet.topics.forEach(t => $('#m-topics').append(optEl('topic', t)));
    D.meet.days.forEach(d => $('#m-days').append(optEl('day', d)));
    const picked = (sel) => $$(sel + ' input:checked').map(i => i.value);

    function compose() {
      const name = fld.name.value.trim(), org = fld.org.value.trim(), role = fld.role.value.trim();
      const details = fld.details.value.trim(), outcome = fld.outcome.value.trim();
      const topics = picked('#m-topics'), days = picked('#m-days');
      const L = [
        'Hello Microsoft healthcare team,', '',
        `I will be at the Power Platform Community Conference (${D.conference.venue}, Oct 27 to 29) and would like to meet with Microsoft product group leaders while I am there.`, '',
        'About me',
        `- Name: ${name || '[your name]'}`,
        `- Organization: ${org || '[your organization]'}`];
      if (role) L.push(`- Role: ${role}`);
      L.push('', 'What I would like to discuss');
      if (topics.length) topics.forEach(t => L.push(`- ${t}`)); else L.push('- [choose at least one topic]');
      if (details) L.push('', 'More detail', details);
      if (outcome) L.push('', 'What would make the meeting worthwhile', outcome);
      if (days.length) L.push('', `Best days: ${days.join('; ')}`);
      L.push('', 'I understand availability is limited. Could you let me know what is possible and who from the product group would be the best fit?', '', 'Thank you,', name || '[your name]');
      return { name, org, topics, details, subject: D.meet.subject + (org ? ` (${org})` : ''), body: L.join('\n') };
    }

    function problems() {
      const c = composed, out = [];
      if (!c.name) out.push({ el: fld.name, text: 'Add your name.' });
      if (!c.org) out.push({ el: fld.org, text: 'Add your organization.' });
      if (!c.topics.length) out.push({ el: $('#m-topics input'), text: 'Choose at least one topic.' });
      else if (c.topics.length === 1 && c.topics[0] === OTHER && !c.details) out.push({ el: fld.details, text: 'Tell us what the topic is.' });
      return out;
    }
    function flag(list) {
      $$('.invalid', dlg).forEach(el => el.classList.remove('invalid'));
      list.forEach(p => { const box = p.el.closest('.field, .field-set'); if (box) box.classList.add('invalid'); });
    }
    const say = (text, ok) => { msg.textContent = text; msg.classList.toggle('ok', !!ok); };

    function update() {
      composed = compose();
      const c = composed, to = D.contact.email;
      $('#meet-to').textContent = to;
      $('#meet-subject').textContent = c.subject;
      $('#meet-preview').textContent = c.body;
      const full = `mailto:${to}?subject=${enc(c.subject)}&body=${enc(crlf(c.body))}`;
      long = full.length > 1900;
      const body = long ? 'Hello Microsoft healthcare team,\n\nMy full request is on my clipboard. Please paste it here before sending.\n' : c.body;
      send.href = long ? `mailto:${to}?subject=${enc(c.subject)}&body=${enc(crlf(body))}` : full;
      $('#meet-outlook').href = `https://outlook.office.com/mail/deeplink/compose?to=${enc(to)}&subject=${enc(c.subject)}&body=${enc(body)}`;
      $('#meet-gmail').href = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(to)}&su=${enc(c.subject)}&body=${enc(body)}`;
      send.setAttribute('aria-disabled', String(problems().length > 0));
      // the details box becomes required when "something else" is the only topic picked
      $('#m-details-opt').textContent = (c.topics.length === 1 && c.topics[0] === OTHER) ? 'required' : 'optional';
    }

    function copyText(text) {
      const legacyCopy = () => new Promise((resolve, reject) => {
        const prev = document.activeElement;
        const ta = h('textarea', { 'aria-hidden': 'true', readonly: true, style: 'position:fixed;left:-9999px;top:0;opacity:0' });
        ta.value = text;
        dlg.append(ta); // inside the open modal, so the browser will let it take focus
        ta.focus({ preventScroll: true });
        ta.select();
        ta.setSelectionRange(0, text.length);
        let ok = false;
        try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
        ta.remove();
        if (prev && prev.focus) prev.focus({ preventScroll: true });
        if (ok) resolve(); else reject(new Error('copy failed'));
      });
      if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).catch(legacyCopy);
      return legacyCopy();
    }
    const fullText = () => `To: ${D.contact.email}\nSubject: ${composed.subject}\n\n${composed.body}`;

    // returns true when the draft can open; otherwise shows what is missing
    function guard(e) {
      update();
      const p = problems();
      flag(p);
      if (!p.length) return true;
      e.preventDefault();
      say(p.map(x => x.text).join(' '), false);
      p[0].el.focus();
      return false;
    }
    function openedDraft(e) {
      if (!guard(e)) return;
      if (long) copyText(fullText()).then(
        () => say('Your request is long, so the full text is on your clipboard. Paste it into the email that opens.', true),
        () => say('Your request is long. Use Copy email text, then paste it into the email.', false));
      else say('Your email app should open with the draft. If nothing happens, use Copy email text or one of the links below.', true);
    }
    send.addEventListener('click', openedDraft);
    $('#meet-outlook').addEventListener('click', openedDraft);
    $('#meet-gmail').addEventListener('click', openedDraft);
    copyBtn.addEventListener('click', (e) => {
      if (!guard(e)) return;
      copyText(fullText()).then(
        () => say(`Copied. Paste it into a new email to ${D.contact.email}.`, true),
        () => say('Could not copy automatically. Select the text in the preview and copy it.', false));
    });

    const refresh = () => { flag([]); say(''); update(); };
    form.addEventListener('input', refresh);
    form.addEventListener('change', refresh);
    form.addEventListener('submit', (e) => e.preventDefault());
    $('#meet-close').addEventListener('click', popOverlay);
    dlgs.wire(dlg, popOverlay);
    update();

    return {
      isOpen: () => dlgs.isOpen(dlg),
      open(opener) {
        dlgs.show(dlg, opener);
        update();
        $('#meet-body').scrollTop = 0;
        if (matchMedia('(pointer: fine)').matches) fld.name.focus({ preventScroll: true });
      },
      close() { dlgs.hide(dlg); }
    };
  }

  /* ============================================================
     Boot
     ============================================================ */
  function boot() {
    buildTabs();
    buildMenu();
    renderCountdown();
    renderVideo();
    renderDue();
    renderFeatures();
    renderGuide();
    renderChecklist();
    renderBadgeHours();
    renderFeatured();
    buildControls();
    renderEvents();
    renderPlan();
    renderDays();
    renderFaq();
    renderMaps();
    maps = createMapViewer();
    meet = createMeet();
    $('#help-cta').href = `mailto:${D.contact.email}?subject=${encodeURIComponent(D.contact.subject)}`;
    $('#help-meet').addEventListener('click', (e) => openMeet(e.currentTarget));
    $('#updated').textContent = `${fmtMD(D.updated)}, 2026`;
    route(true);
  }
  boot();
})();
