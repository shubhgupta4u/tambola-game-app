
import { render, screen } from "@/common/utils/test-util"
import { Num } from "./num";
import { numberElementType } from "@/common/constants/numberElementType";

describe("Num component",()=>{

    describe("should render properly", () => {

        it("should display correct number with class of 'board_number' for 'numberElementType.BoardNumber'", () => {
            const num=4;
            //Arrange        
            render(
                <Num num={4} elementType={numberElementType.BoardNumber} />
            );
    
            //Act
            const element = screen.getByText(num);
    
            //Assert
            expect(element).toBeInTheDocument();
            expect(element).toHaveTextContent(num.toString());
            expect(element).toHaveClass('board_number');
            expect(element).toHaveClass('pending');
        });
    
        it("should display correct number with class of 'number' for 'numberElementType.CallerNumber'", () => {
            const num=4;
            //Arrange        
            render(
                <Num num={4} elementType={numberElementType.CallerNumber} />
            );
    
            //Act
            const element = screen.getByText(num);
    
            //Assert
            expect(element).toBeInTheDocument();
            expect(element).toHaveTextContent(num.toString());
            expect(element).toHaveClass('number');
        });
    
    });
    
});



