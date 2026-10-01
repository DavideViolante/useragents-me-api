const axios = require('axios');

// This is just a wrapper for https://www.useragents.me/ APIs
const endpoint = 'https://www.useragents.me/api';
const validPlatforms = ['mobile', 'desktop', 'tablet'];

/**
 * Get common User Agents from the useragents.me API
 * @param {string} platform Platform: "mobile", "desktop", "tablet"
 * @return {Promise<Array>} Array of objects
 */
async function getUserAgents(platform) {
  // Protect against platforms that does not exist
  if (!validPlatforms.includes(platform)) {
    throw new Error(`Invalid user-agent platform: ${platform}.
      Valid platforms are: ${validPlatforms.join(', ')}`);
  }

  const { data } = await axios.get(endpoint);
  return data.response.common[platform].data.map(
      ({ useragent, frequency }) => ({
        ua: useragent,
        pct: frequency,
      }));
}

/**
 * Get User Agents from useragents.me website as JSON
 * @param {string} [platform=mobile] Platform: "mobile", "desktop", "tablet"
 * @return {Promise<Array>} Array of objects such as:
 * [{ ua: string, pct: number }, ...]
 */
async function useragentsme(platform = 'mobile') {
  return getUserAgents(platform);
}

exports.useragentsme = useragentsme;
