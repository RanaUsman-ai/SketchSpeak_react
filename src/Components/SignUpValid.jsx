function signupValidation(values) {
  const errors = {};

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  // ✅ Name validation
  if (!values.name.trim()) {
    errors.name = "Name is required!";
  } else if (values.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters!";
  }

  // ✅ Email validation
  if (!values.email.trim()) {
    errors.email = "Email is required!";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email!";
  }

  // ✅ Password validation
  if (!values.password) {
    errors.password = "Password is required!";
  } else if (!passwordPattern.test(values.password)) {
    errors.password =
      "Password must be at least 6 characters, include a number & special character!";
  }

  return errors;
}

export default signupValidation;
