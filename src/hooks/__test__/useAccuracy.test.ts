import { renderHook } from "@testing-library/react";
import { useAccuracy } from "../useAccuracy";

describe('accuracy use hook test', () => {

	test('should return 0 when typerWords is 0', () => {
		const { result } = renderHook(() => useAccuracy(10, 0));
		expect(result.current).toBe(0);
	});
	
	test('should return some value using the form', () => {
		const { result } = renderHook(() => useAccuracy(10, 5));
		const expectedAccuracy = Math.round((10 / 5) * 100)
		expect(result.current).toBe(expectedAccuracy);
	});
	
  
})
