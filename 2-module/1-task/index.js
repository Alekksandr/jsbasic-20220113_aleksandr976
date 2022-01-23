function sumSalary(salaries) {
  let result = 0;
  for (let key in salaries) {
    if (Number.isFinite(salaries[key])) {
      result = result + salaries[key];
    }
  }
  return result;
}
