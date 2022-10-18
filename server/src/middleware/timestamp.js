const timeStamp = () => {
  let year = new Date().getFullYear();

  let month = new Date().getMonth();

  month = month < 9 ? `0${month + 1}` : month + 1;

  let day = new Date().getDate();

  day = day < 10 ? `0${day}` : day;

  let hour = new Date().getHours();

  hour = hour < 10 ? `0${hour}` : hour;

  let minute = new Date().getMinutes();

  minute = minute < 10 ? `0${minute}` : minute;

  let second = new Date().getSeconds();

  second = second < 10 ? `0${second}` : second;

  return `${year}${month}${day}${hour}${minute}${second}`;
};

module.exports = timeStamp;
