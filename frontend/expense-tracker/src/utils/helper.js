import moment from "moment";

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
};

export const addThousandsSeperator = (num) => {
  if (num == null || isNaN(num)) return "";

  const [integerPart, fractionalPart] = num.toString().split(".");
  //   const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formattedInteger = integerPart.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");

  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  const chartData = data.map((item) => ({
    category: item?.category,
    amount: item?.amount,
  }));

  return chartData;
};

export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    source: item?.source,
  }));

  return chartData;
};

export const prepareExpenseLineChartData = (data = []) => {
  // Group transactions by date
  const groupedByDate = data.reduce((acc, item) => {
    const dateKey = moment(item.date).format("DD MMM");
    if (!acc[dateKey]) {
      acc[dateKey] = {
        month: dateKey,
        amount: 0,
        category: [], // Array to store categories
        transactions: [], // Store full transaction details
      };
    }
    acc[dateKey].amount += item.amount;
    acc[dateKey].category.push(item.category);
    acc[dateKey].transactions.push({
      category: item.category,
      amount: item.amount,
    });

    // Set the display strings
    acc[dateKey].displayCategory = acc[dateKey].category.join(" + ");
    acc[dateKey].displayAmount = acc[dateKey].transactions
      .map((t) => `₹${t.amount.toLocaleString()}`)
      .join(" + ");

    return acc;
  }, {});

  // Convert to array and sort by date
  return Object.values(groupedByDate)
    .sort((a, b) => moment(a.month, "DD MMM") - moment(b.month, "DD MMM"))
    .map((day) => ({
      month: day.month,
      amount: day.amount,
      category: day.displayCategory, // This is what the tooltip will use
      displayAmount: day.displayAmount,
      transactions: day.transactions, // Keep full transaction details if needed
    }));
};
