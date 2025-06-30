
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const course = document.getElementById("course").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "Not selected";


  alert(`Registration Successful!\n\n` +
        `Name: ${fname} ${lname}\n` +
        `Email: ${email}\n` +
        `DOB: ${dob}\n` +
        `Username: ${username}\n` +
        `Gender: ${gender}\n` +
        `Course: ${course}`);
});
