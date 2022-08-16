export const options = {
    exportButton: true,
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    fixedSelectColumn: false,
    resizableColumns: false,
    rowsPerPageOptions: [5, 10, 15, 30, 50, 100],
    jumpToPage: true,
    jumpToPageType: "dropdown",
    textLabels: {
        pagination: {
            next: "Next >",
            previous: "< Previous",
            rowsPerPage: "Total items Per Page",
            displayRows: "of"
        }
    },
    MuiTableCell: {
        head: {
            backgroundColor: "red !important"
        }
    }
};


//   export const columns = [
//     {
//         name: 'type',
//         label: 'Event Type',
//         options: {
//             customBodyRender: (value) => {
//                 return (
//                     <div>
//                         {value.toString() === "48"
//                             ? "email"
//                             : value.toString() === "49"
//                                 ? "sms"
//                                 : "email"}
//                     </div>
//                 );
//             },
//         }
//     },
//     {
//         name: 'subject',
//         label: 'Subject',
//     },
//     {
//         name: 'bodyText',
//         label: 'Body',
//     },
//     {
//         name: 'isActive',
//         label: 'Status',
//         options: {
//             customBodyRender: (value) => {
//                 return (
//                     <div>
//                         {value.toString() === "true"
//                             ? "Active"
//                             : value.toString() === "false"
//                                 ? "InActive"
//                                 : "InActive"}
//                     </div>
//                 );
//             },
//         }
//     },
//     {
//         name: 'eventName',
//         label: 'Event Name',
//     },
// ]
