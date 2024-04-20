import { AppDispatch, RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementAsync, incrementByAmount } from "../../common/state/counterSlice";


export function Counter(){
    const count = useSelector((state:RootState)=>state.counterReducer.value);
    const dispatch =useDispatch<AppDispatch>();

    return(
<div>
    <h2>{count}</h2>
    <div>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button onClick={()=>{dispatch(incrementByAmount(5))}}>IncrementByAmount</button>
        <button onClick={()=>{dispatch(incrementAsync(5))}}>IncrementByAmount</button>
    </div>
</div>
    );
}