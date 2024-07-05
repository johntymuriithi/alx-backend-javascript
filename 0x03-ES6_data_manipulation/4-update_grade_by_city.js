export default function updateStudentGradeByCity(students, city, newGrades) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Filter students by the specified city
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade for the student in the newGrades array
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      // Update the student's grade, defaulting to "N/A" if not found
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
