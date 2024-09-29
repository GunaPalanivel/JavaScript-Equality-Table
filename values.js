// Evaluate strings in backticks (`) to their corresponding values.
const defaultValues = [
  true,
  false,
  1,
  0,
  -1,
  "`'true'`",
  "`'false'`",
  "`'1'`",
  "`'0'`",
  "`'-1'`",
  "",
  "`null`",
  "`undefined`",
  Infinity,
  -Infinity,
  "`[]`",
  "`{}`",
  [[]],
  [0],
  [1],
  "`parseFloat('nan')`",
];

const reorderedValues = [
  false,
  0,
  "`'0'`",
  [0],
  "",
  "`[]`",
  [[]],
  true,
  1,
  "`'1'`",
  [1],
  -1,
  "`'-1'`",
  "`'true'`",
  "`'false'`",
  Infinity,
  -Infinity,
  "`null`",
  "`undefined`",
  "`{}`",
  "`parseFloat('nan')`",
];

// Function to get values based on URL parameter
const getValues = () => {
  // Check URL parameter once
  const isReordered = window.location.search.includes("reordered");
  return isReordered ? reorderedValues : defaultValues;
};

// Initialize the values array
const values = getValues();
