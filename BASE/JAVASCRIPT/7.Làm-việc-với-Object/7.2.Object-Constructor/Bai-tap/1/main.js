function Student(id, name, score, homeworkDone) {
  this.id = id;
  this.name = name;
  this.score = score;
  this.homeworkDone = homeworkDone;
}

Student.prototype.getGrade = function () {
  if (this.score >= 80) {
    return "Giỏi";
  } else if (this.score >= 65) {
    return "Khá";
  } else if (this.score >= 50) {
    return "Trung Bình";
  } else {
    return "Yếu";
  }
};

Student.prototype.isPassed = function () {
  return this.score >= 50;
};

const student1 = new Student(1, "Trần An Phúc", 100, true);
const student2 = new Student(2, "Trần An Phúc", 74, true);
const student3 = new Student(3, "Trần An Phúc", 70, true);
const student4 = new Student(4, "Trần An Phúc", 50, true);
const student5 = new Student(5, "Trần An Phúc", 11, true);

const students = [student1, student2, student3, student4, student5];

students.forEach((student) => {
  console.log(
    `ID: ${student.id} - Tên: ${student.name} - Điểm: ${
      student.score
    } - Bài tập ${
      student.homeworkDone ? "Đã làm" : "Chưa làm"
    } - Xếp loại: ${student.getGrade()} - Đạt/Chưa Đạt: ${
      student.isPassed() ? "Đạt" : "Chưa Đạt"
    }`
  );
});
