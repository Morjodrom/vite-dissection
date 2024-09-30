import {vitest, it, test, describe, afterEach, vi, expect} from "vitest";
import {calculate} from "../modules/calculate.js";

describe('calculate', () => {
	afterEach(() => vi.restoreAllMocks);

	it('calculates with a callback', () => {
		const mock = vi.fn((a: any, b: any) => 0);

		calculate(1, 2, mock);

		expect(mock).toBeCalledTimes(1);
		expect(mock.mock.calls).toEqual([[1, 2]]);
	})
})