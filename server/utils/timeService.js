// Function to get the current date and time in a formatted string
function getCurrentDateTime() {
  const currentDate = new Date();
  // Format date and time
  const formattedDate = currentDate.toISOString().split("T")[0];
  const formattedTime = currentDate.toLocaleTimeString();

  // Return formatted string
  return `[${formattedDate} ${formattedTime}]`;
}

// Export the function
module.exports = getCurrentDateTime;
