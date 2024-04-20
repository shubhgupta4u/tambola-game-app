import styles from "@/modules/TambolaGame/styles/numberLingo.module.css"

export function NumberLingo({ numberLingo }: { numberLingo: string }) {


    return (
        <>
            <div className="col-s-6 col-m-6 col-12">
                <div className={`${styles.lingo} ${styles.numberinfo} ${styles.simpleno}`}>{numberLingo} {'\u00A0'}</div>
            </div>
        </>

    );
}