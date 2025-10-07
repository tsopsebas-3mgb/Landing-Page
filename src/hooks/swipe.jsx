import {useState} from "react";

export  const useSwipe=(array)=>{
    const [swipeIndex,setSwipeIndex]=useState(0);
    const swipeHandler=(pom)=>{
        pom ? setSwipeIndex(prev===array.length-1 ?
            setSwipeIndex(0):
            setSwipeIndex(prev=>prev-1)):setSwipeIndex(prev=>prev-1);
    }

}