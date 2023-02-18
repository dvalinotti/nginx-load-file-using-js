/**
 * Returns the stats loaded from the server for a given stats file name.
 * 
 * Students would call this function in a <script> tag in their HTML file
 * to load their stats into their site.
 * @param {string} filename
 * @param {Function} callback
 */
function loadStudentStats(filename, callback) {
  // Check that filename is a string
  if (!isValidFileName(filename)) {
    // Optionally, throw an error or console log instead of return
    return
  }

  const serverUrl = '/'

  // Use `fetch` to make a network request for the stats file on the server
  fetch(serverUrl + filename)
    .then((res) => {
      if (res.ok) {
        return res.text()
      } else {
        // Handle response errors
        console.error({
          status: res.status,
          statusText: res.statusText
        })
      }
    })
    .then((text) => {
      // Store the parsed text file
      const parsedStats = parseStatsText(text)
      callback(parsedStats)
    })
    .catch((err) => {
      // Handles any other errors that occur
      console.error(err)
    })
}

/**
 * Returns an object representing the stats read from a stats.txt file.
 * @param {string} text 
 * @returns {Map}
 */
function parseStatsText(text) {
  // TODO: Replace this with real parsing logic
  const stats = {}
  
  // break the text into lines
  const lines = text.split('\n')

  // loop through each line
  lines.forEach((line) => {
    // split the line into key and value
    const [key, value] = line.split(':')
    // add the key and value to the map
    stats[key] = value
  })

  return stats
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
