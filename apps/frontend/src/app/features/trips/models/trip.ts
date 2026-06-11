/**
 * UI / API output type (used for queries + components)
 */
export interface Trip {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  userId?: string;
}
