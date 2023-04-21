// * The users-service.js module will definitely need to make AJAX requests to the Express server.

//* SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

//* handleSubmit <--> [signUp]-users-service <--> [signUp]-users-api <-Internet-> server.js (Express)

export async function signUp(userData) {
    const BASE_URL = '/api/users';

    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData) // makes the JS object to a string to be send over the internet
    });

    if (res.ok) {
        return res.json(); // JWT Token
    } else {
        throw new Error('Invalid Sign Up!')
    }
}