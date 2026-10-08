/* ============================================================
   PPCC 2026 · Know Before You Go · Healthcare & Life Sciences
   All customer-facing content lives in this file.
   Edit here, refresh the page. No build step.
   Times are Pacific (Las Vegas). Dates are ISO (YYYY-MM-DD).
   ============================================================ */
window.KBYG = {
  updated: "2026-10-07",

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

  /* ---------- Product group meeting request (checklist CTA + FAQ) ---------- */
  meet: {
    title: "Meet with Microsoft product group leaders",
    subject: "PPCC 2026: request to meet with Microsoft product group leaders",
    topics: [
      "Governing Power Platform apps, automation and Copilot agents at scale",
      "Roadmap for agents, Copilot Studio and Power Platform",
      "Security, privacy and compliance for regulated healthcare data",
      "Moving from pilot to enterprise scale (environments, ALM, Dataverse)",
      "Managing cost and licensing as usage grows",
      "Connecting to core healthcare systems and data (EHR, claims, CRM)",
      "AI agents and automation for clinical, member or provider workflows",
      "Something else (I will describe it below)"
    ],
    days: ["Tuesday, Oct 27", "Wednesday, Oct 28", "Thursday, Oct 29", "Any day works"]
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
    title: "Healthcare & Life Sciences panel",
    subtitle: "Reimagine Healthcare and Life Sciences with Low Code & AI Agents",
    when: "Wednesday, Oct 28",
    time: "8:00 AM",
    room: "Roundtable Room 353",
    mapId: "floor3",
    blurb: "Peers from across healthcare and life sciences share how AI agents and low-code solutions are reducing friction and improving outcomes. The panelists are hands-on practitioners from health systems. Expect opening remarks, a panel discussion, audience Q&A and a wrap-up. Providers, payers and life sciences are usually all in the room, and it is often standing room only, so plan to arrive early."
  },

  /* ---------- Checklist ---------- */
  checklistGroups: [
    { id: "essentials", title: "Lock in the essentials" },
    { id: "plan",       title: "Plan your conference" },
    { id: "pack",       title: "Pack and prepare" }
  ],

  checklist: [
    { id: "registration", group: "essentials", title: "Confirm your registration",
      detail: "Look for your confirmation email and welcome letter from the conference team. Not registered yet? Sign up on the official site, where group pricing for two or more attendees runs through Oct 9.",
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

    { id: "whova", group: "plan", title: "Get the Whova app and join", due: "2026-10-15", soft: true, dueLabel: "Sessions load mid-October", code: "LasVegas26",
      detail: "Whova is the conference app, and it is available now. Download it, then join the event with the invitation code below. The full schedule, with sessions, times and rooms, loads in mid-October, so check back then to build your agenda. A login from past years still works, and building your agenda in a browser gives you more screen space.",
      links: [{ label: "App Store", href: "https://apps.apple.com/us/app/whova-event-conference-app/id716979741" }, { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.whova.event&hl=en-US&pli=1" }] },

    { id: "sessions", group: "plan", title: "Pick sessions, then pick backups",
      detail: "With 200+ sessions, filter by topic and experience level. Double-book yourself and stay flexible. Rooms on the upper floors are smaller and popular sessions can fill up, so keep a backup in mind." },

    { id: "roundtable", group: "plan", title: "Put the healthcare panel on your calendar",
      detail: "Wednesday, Oct 28 at 8:00 AM in Roundtable Room 353, on the third floor of the Conference Center. It is one of the few sessions built for healthcare and life sciences, with a panel discussion and audience Q&A. It is often standing room only, so plan to arrive early. Rooms can change, so check Whova for the latest.",
      action: "map:floor3" },

    { id: "evenings", group: "plan", title: "RSVP for one or two evening events",
      detail: "Most partner events need advance registration and fill quickly. Many check names at the door. It is fine to register for more than one.", action: "tab:evenings" },

    { id: "leaders", group: "plan", title: "Ask about time to meet with Microsoft product group leaders",
      detail: "Product group leaders are on site, and your Microsoft account team can help request time with them. One-to-one meetings are held Tuesday through Thursday. Tell us what you want to discuss and we will draft the email for you. Governance, scale and roadmap questions are common topics. Availability is limited and not guaranteed, so ask early.",
      action: "meet" },

    { id: "badge", group: "pack", title: "Plan an early badge pickup",
      detail: "Check-in is on the first floor of the MGM Grand Conference Center. Picking up your badge on Monday (7:30 AM to 5:00 PM) keeps Tuesday morning simple. You need your badge to enter the Opening Keynote.", action: ["tab:ground", "maps"] },

    { id: "shoes", group: "pack", title: "Pack comfortable shoes and layers",
      detail: "Expect 10,000+ steps a day. The casino and session rooms run cold, so bring something light you can take on and off." },

    { id: "charger", group: "pack", title: "Bring a charger or power bank",
      detail: "Between Whova, messaging and photos, your battery will take a beating." }
  ],

  /* ---------- Venue: badge hours ---------- */
  badgeHours: [
    { day: "Sunday, Oct 25",     date: "2026-10-25", hours: "7:30 AM to 2:00 PM" },
    { day: "Monday, Oct 26",     date: "2026-10-26", hours: "7:30 AM to 5:00 PM", tip: "Best day to pick up" },
    { day: "Tuesday, Oct 27",    date: "2026-10-27", hours: "6:30 AM to 5:00 PM", tip: "Keynote rush" },
    { day: "Wednesday, Oct 28",  date: "2026-10-28", hours: "7:00 AM to 4:00 PM" },
    { day: "Thursday, Oct 29",   date: "2026-10-29", hours: "7:00 AM to 4:00 PM" }
  ],

  /* ---------- 3 Perfect Days (official agenda anchors) ---------- */
  days: [
    {
      id: "tue", date: "2026-10-27", label: "Tuesday", short: "Oct 27", n: 1, theme: "Learn",
      line: "The big announcements land first thing.",
      agenda: [
        { time: "6:30 AM",           text: "Check-in opens at the Conference Center" },
        { time: "8:00 AM",           text: "Arena doors open" },
        { time: "8:30 to 10:00 AM",   text: "Opening Keynote", who: "Charles Lamanna and Ryan Cunningham", key: true },
        { time: "10:00 AM",          text: "Expo Hall and Makers Market open" },
        { time: "11:30 AM to 12:30 PM", text: "What’s New with Power BI & Fabric", who: "Kim Manis" },
        { time: "12:30 to 2:00 PM",   text: "Lunch", note: "The Women in Power Networking Luncheon runs at the same time in its own lunch hall. Sign up in Whova" },
        { time: "2:00 to 3:00 PM",    text: "What’s New with Copilot Studio", who: "Bryan Goode and Jason Moore" },
        { time: "4:00 to 5:00 PM",    text: "What’s New with Power Apps", who: "Leon Welicki and Tiffany Treacy" },
        { time: "5:00 to 7:30 PM",    text: "Night Market: Opening Reception", note: "Expo and Makers Market. Women in Power hosts a meetup here too" }
      ],
      evening: "Busiest night for partner events. Hummingbird’s Healthcare & Life Sciences Happy Hour starts at 5:00 PM."
    },
    {
      id: "wed", date: "2026-10-28", label: "Wednesday", short: "Oct 28", n: 2, theme: "Build",
      line: "Go deep on agents, and meet your healthcare peers.",
      agenda: [
        { time: "8:00 to 9:00 AM",    text: "Building End to End Agents with Copilot Studio", who: "Jason Moore and Soufiane Loukili" },
        { time: "9:00 AM",           text: "Expo Hall and Makers Market open" },
        { time: "10:00 to 11:00 AM",  text: "The Future of Agent Apps", who: "Clay Wesener" },
        { time: "11:30 AM to 12:30 PM", text: "From Work IQ to Agent 365: Building and Managing the Agentic Enterprise", who: "Nirav Shah" },
        { time: "12:30 PM",          text: "Lunch" },
        { time: "2:00 to 3:00 PM",    text: "Sessions", note: "Titles to be announced. Includes the Women in Power Panel, open to everyone" },
        { time: "3:30 to 4:30 PM",    text: "Sessions", note: "Titles to be announced" },
        { time: "4:30 to 6:30 PM",    text: "Expo and Makers Market, plus conference T-shirt pick-up" },
        { time: "8:00 to 10:00 PM",   text: "Pitbull live in the MGM Grand Garden Arena", key: true }
      ],
      hls: { time: "8:00 AM · Roundtable Room 353", text: "Healthcare & Life Sciences panel" },
      evening: "Brooksource hosts a healthcare social reception at the Lobby Bar from 5:30 to 7:30 PM. Partner dinners wrap up around the time Pitbull starts, and the arena line is long. Plan your timing."
    },
    {
      id: "thu", date: "2026-10-29", label: "Thursday", short: "Oct 29", n: 3, theme: "Make it real",
      line: "A fireside chat, a last round of sessions, then home with a plan.",
      agenda: [
        { time: "9:00 to 10:00 AM",   text: "Keynote and fireside chat", key: true },
        { time: "10:00 AM",          text: "Expo Hall and Makers Market open" },
        { time: "10:45 to 11:45 AM",  text: "Sessions", note: "Titles to be announced" },
        { time: "12:00 to 1:00 PM",   text: "Sessions", note: "Titles to be announced" },
        { time: "1:00 to 2:30 PM",    text: "Lunch" },
        { time: "2:30 PM",           text: "Expo Hall and Makers Market close" },
        { time: "2:30 to 3:30 PM",    text: "Sessions", note: "Titles to be announced" },
        { time: "Time to be announced", text: "Women in Power roundtable: Your Network Is Your Net Worth", note: "Small group, 60 minutes, open to everyone. Sign up in Whova" }
      ],
      evening: "The conference wraps mid-afternoon, so there are no evening events listed."
    }
  ],

  /* ---------- Evening events ----------
     audience: hls | open | exec | official | tbd
     access:   register | ask | badge | open
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
    badge:    "Included with your badge",
    open:     "Open: just show up"
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
      blurb: "Meet healthcare and life sciences peers and Microsoft insiders over drinks and small plates. No stage, no slides, no pitch.",
      summary: "Health and Life Sciences leaders and Microsoft insiders talking AI, Copilot, agents, low-code and what is genuinely delivering results this year. Drinks and small plates. No stage, no slides, no pitch.",
      reg: { url: "https://hummingbirdworks.ai/events/hummingbird-hls-happy-hour-ppcc", label: "Request to attend" },
      regNote: "Hummingbird confirms your request by email, then sends the calendar invite and full details once approved.",
      tip: "Losers Bar is one of the first spots you see as you walk out of the conference at the MGM Grand." },

    { id: "brooksource", day: "2026-10-27", start: "17:00", end: "19:30",
      title: "Brooksource & Microsoft at Craftsteak", host: "Brooksource", hostUrl: "https://www.brooksource.com",
      venue: "Tom Colicchio’s Craftsteak, MGM Grand", kind: "Dinner", audience: "hls", access: "register",
      summary: "Cocktails, a seated dinner and good conversation, hosted with Microsoft. Expect other healthcare payers and providers in the room.",
      reg: { url: "https://www.brooksource.com/microsoft-power-platform", label: "RSVP" } },

    { id: "ey", day: "2026-10-27", start: "18:00", end: "20:00",
      title: "Customer Reception", host: "EY", hostUrl: "https://www.ey.com/en_gl/alliances/microsoft",
      venue: "Luchini’s, MGM Grand", kind: "Reception", audience: "open", access: "register",
      summary: "EY, a Platinum sponsor of PPCC 2026, invites customers, prospects and Microsoft colleagues to a Tuesday reception.",
      reg: null, regNote: "Registration is required and EY’s link is coming soon. Ask your Microsoft account team for the invitation." },

    { id: "congruentx-tue", day: "2026-10-27", start: "16:30", end: "18:30",
      title: "Customer Happy Hour", host: "congruentX", hostUrl: "https://congruentx.com",
      venue: "congruentX MGM Suite", kind: "Happy hour", audience: "open", access: "register",
      summary: "Cocktails, light bites and conversation after a full day at the conference. No presentation and no sales pitch, plus a giveaway of two pairs of custom Nike Dunks.",
      reg: { url: "https://cnj95.share.hsforms.com/2LBk1usVsRli0paGrGhYWiQ", label: "Register" },
      regNote: "Space is limited." },

    { id: "cyclotron", day: "2026-10-27", start: "17:30", end: "20:30",
      title: "Happy Hour at Hakkasan", host: "Cyclotron", hostUrl: "https://cyclotron.com",
      venue: "Hakkasan, MGM Grand", kind: "Happy hour", audience: "open", access: "register",
      summary: "Cyclotron and Microsoft host a happy hour to unwind with good drinks and great company after the conference day. It is free to attend, and drinks are included.",
      reg: { url: "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=a2ODZVbRLkmGzrj8y3kN8Y4owkqkyRtJouHxvCySKpdUNDRGS1YzTU9RTUNPNTJHRUJPMDI3RjA2RC4u", label: "Register" },
      regNote: "Register to secure your spot." },

    { id: "root16-bd", day: "2026-10-27", start: "16:00", end: "21:00",
      title: "Happy Hour at BrewDog", host: "Root16 (a Reply company)", hostUrl: "https://www.reply.com/root16-reply/en",
      venue: "BrewDog Las Vegas (5-minute walk from MGM Grand)", address: "3767 Las Vegas Blvd S, Las Vegas, NV", kind: "Happy hour", audience: "open", access: "register",
      summary: "A happy hour for customers, prospects and Microsoft teams, away from the conference floor, with a long window so you can come before or after other plans.",
      reg: { url: "https://assets-usa.mkt.dynamics.com/26f01a67-1f8c-45da-a661-979b54ab257b/digitalassets/standaloneforms/38e833bb-f39f-f111-b8dc-000d3a31542c", label: "Register" },
      regNote: "Please RSVP so Root16 can plan for an estimated 200 to 300 guests." },

    { id: "alithya", day: "2026-10-27", start: "18:00", end: "21:00",
      title: "Client Reception at Topgolf", host: "Alithya", hostUrl: "https://www.alithya.com/en",
      venue: "Topgolf, next to MGM Grand", kind: "Reception", audience: "open", access: "ask",
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
    /* Featured Wednesday: times are Pacific. The invite shows 6:30 to 8:30 PM Mountain, which is 5:30 to 7:30 PM Las Vegas time. */
    { id: "brooksource-wed", featured: true, day: "2026-10-28", start: "17:30", end: "19:30",
      title: "Lobby Bar Social Reception", host: "Brooksource", hostUrl: "https://www.brooksource.com",
      venue: "Lobby Bar, MGM Grand", address: "3799 S Las Vegas Blvd, Las Vegas, NV 89109", kind: "Social reception", audience: "hls", access: "ask",
      limit: "Limited to 30 guests",
      blurb: "Bring your team to a relaxed social reception with Brooksource’s healthcare specialists and your Microsoft team, right inside the MGM Grand.",
      summary: "A relaxed social reception hosted by Brooksource at the Lobby Bar, inside the MGM Grand. Bring your team and connect with Brooksource’s healthcare and life sciences specialists and your Microsoft healthcare team.",
      tip: "The Lobby Bar is inside the MGM Grand, on the walk from the hotel front desk into the casino.",
      tipMap: "resort",
      ask: { label: "Reserve a spot", body: "Please reserve a spot for me at the Lobby Bar Social Reception with Brooksource on Wednesday, Oct 28.\n\nName:\nOrganization:\nNumber of guests, including me:\n" },
      regNote: "Space is limited to 30 guests, so reserve your spot with your Microsoft account team. Brooksource will share a flyer with final details soon." },

    { id: "quisitive-hls", day: "2026-10-28", start: "11:30", end: "13:30",
      title: "Healthcare & Life Sciences Lunch", host: "Quisitive", hostUrl: "https://quisitive.com",
      venue: "Quisitive suite", kind: "Lunch", audience: "hls", access: "ask",
      summary: "A catered, healthcare-focused lunch hosted with Microsoft in the Quisitive suite. Come and go during the window, and take a quiet break from the crowds.",
      regNote: "Space is limited. Your Microsoft account team can connect you with Quisitive for an invitation." },

    { id: "root16-lounge", day: "2026-10-28", start: "09:00", end: "16:00",
      title: "Hospitality Lounge at Emeril’s", host: "Root16 (a Reply company)", hostUrl: "https://www.reply.com/root16-reply/en",
      venue: "Emeril’s New Orleans Fish House, MGM Grand", kind: "Hospitality lounge", audience: "open", access: "open",
      summary: "An all-day hospitality lounge serving breakfast, lunch and happy hour for customers, prospects and Microsoft teams. Drop in between sessions. No RSVP is needed to stop by.",
      regNote: "Want to reserve a space for a customer meeting? Your Microsoft account team can contact Root16." },

    /* WinWire: one event with two drop-in windows, so two rows keep the timeline, plan and calendar export accurate. Times are Las Vegas local. */
    { id: "winwire-midday", day: "2026-10-28", start: "11:00", end: "14:00",
      title: "Poolside Lunch & Networking (midday window)", host: "WinWire", hostUrl: "https://www.winwire.com",
      venue: "Producers Pool Cabana, MGM Grand", kind: "Lunch", audience: "open", access: "register",
      summary: "WinWire and Microsoft invite you to take a break from the conference and relax poolside in a private cabana. Expect refreshments, lunch and informal networking with industry peers and Microsoft leaders. No presentations and no agenda.",
      reg: { url: "https://www.winwire.com/power-platform-conference/", label: "RSVP" },
      regNote: "Drop in any time during either window, 11:00 AM to 2:00 PM or 4:00 to 6:00 PM. WinWire has 30 spots available, so RSVP early." },

    { id: "winwire-afternoon", day: "2026-10-28", start: "16:00", end: "18:00",
      title: "Poolside Lunch & Networking (afternoon window)", host: "WinWire", hostUrl: "https://www.winwire.com",
      venue: "Producers Pool Cabana, MGM Grand", kind: "Networking", audience: "open", access: "register",
      summary: "The afternoon drop-in window for WinWire and Microsoft’s poolside gathering. Drinks, food and relaxed conversation in a private cabana, with no presentations and no agenda.",
      reg: { url: "https://www.winwire.com/power-platform-conference/", label: "RSVP" },
      regNote: "Same event as the midday window. RSVP on WinWire’s page, then drop in any time from 4:00 to 6:00 PM." },

    { id: "visionet", day: "2026-10-28", start: "16:00", end: "19:00",
      title: "Where Technology Leaders Connect", host: "Visionet", hostUrl: "https://www.visionet.com",
      venue: "Hard Rock Cafe Las Vegas (off-site)", address: "3771 Las Vegas Blvd S, #120, Las Vegas, NV 89109", kind: "Evening event", audience: "open", access: "register",
      summary: "An evening with Visionet and Microsoft away from the conference floor: crafted cocktails, bites and relaxed conversation with technology and business leaders.",
      reg: { url: "https://info.visionet.com/microsoft-happyhours", label: "Request a spot" },
      regNote: "Space is limited. Complete the form to request your spot." },

    { id: "ttec", day: "2026-10-28", start: "18:00", end: "20:00",
      title: "Connections & Conversations: A Private Dining Experience", host: "TTEC Digital", hostUrl: "https://www.ttecdigital.com",
      venue: "Luchini’s, MGM Grand", kind: "Dinner", audience: "open", access: "register",
      summary: "Dinner and drinks with TTEC Digital and Microsoft at Luchini’s before Pitbull: curated dining, good conversation and time to network with industry leaders and peers after the day’s sessions.",
      reg: { url: "https://events.ttecdigital.com/microsoft-power-platform-community-conference-dinner/", label: "RSVP" },
      regNote: "Seating is very limited, so RSVP early." },

    { id: "engineerup-wed", day: "2026-10-28", start: "18:30", end: "20:30",
      title: "Customer Dinner at Hakkasan", host: "Engineer Up", hostUrl: "https://www.engineerup.com",
      venue: "Hakkasan, MGM Grand", kind: "Dinner", audience: "open", access: "ask",
      summary: "A second hosted dinner for end-user customers and Microsoft teams, with informal conversation around Power Platform and AI. The end time is approximate.",
      regNote: "No public link yet. Your Microsoft account team can request a seat." },

    { id: "stoneridge", day: "2026-10-28", start: "18:30", end: "20:30",
      title: "Expo and Happy Hour", host: "Stoneridge Software", hostUrl: "https://stoneridgesoftware.com",
      venue: "Tap Sports Bar, MGM Grand", kind: "Happy hour", audience: "open", access: "ask",
      summary: "A happy hour for customers and prospects. Microsoft teams are welcome too.",
      regNote: "No public link yet. Your Microsoft account team can connect you with Stoneridge." },

    { id: "velrada", day: "2026-10-28", start: null, end: null, timeNote: "Evening · time to be announced",
      title: "Power Swings & Power Platform", host: "Velrada", hostUrl: "https://velrada.com",
      venue: "Topgolf Las Vegas", kind: "Networking", audience: "open", access: "ask",
      summary: "An evening of golf-ball swings and Power Platform conversation with customers and prospects. Velrada is also exhibiting at Booth 115.",
      regNote: "Details are still being finalized. Your Microsoft account team can connect you with Velrada." },

    { id: "wed-expo", day: "2026-10-28", start: "16:30", end: "18:30",
      title: "Expo and Makers Market, plus T-shirt pick-up", host: "Power Platform Community Conference", hostUrl: "https://powerplatformconf.com",
      venue: "Expo and Makers Market", kind: "Expo", audience: "official", access: "badge",
      summary: "The last evening window to browse partner booths and collect your conference T-shirt." },

    { id: "pitbull", day: "2026-10-28", start: "20:00", end: "22:00",
      title: "Pitbull Live", host: "Power Platform Community Conference", hostUrl: "https://powerplatformconf.com",
      venue: "MGM Grand Garden Arena", kind: "Concert", audience: "official", access: "badge",
      summary: "An exclusive evening for full conference attendees: live music, drinks and networking, scheduled from 8:00 to 10:00 PM. Expect a long line to get in, and bring your badge because it is required for entry.       Guests and plus-ones are not allowed." },

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
    { q: "When and where is the Healthcare & Life Sciences panel?",
      a: "Wednesday, Oct 28 at 8:00 AM in Roundtable Room 353, on the third floor of the Conference Center. The session is “Reimagine Healthcare and Life Sciences with Low Code & AI Agents.” Rooms can change, so check Whova for the latest.",
      mapId: "floor3" },
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
    { q: "How do I get the Whova app?",
      a: "Whova is the conference app, and it is available now on the App Store and Google Play. Download it and join the event with the invitation code LasVegas26. The full schedule, with sessions, times and rooms, loads in mid-October, so check back then to build your agenda.",
      code: "LasVegas26",
      links: [{ label: "App Store", href: "https://apps.apple.com/us/app/whova-event-conference-app/id716979741" }, { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.whova.event&hl=en-US&pli=1" }] },
    { q: "Who can I ask for help onsite?",
      a: "Anyone in a Microsoft lanyard. The Microsoft booth is staffed by engineers rather than salespeople, and you can message the Microsoft team in Whova." },
    { q: "How do I get time to meet with Microsoft product group leaders?",
      a: "Ask your Microsoft account team. They can help request one-to-one time with Microsoft product group leaders during the conference, based on what you want to discuss. Availability is limited and not guaranteed, so ask early.",
      action: "meet" },
    { q: "What is Women in Power?",
      a: "Women in Power is a set of four sessions that are open to everyone, allies included, and free with your pass: a networking luncheon on Tuesday (12:30 to 2:00 PM), a Night Market meetup on Tuesday evening, a panel on Wednesday at 2:00 PM, and a small-group roundtable on Thursday (time to be announced). Registration is required, and you sign up in the Whova app." },
    { q: "Where can I find a map of the venue?",
      a: "Open the maps on the On the Ground tab. They cover where the MGM Grand is, the walking route from the front desk and the Las Vegas Boulevard entrance to the Conference Center, the walkway to the Grand Garden Arena and Expo Hall, and floor plans for all three Conference Center floors.",
      action: "maps" }
  ],

  /* ---------- Venue maps (from the Power HUG Know Before You Go session) ---------- */
  maps: {
    official: {
      label: "Official MGM Grand property map (PDF)",
      href: "https://assets.contentstack.io/v3/assets/bltc6ce635bc4868eb2/blt67c0bdb5f16b8094/mgm-grand-property-map.pdf"
    },
    items: [
      { id: "venue", title: "Where the MGM Grand is",
        blurb: "On the Las Vegas Strip, about a 10-minute drive from Harry Reid International Airport.",
        src: "assets/img/maps/venue.webp", thumb: "assets/img/maps/venue-thumb.webp", w: 989, h: 861, tw: 640, th: 557, videoAt: 946,
        alt: "Street map of the Las Vegas Strip area. Pink stars mark the MGM Grand, just north of Tropicana Avenue, and Harry Reid International Airport to the southeast." },

      { id: "resort", title: "MGM Grand resort map and walking directions",
        blurb: "The full property, with the walking route to the Convention Center traced in teal.",
        src: "assets/img/maps/resort.webp", thumb: "assets/img/maps/resort-thumb.webp", w: 1315, h: 920, tw: 640, th: 448, videoAt: 970,
        alt: "MGM Grand resort floor plan with lists of restaurants, nightlife, shopping, gaming and amenities. A teal line traces the walking route from the front desk and from the Las Vegas Boulevard entrance, through the casino and The District past the Grand Garden Arena, to the Convention Center. Pink stars mark key stops.",
        directions: [
          { from: "From the hotel front desk", steps: [
            "Walk into the casino and pass the Lobby Bar.",
            "Turn right and walk toward the KA Box Office.",
            "Just past Wolfgang Puck, turn right into The District.",
            "Continue through The District, past Craftsteak, International Smoke and the Grand Garden Arena.",
            "At the Spa Mezzanine, take the escalators down toward the pool.",
            "At the pool entrance, turn right and follow the hall to the Convention Center."
          ] },
          { from: "From the Las Vegas Blvd entrance", steps: [
            "Walk through the casino past Hakkasan, TAP and the Jabbawockeez Theater.",
            "Keep going past Avenue Cafe toward CRUSH.",
            "Turn right when you reach L’atelier and head toward The District.",
            "Walk through The District, past Craftsteak, International Smoke and the Grand Garden Arena.",
            "At the Spa Mezzanine, take the escalators down toward the pool.",
            "At the pool entrance, turn right and follow the hall to the Convention Center."
          ] }
        ] },

      { id: "walkway", title: "Hotel to Convention Center walkway",
        blurb: "How the Grand Garden Arena, the Conference Center and the Expo Hall connect.",
        src: "assets/img/maps/walkway.webp", thumb: "assets/img/maps/walkway-thumb.webp", w: 1285, h: 808, tw: 640, th: 402, videoAt: 1054,
        alt: "Simplified map of the MGM Grand. The Grand Garden Arena (upper left, blue) and the MGM Grand Conference Center (upper right, salmon) are joined by the Conference Walkway, with the Marquee Ballroom, which holds the Expo Hall, below the walkway. The arena box office, escalators, Grand Spa and Monorail entrance are labeled along the way." },

      { id: "floor1", title: "Convention Center, 1st floor",
        blurb: "Conference Check-In, the Grand Ballroom and the way out to the Expo Hall.",
        src: "assets/img/maps/floor1.webp", thumb: "assets/img/maps/floor1-thumb.webp", w: 1450, h: 859, tw: 640, th: 379, videoAt: 1090,
        note: "Don’t miss the Expo. It is outside, through the courtyard next to the Marquee Ballroom. The pink arrow on the map points the way.",
        alt: "First-floor plan of the MGM Grand Conference Center. The Grand Ballroom, Boulevard Ballroom, Terrace Ballroom and rooms 101 to 110 are labeled. Conference Registration is outlined in pink near the escalators to the second floor, and the Expo Hall in the Marquee Ballroom is at the lower right." },

      { id: "floor2", title: "Convention Center, 2nd floor",
        blurb: "Vista and Cedar ballrooms plus meeting rooms 201 to 264.",
        src: "assets/img/maps/floor2.webp", thumb: "assets/img/maps/floor2-thumb.webp", w: 1615, h: 773, tw: 640, th: 306, videoAt: 1134,
        alt: "Second-floor plan of the Conference Center. Vista Ballroom (rooms 206 to 211) runs along the bottom, Cedar Ballroom (rooms 250 to 255) is at the lower right, and meeting rooms 201 to 205 and 256 to 264 sit between them. Escalators to the first and third floors are at both ends of the lower corridor." },

      { id: "floor3", title: "Convention Center, 3rd floor",
        blurb: "Premier and Chairman’s ballrooms, the Community Lounge and Room 353, home of the healthcare panel.",
        src: "assets/img/maps/floor3.webp", thumb: "assets/img/maps/floor3-thumb.webp", w: 1585, h: 792, tw: 640, th: 320, videoAt: 1138,
        note: "The Healthcare & Life Sciences panel is in Roundtable Room 353 on Wednesday at 8:00 AM. Look for the 350 to 354 block at the lower right, just past the Community Lounge.",
        alt: "Third-floor plan of the Conference Center. Premier Ballroom (rooms 309 to 320) is in the center and Chairman’s Ballroom (rooms 355 to 370) is on the right, with rooms 301 to 308 and 350 to 354 and the Community Lounge at the bottom center. Room 353, where the healthcare panel is held, is in the 350 to 354 block at the lower right. Elevators lead to the first and second floors." }
    ]
  },

  /* ---------- Links ---------- */
  links: [
    { group: "Official conference", items: [
      { label: "Conference home",  href: "https://powerplatformconf.com",            note: "Dates, venue and news" },
      { label: "Register",         href: "https://powerplatformconf.com/register",   note: "Passes and workshops" },
      { label: "Sessions",         href: "https://powerplatformconf.com/sessions",   note: "200+ sessions to browse" },
      { label: "Speakers",         href: "https://powerplatformconf.com/speakers",   note: "Who is on stage" },
      { label: "Workshops",        href: "https://powerplatformconf.com/workshops",  note: "Pre- and post-conference" },
      { label: "Hotel and travel", href: "https://powerplatformconf.com/book-hotel", note: "MGM Grand and getting there" },
      { label: "MGM Grand property map", href: "https://assets.contentstack.io/v3/assets/bltc6ce635bc4868eb2/blt67c0bdb5f16b8094/mgm-grand-property-map.pdf", note: "Official PDF map of the resort" },
      { label: "Conference FAQ",   href: "https://powerplatformconf.com/faq",        note: "Official answers" }
    ]},
    { group: "Healthcare community", items: [
      { label: "Know Before You Go video", href: "https://www.youtube.com/watch?v=VpZvCUSRKrs", note: "41 minutes, with chapters here" },
      { label: "Know Before You Go deck",  href: "https://aka.ms/KBYG-Deck",                    note: "Slides from the session" },
      { label: "Power HUG on YouTube",     href: "https://www.youtube.com/@PowerPlatformHUG",   note: "Healthcare Power Platform user group" }
    ]}
  ]
};
