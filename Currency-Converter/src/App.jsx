
import { useState } from "react";
 
import Input from "./components/input/Input";
import useCurrencyInfo from "./components/hooks/CurreccyInfo";

function App() {

  

  const[amount,setAmount]=useState(0);
  const[from,setFrom]=useState('usd');
  const[to,setTo]=useState('inr');
  const[convertedAmount,setConvertedAmount]=useState(0);
   
  const currencyInfo= useCurrencyInfo(from);

    const options=Object.keys(currencyInfo);
    
    const swap=()=>{
       setFrom(to);
       setTo(from);
       setConvertedAmount(amount)
       setAmount(convertedAmount)
    }

    const convert=()=>{
        setConvertedAmount(amount*currencyInfo[to])
    }
    
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://c8.alamy.com/comp/GDJPF4/abstract-finance-world-currency-background-GDJPF4.jpg')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <Input
                label="From" 
                amount={amount}
                onAmountChange={(amount)=>setAmount(amount)}
                options={options}
                setCurrency={from}
                onCurrencyChange={(from)=>setFrom(from)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Input 
                label="To"
                amount={convertedAmount}
                onCurrencyChange={(to)=>setTo(to)} 
                options={options}
                setCurrency={to}
                 />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={convert}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
