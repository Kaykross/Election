import { ref } from "vue";

const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{5,}$/gm;

class Validator {
  static username(val) {
    return val == null || val == undefined || val.length < 0
      ? "username is not allowed to be empty"
      : val.length < 3
      ? "username must be more than 3 characters"
      : null;
  }
  static password(val) {
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
  static role(val) {
    return val == null || val == undefined || val.length < 1
      ? "Role is not allowed to be empty"
      : null;
  }
}

const role = ref({
  role: ref(null),
  options: [
    "Polling agent",
    "constituency executive",
    "regional executive",
    "national executive",
    "assistant system administrator",
    "system administrator",
  ],
});

const username = ref(null);
const password = ref(null);
const accept = ref(false);
const isPwd = ref(false);
const loginUrl = "http://localhost:3000/login";
const resMsg = ref(null);
const isMsg = ref(false);
const isBgRed = ref(false);

export {
  Validator,
  role,
  username,
  password,
  accept,
  isPwd,
  loginUrl,
  resMsg,
  isMsg,
  isBgRed,
};
