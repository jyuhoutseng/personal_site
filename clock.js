// Displays the current time on the homepage

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    
}
setInterval(displayTime, 10);

// Gets the latest time / date //

function lastedit (){
    var latestDate = new Date(document.lastModified);
    document.getElementById("lastmod").innerHTML = latestDate;
}