
import useNumberGenerator from "./useNumberGenerator";
import { act, renderHook } from "@/common/utils/test-util";

describe("useNumberGenerator hook", () => {
    
  it("should return the initial values for randomNumber, message and callNextNumber", async () => {
    
    //Arrange
    const { result } = renderHook(useNumberGenerator);

    //Act
    const { randomNumber, message, callNextNumber } = result.current;

    //Assert
    expect(randomNumber).toBeUndefined();
    expect(message).toBeUndefined();
    expect(callNextNumber).toEqual(expect.any(Function))
  });

  it("should assign values to randomNumber, message on callNextNumber function call", async () => {
    //Arrange
    const { result } = renderHook(useNumberGenerator);

    //Act
    act(() => {
      result.current.callNextNumber()
    });
    
    //Assert
    expect(result.current.randomNumber).toBeDefined();
    expect(result.current.message).toBeDefined();
  });
});

