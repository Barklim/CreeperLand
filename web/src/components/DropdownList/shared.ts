export const mapIndexToTitleNumber = (index: number): string => {
  const number = index + 1;

  return number < 10 ? `0${number}` : `${number}`;
};
