const convert = (s, numRows) => {
  if (numRows === 1) return s;
  const res = [];
  let r = 0, j = 0;
  let forward = true;
  for (let i = 0; i < s.length; ++i) {
    res.push({ c: s[i], r, j });
    if (j === numRows - 1) forward = false;
    if (r > 0 && j === 0) forward = true;
    if (!forward) ++r;
    j = j + ((forward && 1) || -1);
  }

  return res
    .sort((a, b) => a.j - b.j)
    .map((e) => e.c)
    .join("");
};

console.log(
  convert(
    "Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers.",
    2
  )
);
