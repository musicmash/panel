var moment = require("moment");

export default (date) => {
    return moment(date).format("MMMM D, YYYY");
};
