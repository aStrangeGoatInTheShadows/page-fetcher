// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
const request = require('request');
const fs = require('fs');
const readline = require('readline');


const cmdLine = process.argv.slice(2, process.argv.length);
const url = cmdLine[0];
const fileName = cmdLine[1];

// console.log(url);
// console.log(fileName);

const downloadData = (downloadedData) => {
  console.log('Downloading Data');

  fs.appendFile(fileName, downloadedData, err => {
    if (err) throw err;

    console.log(`File ./index.html downloaded`);
  })
}

const makeRequest = () => {
  request(url, (error, response, body) => {
    downloadData(body);
  })
};

const mainLoop = () => {
  if (fs.existsSync(fileName)) {
    rl = readline.createInterface(process.stdin, process.stdout);

    rl.question('Would you like to overwrite the exising file ? (y/n) :', (usrInput2) => {
    rl.close();
      if (usrInput2 === 'n') {
        console.log('Good Bye');
        process.exit;
      } else {
        makeRequest(url, fileName);
      }
    });
  }
}

mainLoop();

//////////////////////////////////////////// ABANDONED STRETCH ///////////////////////////////////////////
// rl.question('Would you like to overwrite the existing file?', (usrInput1) => {
//   rl.close();
//   if(!usrInput1 === 'y') {
//     console.log('Please restart will valid parameters.');

//     return null;        
//   } else {
//     rl.question('Please enter a newfile name :', (usrInput2) => {
//       makeRequest(url, usrInput2);
//       console.log('request done');
//     });
//   }
//   rl.close();
// })
// } else {
// makeRequest(url, filename);
// }