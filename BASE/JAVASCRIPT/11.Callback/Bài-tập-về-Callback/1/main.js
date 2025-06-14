const students = [
  { name: "An", score: 85, homeworkDone: true },
  { name: "Bình", score: 42, homeworkDone: true },
  { name: "Chi", score: 77, homeworkDone: false },
  { name: "Dũng", score: 30, homeworkDone: true },
  { name: "Hà", score: 91, homeworkDone: false },
];

function showPassed(students) {
  return students.filter((student) => {
    return student.score >= 50;
  });
}

function showNotDoneHomework(students) {
  return students.filter((student) => {
    return !student.homeworkDone;
  });
}

function showExcellent(students) {
  return students.filter((student) => {
    return student.score >= 80;
  });
}

function handleStudents(data, callback) {
  const result = callback(data);
  result.forEach((student) => {
    console.log(`- Tên: ${student.name} - Điểm ${student.score}`);
  });
}

handleStudents(students, showPassed);
handleStudents(students, showNotDoneHomework);
handleStudents(students, showExcellent);
