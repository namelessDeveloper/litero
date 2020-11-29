const { formatDateTime } = require('./helpers')


class Logger {
  static verbose = false

  /**
   * Shows usage information for the getStory method.
   * @param {string} msg string to be prepended to the beginning of the getStory error
   */
  static getStoryUsage(msg){
    let err = (typeof msg == 'undefined') ? '' : `Error : ${msg}\n\n`;
    err += 'Usage:\n';
    err += helpers.repeat('=', 7) + '\n';
    err += 'Requires a valid Literotica story URL passed as a string or Javascript object.\n\n';
    
    err += 'instanceName = new litero();\n';
    err += 'URL     : instanceName.getStory("https://literotica.com/s/how-to-write-for-literotica")\n';
    err += 'Object  : instanceName.getStory({ url : "https://literotica.com/s/how-to-write-for-literotica"})\n';
    err += 'Object  : instanceName.getStory({ url : "https://literotica.com/s/how-to-write-for-literotica", filename : "writing-stories-litero", format : "html" })\n';

    return console.log(err);
  }

  /**
   * Informational log when verbose mode is turned on.
   * @param {string} msg message to be printed
   */
  static info(msg){
    if(Logger.verbose){
      console.log(formatDateTime() + ' - ' +  msg);
    }
  }
}

module.exports = Logger