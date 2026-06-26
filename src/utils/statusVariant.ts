export function statusVariant(status: string, isWinner = false) {
  if (isWinner || /hackathon winner/i.test(status)) return 'status-pill--winner';
  if (/concluded/i.test(status)) return 'status-pill--done';
  if (/ongoing|present|progress/i.test(status)) return 'status-pill--active';
  return 'status-pill--draft';
}
