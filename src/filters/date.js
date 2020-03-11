var moment = require('moment');

export default date => {
  return moment(date, "2013-02-08T09:30:26Z").format("MMMM D, YYYY");
};
