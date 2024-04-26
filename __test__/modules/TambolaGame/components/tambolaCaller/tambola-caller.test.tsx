import { render, screen } from "@/common/utils/test-util"
import { numberElementType } from "@/common/constants/numberElementType";
import { TambolaCaller } from "@/modules/TambolaGame/components/tambolaCaller/tambola-caller";
import { CallerButton } from "@/modules/TambolaGame/components/callerButton/callButton";
import { Num } from "@/modules/TambolaGame/components/number/num";
import { NumberLingo } from "@/modules/TambolaGame/components/numberLingo/numberLingo";
import { RecentCalledNumber } from "@/modules/TambolaGame/components/recentNumber/recentNum";

const num = 14;
const msg = "Valentine Day";
const mockCallNext = jest.fn(() => {

});

jest.mock('../../../../../src/modules/TambolaGame/components/callerButton/callButton', () => ({
    CallerButton: jest.fn().mockImplementation(({ children }) => {
        return <div data-testid="CallerButton">children</div>
    })
}));
jest.mock('../../../../../src/modules/TambolaGame/components/number/num', () => ({
    Num: jest.fn().mockImplementation(({ children }) => {
        return <div data-testid="Num">children</div>
    })
}));
jest.mock('../../../../../src/modules/TambolaGame/components/numberLingo/numberLingo', () => ({
    NumberLingo: jest.fn().mockImplementation(({ children }) => {
        return <div data-testid="NumberLingo">children</div>
    })
}));
jest.mock('../../../../../src/modules/TambolaGame/components/recentNumber/recentNum', () => ({
    RecentCalledNumber: jest.fn().mockImplementation(({ children }) => {
        return <div data-testid="RecentCalledNumber">children</div>
    })
}));

describe("TambolaCaller component",()=>{

    describe("should render properly", () => {

        it("should contain the div with class of 'generator_container'", () => {
            //Arrange    
            jest.clearAllMocks();
            const { container } = render(
                <TambolaCaller callNext={mockCallNext} nextNumber={num} message={msg} />
            );
    
            //Act
            const element = container.querySelector("div.generator_container")
    
            //Assert
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('generator_container');       
        });
    
        it("should contain 'CallerButton' component", () => {
            //Arrange    
            jest.clearAllMocks();
            const { container } = render(
                <TambolaCaller callNext={mockCallNext} nextNumber={num} message={msg} />
            );
    
            //Act
            const callerButtonComponent = screen.queryByTestId("CallerButton");
    
            //Assert
            expect(callerButtonComponent).toBeInTheDocument();
            expect(CallerButton).toHaveBeenCalled();
        });
    
        it("should contain 'Num' component with passing proper props", () => {
            //Arrange    
            jest.clearAllMocks();
            const { container } = render(
                <TambolaCaller callNext={mockCallNext} nextNumber={num} message={msg} />
            );
    
            //Act
            const numberComponent = screen.queryByTestId("Num");
    
            //Assert
            expect(numberComponent).toBeInTheDocument();
    
            expect(Num).toHaveBeenCalledWith(
                expect.objectContaining({
                    elementType: numberElementType.CallerNumber,
                    num:num
                }),
                expect.anything()
              )
        });
    
        it("should contain 'NumberLingo' component with passing proper props", () => {
            //Arrange    
            jest.clearAllMocks();
            const { container } = render(
                <TambolaCaller callNext={mockCallNext} nextNumber={num} message={msg} />
            );
    
            //Act
            const numberLingoComponent = screen.queryByTestId("NumberLingo");
    
            //Assert
            expect(numberLingoComponent).toBeInTheDocument();
            expect(NumberLingo).toHaveBeenCalledWith(
                expect.objectContaining({
                    numberLingo: msg
                }),
                expect.anything()
              );
        });
        it("should contain 'RecentCalledNumber' component", () => {
            //Arrange    
            jest.clearAllMocks();
            const { container } = render(
                <TambolaCaller callNext={mockCallNext} nextNumber={num} message={msg} />
            );
    
            //Act
            const recentCalledNumberComponent = screen.queryByTestId("RecentCalledNumber");
    
            //Assert
            expect(recentCalledNumberComponent).toBeInTheDocument();
            expect(RecentCalledNumber).toHaveBeenCalled();
        });
    
    });

});
