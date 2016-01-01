import test from 'ava';
import chineseSurnames from './';

test('Chinese surnames', t => {
	t.ok(chineseSurnames.length > 0);
});
