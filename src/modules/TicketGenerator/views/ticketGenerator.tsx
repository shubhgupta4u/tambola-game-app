import Head from "next/head";
import styles from "@/modules/TicketGenerator/views/ticketGenerator.module.css"
import { TicketSettingComponent } from "../components/ticket-setting/ticket-setting";
import { TicketTemplateComponent } from "../components/ticket-template/ticket-template";
import { useState } from "react";
import { DownloadTicketsComponent } from "../components/download-tickets/download-tickets";
import { InputElementUtility } from "@/common/utils/input-element-util";

export function TicketGenerator() {
    const [hostName, setHostName] = useState<string>();
    const [playersName, setPlayersName] = useState<string>();
    const [footerMessage, setFooterMessage] = useState<string>();
    const [ticketIdStart, setTicketIdStart] = useState<string>();
    const [code, setCode] = useState<string>();
    const [ticketCount, setTicketCount] = useState<number>(1);
    const [shouldGenerateTicket, setGenerateTicket] = useState<boolean>(false);

    function onHostNameChange(val: string) {
        setHostName(val);
    }
    function onPlayerNameChange(val: string) {
        setPlayersName(val);
    }
    function onFooterMessageChange(val: string) {
        setFooterMessage(val);
    }
    function onTicketIdStartChange(val: string) {
        setTicketIdStart(val);
    }
    function onCodeChange(val: string) {
        setCode(val);
    }
    function onTicketCountChange(val: number) {
        setTicketCount(val);
    }
    function onTicketGenerate() {
        setGenerateTicket(true);
    }
    function onbackHandler() {
        setGenerateTicket(false);
    }
    function maxLengthCheck(event: any) {
        InputElementUtility.maxLengthCheck(event);
        onTicketCountChange(event.target.value);
    }

    function isNumeric(evt: any) {
        InputElementUtility.isNumeric(evt);
    }
    return (
        <div>
            <Head>
                <title>Generate Personalized Tambola Ticket Online</title>
                <meta data-react-helmet="true" name="description" content="Generate Tambola Game Ticket Online and Download. This Game is all about your luck and win prizes if fate is with you. Start generating personalized tambola game ticket online, download it and play with your friends!" />
                <meta data-react-helmet="true" property="og:title" content="Generate Tambola Game Ticket Online" />
                <meta data-react-helmet="true" property="og:description" content="Generate Tambola Game Ticket Online and Download. This Game is all about your luck and win prizes if fate is with you. Start generating personalized tambola game ticket online, download it and play with your friends!" />
                <meta data-react-helmet="true" property="og:type" content="website" />
                <meta data-react-helmet="true" property="og:image" content="https://tambola.online/images/tambola.png" />
                <meta data-react-helmet="true" property="og:url" content="https://tambola.online/ticket" />
                <meta data-react-helmet="true" name="twitter:card" content="summary_large_image" />
                <meta data-react-helmet="true" name="twitter:creator" content="Shubh Gupta" />
                <meta data-react-helmet="true" name="twitter:title" content="Tambola - Online Game" />
                <meta data-react-helmet="true" name="twitter:description" content="Generate Tambola Game Ticket Online and Download. This Game is all about your luck and win prizes if fate is with you. Start generating personalized tambola game ticket online, download it and play with your friends!" />
                <meta data-react-helmet="true" property="og:image" content="https://tambola.online/images/tambola.png" />
                <meta data-react-helmet="true" property="twitter:url" content="https://tambola.online/ticket" />
            </Head>

            <div className={styles.container}>
                {!shouldGenerateTicket &&

                    <div className={styles.container_inner}>
                        <div className={styles.ticket_setting}>
                            <TicketSettingComponent
                                hostName={hostName} onHostNameChange={onHostNameChange}
                                playersName={playersName} onPlayerNameChange={onPlayerNameChange}
                                footerMessage={footerMessage} onFooterMessageChange={onFooterMessageChange}
                                idStart={ticketIdStart} onTicketIdStartChange={onTicketIdStartChange}
                                code={code} onCodeChange={onCodeChange} />
                        </div>
                        <div className={styles.ticket_template}>
                            <div style={{ display: "flex", maxWidth: "450px", margin: "auto", justifyContent: "space-evenly" }} >
                                <div style={{ display: "flex", flexDirection: "column" }} >
                                    <label className={styles.label}>Ticket Count:</label>
                                    <div className={`${styles.fl} ${styles.field}`} >
                                        <input className={styles.input}
                                            type="number"
                                            min={1} max={99} maxLength={2}
                                            onKeyDown={(event) => { return isNumeric(event) }}
                                            onChange={(event) => maxLengthCheck(event)}
                                            value={ticketCount} />
                                    </div>
                                </div>

                                <input id="generate" type="button" value={"Generate"}
                                    className={styles.btn_generate}
                                    onClick={() => onTicketGenerate()} />
                            </div>
                            <div style={{ marginTop: "30px" }}>
                                <TicketTemplateComponent
                                    code={code == undefined || code.trim() == "" ? undefined : code}
                                    hostName={hostName == undefined || hostName.trim() == "" ? undefined : hostName}
                                    playerName={playersName == undefined || playersName.trim() == "" ? undefined : playersName?.split(",")[0]}
                                    footerMessage={footerMessage == undefined || footerMessage.trim() == "" ? undefined : footerMessage}
                                    idStart={ticketIdStart == undefined || ticketIdStart.trim() == "" ? "1" : ticketIdStart} />
                            </div>

                        </div>
                    </div>
                }
                {
                    shouldGenerateTicket &&
                    <div>
                        <DownloadTicketsComponent
                            ticketCount={+ticketCount > 0 ? +ticketCount : 1}
                            code={code === undefined || code.trim() == "" ? "" : code.trim()}
                            hostName={hostName === undefined || hostName.trim() == "" ? "" : hostName.trim()}
                            playersName={playersName === undefined || playersName.trim() == "" ? "" : playersName.trim()}
                            footerMessage={footerMessage === undefined || footerMessage.trim() == " " ? "" : footerMessage.trim()}
                            idStart={ticketIdStart === undefined || ticketIdStart.trim() == "" ? "1" : ticketIdStart}
                            backHandler={onbackHandler}
                        />
                    </div>
                }

            </div>

        </div>
    );
}