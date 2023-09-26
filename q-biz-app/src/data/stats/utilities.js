class Regions {
  constructor(
    ahafo,
    ashanti,
    bono,
    bono_east,
    central,
    eastern,
    greater_accra,
    northern,
    north_east,
    oti,
    savannah,
    upper_east,
    upper_west,
    volta,
    western,
    western_north
  ) {
    this["Ahafo Region"] = ahafo;
    this["Ashanti Region"] = ashanti;
    this["Bono Region"] = bono;
    this["Bono East Region"] = bono_east;
    this["Central Region"] = central;
    this["Eastern Region"] = eastern;
    this["Greater Accra Region"] = greater_accra;
    this["Northern Region"] = northern;
    this["North East Region"] = north_east;
    this["Oti Region"] = oti;
    this["Savannah Region"] = savannah;
    this["Upper East Region"] = upper_east;
    this["Upper West Region"] = upper_west;
    this["Volta Region"] = volta;
    this["Western Region"] = western;
    this["Western North Region"] = western_north;
  }
}

class _Regions {
  constructor(
    ashanti,
    brongAhafo,
    central,
    eastern,
    greater_accra,
    northern,
    upper_east,
    upper_west,
    volta,
    western
  ) {
    this["Ashanti Region"] = ashanti;
    this["Brong Ahafo Region"] = brongAhafo;
    this["Central Region"] = central;
    this["Eastern Region"] = eastern;
    this["Greater Accra Region"] = greater_accra;
    this["Northern Region"] = northern;
    this["Upper East Region"] = upper_east;
    this["Upper West Region"] = upper_west;
    this["Volta Region"] = volta;
    this["Western Region"] = western;
  }
}

class Parliament {
  constructor(party, abbreviation, byRegion, seats = 0, gains = 0) {
    this.party = party;
    this.abbreviation = abbreviation;
    this["regional results"] = new _Regions(...byRegion);
    this.seats = seats;
    this.gains = gains;
  }
}

const setDate = (date) =>
  new Date(date).toLocaleString("en-GB", {
    dateStyle: "full",
    timeZone: "Europe/London",
  });

const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 });
const percentage = (arr, value) => {
  let total = arr.map((i) => i.votes).reduce((prev, cur) => prev + cur);
  return format((value / total) * 100);
};
const sorted = (arr, item) => arr.filter((i) => i.votes).sort((a, b) => b - a);

const colorsMap = [
  "green",
  "brown",
  "red",
  "navy",
  "purple",
  "#DB2D43",
  "#3D2B1F",
  "#6C8032",
  "coral",
  "#4B3621",
  "#BF00FF",
  "#FFAA1D",
  "maroon",
  "black",
  "indigo",
  "magenta",
];
const iconsMap = [
  "place",
  "laptop",
  "laptop_mac",
  "desktop_windows",
  "insert_chat",
  "import_contacts",
  "extension",
  "dvr",
  "directions_boat",
  "devices",
  "description",
  "dashboard",
  "confirmation_number",
  "collections",
  "casino",
  "camera_rear",
  "call_to_action",
];

export {
  Regions,
  _Regions,
  Parliament,
  setDate,
  format,
  percentage,
  sorted,
  colorsMap,
  iconsMap,
};
