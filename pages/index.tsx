import { useState } from "react";

const Home = () => {
  const [alsoPetersTabActive, setAlsoPetersTabActive] = useState(true);
  const [currentTab, setCurrentTab] = useState("info");

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
          <div className="px-1 py-2 ml-6 text-2xl-text-center -translate-y-6 bg-black select-none hover:cursor-pointer max-w-fit">
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
      </div>
    </div>
  );
};

export default Home;
