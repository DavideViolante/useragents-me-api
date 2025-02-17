declare module 'useragents-me-api' {
  interface UserAgent {
    ua: string; // User Agent
    pct: number; // Percentage
  }
  /**
   * Get User Agents from useragents.me website as JSON
   * @param {string} [uaType=mobile] - Specify type of agents: mobile, desktop
   * @return {Promise<UserAgent[]>}
   */
  export function useragentsme(uaType?: string): Promise<UserAgent[]>;
}
