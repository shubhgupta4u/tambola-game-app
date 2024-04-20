export class NumberGenerator{
    boardNums: Array<number> = [];
    
    constructor(){
        for (var i = 1; i <= 90; i++) {
            this.boardNums.push(i);
        }
    }
    
    getRandom():number{
        const randomIndex = Math.floor(Math.random() * this.boardNums.length);
        const num=this.boardNums[randomIndex];
        this.boardNums.splice(randomIndex, 1)
        console.log(num);
        return num;
    }
}