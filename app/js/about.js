// About Page
// Variable Declaration

const aboutTitle = document.getElementById('about-title');
const aboutPicture = document.getElementById('about-picture');
const aboutTextOne = document.getElementById('about-text');
const aboutTextTwo = document.getElementById('about-text-two');
const listOne = document.getElementById('list-one');
const listTwo = document.getElementById('list-two');
const listThree = document.getElementById('list-three');
const listFour = document.getElementById('list-four');
const listFive = document.getElementById('list-five');
const plane = document.getElementById('plane');

function addAboutAnimation() {

    // Make List Items Invisible
    listTwo.style.opacity = '0';
    listThree.style.opacity = '0';
    listFour.style.opacity = '0';
    listFive.style.opacity = '0';

    // Add Animations
    aboutPicture.classList.add('zoom');
    aboutTitle.classList.add('slideLeft');
    aboutTextOne.classList.add('slideRight');
    aboutTextTwo.classList.add('slideRight');
    listOne.classList.add('slideUp');

    // Time Delay Function for List Animations
    setTimeout(function() {
        listTwo.style.opacity = '1';
        listTwo.classList.add('slideUp');
    }, 1000);
    setTimeout(function() {
        listThree.style.opacity = '1';
        listThree.classList.add('slideUp');
    }, 1800);
    setTimeout(function() {
        listFour.style.opacity = '1';
        listFour.classList.add('slideUp');
    }, 2600);
    setTimeout(function() {
        listFive.style.opacity = '1';
        listFive.classList.add('slideUp');
    }, 3400);
}