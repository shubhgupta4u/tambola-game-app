import Head from "next/head";
import { TambolaCaller } from "../components/tambola-caller";
import { TambolaBoard } from "../components/tambola-board";
import styles from "@/modules/TambolaGame/styles/tambolaGame.module.css"
import useNumberGenerator from "../hooks/useNumberGenerator";

export function TambolaGame() {

    const {randomNumber,message, callNextNumber} = useNumberGenerator();   
    
    const generateRandomNumber=()=>{
        callNextNumber();
    }
    return (
        <div className={styles.main}>
            <Head>
                <title>Play Tambola Game</title>
            </Head>
            <div className={styles.tng_container}>
                <div className={`${styles.cf}  flex`}>
                    <TambolaCaller callNext={generateRandomNumber} nextNumber={randomNumber} message={message === undefined?"":message}/>
                    <TambolaBoard nextNumber={randomNumber}/>
                </div>
            </div>
        </div>
    );
}