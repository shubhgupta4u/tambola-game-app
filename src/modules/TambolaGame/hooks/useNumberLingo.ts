import { useState } from "react";
import { NumberGenerator } from "../services/number-generator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { pushNextCalledNumber } from "@/common/state/calledNumberSlice";

export default function useNumberLingo() {
    const [randomNumber, setRandomNumber] = useState<number>();
    const numberGenerator:NumberGenerator=new NumberGenerator();

    const prevCalledNumbers = useSelector((state: RootState) => state.calledNumberReducer.values);
    const dispatch = useDispatch();

    function callNextNumber() {
        let randomNumber = numberGenerator.getRandom();
        setRandomNumber(randomNumber);
        dispatch(pushNextCalledNumber(randomNumber));
      }

    return {randomNumber,callNextNumber};
  }