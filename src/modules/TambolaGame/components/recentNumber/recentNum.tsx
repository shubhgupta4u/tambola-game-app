import styles from "@/modules/TambolaGame/components/recentNumber/recentNum.module.css"
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export function RecentCalledNumber() {

    const prevCalledNumbers = useSelector((state: RootState) => state.calledNumberReducer.values);
    
    return (
        <div className={styles.recentContainer}>
            {
                
                prevCalledNumbers.slice(-6).reverse().map((n,i) => (
                    (i>0 && (window.innerWidth > 540 || i<5)  )?(
                        <div key={n} className={`${styles.number} ${i==1?styles.previous_number:""}`} >
                            {n}
                        </div>):""
                ))

            }
        </div>


    );
}