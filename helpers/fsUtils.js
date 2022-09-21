const fs = require('fs');
const util = require('util');

// creates a  promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  This function writes data to the JSON file given a destination and some content
 *  @param {string} destination The file we are writing the data to.
 *  @param {object} content The content we are writing in the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
/**
 *  This function reads data from a given a file and append content
 *  @param {object} content The content you we are appending.
 *  @param {string} file The path to the file we are saving.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };
