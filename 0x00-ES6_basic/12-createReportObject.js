export default function createReportObject(employeesList) {
  const report = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(arg) {
      return Object.keys(arg).length;
    },
  };
  return report;
}
