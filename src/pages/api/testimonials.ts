import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  payload: string;
};

const getTestimonials = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    payload: [
      {
        id: "2f8e30ff-af52-469a-b5df-88bdae459be0",
        author: "Johnny B. Goode",
        authorRole: "CEO, Getting Things Done",
        content:
          "Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this.",
        avatarSrc: "/images/johnny-avatar.png",
      },
      {
        id: "c71ad4c5-8d1c-4846-aa11-543104b7b712",
        author: "Mary Jane",
        authorRole: "CEO, Design Matters",
        content:
          "We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we’ve seen a huge response to the product launch.",
        avatarSrc: "/images/mary-avatar.png",
      },
      {
        id: "79ecbd9a-e763-4ab8-80fd-3098248e5196",
        author: "Paul Simon",
        authorRole: "Founder, MegaCorp",
        content:
          "Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!",
        avatarSrc: "/images/paul-avatar.png",
      },
    ],
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    switch (req.method) {
      case "GET":
        return await getTestimonials(req, res);
      default:
        res.status(405).json({ payload: "Method Not Allowed" });
    }
  } catch (e) {
    res.status(500).json({ payload: e as string });
  }
}
