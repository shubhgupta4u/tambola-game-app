import Head from "next/head";
import { TambolaCaller } from "../components/tambolaCaller/tambola-caller";
import { TambolaBoard } from "../components/tambolaBoard/tambola-board";
import styles from "@/modules/TambolaGame/views/tambolaGame.module.css"
import useNumberGenerator from "../hooks/useNumberGenerator";

export function TambolaGame() {

    const { randomNumber, message, callNextNumber } = useNumberGenerator();

    const generateRandomNumber = () => {
        callNextNumber();
    }
    return (
        <div className={styles.main}>
            <Head>
                <title>Play Tambola Game</title>
            </Head>
            <div className={styles.tng_container}>
                <div className={`${styles.cf}`}>
                    <div className={styles.callerContainer}>
                        <TambolaCaller callNext={generateRandomNumber} nextNumber={randomNumber} message={message === undefined ? "" : message} />
                    </div>
                    <div className={styles.boardContainer}>
                        <TambolaBoard nextNumber={randomNumber} />
                    </div>

                </div>
            </div>
        </div>
    );
}