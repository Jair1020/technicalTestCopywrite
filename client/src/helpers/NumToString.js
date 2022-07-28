
function stringifyNumber(n) {
  let special = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelvth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
  let deca = ['twent', 'thirt', 'fourt', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];
  let string;
  if (n < 20) string= special[n];
  else if (n % 10 === 0) string = deca[Math.floor(n / 10) - 2] + 'ieth';
  else string = deca[Math.floor(n / 10) - 2] + 'y-' + special[n % 10];
  string = string[0].toUpperCase() + string.slice(1);
  return string;
}

export default stringifyNumber;