window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top < 80) {
        document.querySelector('nav').style.height = "8em";
    } else if (top > 80) {
        document.querySelector('nav').style.height = "6em";
    }
}

function firstDot() {
    document.getElementById('#first-content').style.display = 'block';
    document.querySelector('#second-content').style.display = 'block';
    document.querySelector('#third-content').style.display = 'none';
    document.querySelector('#fourth-content').style.display = 'none';
    document.querySelector('#fifth-content').style.display = 'none';
    document.querySelector('#sixth-content').style.display = 'none';
}

function secondDot() {
    document.getElementById('#first-content').style.display = 'none';
    document.querySelector('#second-content').style.display = 'block';
    document.querySelector('#third-content').style.display = 'block';
    document.querySelector('#fourth-content').style.display = 'none';
    document.querySelector('#fifth-content').style.display = 'none';
    document.querySelector('#sixth-content').style.display = 'none';
}

function thirdDot() {
    document.getElementById('#first-content').style.display = 'none';
    document.querySelector('#second-content').style.display = 'none';
    document.querySelector('#third-content').style.display = 'block';
    document.querySelector('#fourth-content').style.display = 'block';
    document.querySelector('#fifth-content').style.display = 'none';
    document.querySelector('#sixth-content').style.display = 'none';
}

function fourthDot() {
    document.getElementById('#first-content').style.display = 'none';
    document.querySelector('#second-content').style.display = 'none';
    document.querySelector('#third-content').style.display = 'none';
    document.querySelector('#fourth-content').style.display = 'block';
    document.querySelector('#fifth-content').style.display = 'block';
    document.querySelector('#sixth-content').style.display = 'none';
}

function fifthDot() {
    document.getElementById('#first-content').style.display = 'none';
    document.querySelector('#second-content').style.display = 'none';
    document.querySelector('#third-content').style.display = 'none';
    document.querySelector('#fourth-content').style.display = 'none';
    document.querySelector('#fifth-content').style.display = 'block';
    document.querySelector('#sixth-content').style.display = 'block';
}
