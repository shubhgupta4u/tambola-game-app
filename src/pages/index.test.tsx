import React from "react";
import Tambola from "./index";
import {render,screen} from "@/common/utils/test-util";


jest.mock('../modules/TambolaGame/views/tambolaGame', () => ({
    TambolaGame: jest.fn().mockImplementation(({ children }) => {
        return <div data-testid="TambolaGame">children</div>
      })
}));

describe("TambolaGame Component",()=>{

    describe("should render properly",()=>{

        it("should contain the main container",()=>{
            //Arrange        
            render(
                <Tambola/>           
            );
           
            //Act
            const component= screen.getByTestId("TambolaGame");
    
            //Assert
            expect(component).toBeInTheDocument();
        });
    
    
    });

});
