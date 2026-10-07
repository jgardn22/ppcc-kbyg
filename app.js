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
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5z"/></svg>'
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

  const hashTab = () => {
    const id = location.hash.replace(/^#/, '').split('/')[0];
    return tabIds.includes(id) ? id : null;
  };
  let active = null;
  const currentTab = () => active || hashTab() || 'start';

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
    document.title = id === 'start'
      ? 'Know Before You Go · PPCC 2026 for Healthcare & Life Sciences'
      : `${label} · Know Before You Go · PPCC 2026`;
    window.scrollTo({ top: 0, behavior: 'auto' });
    const selTab = $('#tab-' + id);
    if (selTab.scrollIntoView) selTab.scrollIntoView({ inline: 'center', block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
    if (userLink) $('#panel-' + id).focus({ preventScroll: true });
    updateFab();
  }
  window.addEventListener('hashchange', () => { const t = hashTab(); if (t) activate(t, true); });

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
      h('div', { class: 'meta' }, h('span', { class: 'chip' }, r.when), h('span', { class: 'chip' }, r.time)),
      h('p', {}, r.blurb),
      h('a', { class: 'btn ghost sm', href: '#days' }, 'See Wednesday’s plan'));
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
    before: 'A checklist with live deadlines. Your progress saves on this device.',
    ground: 'Badge pickup, the keynote-morning route and tips for getting around the MGM Grand.',
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
    if (it.action === 'video') links.push(h('button', { type: 'button', on: { click: () => goToVideo(0) } }, 'Play the video'));
    if (it.action === 'tab:evenings') links.push(h('a', { href: '#evenings' }, 'See the evening events'));
    if (it.action === 'tab:ground') links.push(h('a', { href: '#ground' }, 'See badge pickup hours'));
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
    root.append(
      h('div', { class: 'meter', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(total), 'aria-valuenow': String(n), 'aria-label': 'Checklist progress' }, h('i', { style: `width:${Math.round(n / total * 100)}%` })),
      h('span', { class: 'progress-text' }, n === total ? 'All done. See you in Las Vegas.' : `${n} of ${total} done`),
      n ? h('button', { class: 'linkbtn', type: 'button', on: { click: () => { store.set('done', {}); renderChecklist(); renderDue(); } } }, 'Reset') : null);
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
    const accessText = e.access === 'badge' ? D.accessLabels.badge : (e.reg ? D.accessLabels.register : null);
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
      const n = D.events.filter(e => e.day === d.date && timed(e)).length;
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
      opts.map(([val, text]) => h('button', { class: 'chipbtn', type: 'button', dataset: { key, val }, 'aria-pressed': 'false', on: { click: () => setFilter(key, val) } }, text)));
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
      }, `${fmtTime(e.start).replace(':00', '')}${e.end ? '–' + fmtTime(e.end).replace(':00', '') : ''}`);
      body.append(h('div', { class: 'tl-row' },
        h('div', { class: 'tl-label' }, h('b', {}, e.host), h('span', {}, e.title)),
        h('div', { class: 'tl-track' }, bar)));
    });
    if (peak) body.append(h('div', { class: 'tl-peak', style: `--l:${((peak.from - START) / SPAN).toFixed(4)};--w:${((peak.to - peak.from) / SPAN).toFixed(4)}`, 'aria-hidden': 'true' }));
    const foot = [];
    if (peak) foot.push(h('p', { class: 'tl-foot' }, `Shaded: the busiest window, ${fmtMins(peak.from)} to ${fmtMins(peak.to)}, with ${peak.n} events at once. Select any bar for details.`));
    foot.push(h('div', { class: 'tl-legend' }, ['hls', 'open', 'official'].map(tagEl)));
    foot.push(h('p', { class: 'tl-foot' }, 'Executive experiences and events without published times are not shown here. Switch to List to see them.'));
    root.append(h('div', { class: 'tl' }, h('div', { class: 'tl-inner' }, hours, body, foot)));
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
        `SUMMARY:${icsText(e.host + ': ' + e.title)}`, `LOCATION:${icsText(e.venue + ', MGM Grand area, Las Vegas')}`, `DESCRIPTION:${icsText(desc)}`, 'END:VEVENT');
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
      $('#panel-evenings').append(fab);
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
      h('summary', {}, f.q), h('p', { class: 'ans' }, f.a))));
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
     Boot
     ============================================================ */
  function boot() {
    buildTabs();
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
    $('#help-cta').href = `mailto:${D.contact.email}?subject=${encodeURIComponent(D.contact.subject)}`;
    $('#updated').textContent = `${fmtMD(D.updated)}, 2026`;
    activate(hashTab() || 'start', false);
  }
  boot();
})();
