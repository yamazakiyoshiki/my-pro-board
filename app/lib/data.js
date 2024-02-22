import { Problem, User } from "./models";
import { connectToDB } from "./utils";
import { MdLeaderboard, MdOutlineHelp, MdSupervisedUserCircle } from "react-icons/md";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  try {
    await connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProblems = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await Problem.find({ title: { $regex: regex } }).count();
    const problems = await Problem.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, problems };
  } catch (err) {
    throw new Error("Failed to fetch problems!");
  }
};

export const fetchProblem = async (id) => {
  try {
    await connectToDB();
    const problem = await Problem.findById(id);
    return problem;
  } catch (err) {
    throw new Error("Failed to fetch problem!");
  }
};

export const fetchUserPosts = async (q, page, username) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    await connectToDB();
    const count = await Problem.find({
      title: { $regex: regex },
      username: username
    }).count();
    const posts = await Problem.find({
      title: { $regex: regex },
      username: username
    })
    .limit(ITEM_PER_PAGE)
    .skip(ITEM_PER_PAGE * (page - 1));

    return { count, posts };
  } catch (err) {
    throw new Error("Failed to fetch user's posts!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    icon: <MdSupervisedUserCircle size={24}/>,
    title: "合計ユーザー",
    number: "1,523",
    change: "12%",
  },
  {
    id: 2,
    icon: <MdOutlineHelp size={24}/>,
    title: "合計問題数",
    number: "8,342",
    change: "23%",
  },
  {
    id: 3,
    icon: <MdLeaderboard size={24}/>,
    title: "ベストスコア",
    number: "18,000",
    change: "18%",
  },
];