import {render,screen} from "@/common/utils/test-util"
import { TambolaBoard } from "./tambola-board";
import { Num } from "../number/num";
import { numberElementType } from "@/common/constants/numberElementType";


jest.mock('../number/num', () => ({
                Num: jest.fn().mockImplementation(({ children }) => {
                    return <div data-testid="Num">children</div>
                })
            }));

describe("TambolaBoard component",()=>{

    describe("should render properly",()=>{

        it("should contain the div with class of 'grid_container'",()=>{
            //Arrange        
            const { container } = render(
                <TambolaBoard />
                );
    
            //Act
            const element = container.querySelector("div.grid_container")
           
            //Assert
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('grid_container');
        });
    
        it("should contain the 90 Num Component with props.elementType of 'numberElementType.BoardNumber'",()=>{
            //Arrange   
            jest.clearAllMocks();     
            render(
                <TambolaBoard />
                );
    
            //Act
            const elements = screen.queryAllByTestId("Num");
    
            //Assert
            expect(elements).toHaveLength(90);
            expect(Num).toHaveBeenCalledTimes(90);
    
            for (let i = 1; i <= 90; i++) {
    
                expect(Num).toHaveBeenCalledWith(
                    expect.objectContaining({
                        elementType: numberElementType.BoardNumber,
                        num:i
                    }),
                    expect.anything()
                  )
    
              }
            
        });
    
    });

});            

