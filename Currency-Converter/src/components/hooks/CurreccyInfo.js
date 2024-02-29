import { useEffect, useState } from "react"

const useCurrencyInfo=(currency)=>{
    const[data,setData]=useState({});
      useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((data)=>setData(data[currency]))
      },[currency])
      return data;
}

export default useCurrencyInfo;