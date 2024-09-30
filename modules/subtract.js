export function subtract(a, b) {
	return a - b;
}

if(import.meta.vitest){
	const {it, expect, describe} = import.meta.vitest;

	describe('in source testing', () => {
		it('subtracts', () => {
			expect(subtract(1, 2)).toBe(-1);
		});
	});
}