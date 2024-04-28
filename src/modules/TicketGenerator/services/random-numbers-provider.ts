import { NumberUtility } from "@/common/utils/number-util";

export class RandomNumbersProvider{
       
    static getUniqueRandomNumbers(start:number,end:number,length:number):number[]{
        let numbers: Array<number> = [];
        let results: Array<number> = [];
        if(end-start>length-1){
            for(let i=start;i<=end;i++){
                numbers.push(i);
            }
            for(let i=0;i<length;i++){
                const randomIndex =NumberUtility.getRandomNumber(1,numbers.length)-1;
                const num=numbers[randomIndex];
                numbers.splice(randomIndex, 1);
                results.push(num);
            }
        }
        
        return results;
    }
}