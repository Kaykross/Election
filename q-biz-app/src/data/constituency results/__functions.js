import { Regions, setDate } from "../stats/utilities";
const Candidates = (
  [...presidentialVotes],
  [...parliamentaryCandidates],
  [...parliamentaryVotes]
) => ({
  ndc: {
    president: {
      name: "John Dramani Mahama",
      profile: require("../../assets/images/profile/John-Mahama.jpg"),
      "filing Date": setDate("7 October 2020"),
      "running mate": "Jane Naana Opoku-Agyemang",
      "running mate profile": require("../../assets/images/running mates/Jane_Naana_Opoku-Agyemang.jpg"),
      votes: [...presidentialVotes][0],
    },
    party: {
      name: "National Democratic Congress",
      id: "NDC",
      logo: require("../../assets/images/party/NDC flag.png"),
    },
    parliament: {
      candidate: [...parliamentaryCandidates][0],
      votes: [...parliamentaryVotes][0],
    },
  },
  npp: {
    president: {
      name: "Nana Addo Dankwa Akuffo-Addo",
      profile: require("../../assets/images/profile/Akuffo Addo.jpg"),
      "filing Date": setDate("7 October 2020"),
      "running mate": "Mahamudu Bawumia",
      "running mate profile": require("../../assets/images/running mates/Dr_Bawumia.jpg"),
      votes: [...presidentialVotes][1],
    },
    party: {
      name: "New Patriotic Party",
      id: "NPP",
      logo: require("../../assets/images/party/npp-logo.jpg"),
    },
    parliament: {
      candidate: [...parliamentaryCandidates][1],
      votes: [...parliamentaryVotes][1],
    },
  },
  gum: {
    president: {
      name: "Christian Kwabena Andrews",
      profile: require("../../assets/images/profile/Christian Kwabena Andrews.jpg"),
      "filing Date": setDate("7 October 2020"),
      "running mate": "Abu Grant Lukeman",
      "running mate profile": require("../../assets/images/running mates/osofo-kiriabosom-alhaji-abu-lukeman (1).jpg"),
      votes: [...presidentialVotes][2],
    },
    party: {
      name: "Ghana Union Movement",
      id: "GUM",
      logo: require("../../assets/images/party/gum.jpg"),
    },
    parliament: {
      candidate: [...parliamentaryCandidates][2],
      votes: [...parliamentaryVotes][2],
    },
  },
  cpp: {
    president: {
      name: "Ivor Kobina Greenstreet",
      profile: require("../../assets/images/profile/Ivor Greenstreet.jpeg"),
      "filing Date": setDate("9 October 2020"),
      "running mate": "Emmanuel Yaovi Bobobe",
      "running mate profile": require("../../assets/images/running mates/Emmanuel Yaovi Bobobe.jpg"),
      votes: [...presidentialVotes][3],
    },

    party: {
      name: "Convention People's Party",
      id: "CPP",
      logo: require("../../assets/images/party/CPP_logo.jpg"),
    },
    parliament: {
      candidate: [...parliamentaryCandidates][3],
      votes: [...parliamentaryVotes][3],
    },
  },
  pnc: {
    president: {
      name: "David Asibi Ayindenaba Apasera",
      profile: require("../../assets/images/profile/david-asibi-ayindenaba-apasera.jpg"),
      "filing Date": setDate("9 October 2020"),
      "running mate": "Divine Ayivor",
      "running mate profile": require("../../assets/images/running mates/divine ayivor.jpg"),
      votes: [...presidentialVotes][4],
    },
    party: {
      name: "People's National Convention",
      id: "PNC",
      logo: require("../../assets/images/party/Pnc-logo.jpg"),
    },
    parliament: {
      candidate: [...parliamentaryCandidates][4],
      votes: [...parliamentaryVotes][4],
    },
  },
  ind: {
    president: {
      name: "Alfred Kwame Asiedu Walker",
      profile: require("../../assets/images/profile/Asiedu-Walker.jpg"),
      "filing Date": setDate("7 October 2020"),
      "running mate": "Jacob Osei Yeboah",
      "running mate profile": require("../../assets/images/running mates/Jacob Osei Yeboah.jpg"),
      votes: [...presidentialVotes][5],
    },
    party: {
      name: "Independent",
      id: "IND",
      logo: "",
    },
    parliament: {
      candidate: [...parliamentaryCandidates][5],
      votes: [...parliamentaryVotes][5],
    },
  },
  lpg: {
    president: {
      name: "Percival Kofi Akpaloo",
      profile: require("../../assets/images/profile/percival-kofi-akpaloo.jpg"),
      "filing Date": setDate("9 October 2020"),
      "running mate": "Margaret Obrine Sarfo",
      "running mate profile": require("../../assets/images/running mates/Margaret Obrine Sarfo.jpg"),
      votes: [...presidentialVotes][6],
    },
    party: {
      name: "Liberal Party of Ghana",
      id: "LPG",
      logo: require("../../assets/images/party/LPG party.png"),
    },
    parliament: {
      candidate: [...parliamentaryCandidates][6],
      votes: [...parliamentaryVotes][6],
    },
  },
  apc: {
    president: {
      name: "Hassan Ayariga",
      profile: require("../../assets/images/profile/Hassan_Ayariga.jpg"),
      "filing Date": setDate("8 October 2020"),
      "running mate": "Frank Yaw Kuadey",
      "running mate profile": "",
      votes: [...presidentialVotes][7],
    },
    party: {
      name: "All People's Congress",
      id: "APC",
      logo: require("../../assets/images/party/All_People's_Congress_Ghana_Logo.jpg"),
    },
    parliament: {
      candidate: [...parliamentaryCandidates][7],
      votes: [...parliamentaryVotes][7],
    },
  },
  ppp: {
    president: {
      name: "Brigitte Akosua Dzogbenuku",
      profile: require("../../assets/images/profile/bridget D.jpg"),
      "filing Date": setDate("8 October 2020"),
      "running mate": "Kofi Asamoah-Siaw",
      "running mate profile": require("../../assets/images/running mates/Kofi Asamoah-Siaw.jpg"),
      votes: [...presidentialVotes][8],
    },
    party: {
      name: "Progressive People's Party",
      id: "PPP",
      logo: require("../../assets/images/party/ProgressivePeople'sParty_logo.jpg"),
    },
    parliament: {
      candidate: [...parliamentaryCandidates][8],
      votes: [...parliamentaryVotes][8],
    },
  },
  ndp: {
    president: {
      name: "Nana Konadu Agyeman Rawlings",
      profile: require("../../assets/images/profile/konadu.jpg"),
      "filing Date": setDate("9 October 2020"),
      "running mate": "Peter Tennyson Asamoah",
      "running mate profile": require("../../assets/images/running mates/Peter Tennyson Asamoah.jpg"),
      votes: [...presidentialVotes][9],
    },
    party: {
      name: "National Democratic Party",
      id: "NDP",
      logo: require("../../assets/images/party/NDP.jpg"),
    },
    parliament: {
      candidate: [...parliamentaryCandidates][9],
      votes: [...parliamentaryVotes][9],
    },
  },
  gfp: {
    president: {
      name: "Akua Donkor",
      profile: require("../../assets/images/profile/Akua Donkor.jpg"),
      "filing Date": setDate("8 October 2020"),
      "running mate": "Ernest Adakabre Frimpong Manso",
      "running mate profile": require("../../assets/images/running mates/Akua donkor running mate.jpg"),
      votes: [...presidentialVotes][10],
    },
    party: {
      name: "Ghana Freedom Party",
      id: "GFP",
      logo: require("../../assets/images/party/great freedom party.jpg"),
    },
    parliament: {
      candidate: [...parliamentaryCandidates][10],
      votes: [...parliamentaryVotes][10],
    },
  },
  gcpp: {
    president: {
      name: "Henry Herbert Lartey",
      profile: require("../../assets/images/profile/Henry-Herbert-Lartey.jpg"),
      "filing Date": setDate("9 October 2020"),
      "running mate": "Andy Bampoe-Sekyi",
      "running mate profile": "",
      votes: [...presidentialVotes][11],
    },
    party: {
      name: "Great Consolidated Popular Party",
      id: "GCPP",
      logo: require("../../assets/images/party/gcpp.jpg"),
    },
    parliament: {
      candidate: [...parliamentaryCandidates][11],
      votes: [...parliamentaryVotes][11],
    },
  },

  ind2: {
    president: {
      name: "",
      profile: "",
      "filing Date": "",
      "running mate": "",
      "running mate profile": "",
      votes: 0,
    },
    party: {
      name: "Independent Party 2",
      id: "IND2",
      logo: "",
    },
    parliament: {
      candidate: [...parliamentaryCandidates][12]
        ? [...parliamentaryCandidates][12]
        : "",
      votes: [...parliamentaryVotes][12] ? [...parliamentaryVotes][12] : 0,
    },
  },
  upp: {
    president: {
      name: null,
      profile: null,
      "filing Date": null,
      "running mate": null,
      "running mate profile": null,
      votes: 0,
    },
    party: {
      name: "United Progressive Party",
      id: "UPP",
      logo: "",
    },
    parliament: {
      candidate: [...parliamentaryCandidates][13]
        ? [...parliamentaryCandidates][13]
        : "",
      votes: [...parliamentaryVotes][13] ? [...parliamentaryVotes][13] : 0,
    },
  },
});

const addOrder = (
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
  gcpp
) => [ndc, npp, gum, cpp, pnc, ind, lpg, apc, ppp, ndp, gfp, gcpp];

const addParl = (
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
  ind2 = null,
  upp = null
) => [ndc, npp, gum, cpp, pnc, ind, lpg, apc, ppp, ndp, gfp, gcpp, ind2, upp];

const constituency = (Region, constituency) =>
  Region.results.filter(
    (data) =>
      data.constituency.toLocaleLowerCase() == constituency.toLocaleLowerCase()
  );

const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 });
const percentage = (arr, value) => {
  let total = arr.map((i) => i.votes).reduce((prev, cur) => prev + cur);
  return format((value / total) * 100);
};
const sorted = (arr, item) => arr.filter((i) => i.votes).sort((a, b) => b - a);

const winHistory = (
  _1992,
  _1996,
  _2000,
  _2004,
  _2008,
  _2012,
  _2016,
  _2020
) => ({
  _1992,
  _1996,
  _2000,
  _2004,
  _2008,
  _2012,
  _2016,
  _2020,
});

export { Candidates, addOrder, addParl, format, constituency, winHistory };
