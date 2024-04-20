import { CallerButton } from "./callButton";
import { Num } from "./num";
import { NumberLingo } from "./numberLingo";
import styles from "@/modules/TambolaGame/styles/caller.module.css"
import numStyles from "@/modules/TambolaGame/styles/num.module.css"
import { RecentCalledNumber } from "./recentNum";
import { useState } from "react";
import useAudioPlayingState from "../hooks/useAudioPlayingState";

export function TambolaCaller({callNext,nextNumber,message}:{callNext:Function,nextNumber:number|undefined,message:string}) {

    const {audioPlaying, animationNumber, setPlayingAudio} = useAudioPlayingState();

    const onCallNext=()=>{
        setPlayingAudio(true);
        setTimeout(()=>{
            callNext();
        },5000);
    }

    return (
        <>
            <div className={`${styles.generator_container}  col-s-12 col-m-12 col-3`}>
                <div className={"col-s-6 col-m-6 col-12"}>
                    <CallerButton callNext={onCallNext} />
                    {audioPlaying?
                    (<Num num={undefined} nextNumber={animationNumber} className={numStyles.number} />)
                :
                    (<Num num={undefined} nextNumber={nextNumber} className={numStyles.number} />)}
                    
                </div>
                <NumberLingo numberLingo={message} />
                <RecentCalledNumber/>
            </div>
        </>

    );
}