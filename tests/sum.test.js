import {expect, test} from 'vitest';
import {sum} from 'modules/sum.js';

test('1 + 2 = 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('1 + -Infinity = -Infinity', () => {
	expect(sum(1, -Infinity)).toBe(-Infinity);
});

test('sum for snapshots', () => {
	// noinspection JSUnresolvedReference
	expect(sum(1, 2)).toMatchSnapshot();
})
test('sum for customized snapshots', () => {
	// noinspection JSUnresolvedReference
	expect(`<div>1 + 2 = 3</div>`).toMatchFileSnapshot('./custom-snapshots/sum.test.snapshot.html');
})