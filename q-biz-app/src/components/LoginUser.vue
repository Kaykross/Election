<template>
  <div class="q-pa-md form-box">
    <Transition name="fade">
      <q-card
        v-if="isMsg"
        :class="{
          msgBox: true,
          'bg-red': isBgRed,
          'text-white': true,
          'q-pa-none': true,
          'q-my-sm': true,
        }"
      >
        <q-list bordered>
          <q-item clickable v-ripple>
            <q-item-section>
              <div v-text="resMsg" style="text-transform: capitalize"></div>
            </q-item-section>
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
      class="q-gutter-md form row"
      text-white
    >
      <div class="input-group col-12">
        <q-input
          bg-color="white"
          filled
          v-model="username"
          label="Your Username *"
          hint="Please Enter Your Username"
          lazy-rules
          :rules="[(val) => Validator.username(val)]"
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

      <div class="input-group col-12">
        <q-input
          v-model="password"
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
              v-if="password"
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
      <div class="input-group col-12">
        <q-select
          v-model="role.role"
          :options="role.options"
          label="Enter Your Role"
          hint="Choose Your Role"
          filled
          bg-color="white"
          popup-content-class="bg-brand text-gainsboro my-br-5"
          lazy-rules
          :rules="[(val) => Validator.role(val)]"
          clearable
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
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import {
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
} from "../utilities/login.utils";

export default {
  name: "LoginUser",
  setup() {
    const $q = useQuasar();
    const router = useRouter();

    return {
      username,
      password,
      isPwd,
      accept,
      role,
      Validator,
      loginUrl,
      resMsg,
      isMsg,
      isBgRed,

      async onSubmit() {
        // if (
        //   username.value == user.value.name &&
        //   password.value == user.value.password
        // ) {
        //   router.push("/dashboard");
        // }
        const user = {
          username: username.value,
          password: password.value,
          role: role.value.role,
        };

        const resp = await fetch(loginUrl, {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },

          body: JSON.stringify(user),
        });
        const res = await resp.json();
        console.log(res);

        if (res.error) {
          isBgRed.value = true;
          isMsg.value = true;
          const msg = res.error.msg;
          resMsg.value = ref(msg.replaceAll(/[\\"']/gm, "")).value;

          // ...["input-negative", "text-negative ]

          return;
        }
      },

      onReset() {
        username.value = null;
        password.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
<style scoped>
.form-box {
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
  /* padding: auto; */
  /* height: 100%; */
  /* margin: 0 5px; */
}

.inp_text {
  color: white;
  font-weight: bolder;
}
</style>
