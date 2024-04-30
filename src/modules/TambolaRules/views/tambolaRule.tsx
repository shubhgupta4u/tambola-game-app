import Head from "next/head";
import { PartOne } from "../components/part-one";
import { PartTwo } from "../components/part-two";
import styles from '@/modules/TambolaRules/views/tambolaRule.module.css'
import { useState } from "react";

export function TambolaRule() {
    let [activeSection, setActiveSection] = useState(1);

    const onSectionChange = (part: number) => {
        setActiveSection(part);
    }
    return (
        <div className={styles.ruleContainer}>
            <Head>
                <title>How to play Tambola Game Online</title>
                <meta data-react-helmet="true" name="description" content="Learn How to play Tambola Game Online, it's rule and dividents. This Game is all about your luck and win prizes if fate is with you. Start generating personalized tambola game ticket online, download it and play with your friends!" />
                <meta data-react-helmet="true" property="og:title" content="Learn How to play Tambola Game Online" />
                <meta data-react-helmet="true" property="og:description" content="Learn How to play Tambola Game Online, it's rule and dividents. This Game is all about your luck and win prizes if fate is with you. Start generating personalized tambola game ticket online, download it and play with your friends!" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:image" content="https://tambola.online/images/tambola.png" />
                <meta data-react-helmet="true" property="og:url" content="https://tambola.online/rules" />
                <meta data-react-helmet="true" name="twitter:card" content="summary_large_image" />
                <meta data-react-helmet="true" name="twitter:creator" content="Shubh Gupta" />
                <meta data-react-helmet="true" name="twitter:title" content="Learn How to play Tambola Game Online" />
                <meta data-react-helmet="true" name="twitter:description" content="Learn How to play Tambola Game Online, it's rule and dividents. This Game is all about your luck and win prizes if fate is with you. Start generating personalized tambola game ticket online, download it and play with your friends!" />
                <meta data-react-helmet="true" property="og:image" content="https://tambola.online/images/tambola.png" />
                <meta data-react-helmet="true" property="twitter:url" content="https://tambola.online/rules" />
            </Head>
            <h2 className={`${styles.page_title}`}>How to Play a Tambola Game Easily in 2 Parts?</h2>
            <div className={styles.section_part}>
                <div className={`row ${styles.section_menu} ${styles.mxBackgroundsectionHeading}`}>
                    <div className={`col-6 ${styles.section_title} `}>
                        <div onClick={() => { onSectionChange(1) }}
                            className={`${styles.altblock} ${activeSection == 1?styles.active:""}`}>
                            <p>Part 1</p>
                        </div>
                        <div className={styles.headline_info}>
                            <h3>Organizing<span className={styles.headingPart2}> Tambola</span></h3>
                        </div>
                    </div>
                    <div className={`col-6 ${styles.section_title}`}>
                    <div className={`${styles.altblock} ${activeSection == 2?styles.active:""}`}>
                            <p><a onClick={() => { onSectionChange(2) }}>Part 2</a></p>
                        </div>
                        <div className={styles.headline_info}>
                            <h3>Playing<span className={styles.headingPart2}> the Game</span></h3>
                        </div>

                    </div>
                </div>


                {activeSection == 1 ? <PartOne /> : <PartTwo />}

            </div>
        </div>
    );
}