// Import the Bootstrap bundle
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

(function(){
    var countDownDate = new Date("Jun 2, 2025 23:59:59").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var timeToDate = countDownDate - now;
        var days = Math.floor(timeToDate / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeToDate % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeToDate % (1000 * 60)) / 1000);
        document.getElementById("counter").innerHTML = "<p>Your offer ends in:</p><div class='row'><div class='col'><span>DAYS</span> " + days +
            "</div><div class='col'><span>HOURS</span>" + hours + "</div><div class='col'><span>MINUTES</span>" + minutes +
            "</div><div class='col'><span>SECONDS</span> " + seconds + "</div></div> ";
        if (timeToDate < 0) {
            clearInterval(x);
            document.getElementById("counter").innerHTML = "Countdown finished";
        }
    }, 1000);
})();
