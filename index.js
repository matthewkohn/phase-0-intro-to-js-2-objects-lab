// Write your solution in this file!
const employee = {
  name: "Fred Malloy",
  streetAddress: "101 Main St."
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const removeEmployee = { ...employee };
  delete removeEmployee[key];
  return removeEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}