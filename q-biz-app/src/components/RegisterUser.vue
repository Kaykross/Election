<template>
  <div class="q-pa-md form-box">
    <Transition name="fade">
      <q-card
        v-if="isMsg"
        :class="{
          msgBox: true,
          'bg-red': isBgRed,
          'bg-green': isBgGreen,
          'text-white': true,
          'q-pa-none': true,
          'q-my-sm': true,
        }"
      >
        <q-list bordered>
          <q-item clickable v-ripple>
            <q-item-section><div v-text="resMsg"></div></q-item-section>
            <q-item-section side>
              <q-btn
                icon="close"
                size="9.5px"
                color="red"
                padding="3px"
                align="center"
                v-close-popup
                @click="isMsg ? (isMsg = !isMsg) : null"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </Transition>

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="form row q-col-gutter-md"
      text-white
      autocomplete="off"
    >
      <div class="input-group col-6">
        <q-input
          bg-color="white"
          filled
          v-model="user['fullname']"
          label="Your Fullname *"
          hint="Please Enter Your Fullname"
          lazy-rules
          :rules="[(val) => Validator.fullname(val)]"
          clearable
          autocomplete="off"
          class=""
          counter
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
      </div>
      <div class="input-group col-6">
        <q-input
          bg-color="white"
          filled
          v-model="user['email']"
          label="Your Email *"
          hint="Please Enter Your Email"
          lazy-rules
          :rules="[(val) => Validator.email(val)]"
          clearable
          autocomplete="off"
          class=""
          counter
          type="email"
        >
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
      </div>

      <div class="input-group col-6">
        <q-input
          v-model="user['password']"
          label="Your Password *"
          filled
          :type="isPwd ? 'text' : 'password'"
          hint="Please Enter Your Password"
          counter
          bg-color="white"
          clearable
          autocomplete="off"
          lazy-rules
          :rules="[(val) => Validator.password(val)]"
        >
          <template v-slot:append>
            <q-icon
              v-if="user['password']"
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      </div>

      <div class="input-group col-6">
        <q-input
          v-model="user['confirm password']"
          label="Confirm Password *"
          filled
          :type="isConPwd ? 'text' : 'password'"
          hint="Please Confirm Your Password"
          counter
          bg-color="white"
          clearable
          autocomplete="off"
          lazy-rules
          :rules="[(val) => Validator.passwordConfirm(val)]"
        >
          <template v-slot:append>
            <q-icon
              v-if="user['confirm password']"
              :name="isConPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isConPwd = !isConPwd"
            />
          </template>
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      </div>

      <div class="input-group col-6">
        <q-input
          bg-color="white"
          filled
          v-model="user['phone number']"
          label="Your Phone Number *"
          hint="Please Enter Your Phone Number"
          lazy-rules
          :rules="[(val) => Validator.phoneNumber(val)]"
          clearable
          autocomplete="off"
          class=""
          counter
          type="tel"
        >
          <template v-slot:prepend>
            <q-icon name="phonelink_ring" />
          </template>
        </q-input>
      </div>
      <div class="input-group col-6">
        <q-select
          bg-color="white"
          filled
          v-model="user['card name']"
          :options="options['card options']"
          label="Your Identity Card *"
          hint="Please Select Your Identity Card"
          lazy-rules
          :rules="[(val) => Validator.cardType(val)]"
          clearable
          autocomplete="off"
          popup-content-class="bg-brand text-gainsboro my-br-5"
          counter
        >
          <template v-slot:prepend>
            <q-icon name="card_membership" />
          </template>
        </q-select>
      </div>

      <div class="input-group col-6">
        <q-input
          bg-color="white"
          filled
          v-model="user['card number']"
          label="Your Identity Card Number *"
          hint="Please Select Your Identity Card"
          lazy-rules
          :rules="[(val) => Validator.cardNumber(val)]"
          clearable
          autocomplete="off"
          class=""
          counter
        >
          <template v-slot:prepend>
            <q-icon name="dns" />
          </template>
        </q-input>
      </div>

      <div class="input-group col-6">
        <q-select
          v-model="user['role']"
          :options="options['role options']"
          label="Enter Your Role"
          filled
          bg-color="white"
          popup-content-class="bg-brand text-gainsboro my-br-5"
          lazy-rules
          :rules="[(val) => Validator.role(val)]"
          clearable
          role="dialog"
        >
          <template v-slot:prepend>
            <q-icon name="account_box" />
          </template>
        </q-select>
      </div>

      <div>
        <q-btn
          label="Reset"
          type="reset"
          color="secondary"
          class="q-mr-sm"
          icon-right="autorenew"
        />
        <q-btn
          label="Login"
          type="submit"
          color=""
          class="bg-brand"
          icon-right="launch"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  Validator,
  accept,
  isPwd,
  isConPwd,
  user,
  options,
  registerUrl,
} from "../utilities/register.utils";

const isError = ref(false);
const isSuccess = ref(false);
const resMsg = ref(null);
const isMsg = ref(true);
const isBgRed = ref(false);
const isBgGreen = ref(false);

export default {
  name: "RegisterUser",
  setup() {
    const router = useRouter();

    return {
      Validator,
      accept,
      isPwd,
      isConPwd,
      user,
      options,
      registerUrl,
      isError,
      isSuccess,
      resMsg,
      isMsg,
      isBgRed,
      isBgGreen,

      async onSubmit() {
        // if (
        //   username.value == user.value.name &&
        //   password.value == user.value.password
        // ) {
        //   router.push("/dashboard");
        // }

        // console.log(user.value);

        // const form = document.querySelector(".form");
        const resp = await fetch(registerUrl, {
          method: "Post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user.value),
        });
        const res = await resp.json();
        console.log(res);

        if (res.error) {
          isBgRed.value = true;
          isBgGreen.value = false;
          isMsg.value = true;
          resMsg.value = ref(res.error.msg);
          return;
        }
        if (res.success) {
          isBgRed.value = false;
          isBgGreen.value = true;
          isMsg.value = true;
          resMsg.value = ref(res.success.msg);
          return;
        }
      },

      onReset() {
        for (const key in user.value) {
          user.value[key] = null;
        }

        accept.value = false;
      },
    };
  },
};
</script>
<style scoped>
/* .form-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center !important;
  padding: 20px auto;
}
.form {
  width: 100%;
  padding: auto;
  height: 100%;
  margin: 0 5px;
} */

.fade-enter-activ {
  opacity: 1;
  transition: all 0.3s ease-out;
}
.fade-leave-activ {
  opacity: 1;
  transition: all 0.8s;
}
.fade-enter-fro {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.8s;
}
.fade-leave-t {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.8s;
}

.inp_text {
  color: white;
  font-weight: bolder;
}
</style>
