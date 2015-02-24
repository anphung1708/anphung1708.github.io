var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var answer =prompt("How old are you?");
answer= secondsPerMin*minsPerHour*hoursPerDay*daysPerWeek*weeksPerYear;
document.write("You have been alive "+answer+" seconds in the earth!");