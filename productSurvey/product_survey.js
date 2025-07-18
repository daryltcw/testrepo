function submitFeedback() {
    // Get input values INSIDE the function
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const userexperience = document.getElementById('userexpText').value;

    // Show alert
    alert('Thank you for your valuable feedback');

    // Display user info
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = userexperience;

    // Show the info section
    document.getElementById('userInfo').style.display = 'block';
}

const submitButton = document.getElementById('submitBtn');

// Button click triggers the function
submitButton.onclick = submitFeedback;

// Enter key also submits the form
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});