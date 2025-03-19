const priceFormatter = new Intl.NumberFormat('ru-RU', {
   style: 'currency',
   currency: 'RUB',
   maximumFractionDigits: 0,
});
// 7 000 000 P

const priceFormatterDecimals = new Intl.NumberFormat('ru-RU', {
   style: 'currency',
   currency: 'RUB',
   maximumFractionDigits: 2,
});
// 7 000 000.45 P

export { priceFormatter, priceFormatterDecimals };