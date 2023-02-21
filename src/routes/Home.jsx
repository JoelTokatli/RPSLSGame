import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import button from "../assets/button.mp3";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  const handleClick = () => {
    new Audio(button).play();
  };
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br animate-gradient-x from-cyan-700 to-blue-700 via-blue-300 flex justify-center items-center text-center">
        <div
          className="flex flex-col justify-center items-center gap-3 w-full text-white"
          data-aos="zoom-in"
        >
          <h1 className="text-5xl">Welcome To:</h1>
          <h2 className="text-3xl">R✊ck Pap🖐r Sc✂ssor L🦎zard Sp🖖ck!</h2>
          <span className="font-bold underline">Pick a play mode</span>
          <ul className="sm:flex-row flex flex-col gap-2 w-full px-5 justify-center">
            <Link
              onClick={() => {
                handleClick();
              }}
              className=" bg-zinc-800 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider"
              to={"/main"}
              state={1}
            >
              Best Of One
            </Link>
            <Link
              className="bg-zinc-800 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider"
              to={"/main"}
              state={2}
              onClick={() => {
                handleClick();
              }}
            >
              Best Of Three
            </Link>
            <Link
              className="bg-zinc-800 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider"
              to={"/main"}
              state={3}
              onClick={() => {
                handleClick();
              }}
            >
              Best Of Five
            </Link>
            <Link
              className="bg-zinc-800 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider"
              to={"/main"}
              state={10}
              onClick={() => {
                handleClick();
              }}
            >
              First To 10
            </Link>
            <Link
              className="bg-zinc-800 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider "
              to={"/rules"}
              onClick={() => {
                handleClick();
              }}
            >
              Rules
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
