const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const confirmotp = /^\d{4}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
signbtn.addEventListener("click", () => {
  if (emailRegex.test(email.value)) {
    verifypage.style.display = "flex";
    signupbox.style.display = "none";
  } else {
    alert("Email is invalid");
  }
});

verifybtn.addEventListener("click", () => {
  const combinedOTP = otp1.value + otp2.value + otp3.value + otp4.value;
  if (confirmotp.test(combinedOTP)) {
    signupbox.style.display = "none";
    verifypage.style.display = "none";
    passwordcont.style.display = "flex";
  } else {
    alert("Invalid OTP");
  }
});

passwordbtn.addEventListener("click", () => {
  if (passwordinpt.value !== confirmpassinpt.value) {
    alert("Passwords do not match");
    return;
  }

  if (!passwordRegex.test(passwordinpt.value)) {
    alert(
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
    );
    return;
  }
  signupbox.style.display = "none";
  passwordcont.style.display = "none";
  personaldetails.style.display = "flex";
});

detailbtn.addEventListener("click", () => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  if (
    firstnameinpt.value === "" ||
    lastnameinpt.value === "" ||
    phonenumber.value === ""
  ) {
    alert("Please fill in all fields");
    return;
  }
  // Check if phone number matches the regex pattern
  if (!phoneRegex.test(phonenumber.value)) {
    alert("Please enter a valid phone number");
    return;
  }

  signupbox.style.display = "none";
  passwordcont.style.display = "none";
  personaldetails.style.display = "none";
  lastpage.style.display = "flex";
});
lastbtn.addEventListener("click", () => {
  if (gender.value === "" || dob.value === "") {
    alert("Please fill in all fields");
    return;
  }
  signupbox.style.display = "none";
  passwordcont.style.display = "none";
  personaldetails.style.display = "none";
  lastpage.style.display = "none";
  congrat.style.display = "flex";
});
congratbtn.addEventListener("click", () => {
  window.location.href = "../dashboard/dashboard.html";
});
