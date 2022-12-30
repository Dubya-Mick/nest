export const handleColorIteration = (colors: string[], index: number) => {
  if (index === colors.length - 1)
    return {
      currentColor: colors[index],
      nextColorIndex: 0,
    };

  return {
    currentColor: colors[index],
    nextColorIndex: (index += 1),
  };
};
