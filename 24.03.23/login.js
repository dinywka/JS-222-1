let logBtn = document.getElementById("log-btn");
logBtn.addEventListener("click", login);

function setCookie(cookieName, cookieValue, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie =
    cookieName + "=" + cookieValue + ";" + expires + ";path='/'";
    // console.log(document.cookie)
}

async function login(e) {
  e.preventDefault();
  let myUser = null;
  let users = [];
  let registrationForm = document.forms.login;
  let username = registrationForm.elements.username.value;
  let password = registrationForm.elements.password.value;
  console.log("works")
  const response = await fetch(
    "https://641dd8720596099ce155ef40.mockapi.io/api/users" 
    // другой ресурс так как кончились запросы на crudcrud
  );
  if (response.status === 200) {
    users = await response.json();
    for (let user of users) {
      if (user.username === username) {
        if (user.password === password) {
          myUser = user;
          setCookie("user_id", user.id, 30);
          window.location = "http://127.0.0.1:8080/home.html";
        }
        else {
            alert('Неправильный пароль');
            return;
        }
      }
    }
  } else {
    console.log("Не получилось авторизоваться");
  }
  console.log(myUser);
  return myUser;
}