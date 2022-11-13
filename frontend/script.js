const myEmail = document.getElementById("email");
const myPassword = document.getElementById("password");
const btn = document.getElementById("submit-btn");
const myForm = document.getElementsByClassName("form");
const heading = document.getElementsByClassName("heading");
const logoutBtn = document.getElementById("logout-btn");

const URL = "http://localhost:8000/api";

//function

logoutBtn.addEventListener("click", () => {
  myForm[0].style.display = "flex";
  heading[0].innerHTML = "Login System";
  logoutBtn.style.display = "none";
});

const handleLoginSuccess = (resp) => {
  const { email, password } = resp;
  myForm[0].style.display = "none";
  heading[0].innerHTML = `Welcome ${email}`;
  logoutBtn.style.display = "block";
};

const sendLoginRequest = async (email, password) => {
  let payload = JSON.stringify({
    email,
    password,
  });

  const response = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  });

  const resp = await response.json();
  if (resp.status === 200) {
    handleLoginSuccess(resp);
  } else {
    alert("Login failed");
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (myEmail.value.trim() === "" || myPassword.value.trim() === "") return;
  sendLoginRequest(myEmail.value, myPassword.value);
};

btn.addEventListener("click", (e) => handleSubmit(e));
