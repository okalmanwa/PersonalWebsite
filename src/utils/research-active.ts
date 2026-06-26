/** True when a research entry is still in progress. */
export function isResearchActive(
  status: string,
  dates?: string
): boolean {
  if (/present/i.test(dates ?? '')) return true;
  const normalized = status.trim().toLowerCase();
  return (
    normalized === 'ongoing' ||
    normalized === 'white paper in progress' ||
    normalized === 'in progress'
  );
}
