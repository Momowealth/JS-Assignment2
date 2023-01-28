function lifeInDaysWeeksMonths(age){

    var MyageInDays = (90 - age) * 365;
    var MyageInWeeks = (90 - age) * 52;
    var MyageInMonths = (90 - age) * 12;
    console.log("I have " + MyageInDays + "Days " + MyageInWeeks + "Weeks " + MyageInMonths + "Months ");
}
lifeInDaysWeeksMonths(24)
