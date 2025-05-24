// Thêm/sửa/xóa khóa học với Fetch và REST API

var courseApi = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);

  handleCreateForm();
}

start();

function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback)
    .catch(function (error) {
      console.log(`Nội dung lỗi: ${error}`);
    });
}

function createCourse(data, callback) {
  var options = {
    method: "POST",
    body: JSON.stringify(data),
  };
  fetch(courseApi, options)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `
    <li>
        <h4>${course.name}</h4>
        <p>${course.description}</p>
    </li>
    `;
  });
  listCoursesBlock.innerHTML = htmls.join("");
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");

  createBtn.onclick = function () {
    var name = document.querySelector("input[name='name']").value;
    var description = document.querySelector("input[name='description']").value;

    var formData = {
      name: name,
      description: description,
    };

    createCourse(formData);
  };
}
