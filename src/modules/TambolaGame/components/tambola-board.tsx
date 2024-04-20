import { Num } from "./num";
import styles from "@/modules/TambolaGame/styles/board.module.css"
import numStyles from "@/modules/TambolaGame/styles/num.module.css"

export function TambolaBoard({nextNumber}:{nextNumber:number|undefined}) {
    let boardNums: Array<number> = [];

    for (var i = 1; i <= 90; i++) {
        boardNums.push(i);
    }
    
    return (
        <div className={`${styles.grid_container} col-s-12 col-m-12 col-9`}>
        
            {
                boardNums.map(n => (
                    <Num key={n} num={n} nextNumber={nextNumber}  className={numStyles.board_number}/>
                ))
            }
            
            
        </div>
    );
}