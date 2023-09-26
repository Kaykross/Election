import { Regions, setDate, Paliament, Parliament } from "./utilities";
const regionals = {
  ndc: [],
  npp: [],
  cpp: [],
  pnc: [],
  ppp: [],
  ndp: [],
  ind: [],
};

const p_seats = {
  ndc: [3, 9, 4, 6, 13, 18, 12, 6, 25, 10],
  npp: [44, 20, 19, 27, 21, 13, 3, 5, 1, 16],
  nil: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
};

const candidateDetails = [
  {
    name: "John Dramani Mahama",
    profile: require("../assets/images/profile/John-Mahama.jpg"),
    "filing Date": setDate("7 October 2020"),
    "running mate": "Kwesi Amissah-Arthur",
    "running mate profile": require("../assets/images/profile/John-Mahama.jpg"),
    party: {
      name: "National Democratic Congress",
      id: "NDC",
      logo: require("../assets/images/party/NDC flag.png"),
    },
    regions: new Regions(...ndc),
    votes: 4771188,
  },
  {
    name: "Nana Addo Dankwa Akuffo-Addo",
    profile: require("../assets/images/profile/Akuffo Addo.jpg"),
    "filing Date": setDate("7 October 2020"),
    "running mate": "Mahamudu Bawumia",
    "running mate profile": require("../assets/images/profile/John-Mahama.jpg"),
    party: {
      name: "New Patriotic Party",
      id: "NPP",
      logo: require("../assets/images/party/npp-logo.jpg"),
    },
    regions: new Regions(...npp),
    votes: 5755758,
  },
  {
    name: "Ivor Kobina Greenstreet",
    profile: require("../assets/images/profile/Ivor Greenstreet.jpeg"),
    "filing Date": setDate("9 October 2020"),
    "running mate": "Gabby Nsiah Nketiah",
    "running mate profile": require("../assets/images/profile/John-Mahama.jpg"),
    party: {
      name: "Convention People's Party",
      id: "CPP",
      logo: require("../assets/images/party/CPP_logo.jpg"),
    },
    regions: new Regions(...cpp),
    votes: 25552,
  },
  {
    name: "Edward Mahama",
    profile: require("../assets/images/profile/david-asibi-ayindenaba-apasera.jpg"),
    "filing Date": setDate("9 October 2020"),
    "running mate": "Emmanuel Anyidoho",
    "running mate profile": require("../assets/images/profile/John-Mahama.jpg"),
    party: {
      name: "People's National Convention",
      id: "PNC",
      logo: require("../assets/images/party/Pnc-logo.jpg"),
    },
    regions: new Regions(...pnc),
    votes: 22214,
  },
  {
    name: "Jacob Osei Yeboah",
    profile: require("../assets/images/profile/Asiedu-Walker.jpg"),
    "filing Date": setDate("7 October 2020"),
    "running mate": "Daniel Wilson Torto",
    "running mate profile": require("../assets/images/profile/John-Mahama.jpg"),
    party: {
      name: "Independent",
      id: "IND",
      logo: "",
    },
    regions: new Regions(...ind),
    votes: 15911,
  },
  {
    name: "Paa Kwesi Nduom",
    profile: require("../assets/images/profile/bridget D.jpg"),
    "filing Date": setDate("8 October 2020"),
    "running mate": "Brigitte Akosua Dzogbenuku",
    "running mate profile": require("../assets/images/profile/John-Mahama.jpg"),
    party: {
      name: "Progressive People's Party",
      id: "PPP",
      logo: require("../assets/images/profile/bridget D.jpg"),
    },
    regions: new Regions(...ppp),
    votes: 106092,
  },
  {
    name: "Nana Konadu Agyeman Rawlings",
    profile: require("../assets/images/profile/konadu.jpg"),
    "filing Date": setDate("9 October 2020"),
    "running mate": "Kojo Mensah Sosu",
    "running mate profile": require(""),
    party: {
      name: "National Democratic Party",
      id: "NDP",
      logo: require("../assets/images/party/NDP.jpg"),
    },
    regions: new Regions(...ndp),
    votes: 16935,
  },
];

const parliament = [
  new Parliament("National Democratic Congress", "NDC", 169, -42),
  new Parliament("New Patriotic Party", "NPP", 169, 47),
  new Parliament("Progressive People's Party", "PPP", 0, 0),
  new Parliament("Convention People's Party", "CPP", 0, -1),
  new Parliament("People's National Convention", "PNC", 0, -1),
  new Parliament("National Democratic Party", "NDP", 0, 0),
  new Parliament("All People's Congress", "APC", 0, 0),
  new Parliament("Great Consolidated Popular Party", "GCPP", 0, 0),
  new Parliament("United Front Party", "UFP", 0, 0),
  new Parliament("Democratic People's Party", "DPP", 0, 0),
  new Parliament("United Progressive Party", "UPP", 0, 0),
  new Parliament("Independents", "IND", 0, -3),
];

const validVotes = candidateDetails.reduce((prev, cur) => prev + cur);
const invalidVotes = 167349;
const totalVotes = validVotes + invalidVotes;
const registeredVoters = 15712499;
const percent = (val) => `${(val / totalVotes) * 100}%`;
const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 });

//exported items
const stats = {
  "valid votes": { votes: validVotes, percent: percent(validVotes) },
  "invalid votes": { votes: invalidVotes, percent: percent(invalidVotes) },
  "total votes": { votes: totalVotes, percent: percent(totalVotes) },
  "registered voters": registeredVoters,
  "voter turnout": `${format((totalVotes / registeredVoters) * 100)}%`,
};
const candidates = candidateDetails.map((i) => ({
  name: i.name,
  profile: i.profile,
  "running mate": i["running mate"],
  "running mate profile": i["running mate profile"],
  party: i.party,
  votes: format(i.votes),
  regions: i.regions,
  percentage: format(percent(i.votes)),
}));

const _2016 = { candidates, stats };
export { _2016, format };
