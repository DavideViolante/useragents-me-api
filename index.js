const axios = require('axios');
const cheerio = require('cheerio');

// This is just a wrapper for https://www.useragents.me/ APIs
const website = 'https://www.useragents.me/';
const selectorIds = {
  mobile: '#most-common-mobile-useragents-json-csv',
  desktop: '#most-common-desktop-useragents-json-csv',
};
const validTypes = ['mobile', 'desktop'];

/**
 * Scrape User Agents from useragents.me website textarea
 * @param {string} [uaType=mobile] - Specify type of agents: mobile, desktop
 * @return {Promise<Array>} Array of objects
 */
async function getJsonFromPage(uaType = 'mobile') {
  // Protect against UA types we do not have selectors for
  if (!validTypes.includes(uaType)) {
    throw new Error(`Invalid user-agent type: ${uaType}.
      Valid types are: ${validTypes.join(', ')}`);
  }

  const selector = `${selectorIds[uaType]} > div:nth-child(1) > textarea`;

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
 * @param {string} [uaType=mobile] - Specify type of agents: mobile, desktop
 * @return {Promise<Array>} Array of objects such as:
 * [{ ua: string, pct: number }, ...]
 */
async function useragentsme(uaType = 'mobile') {
  try {
    const userAgents = await getJsonFromPage(uaType);
    return userAgents;
  } catch (error) {
    console.error(error);
  }
}

exports.useragentsme = useragentsme;
