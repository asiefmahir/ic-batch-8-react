import { useState, useCallback, useMemo } from "react";

export const useCounter = (initData, payload) => {
    const [counter, setCounter] = useState(initData);
	const increaseHandler = useCallback(() => {
		setCounter((current) => current + payload); // 0 + 1 = 1 // 1 + 1 = 2
	}, [payload]);

	const isEven = useMemo(() => {
		// let i = 0;
		// while (i < 999999999) {
		// 	i++;
		// }
		return counter % 2 === 0
			? "Counter value is even"
			: "Cunter value is odd";
	}, [counter]);

    return {
        counter,
        increaseHandler,
        isEven
    }
}