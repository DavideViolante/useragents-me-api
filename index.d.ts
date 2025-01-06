declare module 'useragents-me-api' {
  interface UserAgent {
    ua: string; // User Agent
    pct: number; // Percentage
  }
  /**
   * Get User Agents from useragents.me website as JSON
   * @return {Promise<UserAgent[]>}
   */
  export function useragentsme(): Promise<UserAgent[]>;
}
