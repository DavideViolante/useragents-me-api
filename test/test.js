const assert = require('assert');
const axios = require('axios');
const { useragentsme } = require('../index');

const apiResponse = {
  response: {
    common: {
      mobile: {
        data: [{ useragent: 'Mozilla/5.0 (Android)', frequency: 28.91 }],
      },
      desktop: {
        data: [{ useragent: 'Mozilla/5.0 (Macintosh)', frequency: 9.06 }],
      },
      tablet: {
        data: [{ useragent: 'Mozilla/5.0 (iPad)', frequency: 5.12 }],
      },
    },
  },
};

describe('Tests for Useragents.me', () => {
  let originalGet;

  beforeEach(() => {
    originalGet = axios.get;
    axios.get = async (url) => {
      assert.strictEqual(url, 'https://www.useragents.me/api');
      return { data: apiResponse };
    };
  });

  afterEach(() => {
    axios.get = originalGet;
  });

  it('should map common mobile user agents', async () => {
    const res = await useragentsme();
    assert.deepStrictEqual(res, [
      { ua: 'Mozilla/5.0 (Android)', pct: 28.91 },
    ]);
  });

  it('should return common desktop user agents', async () => {
    const res = await useragentsme('desktop');
    assert.deepStrictEqual(res, [
      { ua: 'Mozilla/5.0 (Macintosh)', pct: 9.06 },
    ]);
  });

  it('should return common tablet user agents', async () => {
    const res = await useragentsme('tablet');
    assert.deepStrictEqual(res, [
      { ua: 'Mozilla/5.0 (iPad)', pct: 5.12 },
    ]);
  });

  it('should reject an invalid platform', async () => {
    await assert.rejects(useragentsme('invalid'), /Invalid user-agent/);
  });
});
