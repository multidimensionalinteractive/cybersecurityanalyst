export const METADATA = {
  title: "Portfolio | Matt Haydon II | MattGo.Dev",
  description:
    "I bridge the gap between design and development. I like to craft an aesthetic user interface and user experience using modern best practices.",
  siteUrl: "https://mattgo.dev",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop products",
  "I develop modern frontend apps",
  "I design dynamic user experiences"
];

export const EMAIL = "matthaydon@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/matthaydon/",
  github: "https://github.com/multidimensionalinteractive",
  twitter: "https://twitter.com/matt_boh",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Get Dynamic ",
    image: "/projects/dynamic.jpg",
    blurImage: "/projects/blur/dynamic-blur.jpg",
    description: "Enterprise blockchain based EDI platform.",
    gradient: ["#003052", "#167187"],
    url: "https://getdynamic.app",
    tech: ["css", "javascript", "python"],
  },
  {
    name: "Aerodynamic Data",
    image: "/projects/aerodynamicdata.jpg",
    blurImage: "/projects/blur/aerodynamicdata-blur.jpg",
    description: "MRO & Logistics Aviation ERP Blockchain Consulting Company.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://dynamics.aero",
    tech: ["react", "typescript", "css"],
  },
  {
    name: "LaserChain",
    image: "/projects/laserchain.jpg",
    blurImage: "/projects/blur/laserchain-blur.jpg",
    description: "Blockchain mobile app, UI/UX Design, C++, C#, & Unity 3D.",
    gradient: ["#245B57", "#004741"],
    url: "https://www.laserchain.io/",
    tech: ["html", "aftereffects", "photoshop"],
  },
  {
    name: "Multidimensional Interactive",
    image: "/projects/mdiio.jpg",
    blurImage: "/projects/blur/mdiio-blur.jpg",
    description: "Built applications for many clients from zero to production. 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://mdi.io",
    tech: ["react", "angular", "gsap", "figma"],
  },
  {
    name: "AutoDryer",
    image: "/projects/dryeriq.jpg",
    blurImage: "/projects/blur/dryeriq-blur.jpg",
    description: "Designed UI/UX, managed dev team projects.",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://autodryer.com",
    tech: ["photoshop", "angular", "typescript"],
  }, 
  
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Zero To Mastery<br/>Certificate of Completion",
    size: ItemSize.SMALL,
    subtitle: "This certificate above verifies that Matthew Haydon II successfully completed the course The Complete Web Developer in 2023: Zero to Mastery on 11/03/2022",
    image: "/timeline/ztm.png",
    slideImage: "/timeline/ztm-cert.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Google Data Analytics Certificate",
    size: ItemSize.SMALL,
    subtitle: "Skills: Data Aggregation, Data Analytics, Data Calculations, Data Cleaning, Data Ethics, Data Visualization, Presentations, Problem Solving, R, Spreadsheets, SQL, Structured Thinking",
    image: "/timeline/coursera.png",
    slideImage: "/timeline/google-analytics.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle: "Developing an enterprise grade blockchain 🔗 solution for the Aerospace Industry ✈️",
    image: "/timeline/get-dynamic.png",
    slideImage: "/timeline/dynamic.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Udemy <br/>Certificate of Completion",
    size: ItemSize.SMALL,
    subtitle: "This certificate above verifies that Matthew Haydon II successfully completed the course Docker Mastery: with Kubernetes + Swarm from a Docker Captain on 06/03/2022<br />",
    image: "/timeline/udemy.png",
    slideImage: "/timeline/docker-mastery.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "<br />2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Building solutions for blockchain integration, productivity & performance, ERP consulting for Aerospace Industry 🎯",
    image: "/timeline/aerodynamic-data.png",
    slideImage: "/timeline/aerodynamicdata.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX / UI Designer",
    size: ItemSize.SMALL,
    subtitle: "Directed Development for all web & video projects as well as oversaw Marketing & SEO / SEM Campaigns. 🚀",
    image: "/timeline/autoovac.svg",
    slideImage: "/timeline/autovac.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "<br />2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "AVI CAR CARE <br />UX / UI Designer",
    size: ItemSize.SMALL,
    subtitle:
      "Lead Design & Development 👨‍💼📈",
    image: "",
    slideImage: "/timeline/avicarcare.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "AUTODRYER <br/> UX / UI Designer",
    size: ItemSize.SMALL,
    subtitle:
      "Oversaw Design and development, Served different roles of leadership, project management and delivery.",
    image: "",
    slideImage: "/timeline/autodryer.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "LASERCHAIN <br /> AT IFTA HONG KONG",
    size: ItemSize.SMALL,
    subtitle:
      "Represented LaserChain at the International Fintech Trading Academy, I am wearing a black binance shirt in the front. 📈",
    image: "",
    slideImage: "/timeline/ifta.jpeg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Laserchain<br />Community Manager / UI UX Designer",
    size: ItemSize.SMALL,
    subtitle:
      "Spent time in Bali, Malaysia and Hongkong working with LaserChain. 🌿",
    image: "",
    slideImage: "/timeline/laserstone2.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  }, 
  {
    type: NodeTypes.CHECKPOINT,
    title: "VISIVO AGENCY <br />Project Manager / Lead UX Designer",
    size: ItemSize.SMALL,
    subtitle:
      "Web Design & Development, Lead Project management 🚀",

    slideImage: "/timeline/visivo.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "G-86PWWERR12";
