import CalledNumbersSlice, { pushNextCalledNumber } from './calledNumberSlice';

import expect from 'expect';

describe('calledNumberReducer', () => {

    it('should return 0 as initial state', () => {
        //Arrange
        const initialState = { values: [] };
        const action = { type: 'dummy_action' };

        //Act
        const calledNumbersInit = CalledNumbersSlice(undefined, action)

        //Assert
        expect(calledNumbersInit).toEqual(initialState);
    });

    it('should push number to state on pushNextCalledNumber() function call', () => {
        //Arrange
        const initialState = { values: [] };
        const expectedState = { values: [1] };

        //Act
        const stateAfterReducerOperation = CalledNumbersSlice(
            initialState,
            pushNextCalledNumber(1)
        );

        //Assert
        expect(stateAfterReducerOperation).toEqual(expectedState);

        //Arrange
        const initialState2 = stateAfterReducerOperation;
        const expectedState2 = { values: [1, 2] };

        //Act
        const stateAfterReducerOperation2 = CalledNumbersSlice(
            initialState2,
            pushNextCalledNumber(2)
        );

        //Assert
        expect(stateAfterReducerOperation2).toEqual(expectedState2);
    });

    it('should not push number if already present in state and write error in console on pushNextCalledNumber() function call', () => {
        //Arrange
        console.error = jest.fn()
        const initialState = { values: [1, 2] };
        const expectedState = { values: [1, 2] };
        //Act
        const afterReducerOperation2 = CalledNumbersSlice(
            initialState,
            pushNextCalledNumber(2)
        );

        //Assert
        expect(initialState).toEqual(expectedState);
        expect(console.error).toHaveBeenCalled();
    });
});