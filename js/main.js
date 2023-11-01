// Import the Bootstrap bundle
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

(function(){
    // Targeted date
    var countDownDate = new Date("Jun 2, 2025 23:59:59").getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get current date and time
        var now = new Date().getTime();
        // Time to the date
        var timeToDate = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(timeToDate / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeToDate % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeToDate % (1000 * 60)) / 1000);
        // Display the result in the element with id="counter"
        document.getElementById("counter").innerHTML = days + "<small>d</small> " + hours + "<small>h</small> " + minutes + "<small>m</small> " + seconds + "<small>s</small> ";
        // If the countdown is finished, display a message
        if (timeToDate < 0) {
            clearInterval(x);
            document.getElementById("counter").innerHTML = "Countdown finished";
        }
    }, 1000);

})();
