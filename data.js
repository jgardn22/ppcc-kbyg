/* ============================================================
   PPCC 2026 · Know Before You Go · Healthcare & Life Sciences
   All customer-facing content lives in this file.
   Edit here, refresh the page. No build step.
   Times are Pacific (Las Vegas). Dates are ISO (YYYY-MM-DD).
   ============================================================ */
window.KBYG = {
  updated: "2026-10-06",

  conference: {
    name: "Power Platform Community Conference",
    short: "PPCC 2026",
    keynoteStart: "2026-10-27T08:30:00-07:00",
    confEnd: "2026-10-30T00:00:00-07:00",
    venue: "MGM Grand Las Vegas",
    address: "3799 S. Las Vegas Blvd., Las Vegas, NV 89109",
    site: "https://powerplatformconf.com"
  },

  contact: {
    name: "Jake Gardner",
    team: "Microsoft · AI Apps & Agents · Healthcare",
    email: "jakegardner@microsoft.com",
    subject: "PPCC 2026 Know Before You Go"
  },

  tabs: [
    { id: "start",    label: "Start Here" },
    { id: "before",   label: "Before You Go" },
    { id: "ground",   label: "On the Ground" },
    { id: "evenings", label: "Evening Events" },
    { id: "days",     label: "3 Perfect Days" },
    { id: "faq",      label: "FAQ & Links" }
  ],

  /* ---------- Video ---------- */
  video: {
    id: "VpZvCUSRKrs",
    title: "Power HUG Session #32: Power Platform Community Conference Know Before You Go",
    seconds: 2450,
    watchUrl: "https://www.youtube.com/watch?v=VpZvCUSRKrs",
    deckUrl: "https://aka.ms/KBYG-Deck",
    channelUrl: "https://www.youtube.com/@PowerPlatformHUG",
    presenters: "Randall Ykema, Liz Vilchis, Joanne Kovachev and Scott Dwyer",
    chapters: [
      { t: 0,    title: "Welcome and what Power HUG is",       blurb: "The healthcare user group for Power Platform admins, makers and users." },
      { t: 355,  title: "Conference overview",                  blurb: "200+ sessions, on-site certifications for the first time and a keynote each day." },
      { t: 485,  title: "Ways to get the most from PPCC",       blurb: "Sessions, the healthcare roundtable, executive meetings and partner events." },
      { t: 640,  title: "Your week at a glance",                blurb: "Tuesday keynote, Wednesday roundtable and concert, Thursday wrap-up." },
      { t: 830,  title: "The Whova app",                        blurb: "Build your agenda, message attendees and set up meetings." },
      { t: 940,  title: "MGM Grand map and getting around",     blurb: "From the airport to the keynote arena, plus the Starbucks tip." },
      { t: 1155, title: "Healthcare panel and partner events",  blurb: "Happy hours, dinners, executive experiences and Women in Power." },
      { t: 1623, title: "Tips and tricks checklist",            blurb: "Double-book, stay flexible, charge up and wear comfortable shoes." },
      { t: 1870, title: "Keynote day and lunch",                blurb: "Arrive early for the keynote and know where your lunch is." },
      { t: 2055, title: "Dietary needs and ticket transfers",   blurb: "What to send the organizers before the conference." },
      { t: 2260, title: "Engineering vs. community sessions",   blurb: "Mix product-direction sessions with hands-on community ones." },
      { t: 2325, title: "Final tips",                           blurb: "Prioritize the healthcare panel and talk to anyone in a Microsoft lanyard." }
    ]
  },

  /* ---------- Healthcare roundtable (featured) ---------- */
  roundtable: {
    title: "Healthcare & Life Sciences roundtable",
    when: "Wednesday, Oct 28",
    time: "Time to be announced",
    blurb: "Peers who have already built on the platform walk through their journey, and you can ask questions live. Providers, payers and life sciences are usually all in the room. It is often standing room only, so plan to arrive early."
  },

  /* ---------- Checklist ---------- */
  checklistGroups: [
    { id: "essentials", title: "Lock in the essentials" },
    { id: "plan",       title: "Plan your conference" },
    { id: "pack",       title: "Pack and prepare" }
  ],

  checklist: [
    { id: "registration", group: "essentials", title: "Confirm your registration",
      detail: "Look for your confirmation email and welcome letter from the conference team. Not registered yet? Sign up on the official site.",
      links: [{ label: "Register", href: "https://powerplatformconf.com/register" }] },

    { id: "accessibility", group: "essentials", title: "Share accessibility needs", due: "2026-10-02",
      detail: "The organizers asked for accessibility requests by Oct 2. If you haven’t sent yours, email them right away.",
      links: [{ label: "Email the organizers", href: "mailto:info@powerplatformconf.com?subject=PPCC%202026%20accessibility%20needs" }] },

    { id: "dietary", group: "essentials", title: "Send dietary needs", due: "2026-10-08",
      detail: "Halal, kosher, celiac and other allergy meals are special order. Vegetarian, vegan and gluten-free options are on the main menu. If your pass was transferred from a colleague, send your restrictions again because they don’t always carry over.",
      links: [{ label: "Email the organizers", href: "mailto:info@powerplatformconf.com?subject=PPCC%202026%20dietary%20needs" }] },

    { id: "workshops", group: "essentials", title: "Finalize any workshops", due: "2026-10-15",
      detail: "Workshops are separate from your main pass and space is limited. There are no onsite sign-ups or changes, so finish online by Oct 15. Pre-conference workshops run Oct 25 to 26 (9 AM to 4 PM) and post-conference workshops run Oct 30 (8 AM to 3 PM). Lunch is included with full-day workshops.",
      links: [{ label: "Workshops", href: "https://powerplatformconf.com/workshops" }] },

    { id: "hotel", group: "essentials", title: "Book your hotel",
      detail: "The MGM Grand is the official host hotel and remaining rooms are extremely limited. Start with the official hotel page, then try the MGM Grand directly or hotels nearby.",
      links: [{ label: "Official hotel page", href: "https://powerplatformconf.com/book-hotel" }] },

    { id: "airport", group: "essentials", title: "Plan your airport transfer",
      detail: "Harry Reid International (LAS) is about 3 miles from the MGM Grand, roughly 10 minutes by taxi or rideshare. The hotel does not run an airport shuttle." },

    { id: "video", group: "plan", title: "Watch the Know Before You Go video",
      detail: "41 minutes from the Power HUG team. Use the chapters to jump to what matters most to you.", action: "video" },

    { id: "whova", group: "plan", title: "Join Whova when your invite arrives", due: "2026-10-13", soft: true, dueLabel: "Expected mid-October",
      detail: "Whova is the conference app. The full schedule, with sessions, times and rooms, is published there about two weeks before the event. Your invite is tied to your registration, and a login from past years still works. Building your agenda in a browser gives you more screen space." },

    { id: "sessions", group: "plan", title: "Pick sessions, then pick backups",
      detail: "With 200+ sessions, filter by topic and experience level. Double-book yourself and stay flexible. Rooms on the upper floors are smaller and popular sessions can fill up, so keep a backup in mind." },

    { id: "roundtable", group: "plan", title: "Put the healthcare roundtable on your calendar",
      detail: "Wednesday, Oct 28, time to be announced. It is one of the few sessions built for healthcare and life sciences and it is often standing room only, so plan to arrive early." },

    { id: "evenings", group: "plan", title: "RSVP for one or two evening events",
      detail: "Most partner events need advance registration and fill quickly. Many check names at the door. It is fine to register for more than one.", action: "tab:evenings" },

    { id: "leaders", group: "plan", title: "Ask about time with Microsoft leaders",
      detail: "Your Microsoft account team can help arrange conversations with Microsoft product and industry leaders during the conference. Governance, scale and roadmap questions are common topics." },

    { id: "badge", group: "pack", title: "Plan an early badge pickup",
      detail: "Check-in is on the first floor of the MGM Grand Conference Center. Picking up your badge on Monday (7:30 AM to 5:00 PM) keeps Tuesday morning simple. You need your badge to enter the Opening Keynote.", action: "tab:ground" },

    { id: "shoes", group: "pack", title: "Pack comfortable shoes and layers",
      detail: "Expect 10,000+ steps a day. The casino and session rooms run cold, so bring something light you can take on and off." },

    { id: "charger", group: "pack", title: "Bring a charger or power bank",
      detail: "Between Whova, messaging and photos, your battery will take a beating." }
  ],

  /* ---------- Venue: badge hours ---------- */
  badgeHours: [
    { day: "Sunday, Oct 25",     date: "2026-10-25", hours: "7:30 AM – 2:00 PM" },
    { day: "Monday, Oct 26",     date: "2026-10-26", hours: "7:30 AM – 5:00 PM", tip: "Best day to pick up" },
    { day: "Tuesday, Oct 27",    date: "2026-10-27", hours: "6:30 AM – 5:00 PM", tip: "Keynote rush" },
    { day: "Wednesday, Oct 28",  date: "2026-10-28", hours: "7:00 AM – 4:00 PM" },
    { day: "Thursday, Oct 29",   date: "2026-10-29", hours: "7:00 AM – 4:00 PM" }
  ],

  /* ---------- 3 Perfect Days (official agenda anchors) ---------- */
  days: [
    {
      id: "tue", date: "2026-10-27", label: "Tuesday", short: "Oct 27", n: 1, theme: "Learn",
      line: "The big announcements land first thing.",
      agenda: [
        { time: "6:30 AM",           text: "Check-in opens at the Conference Center" },
        { time: "8:00 AM",           text: "Arena doors open" },
        { time: "8:30 – 10:00 AM",   text: "Opening Keynote", who: "Charles Lamanna and Ryan Cunningham", key: true },
        { time: "10:00 AM",          text: "Expo Hall and Makers Market open" },
        { time: "11:30 AM – 12:30 PM", text: "What’s New with Power BI & Fabric", who: "Kim Manis" },
        { time: "12:30 – 2:00 PM",   text: "Lunch", note: "Women in Power Welcome Luncheon runs at the same time" },
        { time: "2:00 – 3:00 PM",    text: "What’s New with Copilot Studio", who: "Bryan Goode and Jason Moore" },
        { time: "4:00 – 5:00 PM",    text: "What’s New with Power Apps", who: "Leon Welicki and Tiffany Treacy" },
        { time: "5:00 – 7:30 PM",    text: "Night Market: Opening Reception", note: "Expo and Makers Market" }
      ],
      evening: "Busiest night for partner events. Hummingbird’s Healthcare & Life Sciences Happy Hour starts at 5:00 PM."
    },
    {
      id: "wed", date: "2026-10-28", label: "Wednesday", short: "Oct 28", n: 2, theme: "Build",
      line: "Go deep on agents, and meet your healthcare peers.",
      agenda: [
        { time: "8:00 – 9:00 AM",    text: "Building End to End Agents with Copilot Studio", who: "Jason Moore and Soufiane Loukili" },
        { time: "9:00 AM",           text: "Expo Hall and Makers Market open" },
        { time: "10:00 – 11:00 AM",  text: "The Future of Agent Apps", who: "Clay Wesener" },
        { time: "11:30 AM – 12:30 PM", text: "From Work IQ to Agent 365: Building and Managing the Agentic Enterprise", who: "Nirav Shah" },
        { time: "12:30 PM",          text: "Lunch" },
        { time: "2:00 – 3:00 PM",    text: "Sessions", note: "Titles to be announced" },
        { time: "3:30 – 4:30 PM",    text: "Sessions", note: "Titles to be announced" },
        { time: "4:30 – 6:30 PM",    text: "Expo and Makers Market, plus conference T-shirt pick-up" },
        { time: "8:00 PM",           text: "Pitbull live in the MGM Grand Garden Arena", key: true }
      ],
      hls: { time: "Time to be announced", text: "Healthcare & Life Sciences roundtable" },
      evening: "Partner dinners wrap up around the time Pitbull starts, and the arena line is long. Plan your timing."
    },
    {
      id: "thu", date: "2026-10-29", label: "Thursday", short: "Oct 29", n: 3, theme: "Make it real",
      line: "A fireside chat, a last round of sessions, then home with a plan.",
      agenda: [
        { time: "9:00 – 10:00 AM",   text: "Keynote and fireside chat", key: true },
        { time: "10:00 AM",          text: "Expo Hall and Makers Market open" },
        { time: "10:45 – 11:45 AM",  text: "Sessions", note: "Titles to be announced" },
        { time: "12:00 – 1:00 PM",   text: "Sessions", note: "Titles to be announced" },
        { time: "1:00 – 2:30 PM",    text: "Lunch" },
        { time: "2:30 PM",           text: "Expo Hall and Makers Market close" },
        { time: "2:30 – 3:30 PM",    text: "Sessions", note: "Titles to be announced" }
      ],
      evening: "The conference wraps mid-afternoon, so there are no evening events listed."
    }
  ],

  /* ---------- Evening events ----------
     audience: hls | open | exec | official | tbd
     access:   register | ask | badge
     Healthcare & Life Sciences events and industry-agnostic events only.
     ------------------------------------------------------------ */
  audiences: {
    hls:      "Healthcare & Life Sciences",
    open:     "Open to all industries",
    exec:     "Executive experience",
    official: "Official PPCC",
    tbd:      "Audience to be announced"
  },
  accessLabels: {
    register: "Registration required",
    ask:      "Ask your Microsoft account team",
    badge:    "Included with your badge"
  },
  eventDays: [
    { date: "2026-10-26", label: "Monday",    short: "Mon", n: "Oct 26" },
    { date: "2026-10-27", label: "Tuesday",   short: "Tue", n: "Oct 27" },
    { date: "2026-10-28", label: "Wednesday", short: "Wed", n: "Oct 28" },
    { date: "2026-10-29", label: "Thursday",  short: "Thu", n: "Oct 29" }
  ],

  events: [
    /* ---- Featured: Healthcare & Life Sciences ---- */
    { id: "hummingbird-hls", featured: true, day: "2026-10-27", start: "17:00", end: "20:00",
      title: "Healthcare & Life Sciences Happy Hour", host: "Hummingbird", hostUrl: "https://hummingbirdworks.ai",
      venue: "Losers Bar, MGM Grand", kind: "Happy hour", audience: "hls", access: "register",
      limit: "Limited to 40 guests",
      summary: "Health and Life Sciences leaders and Microsoft insiders talking AI, Copilot, agents, low-code and what is genuinely delivering results this year. Drinks and small plates. No stage, no slides, no pitch.",
      reg: { url: "https://hummingbirdworks.ai/events/hummingbird-hls-happy-hour-ppcc", label: "Request to attend" },
      regNote: "Hummingbird confirms your request by email, then sends the calendar invite and full details once approved.",
      tip: "Losers Bar is one of the first spots you see as you walk out of the conference at the MGM Grand." },

    { id: "brooksource", day: "2026-10-27", start: "17:00", end: "19:30",
      title: "Brooksource & Microsoft at Crush", host: "Brooksource", hostUrl: "https://www.brooksource.com",
      venue: "Crush, MGM Grand", kind: "Dinner", audience: "hls", access: "register",
      summary: "Cocktails, a seated dinner and good conversation, hosted with Microsoft. Expect other healthcare payers and providers in the room.",
      reg: { url: "https://www.brooksource.com/microsoft-power-platform", label: "RSVP" } },

    { id: "ey", day: "2026-10-27", start: "18:00", end: "20:00",
      title: "Customer Reception", host: "EY", hostUrl: "https://www.ey.com/en_gl/alliances/microsoft",
      venue: "Luchini’s, MGM Grand", kind: "Reception", audience: "open", access: "register",
      summary: "EY, a Platinum sponsor of PPCC 2026, invites customers, prospects and Microsoft colleagues to a Tuesday reception.",
      reg: null, regNote: "Registration is required and EY’s link is coming soon. Ask your Microsoft account team for the invitation." },

    { id: "congruentx-tue", day: "2026-10-27", start: null, end: null, timeNote: "Evening · time confirmed at registration",
      title: "Customer Happy Hour", host: "congruentX", hostUrl: "https://congruentx.com",
      venue: "congruentX MGM Suite", kind: "Happy hour", audience: "open", access: "register",
      summary: "Cocktails, light bites and conversation after a full day at the conference. No presentation and no sales pitch, plus a giveaway of two pairs of custom Nike Dunks.",
      reg: { url: "https://cnj95.share.hsforms.com/2LBk1usVsRli0paGrGhYWiQ", label: "Register" },
      regNote: "Space is limited." },

    { id: "root16-bd", day: "2026-10-27", start: "16:00", end: "21:00",
      title: "Happy Hour at BrewDog", host: "Root16 (a Reply company)", hostUrl: "https://www.reply.com/root16-reply/en",
      venue: "BrewDog Las Vegas", kind: "Happy hour", audience: "open", access: "register",
      summary: "A drop-in happy hour for customers, prospects and Microsoft teams, with a long window so you can come before or after other plans.",
      reg: { url: "https://assets-usa.mkt.dynamics.com/26f01a67-1f8c-45da-a661-979b54ab257b/digitalassets/standaloneforms/38e833bb-f39f-f111-b8dc-000d3a31542c", label: "Register" } },

    { id: "alithya", day: "2026-10-27", start: "18:00", end: "21:00",
      title: "Client Reception at Topgolf", host: "Alithya", hostUrl: "https://www.alithya.com/en",
      venue: "Topgolf", kind: "Reception", audience: "open", access: "ask",
      summary: "A relaxed client reception for PPCC customers, prospects and Microsoft teams.",
      regNote: "No public link yet. Your Microsoft account team can connect you with Alithya." },

    { id: "engineerup-tue", day: "2026-10-27", start: "18:00", end: "20:00",
      title: "Customer Dinner at Craftsteak", host: "Engineer Up", hostUrl: "https://www.engineerup.com",
      venue: "Craftsteak, MGM Grand", kind: "Dinner", audience: "open", access: "ask",
      summary: "A hosted dinner for end-user customers and Microsoft teams. Engineer Up is also a Gold sponsor, so you can find the team at Booth 113.",
      regNote: "No public link yet. Your Microsoft account team can request a seat." },

    { id: "night-market", day: "2026-10-27", start: "17:00", end: "19:30",
      title: "Night Market: Opening Reception", host: "Power Platform Community Conference", hostUrl: "https://powerplatformconf.com",
      venue: "Expo and Makers Market", kind: "Reception", audience: "official", access: "badge",
      summary: "The conference’s official opening reception in the Expo and Makers Market. A natural first stop before a partner event." },

    /* ---- Wednesday ---- */
    { id: "quisitive-hls", day: "2026-10-28", start: null, end: null, sortAt: "12:00", timeNote: "Midday · time to be announced",
      title: "Healthcare & Life Sciences Suite", host: "Quisitive", hostUrl: "https://quisitive.com",
      venue: "Quisitive suite (Booth 120 in the expo)", kind: "Suite and lunch", audience: "hls", access: "ask",
      summary: "A come-and-go suite with snacks and a catered lunch, a quiet break from the crowds. Details are coming from Quisitive.",
      regNote: "Details are still being finalized. Your Microsoft account team can connect you with Quisitive." },

    { id: "visionet", day: "2026-10-28", start: "16:00", end: "19:00",
      title: "Evening Event at Hard Rock Cafe", host: "Visionet", hostUrl: "https://www.visionet.com",
      venue: "Hard Rock Cafe (off-site)", kind: "Evening event", audience: "open", access: "ask",
      summary: "An off-site event for anyone who wants to get away from the casino for a few hours.",
      regNote: "Registration details were shared in the Know Before You Go session. Your Microsoft account team can send you the link." },

    { id: "ttec", day: "2026-10-28", start: "18:00", end: "20:00",
      title: "Frontier Dinner for the Stars", host: "TTEC Digital", hostUrl: "https://www.ttecdigital.com",
      venue: "Luchini’s, MGM Grand", kind: "Dinner", audience: "open", access: "ask",
      summary: "A private dining experience for customers and Microsoft teams. Seating is very limited.",
      regNote: "Seating is very limited. Your Microsoft account team can request a seat." },

    { id: "engineerup-wed", day: "2026-10-28", start: "18:30", end: "20:30",
      title: "Customer Dinner at Hakkasan", host: "Engineer Up", hostUrl: "https://www.engineerup.com",
      venue: "Hakkasan, MGM Grand", kind: "Dinner", audience: "open", access: "ask",
      summary: "A second hosted dinner for end-user customers and Microsoft teams.",
      regNote: "No public link yet. Your Microsoft account team can request a seat." },

    { id: "stoneridge", day: "2026-10-28", start: "18:30", end: "20:30",
      title: "Expo and Happy Hour", host: "Stoneridge Software", hostUrl: "https://stoneridgesoftware.com",
      venue: "Tap Sports Bar, MGM Grand", kind: "Happy hour", audience: "open", access: "ask",
      summary: "A happy hour for customers and prospects. Microsoft teams are welcome too.",
      regNote: "No public link yet. Your Microsoft account team can connect you with Stoneridge." },

    { id: "velrada", day: "2026-10-28", start: null, end: null, timeNote: "Evening · time to be announced",
      title: "Power Swings & Power Platform", host: "Velrada", hostUrl: "https://velrada.com",
      venue: "Topgolf Las Vegas", kind: "Networking", audience: "open", access: "ask",
      summary: "An evening of golf-ball swings and Power Platform conversation with customers and prospects.",
      regNote: "Details are still being finalized. Your Microsoft account team can connect you with Velrada." },

    { id: "wed-expo", day: "2026-10-28", start: "16:30", end: "18:30",
      title: "Expo and Makers Market, plus T-shirt pick-up", host: "Power Platform Community Conference", hostUrl: "https://powerplatformconf.com",
      venue: "Expo and Makers Market", kind: "Expo", audience: "official", access: "badge",
      summary: "The last evening window to browse partner booths and collect your conference T-shirt." },

    { id: "pitbull", day: "2026-10-28", start: "20:00", end: null, endNote: "End time not published",
      title: "Pitbull Live", host: "Power Platform Community Conference", hostUrl: "https://powerplatformconf.com",
      venue: "MGM Grand Garden Arena", kind: "Concert", audience: "official", access: "badge",
      summary: "An exclusive evening for full conference attendees: live music, drinks and networking. Expect a long line to get in, and bring your badge because it is required for entry." },

    /* ---- Monday: hosted dinners ---- */
    { id: "root16-dinner-mon", day: "2026-10-26", start: "19:00", end: "21:00",
      title: "Hosted Customer Dinner", host: "Root16 (a Reply company)", hostUrl: "https://www.reply.com/root16-reply/en",
      venue: "Various MGM Grand restaurants", kind: "Dinner", audience: "open", access: "ask",
      summary: "Small hosted dinners for qualified customers and prospects, with seats limited to nine.",
      regNote: "Invitation only. Your Microsoft account team can request a seat." },

    { id: "root16-dinner-wed", day: "2026-10-28", start: "19:00", end: "21:00",
      title: "Hosted Customer Dinner", host: "Root16 (a Reply company)", hostUrl: "https://www.reply.com/root16-reply/en",
      venue: "Various MGM Grand restaurants", kind: "Dinner", audience: "open", access: "ask",
      summary: "A second night of small hosted dinners for qualified customers and prospects, with seats limited to nine.",
      regNote: "Invitation only. Your Microsoft account team can request a seat." },

    /* ---- Executive experiences (Lateetud): VP and C-suite, nomination-based ---- */
    { id: "lateetud-golf", group: "exec", days: ["2026-10-26"], day: "2026-10-26", start: "13:30", end: null, noPlan: true,
      options: ["Mon, Oct 26 · 1:30 PM"],
      title: "Bali Hai Executive Scramble", host: "Lateetud", hostUrl: "https://www.lateetud.com",
      venue: "Bali Hai Golf Club", kind: "Executive experience", audience: "exec", access: "ask",
      summary: "A friendly nine-hole scramble with fellow executives, followed by food and drinks at the Tiki Bar. Clubs are provided.",
      reg: { url: "https://mppcc2026.lateetud.com/", label: "VIP registration page" },
      regNote: "For VP and C-suite leaders. Registration needs an access code from your Microsoft account team." },

    { id: "lateetud-xpot", group: "exec", days: ["2026-10-27", "2026-10-28"], day: "2026-10-27", start: "18:00", end: null, noPlan: true,
      options: ["Tue, Oct 27 · 6:00 PM", "or Wed, Oct 28 · 6:00 PM"],
      title: "XPOT Private Table", host: "Lateetud", hostUrl: "https://www.lateetud.com",
      venue: "Details with registration", kind: "Executive experience", audience: "exec", access: "ask",
      summary: "An intimate dinner around a private table with exceptional seafood, A5 Wagyu and conversation with a few executive peers.",
      reg: { url: "https://mppcc2026.lateetud.com/", label: "VIP registration page" },
      regNote: "For VP and C-suite leaders. Registration needs an access code from your Microsoft account team." },

    { id: "lateetud-race", group: "exec", days: ["2026-10-28", "2026-10-29"], day: "2026-10-28", start: "13:30", end: null, noPlan: true,
      options: ["Wed, Oct 28 · 1:30 PM", "or Thu, Oct 29 · morning"],
      title: "Executive Racing Challenge", host: "Lateetud", hostUrl: "https://www.lateetud.com",
      venue: "Details with registration", kind: "Executive experience", audience: "exec", access: "ask",
      summary: "Drive an exotic performance car on a professional track with a small group of executives.",
      reg: { url: "https://mppcc2026.lateetud.com/", label: "VIP registration page" },
      regNote: "For VP and C-suite leaders. Registration needs an access code from your Microsoft account team." },

    /* ---- Still being finalized ---- */
    { id: "winwire", group: "pending", day: null, start: null, end: null, noPlan: true, timeNote: "TBA · date and time",
      title: "Exclusive Client Event", host: "WinWire", hostUrl: "https://www.winwire.com",
      venue: "To be announced", kind: "Client event", audience: "open", access: "ask",
      summary: "WinWire is hosting an exclusive client event and has not published the agenda yet.",
      regNote: "Your Microsoft account team can connect you with WinWire for the invite list." },

    { id: "kerv", group: "pending", day: null, start: null, end: null, noPlan: true, timeNote: "TBA · dates and times",
      title: "Industry Dinners and Lunches", host: "Kerv", hostUrl: "https://kerv.com",
      venue: "To be announced", kind: "Dinners and lunches", audience: "tbd", access: "ask",
      summary: "Industry-specific dinners and lunches for customers and prospects. Ask whether a healthcare session is planned.",
      regNote: "Details are still being finalized. Your Microsoft account team can ask Kerv about a healthcare session." }
  ],

  /* ---------- FAQ ---------- */
  faq: [
    { q: "What does my pass include?",
      a: "Your pass covers all main conference content on Oct 27 to 29: keynotes, breakout sessions, the expo hall and networking events. Lunch is included on those days. Workshops are not included and are booked separately." },
    { q: "What is the difference between a session and a workshop?",
      a: "Sessions are the shorter presentations and demos during the main conference and are included with your pass. Workshops are longer, instructor-led, hands-on classes in small groups, held the days before and after the conference for a separate fee." },
    { q: "How do I add a workshop after I register?",
      a: "Return to the registration portal, edit your registration, choose your workshop or workshops and pay the added fee. Finish by Oct 15, because there are no onsite sign-ups or changes." },
    { q: "Can I transfer my registration?",
      a: "The organizers’ deadline for transfers was Sep 25, and registrations are non-refundable. If your plans changed, email info@powerplatformconf.com to ask what is still possible." },
    { q: "Can I attend virtually?",
      a: "No. The conference is in person only." },
    { q: "Who is speaking?",
      a: "Microsoft product leaders, MVPs and experienced practitioners. Headliners include Charles Lamanna, Ryan Cunningham, Nirav Shah, Leon Welicki and Kim Manis. The full list is on the speakers page." },
    { q: "Will there be certifications?",
      a: "The conference is offering AI and agent certifications on site, a first this year. Check the conference website for the latest details." },
    { q: "How early should I get to the Opening Keynote?",
      a: "Plan to be seated 30 to 45 minutes before the 8:30 AM start. Doors open at 8:00 AM, and once the arena fills they do not allow standing in the corridors. You need your badge to enter." },
    { q: "Where is lunch?",
      a: "Lunch is included Tuesday through Thursday. In past years, lanyard color pointed to your lunch location, so ask at check-in. On workshop days, lunch is included only with a full-day workshop." },
    { q: "What is the dress code?",
      a: "Business casual at most, and plenty of people dress casually. Comfortable shoes matter more than anything else." },
    { q: "Can I bring a guest to the Pitbull concert?",
      a: "Entry requires a PPCC badge. Guest passes are not available." },
    { q: "Who can I ask for help onsite?",
      a: "Anyone in a Microsoft lanyard. The Microsoft booth is staffed by engineers rather than salespeople, and you can message the Microsoft team in Whova." },
    { q: "How do I get time with Microsoft product leaders?",
      a: "Ask your Microsoft account team. They can help arrange one-to-one conversations with Microsoft product and industry leaders during the conference." }
  ],

  /* ---------- Links ---------- */
  links: [
    { group: "Official conference", items: [
      { label: "Conference home",  href: "https://powerplatformconf.com",            note: "Dates, venue and news" },
      { label: "Register",         href: "https://powerplatformconf.com/register",   note: "Passes and workshops" },
      { label: "Sessions",         href: "https://powerplatformconf.com/sessions",   note: "200+ sessions to browse" },
      { label: "Speakers",         href: "https://powerplatformconf.com/speakers",   note: "Who is on stage" },
      { label: "Workshops",        href: "https://powerplatformconf.com/workshops",  note: "Pre- and post-conference" },
      { label: "Hotel and travel", href: "https://powerplatformconf.com/book-hotel", note: "MGM Grand and getting there" },
      { label: "Conference FAQ",   href: "https://powerplatformconf.com/faq",        note: "Official answers" }
    ]},
    { group: "Healthcare community", items: [
      { label: "Know Before You Go video", href: "https://www.youtube.com/watch?v=VpZvCUSRKrs", note: "41 minutes, with chapters here" },
      { label: "Know Before You Go deck",  href: "https://aka.ms/KBYG-Deck",                    note: "Slides from the session" },
      { label: "Power HUG on YouTube",     href: "https://www.youtube.com/@PowerPlatformHUG",   note: "Healthcare Power Platform user group" }
    ]}
  ]
};
