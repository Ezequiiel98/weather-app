const convertDegressTemp = (degress, unit) => {
  const temp = unit.toLowerCase() === 'c' ? Math.floor(degress) : Math.floor((degress * 9 / 5) + 32);

  return temp;
};

export default convertDegressTemp;
