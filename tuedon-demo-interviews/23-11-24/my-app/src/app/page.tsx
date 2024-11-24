"use client"

import DisplayData from "@/component/DisplayData";
import { fetchItems } from "@/utils";
import { DisplayType } from "@/utils/types";
import { useEffect, useState } from "react";

export default function Home() {
const [demoDisplayData, setDemoDisplayData] = useState<DisplayType[] | []>([])
const [errorString, setErrorString] = useState("");
  useEffect(()=>{
  const fetchItemsAsync = async ()=> {
    try {
      const response = await fetchItems()
      setDemoDisplayData(response)
    }
    catch(err:any) {
        setErrorString(err)
    }
  }    

  fetchItemsAsync()

  },[])
  return (
    <div className="">
      {demoDisplayData.map(display => <DisplayData key={display.id} {...display}/> )}
    </div>
  );
}
