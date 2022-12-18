const axios = require('axios');

// This is just a wrapper for https://www.useragents.me/ APIs

/**
 * Get User Agents from useragents.me API
 * @return {Array} Array of objects such as: [{ ua: string, pct: number }, ...]
 */
async function useragentsme() {
  try {
    const res = await axios.get('https://www.useragents.me/api');
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}

exports.useragentsme = useragentsme;
