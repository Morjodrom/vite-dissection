export function calculate(a: number, b: number, operator: (a: number, b: number) => number): number {
	return operator(a, b);
}