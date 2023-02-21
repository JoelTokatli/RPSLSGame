import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
  FaRegHandSpock,
  FaRegHandRock,
  FaRegHandScissors,
  FaRegHandLizard,
  FaRegHandPaper,
} from "react-icons/fa";
import click from "../assets/click.mp3";
import { Link } from "react-router-dom";
import button from "../assets/button.mp3";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Main = () => {
  const { state } = useLocation();
  const [playerPick, setPlayerPick] = useState("");
  const [botPick, setBotPick] = useState("");
  const [playMode, setPlayMode] = useState(state);
  const [botScore, setBotScore] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [score, setScore] = useState([playerScore, botScore]);
  const [message, setMessage] = useState("Make a pick!");

  const myChoice = (e) => {
    if (botScore === state) return;
    else if (playerScore === state) return;
    else setPlayerPick(e.target.id);
    botChoice();
  };

  const botChoice = () => {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    setBotPick(choices[Math.floor(Math.random() * choices.length)]);
  };

  const checkMatch = () => {
    if (playerPick === botPick) {
      setMessage(`Both players picked: ${playerPick}. Draw`);
    } else if (
      (playerPick === "rock" && botPick === "scissors") ||
      (playerPick === "rock" && botPick === "lizard") ||
      (playerPick === "paper" && botPick === "rock") ||
      (playerPick === "paper" && botPick === "spock") ||
      (playerPick === "scissors" && botPick === "paper") ||
      (playerPick === "scissors" && botPick === "lizard") ||
      (playerPick === "lizard" && botPick === "spock") ||
      (playerPick === "lizard" && botPick === "paper") ||
      (playerPick === "spock" && botPick === "rock") ||
      (playerPick === "spock" && botPick === "scissors")
    ) {
      setMessage("You won 1 point!") + setPlayerScore(playerScore + 1);
    } else {
      setMessage("Bot won 1 point!") + setBotScore(botScore + 1);
    }
  };

  const checkScoreboard = () => {
    if (state === botScore) {
      setMessage("Bot wins!");
      new Audio(click).play();
    } else if (state === playerScore) {
      setMessage("You win!");

      new Audio(click).play();
    }
  };
  const handleClick = () => {
    new Audio(button).play();
  };

  useEffect(() => {
    checkMatch();
  }, [playerPick, botPick]);

  useEffect(() => {
    checkScoreboard();
  }, [botScore, playerScore]);
  useEffect(() => {
    setMessage("Make a pick!");
  }, []);

  return (
    <div className=" text-white w-full h-screen bg-gradient-to-r from-sky-400 to-blue-500 flex flex-col justify-center items-center gap-5">
      <div className=" flex flex-col text-center border-2 bg-slate-800 border-white justify-center font-mono ">
        <h1 className="border-b-2 border-white text-2xl font-bold">
          Scoreboard
        </h1>
        <div className="flex gap-3 justify-evenly">
          <p className="border-r-2 border-white p-2 text-center">
            Your Score: {playerScore}
          </p>
          <p className="p-2 text-center border-l-2 border-white">
            Bot Score: {botScore}
          </p>
        </div>
      </div>
      <ul className="md:flex gap-4 grid grid-cols-3 justify-items-center ">
        <li className="w-20 flex justify-center items-center flex-col gap-5">
          <i className="text-4xl text-white  border-4 border-red-900 rounded-full p-4 bg-red-500">
            <FaRegHandRock id="rock" />
          </i>
          <button
            onClick={(e) => {
              myChoice(e);
            }}
            id="rock"
            className="bg-blue-600 text-white hover:scale-105 p-1 px-2 rounded shadow-md spacing tracking-wider  shadow-black active:shadow-inner border border-black"
          >
            Rock
          </button>
        </li>
        <li className="gap-5 w-20 flex justify-center items-center flex-col">
          <i className="text-4xl text-white border-4 border-green-800 rounded-full p-4 bg-green-500">
            {<FaRegHandPaper id="paper" />}
          </i>
          <button
            onClick={(e) => {
              myChoice(e);
            }}
            id="paper"
            className="active:shadow-inner border border-black bg-blue-600 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider  shadow-black px-2"
          >
            Paper
          </button>
        </li>
        <li className="gap-5 w-20 flex justify-center items-center flex-col">
          <i className="text-4xl text-white border-4 border-yellow-800 bg-yellow-500 rounded-full p-4">
            {<FaRegHandScissors id="scissors" />}
          </i>
          <button
            onClick={(e) => {
              myChoice(e);
            }}
            id="scissors"
            className="bg-blue-600 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider  shadow-black px-2 active:shadow-inner border border-black"
          >
            Scissors
          </button>
        </li>
        <li className="gap-5 w-20 flex justify-center items-center flex-col sm:ml-0 ml-36">
          <i className="text-4xl text-white border-4 bg-purple-500 border-purple-900 rounded-full p-4">
            {<FaRegHandLizard id="lizard" />}
          </i>
          <button
            onClick={(e) => {
              myChoice(e);
            }}
            id="lizard"
            className="bg-blue-600 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider  shadow-black px-2 active:shadow-inner border border-black"
          >
            Lizard
          </button>
        </li>
        <li className="gap-5 sm:w-20 flex justify-center items-center flex-col col-span-2 w-full">
          <i className="text-4xl text-white border-4 bg-orange-500 border-orange-900 rounded-full p-4">
            {<FaRegHandSpock id="spock" />}
          </i>
          <button
            onClick={(e) => {
              myChoice(e);
            }}
            id="spock"
            className="bg-blue-600 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider shadow-black px-2 active:shadow-inner border border-black"
          >
            Spock
          </button>
        </li>
      </ul>
      <div className="flex gap-6">
        <span className="w-36 text-center p-2 bg-slate-800 rounded-md">{`Your pick: ${playerPick}`}</span>
        <span className="w-36 text-center p-2 bg-slate-800 rounded-md">
          Bot pick: {`${botPick}`}
        </span>
      </div>
      <p className="text-lg bg-blue-600 p-2 tracking-wider shadow-black shadow-sm w-96 text-center rounded-sm">
        {message}
      </p>
      <div className="flex gap-4">
        {" "}
        <Link
          to={"/"}
          className="bg-zinc-800 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider"
          onClick={() => {
            handleClick();
          }}
        >
          Go Back
        </Link>
        <Link
          className="bg-zinc-800 text-white hover:scale-105 p-1 rounded shadow-md spacing tracking-wider"
          reloadDocument={true}
        >
          Restart
        </Link>
      </div>
    </div>
  );
};

export default Main;
