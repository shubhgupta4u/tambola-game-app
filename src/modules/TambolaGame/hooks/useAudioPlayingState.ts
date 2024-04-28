import { NumberUtility } from "@/common/utils/number-util";
import { useState } from "react";

export default function useAudioPlayingState() {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [animationNumber, SetAnimationNumber] = useState<number>();

    function setPlayingAudio(state:boolean) {        
        if(state){
            const timer= setInterval(()=>{
                let randomNumber = NumberUtility.getRandomNumber(1,90);
                SetAnimationNumber(randomNumber);
            }, 200) ;

            setTimeout(()=>{
                clearInterval(timer);
                setAudioPlaying(false);
            },2800);
        }
        setAudioPlaying(state);

    }

    return { audioPlaying, animationNumber, setPlayingAudio };
}