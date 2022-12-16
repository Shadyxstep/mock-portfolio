// Home Page
// Variable Declarations
const landing = document.getElementById('landing');
const landingPic = document.getElementById('landing-pic');
const landingTwo = document.getElementById('landing-two');

// Animation Function for Home Page
function addHomeAnimation() {
    landing.style.zIndex = '100';
    landingPic.style.zIndex = '100';
    landingTwo.style.zIndex = '100';
    landingPic.classList.add('zoom');
    landing.classList.add('fade-in-short');
    landingTwo.classList.add('fade-in-short');
}


// Form Page Variable Declarations
const form = document.getElementById('myForm');
const thankYouMessage = document.getElementById('thankYouMessage');
const tyTitle = document.getElementById('thankYouTitle');
const title = document.getElementById('contact-title');
const icon = document.getElementById('pencil');
const thankYouText = document.getElementById('emailSpan');

form.addEventListener('submit', event => {

    // Prevent submitting data to server
    event.preventDefault();

    // get the input values
    const firstName = document.getElementById('firstName').value;
    const surname = document.getElementById('surname').value;
    const address = document.getElementById('address').vaue;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;

    // print the values to the console
    console.log(`Name: ${firstName}`);
    console.log(`Email: ${email}`);

    // Hide Text & Form Elements
    tyTitle.innerHTML = `Thank You ${firstName}! <i class="fa-solid fa-heart" style="color:red;"></i>`;
    title.style.display = 'none';
    thankYouText.innerHTML = `${email}.`;
    icon.style.display = 'none';
    form.style.display = 'none';
    thankYouMessage.style.display = 'block';
    thankYouMessage.classList.add('fade-in-long');
});