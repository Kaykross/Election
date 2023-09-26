import { defineStore } from "pinia";

const candidates = [
  {
    name: "John Dramani Mahama",
    profile: require("../assets/images/profile/John-Mahama.jpg"),
    party: {
      name: "National Democratic Congress",
      id: "NDC",
      logo: require("../assets/images/party/NDC flag.png"),
    },
    votes: 6213182,
    percentage: "47.36%",
    arrow: { name: "arrow_downward", color: "red" },
  },
  {
    name: "Nana Addo Danquah Akuffo-Addo",
    profile: require("../assets/images/profile/Akuffo Addo.jpg"),
    party: {
      name: "New Patriotic Party",
      id: "NPP",
      logo: require("../assets/images/party/npp-logo.jpg"),
    },
    votes: 6730587,
    percentage: "51.30%",
    arrow: { name: "arrow_upward", color: "green" },
  },
  {
    name: "Christian Kwabena Andrews",
    profile: require("../assets/images/profile/Christian Kwabena Andrews.jpg"),
    party: {
      name: "Ghana Union Movement",
      id: "GUM",
      logo: require("../assets/images/party/gum.jpg"),
    },
    votes: 105548,
    percentage: "0.8%",
    arrow: { name: "arrow_downward", color: "red" },
  },
  {
    name: "Ivor Greenstreet",
    profile: require("../assets/images/profile/Ivor Greenstreet.jpeg"),
    party: {
      name: "Convention People's Party",
      id: "CPP",
      logo: require("../assets/images/party/CPP_logo.jpg"),
    },
    votes: 12200,
    percentage: "0.09%",
    arrow: { name: "show_chart", color: "red" },
  },
  {
    name: "David Apasera",
    profile: require("../assets/images/profile/david-asibi-ayindenaba-apasera.jpg"),
    party: {
      name: "People's National Convention",
      id: "PNC",
      logo: require("../assets/images/party/Pnc-logo.jpg"),
    },
    votes: 10882,
    percentage: "0.08%",
    arrow: { name: "show_chart", color: "red" },
  },
  {
    name: "Asiedu Walker",
    profile: require("../assets/images/profile/Asiedu-Walker.jpg"),
    party: {
      name: "Independent",
      id: "IND",
      logo: "",
    },
    votes: 9704,
    percentage: "0.07%",
    arrow: { name: "show_chart", color: "red" },
  },
  {
    name: "Kofi Akpaloo",
    profile: require("../assets/images/profile/percival-kofi-akpaloo.jpg"),
    party: {
      name: "Liberal Party of Ghana",
      id: "LPG",
      logo: require("../assets/images/party/LPG party.png"),
    },
    votes: 7683,
    percentage: "0.06%",
    arrow: { name: "show_chart", color: "red" },
  },
  {
    name: "Hassan Ayariga",
    profile: require("../assets/images/profile/Hassan_Ayariga.jpg"),
    party: {
      name: "All People's Congress",
      id: "APC",
      logo: require("../assets/images/party/All_People's_Congress_Ghana_Logo.jpg"),
    },
    votes: 7138,
    percentage: "0.05%",
    arrow: { name: "show_chart", color: "red" },
  },
  {
    name: "Brigitte Dzogbenuku",
    profile: require("../assets/images/profile/bridget D.jpg"),
    party: {
      name: "Progressive People's Party",
      id: "PPP",
      logo: require("../assets/images/party/ProgressivePeople'sParty_logo.jpg"),
    },
    votes: 6849,
    percentage: "0.05%",
    arrow: { name: "show_chart", color: "red" },
  },
  {
    name: "Nana Konadu Agyeman Rawlings",
    profile: require("../assets/images/profile/konadu.jpg"),
    party: {
      name: "National Democratic Party",
      id: "NDP",
      logo: require("../assets/images/party/NDP.jpg"),
    },
    votes: 6549,
    percentage: "0.05%",
    arrow: { name: "show_chart", color: "red" },
  },
  {
    name: "Akua Donkor",
    profile: require("../assets/images/profile/Akua Donkor.jpg"),
    party: {
      name: "Ghana Freedom Party",
      id: "GFP",
      logo: require("../assets/images/party/great freedom party.jpg"),
    },
    votes: 5574,
    percentage: "0.04%",
    arrow: { name: "show_chart", color: "red" },
  },
  {
    name: "Henry Herbert Lartey",
    profile: require("../assets/images/profile/Henry-Herbert-Lartey.jpg"),
    party: {
      name: "Great Consolidated Popular Party",
      id: "GCPP",
      logo: require("../assets/images/party/gcpp.jpg"),
    },
    votes: 3564,
    percentage: "0.03%",
    arrow: { name: "show_chart", color: "red" },
  },
];

export const useCounterStore = defineStore("candidates", {
  state: () => ({
    candidates,
  }),
  getters: {
    sortedVotes: () =>
      this.candidates.map((i) => i.votes).sort((a, b) => b - a),
    records: () =>
      this.candidates.map((i) => {
        return {
          name: i.name,
          profile: i.profile,
          party: i.party,
          votes: i.votes,
          percentage: i.votes,
        };
      }),
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
