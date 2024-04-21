import { Num } from "../number/num";
import styles from "@/modules/TambolaGame/components/tambolaBoard/board.module.css"
import numStyles from "@/modules/TambolaGame/components/number/num.module.css"
import { NumberUtility } from "@/common/utils/number-util";

export function TambolaBoard({nextNumber}:{nextNumber:number|undefined}) {
    let boardNums: Array<number> = NumberUtility.getBoardNumbers();
    
    return (
        <div className={`${styles.grid_container}`}>
        
            {
                boardNums.map(n => (
                    <Num key={n} num={n} nextNumber={nextNumber}  className={numStyles.board_number}/>
                ))
            }
            
            
        </div>
    );
}