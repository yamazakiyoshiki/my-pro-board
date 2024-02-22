import { Problem } from "../models";

export const problemsCatCounter = async () => {
  const categoryName = ["JavaScript", "TypeScript", "React", "Vue", "NextJs", "NuxtJs"];
  const catCounts = await Problem.aggregate([
    {
      $match: { cat: { $in: categoryName } }
    },
    {
      $group: {
        _id: '$cat',
        count: { $sum: 1 }
      }
    }
  ]);
  return catCounts;
};
