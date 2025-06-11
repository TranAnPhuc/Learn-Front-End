let password = "Abc12434253636";

let checkPassword =
  password.length >= 8 && /[0-9]/.test(password) && /[A-Z]/.test(password);

console.log("Mật khẩu mạnh", checkPassword);
