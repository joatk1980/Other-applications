const transformDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthName = date.toLocaleString("default", { month: "long" });

  // Function to get the ordinal suffix
  function getOrdinalSuffix(day) {
    const suffixes = ["th", "st", "nd", "rd"];
    const relevantDigits = day % 100;
    return (
      day +
      (suffixes[(relevantDigits - 20) % 10] ||
        suffixes[relevantDigits] ||
        suffixes[0])
    );
  }

  return `${getOrdinalSuffix(day)} ${monthName}`;
};

export default transformDate;
