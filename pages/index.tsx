import Image from "next/image";
import { useState } from "react";
import Moogle from "../public/assets/moogle_forward.gif";

interface TabMapInterface {
  info: string;
  github: string;
  resume: string;
  contact: string;
  devFinder: string;
}

const tabMap: TabMapInterface = {
  info: "Info",
  github: "Github",
  resume: "Resume",
  contact: "Contact",
  devFinder: "DevFinder",
};

const Home = () => {
  const [alsoPetersTabActive, setAlsoPetersTabActive] = useState(true);
  const [linkTabActive, setlinkTabActive] = useState(false);
  const [currentlyListeningToTabActive, setCurrentlyListeningToTabActive] =
    useState(false);

  const [currentTab, setCurrentTab] = useState("info");

  function alsoPetersTabSelect() {
    setAlsoPetersTabActive(true);
    setlinkTabActive(false);
  }

  function linkTabSelect() {
    setAlsoPetersTabActive(false);
    setlinkTabActive(true);
  }

  function selectCurrentlyListeningTo() {
    setCurrentlyListeningToTabActive(!currentlyListeningToTabActive);
  }

  return (
    <div className="flex flex-row w-screen h-screen px-4 pt-10 pb-4 bg-black">
      <div className="flex flex-col mr-2 w-1/3">
        <div
          className={
            alsoPetersTabActive
              ? "mb-1 border-2 text-purple-500 border-purple-400 rounded-md grom"
              : "mb-1 border-2 text-white border-gray-500 rounded-md flex-none"
          }
        >
          <div
            onClick={alsoPetersTabSelect}
            className="px-1 py-2 ml-6 text-2xl-text-center -translate-y-6 bg-black select-none hover:cursor-pointer max-w-fit"
          >
            List
          </div>
          {alsoPetersTabActive ? (
            <ul className="px-6 cursor-pointer text-gray-50">
              <li
                className={
                  currentTab === "info" ? "bg-purple-500 pl-2 font-bold" : ""
                }
                onClick={() => setCurrentTab("info")}
              >
                {currentTab === "info" ? "> Info" : "Info"}
              </li>
              <li
                className={
                  currentTab === "github" ? "bg-purple-500 pl-2 font-bold" : ""
                }
                onClick={() => setCurrentTab("github")}
              >
                {currentTab === "github" ? "> Github" : "Github"}
              </li>
              <li
                className={
                  currentTab === "resume" ? "bg-purple-500 pl-2 font-bold" : ""
                }
                onClick={() => setCurrentTab("resume")}
              >
                {currentTab === "resume" ? "> Resume" : "Resume"}
              </li>
              <li
                className={
                  currentTab === "contact" ? "pl-2 font-bold bg-purple-500" : ""
                }
                onClick={() => setCurrentTab("contact")}
              >
                {currentTab === "contact" ? "> Contact" : "Contact"}
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div
          className={
            linkTabActive
              ? "mb-1 border-2 text-purple-500 border-purple-400 rounded-md grow mt-4"
              : "mb-1 border-2 h-16 text-white border-gray-500 rounded-md flex-none mt-4"
          }
        >
          <div
            onClick={linkTabSelect}
            className="px-1 ml-6 text-2xl text-center -translate-y-4 bg-black select-none max-w-fit hover:cursor-pointer"
          >
            Proejcts
          </div>
          {linkTabActive ? (
            <ul className="px-6 cursor-pointer text-gray-50">
              <li
                className={
                  currentTab === "devFinder"
                    ? "bg-purple-500 pl-2 font-bold"
                    : ""
                }
                onClick={() => setCurrentTab("devFinder")}
              >
                {currentTab === "devFinder" ? "> DevFinder" : "DevFinder"}
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div className="mb1 border-2 h-64 text-white border-gray-500 rounded-md flex-none mt-4">
          <div
            onClick={selectCurrentlyListeningTo}
            className="px-1 ml-4 font-bold text-center text-blue-500 -translate-y-3 bg-black select-none max-w-fit"
          >
            Currently Listening To
          </div>
          <div className="flex flex-col px-6 text-green-500">
            <h4>Main</h4>
            <h4>RAY</h4>
          </div>
          {currentlyListeningToTabActive ? (
            <div className="translate-16">
              <Image width={100} height={100} src={Moogle} alt="Moogle" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex flex-col ml-2 w-2/3">
        <div className="text-xl text-gray-200 border-2 border-purple-400 rounded-md grow">
          <div className="px-1 py-2 ml-6 text-2xl font-bold text-center text-green-500 -translate-y-6 bg-black select-none max-w-fit">
            {tabMap[currentTab as keyof TabMapInterface]}
          </div>
          <div className="px-12">
            {currentTab === "info" && <p>I {"'"}m a Full-Stack developer</p>}
            {currentTab === "github" && (
              <p>
                Visit me on Github{"  "}
                <a href="#" className="text-blue-500" target="_blank">
                  Here
                </a>
                .
              </p>
            )}
            {currentTab === "resume" && (
              <p>
                View my Resume{" "}
                <a href="" className="text-blue-500">
                  Here
                </a>
                .
              </p>
            )}
            {currentTab === "contact" && (
              <p>
                Send me an email{" "}
                <a href="" className="text-blue-500">
                  Here
                </a>
                .
              </p>
            )}
            {currentTab === "devFinder" && (
              <div>
                <p>Search Github for a user and their info.</p>
                <a className="text-green-600" href="">
                  {">"} Try it {"<"}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
