import styles from "@/modules/TambolaGame/styles/callButton.module.css"
import { useEffect, useState } from "react"

export function CallerButton({callNext}:{callNext:Function}) {
  
    const [audio] = useState(typeof Audio !== "undefined" && new Audio("/audio/draw.mp3"));
   

    const onCallNext=()=>{
        if(audio){
            callNext();            
            audio.play();            
        }
        
    }

    return (
        <>
            <div >
                <input id="generate" type="button"
                    value="Call Next" className={styles.btn_generate}
                    onClick={() => onCallNext()} />
            </div>
        </>

    );
}