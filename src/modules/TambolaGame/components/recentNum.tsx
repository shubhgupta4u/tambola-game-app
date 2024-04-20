import styles from "@/modules/TambolaGame/styles/recentNum.module.css"
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";


export function RecentCalledNumber() {

    const prevCalledNumbers = useSelector((state: RootState) => state.calledNumberReducer.values);
    let slicedArray = [];

    return (
        <div>
            {
                prevCalledNumbers.slice(-6).reverse().map((n,i) => (
                    (i>0)?(
                        <div key={n} className={`${styles.number} ${i==1?styles.previous_number:""}`} >
                            {n}
                        </div>):""
                    
                    
                ))

            }
        </div>


    );
}