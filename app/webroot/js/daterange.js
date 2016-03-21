/**
 * Created by DavidOyeku on 18/10/15.
 */
/*
 Using moment.js
 uses the position clicked by the user on the control panel
 to determine what timespan to query the database with
 */
var timeArr = [
'Today','Yesterday','This week','Last Week','This Month','Last Month',
'Last 3 Months', 'Last 6 Months', 'This Year', 'All'
];

var format = "YYYY-MM-DD HH:mm:ss";

function getDateRange(pos) {
    var fromDate, toDate;
    switch (pos) {
        case timeArr[0]: //today
            toDate = moment().endOf('day').format(format);
            fromDate = moment().startOf('day').format(format);

            break;
        case timeArr[1]: //yesterday
            fromDate = moment().subtract(1, 'days').startOf('day').format(format);
            toDate = moment().subtract(1, 'days').endOf('day').format(format);

            break;
        case timeArr[2]: //this week

            fromDate = moment().startOf('isoWeek').format(format);
            toDate = moment().endOf('isoWeek').format(format);

            break;
        case timeArr[3]: //last week
            fromDate = moment().subtract(1, 'weeks').startOf('isoWeek').format(format);
            toDate = moment().subtract(1, 'weeks').endOf('isoWeek').format(format);
            break;
        case timeArr[4]: //this month
            fromDate = moment().startOf('month').format(format);
            toDate = moment().endOf('month').format(format);
            break;
        case timeArr[5]: //last month
            fromDate = moment().subtract(1, 'months').startOf('month').format(format);
            toDate = moment().subtract(1, 'months').endOf('month').format(format);
            break;
        case timeArr[6]: //last 3 months
            fromDate = moment().subtract(3, 'months').startOf('month').format(format);
            toDate = moment().endOf('month').format(format);
            break;
        case timeArr[7]: //last 6 months
            fromDate = moment().subtract(6, 'months').startOf('month').format(format);
            toDate = moment().endOf('month').format(format);
            break;
        case timeArr[8]: //this year
            fromDate = moment().startOf('year').format(format);
            toDate = moment().endOf('year').format(format);
            break;
        case timeArr[9]: //all
            return {
                from: moment("2013-1-1").format(format),
                to: moment().format(format)
            };
            break;
        default:
            break;

    }
    //return the dates
    return {
        from: fromDate,
        to: toDate
    };
}