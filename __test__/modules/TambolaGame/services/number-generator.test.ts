import { BoardNumberGenerator } from "@/modules/TambolaGame/services/board-number-generator";


describe("NumberGenerator service",()=>{

    describe("getRandom function",()=>{
        it("should return unique random number between 1 to 90 in 90 function calls then undefined",()=>{
            //Arrange        
            BoardNumberGenerator.reset();
            let numbers:Array<number>=[];
    
            for (let i = 1; i <= 90; i++) {
                //Act
                let n = BoardNumberGenerator.getRandom();
              
    
                //Assert
                expect(n).toBeLessThanOrEqual(90);
                expect(n).toBeGreaterThanOrEqual(1);
                expect(numbers.indexOf(n)>=0).toBeFalsy();
    
                numbers.push(n);
            }
    
            let n = BoardNumberGenerator.getRandom();
            expect(n).toBeUndefined();
    
        });
    });
    

    describe("reset function",()=>{
        it("should return unique random number between 1 to 90 in 90 function calls then undefined",()=>{
            //Arrange        
            BoardNumberGenerator.reset();
            
            //Act
            let n = BoardNumberGenerator.getRandom();
              
    
            //Assert
            expect(n).toBeLessThanOrEqual(90);
            expect(n).toBeGreaterThanOrEqual(1);
    
        });
    })

});