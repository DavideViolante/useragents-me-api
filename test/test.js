const assert = require('assert');
const { useragentsme } = require('../index');

describe('Tests for Useragents.me', () => {
  it('should return an array of objects with mobile user agents', async () => {
    const res = await useragentsme();
    assert.ok(res.length > 0);
    assert.ok(Object.hasOwn(res[0], 'ua'));
    assert.ok(Object.hasOwn(res[0], 'pct'));
    assert.ok(typeof res[0].ua === 'string');
    assert.ok(typeof res[0].pct === 'number');
    assert.ok(res[0].pct > 0);
    assert.ok(res[0].ua.includes('Chrome'));
    assert.ok(res[0].ua.includes('Mobile'));
  });

  it('should return an array of objects with desktop user agents', async () => {
    const res = await useragentsme('desktop');
    assert.ok(res.length > 0);
    assert.ok(Object.hasOwn(res[0], 'ua'));
    assert.ok(Object.hasOwn(res[0], 'pct'));
    assert.ok(typeof res[0].ua === 'string');
    assert.ok(typeof res[0].pct === 'number');
    assert.ok(res[0].pct > 0);
    assert.ok(res[0].ua.includes('Chrome'));
    assert.ok(!res[0].ua.includes('Mobile'));
  });

  it('should throw an error if user agent type is invalid', async () => {
    try {
      await useragentsme('invalid');
      assert.fail('Invalid user-agent type');
    } catch (error) {
      assert.ok(error instanceof Error);
    }
  });
});
