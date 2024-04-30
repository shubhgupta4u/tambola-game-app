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
                <title>Tambola - Online Game</title>
                <meta data-react-helmet="true" name="description" content="Play Tambola online. This Game is all about your luck and win prizes if fate is with you. Start playing online with your friends!" />
                <meta data-react-helmet="true" property="og:title" content="Tambola - Online Game" />
                <meta data-react-helmet="true" property="og:description" content="Play Tambola online. This Game is all about your luck and win prizes if fate is with you. Start playing online with your friends!" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:image" content="https://tambola.online/images/tambola.png" />
                <meta data-react-helmet="true" property="og:url" content="https://tambola.online" />
                <meta data-react-helmet="true" name="twitter:card" content="summary_large_image" />
                <meta data-react-helmet="true" name="twitter:creator" content="Shubh Gupta" />
                <meta data-react-helmet="true" name="twitter:title" content="Tambola - Online Game" />
                <meta data-react-helmet="true" name="twitter:description" content="Play Tambola online. This Game is all about your luck and win prizes if fate is with you. Start playing online with your friends!" />
                <meta data-react-helmet="true" property="og:image" content="https://tambola.online/images/tambola.png" />
                <meta data-react-helmet="true" property="twitter:url" content="https://tambola.online" />
            </Head>
            <div className={styles.tng_container}>
                <div className={`${styles.cf}`}>
                    <div className={styles.callerContainer}>
                        <TambolaCaller data-testid="TambolaCaller" callNext={generateRandomNumber} nextNumber={randomNumber} message={message === undefined ? "" : message} />
                    </div>
                    <div className={styles.boardContainer}>
                        <TambolaBoard data-testid="TambolaBoard" />
                    </div>

                </div>
            </div>
        </div>
    );
}