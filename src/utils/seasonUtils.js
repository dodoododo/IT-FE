export function getSeasonLabel(month) {
  if (month >= 3 && month <= 5) return 'Mùa xuân';
  if (month >= 6 && month <= 8) return 'Mùa hè';
  if (month >= 9 && month <= 11) return 'Mùa thu';
  return 'Mùa đông';
}