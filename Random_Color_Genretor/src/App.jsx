import { useEffect, useState } from 'react'
import './App.css'
import { SlControlStart } from "react-icons/sl";
import { CiPause1 } from "react-icons/ci";

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [color, setColor] = useState('white');
  
  let letter = '0123456789ABCDEF';
  const Make_Color = () => {
    let changeColor = '#';
    for (let i = 0; i < 6; i++) {
      changeColor += letter.charAt(Math.floor(Math.random() * letter.length));
    }
    document.body.style.backgroundColor=changeColor;
    return changeColor;
  }

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setColor(Make_Color());
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <>
      <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" onClick={() => setIsRunning(true)}>
        <SlControlStart />
      </button>

      <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" onClick={() => setIsRunning(false)}>
        <CiPause1 />
      </button>

      <div className={`bg-${color}-500`}>
        {color}
      </div>
    </>
  );
}

export default App;
