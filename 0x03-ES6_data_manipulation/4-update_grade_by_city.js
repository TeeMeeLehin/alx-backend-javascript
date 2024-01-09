export default function updateStudentGradeByCity(arr, city, newGrades) {
  const arrLoc = arr.filter((arr) => arr.location === city);
  return arrLoc.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: matchingGrade ? matchingGrade.grade : 'N/A',
    };
  });
}
