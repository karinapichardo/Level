window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top < 80) {
        document.querySelector('nav').style.height = "8em";
    } else if (top > 80) {
        document.querySelector('nav').style.height = "6em";
    }
}

let listItem = document.querySelectorAll('#main-nav li');

listItem.forEach(item => {
    item.addEventListener('click', function () {
        listItem.forEach(navItem => navItem.classList.remove('active'));
        this.classList.add('active');
    })
})

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
