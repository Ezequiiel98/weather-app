const convertUnitLength = (numLength, unitLength) => {
  const ONE_MILE = 1.60934;
  const result = unitLength.toLowerCase() === 'mi' ? numLength : ONE_MILE * numLength;

  return result.toFixed(1);
};

export default convertUnitLength;
