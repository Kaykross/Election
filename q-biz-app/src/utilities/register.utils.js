import { ref } from "vue";
const user = ref({
  fullname: ref(null),
  email: ref(null),
  password: ref(null),
  "confirm password": ref(null),
  "phone number": ref(null),
  "card name": ref(null),
  "card number": ref(null),
  role: ref(null),
});

const options = ref({
  "role options": [
    "Polling agent",
    "constituency executive",
    "regional executive",
    "national executive",
    "assistant system administrator",
    "system administrator",
  ],
  "card options": ["Ghana Card (NIA)", "voters Id (EC)", "Passport"],
});

const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{5,}$/gm;

class Validator {
  static fullname(val) {
    console.log(val);
    return val == null || val == undefined || val.length < 0
      ? "fullname is not allowed to be empty"
      : val.length < 3
      ? "full name must be more than 3 characters"
      : null;
  }
  static email(val) {
    console.log(val);
    return val == null || val == undefined || val.length < 0
      ? "email is not allowed to be empty"
      : val.length < 3
      ? "email must be more than 3 characters"
      : null;
  }
  static password(val) {
    console.log(val);
    return val == null || val == undefined || val.length < 1
      ? "password is not allowed to be empty"
      : val.length < 5
      ? "password must be more than 5 characters"
      : !val.match(/[A-Z]/)
      ? "Password must contain at least one uppercase"
      : !val.match(/[a-z]/)
      ? "Password must contain at least one lowercase"
      : !val.match(/[\d]/)
      ? "Password must contain at least one number"
      : !val.match(/[!@#$%^&*()/\\,.?":;'><]/)
      ? "Password must contain at least one special character"
      : null;
  }
  static passwordConfirm(val) {
    console.log(val);
    return val == null || val == undefined || val.length < 1
      ? "confirm password is not allowed to be empty"
      : val.length < 5
      ? "confirm password must be more than 5 characters"
      : !val.match(user.value.password)
      ? "Passwords dont match"
      : null;
  }
  static phoneNumber(val) {
    console.log(val);
    return val == null || val == undefined || val.length < 0
      ? "phone number is not allowed to be empty"
      : val.length < 3
      ? "phone number must be at least 10 characters"
      : null;
  }
  static cardType(val) {
    console.log(val);
    return val == null || val == undefined || val.length < 0
      ? "Card type is not allowed to be empty"
      : val.length < 3
      ? "Card type must be more than 3 characters"
      : null;
  }

  static cardNumber(val) {
    console.log(val);
    return val == null || val == undefined || val.length < 0
      ? "Card number not allowed to be empty"
      : val.length < 3
      ? "Card number must be more than 3 characters"
      : null;
  }

  static role(val) {
    return val == null || val == undefined || val.length < 1
      ? "Role is not allowed to be empty"
      : null;
  }
}

const accept = ref(false);
const isPwd = ref(false);
const isConPwd = ref(false);
const registerUrl = "http://localhost:3000/register";

export { Validator, accept, isPwd, isConPwd, user, options, registerUrl };
