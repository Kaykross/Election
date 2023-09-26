<template>
  <main>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="row q-col-gutter-md q-pa-md"
    >
      <q-dialog
        persistent
        style="min-width: 80vw; min-height: 80vh"
        v-model="hasNoRegions"
      >
        <q-card class="bg-gainsboro">
          <q-bar dark class="bg-brand text-white">
            <q-btn dense flat round icon="lens" size="8.5px" color="red" />
            <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
            <q-btn dense flat round icon="lens" size="8.5px" color="green" />
            <div class="col text-center text-weight-bold">
              {{ modal_title }}
              Error ~Select Region
            </div>
            <q-card-actions align="right">
              <q-btn
                icon="close"
                size="9.5px"
                color="red"
                padding="3px"
                align="center"
                v-close-popup
              />
            </q-card-actions>
          </q-bar>

          <q-card-section class="items-center">
            <q-avatar
              icon="report"
              size="20px"
              color="red"
              text-color="white"
            />
            <span class="q-ml-sm text-red text-weight-bold"
              >{{ modal_heading }} Region must be selected
            </span>
            <div class="q-ml-sm">
              {{ modal_body }}
              Please you are required to first select a valid region before
              proceeding to select a district
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>

      <div class="input-group group-1 col-6">
        <label for="region">Region:</label>
        <q-select
          id="region"
          ref="regionId"
          v-model="region"
          :options="Regions"
          label="Choose Region"
          hint="Please Select Your Region"
          counter
          input-debounce="0"
          filled
          use-input
          @filter="filterRegions"
          :error="hasNoRegions"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Please You must Select a Region',
          ]"
        >
          <template v-slot:error>
            <div>Region is not allowed to be empty</div>
          </template>
        </q-select>
      </div>

      <div class="input-group col-6">
        <label for="district">District:</label>
        <q-select
          ref="select_district"
          id="district"
          v-model="district"
          :options="Districts"
          label="Select District"
          filled
          use-input
          @filter="filterDistricts"
          @input-value="checkRegion"
          :error="hasNoDistricts"
          lazy-rules
          hint="Please Select Your District"
          counter
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Districts is Not allowed to be empty',
          ]"
        >
          <template v-slot:error>
            <div>You must select a region</div>
          </template>
        </q-select>
      </div>

      <div class="input-group col-6">
        <label for="constituency">Constituency Name:</label>
        <q-select
          id="constituency"
          v-model="constituency"
          :options="Constituencies"
          label="Select Constituency"
          hint="Please Select Your Constituency Name"
          filled
          use-input
          @filter="filterConstituency"
          :error="hasNoConstituency"
          :rules="[
            (val) =>
              (val && val.length > 0) ||
              'Constituency Name is Not allowed to be empty',
          ]"
        />
      </div>
      <div class="input-group col-6">
        <label for="constituency-code">Constituency Code:</label>
        <q-select
          id="constituency-code"
          v-model="constituencyCode"
          :options="ConstituencyCodes"
          label="Constituency Code"
          hint="Please Select Your Constituency Code"
          filled
          use-input
          @filter="filterConstituencyCodes"
          :error="hasNoConstituencyCode"
          :rules="[
            (val) =>
              (val && val.length > 0) ||
              'Constituency Code is Not allowed to be empty',
          ]"
        />
      </div>
      <div class="input-group col-6">
        <label for="polling-station">Polling Station</label>
        <q-input
          id="polling-station"
          v-model="pollingStation"
          type="text"
          label="Enter your polling station"
          filled
          clearable
          :rules="[
            (val) =>
              (val && val.length > 0) ||
              'Constituency is Not allowed to be empty',
            (val) =>
              (val && val.length > 3) ||
              'Constituency is must be more than three',
          ]"
        />
      </div>
      <div class="input-group col-6">
        <label>Result in numbers:</label>
        <q-input
          v-model="resultInNumbers"
          type="number"
          label="Enter Results in numbers"
          filled
        />
      </div>
      <div class="input-group col-6">
        <label>Result in Words:</label>
        <q-input
          v-model="resultInWords"
          type="text"
          label="Enter Result in words"
          filled
        />
      </div>

      <div class="input-group col-6">
        <label for="file">Upload Image File:</label>
        <q-file
          filled
          v-model="fileImageResult"
          label="Upload image file"
          hint="only images are permitted"
          counter
          use-chips
        >
          <!-- <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template> -->
          <template v-slot:append>
            <q-icon name="photo_library" />
          </template>
        </q-file>
      </div>
      <div class="input-group col-6">
        <label for="file">Upload PDF File:</label>
        <q-file
          filled
          v-model="filePdfResult"
          label="Upload pdf file"
          hint="only pdf is permitted"
          counter
          use-chips
        >
          <template v-slot:append>
            <q-icon name="picture_as_pdf" />
          </template>
          <!-- <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template> -->
        </q-file>
      </div>
      <div class="input-group col-6">
        <q-input v-model="username" type="text" label="Name of Uploader" filled>
          <template v-slot:prepend>
            <q-icon name="account_circle" />
          </template>
        </q-input>
      </div>
      <div class="input-group col-5">
        <q-select
          v-model="userRole"
          :options="[
            'Polling agent',
            'constituency Executive',
            'Regonal Executive',
            'National Executive',
          ]"
          label="Select Your Role"
          filled
        />
      </div>
      <div class="input-group col-7">
        <q-file
          filled
          v-model="signature"
          label="Upload your Signature"
          hint="only image of is permitted"
          counter
          use-chips
        >
          <template v-slot:append>
            <q-icon name="pan_tool" />
          </template>
        </q-file>
      </div>

      <div class="col-12">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import { regions } from "../data/regions";

const region = ref(null);
const district = ref(null);
const constituency = ref(null);
const constituencyCode = ref(null);
const pollingStation = ref(null);
const fileImageResult = ref(null);
const filePdfResult = ref(null);
const username = ref(null);
const userRole = ref(null);
const signature = ref(null);
const resultInNumbers = ref(0);
const resultInWords = ref("");

const regionOptions = regions.map((region) => region.region);
const Regions = ref(regionOptions);
const Districts = ref(null);
const Constituencies = ref(null);
const ConstituencyCodes = ref(null);

const hasNoRegions = ref(false);
const hasNoDistricts = ref(false);
const hasNoConstituency = ref(false);
const hasNoConstituencyCode = ref(false);
const modal_title = ref(null);
const modal_heading = ref(null);
const modal_body = ref(null);
const modal_state = ref(null);

export default {
  setup() {
    const regionId = ref(false);
    const $q = useQuasar();
    onMounted(() => {});
    return {
      region,
      district,
      constituency,
      constituencyCode,
      pollingStation,
      fileImageResult,
      filePdfResult,
      resultInNumbers,
      resultInWords,
      username,
      userRole,
      signature,

      Regions,
      Districts,
      Constituencies,
      ConstituencyCodes,
      hasNoRegions,
      hasNoDistricts,
      hasNoConstituency,
      hasNoConstituencyCode,
      regionId,
      modal_title,
      modal_heading,
      modal_body,
      modal_state,

      onSubmit() {
        console.log(region.value);
      },
      onReset() {},

      filterRegions(val, update, abort) {
        update(() => {
          Regions.value = regionOptions.filter((region) =>
            region.toLowerCase().includes(val.toLowerCase())
          );
        });
      },

      checkRegion(val) {
        if (region.value == null || region.value == "") {
          console.log("invalid region");
        }

        console.log(val);
      },

      filterDistricts(val, update, abort) {
        const loadDistrict = () =>
          regions.filter((reg) => reg.region == region.value);
        if (!loadDistrict().length) {
          hasNoRegions.value = true;
          const regionInput = document.querySelector(
            ".group-1 .q-field__input"
          );
          regionInput.focus();
          return;
        }

        update(() => {
          Districts.value = loadDistrict()[0]
            .con.map((item) => item.district)
            .filter((district) =>
              district.toLowerCase().includes(val.toLowerCase())
            );
        });
      },

      filterConstituency(val, update, abort) {
        const loadDistrict = () =>
          regions.filter((reg) => reg.region == region.value);
        if (!loadDistrict().length) {
          //   hasNoOptions.value = false;
          //   hasNoRegions.value = true;

          const regionInput = document.querySelector(
            ".group-1 .q-field__input"
          );
          regionInput.focus();
          return;
        }

        update(() => {
          Constituencies.value = loadDistrict()[0]
            .con.map((item) => item.constituency)
            .filter((constituency) =>
              constituency.toLowerCase().includes(val.toLowerCase())
            );
        });
      },

      filterConstituencyCodes(val, update, abort) {
        const loadDistrict = () =>
          regions.filter((reg) => reg.region == region.value);
        if (!loadDistrict().length) {
          //   hasNoOptions.value = false;
          //   hasNoRegions.value = true;

          const regionInput = document.querySelector(
            ".group-1 .q-field__input"
          );
          regionInput.focus();
          return;
        }

        update(() => {
          ConstituencyCodes.value = loadDistrict()[0]
            .con.map((item) => item.code)
            .filter((code) => code.toLowerCase().includes(val.toLowerCase()));
        });
      },
    };
  },
};
</script>

<style></style>
