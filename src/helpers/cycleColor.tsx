export const cycleColorInward = (colors: string[]) => {
  if (colors.length < 2) return colors;

  const colorsCopy = [...colors];

  const last = colorsCopy.pop();

  if (!last) return colors;

  colorsCopy.unshift(last);

  return colorsCopy;
};

export const cycleColorOutward = (colors: string[]) => {
  if (colors.length < 2) return colors;

  const colorsCopy = [...colors];

  const first = colorsCopy.shift();
  if (!first) return colors;

  colorsCopy.push(first);

  return colorsCopy;
};
