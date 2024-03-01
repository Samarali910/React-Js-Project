import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [range, setRange] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const PasswordRef=useRef();

  const passwordGenretor = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }
    let pass = "";
    for (let i = 1; i < range; i++) {    
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  };

  const copyToClipBord=()=>{
       PasswordRef.current?.select();
       window.navigator.clipboard.writeText(password);
  }

   useEffect(()=>{
     passwordGenretor()
   },[range,numberAllowed,characterAllowed])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            ref={PasswordRef}
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyToClipBord}>
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              className="cursor-pointer"
              min={8}
              max={100}
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
            <label>Length: {range}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
             id="numberInput" 
              defaultChecked={numberAllowed}
              onChange={()=>setNumberAllowed((prev)=>!prev)}
             />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
             type="checkbox" 
             id="characterInput" 
             defaultChecked={characterAllowed}
             onChange={()=>setCharacterAllowed((prev)=>!prev)}
             />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
