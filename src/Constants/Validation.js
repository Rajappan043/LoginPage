export default function validate(value) {
  let errors = {};
  const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  if (!emailRegex.test(value.Email)) {
    errors.Email = "Invalid Email address";
  }
  if (value.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  return errors;
}
