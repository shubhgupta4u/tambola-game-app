import Head from "next/head";
import styles from '@/modules/TicketGenerator/views/ticketGenerator.module.css'

export function TicketGenerator() {
    return (
        <div>
            <Head>
                <title>Tambola Ticket Generator</title>
            </Head>
            <h2 className={styles.page_title}>Tambola Ticket Generator</h2>
        </div>
    );
}