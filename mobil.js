// let movies = [];
// // example {id:1592304983049, title: 'Deadpool', year: 2015}
// const addMovie = (ev)=>{
//     ev.preventDefault();  //to stop the form submitting
//     let movie = {
//         id: Date.now(),
//         title: document.getElementById('title').value,
//         title: document.getElementById('title1').value,
//         title: document.getElementById('title2').value,
//         title: document.getElementById('title3').value,
//         title: document.getElementById('title4').value,
//     }
//     movies.push(movie);
//     // document.forms[0].reset(); // to clear the form for the next entries
//     // //document.querySelector('form').reset();

//     //for display purposes only
//     console.warn('added' , {movies} );
//     let pre = document.querySelector('#msg pre');
//     pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

//     //saving to localStorage
//     localStorage.setItem('MyMovieList', JSON.stringify(movies) );
// }
// document.addEventListener('DOMContentLoaded', ()=>{
//     document.getElementById('btn').addEventListener('click', addMovie);
// });

//? x rechnen start
// function add() {
//     a = parseInt(document.getElementById('a').value);
//     b = parseInt(document.getElementById('b').value);
//     c = parseInt(document.getElementById('c').value);
//     d = parseInt(document.getElementById('d').value);
//     e = parseInt(document.getElementById('e').value);

//     z = a * b * c * d * e;
//     document.getElementById('z').value = z;
// }


//! A satir start
function add1() {
    a = Number(document.getElementById('a').value);
    a1 = Number(document.getElementById('a1').value);
    a2 = Number(document.getElementById('a2').value);
    a3 = Number(document.getElementById('a3').value);
    // a4 = parseInt(document.getElementById('a4').value);
    a5 = Number(document.getElementById('a5').value);

    z1 = a * a1 * a2 * a3 * a5;
    document.getElementById('z1').value = z1;
}
//! A satir end

//! B satir start
function add2() {
    b = Number(document.getElementById('b').value);
    b1 = Number(document.getElementById('b1').value);
    b2 = Number(document.getElementById('b2').value);
    b3 = Number(document.getElementById('b3').value);
    // b4 = parseInt(document.getElementById('b4').value);
    b5 = Number(document.getElementById('b5').value);

    z2 = b * b1 * b2 * b3 * b5;
    document.getElementById('z2').value = z2;
}
//! B satir end

//! C satir start
function add3() {
    c = Number(document.getElementById('c').value);
    c1 = Number(document.getElementById('c1').value);
    c2 = Number(document.getElementById('c2').value);
    c3 = Number(document.getElementById('c3').value);
    // c4 = parseInt(document.getElementById('c4').value);
    c5 = Number(document.getElementById('c5').value);

    z3 = c * c1 * c2 * c3 * c5;
    document.getElementById('z3').value = z3;
}
//! C satir end

//! D satir start
function add4() {
    d = Number(document.getElementById('d').value);
    d1 = Number(document.getElementById('d1').value);
    d2 = Number(document.getElementById('d2').value);
    d3 = Number(document.getElementById('d3').value);
    // d4 = parseInt(document.getElementById('d4').value);
    d5 = Number(document.getElementById('d5').value);

    z4 = d * d1 * d2 * d3 * d5;
    document.getElementById('z4').value = z4;
}
//! D satir end

//! E satir start
function add5() {
    e = Number(document.getElementById('e').value);
    e1 = Number(document.getElementById('e1').value);
    e2 = Number(document.getElementById('e2').value);
    e3 = Number(document.getElementById('e3').value);
    // e4 = parseInt(document.getElementById('e4').value);
    e5 = Number(document.getElementById('e5').value);

    z5 = e * e1 * e2 * e3 * e5;
    document.getElementById('z5').value = z5;
}
//! E satir end

function rechnen(){ 
    add1(); 
    add2(); 
    add3(); 
    add4(); 
    add5();
    addx1(); 
}

//? x rechnen end

//? + rechnen start

//? + rechnen start

//! X satir start

function addx1() {
    z2 = Number(document.getElementById('z2').value);
    z3 = Number(document.getElementById('z3').value);
    z5 = Number(document.getElementById('z5').value);
    z4 = Number(document.getElementById('z4').value);
    z1 = Number(document.getElementById('z1').value);

    x1 = z1 + z2 + z3 + z4 + z5;
    document.getElementById('x1').value = x1;
}

//! X satir end

//? + rechnen end

//? diagramm start

//? diagramm end