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
                <title>Tambola Ticket Generator</title>
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
                            ticketCount={+ticketCount > 0?+ticketCount:1}
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