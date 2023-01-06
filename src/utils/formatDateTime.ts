export function formatDatePT_BR(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}

export function formatTimePT_BR_24hr(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).format(date);
}
