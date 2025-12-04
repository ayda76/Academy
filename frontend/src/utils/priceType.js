export default function priceType(price) {
  if (!price) return null;
  return new Intl.NumberFormat().format(price);
}
