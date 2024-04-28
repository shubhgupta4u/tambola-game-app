import { useEffect, useState } from "react"
import { RandomTicketProvider } from "../../services/random-ticket-provider"
import { Constants } from "@/common/constants/env-constant";


export function TicketTemplateComponent(
    { hostName, playerName, footerMessage, idStart, code }
        :
        { hostName: string | undefined, playerName: string | undefined, footerMessage: string | undefined, idStart: string | undefined, code: string | undefined }
) {
    
    const [ticketData,setTicketData]=useState<Array<Array<number>>>();
    useEffect(()=>{
            let ticketData = RandomTicketProvider.getData();
            setTicketData(ticketData.numbers);
       
    },[])
    const ticket_template_outer: any = {
        margin: "0px auto",
        padding: "8px",
        background: "rgba(255, 255, 255, 0.5)",
        maxWidth: "450px",
        minWidth:"450px"
    }

    const ticket_template: any = {
        border: "5px groove #54d400",
        width: "100%",
        maxWidth: "450px",
        padding: "0px",
        borderCollapse: "collapse"
    }

    const header_footer: any = {
        width: "100%",
        textAlign: "center",
        margin: "0px",
        // padding: "0px 10px",
        display: "flex",
        flexDirection: "row",      
    }
    const first: any = {
        width: "100%",
        fontWeight: "bold",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textWrap: "nowrap",
        maxWidth: "42%",
        textAlign: "left",
        marginLeft:"10px"
    }
    const middle: any = {
        width: "100%",
        fontWeight: "bold",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textWrap: "nowrap",
        maxWidth: "16%",
        textAlign: (playerName === "" && hostName == ""?"center":(hostName == ""?"right":"center")),
        margin: (playerName === "" && hostName == ""?"auto":(hostName == ""?"0 10px 0 auto":"0 10px"))
    }
    const last: any = {
        width: "100%",
        fontWeight: "bold",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textWrap: "nowrap",
        maxWidth: "42%",
        textAlign: "right",
        marginLeft: (playerName === ""?"auto":"0"),
        marginRight:"10px"
    }
    const first_footer: any = {
        width: "100%",
        fontWeight: "bold",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textWrap: "nowrap",
        maxWidth: "42%",
        textAlign: (code == "" && footerMessage == ""?"center":"left"),
        margin: (code == "" && footerMessage == ""?"auto":"0 0 0 10px")
    }
    const middle_footer: any = {
        width: "100%",
        fontWeight: "bold",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textWrap: "nowrap",
        maxWidth: "16%",
        textAlign: (code !== "" && footerMessage === ""?"right":"center"),
        margin: (code !== "" && footerMessage === ""?"0 10px 0 auto":"0 10px")
    }
    const last_footer: any = {
        width: "100%",
        fontWeight: "bold",
        overflow: "hidden",
        textOverflow: "ellipsis",
        textWrap: "nowrap",
        maxWidth: "42%",
        textAlign: "right",
        marginLeft: (code === "" && footerMessage !== ""?"auto":"0"),
        marginRight:"10px"
    }
    const num_box: any = {
        border: "2px solid #54d400",
        padding: "2px",
        margin: "2px",
        textAlign: "center",
        height: "36px",
        width: "11%",
        fontWeight: "bold",
        fontSize: "24px",
    }
    const ticket_box: any = {
        margin: "auto",
        background: "rgba(255, 255, 255, 0.8)",
        color: "#000000",
        width: "96%",
        padding: "0px",
        borderCollapse: "collapse",
        border: "0 solid #54d400"
    }
    const domainName=Constants.DomainName;
    return (
        <>
            <div role="ticket-template-container">
                <div id="ticket-grid-0" style={ticket_template_outer}>
                    <div style={ticket_template}>
                        <div style={header_footer}>
                            <div hidden={hostName == "" && playerName == ""} style={first} >{playerName || playerName == "" ? playerName : "<Player Name>"}</div>
                            <div style={middle}>#{idStart ? idStart : "<1>"}</div>
                            <div hidden={hostName == ""} style={last}>{hostName ? hostName : "<Host Name>"}</div>
                        </div>

                        <table style={ticket_box}  >
                            <tbody>
                                {
                                    ticketData !== undefined && ticketData.map((rowNos: Array<number>, idx: number) => (
                                        <tr key={idx}>
                                            {
                                                rowNos.map((no, i) => (
                                                    <td key={`${idx}${i}`} style={num_box}>  {no > 0 ? no : ""} </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <div style={header_footer}>
                            <div style={first_footer}>{domainName}</div>
                            <div hidden={code == ""} style={middle_footer}>{code ? code : "<Code>"}</div>
                            <div hidden={footerMessage == ""} style={last_footer}>{footerMessage ? footerMessage : "<Footer Message>"}</div> 
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}