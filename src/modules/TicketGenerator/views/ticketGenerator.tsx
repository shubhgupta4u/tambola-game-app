import Head from "next/head";
import styles from "@/modules/TicketGenerator/views/ticketGenerator.module.css"
import Link from "next/link";

export function TicketGenerator() {
    return (
        <div>
            <Head>
                <title>Tambola Ticket Generator</title>
            </Head>

            <header>

                <div id="intro" className="p-5 text-center bg-image shadow-1-strong"
                    style={{ backgroundImage: "url(https://mdbootstrap.com/img/new/slides/205.jpg)" }}
                >
                    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                        <div className={`d-flex justify-content-center align-items-center h-100 ${styles.message_container}`}                            >
                            <div className="text-white px-4" data-mdb-theme="dark">
                                <h1 className="mb-3">Coming Soon!</h1>


                                <h3 id="time-counter" className="border border-light my-4 p-4"></h3>

                                <p>We are working hard to finish the development of this page.</p>

                                <Link className="btn btn-outline-light btn-lg m-2" href="/" role="button" data-mdb-ripple-init
                                    rel="nofollow" >Play Tambola Game</Link>
                                <Link href="/rules" className="btn btn-outline-light btn-lg m-2"
                                    data-mdb-ripple-init
                                    role="button">How to play</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </header>


        </div>
    );
}