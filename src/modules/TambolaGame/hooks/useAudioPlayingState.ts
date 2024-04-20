import { useState } from "react";

export default function useAudioPlayingState() {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [animationNumber, SetAnimationNumber] = useState<number>();

    function randomRange(myMin:number, myMax:number) {

        return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
      
      }

    function setPlayingAudio(state:boolean) {
        
        if(state){
            const timer= setInterval(()=>{
                let randomNumber = randomRange(1,90);
                SetAnimationNumber(randomNumber);
            }, 200) ;

            setTimeout(()=>{
                clearInterval(timer);
                setAudioPlaying(false);
            },4800);
        }
        setAudioPlaying(state);

    }

    return { audioPlaying, animationNumber, setPlayingAudio };
}