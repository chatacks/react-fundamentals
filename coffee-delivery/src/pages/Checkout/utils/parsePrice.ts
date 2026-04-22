export const parsePrice = (value: string) => {
  if (!value) return 0;

  return parseFloat(
    value.replace(/\./g, '').replace(',', '.')
  );
};
