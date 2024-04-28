import { InputElementUtility } from "@/common/utils/input-element-util";
import styles from "@/modules/TicketGenerator/components/ticket-setting/ticket-setting.module.css"


export function TicketSettingComponent(
    { hostName, onHostNameChange, playersName, onPlayerNameChange, footerMessage, onFooterMessageChange, idStart, onTicketIdStartChange, code, onCodeChange }
        :
        { hostName: string | undefined, onHostNameChange: Function, playersName: string | undefined, onPlayerNameChange: Function, footerMessage: string | undefined, onFooterMessageChange: Function, idStart: string | undefined, onTicketIdStartChange: Function, code: string | undefined, onCodeChange: Function }
) {

    function maxLengthCheck(event: any) {
        InputElementUtility.maxLengthCheck(event);
        onTicketIdStartChange(event.target.value);
    }

    function isNumeric(evt: any) {
        InputElementUtility.isNumeric(evt);
    }
    return (
        <>
            <div role="ticket-setting-container">
                <div className={styles.form_short}>

                    <fieldset className={`${styles.cl} ${styles.fieldset}`}>
                        <legend className={styles.legend}>Personalise Ticket</legend>

                        <label className={styles.label}>Host/Brand Name:</label>
                        <div className={`${styles.fl} ${styles.field}`} >
                            <input className={styles.input} id="idftickethostname" maxLength={20}
                                type="text" name="ticket_host_nam" value={hostName}
                                placeholder="Host/Brand Name"  autoComplete="off" onChange={(event) => onHostNameChange(event.target.value)} />
                        </div>

                        <label className={styles.label}>Player&#39;s Name (Comma Separated):</label>
                        <div className={`${styles.fl} ${styles.field}`} >
                            <input className={styles.textarea} id="idfticketplayername"
                                name="ticket_player_nam" value={playersName} type="text"
                                placeholder="Player's Name (Comma Separated)"
                                onChange={(event) => onPlayerNameChange(event.target.value)}  autoComplete="off"/>
                        </div>

                        <label className={styles.label}>Ticket Footer Message:</label>
                        <div className={`${styles.fl} ${styles.field}`} >
                            <input className={styles.input} id="idfticketfootermsg"
                                type="text" onChange={(event) => onFooterMessageChange(event.target.value)}
                                name="ticket_footer_msg" value={footerMessage} maxLength={20}
                                placeholder="Ticket Footer Message"  autoComplete="off"/>
                        </div>

                        <label className={styles.label}>Ticket Id Start #:</label>
                        <div className={`${styles.fl} ${styles.field}`} >
                            <input className={styles.input} id="idfticketidstart"
                                type="number" name="ticket_id_prefix" value={idStart}
                                placeholder="Ticket Id Start" 
                                min={1} max={999} maxLength={3}
                                onKeyDown={(event) => { return isNumeric(event) }}
                                onChange={(event) => maxLengthCheck(event)} autoComplete="off" />
                        </div>

                        <label className={styles.label}>Tambola Game Code:</label>
                        <div className={`${styles.fl} ${styles.field}`} >
                            <input className={styles.input} id="idfgamecode"
                                type="text" name="game_code" value={code}
                                placeholder="Tambola Game Code" maxLength={5}
                                onChange={(event) => onCodeChange(event.target.value)}  autoComplete="off"/>
                        </div>
                    </fieldset>

                </div>
            </div>
        </>

    );
}