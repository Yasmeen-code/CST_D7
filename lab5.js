imgobj = document.querySelector("img");
prev = document.getElementById("prev");
next = document.getElementById("next");
slideshowBtn = document.getElementById("slideshow");
stopBtn = document.getElementById("stop");
counter = 1;
let intervalId = null;

next.addEventListener('click', function () {
    counter++;
    if (counter > 6)
        counter = 1;
    imgobj.src = counter + ".png";
});//next

prev.addEventListener('click', function () {
    counter--;
    if (counter < 1)
        counter = 6;
    imgobj.src = counter + ".png";
});//prev

slideshowBtn.addEventListener('click', function () {
    if (intervalId) return; 
    intervalId = setInterval(() => {
        counter++;
        if (counter > 6)
            counter = 1;
        imgobj.src = counter + ".png";
    }, 600); 
});

stopBtn.addEventListener('click', function () {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
});
