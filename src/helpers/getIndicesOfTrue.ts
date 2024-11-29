export const getIndicesOfTrue = (arr: boolean[], val: true = true) => {
  const indices: number[] = [];
  let i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indices.push(i);
  }
  return indices;
};
