import { renderHook } from "@testing-library/react";
import { useWPM } from "../useWPM";


describe('useWPM hook', () => {
	test('should return 0 when finalwords is false', () => {
		const mockStartTime = Date.now();
		const { result } = renderHook(() => useWPM('Hola mundo', mockStartTime, false));
		expect(result.current.wpm).toBe(0);
	});
	
	test('should return a wpm when we pass one minute', () => {
		const mockStartTime = Date.now() - 60000;
		const { result } = renderHook(() => useWPM('Hola mundo', mockStartTime, true));
		expect(result.current.wpm).not.toBe(0);
	});

	
});