export default function currencyFilter(val, currency) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency
  }).format(val);
}
