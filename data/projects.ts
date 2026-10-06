export type Block =
  | { type: "text"; heading?: string; body: string }
  | { type: "image"; src: string; caption?: string; size?: "full" | "phone" }
  | { type:"links"; items:{ label: string; url:string } []}
  | { type: "section"; number: string; title: string }
  | { type: "quote"; body: string }
  | { type: "details"; items: { label: string; value: string }[] };

export type Project = {
  slug: string;
  title: string;
  cover: string;
  tech: string;
  description: string;
  blocks: Block[];
  live?: string;
  code?: string;
  figma?:string;
  externalOnly?: boolean;
};

export const projects: Project[] = [
  {
  slug: "ohss",
  title: "HSS Sea Scouts — Website Design & Development",
  cover: "/projects/ohss/00.png",
  tech: "Next.js · TypeScript · next-intl · Behold API · MUI · Tailwind CSS",
  description:
    "A bilingual (Swedish/English) website for a Swedish sea scouting organization — built as a client team project, then independently redesigned and rebuilt on my own.",
  blocks: [
    {
      type: "text",
      heading: "Bridging the gap between mockup and momentum",
      body: "During my frontend diploma, our team ran out of designed pages to build for a Swedish sea scouting organization. I spent one day designing the missing ones — layout and interaction logic first, polish never — so the team had something concrete to build against again.",
    },
    { type: "image", src: "/projects/ohss/05.png", caption: "The one page the team started with" },

    { type: "section", number: "01.", title: "The Situation" },
    {
      type: "text",
      body: "During my frontend diploma, our class was split into teams to build a website for a real client — a Swedish sea scouting organization. My team had a mix of developers and one person coordinating with the client throughout the project. A volunteer was helping with design, but about three weeks into the project, we only had a finished mockup for the homepage — nothing for the rest of the site.",
    },
    {
      type: "quote",
      body: "Don't wait for missing information — design or decide with what you actually have, and be clear about which parts are confirmed and which are your best read of the situation.",
    },
    {
      type: "details",
      items: [
        { label: "Client", value: "Hässelby Strands Sjöscoutkår — a Swedish sea scouting group" },
        { label: "My Role", value: "UI design (layout & interaction logic), frontend build" },
        { label: "Platform", value: "Responsive web — desktop and mobile" },
        { label: "Tools", value: "Figma for the missing pages" },
        { label: "Challenge", value: "A design gap and a language gap, at the same time" },
      ],
    },
     { type: "image", src: "/projects/ohss/00.png"},

    

    { type: "section", number: "02.", title: "The Task" },
    {
      type: "text",
      body: "At that point, the team had built out everything the one available design covered, and there was nothing left to move forward on. I was asked to fill that gap, since I'd worked in UI design before switching into frontend.",
    },

    { type: "image", src: "/projects/ohss/02.png"},
    {
      type: "quote",
      body: "I wasn't thrilled about it — I'd taken this program specifically to build my coding skills, not go back to design work — but without any layout or interaction logic for the remaining pages, the team was stuck.",
    },

    { type: "section", number: "03.", title: "The Action" },
    {
      type: "text",
      body: "I spent about a day designing the missing pages myself — focusing purely on layout and interaction logic, not visual polish, since the goal was to give the team something concrete to build against, not to produce a finished design.",
    },
    {
      type: "text",
      body: "For direction, I didn't have a clear statement of the client's underlying problem — a lot of that came up in a meeting where my English wasn't strong enough yet to catch everything in real time. So I worked from what I could piece together afterward: a look at the site's existing structure, a quick look at a few comparable youth-organization and camp websites, and recurring feedback themes from later client reviews that kept touching on navigation and how content was organized.",
    },
    
    { type: "image", src: "/projects/ohss/03.png", caption: "Mobile layouts drafted" },
    {
      type: "text",
      body: "Based on that, my working assumption was that visitors — likely parents and teenage members, given who the organization serves — were probably having trouble finding what they needed quickly. That was my own inference from limited information, not something the client stated directly to me.",
    },
    {
      type: "text",
      body: "On the language side, I'll be honest — I couldn't follow everything in the client meetings at the time. When that happened, I'd check in with teammates afterward to fill in what I'd missed, rather than guessing.",
    },

    { type: "section", number: "04.", title: "The Result" },
    {
      type: "text",
      body: "The day I spent on those designs gave the team a concrete basis to keep building, where before there was none — the pages I'd designed became what the rest of the team implemented.",
    },
    {
      type: "quote",
      body: "The project itself wasn't the one the client ultimately selected, but the experience taught me something I carry into how I work now: when you're missing information — whether it's a design gap or a language gap — the move isn't to wait for it, it's to make the most defensible judgment call you can with what you actually have, and be upfront about which parts are confirmed and which are your best read of the situation.",
    },

    { type: "section", number: "", title: "What the Team Received" },
    { type: "image", src: "/projects/ohss/04.png", caption: "" },
    { type: "image", src: "/projects/ohss/06.png", caption: "TDesktop pages — home, join, sections, about, boats, places and more" },

  ],
  live: "https://hss-repo.vercel.app/en",
  code: "https://github.com/SallyResch/hss-repo.git",
  figma: "https://www.figma.com/design/dLpaMEUu6033VVmcXlaIJ7/Brianna--Portfolio-DESIGN?node-id=196-25805",
},
  
{
  slug: "solomate",
  title: "SoloMate — A Buddy App for Solo Travellers",
  cover: "/projects/solomate/cover.png",
  tech: "Next.js 14 · TypeScript · Tailwind CSS",
  description:
    "A swipe-based app for short, genuine connections between solo travellers — designed with women's safety at its core.",
  blocks: [
    {
      type: "text",
      heading: "Connected, but not too close",
      body: "SoloMate takes the familiar swipe mechanic and gives it a simpler purpose: short, genuine connections between solo travellers, designed with women's safety at its core.",
    },
    { type: "image", src: "/projects/solomate/1.gif", caption: "solomate", size:"phone" },

    { type: "section", number: "01.", title: "The Problem" },
    {
      type: "text",
      body: "Living in Stockholm, I noticed something on dating apps: many travellers just want company for a few days, but on a dating app it's hard to tell what anyone is really looking for. On the road, I also met many women who wanted a \"buddy\" to share a ride, a meal, or an afternoon walk, while still feeling safe.",
    },
    {
      type: "details",
      items: [
        { label: "Role", value: "Concept, UX/UI design, frontend development" },
        { label: "Stack", value: "Next.js 14, TypeScript, Tailwind CSS" },
        { label: "Status", value: "In progress" },
      ],
    },

    { type: "section", number: "02.", title: "The Idea" },
    {
      type: "quote",
      body: "It's built for people who value their own space. Connected, but not too close. Join for a moment, then go your own way.",
    },
    { type: "image", src: "/projects/solomate/2.gif", caption: "", size:"phone" },
  ],
  live: "https://solotrip-nine.vercel.app/discover",
  code: "https://github.com/Bribri0na/soloTrip",
},

  {
  slug: "briwebsite",
  title: "Personal Portfolio Website",
  cover: "/projects/briwebsite/01.png",
  tech: "Next.js · TypeScript · Tailwind CSS",
  description: "My own personal portfolio website — the one you're looking at right now.",
  blocks: [],
  code: "https://github.com/Mosssi/Briwebsite.git",
  externalOnly: true,
},




  {
    slug: "hss",
    title: "Rebuild HSS Scout Website",
    cover: "/projects/hss/01.png",
    tech: "Figma · Next.js · TypeScript · next-intl",
    description:
      "Website for a Swedish sea scout organization — traditions, activities, and community.",
    blocks: [
      {
        type: "text",
        body: "A real-client team project for Hässelby Strands Sjöscoutkår. I contributed UI design and frontend implementation: bilingual routing with next-intl, new pages built from Figma, and an Instagram feed integrated through the Behold API.",
      },
      { type: "image", src: "/projects/hss/01.png" },
      { type: "image", src: "/projects/hss/02.png" },
      {
        type: "text",
        heading: "Designed and built the same pages",
        body: "I designed several pages in Figma and implemented them in the team codebase, which kept the handoff loop short and the visual details intact.",
      },
      { type: "image", src: "/projects/hss/03.png" },
      { type: "image", src: "/projects/hss/04.png" },
      { type: "image", src: "/projects/hss/05.png" },
    ],
    live: "https://rebuildhss.netlify.app/",
    code: "https://github.com/Mosssi/rebuildHss.git",
    figma:"https://www.figma.com/design/dLpaMEUu6033VVmcXlaIJ7/Brianna--Portfolio-DESIGN?node-id=0-1"
  },

  {
    slug: "zoo",
    title: "Zoo Website",
    cover: "/projects/zoo/01.png",
    tech: "UI Design · HTML · CSS",
    description:
      "Frontend course team assignment — I did both the UI design and the code.",
    blocks: [
      {
        type: "text",
        body: "A team assignment from my frontend course, where I did both the UI design and the code. A fresh green palette echoes the zoo's natural theme.",
      },
      { type: "image", src: "/projects/zoo/01.png" },
      {
        type: "text",
        heading: "One card component, many pages",
        body: "The homepage and category pages share one card component and a common header/footer — consistent visuals, less duplicated code.",
      },
      { type: "image", src: "/projects/zoo/02.png" },
      { type: "image", src: "/projects/zoo/03.png" },
      {
        type: "text",
        heading: "Roots of Asia — second iteration",
        body: "A second zoo concept with filtering by region and animal detail pages.",
      },
      { type: "image", src: "/projects/zoo/04.png" },
      { type: "image", src: "/projects/zoo/05.png" },
      { type: "image", src: "/projects/zoo/06.png" },
    ],
    live: "https://group-zoo-assignment.vercel.app",
    code: "https://github.com/Callum-Jones230893/Group-zoo-assignment",
    figma:"https://www.figma.com/design/dLpaMEUu6033VVmcXlaIJ7/Brianna--Portfolio-DESIGN?node-id=0-1"
  },

  {
    slug: "video",
    title: "Video App — Design System & Product UI",
    cover: "/projects/video/01.png",
    tech: "UI Design · Design System · Icon Library · Sketch",
    description:
      "Sole designer for a short-video streaming product: full design system, icon library, and every screen.",
    blocks: [
      {
        type: "text",
        body: "A short-video streaming platform where users filter videos by preference and receive personalized recommendations. The product covers video playback, search, paid content, and a VIP membership system. I designed the entire product solo — from the icon library to every screen.",
      },
      {
        type: "text",
        heading: "Design System & Guidelines",
        body: "I walked the full \u201czero to design system\u201d path: define the visual identity first, then codify the rules — typography, a primary/secondary color scale, a neutral ramp, and a general icon set spanning navigation, actions, membership, and coins — so every later screen was assembled instead of reinvented.",
      },
      { type: "image", src: "/projects/video/typography-color.png" },
      { type: "image", src: "/projects/video/design.png" },
      {
        type: "text",
        heading: "Video Player",
        body: "The player was designed for both light and dark contexts, with a compact variant for in-feed preview. Playback controls, progress states, and overlay layers were specified as components, so the same behavior could be reused across full-screen, embedded, and preview scenarios.",
      },
      { type: "image", src: "/projects/video/video.png" },
      {
        type: "text",
        heading: "GIF Creation Tool",
        body: "A built-in clip-to-GIF tool: select your best 8 seconds, generate, share — three steps. Progress and result screens keep the player's dark context, so the tool feels continuous with content consumption rather than bolted on.",
      },
      { type: "image", src: "/projects/video/git.png" },
      {
        type: "text",
        heading: "Account System",
        body: "Complete account flows — profile, phone and email binding, pattern lock, account recovery, and password reset — with every state specified, including empty, loading, and error states. Rank badges and the membership tier system gave the product a progressive visual ramp without adding interface complexity.",
      },
      { type: "image", src: "/projects/video/account.png" },
    ],
  },

  {
    slug: "personal",
    title: "Personal Work & Explorations",
    cover: "/projects/personal/01.png",
    tech: "UI Design · Visual Exploration",
    description:
      "Early personal work — kept to show where I started and how far the craft has come.",
    blocks: [
      {
        type: "text",
        body: "A sign-in flow exploration for a photography app: a full-bleed hero photo sets the mood, and the form screen keeps the same image as a dimmed backdrop, so the transition from browsing to logging in feels continuous.",
      },
      { type: "image", src: "/projects/personal/01.png" },
      {
        type: "text",
        heading: "Where it started",
        body: "A personal website made very early in my career. By today's standards it isn't polished, but I choose to keep and show it — it documents where I started, and keeps the growth arc of this portfolio complete and honest.",
      },
      { type: "image", src: "/projects/personal/03.png" },
    ],
  },


 



{
  slug: "tarot",
  title: "Tarot App",
  cover: "/projects/tarot/01.png",   
  tech: "React · MUI",
  description: "A tarot card reading app built with React and Material UI.",
  blocks: [],
  code: "https://github.com/Mosssi/Tarot--MUI.git",
  externalOnly: true,
},
{
  slug: "study-checkin",
  title: "Study Check-in — Jest Testing",
  cover: "/projects/checkin/01.png", 
  tech: "JavaScript · Jest",
  description: "A class assignment focused on writing unit tests with Jest.",
  blocks: [],
  code: "https://github.com/Mosssi/study-checkin.git",
  externalOnly: true,
},
];



