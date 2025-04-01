declare module 'useragents-me-api' {
  interface UserAgent {
    ua: string; // User Agent
    pct: number; // Percentage
  }
  type Platform = 'mobile' | 'desktop';
  /**
   * Get User Agents from useragents.me website as JSON
   * @param {Platform} [platform=mobile] Specify the platform: "mobile", "desktop". Default "mobile"
   * @return {Promise<UserAgent[]>}
   */
  export function useragentsme(platform?: Platform): Promise<UserAgent[]>;
}
