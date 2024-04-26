import { numberElementType } from "@/common/constants/numberElementType";
import styles from "@/modules/TambolaGame/components/number/num.module.css"
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";


export function Num({ num, elementType }: { num: number|undefined ,elementType:numberElementType}) {
    
    const prevCalledNumbers = useSelector((state: RootState) => state.calledNumberReducer.values);
    const isLastCalledNumber=()=>{
        if(!prevCalledNumbers || prevCalledNumbers.length ==0){
            return false;
        }else{
            return num == prevCalledNumbers[prevCalledNumbers.length - 1];
        }
        
    }
    const isNumberAlreadyCalled=()=>{
        return num!=undefined && prevCalledNumbers.indexOf(num)>=0;
    }
    return (
        <div className={`${elementType===numberElementType.BoardNumber ?styles.board_number:styles.number} 
                         ${elementType===numberElementType.BoardNumber && isNumberAlreadyCalled()?styles.generated:styles.pending}
                         ${elementType===numberElementType.BoardNumber && isLastCalledNumber()?styles.last:""}`
                        } 
                         >
           {(num === undefined)?" \u00A0 ":num}
        </div>
    );
}