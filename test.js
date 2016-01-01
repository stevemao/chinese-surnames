import test from 'ava';
import chineseSurnames from './';

test('title', t => {
	t.ok(chineseSurnames.length > 0);
});
