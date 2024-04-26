
import { act, fireEvent, render, screen } from "@/common/utils/test-util"
import { CallerButton } from "@/modules/TambolaGame/components/callerButton/callButton";


let audioPlaying=false;
const mockCallNext = jest.fn(() => {
    
});
const playStub = jest
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  .mockImplementation();

describe("CallerButton component",()=>{

    describe("should render properly", () => {

        it("should contain the button with class of 'btn_generate' and text of 'Call Next'", () => {
            //Arrange        
            render(
                <CallerButton audioPlaying={audioPlaying} callNext={mockCallNext} />
            );
    
            //Act
            const element = screen.getByRole('button', {
                name: /Call Next/i
            });
    
            //Assert
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('btn_generate')
        });
    
    });
    
    describe("'Call Next' button should render properly", () => {
    
        it("should be disabled when audio is playing with class of 'btn_generate' & 'disabled'", () => {
            //Arrange        
            render(
                <CallerButton audioPlaying={true} callNext={mockCallNext} />
            );
    
            //Act
            const element = screen.getByRole('button', {
                name: /Call Next/i
            });
    
            //Assert
            expect(element).toBeDisabled();
            expect(element).toHaveClass('btn_generate')
            expect(element).toHaveClass('disabled')
        });
    
        it("should be enabled when audio is not playing with class of 'btn_generate' &no class of 'disabled'", () => {
            //Arrange        
            render(
                <CallerButton audioPlaying={false} callNext={mockCallNext} />
            );
    
            //Act
            const element = screen.getByRole('button', {
                name: /Call Next/i
            });
    
            //Assert
            expect(element).not.toBeDisabled();
            expect(element).toHaveClass('btn_generate')
            expect(element).not.toHaveClass('disabled')
        });
    
    });
    
    describe("'Call Next' button clicked event should work properly", () => {
    
        it("should invoke 'callNext' function when clicked", () => {
            //Arrange        
            render(
                <CallerButton audioPlaying={audioPlaying} callNext={mockCallNext} />
            );
    
            //Act
            const element = screen.getByRole('button', {
                name: /Call Next/i
            });
            act(() => {
            fireEvent.click(element);
            });
    
            //Assert
            expect(mockCallNext.mock.calls.length).toEqual(1);
        });
    
    });

});

