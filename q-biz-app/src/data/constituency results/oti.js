import { Candidates, addOrder, addParl } from "./__functions";

const dambai = [
  {
    region: "Oti",
    district: "Jasikan",
    capital: "Jasikan",
    constituency: "Buem",
    code: "L0101 ",
    created: "",
    candidates: Candidates(
      addOrder(29858, 8696, 427, 30, 47, 31, 10, 14, 7, 18, 15, 5),
      addOrder(
        "Adams Iddie Kofi",
        "Aziale Lawrence Kwami",
        "Isaac Davids Kpuku Kwaku",
        "",
        "Darko-Boateng Adams",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
      addOrder(18528, 6843, 268, 0, 152, 0, 0, 0, 0, 0, 0, 0)
    ),
  },
  {
    region: "Oti",
    district: "Biakoye",
    capital: "Nkonya Ahenkro",
    constituency: "Biakoye",
    code: "L0201 ",
    created: "",
    candidates: Candidates(
      addOrder(21463, 8003, 306, 17, 4, 18, 15, 12, 5, 18, 7, 8),
      addOrder(
        "Kwadwo Nyanpon Aboagye",
        "Daniel Korsinah",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Micheal Kogo Asante",
        "",
        ""
      ),
      addOrder(19095, 10827, 0, 0, 0, 0, 0, 0, 0, 222, 0, 0)
    ),
  },
  {
    region: "Oti",
    district: "Kadjebi",
    capital: "Kadjebi",
    constituency: "Akan",
    code: "L0301 ",
    created: "",
    candidates: Candidates(
      addOrder(20727, 11252, 284, 30, 36, 20, 29, 14, 5, 24, 11, 12),
      addOrder(
        "Yao Gomado",
        "Alhaji Rashid Bawa",
        "Daniel Asong Boateng",
        "",
        "",
        "",
        "",
        "",
        "",
        "Emmanuel Osei Brantuo",
        "",
        ""
      ),
      addOrder(19317, 13300, 249, 0, 0, 0, 0, 0, 0, 46, 0, 0)
    ),
  },
  {
    region: "Oti",
    district: "Krachi East Municipal",
    capital: "Dambai",
    constituency: "Krachi East",
    code: "L0401 ",
    created: "",
    candidates: Candidates(
      addOrder(22675, 15335, 328, 37, 0, 0, 0, 0, 0, 0, 14, 8),
      addOrder(
        "Wisdom Gidisu",
        "Gyato Michael",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
      addOrder(20364, 19837, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    ),
  },
  {
    region: "Oti",
    district: "Krachi West",
    capital: "Kete Krachi",
    constituency: "Krachi West",
    code: "L0501 ",
    created: "",
    candidates: Candidates(
      addOrder(13052, 9697, 206, 16, 4, 13, 10, 7, 29, 20, 13, 7),
      addOrder(
        "Helen Adjoa Ntoso",
        "Justice Amankwa Mensah",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
      addOrder(12068, 11572, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    ),
  },
  {
    region: "Oti",
    district: "Krachi Nchumuru",
    capital: "Chinderi",
    constituency: "Krachi Nchumuru",
    code: "L0601 ",
    created: "",
    candidates: Candidates(
      addOrder(17391, 11752, 209, 29, 150, 42, 36, 16, 3, 33, 12, 9),
      addParl(
        "Solomon Kuyon",
        "Kakateche Innocent Tache",
        "",
        "",
        "",
        "Inusah Abdul-Nasiru",
        "",
        "",
        "",
        "",
        "",
        "",
        "Nnigmaka Isreal"
      ),
      addParl(13488, 12404, "", "", "", 4426, "", "", "", "", "", "", 117)
    ),
  },
  {
    region: "Oti",
    district: "Nkwanta South Municipal",
    capital: "Nkwanta",
    constituency: "Nkwanta South",
    code: "L0701 ",
    created: "",
    candidates: Candidates(
      addOrder(30084, 18174, 501, 59, 50, 75, 43, 67, 179, 122, 101, 21),
      addOrder(
        "Kini Geoffrey",
        "Sherifa Sekyere-Tijani",
        "",
        "",
        "",
        "",
        "",
        "",
        "Ograh Felix William",
        "",
        "",
        ""
      ),
      addOrder(29189, 20272, 0, 0, 0, 0, 0, 0, 1127, 0, 0, 0)
    ),
  },
  {
    region: "Oti",
    district: "Nkwanta North",
    capital: "Kpassa",
    constituency: "Nkwanta North",
    code: "L0801 ",
    created: "",
    candidates: Candidates(
      addOrder(25771, 19949, 198, 47, 56, 35, 61, 44, 6, 18, 27, 27),
      addOrder(
        "John Oti Kwabena Bless",
        "Nador Munyum Benjani",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ),
      addOrder(24470, 22869, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    ),
  },
];

const Oti = {
  region: "Oti Region",
  capital: "Dambai",
  results: dambai,
  link: "oti",
};

export { Oti };
