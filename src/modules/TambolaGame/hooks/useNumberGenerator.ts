import { useState } from "react";
import { NumberGenerator } from "../services/number-generator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { pushNextCalledNumber } from "@/common/state/calledNumberSlice";
import { NumberLingoProvider } from "../services/number-lingo-provider";

export default function useNumberGenerator() {
    const [randomNumber, setRandomNumber] = useState<number>();
    const [message, setMessage] = useState<string>();

    const numberGenerator: NumberGenerator = new NumberGenerator();
    const numberLingoProvider: NumberLingoProvider = new NumberLingoProvider();

    const prevCalledNumbers = useSelector((state: RootState) => state.calledNumberReducer.values);
    const dispatch = useDispatch();

    function callNextNumber() {
        let randomNumber = numberGenerator.getRandom();
        setRandomNumber(randomNumber);
        setMessage(numberLingoProvider.getMessage(randomNumber));
        dispatch(pushNextCalledNumber(randomNumber));
    }

    return { randomNumber, message, callNextNumber };
}