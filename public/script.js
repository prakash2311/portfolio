const sendPostData = () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fname, lname, email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //   const message = document.getElementById("message");
      //   message.innerText = data.msg;
      window.location.href = "http://localhost:3000/login.html";
    })
    .catch((e) => {
      console.log(e);
    });
};

const sendLogin = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status === 2) {
        window.location.href = "http://localhost:3000/register.html";
      } else {
        const message = document.getElementById("message");
        message.innerText = data.msg;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

const sendGetData = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  fetch(`http://localhost:5000/userlogin?email=${email}&password=${password}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const message = document.getElementById("message");
      message.innerText = data.msg;
    })
    .catch((e) => {
      console.log(e);
    });
};
