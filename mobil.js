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

//? rechnen start
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
    a = parseInt(document.getElementById('a').value);
    a1 = parseInt(document.getElementById('a1').value);
    a2 = parseInt(document.getElementById('a2').value);
    a3 = parseInt(document.getElementById('a3').value);
    a4 = parseInt(document.getElementById('a4').value);
    a5 = parseInt(document.getElementById('a5').value);

    z1 = a * a1 * a2 * a3 * a4 * a5;
    document.getElementById('z1').value = z1;
}
//! A satir end

//! B satir start
function add2() {
    b = parseInt(document.getElementById('b').value);
    b1 = parseInt(document.getElementById('b1').value);
    b2 = parseInt(document.getElementById('b2').value);
    b3 = parseInt(document.getElementById('b3').value);
    b4 = parseInt(document.getElementById('b4').value);
    b5 = parseInt(document.getElementById('b5').value);

    z2 = b * b1 * b2 * b3 * b4 * b5;
    document.getElementById('z2').value = z2;
}
//! B satir end

//! C satir start
function add3() {
    c = parseInt(document.getElementById('c').value);
    c1 = parseInt(document.getElementById('c1').value);
    c2 = parseInt(document.getElementById('c2').value);
    c3 = parseInt(document.getElementById('c3').value);
    c4 = parseInt(document.getElementById('c4').value);
    c5 = parseInt(document.getElementById('c5').value);

    z3 = c * c1 * c2 * c3 * c4 * c5;
    document.getElementById('z3').value = z3;
}
//! C satir end

//! D satir start
function add4() {
    d = parseInt(document.getElementById('d').value);
    d1 = parseInt(document.getElementById('d1').value);
    d2 = parseInt(document.getElementById('d2').value);
    d3 = parseInt(document.getElementById('d3').value);
    d4 = parseInt(document.getElementById('d4').value);
    d5 = parseInt(document.getElementById('d5').value);

    z4 = d * d1 * d2 * d3 * d4 * d5;
    document.getElementById('z4').value = z4;
}
//! D satir end

//! E satir start
function add5() {
    e = parseInt(document.getElementById('e').value);
    e1 = parseInt(document.getElementById('e1').value);
    e2 = parseInt(document.getElementById('e2').value);
    e3 = parseInt(document.getElementById('e3').value);
    e4 = parseInt(document.getElementById('e4').value);
    e5 = parseInt(document.getElementById('e5').value);

    z5 = e * e1 * e2 * e3 * e4 * e5;
    document.getElementById('z5').value = z5;
}
//! E satir end

function carpanlar(){ 
    add1(); 
    add2(); 
    add3(); 
    add4(); 
    add5(); 
}

//? rechnen end