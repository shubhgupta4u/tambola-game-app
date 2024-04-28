import { TicketData } from "../models/ticket-data";
import { RandomNumbersProvider } from "./random-numbers-provider";

export class RandomTicketProvider {

    //Fix ticket data when all rows in a column has value
    private static fixTicketDataIssue(ticketData: Array<Array<number>>,badNos:Array<number>) {
        //First fill column of 3rd row where all rows has blank values
        for (let col = 0; col < 9; col++) {
            
            if (ticketData[0][col] == 0 && ticketData[1][col] == 0 && ticketData[2][col] == 0) {
                ticketData[2][col]=badNos.splice(0,1)[0];
            }  
        }
        //Second fill column of a row where only 1 row has value
        if(badNos.length>0){
            for (let col = 0; col < 9; col++) {
                let filledColumn=(ticketData[0][col] > 0?1:0)+(ticketData[1][col] > 0?1:0);
                if (filledColumn==1 && ticketData[2][col]==0) {                   
                    ticketData[2][col]=badNos.splice(0,1)[0];
                }  
            }  
        }
        return ticketData;
    }

    private static finalTicketCheck(ticketData: Array<Array<number>>) {
        for (let col = 0; col < 9; col++) {
            if (ticketData[0][col] > 0 && ticketData[1][col] > 0 && ticketData[2][col] > 0) {
                console.error("Can not have all columns in a row have values");
            } else if (ticketData[0][col] == 0 && ticketData[1][col] == 0 && ticketData[2][col] == 0) {
                console.error("Can not have all columns in a row have blank value");
            }
        }
        for (let row = 0; row < 3; row++) {
            let colWithValue=0;
            for (let col = 0; col < 9; col++) {
                if(ticketData[row][col] > 0){
                    colWithValue+=1;
                }
               
            }
            if(colWithValue !==5){
                console.error("Each row should have 5 columns with value");
            }
            console.log(ticketData[row]);
        }
    }
    static getData(): TicketData {
        const ticketNumbers = RandomNumbersProvider.getUniqueRandomNumbers(1, 90, 15);
        let ticketData: Array<Array<number>> = [];
        let badNos:Array<number>=[]
        for (let row = 0; row < 3; row++) {

            let rowData: Array<number> = [];
            let rowNumbers = ticketNumbers.slice(row * 5, ((row + 1) * 5));
            const filledColPosition = RandomNumbersProvider.getUniqueRandomNumbers(1, 9, 5);
            let filledIndex = 0; 

            for (let col = 0; col < 9; col++) {
                if (filledColPosition.indexOf(col + 1) >= 0 && filledIndex < 5) {
                    if(row==2 && ticketData[0][col] > 0 && ticketData[1][col] > 0)
                        {
                            rowData.push(0);
                            badNos.push(rowNumbers[filledIndex]);
                        }
                    else{
                        rowData.push(rowNumbers[filledIndex]);
                       
                    }
                    filledIndex += 1;
                } else {
                    rowData.push(0);
                }
            }

            ticketData.push(rowData);
        }

        return new TicketData(RandomTicketProvider.fixTicketDataIssue(ticketData,badNos));
    }
}