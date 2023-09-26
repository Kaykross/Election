<template>
  <main>
    <section>
      <div class="row bg-brand text-white q-pa-sm">
        <div class="col-6">Region: {{ UpperEast.region }}</div>
        <div class="col-6">Capital: {{ UpperEast.capital }}</div>
      </div>
    </section>
    <section class="q-pa-sm">
      <q-markup-table separator="cell" style="text-transform: uppercase; font-weight: bolder">
        <thead class="bg-grey-2 text-purple">
          <tr>
            <th class="text-left">Summary</th>
            <th class="text-left" v-for="statistics in constituencySummary.presidential" :key="statistics">
              {{ statistics.party }}
            </th>
            <th class="text-center">Total</th>
          </tr>
        </thead>
        <tbody class="bg-grey-4 text-grey-9">
          <tr>
            <td class="text-left text-purple">Presidential</td>
            <td class="text-center" v-for="statistics in constituencySummary.presidential" :key="statistics">
              {{ statistics.total.length }}
            </td>
            <td class="text-center">{{ prezTotal }}</td>
          </tr>
          <tr>
            <td class="text-left text-purple" style="font-weight: bolder">
              Parliamentary
            </td>
            <td class="text-center" v-for="statistics in constituencySummary.parliament" :key="statistics">
              {{ statistics.total.length }}
            </td>
            <td class="text-center">{{ parlTotal }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <section class="q-pa-sm q-ma-sm row bg-grey-4" style="border-left: 3px solid purple; border-right: 3px solid purple">
      <div class="col-5">
        <div>Total constituencies :</div>
        <div class="text-purple text-center" style="font-size: 4vh">
          {{ UpperEast.results.length }}
        </div>
      </div>
      <div class="col-7">
        <q-input v-model="selectedConstituency" type="text" label="Search Constituency" outlined />
      </div>
    </section>
    <section class="row q-col-gutter-sm q-pa-sm constituencies">
      <div v-for="(constituency, index) in constituencies()" :key="constituency.code" class="col-6 constituency"
        :id="constituency.constituency">
        <router-link :to="`/constituencies/upper-east/${constituency.constituency
          .toLowerCase()
          .replaceAll(' ', '-')}`">
          <q-card class="col-6 bg-grey-3" style="height: 100%">
            <q-card-section class="row">
              <div class="text-h6 text-purple col-12">
                <q-icon name="desktop_windows" /> constituency:
                {{ constituency.constituency }}
              </div>
              <q-separator inset horizontal dark />
              <div class="col-12">
                <div class="text-subtitle2 text-grey-8">
                  <q-icon name="code" /> EC Code: {{ constituency.code }}
                </div>
                <div class="text-subtitle2 text-grey-8">
                  <q-icon name="place" /> District:
                  {{ constituency.district }}
                </div>
                <div class="text-subtitle2 text-grey-8">
                  <q-icon name="assistant_photo" /> Capital:
                  {{ constituency.capital }}
                </div>
                <div>
                  <h6 class="text-purple font-weight-bold">Winners</h6>
                  <div class="text-subtitle2 text-grey-8 q-mb-sm" style="display: flex; justify-content: space-between">
                    <div style="width: 85px">Presidential:</div>
                    <q-badge :label="PresParlWinners[index].prezParty.id" :class="PresParlWinners[index].prezParty.id == 'NPP'
                      ? 'bg-blue-10'
                      : PresParlWinners[index].prezParty.id == 'NDC'
                        ? 'bg-green-10'
                        : 'black'
                      " text-color="white" style="font-weight: bolder" />
                    <q-img :src="PresParlWinners[index].prezParty.logo" spinner-size="42px"
                      style="width: 25px; height: 20px" />
                  </div>
                  <div class="text-subtitle2 text-grey-8" style="display: flex; justify-content: space-between">
                    <div style="width: 85px">Parliamentary:</div>
                    <q-badge :label="PresParlWinners[index].parlParty.id" :class="PresParlWinners[index].parlParty.id == 'NPP'
                      ? 'bg-blue-10'
                      : PresParlWinners[index].parlParty.id == 'NDC'
                        ? 'bg-green-10'
                        : 'bg-black'
                      " text-color="white" style="font-weight: bolder" />
                    <q-img :src="PresParlWinners[index].parlParty.logo" spinner-size="42px"
                      style="width: 25px; height: 20px" />
                  </div>
                  <div>
                    <div>
                      <q-badge v-if="PresParlWinners[index].prezParty.id !=
                        PresParlWinners[index].parlParty.id
                        " class="bg-brand q-pa-sm text-white">
                        {{
                          PresParlWinners[index].prezParty.id ==
                          PresParlWinners[index].parlParty.id
                          ? null
                          : "Swinged outcome"
                        }}
                      </q-badge>
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, onUpdated, ref } from "vue";
import { UpperEast } from "../../../data/constituency results/upperEast";
const _all = UpperEast.results;
const selectedConstituency = ref('');
const constituencies = () => _all.filter(i => i.constituency.toLowerCase().startsWith(selectedConstituency.value) ? i : selectedConstituency.value == '' ? _all : null);

const candidates = UpperEast.results.map((item) => {
  return Object.values(item.candidates);
});

// console.log(candidates);

const trimCandidates = (item, name) =>
  candidates
    .map((i) =>
      i.filter((v) =>
        v[item][name] == "" ? null : v[item][name] == null ? null : v[item]
      )
    )
    .map((i) => Math.max(...i.map((y) => y[item].votes)));

const maxes_Pres = trimCandidates("president", "name");
const maxes_Parl = trimCandidates("parliament", "candidate");

const filteredCandidates = (item, name) =>
  candidates
    .map((i) =>
      i.filter((v) =>
        v[item][name] == "" ? null : v[item][name] == null ? null : v[item]
      )
    )
    .map((i) => i.filter((v, index) => v[item].votes));

const filteredPres = filteredCandidates("president", "name");
const filteredParl = filteredCandidates("parliament", "candidate");

const maxItems = (arr, max, item) =>
  arr.map((m, n) => m.filter((i) => i[item].votes == max[n]));

const PrezMaxItems = maxItems(filteredPres, maxes_Pres, "president");
const parlMaxItems = maxItems(filteredParl, maxes_Parl, "parliament");
const _constituencies = UpperEast.results.map((i) => i.constituency);

const newConstituencyItem = ([...arr]) =>
  [...arr].map((x, i) => ({
    president: x[0].president,
    party: x[0].party,
    parliament: x[0].parliament,
    constituency: _constituencies[i],
  }));

const preznewItems = newConstituencyItem(PrezMaxItems);
const _parlNewItems = newConstituencyItem(parlMaxItems);
const PresParlWinners = preznewItems.map((x, y) => ({
  president: x.president,
  prezParty: x.party,
  parliament: _parlNewItems[y].parliament,
  parlParty: _parlNewItems[y].party,
  constituency: _constituencies[y],
}));

// console.log(PresParlWinners);

const constituencySummary = {
  presidential: [
    { party: "NPP", total: preznewItems.filter((i) => i.party.id == `NPP`) },
    { party: "NDC", total: preznewItems.filter((i) => i.party.id == `NDC`) },
    {
      party: "others",
      total: preznewItems.filter((i) =>
        i.party.id == `NDC` ? null : i.party.id == `NPP` ? null : i
      ),
    },
  ].sort((a, b) => b.total.length - a.total.length),
  parliament: [
    { party: "NPP", total: _parlNewItems.filter((i) => i.party.id == `NPP`) },
    { party: "NDC", total: _parlNewItems.filter((i) => i.party.id == `NDC`) },
    {
      party: "others",
      total: _parlNewItems.filter((i) =>
        i.party.id == `NDC` ? null : i.party.id == `NPP` ? null : i
      ),
    },
  ].sort((a, b) => b.total.length - a.total.length),
};

const prezTotal = constituencySummary.presidential
  .map((i) => i.total.length)
  .reduce((acc, cur) => acc + cur);

const parlTotal = constituencySummary.parliament
  .map((i) => i.total.length)
  .reduce((acc, cur) => acc + cur);


onMounted(() => {
  const newItems = preznewItems;
  const doms = ref(document.querySelectorAll(".constituency"));
  [...doms.value].forEach((el, i) =>
    el.id == newItems[i].constituency && newItems[i].party.id == "NDC"
      ? ((el.children[0].children[0].style.borderLeft = "2px solid green"),
        (el.children[0].children[0].style.borderRight = "2px solid green"))
      : el.id == newItems[i].constituency && newItems[i].party.id == "NPP"
        ? ((el.children[0].children[0].style.borderLeft = "2px solid blue"),
          (el.children[0].children[0].style.borderRight = "2px solid blue"))
        : null
  );
});

</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
