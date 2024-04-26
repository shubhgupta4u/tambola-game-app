import {render} from "@/common/utils/test-util"
import { RecentCalledNumber } from "@/modules/TambolaGame/components/recentNumber/recentNum";


describe("RecentCalledNumber component",()=>{

    describe("should render properly",()=>{

        it("should contain the div with class of 'recentContainer'",()=>{
            //Arrange        
            const { container } = render(
                <RecentCalledNumber/>
                );
    
            //Act
            const element = container.querySelector("div.recentContainer")
           
            //Assert
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('recentContainer');
        });
    
    });

});

