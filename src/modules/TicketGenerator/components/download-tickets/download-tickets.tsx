import styles from "@/modules/TicketGenerator/components//download-tickets/download-tickets.module.css"
import { TicketTemplateComponent } from "../ticket-template/ticket-template"
import { useEffect, useState } from "react";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";
import LoadingOverlay from 'react-loading-overlay-ts';
import { color } from "html2canvas/dist/types/css/types/color";

export function DownloadTicketsComponent(
    { hostName, playersName, footerMessage, idStart, code, ticketCount, backHandler }
        :
        { hostName: string | undefined, playersName: string | undefined, footerMessage: string | undefined, idStart: string | undefined, code: string | undefined, ticketCount: number, backHandler: Function }
) {
    const [ticketDataArray, setTicketDataArray] = useState<Array<number>>([]);
    const [pageArray, setPageArray] = useState<Array<number>>([]);
    const [playerNames, setplayerNames] = useState<Array<string>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const pageSize = 5;
    const pageCount = Math.floor((ticketCount + pageSize - 1) / pageSize);

    useEffect(() => {
        if (ticketDataArray == undefined || ticketDataArray.length == 0) {

            //Prepare pagination data
            let dataArray = new Array<number>();
            let pages = new Array<number>();
            for (let i = 0; i < ticketCount; i++) {
                dataArray.push(i);
            }
            for (let i = 0; i < pageCount; i++) {
                pages.push(i);
            }
            setPageArray(pages);
            setTicketDataArray(dataArray);

            //Prepare Player state data
            if (playersName && playersName !== "") {
                let names: Array<string> = [];
                playersName?.split(",").map((name) => {
                    if (name !== "") {
                        names.push(name);
                    }
                })
                setplayerNames(names);
            }
        }
        document.body.style.minWidth = "21.5cm"; 
        const menuBtn = document.getElementById("MenuButton");
        if(menuBtn){
            menuBtn.style.visibility="hidden";  
        }  
        return () => {
            // Cleanup logic here
            document.body.style.minWidth = "375px";
            const menuBtn = document.getElementById("MenuButton");
            if(menuBtn){
                menuBtn.style.visibility="visible";  
            }            
        };
    }, [])

    const htmlStringToPdf = async () => {
        setIsLoading(true);
        let iframe = document.createElement("iframe");
        iframe.style.visibility = "hidden";
        document.body.appendChild(iframe);

        let iframedoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframedoc) {
            let pageElements = document.getElementsByClassName("page");
            if (pageElements && pageElements.length) {
                iframe.width = pageElements[0].clientWidth + "px";
                iframe.height = pageElements[0].clientHeight + "px";

                const doc = new JsPDF({
                    format: "a4",
                    unit: "mm",
                });
                for (let i = 0; i < pageElements.length; i++) {
                    iframedoc.body.innerHTML = pageElements[i].outerHTML.toString();
                    let canvas = await html2canvas(iframedoc.body, {});

                    // Convert the iframe into a PNG image using canvas.
                    let imgData = canvas.toDataURL("image/png",);

                    // Create a PDF document and add the image as a page.
                    if (i > 0) {
                        doc.addPage();
                    }
                    doc.addImage(imgData, "PNG", 0, 0, 210, 297);
                }
                // Get the file as blob output.
                let blob = doc.output("blob");
                saveFile("TambolaTickets.pdf", blob)
            }
        }

        // Remove the iframe from the document when the file is generated.
        document.body.removeChild(iframe);
        setIsLoading(false);
    };
    function saveFile(name: string, data: Blob) {
        var url = window.URL.createObjectURL(data);
        let a = document.createElement("a");
        a.style.visibility = "hidden";
        a.setAttribute("href", url);
        a.setAttribute("download", name);
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    const pageStyle: any = {
        minWidth: "21cm",
        width: "21cm",
        minHeight: "29.7cm",
        padding: "1cm",
        margin: "10px auto",
        border: "1px #D3D3D3 solid",
        borderRadius: "5px",
        background: "white",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        MozBoxSizing: "border-box",
        boxSizing: "border-box"
    }
    const subPageStyle: any = {
        border: "5px red solid",
        outline: "1cm #FFEAEA solid",
        MozBoxSizing: "border-box",
        boxSizing: "border-box",
        minHeight: "27.7cm",
    }

    return (
        <>            
            <LoadingOverlay 
                active={isLoading}
                spinner
                text='Generating PDF File for Download...'
            >
                <div style={{ MozBoxSizing: "border-box", boxSizing: "border-box" }} className={`print-container ${styles.download_tickets_container}`}>
                <div style={{ marginTop: "10px" }}>
                    <input type="button" value={"Back"}
                        className={styles.btn_generate}
                        onClick={() => backHandler()} style={{ marginRight: "10px" }} />
                    <input type="button" value={"Download"}
                        className={styles.btn_generate} style={{ marginLeft: "10px" }}
                        onClick={() => htmlStringToPdf()} />
                </div>

                <div className={styles.book}>
                    {
                        pageArray !== undefined
                        && pageArray.map((data, pageIdx) => (

                            <div key={pageIdx} className={`page `} style={pageStyle}>
                                <div style={{position: "absolute", left: "45%", fontWeight:"bolder", marginTop: "-30px"}}>Tambola Tickets ({((pageIdx) * pageSize + 1)} - {((pageIdx + 1) * pageSize)>ticketCount?ticketCount:((pageIdx + 1) * pageSize)})</div>
                                <div key={pageIdx} style={subPageStyle}>                                  
                                    {
                                        ticketDataArray.map((ticketNo, idx) => (

                                            (idx < ((pageIdx + 1) * pageSize) && idx >= ((pageIdx) * pageSize) &&
                                                <div key={idx} style={{ height: "20%", padding: "10px 0" }} >

                                                    <TicketTemplateComponent
                                                        key={idx}
                                                        code={code}
                                                        hostName={hostName}
                                                        playerName={playerNames.length > idx ? playerNames[idx].trim() : ""}
                                                        footerMessage={footerMessage}
                                                        idStart={(idx + +(idStart ?? 1)).toString()} />
                                                </div>
                                            )
                                        ))
                                    }
                                </div>
                                <div style={{position: "absolute", marginTop: "5px",left: "47%", fontWeight:"bolder"}}>Page {pageIdx+1}/{pageCount}</div>
                            </div>

                        ))
                    }

                </div>

                <div style={{ marginBottom: "15px" }}>
                    <input type="button" value={"Back"}
                        className={styles.btn_generate}
                        onClick={() => backHandler()} style={{ marginRight: "10px" }} />
                    <input type="button" value={"Download"}
                        className={styles.btn_generate} style={{ marginLeft: "10px" }}
                        onClick={() => htmlStringToPdf()} />
                </div>
            </div>
            </LoadingOverlay>
            
        </>

    );
}