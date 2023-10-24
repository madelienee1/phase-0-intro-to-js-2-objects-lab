

const employee = {
    name: "Maddy",
    streetAddress: "Maroochydore",
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const nonDestructive = { ...employee, [key]: value };
    return nonDestructive;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const deleteEmployee = { ...employee };
    deleteEmployee[key] = value;
    return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee;
}
