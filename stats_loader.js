/**
 * Returns the stats loaded from the server for a given stats file name.
 * 
 * Students would call this function in a <script> tag in their HTML file
 * to load their stats into their site.
 * @param {string} filename
 * @returns {Map | undefined}
 */
function loadStudentStats(filename) {
  // Check that filename is a string
  if (!isValidFileName(filename)) {
    // Optionally, throw an error or console log instead of return
    return
  }

  const serverUrl = 'https://YOUR_SERVER_URL/'
  var parsedStats

  // Use `fetch` to make a network request for the stats file on the server
  fetch(serverUrl + filename)
    .then((res) => {
      if (res.ok) {
        return res.text()
      } else {
        // Handle response errors
        console.error({
          status: res.status,
          statusText: res.statusText()
        })
      }
    })
    .then((text) => {
      // Store the parsed text file
      parsedStats = parseStatsText(text)
    })
    .catch((err) => {
      // Handles any other errors that occur
      console.error(err)
    })

  return parsedStats
}

/**
 * Returns an object representing the stats read from a stats.txt file.
 * @param {string} text 
 * @returns {Map}
 */
function parseStatsText(text) {
  // TODO: Write stats file parsing logic
  return {
    rawText: text,
  }
}

/**
 * Returns true if the file is a string, is not empty, and has a .txt extension.
 * @param {string} filename
 * @returns {boolean}
 */
function isValidFileName(filename) {
  return typeof filename !== 'string'
    || !(filename instanceof String)
    || filename == ''
    || !filename.endsWith('.txt')
}
