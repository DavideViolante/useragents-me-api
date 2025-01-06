const axios = require('axios');
const cheerio = require('cheerio');

// This is just a wrapper for https://www.useragents.me/ APIs
const website = 'https://www.useragents.me/';
const selectorId = '#most-common-mobile-useragents-json-csv';
const selector = `${selectorId} > div:nth-child(1) > textarea`;

/**
 * Scrape User Agents from useragents.me website textarea
 * @return {Promise<Array>} Array of objects
 */
async function getJsonFromPage() {
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
 * @return {Promise<Array>} Array of objects such as:
 * [{ ua: string, pct: number }, ...]
 */
async function useragentsme() {
  try {
    const userAgents = await getJsonFromPage();
    return userAgents;
  } catch (error) {
    console.error(error);
  }
}

exports.useragentsme = useragentsme;
