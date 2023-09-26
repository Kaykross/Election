import { Regions, setDate, format, sorted } from "./utilities";
import { TableData_2020 } from "./dashboard";
const ndc = [
  116485, 653149, 203329, 213694, 538829, 470999, 1326489, 476550, 112306,
  181021, 144244, 335502, 238972, 606508, 398549, 196556,
];
const npp = [
  145584, 1795824, 292604, 153341, 613804, 752061, 1253179, 409963, 122742,
  103865, 80605, 170340, 121230, 100481, 439724, 175240,
];
const gum = [
  1493, 12564, 4514, 2923, 15160, 9819, 16112, 3184, 952, 2459, 1409, 3100,
  2240, 4679, 20638, 4302,
];
const cpp = [
  194, 1356, 338, 380, 1117, 854, 1763, 1510, 292, 265, 503, 879, 640, 705,
  1143, 261,
];
const gfp = [
  49, 593, 165, 143, 478, 379, 767, 394, 324, 200, 212, 832, 360, 180, 379, 119,
];
const gcpp = [
  51, 304, 132, 153, 361, 211, 231, 438, 198, 97, 185, 359, 354, 158, 223, 109,
];
const apc = [
  150, 482, 255, 409, 468, 466, 628, 900, 376, 195, 387, 919, 487, 406, 400,
  210,
];
const lpg = [
  113, 712, 216, 304, 586, 510, 522, 1281, 505, 228, 322, 868, 742, 237, 367,
  170,
];
const pnc = [
  82, 444, 209, 231, 323, 278, 401, 1209, 579, 371, 344, 2890, 2794, 220, 305,
  202,
];
const ppp = [
  52, 435, 214, 220, 1042, 363, 1220, 498, 205, 240, 160, 685, 328, 314, 787,
  86,
];
const ndp = [
  135, 476, 235, 210, 467, 358, 685, 545, 322, 263, 279, 1017, 406, 617, 417,
  117,
];
const ind = [
  103, 952, 374, 400, 804, 642, 511, 1259, 322, 282, 435, 1321, 1094, 442, 508,
  255,
];

const Pres_Reg_data = {
  ndc,
  npp,
  gum,
  cpp,
  pnc,
  ind,
  lpg,
  apc,
  ppp,
  ndp,
  gfp,
  gcpp,
};

const p_seats = {
  ndc: [2, 4, 6, 8, 13, 8, 20, 9, 2, 8, 4, 14, 8, 17, 8, 6],
  npp: [4, 42, 6, 3, 10, 25, 14, 9, 4, 0, 3, 1, 3, 1, 9, 3],
  ind: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  nil: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

const candidateDetails = [
  {
    name: "John Dramani Mahama",
    profile: require("../../assets/images/profile/John-Mahama.jpg"),
    "filing Date": setDate("7 October 2020"),
    "running mate": "Jane Naana Opoku-Agyemang",
    "running mate profile": require("../../assets/images/running mates/Jane_Naana_Opoku-Agyemang.jpg"),
    party: {
      name: "National Democratic Congress",
      id: "NDC",
      logo: require("../../assets/images/party/NDC flag.png"),
      seats: 137,
      gains: 31,
      "parliamentary seats": new Regions(...p_seats.ndc),
    },
    regions: new Regions(...ndc),
    votes: 6213182,
  },
  {
    name: "Nana Addo Dankwa Akuffo-Addo",
    profile: require("../../assets/images/profile/Akuffo Addo.jpg"),
    "filing Date": setDate("7 October 2020"),
    "running mate": "Mahamudu Bawumia",
    "running mate profile": require("../../assets/images/running mates/Dr_Bawumia.jpg"),
    party: {
      name: "New Patriotic Party",
      id: "NPP",
      logo: require("../../assets/images/party/npp-logo.jpg"),
      seats: 137,
      gains: -32,
      "parliamentary seats": new Regions(...p_seats.npp),
    },
    regions: new Regions(...npp),
    votes: 6730587,
  },
  {
    name: "Christian Kwabena Andrews",
    profile: require("../../assets/images/profile/Christian Kwabena Andrews.jpg"),
    "filing Date": setDate("7 October 2020"),
    "running mate": "Abu Grant Lukeman",
    "running mate profile": require("../../assets/images/running mates/osofo-kiriabosom-alhaji-abu-lukeman (1).jpg"),
    party: {
      name: "Ghana Union Movement",
      id: "GUM",
      logo: require("../../assets/images/party/gum.jpg"),
      seats: 0,
      gains: 0,
      "parliamentary seats": new Regions(...p_seats.nil),
    },
    regions: new Regions(...gum),
    votes: 105548,
  },
  {
    name: "Ivor Kobina Greenstreet",
    profile: require("../../assets/images/profile/Ivor Greenstreet.jpeg"),
    "filing Date": setDate("9 October 2020"),
    "running mate": "Emmanuel Yaovi Bobobe",
    "running mate profile": require("../../assets/images/running mates/Emmanuel Yaovi Bobobe.jpg"),
    party: {
      name: "Convention People's Party",
      id: "CPP",
      logo: require("../../assets/images/party/CPP_logo.jpg"),
      seats: 0,
      gains: 0,
      "parliamentary seats": new Regions(...p_seats.nil),
    },
    regions: new Regions(...cpp),
    votes: 12200,
  },
  {
    name: "David Asibi Ayindenaba Apasera",
    profile: require("../../assets/images/profile/david-asibi-ayindenaba-apasera.jpg"),
    "filing Date": setDate("9 October 2020"),
    "running mate": "Divine Ayivor",
    "running mate profile": require("../../assets/images/running mates/divine ayivor.jpg"),
    party: {
      name: "People's National Convention",
      id: "PNC",
      logo: require("../../assets/images/party/Pnc-logo.jpg"),
      seats: 0,
      gains: 0,
      "parliamentary seats": new Regions(...p_seats.nil),
    },
    regions: new Regions(...pnc),
    votes: 10882,
  },
  {
    name: "Alfred Kwame Asiedu Walker",
    profile: require("../../assets/images/profile/Asiedu-Walker.jpg"),
    "filing Date": setDate("7 October 2020"),
    "running mate": "Jacob Osei Yeboah",
    "running mate profile": require("../../assets/images/running mates/Jacob Osei Yeboah.jpg"),
    party: {
      name: "Independent",
      id: "IND",
      logo: "",
      seats: 1,
      gains: 1,
      "parliamentary seats": new Regions(...p_seats.ind),
    },
    regions: new Regions(...ind),
    votes: 9704,
  },
  {
    name: "Percival Kofi Akpaloo",
    profile: require("../../assets/images/profile/percival-kofi-akpaloo.jpg"),
    "filing Date": setDate("9 October 2020"),
    "running mate": "Margaret Obrine Sarfo",
    "running mate profile": require("../../assets/images/running mates/Margaret Obrine Sarfo.jpg"),
    party: {
      name: "Liberal Party of Ghana",
      id: "LPG",
      logo: require("../../assets/images/party/LPG party.png"),
      seats: 0,
      gains: 0,
      "parliamentary seats": new Regions(...p_seats.nil),
    },
    regions: new Regions(...lpg),
    votes: 7683,
  },
  {
    name: "Hassan Ayariga",
    profile: require("../../assets/images/profile/Hassan_Ayariga.jpg"),
    "filing Date": setDate("8 October 2020"),
    "running mate": "Frank Yaw Kuadey",
    "running mate profile": "",
    party: {
      name: "All People's Congress",
      id: "APC",
      logo: require("../../assets/images/party/All_People's_Congress_Ghana_Logo.jpg"),
      seats: 0,
      gains: 0,
      "parliamentary seats": new Regions(...p_seats.nil),
    },
    regions: new Regions(...apc),
    votes: 7138,
  },
  {
    name: "Brigitte Akosua Dzogbenuku",
    profile: require("../../assets/images/profile/bridget D.jpg"),
    "filing Date": setDate("8 October 2020"),
    "running mate": "Kofi Asamoah-Siaw",
    "running mate profile": require("../../assets/images/running mates/Kofi Asamoah-Siaw.jpg"),
    party: {
      name: "Progressive People's Party",
      id: "PPP",
      logo: require("../../assets/images/party/ProgressivePeople'sParty_logo.jpg"),
      seats: 0,
      gains: 0,
      "parliamentary seats": new Regions(...p_seats.nil),
    },
    regions: new Regions(...ppp),
    votes: 6849,
  },
  {
    name: "Nana Konadu Agyeman Rawlings",
    profile: require("../../assets/images/profile/konadu.jpg"),
    "filing Date": setDate("9 October 2020"),
    "running mate": "Peter Tennyson Asamoah",
    "running mate profile": require("../../assets/images/running mates/Peter Tennyson Asamoah.jpg"),
    party: {
      name: "National Democratic Party",
      id: "NDP",
      logo: require("../../assets/images/party/NDP.jpg"),
      seats: 0,
      gains: 0,
      "parliamentary seats": new Regions(...p_seats.nil),
    },
    regions: new Regions(...ndp),
    votes: 6549,
  },
  {
    name: "Akua Donkor",
    profile: require("../../assets/images/profile/Akua Donkor.jpg"),
    "filing Date": setDate("8 October 2020"),
    "running mate": "Ernest Adakabre Frimpong Manso",
    "running mate profile": require("../../assets/images/running mates/Akua donkor running mate.jpg"),
    party: {
      name: "Ghana Freedom Party",
      id: "GFP",
      logo: require("../../assets/images/party/great freedom party.jpg"),
      seats: 0,
      gains: 0,
      "parliamentary seats": new Regions(...p_seats.nil),
    },
    regions: new Regions(...gfp),
    votes: 5574,
  },
  {
    name: "Henry Herbert Lartey",
    profile: require("../../assets/images/profile/Henry-Herbert-Lartey.jpg"),
    "filing Date": setDate("9 October 2020"),
    "running mate": "Andy Bampoe-Sekyi",
    "running mate profile": "",
    party: {
      name: "Great Consolidated Popular Party",
      id: "GCPP",
      logo: require("../../assets/images/party/gcpp.jpg"),
      seats: 0,
      gains: 0,
      "parliamentary seats": new Regions(...p_seats.nil),
    },
    regions: new Regions(...gcpp),
    votes: 3564,
  },
];
const validVotes = candidateDetails
  .map((i) => i.votes)
  .reduce((prev, cur) => prev + cur);
// console.log(validVotes);

const invalidVotes = 313397;
const totalVotes = validVotes + invalidVotes;
const registeredVoters = 17027941;
const percent = (val) => (val / totalVotes) * 100;

//exported items
const stats = [
  { label: "regions", value: 16, icon: "book", col: 3 },
  { label: "districts", value: 261, icon: "book", col: 3 },
  { label: "constituencies", value: 275, icon: "book", col: 3 },
  { label: "political parties", value: 27, icon: "book", col: 3 },
  { label: "presidential candidates", value: 12, icon: "book", col: 3 },
  { label: "polling stations", value: 33367, icon: "book", col: 3 },
  { label: "voting centers", value: 38622, icon: "book", col: 3 },
  { label: "valid votes", value: validVotes, percent: percent(validVotes) },
  {
    label: "invalid votes",
    value: invalidVotes,
    icon: "book",
    percent: percent(invalidVotes),
  },
  {
    label: "total votes",
    value: totalVotes,
    percent: percent(totalVotes),
    icon: "book",
  },
  { label: "registered voters", value: registeredVoters, icon: "book" },
  {
    label: "voter turnout",
    value: `${format((totalVotes / registeredVoters) * 100)}%`,
    icon: "book",
  },
];

const candidates = candidateDetails.map((i) => ({
  name: i.name,
  profile: i.profile,
  "running mate": i["running mate"],
  "running mate profile": i["running mate profile"],
  party: i.party,
  votes: i.votes,
  regions: i.regions,
  percentage: format(percent(i.votes)) + "%",
}));

const figures = (region, partyId) =>
  candidates.filter((i) => (i.party.id == partyId ? i : null))[0].regions[
    region
  ];
const RegionalData = Object.keys(candidates[0].regions).map((i) => ({
  region: i,
  NPP: figures(i, "NPP"),
  NDC: figures(i, "NDC"),
  GUM: figures(i, "GUM"),
  CPP: figures(i, "CPP"),
  PNC: figures(i, "PNC"),
  IND: figures(i, "IND"),
  LPG: figures(i, "LPG"),
  APC: figures(i, "APC"),
  PPP: figures(i, "PPP"),
  NDP: figures(i, "NDP"),
  GFP: figures(i, "GFP"),
  GCPP: figures(i, "GCPP"),
}));

// console.log(RegionalData);
const regPercent = (val, total) =>
  (val /
    (total.NPP +
      total.NDC +
      total.GUM +
      total.CPP +
      total.PNC +
      total.IND +
      total.LPG +
      total.APC +
      total.PPP +
      total.NDP +
      total.GFP +
      total.GCPP)) *
  100;

const RegionalPresidentialResults = RegionalData.map((i) => ({
  region: i.region,
  NPP: { votes: i.NPP, percent: format(regPercent(i.NPP, i)) },
  NDC: { votes: i.NDC, percent: format(regPercent(i.NDC, i)) },
  GUM: { votes: i.GUM, percent: format(regPercent(i.GUM, i)) },
  CPP: { votes: i.CPP, percent: format(regPercent(i.CPP, i)) },
  PNC: { votes: i.PNC, percent: format(regPercent(i.PNC, i)) },
  IND: { votes: i.IND, percent: format(regPercent(i.IND, i)) },
  LPG: { votes: i.LPG, percent: format(regPercent(i.LPG, i)) },
  APC: { votes: i.APC, percent: format(regPercent(i.APC, i)) },
  PPP: { votes: i.PPP, percent: format(regPercent(i.PPP, i)) },
  NDP: { votes: i.NDP, percent: format(regPercent(i.NDP, i)) },
  GFP: { votes: i.GFP, percent: format(regPercent(i.GFP, i)) },
  GCPP: { votes: i.GCPP, percent: format(regPercent(i.GCPP, i)) },
}));

const RegonalResults = {
  columns: [
    {
      name: "regions",
      required: true,
      label: "Regions",
      align: "left",
      icon: null,
      field: (row) => row.region,
      format: (val) => `${val}`,
      sortable: true,
    },
    ...candidates.map((i) => ({
      name: i.party.name,
      required: true,
      label: i.party.id,
      icon: i.party.logo,
      align: "left",
      field: (row) => row[i.party.id],
      format: (val) => `${val}`,
      sortable: true,
    })),
  ],

  rows: [
    // {
    //   region: "Ahafo Region",
    //   NPP: figures("Ahafo Region", "NPP"),
    //   NDC: figures("Ahafo Region", "NDC"),
    //   GUM: figures("Ahafo Region", "GUM"),
    //   CPP: figures("Ahafo Region", "CPP"),
    //   PNC: figures("Ahafo Region", "PNC"),
    //   IND: figures("Ahafo Region", "IND"),
    //   LPG: figures("Ahafo Region", "LPG"),
    //   APC: figures("Ahafo Region", "APC"),
    //   PPP: figures("Ahafo Region", "PPP"),
    //   NDP: figures("Ahafo Region", "NDP"),
    //   GFP: figures("Ahafo Region", "GFP"),
    //   GCPP: figures("Ahafo Region", "GCPP"),
    // },
    ...RegionalData,
  ],
};

const rank = (num) =>
  num == 1
    ? "1st"
    : num == 2
    ? "2nd"
    : num == 3
    ? "3rd"
    : num == 4
    ? "4th"
    : num == 5
    ? "5th"
    : num == 6
    ? "6th"
    : num == 7
    ? "7th"
    : num == 8
    ? "8th"
    : num == 9
    ? "9th"
    : num == 10
    ? "10th"
    : num == 11
    ? "11th"
    : num == 12
    ? "12th"
    : "winget upgrade --all win ";

const maxVote = Math.max(...candidates.map((i) => i.votes));
const sortedVotes = candidates.sort((a, b) => b.votes - a.votes);
const table = new TableData_2020(candidates);

//map dialog table data
const R_reg = RegionalPresidentialResults;
const fn_map_object = (can_no, reg_no) => ({
  candidate: candidates[can_no],
  party: candidates[can_no].party,
  votes: R_reg[reg_no][candidates[can_no].party.id].votes,
  percent: R_reg[reg_no][candidates[can_no].party.id].percent,
});

// const regions = Object.keys(candidates[0].regions).map((x, y) => candidates.map((i, n) => fn_map_object(n, y)));
// const Max_Regions = Results_Regions
//   .map((m, n) => m.map((i, r) => i.votes))
//   .map((i) => Math.max(...i));
// const Max_Candidates = Results_Regions
//   .map((m, n) => m.map((i, r) => i))
//   .map((x, l) => x.filter((i, n) => (i.votes == Max_Regions[l] ? i : null)));

class ResultsByRegions {
  static regions() {
    return Object.keys(candidates[0].regions);
  }
  static Regions() {
    return Object.keys(candidates[0].regions).map((x, y) =>
      candidates.map((i, n) => fn_map_object(n, y))
    );
  }
  static R_Max_Votes() {
    return this.Regions()
      .map((m, n) => m.map((i, r) => i.votes))
      .map((i) => Math.max(...i));
  }

  static Winner() {
    return this.Regions()
      .map((m, n) => m.map((i, r) => i))
      .map((x, l) =>
        x.filter((i, n) => (i.votes == this.R_Max_Votes()[l] ? i : null))
      );
  }

  static Colors() {
    return [...this.Winner()].map((i, n) =>
      i.map((l) =>
        l.party.id == "NPP"
          ? { regions: this.regions()[n], color: "navy", party: l.party.id }
          : l.party.id == "NDC"
          ? { regions: this.regions()[n], color: "green", party: l.party.id }
          : { regions: this.regions()[n], color: "grey", party: l.party.id }
      )
    );
  }
}

const _2020 = {
  candidates,
  stats,
  rank,
  maxVote,
  format,
  sortedVotes,
  table,
  RegonalResults,
  RegionalPresidentialResults,
  fn_map_object,
  ResultsByRegions,
  Pres_Reg_data,
};
export { _2020 };
