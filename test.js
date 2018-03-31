import test from 'ava';
import semver from 'semver';
import fn from '.';

test('title', async t => {
	const appVersion = await fn('1058948091');
	t.is(semver.valid(appVersion), appVersion);
});
