import { user } from "../models/url.js";
import shortid from "shortid";
export const urlShortener = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();
  await user.create({
    ShortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({
    success: true,
    id: shortID,
  });
};

export const getData = async (req, res) => {
  const ShortId = req.params.ShortId;

  const entry = await user.findOneAndUpdate(
    { ShortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
};

export const getAnalytics = async (req, res) => {
  const ShortId = req.params.ShortId;
  const entry = await user.findOne({ ShortId: ShortId });

  res.json({
    Visited: entry.visitHistory.length,
    analytics: entry.visitHistory,
  });
};
