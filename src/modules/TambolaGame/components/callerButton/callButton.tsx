import styles from "@/modules/TambolaGame/components/callerButton/callButton.module.css"
import { useState } from "react"
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export function CallerButton({callNext,audioPlaying}:{callNext:Function,audioPlaying:boolean}) {
  
    const [audio] = useState(typeof Audio !== "undefined" && new Audio("/audio/draw.mp3"));
    const prevCalledNumbers = useSelector((state: RootState) => state.calledNumberReducer.values);

    const onCallNext=()=>{
        if(audio){
            callNext();            
            audio.play();            
        }
        
    }

    return (
        <>
            <div >
                <input id="generate" type="button" disabled={audioPlaying || prevCalledNumbers.length == 90 ?true:false}
                    value="Call Next" className={`${styles.btn_generate} ${audioPlaying|| prevCalledNumbers.length == 90 ? styles.disabled:""}`}
                    onClick={() => onCallNext()} />
            </div>
        </>

    );
}