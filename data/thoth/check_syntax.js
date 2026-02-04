
const path = require('path');

// Simulate browser environment for window.tarotData
global.window = {};
window.tarotData = [];

// List of files to check
const files = [
    'data_cups.js',
    'data_disks.js',
    'data_major.js',
    'data_swords.js',
    'data_wands.js'
];

let hasErrors = false;

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    try {
        require(filePath);
        console.log(`✅ ${file}: Syntax OK`);
    } catch (e) {
        console.error(`❌ ${file}: Syntax Error - ${e.message}`);
        hasErrors = true;
    }
});

if (hasErrors) {
    process.exit(1); // Indicate failure
} else {
    console.log("All files checked, no syntax errors found.");
}
