export function convert(time) {
  let unix_timestamp = time;
  let date = new Date(unix_timestamp * 1000);
  let hours = date.getUTCHours();
  let indicator = "";
  if (hours > 11) {
    indicator = "PM";
  } else {
    indicator = "AM";
  }
  if (hours > 12) {
    hours -= 12;
  }
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime =
    hours +
    ":" +
    minutes.substr(-2) +
    ":" +
    seconds.substr(-2) +
    " " +
    indicator;

  if (
    formattedTime.substring(0, 1) === "5" &&
    formattedTime.substring(8, 11) === "PM"
  ) {
    return formattedTime;
  }
}