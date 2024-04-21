import { CallerButton } from "../callerButton/callButton";
import { Num } from "../number/num";
import { NumberLingo } from "../numberLingo/numberLingo";
import styles from "@/modules/TambolaGame/components/tambolaCaller/caller.module.css"
import numStyles from "@/modules/TambolaGame/components/number/num.module.css"
import { RecentCalledNumber } from "../recentNumber/recentNum";
import useAudioPlayingState from "../../hooks/useAudioPlayingState";

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
            <div className={`${styles.generator_container}`}>
                <div className={`${styles.caller_container}`}>
                    <CallerButton callNext={onCallNext} audioPlaying={audioPlaying} />
                    {audioPlaying?
                    (<Num num={undefined} nextNumber={animationNumber} className={numStyles.number} />)
                :
                    (<Num num={undefined} nextNumber={nextNumber} className={numStyles.number} />)}
                    
                </div>
                <div className={`${styles.caller_container}`}>
                    <NumberLingo numberLingo={message} />
                    <RecentCalledNumber/>
                </div>
                
            </div>
        </>

    );
}