export const columns = [
  {
    name: 'type',
    label: 'type',
  },
  {
    name: 'displayText',
    label: 'name',
  },
  {
    name: 'value',
    label: 'value',
  },
  {
    name: 'sequence',
    label: 'sequence',
  },
  {
    name: 'isActive',
    label: 'status',
    options: {
        customBodyRender: (value) => {
          return (
            <div>
              {value.toString() === "true"
                ? "true"
                : value.toString() === "false"
                  ? "false"
                  : "false"}
            </div>
          );
        },
      }
   },
//   {
//     name: "id",
//     label: 'Actions',
//     options: {
//       customBodyRender: (value) => {
//         return (
//           <div>
//             <Tooltip title="Edit">
//               <IconButton onClick={() => handleUpdate(value)}>
//                 <EditIcon />
//               </IconButton>
//             </Tooltip>
//             <Tooltip title="Delete">
//               <IconButton>
//                 <DeleteIcon />
//               </IconButton>
//             </Tooltip>
//           </div>
//         );
//       }
//     },
//   },
];


export const options = {
    exportButton: true,
    filter: true,
    responsive: "standard",
    selectableRows: 'none',
    fixedSelectColumn: false,
    resizableColumns: false,
    rowsPerPageOptions: [5, 10, 15, 30, 50, 100],
    jumpToPage: true,
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "of"
      }
    },
  };