import { Candidates, addOrder, winHistory } from "./__functions";

const goaso = [
  {
    region: "Ahafo",
    district: "Asunafo South",
    capital: "Kukuom",
    constituency: "Asunafo South",
    code: "H0101",
    created: "",
    history: { president: {}, parliament: {} },
    candidates: Candidates(
      addOrder(20359, 22002, 235, 22, 9, 13, 14, 21, 5, 14, 6, 8),
      addOrder(
        "Hon Eric Opoku",
        "Amoa-Mensah Kwabena Agyei",
        "Addai Francis",
        "",
        "Asamoah Agyemang",
        "",
        "",
        "",
        "",
        "Sarfo Sadick",
        "",
        ""
      ),
      addOrder(22322, 20927, 232, 0, 26, 0, 0, 0, 0, 27, 0, 0)
    ),
  },
  {
    region: "Ahafo",
    district: "Asunafo North Municipal",
    capital: "Goaso",
    constituency: "Asunafo North",
    code: "H0201",
    created: "",
    candidates: Candidates(
      addOrder(28352, 36327, 398, 72, 29, 0, 27, 31, 11, 0, 18, 13),
      addOrder(
        "Mohammed Haruna",
        "Evans Opoku Bobie",
        "",
        "Banasco Kwaku",
        "",
        "",
        "",
        "",
        "",
        "Osei Asibey Boafo",
        "",
        ""
      ),
      addOrder(31340, 34684, 0, 267, 0, 0, 0, 0, 0, 142, 0, 0)
    ),
  },
  {
    region: "Ahafo",
    district: "Asutifi South",
    capital: "Hwidiem",
    constituency: "Asutifi South",
    code: "H0301",
    created: "",
    candidates: Candidates(
      addOrder(19707, 18246, 193, 15, 12, 12, 18, 12, 3, 0, 0, 8),
      addOrder(
        "Collins Dauda",
        "Owusu-Brempong Yaw",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Seidu Kwame",
        "",
        ""
      ),
      addOrder(20616, 17957, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0)
    ),
  },
  {
    region: "Ahafo",
    district: "Asutifi North",
    capital: "Kenyase",
    constituency: "Asutifi North",
    code: "H0401",
    created: "",
    candidates: Candidates(
      addOrder(15480, 19141, 213, 21, 9, 10, 25, 16, 4, 7, 2, 6),
      addOrder(
        "Ebenezer Kwaku Addo",
        "Patrick Bannor",
        "Kofi Anane",
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
      addOrder(16546, 18505, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    ),
  },
  {
    region: "Ahafo",
    district: "Tano South Municipal",
    capital: "Bechem",
    constituency: "Tano South",
    code: "H0501",
    created: "",
    candidates: Candidates(
      addOrder(17066, 23895, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
      addOrder(
        "Hanna Louisa Bisiw",
        "Benjamin Yeboah Sekyere",
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
      addOrder(19731, 22034, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    ),
  },
  {
    region: "Ahafo",
    district: "Tano North Municipal",
    capital: "Duayaw Nkwanta",
    constituency: "Tano North",
    code: "H0601",
    created: "",
    candidates: Candidates(
      addOrder(15403, 25414, 286, 24, 12, 23, 11, 12, 13, 11, 9, 8),
      addOrder(
        "Pius Sampson Opoku",
        "Freda Prempeh",
        "Nkrumah Bennett Asante",
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
      addOrder(18684, 22592, 419, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    ),
  },
];

const Ahafo = {
  region: "Ahafo Region",
  capital: "Goaso",
  results: goaso,
  link: "ahafo",
};

export { Ahafo };
