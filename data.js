/* ============================================================
   PPCC 2026 · Know Before You Go · Healthcare & Life Sciences
   All customer-facing content lives in this file.
   Edit here, refresh the page. No build step.
   Times are Pacific (Las Vegas). Dates are ISO (YYYY-MM-DD).
   ============================================================ */
window.KBYG = {
  updated: "2026-10-19",

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

  /* ---------- Hosting-partner contacts ----------
     Request-to-attend emails go to the host's own contact, never to Microsoft staff.
     Events point here with ask.partner. Each address appears once, in this table only.
     Optional: role (shown after the name) and aside (one short sentence shown after the address).
     ------------------------------------------------------------ */
  partners: {
    alithya:     { org: "Alithya",             name: "Francois Khan",      email: "Francois.khan@alithya.com" },
    brooksource: { org: "Brooksource",         name: "Annie Kafka",        role: "event coordinator", email: "akafka@eightelevengroup.com",
                   aside: "Her address ends in eightelevengroup.com because Brooksource is part of the Eight Eleven family of companies." },
    engineerup:  { org: "Engineer Up",         name: "Brian Columbus",     email: "Brian.Columbus@engineerup.com" },
    kerv:        { org: "Kerv",                name: "William Dorrington", email: "William.Dorrington@kerv.com" },
    quisitive:   { org: "Quisitive",           name: "Avi Sujeeth",        email: "Avi.Sujeeth@quisitive.com" },
    root16:      { org: "Root16",              name: "Jeff Meister",       email: "je.meister@reply.com" },
    stoneridge:  { org: "Stoneridge Software", name: "Zarea Barber",       email: "zarea.barber@stoneridgesoftware.com" }
  },

  tabs: [
    { id: "start",    label: "Start Here" },
    { id: "before",   label: "Before You Go" },
    { id: "ground",   label: "On the Ground" },
    { id: "evenings", label: "Evening Events" },
    { id: "exec",     label: "Executive Experience" },
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

    { id: "whova", group: "plan", title: "Get the Whova app and join", due: "2026-10-15", soft: true, dueLabel: "Sessions are live", code: "LasVegas26",
      detail: "Whova is the conference app, and it is open now. Download it, then sign up with the work email address you registered with. Whova uses two-factor sign-in, so it emails you a verification code each time you log in; check your spam folder if it does not show up. You are usually added to the event automatically. If Whova asks for an invitation code, use the one below. If that code does not work, look for a backup code in the Whova invitation email sent to the address you registered with. The full schedule, with sessions, times and rooms, is now live, so you can build your agenda. A login from past years still works, and building your agenda in a browser gives you more screen space.",
      links: [{ label: "App Store", href: "https://apps.apple.com/us/app/whova-event-conference-app/id716979741" }, { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.whova.event&hl=en-US&pli=1" }] },

    { id: "sessions", group: "plan", title: "Pick sessions, then pick backups",
      detail: "With 200+ sessions, filter by topic and experience level. Double-book yourself and stay flexible. Rooms on the upper floors are smaller and popular sessions can fill up, so keep a backup in mind.", action: "tab:days" },

    { id: "roundtable", group: "plan", title: "Put the healthcare panel on your calendar",
      detail: "Wednesday, Oct 28 at 8:00 AM in Roundtable Room 353, on the third floor of the Conference Center. It is one of the few sessions built for healthcare and life sciences, with a panel discussion and audience Q&A. It is often standing room only, so plan to arrive early. Rooms can change, so check Whova for the latest.",
      action: "map:floor3" },

    { id: "evenings", group: "plan", title: "RSVP for one or two evening events",
      detail: "Most partner events need advance registration and fill quickly. Many check names at the door. It is fine to register for more than one.", action: "tab:evenings" },

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

  /* ---------- 3 Perfect Days: Whova call to action (top of the tab, under the Picks are live badge) ---------- */
  whovaCta: {
    text: "Add these sessions to your agenda in the Whova app",
    links: [
      { label: "Apple App Store", href: "https://apps.apple.com/us/app/whova-event-conference-app/id716979741" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.whova.event&hl=en-US&pli=1" }
    ]
  },

  /* ---------- 3 Perfect Days ----------
     picks:   one entry per time slot. options are shown together as cards, best choice first; two options in a slot appear
              side by side so people can choose. alts are the collapsible "Also at this time" list.
              kind: "key" main-stage keynote or talk, or headliner, "hls" healthcare session, "rec" recommended session. badge: "Top Pick" for the
              first choice, "Top Alternative" for the second. note is an optional tip.
              Room, time, level and format come from the official session list. App.js works out the floor from the room number.
              Where it is: a card or row shows its room (checked against the official list, with the floor added by app.js) or, when
              there is no room to show, a plain where line such as the lanyard color note for meals. A card that is not on the
              public list yet says to check Whova.
     agenda:  official rows only: check-in, expo hours, meals, Women in Power and evening events. Do not repeat a keynote or session
              that already has a card. A row whose time is exactly a slot’s time shows under that slot; the other rows sit between
              the slots in time order. evening is the closing note for the day.
     ------------------------------------------------------------ */
  days: [
    {
      id: "tue", date: "2026-10-27", label: "Tuesday", short: "Oct 27", n: 1, theme: "Learn",
      line: "The big announcements land first thing, then the Copilot Studio and Power Apps product talks.",
      picks: [
        { time: "8:30 to 10:00 AM",
          options: [
            { kind: "key", badge: "Keynote",
              title: "PPCC 2026 Opening Keynote", room: "MGM Grand Garden Arena", format: "Keynote",
              why: "Charles Lamanna and Ryan Cunningham open the conference with what is next for Power Platform, Copilot Studio and agents. Doors open at 8:00 AM, and you need your badge to get in.",
              note: "Plan to be seated 30 to 45 minutes early. Once the arena fills, standing in the corridors is not allowed.",
              tags: ["Roadmap", "Agents"] }
          ] },
        { time: "11:30 AM to 12:30 PM",
          options: [
            { kind: "rec", badge: "Top Pick",
              title: "Roundtable: Apps, Agents & AI: Strategy at Scale", room: "Premier Ballroom 318", format: "Roundtable", level: "Intermediate",
              why: "How do you go from a handful of successful apps and agents to enterprise-wide adoption without a large center of excellence? This interactive roundtable compares what is working on governance guardrails, maker enablement and measuring ROI on agents that reach production. It is a discussion, not a lecture, and you leave with a checklist of guardrails to set before you scale.",
              tags: ["Copilot Studio", "Governance", "Makers and adoption"] },
            { kind: "key", badge: "Product Talk",
              title: "Product Talk: What’s Next in Microsoft Fabric & Power BI: The Data Foundation for AI", room: "MGM Grand Garden Arena", format: "Product Talk", level: "Intermediate",
              why: "Kim Manis, CVP of Product for Microsoft Fabric, on how Fabric, OneLake and Power BI give agents a trusted data foundation.",
              note: "In the Garden Arena, a walk from the Conference Center, so leave a few extra minutes." }
          ],
          alts: [
            { title: "Beyond the CRM Screen: Headless CRM in the Age of Copilot", room: "Premier Ballroom 311", time: "11:45 AM to 12:45 PM", format: "Session",
              note: "Dynamics 365 as the platform behind agents and Copilot, following one customer journey from frontline staff to compliance reviewers. The example is a bank, and the same pattern applies to member and patient service. It starts at 11:45 AM and runs 15 minutes into lunch." },
            { title: "Getting Started with Agent 365", room: "Premier Ballroom 319", format: "Session", level: "Foundational",
              note: "Core concepts, deployment, governance, security and adoption for agents across your organization." },
            { title: "Work, Reimagined: Copilot, Cowork & the Power Platform", room: "Boulevard Ballroom 163", format: "Session", level: "Intermediate",
              note: "How Microsoft 365 Copilot, Cowork and Power Platform apps come together, with live demos." }
          ] },
        { time: "2:00 to 3:00 PM",
          options: [
            { kind: "key", badge: "Product Talk",
              title: "Product Talk: What’s New with Copilot Studio", room: "MGM Grand Garden Arena", format: "Product Talk",
              why: "Bryan Goode and Jason Moore on what is new and next in Copilot Studio, with demos of building agents, connecting them to business processes and data, and moving from experiments to real impact.",
              note: "In the Garden Arena, a walk from the Conference Center, so leave a few extra minutes.",
              tags: ["Copilot Studio", "Roadmap"] },
            { kind: "rec", badge: "Top Alternative",
              title: "Exec Panel: The Token Meter Is Running, What It Takes to Get Max ROI from AI Agents", room: "Premier Ballroom 319", format: "Session", level: "Intermediate",
              why: "A Microsoft corporate vice president and customer executives on the real bill for agents: getting the data ready, consumption billing and proving lasting value to the CFO. You leave with one thing to do differently in the next 90 days.",
              tags: ["Cost and ROI", "Leaders"] }
          ],
          alts: [
            { title: "Your Processes, Now Intelligent: Process Mining and Optimization", room: "Grand Ballroom 119", format: "Session", level: "Intermediate",
              note: "Process mining and process intelligence show how work really happens, so you can find the biggest improvement opportunities and build a base for smarter automation and AI. Includes practical scenarios, lessons learned and where Process Intelligence in Power Platform is headed." },
            { title: "Don’t Start Over: Move Copilot Studio Agents to the GitHub Copilot Harness",
              where: "Check Whova for the room",
              note: "For teams that already built agents in Copilot Studio: how to move them to the GitHub Copilot harness instead of starting over. It is not on the public session list yet, so check the Whova app for the level and the latest details." },
            { title: "Governing Agents at Scale", room: "Premier Ballroom 318", format: "Roundtable", level: "Intermediate",
              note: "How governance and admin duties should span the Power Platform admin center and Agent 365, and how agent centers of excellence partner with IT and security." },
            { title: "Demystifying Copilot Studio Licensing", room: "Grand Ballroom 116", format: "Session", level: "Foundational",
              note: "License types, where they overlap and how to save on cost without breaking the rules." },
            { title: "Building on Power Platform: Choosing the Right Tool for the Job", room: "Premier Ballroom 316", format: "Session", level: "Intermediate",
              note: "A practical guide to choosing the right tool, from Code Apps and Generative Pages to vibe apps, and moving between AI-assisted creation and pro-code precision." }
          ] },
        { time: "4:00 to 5:00 PM",
          options: [
            { kind: "key", badge: "Product Talk",
              title: "Product Talk: What’s New with Power Apps", room: "MGM Grand Garden Arena", format: "Product Talk",
              why: "Leon Welicki and Tiffany Treacy on what is new in Power Apps and how makers turn ideas into intelligent, enterprise-ready apps faster.",
              note: "In the Garden Arena, a walk from the Conference Center, so leave a few extra minutes.",
              tags: ["Power Apps", "Roadmap"] },
            { kind: "rec", badge: "Top Alternative",
              title: "When One Agent Isn’t Enough: Designing Scalable Multi-Agent Systems", room: "Grand Ballroom 116", format: "Session", level: "Advanced",
              why: "Single agents hit their limits quickly. This deep dive covers when to build one generalist agent versus several specialists, orchestration patterns like routing and handoffs, and how to choose a knowledge strategy, with demos that include a self-service agent calling specialized HR and IT sub-agents.",
              tags: ["Copilot Studio", "Agents"] }
          ],
          alts: [
            { title: "Enabling Vibe Coding in Copilot Studio at Scale Across Organizations", room: "Premier Ballroom 318", format: "Roundtable", level: "Intermediate",
              note: "Vibe coding puts app building in more hands, and scaling it takes more than enthusiasm. Compare notes on what to put in place first: governance, enablement, quality, security and culture." },
            { title: "Beyond the Basics: the GitHub Copilot Harness and Workflows in Copilot Studio", room: "Premier Ballroom 316", format: "Session", level: "Advanced",
              note: "A technical deep dive into the GitHub Copilot harness in Copilot Studio, built for reasoning-heavy agents and workflows that automate a business process end to end." },
            { title: "Delegate It to Cowork: From Meeting to Working App, Agent, and Flow", room: "Boulevard Ballroom 162", format: "Session", level: "Intermediate",
              note: "A demo of a Teams meeting becoming a spec, an app, an agent and a flow, plus how IT stays in control." }
          ] }
      ],
      agenda: [
        { time: "6:30 AM to 5:00 PM", text: "Conference Check-In and badge pickup", where: "1st floor, MGM Grand Conference Center" },
        { time: "7:00 to 8:00 AM", text: "Grab-and-go breakfast", where: "Based on your lanyard color" },
        { time: "8:00 to 8:30 AM", text: "Arena doors open, and everyone is seated for the keynote", where: "MGM Grand Garden Arena" },
        { time: "10:00 AM", text: "Expo Hall and Makers Market open" },
        { time: "12:30 to 2:00 PM", text: "Lunch", where: "Based on your lanyard color", note: "Lunch is open until 2:00 PM, so a quick bite fits around a session. The Women in Power Networking Luncheon runs at the same time in its own lunch hall. Sign up in Whova" },
        { time: "5:00 to 7:30 PM", text: "Night Market: Opening Reception", note: "Expo and Makers Market. Women in Power hosts a meetup here too" }
      ],
      evening: "Busiest night for partner events. Hummingbird’s Healthcare & Life Sciences Happy Hour starts at 5:00 PM."
    },
    {
      id: "wed", date: "2026-10-28", label: "Wednesday", short: "Oct 28", n: 2, theme: "Build",
      line: "Go deep on agents, and meet your healthcare peers.",
      picks: [
        { time: "8:00 to 9:00 AM",
          options: [
            { kind: "hls", badge: "Built for healthcare",
              title: "Reimagine Healthcare and Life Sciences with Low Code & AI Agents", room: "Room 353", format: "Roundtable", level: "Foundational",
              why: "The one session built for healthcare and life sciences. Innovators from across the industry share how low code and agents are cutting friction and improving health outcomes, with audience Q&A. Arrive early; it is often standing room only.",
              tags: ["Healthcare", "Customer stories"] },
            { kind: "key", badge: "Innovation Talk",
              title: "Innovation Session: Building End-to-End Agents with Copilot Studio", room: "MGM Grand Garden Arena", format: "Innovation Talk",
              why: "Jason Moore and Soufiane Loukili take an agent from design to production, with live demos of grounding it in business data, then testing, monitoring and running it securely at enterprise scale.",
              note: "In the Garden Arena, a walk from the Conference Center, so leave a few extra minutes.",
              tags: ["Copilot Studio", "Agents"] }
          ],
          alts: [
            { title: "The Meter Is Running: FinOps for Agents in a Consumption World", room: "Room 354", format: "Roundtable", level: "Intermediate",
              note: "In the same block of rooms, so an easy switch if the panel is full. Bring one real agentic workflow and run a quick FinOps loop: attribute the cost, optimize, quantify the return and decide who owns the number." },
            { title: "Meet Microsoft Autopilot: A Personal, Persistent, Proactive AI Agent for Work", room: "Boulevard Ballroom 163", format: "Session", level: "Foundational",
              note: "Where Microsoft Autopilot fits in the Microsoft AI portfolio, with its capabilities, use cases and demos." },
            { title: "RPA at Scale: What’s New, What’s Next, and What’s Driving Rapid Enterprise Adoption", room: "Grand Ballroom 119", format: "Session", level: "Intermediate",
              note: "What is new and next in Power Automate RPA, with real-world examples of scaling automation across legacy and modern systems." },
            { title: "Managed Security: Securing and Governing Apps, Automations, and Agents at Scale", room: "Premier Ballroom 319", format: "Session", level: "Intermediate",
              note: "An agentic admin experience: ask questions about your tenant in plain language, then act on them, with a plan you approve before anything changes." }
          ] },
        { time: "10:00 to 11:00 AM",
          options: [
            { kind: "key", badge: "Innovation Talk",
              title: "Innovation Session: The Future of Agentic Apps", room: "MGM Grand Garden Arena", format: "Innovation Talk",
              why: "Clay Wesener and Emma Cooper show three live demos of building agentic apps with Power Apps, plus practical patterns for bringing that intelligence into the apps your organization already relies on.",
              note: "In the Garden Arena, a walk from the Conference Center, so leave a few extra minutes.",
              tags: ["Power Apps", "Agents"] },
            { kind: "rec", badge: "Top Alternative",
              title: "Managed Apps Built with Cowork, Copilot Studio and the SDK", room: "Grand Ballroom 119", format: "Session", level: "Advanced",
              why: "How to build task-focused, AI-powered business apps that go beyond chat, and when to use Cowork, Copilot Studio or the SDK. Covers architecture choices, governance, security, licensing and the maker and developer experience, with practical examples and demos.",
              tags: ["Copilot Studio", "Cowork", "Governance"] }
          ],
          alts: [
            { title: "AI Agents Meet Dataverse: Building Intelligent Automations with Microsoft Agent Framework", room: "Grand Ballroom 114", format: "Session", level: "Advanced",
              note: "Watch an agent get built live that queries Dataverse, analyzes customer data and recommends next best actions." },
            { title: "Managed Governance: Governing Copilot Studio Without Killing Innovation", room: "Boulevard Ballroom 162", format: "Session", level: "Intermediate",
              note: "Governance signals move earlier into the maker experience, so makers hit fewer blockers late." },
            { title: "The Copilot Compass: Finding True North Across Copilot, Cowork, Scout, and Agents", room: "Chairman’s Ballroom 368", format: "Session", level: "Intermediate",
              note: "A demo-driven guide to choosing the right tool across Copilot, Cowork, Scout and agents." }
          ] },
        { time: "11:30 AM to 12:30 PM",
          options: [
            { kind: "key", badge: "Featured session",
              title: "From Work IQ to Agent 365: Building and Managing the Agentic Enterprise", format: "Session",
              why: "Nirav Shah, who leads Agent 365 and Agent Cloud, on how Work IQ and Agent 365 fit together for building and managing the agentic enterprise.",
              where: "Check Whova for the room",
              note: "It is on the official agenda but not in the session list yet.",
              tags: ["Agent 365", "Work IQ"] },
            { kind: "rec", badge: "Top Alternative",
              title: "Power Apps + Power Automate: Best Practices for Building Production-Ready Solutions", room: "Boulevard Ballroom 163", format: "Session", level: "Advanced",
              why: "The Power CAT team on proven practices for apps and flows that hold up in production: performance as usage grows, flows that are easier to troubleshoot, fewer fragile dependencies and a sound ALM setup.",
              tags: ["Power Apps", "Power Automate", "Power CAT"] }
          ],
          alts: [
            { title: "From Traditional to Agentic RPA: The Next Evolution", room: "Chairman’s Ballroom 370", format: "Session", level: "Intermediate",
              note: "How Power Automate becomes agent-enhanced, pairing the reliability of RPA with the reasoning of AI while you keep control and governance." },
            { title: "Operationalizing Agents at Scale: The Agentic COE Playbook", room: "Premier Ballroom 316", format: "Session", level: "Intermediate",
              note: "The structures, roles, guardrails and operating rhythms of an agentic center of excellence." },
            { title: "Extend Copilot Cowork: Build and Ship a Plugin in 45 Minutes", room: "Boulevard Ballroom 162", format: "Session", level: "Advanced",
              note: "Watch a Cowork plugin get built live, with an MCP server, a skill and guardrails admins will approve." }
          ] },
        { time: "2:00 to 3:00 PM",
          options: [
            { kind: "rec", badge: "Top Pick",
              title: "Secure by Design: Preparing Agents for Production and Scale", room: "Chairman’s Ballroom 368", format: "Session", level: "Intermediate",
              why: "Building an agent is easy. Getting one your security team approves is harder. Covers permissions, data access, DLP policies and guardrails for Copilot Studio agents.",
              tags: ["Security", "Governance"] },
            { kind: "rec", badge: "Top Alternative",
              title: "Customer Story: The 5 Key Steps to Scale Apps, Agents & AI in a 40,000-User Organization", room: "Boulevard Ballroom 163", format: "Session", level: "Intermediate",
              why: "A real customer story. One organization grew from fragmented adoption to 2,500+ makers and 18,000+ monthly active users, with governance in place. You leave with a five-step playbook for scaling apps, agents and AI, from proving value early to building a maker community and lining up executive support.",
              tags: ["Makers and adoption", "Governance", "Customer stories"] }
          ],
          alts: [
            { title: "Reimagining Agentic Automation: Workflows and Agents Together in the Copilot Studio Designer", room: "Grand Ballroom 119", format: "Session", level: "Foundational",
              note: "Decide which parts of a process to script and which to hand to agents, on one design surface." },
            { title: "From Tokens to Business Value", room: "Room 353", format: "Roundtable", level: "Intermediate",
              note: "A roundtable on agent costs, token usage, value and ROI." },
            { title: "Collaborating on Apps with Citizen and Pro Devs", room: "Chairman’s Ballroom 370", format: "Session", level: "Advanced",
              note: "How citizen makers and professional developers divide the work across the app lifecycle without slowing teams down." }
          ] },
        { time: "3:30 to 4:30 PM",
          options: [
            { kind: "key", badge: "Fireside chat",
              title: "Building What’s Next: A Fireside Chat with Jeff Teper, EVP, Apps and Agents", room: "Boulevard Ballroom 162", format: "Session", level: "Foundational",
              why: "A candid conversation with Jeff Teper, EVP of Apps and Agents, about AI, community and where technology is heading.",
              tags: ["Leadership", "Roadmap"] },
            { kind: "rec", badge: "Top Alternative",
              title: "How Microsoft Does IT: Managing and Governing Agents - Empower with Risk Aligned Oversight", room: "Grand Ballroom 119", format: "Session", level: "Intermediate",
              why: "Microsoft’s own IT team shows how it empowers employees to build, deploy and manage agents: governing them in Copilot Studio, managing them with Agent 365, securing the environment with Defender and managing the productivity estate with Purview. A look at how Microsoft uses its own technology to speed up agentic work while keeping risk in check.",
              tags: ["Governance", "Agent 365", "Copilot Studio"] }
          ],
          alts: [
            { title: "How Production GenAI Agents Get Built, Deployed, Funded & Cost-Optimized", room: "Chairman’s Ballroom 368", format: "Session", level: "Foundational",
              note: "Skips the polished demo. Teams from EY, PwC, RSM and Accenture show how real agents get specified, built, tested, deployed and funded, and how to keep costs down." },
            { title: "Why Enterprise Agents Fail; and the Microsoft IQ Answer", room: "Premier Ballroom 310", format: "Session", level: "Foundational",
              note: "Why enterprise agents fail in production, and how Dataverse, Microsoft IQ and Agent 365 supply the business context, organizational awareness and governance guardrails they lack." },
            { title: "From Agent Pilots to Business Value: Proving ROI at Scale", room: "Room 352", format: "Roundtable", level: "Foundational",
              note: "The Power CAT team shares patterns for measuring the business impact of agents, from pilots to scaled deployments." }
          ] }
      ],
      agenda: [
        { time: "7:00 AM to 4:00 PM", text: "Conference Check-In and badge pickup", where: "1st floor, MGM Grand Conference Center" },
        { time: "7:00 to 8:00 AM", text: "Breakfast", where: "Based on your lanyard color" },
        { time: "9:00 AM", text: "Expo Hall and Makers Market open" },
        { time: "12:15 to 2:00 PM", text: "Lunch", where: "Based on your lanyard color" },
        { time: "2:00 to 3:00 PM", text: "Women in Power Panel: Owning Your Power, Claiming Your Seat", room: "Boulevard Ballroom 162", note: "Open to everyone; sign up in Whova. Breakout sessions run at the same time" },
        { time: "4:30 to 6:30 PM", text: "Expo and Makers Market, plus conference T-shirt pick-up" },
        { time: "8:00 to 10:00 PM", text: "Pitbull live in the MGM Grand Garden Arena", key: true }
      ],
      evening: "Brooksource hosts a healthcare social reception at the Lobby Bar from 5:30 to 7:30 PM. Partner dinners wrap up around the time Pitbull starts, and the arena line is long. Plan your timing."
    },
    {
      id: "thu", date: "2026-10-29", label: "Thursday", short: "Oct 29", n: 3, theme: "Make it real",
      line: "A closing keynote, a last round of sessions, then home with a plan.",
      picks: [
        { time: "9:00 to 10:00 AM",
          options: [
            { kind: "key", badge: "Keynote",
              title: "PPCC Closing Keynote: Charles Lamanna in Conversation with Chris Paul", room: "MGM Grand Garden Arena", format: "Keynote",
              why: "Charles Lamanna in conversation with Chris Paul on what it takes to build and lead high-performing teams, and how that mindset carries into executing in a fast-moving tech landscape.",
              note: "In the Garden Arena, a walk from the Conference Center, so leave a few extra minutes.",
              tags: ["Leadership"] }
          ] },
        { time: "10:45 to 11:45 AM",
          options: [
            { kind: "rec", badge: "Top Pick",
              title: "Take Control of Your Power Platform Spend", room: "Grand Ballroom 119", format: "Session", level: "Intermediate",
              why: "The newest cost management and licensing tools in Power Platform: consumption visibility, optimization opportunities and cost allocation across apps, agents, automations and makers.",
              tags: ["Cost and ROI", "Admin"] },
            { kind: "rec", badge: "Top Alternative",
              title: "Vibe Coding in Power Platform", room: "Grand Ballroom 122", format: "Session", level: "Intermediate",
              why: "An interactive, example-driven session on co-creating with AI. See an idea become a working app through iterative prompting across Power Apps, Copilot Studio, Power Automate and Dataverse, plus techniques for cleaner results and shorter delivery times.",
              tags: ["Power Apps", "Copilot Studio", "Makers and adoption"] }
          ],
          alts: [
            { title: "Agent Accounts in Copilot Studio and Agent 365", room: "Boulevard Ballroom 162", format: "Session", level: "Intermediate",
              note: "Entra agent accounts give autonomous agents an identity to work through Office documents, Teams and email, with the permissions and oversight enterprises need." },
            { title: "Managed Platform as the Enterprise Default: Life After the CoE Toolkit", room: "Room 353", format: "Roundtable", level: "Intermediate",
              note: "The Power CAT team leads a roundtable on life after the CoE Toolkit: modern inventory, usage and monitoring tools for governing apps, flows, agents and environments." },
            { title: "Real-World Stories: Becoming a Frontier Firm with Apps and Agents", room: "Chairman’s Ballroom 370", format: "Session", level: "Foundational",
              note: "Leaders trade what worked and what did not on adoption, and how they balanced speed with responsible governance." }
          ] },
        { time: "12:00 to 1:00 PM",
          options: [
            { kind: "rec", badge: "Top Pick",
              title: "Agentic Governance: Secure, Govern, and Operate Your Power Platform at Scale", room: "Premier Ballroom 316", format: "Session", level: "Intermediate",
              why: "The CoE Starter Kit is retiring. This session shows what comes next: build your own center of excellence on the Power Platform API, with real-time inventory, custom reporting, automated controls and plain-language questions through AskAdvisor.",
              tags: ["Governance", "Admin"] },
            { kind: "rec", badge: "Top Alternative",
              title: "Wait, Where Do I Govern My Agents?", room: "Premier Ballroom 310", format: "Session", level: "Intermediate",
              why: "The question customers keep asking: is it the Power Platform admin center, the Microsoft 365 admin center, Copilot Studio, Entra, Purview or Defender? Learn what you govern where, and how Agent 365 and Copilot Studio controls work together so they feel like one tool.",
              tags: ["Agent 365", "Governance", "Copilot Studio"] }
          ],
          alts: [
            { title: "OpenClaw for the Enterprise: Build Your AI Assistant with Copilot, Dataverse, & Foundry", room: "Grand Ballroom 120", format: "Session", level: "Intermediate",
              note: "Takes what made OpenClaw go viral and rebuilds it as an enterprise assistant with Copilot, Power Platform and Foundry: multi-agent orchestration, persistent memory and MCP tool-calling, secured with Entra identity and Purview data protection." },
            { title: "From Shadow AI to Tightly Managed Agentic Tools", room: "Boulevard Ballroom 162", format: "Session", level: "Intermediate",
              note: "How Agent 365 helps teams discover every agent, enforce identity and least-privilege access, and defend against agentic threats." },
            { title: "Migrate RPA from Other Vendors to Power Automate & Copilot Studio", room: "Room 352", format: "Roundtable",
              note: "For organizations running other RPA platforms: how to assess your RPA estate, choose what to migrate, and extend traditional automation with agents and Copilot." }
          ] },
        { time: "1:25 to 1:50 PM",
          options: [
            { kind: "rec", badge: "Top Pick",
              title: "Getting to Know Cowork - Admin and User Overview",
              why: "A 25-minute introduction to Cowork, with an overview for both admins and users.",
              where: "Check Whova for the room",
              note: "It falls during lunch (open 1:00 to 2:30 PM), so you can eat before or after. It is not on the public session list yet.",
              tags: ["Cowork", "Admin"] }
          ] },
        { time: "2:30 to 3:30 PM",
          options: [
            { kind: "rec", badge: "Top Pick",
              title: "Copilot Credits at Scale: Governing Consumption, Empowering Everyone", room: "Chairman’s Ballroom 368", format: "Session", level: "Intermediate",
              why: "Credits are now a line item. Admins, CoE leads and business owners compare how they budget, monitor and allocate Copilot credits while still empowering everyone to use agents.",
              tags: ["Cost and ROI", "Governance", "Copilot Studio"] },
            { kind: "rec", badge: "Top Alternative",
              title: "Right-Size & Secure Your Data Estate: Governing & Managing Dataverse and Dynamics 365", room: "Grand Ballroom 119", format: "Session", level: "Intermediate",
              why: "As Dataverse and Dynamics 365 data grows, so do the cost and compliance questions. See the latest tools for storage and capacity visibility, retention and archival policies, and security models that balance performance and compliance, so you pay only for what you need.",
              tags: ["Cost and ROI", "Governance", "Dynamics 365"] }
          ],
          alts: [
            { title: "Apps, Agents, or Both? Where Should Work Happen in the Agentic Era?", room: "Premier Ballroom 317", format: "Session", level: "Intermediate",
              note: "When should people work in an app, talk to an agent or use both? Covers generative pages, embedded copilots and human-in-the-loop workflows, and you can bring your own scenarios." },
            { title: "Beyond Time Savings: Rethinking ROI and Value for Persistent AI Agents", room: "Room 353", format: "Roundtable", level: "Foundational",
              note: "A roundtable on judging the value of always-on AI agents beyond hours saved, including better decisions, scaled expertise and consumption costs." },
            { title: "Governance of All Your Agents at Scale", room: "Boulevard Ballroom 162", format: "Session", level: "Intermediate",
              note: "Agent 365 governance from admin-led to autonomous: the signals that keep agent risk, approvals, usage, cost and health under control." },
            { title: "Extending Copilot Cowork with Custom Plugins and Workflows with Real-World Customer Use Cases", room: "Premier Ballroom 316", format: "Session", level: "Advanced",
              note: "How to extend Cowork with plugins, tools, skills and workflows, with real customer examples." }
          ] }
      ],
      agenda: [
        { time: "7:00 AM to 4:00 PM", text: "Conference Check-In and badge pickup", where: "1st floor, MGM Grand Conference Center" },
        { time: "7:30 to 8:45 AM", text: "Breakfast", where: "Based on your lanyard color" },
        { time: "8:45 to 9:00 AM", text: "Everyone is seated for the keynote", where: "MGM Grand Garden Arena" },
        { time: "10:00 AM", text: "Expo Hall and Makers Market open" },
        { time: "10:45 to 11:45 AM", text: "Women in Power roundtable: Make Your Network Your Net Worth", room: "Room 351", note: "Open to everyone; sign up in Whova" },
        { time: "1:00 to 2:30 PM", text: "Lunch", where: "Based on your lanyard color" },
        { time: "2:30 PM", text: "Expo Hall and Makers Market close" }
      ],
      evening: "The conference wraps mid-afternoon, so there are no evening events listed."
    }
  ],

  /* ---------- Optional partner sessions (daytime) ----------
     Partner-hosted sessions that run during the day. They show in one place only, the On the Ground tab:
     never on 3 Perfect Days, Evening Events, the planner, the timeline or the calendar export.
     time is display text. regFrom is the id of an event whose registration link is reused.
     ------------------------------------------------------------ */
  partnerSessions: [
    { host: "EY", place: "Room 262", regFrom: "ey", mapId: "floor2",
      intro: "EY hosts optional sessions in Room 262 on the second floor of the MGM Grand Conference Center. They are not part of the official conference agenda, and they run at the same time as official sessions, so compare them with your agenda before you register. Registration is required. On EY’s page, select Register Now.",
      sessions: [
        { day: "2026-10-27", time: "2:00 to 3:00 PM",
          title: "Lessons from the frontier: Building the agentic enterprise at EY",
          summary: "An open discussion on how EY is applying Copilot, agents, automation and governance internally, including key successes, challenges and lessons from scaling." },
        { day: "2026-10-28", time: "2:00 to 3:00 PM",
          title: "The agentic contact center: beyond chatbots and demos",
          summary: "What organizations are learning as AI moves from pilots into real customer service operations." },
        { day: "2026-10-28", time: "3:30 to 4:30 PM",
          title: "What happens to sales when everyone has an AI Copilot?",
          summary: "How AI is reshaping the roles, processes and operating models of modern sales organizations." }
      ] }
  ],

  /* ---------- Evening events ----------
     audience: hls | open | exec | official | tbd
     access:   register | ask | badge | open | app (joined through the Whova app)
     ask:      for "ask" events: { partner, label?, action?, subject?, sentence? } emails partners[partner].
               An "ask" event with no partner (and no ask.to) shows no request button.
     Healthcare & Life Sciences events and industry-agnostic events only.
     featured: true makes the event a big card on Evening Events and a highlight on Start Here.
     tab:      "days" puts a daytime event in its day's plan on 3 Perfect Days instead of Evening Events: no card, timeline bar, plan button or
               calendar export there. It can still be featured on Start Here. dayBadge is the pill on that 3 Perfect Days card.
     dayPart:  "lunch" changes "night" in a featured card's label. hostNote replaces "Hosted by" when there is no host site.
     endNote:  shown where the end time would be when none is posted (a missing end time counts as two hours for the plan and overlaps).
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
    ask:      "Email the host to request an invitation",
    badge:    "Included with your badge",
    open:     "Open: just show up",
    app:      "Join in the Whova app"
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

    /* From the Whova app, Community tab, Meet-up Details (read Oct 19): Tue Oct 27 at 6:30 PM local time at the MGM Grand, bar or lounge still to be announced.
       No host company, end time or description is posted, so none is shown. */
    { id: "hls-meetup", featured: true, day: "2026-10-27", start: "18:30", end: null, endNote: "End time not posted",
      heading: "Healthcare Networking & Ideas Exchange",
      title: "Healthcare Networking & Ideas Exchange", host: "Whova meet-up", hostNote: "Posted in the Community tab of the Whova app",
      venue: "MGM Grand, bar or lounge to be announced", kind: "Networking meet-up", audience: "hls", access: "app",
      blurb: "A healthcare networking and ideas exchange posted as a meet-up in the Whova app. The exact bar or lounge is still to be announced, so check the app before you go.",
      summary: "A healthcare networking and ideas exchange at the MGM Grand, posted as a meet-up in the Whova app. The exact bar or lounge is still to be announced.",
      tip: "To find it, open the Whova app, go to the Community tab and look for Meet-up Details. Check there for the bar or lounge once it is announced.",
      regNote: "Join through the Whova app." },

    { id: "brooksource", day: "2026-10-27", start: "17:00", end: "19:30",
      title: "Brooksource & Microsoft at Craftsteak", host: "Brooksource", hostUrl: "https://www.brooksource.com",
      venue: "Tom Colicchio’s Craftsteak, MGM Grand", kind: "Dinner", audience: "hls", access: "register",
      summary: "Cocktails, a seated dinner and good conversation, hosted with Microsoft. Expect other healthcare payers and providers in the room.",
      reg: { url: "https://www.brooksource.com/microsoft-power-platform", label: "RSVP" } },

    { id: "ey", day: "2026-10-27", start: "18:00", end: "20:00",
      title: "Client Reception", host: "EY", hostUrl: "https://www.ey.com/en_gl/alliances/microsoft",
      venue: "Luchini’s, MGM Grand", kind: "Reception", audience: "open", access: "register",
      summary: "EY, a Platinum sponsor of PPCC 2026, hosts an evening reception for clients, Microsoft leaders and industry peers. Expect signature cocktails, gourmet bites and relaxed networking.",
      reg: { url: "https://web-eur.cvent.com/event/cc782b7f-677c-42b2-be9c-f534d5e27f47/summary?rt=5Qtag0wLVkyIAFIybufn-Q&RefId=Client", label: "Register" },
      regNote: "Registration is required and space is limited. On EY’s page, select Register Now to reserve your spot. The end time is approximate: EY’s agenda says 8:00 PM and its description says 9:00 PM." },

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
      ask: { partner: "alithya" },
      regNote: "No public link yet." },

    { id: "engineerup-tue", day: "2026-10-27", start: "18:00", end: "20:00",
      title: "Customer Dinner at Craftsteak", host: "Engineer Up", hostUrl: "https://www.engineerup.com",
      venue: "Craftsteak, MGM Grand", kind: "Dinner", audience: "open", access: "ask",
      summary: "A hosted dinner for end-user customers and Microsoft teams. Engineer Up is also a Gold sponsor, so you can find the team at Booth 113.",
      ask: { partner: "engineerup" },
      regNote: "No public link yet." },

    { id: "night-market", day: "2026-10-27", start: "17:00", end: "19:30",
      title: "Night Market: Opening Reception", host: "Power Platform Community Conference", hostUrl: "https://powerplatformconf.com",
      venue: "Expo and Makers Market", kind: "Reception", audience: "official", access: "badge",
      summary: "The conference’s official opening reception in the Expo and Makers Market. A natural first stop before a partner event." },

    /* ---- Wednesday ---- */
    /* Featured Wednesday: 5:30 to 7:30 PM Pacific (PDT). The host confirmed it on Oct 12 and the host's flyer (Oct 16) shows the same time and place.
       Their calendar invite shows 6:30 to 8:30 PM Mountain, which is the same moment. RSVP is the flyer's "Scan to RSVP" form.
       The tip repeats MGM's own directions from the front desk. */
    { id: "brooksource-wed", featured: true, day: "2026-10-28", start: "17:30", end: "19:30",
      title: "Lobby Bar Social Reception", host: "Brooksource", hostUrl: "https://www.brooksource.com",
      venue: "Lobby Bar, MGM Grand", address: "3799 S Las Vegas Blvd, Las Vegas, NV 89109", kind: "Social reception", audience: "hls", access: "register",
      limit: "Limited to 30 guests",
      blurb: "Bring your team to a relaxed social reception with Brooksource’s healthcare specialists and your Microsoft team, right inside the MGM Grand.",
      summary: "A relaxed social reception hosted by Brooksource at the Lobby Bar, inside the MGM Grand. Bring your team and connect with Brooksource’s healthcare and life sciences specialists and your Microsoft healthcare team.",
      tip: "The Lobby Bar is on the casino floor. From the hotel front desk, walk into the casino and it is on your right.",
      tipMap: "resort",
      reg: { url: "https://hov.to/823a189f", label: "RSVP" },
      ask: { partner: "brooksource", action: "ask a question",
             subject: "PPCC 2026: question about the Brooksource Lobby Bar Social Reception (Oct 28)",
             body: "Hi Annie - I have a question about the Lobby Bar Social Reception with Brooksource on Wednesday, Oct 28.\n\nThanks.\n" },
      regNote: "Please RSVP so Brooksource can plan. Space is limited to 30 guests." },

    /* Quisitive's page and its account executive (Oct 19): Wed Oct 28, 11:30 AM to 1:30 PM at the SKYLOFTS at MGM Grand, a small group of healthcare peers, space limited.
       The page gives no seat count and no directions to the SKYLOFTS, so none are shown. Its form asks for first and last name, email, company and dietary needs.
       It is a daytime event, so tab "days" shows it in the Wednesday plan on 3 Perfect Days at 11:30 AM, not on Evening Events. It stays a Start Here highlight. */
    { id: "quisitive-hls", featured: true, tab: "days", dayBadge: "Healthcare lunch", dayPart: "lunch", day: "2026-10-28", start: "11:30", end: "13:30",
      title: "Healthcare Lunch", host: "Quisitive", hostUrl: "https://quisitive.com",
      venue: "SKYLOFTS at MGM Grand", address: "3799 S Las Vegas Blvd, Las Vegas, NV 89109", kind: "Lunch", audience: "hls", access: "register",
      limit: "Limited space",
      blurb: "Pull up a seat with your healthcare peers for lunch and conversation at the SKYLOFTS at MGM Grand, hosted by Quisitive. It is a small group, and space is limited.",
      summary: "Quisitive hosts a small group of healthcare peers for lunch and conversation at the SKYLOFTS at MGM Grand, away from the conference floor. Expect an informal talk about the priorities shaping healthcare, from AI and automation to data, digital transformation and connected experiences. Quisitive says it is aimed at healthcare decision makers.",
      reg: { url: "https://info.quisitive.com/ppcc-healthcare-lunch/", label: "RSVP" },
      ask: { partner: "quisitive", action: "ask a question",
             subject: "PPCC 2026: question about the Quisitive Healthcare Lunch (Oct 28)",
             body: "Hi Avi - I have a question about the Healthcare Lunch with Quisitive on Wednesday, Oct 28.\n\nThanks.\n" },
      regNote: "Please RSVP, because space is limited. The form asks for your name, email, company and any dietary needs." },

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
      regNote: "Drop in any time during either window, 11:00 AM to 2:00 PM or 4:00 to 6:00 PM. WinWire has 30 spots available, so RSVP early.",
      invite: { src: "assets/img/invites/winwire-poolside.webp", w: 1200, h: 500, caption: "The invitation from WinWire and Microsoft",
                alt: "WinWire and Microsoft invitation. Poolside Connections: relax, recharge, connect at MGM Grand. October 28, 2026." } },

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
      ask: { partner: "engineerup" },
      regNote: "No public link yet." },

    { id: "stoneridge", day: "2026-10-28", start: "18:30", end: "20:30",
      title: "Expo and Happy Hour", host: "Stoneridge Software", hostUrl: "https://stoneridgesoftware.com",
      venue: "Tap Sports Bar, MGM Grand", kind: "Happy hour", audience: "open", access: "ask",
      summary: "A happy hour for customers and prospects. Microsoft teams are welcome too.",
      ask: { partner: "stoneridge" },
      regNote: "No public link yet." },

    { id: "velrada", day: "2026-10-28", start: null, end: null, timeNote: "Evening · time to be announced",
      title: "Power Swings & Power Platform", host: "Velrada", hostUrl: "https://velrada.com",
      venue: "Topgolf Las Vegas", kind: "Networking", audience: "open", access: "ask",
      summary: "An evening of golf-ball swings and Power Platform conversation with customers and prospects. Velrada is also exhibiting at Booth 115.",
      regNote: "Details are still being finalized. We will add the time and how to sign up here as soon as Velrada confirms." },

    { id: "wed-expo", day: "2026-10-28", start: "16:30", end: "18:30",
      title: "Expo and Makers Market, plus T-shirt pick-up", host: "Power Platform Community Conference", hostUrl: "https://powerplatformconf.com",
      venue: "Expo and Makers Market", kind: "Expo", audience: "official", access: "badge",
      summary: "The last evening window to browse partner booths and collect your conference T-shirt." },

    /* Official headliner. The start time and venue are listed on powerplatformconf.com. */
    { id: "pitbull", featured: true, day: "2026-10-28", start: "20:00", end: "22:00",
      heading: "Pitbull live at PPCC",
      title: "Pitbull Live", host: "Power Platform Community Conference", hostUrl: "https://powerplatformconf.com",
      venue: "MGM Grand Garden Arena", kind: "Concert", audience: "official", access: "badge",
      limit: "Badge required",
      blurb: "An exclusive evening for full conference attendees with a live performance by Pitbull in the MGM Grand Garden Arena. Bring your badge, because it is required for entry.",
      summary: "An exclusive evening for full conference attendees with a live performance by Pitbull in the MGM Grand Garden Arena. Expect music, drinks and networking.",
      tip: "Expect a long line to get in. Partner dinners wrap up around the time Pitbull starts, so plan your timing.",
      tipMap: "walkway", tipMapLabel: "See the walk to the arena.",
      regNote: "Included with a full conference pass. Your PPCC badge is required for entry, guests and plus-ones are not allowed, and security will be tightly monitored." },

    /* ---- Monday: hosted dinners ---- */
    { id: "root16-dinner-mon", day: "2026-10-26", start: "19:00", end: "21:00",
      title: "Hosted Customer Dinner", host: "Root16 (a Reply company)", hostUrl: "https://www.reply.com/root16-reply/en",
      venue: "Various MGM Grand restaurants", kind: "Dinner", audience: "open", access: "ask",
      summary: "Small hosted dinners for qualified customers and prospects, with seats limited to nine.",
      ask: { partner: "root16" },
      regNote: "Invitation only. Seats go to qualified customers and prospects, so request early." },

    { id: "root16-dinner-wed", day: "2026-10-28", start: "19:00", end: "21:00",
      title: "Hosted Customer Dinner", host: "Root16 (a Reply company)", hostUrl: "https://www.reply.com/root16-reply/en",
      venue: "Various MGM Grand restaurants", kind: "Dinner", audience: "open", access: "ask",
      summary: "A second night of small hosted dinners for qualified customers and prospects, with seats limited to nine.",
      ask: { partner: "root16" },
      regNote: "Invitation only. Seats go to qualified customers and prospects, so request early." },

    /* ---- Executive experiences (Lateetud): VP and C-suite, access code required. Steps and deadline live in exec below. ---- */
    { id: "lateetud-golf", group: "exec", days: ["2026-10-26"], day: "2026-10-26", start: "13:30", end: null, noPlan: true,
      options: ["Mon, Oct 26 · 1:30 PM"], duration: "About 3 hours",
      title: "Bali Hai Executive Scramble", host: "Lateetud", hostUrl: "https://www.lateetud.com",
      venue: "Bali Hai Golf Club", kind: "Executive experience", audience: "exec", access: "ask",
      summary: "A friendly nine-hole scramble with fellow executives, followed by food and drinks at the Tiki Bar. Clubs are provided.",
      reg: { url: "https://mppcc2026.lateetud.com/", label: "VIP registration page" },
      regNote: "For VP and C-suite leaders. Copy the access code from the Executive Experience tab, then register by Oct 16 to help ensure your spot." },

    { id: "lateetud-xpot", group: "exec", days: ["2026-10-27", "2026-10-28"], day: "2026-10-27", start: "18:00", end: null, noPlan: true,
      options: ["Tue, Oct 27 · 6:00 PM", "or Wed, Oct 28 · 6:00 PM"], duration: "About 2.5 hours",
      title: "XPOT Private Table", host: "Lateetud", hostUrl: "https://www.lateetud.com",
      venue: "Details on the registration page", kind: "Executive experience", audience: "exec", access: "ask",
      summary: "An intimate dinner around a private table with exceptional seafood, A5 Wagyu and conversation with a few executive peers.",
      reg: { url: "https://mppcc2026.lateetud.com/", label: "VIP registration page" },
      regNote: "For VP and C-suite leaders. Copy the access code from the Executive Experience tab, then register by Oct 16 to help ensure your spot." },

    { id: "lateetud-race", group: "exec", days: ["2026-10-28", "2026-10-29"], day: "2026-10-28", start: "13:30", end: null, noPlan: true,
      options: ["Wed, Oct 28 · 1:30 PM", "or Thu, Oct 29 · morning"], duration: "About 2.5 hours",
      title: "Executive Racing Challenge", host: "Lateetud", hostUrl: "https://www.lateetud.com",
      venue: "Details on the registration page", kind: "Executive experience", audience: "exec", access: "ask",
      summary: "Drive an exotic performance car on a professional track with a small group of executives.",
      reg: { url: "https://mppcc2026.lateetud.com/", label: "VIP registration page" },
      regNote: "For VP and C-suite leaders. Copy the access code from the Executive Experience tab, then register by Oct 16 to help ensure your spot." },

    /* ---- Still being finalized ---- */
    { id: "kerv", group: "pending", day: null, start: null, end: null, noPlan: true, timeNote: "TBA · dates and times",
      title: "Industry Dinners and Lunches", host: "Kerv", hostUrl: "https://kerv.com",
      venue: "To be announced", kind: "Dinners and lunches", audience: "tbd", access: "ask",
      summary: "Industry-specific dinners and lunches for customers and prospects. Ask whether a healthcare session is planned.",
      ask: { partner: "kerv", label: "Ask about a healthcare session", action: "ask about a healthcare session",
             subject: "PPCC 2026: healthcare dinner or lunch question",
             sentence: "I am attending PPCC 2026 and would like to ask whether Kerv is planning a healthcare or life sciences dinner or lunch, and how to request an invitation." },
      regNote: "Details are still being finalized." }
  ],

  /* ---------- Executive Experience tab ----------
     Keep the Oct 16 deadline in sync: exec.lateetud.deadline, the regNote on each lateetud event, and the last step below.
     ------------------------------------------------------------ */
  exec: {
    official: {
      title: "Official PPCC Executive Experience track",
      text: "The official PPCC Executive Experience is an invitation-only track for senior leaders. Its agenda and details are coming soon, and we will add them here as soon as they are confirmed.",
      note: "Already invited? Watch your email for calendar invitations and programming details from the Executive Experience team."
    },
    lateetud: {
      title: "Executive experiences with Lateetud",
      intro: "Hosted by Microsoft and Lateetud for a small group of VP and C-suite leaders. There is no presentation and no formal agenda. Each experience is a memorable way to step away from the conference floor and exchange ideas with fellow leaders. Space is limited.",
      registerUrl: "https://mppcc2026.lateetud.com/",
      registerLabel: "Open the VIP registration page",
      code: "3UPQV",
      deadline: "2026-10-16"
    },
    stepsTitle: "How to register",
    steps: [
      { label: "On this page", title: "Copy your access code", text: "Use this code to open Lateetud’s VIP registration page. It is not case sensitive.", showCode: true },
      { label: "On Lateetud’s site", title: "Open the VIP page", text: "Go to the VIP registration page and enter the access code when asked." },
      { label: "On the same page", title: "Pick a first choice and a backup", text: "Read the details for each experience, then select your first choice and a backup. Space is limited for each one." },
      { label: "By Oct 16", title: "Submit your choices", text: "Register by Friday, Oct 16 to help ensure your spot. Lateetud coordinates the selections, then confirms and sends your details." }
    ],
    notesTitle: "Good to know",
    notes: [
      "Full details for each experience are on the registration page once you enter your code.",
      "Also invited to the official Executive Experience track? Compare its agenda with these dates before you choose. We will post it here when it is ready.",
      "Times are Pacific (Las Vegas)."
    ],
    fineprint: "Details come from Lateetud and Microsoft and can change. Confirm with your Microsoft account team before you go."
  },

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
      a: "Entry requires a PPCC badge, and guests and plus-ones are not allowed." },
    { q: "How do I get the Whova app?",
      a: "Whova is the conference app, and it is open now on the App Store and Google Play. Download it and sign up with the work email address you registered with. Whova sends a verification code to that email each time you log in, so check your spam folder if it does not arrive. You are usually added to the event automatically. If Whova asks for an invitation code, enter LasVegas26. If that does not work, look for a backup code in the Whova invitation email sent to the address you registered with. The full schedule, with sessions, times and rooms, is now live, so you can build your agenda.",
      code: "LasVegas26",
      links: [{ label: "App Store", href: "https://apps.apple.com/us/app/whova-event-conference-app/id716979741" }, { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.whova.event&hl=en-US&pli=1" }] },
    { q: "Who can I ask for help onsite?",
      a: "Anyone in a Microsoft lanyard. The Microsoft booth is staffed by engineers rather than salespeople, and you can message the Microsoft team in Whova." },
    { q: "What is Women in Power?",
      a: "Women in Power is a set of four sessions that are open to everyone, allies included, and free with your pass: a networking luncheon on Tuesday (12:30 to 2:00 PM), a Night Market meetup on Tuesday evening, a panel on Wednesday at 2:00 PM, and a small-group roundtable on Thursday at 10:45 AM. Registration is required, and you sign up in the Whova app." },
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
        note: "EY hosts optional partner sessions in Room 262 on Tuesday and Wednesday afternoon. Look for the orange block of rooms 261 to 264, right of center and just above the restrooms.",
        alt: "Second-floor plan of the Conference Center. Vista Ballroom (rooms 206 to 211) runs along the bottom, Cedar Ballroom (rooms 250 to 255) is at the lower right, and meeting rooms 201 to 205 and 256 to 264 sit between them. Room 262, where EY hosts partner sessions, is in the orange block of rooms 261 to 264, right of center and just above the restrooms. Escalators to the first and third floors are at both ends of the lower corridor." },

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
