import { goaso } from "./ahafo";
import { kumasi } from "./ashanti";
import { sunyani } from "./bono";
import { techiman } from "./BonoEast";
import { capecoast } from "./central";
import { koforidua } from "./eastern";
import { accra } from "./greaterAccra";
import { nalerigu } from "./northEast";
import { tamale } from "./northern";
import { dambai } from "./oti";
import { damongo } from "./savannah";
import { bolgatanga } from "./upperEast";
import { wa } from "./upperWest";
import { ho } from "./volta";
import { takoradi } from "./western";
import { sefwi_Wiawso } from "./westernNorth";
const regions = [
  { region: "Ahafo Region", capital: "Goaso", con: goaso },
  { region: "Ashanti Region", capital: "Kumasi", con: kumasi },
  { region: "Bono Region", capital: "Sunyani", con: sunyani },
  { region: "Bono East Region", capital: "Techiman", con: techiman },
  { region: "Eastern Region", capital: "Koforidua", con: koforidua },
  { region: "Greater Accra Region", capital: "Accra", con: accra },
  { region: "North East Region", capital: "Nalerigu", con: nalerigu },
  { region: "Northern Region", capital: "Tamale", con: tamale },
  { region: "Oti Region", capital: "Dambai", con: dambai },
  { region: "Savannah Region", capital: "Damongo", con: damongo },
  { region: "Upper East Region", capital: "Bolgatanga", con: bolgatanga },
  { region: "Upper West Region", capital: "Wa", con: wa },
  { region: "Volta Region", capital: "Wa", con: ho },
  { region: "Western Region", capital: "Wa", con: takoradi },
  { region: "Western North Region", capital: "Wa", con: sefwi_Wiawso },
];

export { regions };
