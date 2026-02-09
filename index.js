// Odd or Even Day
// Given a timestamp (number of milliseconds since the Unix epoch), return:

// "odd" if the day of the month for that timestamp is odd.
// "even" if the day of the month for that timestamp is even.
// For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) is an odd number.

function oddOrEvenDay(timestamp) {
  // console.log(timestamp)
  // console.log(new Date(timestamp).getDate())
  console.log(new Date(timestamp));
  const date = new Date(timestamp).getUTCDate();

  console.log(date);
  return date % 2 === 0 ? 'even' : 'odd';

  // return timestamp;
}

oddOrEvenDay(1769472000000); // odd
oddOrEvenDay(1769444440000); // even
oddOrEvenDay(6739456780000); // odd
oddOrEvenDay(1); // odd
oddOrEvenDay(86400000); // even
