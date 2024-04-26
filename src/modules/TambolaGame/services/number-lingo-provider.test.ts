import { NumberLingoProvider } from "./number-lingo-provider";


describe("NumberLingoProvider service",()=>{

    describe("getMessage function",()=>{
        it("should return correct lingo message corresponding to provided number",()=>{
            //Arrange        
            let expectResult=[
                {num:2,message:"Kaala dhan"},
                {num:10,message:"Dus numbari"},
                {num:16,message:"Sweet sixteen"},
                {num:90,message:"Top of the house blind 90"}
            ]
            //Act
            expectResult.map((item)=>{
                //Act
                const msg = NumberLingoProvider.getMessage(item.num);

                //Assert
                expect(item.message).toEqual(msg);
            });            
    
        });
    });

});