import { Project } from "@/types/Project";
import type { NextApiRequest, NextApiResponse } from "next";
import { fa, faker } from "@faker-js/faker";
import { ProjectCategory } from "@/enums/ProjectCategory";

type Data = {
  payload: Record<ProjectCategory, Array<Project>> | string;
};

type ProjectMapCoinfig = {
  cols: number;
  rows: number;
};

const all: Array<Project> = [
  {
    cols: 1,
    rows: 1,
    companyName: faker.company.name(),
    details: faker.company.catchPhrase(),
    imgSrc: "/images/wellies.png",
    href: "/",
    id: faker.string.uuid(),
  },
  {
    cols: 1,
    rows: 1,
    companyName: "Make Ideas Happen",
    details:
      "A local paper with big ideas needed A sharp new brand to inspire readers.",
    imgSrc: "/images/newspaper2.png",
    href: "/",
    id: faker.string.uuid(),
  },
  {
    cols: 1,
    rows: 1,
    companyName: faker.company.name(),
    details: faker.company.catchPhrase(),
    imgSrc: "/images/makerek.png",
    href: "/",
    id: faker.string.uuid(),
  },
  {
    cols: 2,
    rows: 1,
    companyName: faker.company.name(),
    details: faker.company.catchPhrase(),
    imgSrc: "/images/newspaper.png",
    href: "/",
    id: faker.string.uuid(),
  },
  {
    cols: 1,
    rows: 1,
    companyName: faker.company.name(),
    details: faker.company.catchPhrase(),
    imgSrc: "/images/rider.png",
    href: "/",
    id: faker.string.uuid(),
  },
];

const brandingConfig = [
  { cols: 2, rows: 2 },
  { cols: 1, rows: 1 },
  { cols: 1, rows: 1 },
];
const webDesignConfig = [
  { cols: 2, rows: 1 },
  { cols: 1, rows: 1 },
  { cols: 1, rows: 1 },
  { cols: 2, rows: 1 },
];
const marketingConfig = [
  { cols: 1, rows: 2 },
  { cols: 1, rows: 1 },
  { cols: 1, rows: 1 },
  { cols: 2, rows: 1 },
];

const mapper = (config: ProjectMapCoinfig[]): Project[] => {
  return config.map((item) => {
    return {
      ...item,
      imgSrc: `/images/randomImg${Math.ceil(Math.random() * 9)}.webp`,
      companyName: faker.company.name(),
      details: faker.company.catchPhrase(),
      href: "/",
      id: faker.string.uuid(),
    };
  });
};

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: Record<ProjectCategory, Array<Project>> = {
    [ProjectCategory.All]: all,
    [ProjectCategory.Branding]: mapper(brandingConfig),
    [ProjectCategory.WebDesign]: mapper(webDesignConfig),
    [ProjectCategory.DigitalMarketing]: mapper(marketingConfig),
  };

  console.log("called");
  return res.status(200).json({ payload: data });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    switch (req.method) {
      case "GET":
        return await getProjects(req, res);
      default:
        res.status(405).json({ payload: "Method Not Allowed" });
    }
  } catch (e) {
    res.status(500).json({ payload: e as string });
  }
}
