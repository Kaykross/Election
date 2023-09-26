const navLinks = [
  {
    label: "Dashboard",
    icon: "computer",
    caption: "View Election Summary",
    submenu: [
      {
        label: "Dashboard",
        icon: "equalizer",
        caption: "filepursuit.com ",
        link: "/2020/dashboard/",
      },
      {
        label: "Presidential",
        icon: "equalizer",
        caption: "filepursuit.com ",
        link: "/2020/dashboard/regional",
      },
      {
        label: "Parliamentary",
        icon: "poll",
        caption: "filepursuit.com",
        link: "/2020/dashboard/regional",
      },
    ],
  },
  {
    label: "Results View",
    icon: "folder",
    caption: "View Election Summary",
    submenu: [
      {
        label: "Constituency Presidential Results",
        icon: "keyboard_tab",
        caption: "results by constituencies",
      },
      {
        label: "Regional Presidential Results",
        icon: "keyboard_tab",
        caption: "results by constituencies",
      },
      {
        label: "Parliamentary Results",
        icon: "keyboard_tab",
        caption: "by region and constituency",
      },
    ],
  },
  {
    label: "Upload Results",
    icon: "widgets",
    caption: "Enter election results",
    submenu: [
      {
        label: "Constituency Presidential Results",
        icon: "subdirectory_arrow_right",
        caption: "results by constituencies",
      },
      {
        label: "Regional Presidential Results",
        icon: "subdirectory_arrow_right",
        caption: "results by constituencies",
      },
      {
        label: "Parliamentary Results",
        icon: "subdirectory_arrow_right",
        caption: "by region and constituency",
      },
    ],
  },
  {
    label: "Voters Statistics",
    icon: "people",
    caption: "Distribution of voters",
    submenu: [
      {
        label: "Regional Distributions",
        icon: "subdirectory_arrow_right",
        caption: "Regional distribution of voters",
      },
      {
        label: "Constituency Distributions",
        icon: "subdirectory_arrow_right",
        caption: "Constituency distribution of voters",
      },
      {
        label: "Polling Station Distributions",
        icon: "subdirectory_arrow_right",
        caption: "Polling Stations",
      },
    ],
  },
  {
    label: "Elections News",
    icon: "present_to_all",
    caption: "important news and links",
    submenu: [
      {
        label: "EC Registration news",
        icon: "subdirectory_arrow_right",
        caption: "",
      },
      {
        label: "EC Electoral Reforms",
        icon: "subdirectory_arrow_right",
        caption: "",
      },
      {
        label: "Election Calender",
        icon: "subdirectory_arrow_right",
        caption: "",
      },
      {
        label: "EC Infographics",
        icon: "subdirectory_arrow_right",
        caption: "",
      },
    ],
  },
  // {
  //   label: "Notifications and Alerts",
  //   icon: "notifications_active",
  //   caption: "view messages and alerts",
  // },
];

export { navLinks };
