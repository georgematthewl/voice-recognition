export function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

export function formatDate() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateTime = new Date();

  const date = `${dateTime.getDate()} ${months[dateTime.getMonth()]} ${dateTime.getFullYear()}`;
  const time = `${formatTime(dateTime.getHours())}:${formatTime(dateTime.getMinutes())}:${formatTime(dateTime.getSeconds())}`

  return `${date} - ${time}`;
}
