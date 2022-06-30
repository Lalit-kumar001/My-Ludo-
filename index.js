// var c1=1,c2=0,c3=0,c4=0,start=0;
var red = new Array();
var green = new Array();
var yellow = new Array();
var blue = new Array();
var win=new Array();


var c1 = 1;
var r = 0, g = 0,h=0,i=0,j=0;
var greenl = 4;
var temp = 0;

// select houses 
var greenh = document.querySelector('.ghouse');
var yellowh = document.querySelector('.yhouse');
var blueh = document.querySelector('.bhouse');
var redh = document.querySelector('.rhouse');

var green1 = document.getElementById("1-green-goti");
var green2 = document.getElementById("2-green-goti");
var green3 = document.getElementById("3-green-goti");
var green4 = document.getElementById("4-green-goti");


let greenobject = {
    green1: 0,
    green2: 0,
    green3: 0,
    green4: 0
};
// yellow-goti
var yellow1 = document.getElementById("1-yellow-goti");
var yellow2 = document.getElementById("2-yellow-goti");
var yellow3 = document.getElementById("3-yellow-goti");
var yellow4 = document.getElementById("4-yellow-goti");

// yellow2.style.backgroundColor="blue";
// yellow1.style.backgroundColor="pink";
// yellow3.style.backgroundColor="black";
// yellow4.style.backgroundColor="orange";

let yellowobject = {
    yellow1: 0,
    yellow2: 0,
    yellow3: 0,
    yellow4: 0
};

// blue goti 
var blue1 = document.getElementById("1-blue-goti");
var blue2 = document.getElementById("2-blue-goti");
var blue3 = document.getElementById("3-blue-goti");
var blue4 = document.getElementById("4-blue-goti");

let blueobject = {
    blue1: 0,
    blue2: 0,
    blue3: 0,
    blue4: 0
};

// red goti 
var red1 = document.getElementById("1-red-goti");
var red2 = document.getElementById("2-red-goti");
var red3 = document.getElementById("3-red-goti");
var red4 = document.getElementById("4-red-goti");

let redobject = {
    red1: 0,
    red2: 0,
    red3: 0,
    red4: 0
};




function numbering() {
    if (green1.classList.contains("katgayi")) {
        greenobject['green1'] = 0;
        green1.classList.remove("katgayi");
    }
    if (green2.classList.contains("katgayi")) {
        greenobject['green2'] = 0;
        green2.classList.remove("katgayi");
    }
    if (green3.classList.contains("katgayi")) {
        greenobject['green3'] = 0;
        green3.classList.remove("katgayi");
    }
    if (green4.classList.contains("katgayi")) {
        greenobject['green4'] = 0;
        green4.classList.remove("katgayi");
    }

    if (yellow1.classList.contains("katgayi")) {
        yellowobject['yellow1'] = 0;
        yellow1.classList.remove("katgayi");
    }
    if (yellow2.classList.contains("katgayi")) {
        yellowobject['yellow2'] = 0;
        yellow2.classList.remove("katgayi");
    }
    if (yellow3.classList.contains("katgayi")) {
        yellowobject['yellow3'] = 0;
        yellow3.classList.remove("katgayi");
    }
    if (yellow4.classList.contains("katgayi")) {
        yellowobject['yellow4'] = 0;
        yellow4.classList.remove("katgayi");
    }

    if (red1.classList.contains("katgayi")) {
        redobject['red1'] = 0;
        red1.classList.remove("katgayi");
    }
    if (red2.classList.contains("katgayi")) {
        redobject['red2'] = 0;
        red2.classList.remove("katgayi");
    }
    if (red3.classList.contains("katgayi")) {
        redobject['red3'] = 0;
        red3.classList.remove("katgayi");
    }
    if (red4.classList.contains("katgayi")) {
        redobject['red4'] = 0;
        red4.classList.remove("katgayi");
    }

    if (blue1.classList.contains("katgayi")) {
        blueobject['blue1'] = 0;
        blue1.classList.remove("katgayi");
    }
    if (blue2.classList.contains("katgayi")) {
        blueobject['blue2'] = 0;
        blue2.classList.remove("katgayi");
    }
    if (blue3.classList.contains("katgayi")) {
        blueobject['blue3'] = 0;
        blue3.classList.remove("katgayi");
    }
    if (blue4.classList.contains("katgayi")) {
        blueobject['blue4'] = 0;
        blue4.classList.remove("katgayi");
    }
}

var dice = document.getElementById("dice-image");
var number = 0;
dice.addEventListener("click", function () {
    var randomnumber = Math.random() * 6;
    number = (Math.floor(randomnumber) + 1);
    var randomimage = "images/dice" + number + ".png";
    dice.setAttribute("src", randomimage);
    console.log("c1 start"+c1 );
    if (c1 == 4 && temp != 3 && temp != 5) {
        c1 = 1;
        red1.classList.remove('animate');
        red2.classList.remove('animate');
        red3.classList.remove('animate');
        red4.classList.remove('animate');
    }

    

    if (c1 == temp) {
        c1++;
    }
    if (c1 == 1 && g == 1) {
        c1++;
    }

    if (c1 == 2 && h == 1) {
        c1++;
    }

    if (c1 == 3 && i == 1) {
        c1++
    }
    if (c1 == 4 && j == 1) {
        c1 = 1;
    }

   
    if (c1 == 1 && g == 0) {
        greenh.classList.add('animate');
        blueh.classList.remove('animate');
        redh.classList.remove('animate');
        yellowh.classList.remove('animate');

        // add class to button 
        green1.classList.add('animate');
        green2.classList.add('animate');
        green3.classList.add('animate');
        green4.classList.add('animate');

        // remove class from button 
        blue1.classList.remove('animate');
        blue2.classList.remove('animate');
        blue3.classList.remove('animate');
        blue4.classList.remove('animate');


        red1.classList.remove('animate');
        red2.classList.remove('animate');
        red3.classList.remove('animate');
        red4.classList.remove('animate');


        yellow1.classList.remove('animate');
        yellow2.classList.remove('animate');
        yellow3.classList.remove('animate');
        yellow4.classList.remove('animate');

        console.log(' 1st player ');
    }
    
    if (c1 == 2&&h==0) {
        greenh.classList.remove('animate');
        blueh.classList.remove('animate');
        redh.classList.remove('animate');
        yellowh.classList.add('animate');


        // add class to buttons 
        yellow1.classList.add('animate');
        yellow2.classList.add('animate');
        yellow3.classList.add('animate');
        yellow4.classList.add('animate');
        // remove classs from buttons
        green1.classList.remove('animate');
        green2.classList.remove('animate');
        green3.classList.remove('animate');
        green4.classList.remove('animate');


        red1.classList.remove('animate');
        red2.classList.remove('animate');
        red3.classList.remove('animate');
        red4.classList.remove('animate');


        blue1.classList.remove('animate');
        blue2.classList.remove('animate');
        blue3.classList.remove('animate');
        blue4.classList.remove('animate');


        console.log(' 2nd player');
    }

    
    if (c1 == 3&&i==0) {
        greenh.classList.remove('animate');
        blueh.classList.add('animate');
        redh.classList.remove('animate');
        yellowh.classList.remove('animate');
        console.log(' 3rd player');

        // add class to buttons 
        blue1.classList.add('animate');
        blue2.classList.add('animate');
        blue3.classList.add('animate');
        blue4.classList.add('animate');
        // remove classs from buttons
        green1.classList.remove('animate');
        green2.classList.remove('animate');
        green3.classList.remove('animate');
        green4.classList.remove('animate');


        red1.classList.remove('animate');
        red2.classList.remove('animate');
        red3.classList.remove('animate');
        red4.classList.remove('animate');


        yellow1.classList.remove('animate');
        yellow2.classList.remove('animate');
        yellow3.classList.remove('animate');
        yellow4.classList.remove('animate');

    }
    
    if (c1 == 4&&j==0) {
        console.log("agaya")
        greenh.classList.remove('animate');
        blueh.classList.remove('animate');
        yellowh.classList.remove('animate');
        redh.classList.add('animate');
        console.log(' 4th player');

        // add class to buttons 
        red1.classList.add('animate');
        red2.classList.add('animate');
        red3.classList.add('animate');
        red4.classList.add('animate');
        // remove classs from buttons
        green1.classList.remove('animate');
        green2.classList.remove('animate');
        green3.classList.remove('animate');
        green4.classList.remove('animate');


        yellow1.classList.remove('animate');
        yellow2.classList.remove('animate');
        yellow3.classList.remove('animate');
        yellow4.classList.remove('animate');


        blue1.classList.remove('animate');
        blue2.classList.remove('animate');
        blue3.classList.remove('animate');
        blue4.classList.remove('animate');
    }
    temp = c1;
    console.log('c1 end ' + c1);
    // console.log('temp end ' + temp);
});






// if(c1==1){
green1.addEventListener("click", function () {
    if (number == 6 && green1.classList.contains('nahi-khuli') && c1 == 1 && g == 0) {
        var newparent = document.querySelector(".g-start");
        newparent.appendChild(green1);
        green1.classList.add('stop');
        // green1.classList.add('size');
        green1.classList.remove('nahi-khuli');
        temp++;
        // c1++;
    }

    else if (green1.classList.contains('nahi-khuli') == 0 && c1 == 1 && g == 0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (greenobject['green1'] == 1) {
            greenobject['green1'] = 0;
        }
        if (greenobject['green1'] + number == 56) {
            green.push(1);
            green1.style.display = "none";
            // console.log('win');
            temp++;;
            c1--;
            // break;
        }
        if (greenobject['green1'] + number <= 55) {
            greenobject['green1'] = greenobject['green1'] + number;
        }
        
        let c = String(greenobject['green1']);
        // if(c=="9"||c=="28"||c=="45"||c=="2"||c=="20"||c=="7"||c=="28"||c=="41"||c=="56"||c=="64"){
        //     green1.classList.add("stop");
        // }
        // console.log(c);
        let s = ".green-cell-" + c;
        // console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            green1.classList.add('stop');
            // green1.classList.add('size2');
        }

        if (parentt.classList.contains('chida') == 0 && green1.classList.contains("stop")) {
            green1.classList.remove('stop');
        }


        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'g') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
                // var name=String(kati.getAttribute("name"));
                // console.log("name"+name);


            }
        }

        parentt.appendChild(green1);

        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }



        // green1.style.backgroundColor = "darkred";
    }
    if (green.length == 4) {
        g = 1;
        win.push("green");
        c1=2;
    }
});


green2.addEventListener("click", function () {
    if (number == 6 && green2.classList.contains('nahi-khuli') && c1 == 1 && g == 0) {
        var newparent = document.querySelector(".g-start");
        newparent.appendChild(green2);
        green2.classList.add('stop');
        green2.classList.remove('nahi-khuli');
        temp++;
        // c1++;
    }

    else if (green2.classList.contains('nahi-khuli') == 0 && c1 == 1 && g == 0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (greenobject['green2'] == 1) {
            greenobject['green2'] = 0;
        }
        if ((greenobject['green2'] + number) == 56) {
            green2.style.display = "none";
            green.push(2);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (greenobject['green2'] + number <= 55) {
            greenobject['green2'] = greenobject['green2'] + number;
        }
      
        let c = String(greenobject['green2']);

        // console.log(c);
        let s = ".green-cell-" + c;
        // console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            green2.classList.add('stop');
            // green2.classList.add("size2");
        }
        if (parentt.classList.contains('chida') == 0) {
            green2.classList.remove('stop');
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'r') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
        }

        parentt.appendChild(green2);

        // green1.style.backgroundColor = "darkred";

        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }
    }
    if (green.length == 4) {
        g = 1;
        win.push("green");
    }
});

green3.addEventListener("click", function () {
    if (number == 6 && green3.classList.contains('nahi-khuli') && c1 == 1 && g == 0) {
        var newparent = document.querySelector(".g-start");
        newparent.appendChild(green3);
        green3.classList.add('stop');
        green3.classList.remove('nahi-khuli');
        temp++;
        // c1++;
    }

    else if (green3.classList.contains('nahi-khuli') == 0 && c1 == 1 && g == 0) {
        // console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (greenobject['green3'] == 1) {
            greenobject['green3'] = 0;
        }

        if (greenobject['green3'] + number == 56) {

            green3.style.display = "none";
            green.push(3);
            // break;
            // console.log('win');
            temp++;
            c1--;
        }
        if (greenobject['green3'] + number <= 55) {
            greenobject['green3'] = greenobject['green3'] + number;
        }
       
        let c = String(greenobject['green3']);

        // console.log(c);
        let s = ".green-cell-" + c;
        // console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            green3.classList.add('stop');
            // green3.classList.add("size2");
        }
        if (parentt.classList.contains('chida') == 0) {
            green3.classList.remove('stop');
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'g') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
        }
        parentt.appendChild(green3);


        // green1.style.backgroundColor = "darkred";

        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }
    }

    if (green.length == 4) {
        g = 1;
        win.push("green");
    }
});

green4.addEventListener("click", function () {
    if (number == 6 && green4.classList.contains('nahi-khuli') && c1 == 1 && g == 0) {
        var newparent = document.querySelector(".g-start");
        newparent.appendChild(green4);
        green4.classList.add('stop');
        green4.classList.remove('nahi-khuli');
        temp++;
        // c1++;
    }

    else if (green4.classList.contains('nahi-khuli') == 0 && c1 == 1 && g == 0) {
        // console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (greenobject['green4'] == 1) {
            greenobject['green4'] = 0;
        }

        if (greenobject['green4'] + number == 56) {
            green4.style.display = "none";
            green.push(4);
            console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (greenobject['green4'] + number <= 55) {
            greenobject['green4'] = greenobject['green4'] + number;
        }
       
        let c = String(greenobject['green4']);


        // console.log(c);
        let s = ".green-cell-" + c;

        // console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            green4.classList.add('stop');
            // green4.classList.add("size2");
        }
        if (parentt.classList.contains('chida') == 0) {
            green4.classList.remove('stop');
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'g') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
        }
        parentt.appendChild(green4);

        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }
        // green1.style.backgroundColor = "darkred";
    }
    if (green.length == 4) {
        g = 1;
        win.push("green");
    }
    // console.log(c1);
});
// main();




yellow1.addEventListener("click", function () {
    if (number == 6 && yellow1.classList.contains('nahi-khuli') && c1 == 2&&h==0) {
        var newparent = document.querySelector(".y-start");
        newparent.appendChild(yellow1);
        yellow1.classList.add('stop');
        yellow1.classList.remove('nahi-khuli');
        temp++;
        // c1++;
    }

    else if (yellow1.classList.contains('nahi-khuli') == 0 && c1 == 2&h==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (yellowobject['yellow1'] == 1) {
            yellowobject['yellow1'] = 0;
        }

        if (yellowobject['yellow1'] + number == 56) {
            yellow1.style.display = "none";
            yellow.push(1);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (yellowobject['yellow1'] + number <= 55) {
            yellowobject['yellow1'] = yellowobject['yellow1'] + number;
        }
       
        let c = String(yellowobject['yellow1']);
        let s = ".yellow-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            yellow1.classList.add('stop');
        }
        if (parentt.classList.contains('chida') == 0) {
            yellow1.classList.remove('stop');
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'y') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
        }

        parentt.appendChild(yellow1);

        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }
    }
    if (yellow.length == 4) {
        h = 1;
        win.push("yellow");
        c1=3
        temp=2;
    }
});

yellow2.addEventListener("click", function () {
    if (number == 6 && yellow2.classList.contains('nahi-khuli') && c1 == 2&&h==0) {
        var newparent = document.querySelector(".y-start");
        newparent.appendChild(yellow2);
        yellow2.classList.add('stop');
        yellow2.classList.remove('nahi-khuli');
        temp++;
        // c1++;
    }

    else if (yellow2.classList.contains('nahi-khuli') == 0 && c1 == 2&&h==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (yellowobject['yellow2'] == 1) {
            yellowobject['yellow2'] = 0;
        }

        if (yellowobject['yellow2'] + number == 56) {
            yellow2.style.display = "none";
            yellow.push(2);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (yellowobject['yellow2'] + number < 56) {
            yellowobject['yellow2'] = yellowobject['yellow2'] + number;
        }
        
        let c = String(yellowobject['yellow2']);
        let s = ".yellow-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            yellow2.classList.add('stop');
        }
        if (parentt.classList.contains('chida') == 0) {
            yellow2.classList.remove('stop');
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'y') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
        }
        console.log("yellow2");
        parentt.appendChild(yellow2);


        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }
    }

    if (yellow.length == 4) {
        h = 1;
        c1=3;
        temp=2;
        win.push("yellow");
    }
    // console.log(c1);
});

yellow3.addEventListener("click", function () {
    if (number == 6 && yellow3.classList.contains('nahi-khuli') && c1 == 2&&h==0) {
        var newparent = document.querySelector(".y-start");
        newparent.appendChild(yellow3);
        yellow3.classList.add('stop');
        yellow3.classList.remove('nahi-khuli');
        temp++;
        // c1++;
    }

    else if (yellow3.classList.contains('nahi-khuli') == 0 && c1 == 2&&h==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (yellowobject['yellow3'] == 1) {
            yellowobject['yellow3'] = 0;
        }

        if (yellowobject['yellow3'] + number == 56) {
            yellow3.style.display = "none";
            yellow.push(3);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (yellowobject['yellow3'] + number < 56) {
            yellowobject['yellow3'] = yellowobject['yellow3'] + number;
        }
        
        let c = String(yellowobject['yellow3']);
        let s = ".yellow-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            yellow3.classList.add('stop');
        }
        if (parentt.classList.contains('chida') == 0) {
            yellow3.classList.remove('stop');
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'y') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
        }
        parentt.appendChild(yellow3);


        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }
    }
    if (yellow.length == 4) {
        h = 1;
        win.push("yellow");
        c1=3;
        temp=2;
    }
    // console.log(c1);
});

yellow4.addEventListener("click", function () {
    if (number == 6 && yellow4.classList.contains('nahi-khuli') && c1 == 2&&h==0) {
        var newparent = document.querySelector(".y-start");
        newparent.appendChild(yellow4);
        yellow4.classList.add('stop');
        yellow4.classList.remove('nahi-khuli');
        temp++;
        // c1++;
    }

    else if (yellow4.classList.contains('nahi-khuli') == 0 && c1 == 2&&h==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (yellowobject['yellow4'] == 1) {
            yellowobject['yellow4'] = 0;
        }

        if (yellowobject['yellow4'] + number == 56) {
            yellow4.style.display = "none";
            yellow.push(4);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (yellowobject['yellow4'] + number < 56) {
            yellowobject['yellow4'] = yellowobject['yellow4'] + number;
        }
        
        let c = String(yellowobject['yellow4']);
        let s = ".yellow-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            yellow4.classList.add('stop');
        }
        if (parentt.classList.contains('chida') == 0) {
            yellow4.classList.remove('stop');
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'y') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
        }
        parentt.appendChild(yellow4);

        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }
    }
    if (yellow.length == 4) {
        h = 1;
        win.push("yellow");
        c1=3;
        temp=2;
    }
   
});

// main();



blue1.addEventListener("click", function () {
    if (number == 6 && blue1.classList.contains('nahi-khuli') && c1 == 3&&i==0) {
        var newparent = document.querySelector(".b-start");
        newparent.appendChild(blue1);
        blue1.classList.add('stop');
        blue1.classList.remove('nahi-khuli');
        temp += 2;
        // c1++;
    }

    else if (blue1.classList.contains('nahi-khuli') == 0 && c1 == 3&&i==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (blueobject['blue1'] == 1) {
            blueobject['blue1'] = 0;
        }

        if (blueobject['blue1'] + number == 56) {
            blue1.style.display = "none";
            blue.push(1);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (blueobject['blue1'] + number < 56) {
            blueobject['blue1'] = blueobject['blue1'] + number;
        }
        
        let c = String(blueobject['blue1']);
        let s = ".blue-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            blue1.classList.add('stop');
        }
        if (parentt.classList.contains('chida') == 0) {
            blue1.classList.remove('stop');
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'b') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
        }
        parentt.appendChild(blue1);

        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }
    }
    if (blue.length == 4) {
        i= 1;
        win.push("blue");
        c1=4;
        temp=3;
    }
  
});

blue2.addEventListener("click", function () {
    if (number == 6 && blue2.classList.contains('nahi-khuli') && c1 == 3&i==0) {
        var newparent = document.querySelector(".b-start");
        newparent.appendChild(blue2);
        blue2.classList.add('stop');
        blue2.classList.remove('nahi-khuli');
        temp += 2;
        // c1++;
    }

    else if (blue2.classList.contains('nahi-khuli') == 0 && c1 == 3&i==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (blueobject['blue2'] == 1) {
            blueobject['blue2'] = 0;
        }

        if (blueobject['blue2'] + number == 56) {
            blue2.style.display = "none";
            blue.push(2);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (blueobject['blue2'] + number < 56) {
            blueobject['blue2'] = blueobject['blue2'] + number;
        }
       
        let c = String(blueobject['blue2']);
        let s = ".blue-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            blue2.classList.add('stop');
        }
        if (parentt.classList.contains('chida') == 0) {
            blue2.classList.remove('stop');
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'b') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
        }
        parentt.appendChild(blue2);

        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }
    }
    if (blue.length == 4) {
        i= 1;
        win.push("blue");
        c1=4;
        temp=3;
    }
    // console.log(c1);
});

blue3.addEventListener("click", function () {
    if (number == 6 && blue3.classList.contains('nahi-khuli') && c1 == 3&&i==0) {
        var newparent = document.querySelector(".b-start");
        newparent.appendChild(blue3);
        blue3.classList.add('stop');
        blue3.classList.remove('nahi-khuli');
        temp += 2;
        // c1++;
    }

    else if (blue3.classList.contains('nahi-khuli') == 0 && c1 == 3&&i==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (blueobject['blue3'] == 1) {
            blueobject['blue3'] = 0;
        }

        if (blueobject['blue3'] + number == 56) {
            blue3.style.display = "none";
            blue.push(3);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (blueobject['blue3'] + number < 56) {
            blueobject['blue3'] = blueobject['blue3'] + number;
        }
        
        let c = String(blueobject['blue3']);
        let s = ".blue-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            blue3.classList.add('stop');
        }
        if (parentt.classList.contains('chida') == 0) {
            blue3.classList.remove('stop');
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'b') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
        }
        parentt.appendChild(blue3);

        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }
    }
    if (blue.length == 4) {
        i= 1;
        win.push(blue);
        c1=4;
        temp=3;
        win.push("blue");
    }
    // console.log(c1);
});

blue4.addEventListener("click", function () {
    if (number == 6 && blue4.classList.contains('nahi-khuli') && c1 == 3&&i==0) {
        var newparent = document.querySelector(".b-start");
        newparent.appendChild(blue4);
        blue4.classList.add('stop');
        blue4.classList.remove('nahi-khuli');
        temp += 2;
        // c1++;
    }

    else if (blue4.classList.contains('nahi-khuli') == 0 && c1 == 3&&i==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (blueobject['blue4'] == 1) {
            blueobject['blue4'] = 0;
        }

        if (blueobject['blue4'] + number == 56) {
            blue4.style.display = "none";
            blue.push(4);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (blueobject['blue4'] + number < 56) {
            blueobject['blue4'] = blueobject['blue4'] + number;
        }
       
        let c = String(blueobject['blue4']);
        let s = ".blue-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            blue4.classList.add('stop');
        }
        if (parentt.classList.contains('chida') == 0) {
            blue4.classList.remove('stop');
        }

        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'b') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
        }
        parentt.appendChild(blue4);

        if (number == 6) {

            temp++;
        }
        else {
            c1++;
        }
    }
    if (blue.length == 4) {
        i= 1;
        c1=4;
        temp=3;
        win.push("blue");
    }
    //    console.log(c1);
});


// main();



red1.addEventListener("click", function () {
    if (number == 6 && red1.classList.contains('nahi-khuli') && c1 == 4&&j==0) {
        var newparent = document.querySelector(".r-start");
        newparent.appendChild(red1);
        red1.classList.add('stop');
        red1.classList.remove('nahi-khuli');
        temp++;
        n = 1;
        // c1=1;
    }

    else if (red1.classList.contains('nahi-khuli') == 0 && c1 == 4&&j==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (redobject['red1'] == 1) {
            redobject['red1'] = 0;
        }

        if (redobject['red1'] + number == 56) {
            red1.style.display = "none";
            red.push(1);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (redobject['red1'] + number < 56) {
            redobject['red1'] = redobject['red1'] + number;
        }
        
        let c = String(redobject['red1']);
        let s = ".red-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            red1.classList.add('stop');
        }

        if (parentt.classList.contains('chida') == 0) {
            red1.classList.remove('stop');
        }
        if (red1.classList.contains("size") == 1) {
            red1.classList.remove("size");
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'r') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
            else {
                kati.classList.add("size");
                red1.classList.add("size");
            }


        }
        parentt.appendChild(red1);

        if (number == 6) {

            temp++;
        }
        else {
            c1 = 1;
        }

    }
    if (red.length == 4) {
        j= 1;
        win.push("red");
    }

    // console.log(c1);
});

red2.addEventListener("click", function () {
    if (number == 6 && red2.classList.contains('nahi-khuli') && c1 == 4&&j==0) {
        var newparent = document.querySelector(".r-start");
        newparent.appendChild(red2);
        red2.classList.add('stop');

        red2.classList.remove('nahi-khuli');
        temp++;
        n = 1;
        // c1=1;
    }

    else if (red2.classList.contains('nahi-khuli') == 0 && c1 == 4&&j==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (redobject['red2'] == 1) {
            redobject['red2'] = 0;
        }

        if (redobject['red2'] + number == 56) {
            red2.style.display = "none";
            red.push(2);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }

        if (redobject['red2'] + number < 56) {
            redobject['red2'] = redobject['red2'] + number;
        }
       
        let c = String(redobject['red2']);
        let s = ".red-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            red2.classList.add('stop');
        }

        if (parentt.classList.contains('chida') == 0) {
            red2.classList.remove('stop');
        }

        if (red2.classList.contains("size") == 1) {
            red2.classList.remove("size");
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'r') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
            else {
                kati.classList.add("size");
                red2.classList.add("size");
            }
        }
        parentt.appendChild(red2);
        if (number == 6) {

            temp++;
        }
        else {
            c1 = 1;
        }
    }
    if (red.length == 4) {
        j= 1;
        win.push("red");
    }

});

red3.addEventListener("click", function () {
    if (number == 6 && red3.classList.contains('nahi-khuli') && c1 == 4&&j==0) {
        var newparent = document.querySelector(".r-start");
        newparent.appendChild(red3);
        red3.classList.add('stop');

        red3.classList.remove('nahi-khuli');
        temp++;
        n = 1;
        // c1=1;
    }

    else if (red3.classList.contains('nahi-khuli') == 0 && c1 == 4&&j==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (redobject['red3'] == 1) {
            redobject['red3'] = 0;
        }


        if (redobject['red3'] + number == 56) {
            red3.style.display = "none";
            red.push(3);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }

        if (redobject['red3'] + number < 56) {
            redobject['red3'] = redobject['red3'] + number;
        }
     
        let c = String(redobject['red3']);
        let s = ".red-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            red3.classList.add('stop');
        }
        if (parentt.classList.contains('chida') == 0) {
            red3.classList.remove('stop');
        }
        if (red3.classList.contains("size") == 1) {
            red3.classList.remove("size");
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'r') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
            else {
                kati.classList.add("size");
                red3.classList.add("size");
            }
        }
        parentt.appendChild(red3);
        if (number == 6) {

            temp++;
        }
        else {
            c1 = 1;
        }
    }
    if (red.length == 4) {
        j= 1;
        win.push("red");
    }

});

red4.addEventListener("click", function () {
    if (number == 6 && red4.classList.contains('nahi-khuli') && c1 == 4&&j==0) {
        var newparent = document.querySelector(".r-start");
        newparent.appendChild(red4);
        red4.classList.add('stop');

        red4.classList.remove('nahi-khuli');
        temp++;
        n = 1;
        // c1=1;
    }

    else if (red4.classList.contains('nahi-khuli') == 0 && c1 == 4&&j==0) {
        console.log('nothing');
        // var st = String(red1);
        // red1.style.backgroundColor = "grey";
        if (redobject['red4'] == 1) {
            redobject['red4'] = 0;
        }


        if (redobject['red4'] + number == 56) {
            red4.style.display = "none";
            red.push(4);
            // console.log('win');
            temp++;
            c1--;
            // break;
        }
        if (redobject['red4'] + number < 56) {
            redobject['red4'] = redobject['red4'] + number;
        }
       
        let c = String(redobject['red4']);
        let s = ".red-cell-" + c;
        console.log(s);
        var parentt = document.querySelector(s);
        if (parentt.classList.contains('chida') == 1) {
            red4.classList.add('stop');
        }
        if (parentt.classList.contains('chida') == 0) {
            red4.classList.remove('stop');
        }
        if (red4.classList.contains("size") == 1) {
            red4.classList.remove("size");
            console.log("hi change");
        }
        if (parentt.childElementCount > 0 && parentt.classList.contains('chida') == 0) {
            var kati = parentt.firstElementChild;
            var st = String(kati.getAttribute('id'));
            if (st[2] != 'r') {
                var sum = st + "-box"
                var newparents = document.getElementById(sum);
                newparents.appendChild(kati);
                kati.classList.add('katgayi');
                kati.classList.add('nahi-khuli')
                numbering();
            }
            else {
                kati.classList.add("size");
                red4.classList.add("size");
            }
        }
        parentt.appendChild(red4);
        if (number == 6) {

            temp++;
        }
        else {
            c1 = 1;
        }

    }
    if (red.length == 4) {
        j= 1;
        win.push("red");
    }

});

if(win.length==1){
    greenh.classList.remove('animate');
    blueh.classList.remove('animate');
    redh.classList.remove('animate');
    yellowh.classList.remove('animate');

    // add class to button 
    green1.classList.remove('animate');
    green2.classList.remove('animate');
    green3.classList.remove('animate');
    green4.classList.remove('animate');

    // remove class from button 
    blue1.classList.remove('animate');
    blue2.classList.remove('animate');
    blue3.classList.remove('animate');
    blue4.classList.remove('animate');


    red1.classList.remove('animate');
    red2.classList.remove('animate');
    red3.classList.remove('animate');
    red4.classList.remove('animate');


    yellow1.classList.remove('animate');
    yellow2.classList.remove('animate');
    yellow3.classList.remove('animate');
    yellow4.classList.remove('animate');

    var res=document.getElementById('result');
    res.innerHTML=win;
    c1=-1;
}
// main();






