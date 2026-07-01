const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// Formats "2024-12" -> "Dec 2024". Pass null/empty for an ongoing date -> "Present".
export function formatMonth(value) {
  if (!value) return "Present";
  const [year, month] = value.split("-");
  const idx = parseInt(month, 10) - 1;
  return `${MONTHS[idx] ?? ""} ${year}`.trim();
}

// Formats "2023-05-27" -> "May 27, 2023"
export function formatFullDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  const idx = parseInt(month, 10) - 1;
  return `${MONTHS[idx] ?? ""} ${parseInt(day, 10)}, ${year}`;
}
