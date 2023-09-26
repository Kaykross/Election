// import { _2020 } from "./stats/2020";
class TableData_2020 {
  constructor(data) {
    this.data = data;
  }
  columns() {
    return [
      {
        name: "candidate",
        required: true,
        label: "Candidate",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "party id",
        align: "left",
        label: "Party ID",
        field: (row) => row.party.id,
        sortable: true,
      },
      {
        name: "party name",
        label: "Party Name",
        align: "left",
        field: (row) => row.party.name,
        sortable: true,
      },
      {
        name: "votes",
        label: "Votes",
        field: (row) => row.votes,
        align: "left",
        sortable: true,
        sortOrder: "da",
      },
      {
        name: "percentage",
        label: "Percentage",
        align: "left",
        field: (row) => row.percent,
        sortable: true,
        sortOrder: "da",
      },
    ];
  }
  rows() {
    return this.data.map((i) => i);
  }
}

class regionalData_2020 {
  constructor(data) {
    this.data = data;
  }
  columns() {
    return [
      {
        name: "candidate",
        required: true,
        label: "Candidate",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
      {
        name: "party id",
        align: "left",
        label: "Party ID",
        field: (row) => row.party.id,
        sortable: true,
      },
      {
        name: "party name",
        label: "Party Name",
        align: "left",
        field: (row) => row.party.name,
        sortable: true,
      },
      {
        name: "votes",
        label: "Votes",
        field: (row) => row.votes,
        align: "left",
        sortable: true,
        sortOrder: "da",
      },
      {
        name: "percentage",
        label: "Percentage",
        align: "left",
        field: (row) => row.percent,
        sortable: true,
        sortOrder: "da",
      },
    ];
  }
  rows() {
    return this.data.map((i) => i);
  }
}

export { TableData_2020 };
