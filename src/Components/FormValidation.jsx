const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 3) {
    errors.firstName = "Minimum be 3 characters or more";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 3) {
    errors.lastName = "Minimum be 3 characters or more";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else {
    if (/^(?=.*[a-z]).{5,}$/i.test(values.password)) {
      errors.password = "weak password";
    }

    if (/^(?=.*[0-9]).{8,}$/i.test(values.password)) {
      errors.password = "medium password";
    }

    if (/([^A-Za-z0-9]).{2,}$/i.test(values.password)) {
      errors.password = "strong password";
    }
  }

  if (!values.cPassword) {
    errors.cPassword = "Required";
  } else if (values.cPassword !== values.password) {
    errors.cPassword = "not matched password ";
  }
  return errors;
};

export default validate;
