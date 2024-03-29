function openNav() {
    console.log(screen.width)
    if (screen.width >= 700) {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        document.getElementById("open").style.display = "None";
        document.getElementById("main-2").style.marginLeft = "200px";
    }
    else {
        document.getElementById("mySidebar").style.display = "Block";
    }
}


function closeNav() {
    if (screen.width >= 700) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("open").style.display = "inline";
        document.getElementById("main-2").style.marginLeft = "0";
    }
    else {
        document.getElementById("mySidebar").style.display = "None";
    }

}

function about(Id, alignment) {
    console.log(Id);
    if (Id == 'Skills') {
        box = document.getElementById("animated-card");
        box.innerHTML = 'ASP .NET MVC<br>Javascript<br>Robot Framework<br>Java<br>DB2';
        box.scrollIntoView({ block: alignment });
    }
    else {
        document.getElementById(Id).scrollIntoView({ block: alignment });
    }

}

if (screen.width <= 700) {
    document.getElementById("Home").innerHTML = 'Skills';
    document.getElementById("skill_cube").style.display = 'none';
}

/*var skills = ["JavaScript", "Python", "C#", "Robot Framework"];



while (1 == 1) {
    skills.forEach(myfunction);
}
function myfunction(item) {
    console.log(item);
    card = document.getElementById("animated-card")
    card.innerHTML = item;
    setTimeout(myfunction(item)
        , 5000);
};*/







var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 130 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

function showContent(id) {
    card_header = document.getElementById("card-header")
    card_title = document.getElementById("card-title")
    card = document.getElementById("card-text")

    switch (id) {
        case "Academics":
            card_header.innerHTML = 'My self can be'
            card_title.innerHTML = 'Described as'
            card.innerHTML = 'An Electrical Engineer ' +
                'who is passionate about coding ' +
                'and Data management.'
            break;
        case "Plan":
            card_header.innerHTML = 'The Plan is'
            card_title.innerHTML = 'To learn'
            card.innerHTML = 'More and more skills ' +
                'and utilize them to create ' +
                'something valuable.'
            break;
        case "Experience":
            card_header.innerHTML = 'Skills that are'
            card_title.innerHTML = 'In the Bucket'
            card.innerHTML = 'Automation Script writer in Robot Framework <br>' +
                'A Business Analyst <br>' +
                'An SQL Developer <br>' +
                'A little hands on Web development'
            break;
        case "Candy":
            card_header.innerHTML += ' 🍬 '

            break;

    }
}

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "garudbot@gmail.com",
        Password: "Qwertypasta@2",
        To: 'ianubhavverma@gmail.com',
        From: "garudbot@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
        Attachments: [
            {
                name: "File_Name_with_Extension",
                path: "Full Path of the file"
            }]
    })
        .then(function (message) {
            alert("Mail has been sent successfully")
        });
}

var cube = document.querySelector('.cube');

var perspective = 800;
cube.style.transform = 'perspective(' + perspective + 'px)';

// create an array of rotation angles to loop through
var rotationAngles = [0, 90, 180, 270];

// set up a variable to keep track of the current rotation angle
var currentRotationAngle = 0;

// rotate the cube every 5 seconds
setInterval(function () {
    cube.style.transform += 'rotateY(90deg)';
}, 1000);

document.addEventListener('mousemove', function (e) {
    var x = e.clientX / window.innerWidth * 360;
    var y = e.clientY / window.innerHeight * 360;
    cube.style.transform = 'rotateX(' + y + 'deg) rotateY(' + x + 'deg)';
});

document.addEventListener('touchmove', function (e) {
    var x = e.touches[0].clientX / window.innerWidth * 360;
    var y = e.touches[0].clientY / window.innerHeight * 360;
    cube.style.transform = 'rotateX(' + y + 'deg) rotateY(' + x + 'deg)';
});

// calculate the current rotation angle
var regex = /rotateY\((-?\d+)deg\)/;
var match = regex.exec(cube.style.transform);
if (match) {
    currentRotationAngle = parseInt(match[1], 10);
}

// rotate the cube 360 degrees in the next direction in the array
var nextRotationAngleIndex = rotationAngles.indexOf(currentRotationAngle) + 1;
if (nextRotationAngleIndex >= rotationAngles.length) {
    nextRotationAngleIndex = 0;
}
var nextRotationAngle = rotationAngles[nextRotationAngleIndex];
var rotation = 'rotateY(' + nextRotationAngle + 'deg)';
cube.addEventListener('animationiteration', function () {
    cube.style.transform = 'perspective(' + perspective + 'px) ' + rotation;
    currentRotationAngle = nextRotationAngle;
    nextRotationAngleIndex = rotationAngles.indexOf(currentRotationAngle) + 1;
    if (nextRotationAngleIndex >= rotationAngles.length) {
        nextRotationAngleIndex = 0;
    }
    nextRotationAngle = rotationAngles[nextRotationAngleIndex];
    rotation = 'rotateY(' + nextRotationAngle + 'deg)';
});

document.addEventListener('mousemove', function (e) {
    var cursorTrail = document.querySelector('.cursor-trail');
    var trailElement = document.createElement('div');
    trailElement.classList.add('trail');
    trailElement.style.left = e.clientX + 'px';
    trailElement.style.top = e.clientY + 'px';
    cursorTrail.appendChild(trailElement);
    setTimeout(function () {
        cursorTrail.removeChild(trailElement);
    }, 500);
});
