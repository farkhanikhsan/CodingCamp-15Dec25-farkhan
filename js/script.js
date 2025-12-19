console.log("Hello world!")


/// Call welcomeSpeech function to prompt user and render welcome message
welcomeSpeech();

/// Function for welcoming user
function welcomeSpeech() {

    /// Prompt user for their name
    const userInput = prompt('Please enter your name:');

    /// Get the welcome-speech DOM element
    const welcomeDOM = document.getElementById('welcome-speech');
   
    if (userInput === null || userInput.trim() === '') {
        /// Render for default welcome message
        welcomeDOM.innerHTML = 'Welcome, Guest!';
    } else { 
        /// Render for user input welcome message
        welcomeDOM.innerHTML = 'Welcome, ' + userInput + '!';
    }
}

/// Function for validating message us form
function validateForm() {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const gender = document.querySelector('input[name="gender"]:checked').value;

    const time = new Date().toString();

    document.getElementById("output-result-box").innerHTML = `
        <p><strong>Current time:</strong> ${time}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${date}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
}