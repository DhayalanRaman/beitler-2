export const Timecol = [
  {
    name: 'Intervals',
    label: 'intervals',
    options: {
        customBodyRender: (value) => {
          return (
            <div>
              {value && value.toString() === "91"
                ? "Every 2 Weeks"
                : value.toString() === "93"
                  ? "Once a Week"
                  : value.toString() === "94"
                  ? "Every Day" : ""}
            </div>
          );
        },
    }
  },
  {
    name: 'ScheduleTime',
    label: 'scheduleTime',
  },
  {
    name: 'isActive',
    label: 'Action',
  },
];
export const options = {
  exportButton: false,
  filter: true,
  filterType: "dropdown",
  responsive: "standard",
  pagination: false,
  selectableRows: 'none',
  search: false,
  download: false,
  print: false
};

export const poolColumns = [
  {
    name: "poolLocationName",
    label: "LocationName",
  },
  {
    name: "Address1",
    label: "Address1",
  },
  {
    name: "City",
    label: "City",
  },
  {
    name: "State",
    label: "State",
  },
  {
    name: "Zipcode",
    label: "Zipcode",
  },
  {
    name: "IsActive",
    label: "Actions",
  },

]


export const contactCol = [
  {
    name: "Type",
    label: "Type",
  },
  {
    name: "Name",
    label: "Name",
  },
  {
    name: "Title",
    label: "Title",
  },
  {
    name: "Phone",
    label: "Phone",
  },
  {
    name: "Mobile",
    label: "Mobile",
  },
  {
    name: "Extension",
    label: "Extension",
  },
  {
    name: "Email",
    label: "Email",
  },
  {
    name: "id",
    label: "Actions",
  },
]

export const DcCol = [
  {
    name: "GroupNumber",
    label: "DCNumber",
  },
  {
    name: "City",
    label: "City",
  },
  {
    name: "State",
    label: "State",
  },
  {
    name: "Zipcode",
    label: "Zipcode",
  },
  {
    name: "IsActive",
    label: "Actions",
  },
]