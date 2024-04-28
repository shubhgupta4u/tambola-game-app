import { NumberUtility } from "@/common/utils/number-util";

export class BoardNumberGenerator{
    private static boardNums: Array<number> = NumberUtility.getBoardNumbers();
    
    static reset()
    {
        BoardNumberGenerator.boardNums=NumberUtility.getBoardNumbers();
    }
    
    static getRandom():number{
        const randomIndex =NumberUtility.getRandomNumber(1,this.boardNums.length)-1;
        const num=BoardNumberGenerator.boardNums[randomIndex];
        BoardNumberGenerator.boardNums.splice(randomIndex, 1)
        return num;
    }
}