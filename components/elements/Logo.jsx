"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "./IconButton";
import { IoCloseOutline } from "react-icons/io5";
import { MdCode } from "react-icons/md";

// const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
const Logo = () => {
  const { push } = useRouter();

  const onClickLogo = () => {
    push("/"); // home 이동 하는 로직
  };

  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3 ">
      {/* {isInDrawer ? (
        <IconButton
          onClickIcon={onClickClose}
          icon={<IoCloseOutline size={30} />}
        />
      ) : (
        <IconButton
          onClickIcon={onClickMenu}
          icon={<RxHamburgerMenu size={24} />}
        />
      )} */}
      {/* <div className=" cursor-pointer" onClick={onClickLogo}>
        <Image alt="logo" width={100} height={30} src={"/main-logo.svg"} />
      </div> */}

      <div className="flex items-center gap-2 px-4 py-5 cursor-pointer" onClick={onClickLogo}>
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-1.5 rounded-lg">
          <MdCode size={24} className="text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight">MINJI.log</span>
      </div>

    </section>
  );
};

export default Logo;
