const students = [
  {
    id: 101,
    name: "An",
    score: 85,
    homeworkDone: true,
    email: "an@example.com",
  },
  {
    id: 102,
    name: "Bình",
    score: 42,
    homeworkDone: true,
    email: "binh@example.com",
  },
  {
    id: 103,
    name: "Chi",
    score: 77,
    homeworkDone: false,
    email: "chi@example.com",
  },
  {
    id: 104,
    name: "Dũng",
    score: 30,
    homeworkDone: true,
    email: "dung@example.com",
  },
  {
    id: 105,
    name: "Hà",
    score: 91,
    homeworkDone: false,
    email: "ha@example.com",
  },
  {
    id: 106,
    name: "Lâm",
    score: 65,
    homeworkDone: true,
    email: "lam@example.com",
  },
];

// Tạo danh sách mới thêm xếp loại và kiểm tra có đạt không
const newStudents = students.map((student) => {
  const grade =
    student.score >= 80
      ? "Giỏi"
      : student.score >= 65
      ? "Khá"
      : student.score >= 50
      ? "Trung bình"
      : "Yếu";
  const passed = student.score > 50 ? true : false;
  return {
    id: student.id,
    name: student.name,
    score: student.score,
    homeworkDone: student.homeworkDone,
    email: student.email,
    grade: grade,
    passed: passed,
  };
});

console.log(newStudents);

// Tìm học viên chưa làm bài tập
const findStudentFirstNotHomework = students.find((student) => {
  return !student.homeworkDone;
});

if (findStudentFirstNotHomework) {
  console.log("Học viên đầu tiên chưa làm bài tập:");
  console.log(findStudentFirstNotHomework);
}

// Kiểm tra xem có học viên nào bị điểm liệt không (score < 40).
const checkStudentsNotPassed = students.some((student) => {
  return student.score < 40;
});

if (checkStudentsNotPassed) {
  console.log("Có học sinh bị điểm liệt");
}

// Lọc ra danh sách học viên cần hỗ trợ (chưa làm bài hoặc bị điểm liệt).
const filterStudentsNeedSupport = students.filter((student) => {
  return !student.homeworkDone || student.score < 40;
});

if (filterStudentsNeedSupport.length > 0) {
  console.log("Danh sách học viên cần hỗ trợ:");
  filterStudentsNeedSupport.forEach((student) => {
    console.log(student);
  });
}

// Thống kê tổng số học viên theo từng học lực.
const statisticsStudentsGrade = students.reduce(
  (acc, currentValue) => {
    if (currentValue.score >= 80) {
      acc.Gioi.push(currentValue.name);
    } else if (currentValue.score >= 65) {
      acc.Kha.push(currentValue.name);
    } else if (currentValue.score >= 50) {
      acc.TrungBinh.push(currentValue.name);
    } else {
      acc.Yeu.push(currentValue.name);
    }
    return acc;
  },
  {
    Gioi: [],
    Kha: [],
    TrungBinh: [],
    Yeu: [],
  }
);

console.log("Danh sách học viên theo từng học lực:");
console.log(statisticsStudentsGrade);

// Hiển thị email học viên có tên người dùng (name) do bạn nhập vào.
const inputName = prompt().toLowerCase().trim();

const showEmailStudents = students.find((student) => {
  if (inputName === student.name.toLowerCase()) {
    return student.email;
  }
});

if (showEmailStudents) {
  console.log("Email của học viên ", showEmailStudents.name, "là:");
  console.log(showEmailStudents.email);
} else {
  console.log("Không có tên bạn đề cập");
}

// Kiểm tra xem tất cả học viên đã làm bài chưa.
const checkAllStudentsHomework = students.every((student) => {
  return student.homeworkDone;
});

if (checkAllStudentsHomework) {
  console.log("Tất cả học viên đã làm bài tập");
} else {
  console.log("Có học viên chưa làm bài tập");
}
