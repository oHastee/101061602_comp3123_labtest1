//Example Usage using add.js and remove.js for question3

const { exec } = require('child_process');
const path = require('path');

const currentDir = __dirname;

exec(`node ${path.join(currentDir, 'add.js')}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error running add.js: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`stderr from add.js: ${stderr}`);
        return;
    }
    console.log('add.js output:', stdout);

    exec(`node ${path.join(currentDir, 'remove.js')}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running remove.js: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr from remove.js: ${stderr}`);
            return;
        }
        console.log('remove.js output:', stdout);
    });
});
