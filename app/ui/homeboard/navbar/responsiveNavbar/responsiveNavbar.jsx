"use client";

import styles from "@/app/ui/homeboard/navbar/responsiveNavbar/responsiveNavbar.module.css";
import NavContents from "./navcontents/navcontents";
import { useState } from "react";
import {
    MdAnalytics,
    MdDashboard,
    MdFormatAlignCenter,
    MdFormatAlignJustify,
    MdHelpCenter,
    MdLibraryAdd,
    MdLibraryBooks,
    MdOutlineMenuBook,
    MdSupervisedUserCircle
  } from "react-icons/md";

const navContents = [
  {
    title: "ホーム",
    path: "/homeboard",
    icon: <MdDashboard />,
  },
  {
    title: "ユーザー",
    path: "/homeboard/users",
    icon: <MdSupervisedUserCircle />,
  },
  {
    title: "問題一覧",
    path: "/homeboard/problems",
    icon: <MdFormatAlignCenter />,
  },
  {
    title: "自分の投稿一覧",
    path: "/homeboard/problems/mypost",
    icon: <MdLibraryBooks />,
  },
  {
    title: "問題を解く",
    path: "/homeboard/problems/resolves",
    icon: <MdOutlineMenuBook />,
  },
  {
    title: "問題を作る",
    path: "/homeboard/problems/add",
    icon: <MdLibraryAdd />,
  },
  {
    title: "レポート",
    path: "/homeboard/myreport",
    icon: <MdAnalytics />,
  },
  {
    title: "使い方",
    path: "/homeboard/help",
    icon: <MdHelpCenter />,
  },
];

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNavContents = () => setIsOpen(true);
  return (
    <div className={styles.container}>
      <button onClick={openNavContents}>
        <MdFormatAlignJustify size={20}/>
      </button>
      {isOpen? <NavContents setIsOpen={setIsOpen} navContents={navContents} /> : null}
    </div>
  );
};

export default ResponsiveNavbar;