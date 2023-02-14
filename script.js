import moment from "moment";
import lodash from "lodash";





console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));
console.log(moment("2020-01-01").isValid());
console.log(moment("2020-14-01").isValid());
console.log(moment().add(7, 'days').calendar());
console.log(moment().add(7, 'month').calendar());
console.log(moment().add(7,"years").calendar());
console.log(moment().subtract(7,"days").calendar());
console.log(moment().subtract(7,"month").calendar());
console.log(moment().subtract(7,"years").calendar());
console.log(moment("2015-09-11").diff(moment("2014-11-11"),"days"));
console.log(moment("2015-09-16").diff(moment("2014-11-27"),"day"));
console.log(moment("2020-01-01").isAfter(moment("2018-01-01")));
console.log(moment("2010-01-01").isAfter(moment("2018-01-01")));
console.log(moment("2019").isLeapYear());
console.log(moment("2020").isLeapYear());




  




