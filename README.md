## Odd or Even Day

Given a timestamp (number of milliseconds since the Unix epoch), return:

- "odd" if the day of the month for that timestamp is odd.
- "even" if the day of the month for that timestamp is even.
- For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) is an odd number.

### Solution

The sticking point for me here was using `.toDate()` vs `.toUTCDate()`

- `.toDate()` returns the day according to your computer's local timezone
- `.toUTCDate()`returns the day regardless of which timezone the computer is located!

1. Used `new Date(timestamp).toUTCDate()` to return a date digit (0-31)
2. Checked if this was modulo 2 === 0 to check if it was even or odd.
