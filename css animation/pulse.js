function pulse(event) {
    var e = document.createElement("div");
    e.setAttribute('class', 'circle');
    document.body.appendChild(e);
    e.style.left = event.pageX + 'px';
    e.style.top = event.pageY + 'px';

    setTimeout(function () {
        document.body.removeChild(e);
    }, 1000);
}

document.addEventListener('click', pulse);
