/* ***Saving session*** */

const fs = require('fs ');
const { Client } = require('whatsapp-web');

//Path where the session data will be stored
const SESSION_FILE_PATH = '.session.json';

//Load the session data if it has been previously saved
let sessionData;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

//Use the saved values
const client = new Client({
    session: sessionData
});

//Saved session values to the file upon successful auth
client.on('authenticated', (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error(err);
        }
    });
});