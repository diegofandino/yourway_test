import { renderHook } from "@testing-library/react";
import { useScore } from "../useScore";

describe('useScore hook', () => {
	
	test('should return 0 when final word is false', () => {
		const { result } = renderHook(() => useScore(50, 0.5, 20, 2, false));
		expect(result.current).toBe(0);
	});
	
	test('should return with that data compared when final word is true', () => {
		const { result } = renderHook(() => useScore(50, 0.5, 20, 2, true));
		const expectedScore = Math.round((50 * 0.5 * 20) - 2);
		expect(result.current).toBe(expectedScore);

	});


});