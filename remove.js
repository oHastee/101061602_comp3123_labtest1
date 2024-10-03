const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    fs.readdir(logsDir, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach((file, index) => {
            const filePath = path.join(logsDir, file);
            fs.unlink(filePath, err => {
                if (err) {
                    console.error(`Error deleting file ${file}:`, err);
                } else {
                    console.log(`Deleted file: ${file}`);

                    if (index === files.length - 1) {
                        fs.rmdir(logsDir, err => {
                            if (err) {
                                console.error('Error removing directory:', err);
                            } else {
                                console.log('Logs directory removed.');
                            }
                        });
                    }
                }
            });
        });

        if (files.length === 0) {
            fs.rmdir(logsDir, err => {
                if (err) {
                    console.error('Error removing empty directory:', err);
                } else {
                    console.log('Logs directory removed.');
                }
            });
        }
    });
} else {
    console.log('Logs directory does not exist.');
}
