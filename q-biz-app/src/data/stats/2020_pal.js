import { Regions, setDate, format, sorted } from "./utilities";

const history = ([...args]) => ({
  1992: [...args][0],
  1996: [...args][1],
  2000: [...args][2],
  2004: [...args][3],
  2008: [...args][4],
  2012: [...args][5],
  2016: [...args][6],
});

const parties = {
  npp: {
    name: "New Patriotic Party",
    id: "NPP",
    logo: require("../../assets/images/party/npp-logo.jpg"),
  },
  ndc: {
    name: "National Democratic Congress",
    id: "NDC",
    logo: require("../../assets/images/party/NDC flag.png"),
  },
  gum: {
    name: "Ghana Union Movement",
    id: "GUM",
    logo: require("../../assets/images/party/gum.jpg"),
  },
  cpp: {
    name: "Convention People's Party",
    id: "CPP",
    logo: require("../../assets/images/party/CPP_logo.jpg"),
  },
  pnc: {
    name: "People's National Convention",
    id: "PNC",
    logo: require("../../assets/images/party/Pnc-logo.jpg"),
  },
  ind: {
    name: "Independent",
    id: "IND",
    logo: "",
  },
  lpg: {
    name: "Liberal Party of Ghana",
    id: "LPG",
    logo: require("../../assets/images/party/LPG party.png"),
  },
  apc: {
    name: "All People's Congress",
    id: "APC",
    logo: require("../../assets/images/party/All_People's_Congress_Ghana_Logo.jpg"),
  },
  ppp: {
    name: "Progressive People's Party",
    id: "PPP",
    logo: require("../../assets/images/party/ProgressivePeople'sParty_logo.jpg"),
  },
  ndp: {
    name: "National Democratic Party",
    id: "NDP",
    logo: require("../../assets/images/party/NDP.jpg"),
  },
  gfp: {
    name: "Ghana Freedom Party",
    id: "GFP",
    logo: require("../../assets/images/party/great freedom party.jpg"),
  },
  gcpp: {
    name: "Great Consolidated Popular Party",
    id: "GCPP",
    logo: require("../../assets/images/party/gcpp.jpg"),
  },
};

const p_seats = {
  ndc: [2, 4, 6, 8, 13, 8, 20, 9, 2, 8, 4, 14, 8, 17, 8, 6],
  npp: [4, 42, 6, 3, 10, 25, 14, 9, 4, 0, 3, 1, 3, 1, 9, 3],
  ind: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  nil: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

export { parties, history };
