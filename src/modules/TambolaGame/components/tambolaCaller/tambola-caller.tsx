import { CallerButton } from "../callerButton/callButton";
import { Num } from "../number/num";
import { NumberLingo } from "../numberLingo/numberLingo";
import styles from "@/modules/TambolaGame/components/tambolaCaller/caller.module.css"
import { RecentCalledNumber } from "../recentNumber/recentNum";
import useAudioPlayingState from "../../hooks/useAudioPlayingState";
import { numberElementType } from "@/common/constants/numberElementType";

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
                    (<Num num={animationNumber} elementType={numberElementType.CallerNumber} />)
                :
                    (<Num num={nextNumber} elementType={numberElementType.CallerNumber} />)}
                    
                </div>
                <div className={`${styles.caller_container}`}>
                    <NumberLingo numberLingo={message} />
                    <RecentCalledNumber/>
                </div>
                
            </div>
        </>

    );
}