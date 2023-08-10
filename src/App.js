import React from "react"
import './App.css';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi"


function App() {
  const activeMenu = false
  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray" style={{ borderRadius: "50%", backgroundColor: "pink" }}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {
          activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"> side bar </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">side bar X</div>
          )}
        <div className={`dark:bg-main-drk-bg bg-main-bg min-h-screen w-full border-4 border-red-600 ${activeMenu ? "md:ml-72" : "flex-2"}`}>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">navbar</div>
        </div>
      </div>
    </div>
  );
}

export default App;
