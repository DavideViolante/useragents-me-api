const assert = require('assert');
const { useragentsme } = require('../index');

describe('Tests for Useragents.me', () => {
  it('should return an array of objects with user agents and pct', async () => {
    const res = await useragentsme();
    assert.ok(res.length > 0);
    assert.ok(Object.hasOwn(res[0], 'ua'));
    assert.ok(Object.hasOwn(res[0], 'pct'));
    assert.ok(typeof res[0].ua === 'string');
    assert.ok(typeof res[0].pct === 'number');
  });

  it(
      'desktop should also return an array of objects with user agents and pct',
      async () => {
        const res = await useragentsme('desktop');
        assert.ok(res.length > 0);
        assert.ok(Object.hasOwn(res[0], 'ua'));
        assert.ok(Object.hasOwn(res[0], 'pct'));
        assert.ok(typeof res[0].ua === 'string');
        assert.ok(typeof res[0].pct === 'number');
      },
  );
});
