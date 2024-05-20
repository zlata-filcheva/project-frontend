export const isInIntervalInclusive = ({
  x,
  a,
  b,
}: {
  x: number;
  a: number;
  b: number;
}) => {
  return a <= x && x <= b;
};
