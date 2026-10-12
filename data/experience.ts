export type Role = {
  role: string;
  period: string;
  description: string;
};

export type ExperienceEntry = {
  role: string;
  period: string;
  org: string;
  description?: string;
  roles?: Role[]; 
};

export const experience: ExperienceEntry[] = [
  {
    role: "UI/UX Designer",
    period: "11/2019 – 12/2024",
    org: "Freelance · Remote",
    roles: [
      {
        role: "UI/UX Designer",
        period: "06/2022 – 12/2024",
        description:
          "Live sports information platform: UI design for 2 consumer apps across 4 mobile and web platforms, covering 30+ sports categories in Chinese and English. One of two designers; built a reusable empty and error state system and joined daily standups with PM, frontend and backend.",
      },
      {
        role: "UI/UX Designer",
        period: "11/2019 – 06/2022",
        description:
          "B2B video streaming company: UI design for short-form, long-form and live streaming products. Built one-click colour theming into the Sketch design system, letting one design serve 26 white-label clients and cutting re-skinning from weeks to 1–2 days. Filled gaps in incomplete prototypes with specs developers built from directly.",
      },
    ],
  },
  {
    role: "Visual Designer & Content Strategist",
    period: "05/2017 – 07/2018",
    org: "Yihan · Hangzhou, China",
    description:
      "Sole designer at an 8–10 person home and lifestyle startup, owning visual identity across three sales channels and running WeChat content.",
  },
  {
    role: "Digital / Web Designer",
    period: "10/2015 – 04/2017",
    org: "Dookay · Shanghai, China",
    description:
      "Delivered visual design for about 20 client websites across 10+ industries, including e-commerce, insurance, education and logistics.",
  },
  {
    role: "Visual Design Intern",
    period: "07/2014 – 02/2015",
    org: "Taobao · Xiamen, China",
    description:
      "Sole designer for a menswear Taobao store, covering product detail pages, photo retouching and promotional assets.",
  },
];