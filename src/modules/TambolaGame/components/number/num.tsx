import styles from "@/modules/TambolaGame/components/number/num.module.css"
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";


export function Num({ num, className, nextNumber }: { num: number|undefined ,className:string,nextNumber:number|undefined}) {
    
    const prevCalledNumbers = useSelector((state: RootState) => state.calledNumberReducer.values);

    return (
        <div className={`${className} ${num !== undefined && prevCalledNumbers.indexOf(num)>=0?styles.generated:styles.pending}`} >
           {(num === undefined)?(nextNumber!==undefined && nextNumber >0?nextNumber:" \u00A0 "):num}
        </div>
    );
}