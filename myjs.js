m = 0;
var y;
function start() {
    y = setInterval(() => {
        if (m == 1200) {
            clearInterval(y);
            m = 0;
        }
        else {
            m += 20;
            var x = document.getElementById("car");
            x.style.marginLeft = m + 'px';
        }
    }, 100);
}

function stop() {
    clearInterval(y);
}