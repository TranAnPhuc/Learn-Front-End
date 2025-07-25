// Promise example

var users = [
  {
    id: 1,
    name: "Kiên Đàm",
  },
  {
    id: 2,
    name: "Sơn Đặng",
  },
  {
    id: 3,
    name: "An Phúc",
  },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: "anh Sơn chưa ra video ;(",
  },
  {
    id: 2,
    user_id: 2,
    content: "vừa ra xong nha em",
  },
  {
    id: 3,
    user_id: 1,
    content: "Cảm ơn anh",
  },
];

// 1. Lấy comments
// 2. Từ comments lấy ra user_id,
// từ user_id lấy ra user tương ứng

// Fake API

function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByIds(userIds) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var result = users.filter(function (user) {
        return userIds.includes(user.id);
      });
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });

    return getUsersByIds(userIds).then(function (users) {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comment-block");
    var html = "";
    data.comments.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name}: ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });
