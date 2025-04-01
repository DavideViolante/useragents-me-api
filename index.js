const axios = require('axios');
const cheerio = require('cheerio');

// This is just a wrapper for https://www.useragents.me/ APIs
const website = 'https://www.useragents.me/';
const selectorIds = {
  mobile: '#most-common-mobile-useragents-json-csv',
  desktop: '#most-common-desktop-useragents-json-csv',
};
const validPlatforms = ['mobile', 'desktop'];

/**
 * Scrape User Agents from useragents.me website textarea
 * @param {string} [platform=mobile] Specify the platform: "mobile", "desktop"
 * @return {Promise<Array>} Array of objects
 */
async function getJsonFromPage(platform = 'mobile') {
  // Protect against platforms that does not exist
  if (!validPlatforms.includes(platform)) {
    throw new Error(`Invalid user-agent platform: ${platform}.
      Valid platforms are: ${validPlatforms.join(', ')}`);
  }

  const selector = `${selectorIds[platform]} > div:nth-child(1) > textarea`;

  try {
    const { data } = await axios.get(website);
    const $ = cheerio.load(data);
    const json = $(selector).text();
    return JSON.parse(json);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Get User Agents from useragents.me website as JSON
 * @param {string} [platform=mobile] Specify the platform: "mobile", "desktop"
 * @return {Promise<Array>} Array of objects such as:
 * [{ ua: string, pct: number }, ...]
 */
async function useragentsme(platform = 'mobile') {
  try {
    const userAgents = await getJsonFromPage(platform);
    return userAgents;
  } catch (error) {
    console.error(error);
  }
}

exports.useragentsme = useragentsme;
