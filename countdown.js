// BS countdown clock

const hugeNumber = 999999999999

const text = document.getElementById("Countdown")
const startTime = 1771563124953 // Some random fixed time in the past

setInterval(function() {
    var currentTime = Date.now()
    var difference = startTime - currentTime

    var res = Math.round(hugeNumber + difference / 1000) + " seconds"
    text.innerText = res
}, 1);