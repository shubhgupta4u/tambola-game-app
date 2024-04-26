import { Num } from "@/modules/TambolaGame/components/number/num";
import styles from "@/modules/TambolaGame/components/tambolaBoard/board.module.css"
import { NumberUtility } from "@/common/utils/number-util";
import { numberElementType } from "@/common/constants/numberElementType";

export function TambolaBoard() {
    let boardNums: Array<number> = NumberUtility.getBoardNumbers();
    
    return (
        <div className={`${styles.grid_container}`}>
        
            {
                boardNums.map(n => (
                    <Num key={n} num={n} elementType={numberElementType.BoardNumber} />
                ))
            }
            
            
        </div>
    );
}