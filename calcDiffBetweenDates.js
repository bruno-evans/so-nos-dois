function calcDiffBetweenDates(initDate, finalDate) {
    let sec = 0, min = 0, hour = 0, day = 0, month = 0, year = 0;

    sec += finalDate.getSeconds() - initDate.getSeconds();
    if(sec < 0) {
        sec += 60;
        min--;
    }
    
    min += finalDate.getMinutes() - initDate.getMinutes();
    if(min < 0) {
        min += 60;
        hour--;
    }

    hour += finalDate.getHours() - initDate.getHours();
    if(hour < 0) {
        hour += 24;
        day--;
    }

    day += finalDate.getDate() - initDate.getDate();
    if(day < 0) {
        day += finalDate.getMonth() == 1 ? ((new Date(finalDate.getFullYear(), finalDate.getMonth(), 1)) - (new Date(finalDate.getFullYear()-1, 12, 1))) / 1000 / 60 / 60 / 24 : ((new Date(finalDate.getFullYear(), finalDate.getMonth(), 1)) - (new Date(finalDate.getFullYear(), finalDate.getMonth()-1, 1))) / 1000 / 60 / 60 / 24;
        month--;
    }

    month += finalDate.getMonth() - initDate.getMonth();
    if(month < 0) {
        month += 12
        year--;
    }

    year += finalDate.getFullYear() - initDate.getFullYear();

    return {
        sec, min, hour, day, month, year
    }
}

export default calcDiffBetweenDates;