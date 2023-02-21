import React from "react";
import { Link } from "react-router-dom";
import button from "../assets/button.mp3";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Rules = () => {
  const handleClick = () => {
    new Audio(button).play();
  };
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-l from-blue-700 via-blue-500 to-gray-900 flex justify-center flex-col items-center gap-4">
        <div className="flex flex-col-reverse gap-4 sm:gap-0 sm:flex-row justify-evenly items-center w-full">
          <div className="flex flex-col items-center gap-4" data-aos="fade-up">
            <h2 className=" text-white font-bold text-4xl">How to play?</h2>
            <ul className="text-white tracking-widest flex flex-col gap-2 text-center list-disc">
              <li>Rock wins against Scissors and Lizard.</li>
              <li>Paper wins against Rock and Spock.</li>
              <li>Scissors wins against Paper and Lizard.</li>
              <li>Lizard wins against Paper and Spock.</li>
              <li>Spock Wins against Rock and Scissors.</li>
              <Link
                to={"/"}
                className="bg-zinc-800 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider"
                onClick={() => {
                  handleClick();
                }}
              >
                Go Back
              </Link>
            </ul>
          </div>
          <div className="w-80" data-aos="fade-down">
            <img
              src="../src/assets/img.webp"
              alt="asdas"
              className="rounded-md shadow-md shadow-black"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rules;
