import { NumberUtility } from "@/common/utils/number-util";

export class NumberGenerator{
    private static boardNums: Array<number> = NumberUtility.getBoardNumbers();
    
    static reset()
    {
        NumberGenerator.boardNums=NumberUtility.getBoardNumbers();
    }
    
    static getRandom():number{
        const randomIndex =NumberUtility.getRandomNumber(1,this.boardNums.length)-1;
        const num=NumberGenerator.boardNums[randomIndex];
        NumberGenerator.boardNums.splice(randomIndex, 1)
        return num;
    }
}