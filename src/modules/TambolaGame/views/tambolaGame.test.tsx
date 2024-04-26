import { TambolaBoard } from "../components/tambolaBoard/tambola-board";
import { TambolaCaller } from "../components/tambolaCaller/tambola-caller";
import {TambolaGame} from "./tambolaGame";
import {render, screen} from "@/common/utils/test-util"

jest.mock('../components/tambolaCaller/tambola-caller', () => ({
    TambolaCaller: jest.fn().mockImplementation(({ children }) => {
        return <div data-testid="TambolaCaller">children</div>
      })
}));
jest.mock('../components/tambolaBoard/tambola-board', () => ({ 
      TambolaBoard: jest.fn().mockImplementation(({ children }) => {
        return <div data-testid="TambolaBoard">children</div>
      })
}));

describe("TambolaGame component",()=>{
    describe("should render properly",()=>{

        it("should contain div element with class of 'main'",()=>{
            //Arrange        
            const { container } = render(
                <TambolaGame/>
                );
    
            //Act
            const element = container.querySelector("div.main")
    
            //Assert
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('main');
        });
    
        it("should contain the Tambola Caller",()=>{
            //Arrange  
            jest.clearAllMocks();      
            render(
                <TambolaGame/>
                );
    
            //Act
            const element = screen.getByTestId("TambolaCaller");
    
            //Assert
            expect(element).toBeInTheDocument();
            expect(TambolaCaller).toHaveBeenCalled();
        });
    
        it("should contain the Tambola Board",()=>{
            //Arrange        
            jest.clearAllMocks();
            render(
                <TambolaGame/>
                );
    
            //Act
            const element = screen.getByTestId("TambolaBoard");
    
            //Assert
            expect(element).toBeInTheDocument();
            expect(TambolaBoard).toHaveBeenCalled()
        });
    
    });
});

