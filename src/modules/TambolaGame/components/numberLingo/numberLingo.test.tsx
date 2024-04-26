
import { render, screen } from "@/common/utils/test-util"
import { NumberLingo } from "./numberLingo";

describe("NumberLingo component",()=>{

    describe("should render properly", () => {

        it("should display number lingo correctly with correct class name", () => {
            const msg="Valentine Day";
            //Arrange        
            render(
                <NumberLingo numberLingo={msg } />
            );
    
            //Act
            const element = screen.getByText(/Valentine Day/i);
    
            //Assert
            expect(element).toBeInTheDocument();
            expect(element).toHaveTextContent(msg);
            expect(element).toHaveClass('lingo');
            expect(element).toHaveClass('numberinfo');
            expect(element).toHaveClass('simpleno');
    
        });
    
    });

});



