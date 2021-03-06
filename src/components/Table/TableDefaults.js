import { createMuiTheme } from '@material-ui/core';

// This is the base preset for the custom material-table component since most of the tables
// display at least these columns.
const tablePreferences = {
  columns: [
    {
      name: 'Name'
    },
    {
      name: 'Email'
    },
    {
      name: 'Household ID'
    }
  ],
  options: {
    selectableRows: 'none',
    responsive: 'standard',
    // Don't show the default print or download buttons that come with the default table.
    print: false,
    filter: true,
    filterType: 'dropdown'
  },
  theme: createMuiTheme({
    palette: { type: 'light' },
    typography: { useNextVariants: true }
  })
};

export default tablePreferences;
