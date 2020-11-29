const fs = require('fs');

// TODO remove prototype mutation
if ( typeof String.prototype.repeat  == 'undefined' ) {
    String.prototype.repeat = function(times) {
        return (new Array(times + 1)).join(this);
    };
}

/**
 * Write a file using stream.
 * @param {stream<string>} data text to write to file
 * @param {string} localFileName 
 * @param {boolean} finish idk what this is for....
 */
function writeFS(data, localFileName, finish) {
    if (!wStream) var wStream = fs.createWriteStream(localFileName);
    wStream.write(data);
    if (finish)
        wStream.end();
}

/**
 * Save a file to local file system.
 * @param {stream<string>} data text to write to file
 * @param {string} filename 
 */
function saveToFile (data, filename) {
    fs.writeFile(filename, data, function (err) {
        if (err) {
            console.log( 'Following error occurred while attempting to write the file.\n' );
            return console.log(err);
        }
        console.log('\nFile was written to *' + filename + '*');
    });

}

/**
 * Multiple replace
 * @param {string} str to search thru
 * @param {string[]} repl array of templates used to replace
 */
function replaceAll(str, repl) {
    const regex = new RegExp(Object.keys(repl).join('|'), 'gi');
    return str.replace(regex, matched => repl[matched.toLowerCase()]);
}

/**
 * Replaces all, but case-insensitive
 * @param {string} str to search thru
 * @param {string[]} repl array of templates used to replace
 */
function ireplaceAll(str, repl) {
    const regex = new RegExp(Object.keys(repl).join('|'), 'g');
    return str.replace(regex, function (matched) {
        return repl[matched];
    });
}

// TODO Replace with lodash clone
// Clone objects with JSON.
function cloneJ(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// TODO Replace with lodash deepclone
// Function : cloneO
// Clones objects with Object.assign
function cloneO() {
    return ( ! arguments.length ? {} : Object.assign.apply(null, arguments) );
}

// Merge Objects.
// TODO Replace with lodash merge
function mergeO( src, cop ) {
    var temp = {};
    for (var attrn in src) { temp[attrn] = src[attrn]; }
    for (var attrn2 in cop) { temp[attrn2] = cop[attrn2]; }
    return temp;
}

// Gets nicely formatted Date and time nicely.
function getDateTimef(format = 'DD/MM/YYYY hh:mm:ss:ll AA', d) {
    if ( ! d || d.constructor.name !== 'Date' ) d = new Date();

    const fArr = format.replace(/[^\w]/g, ' ' ).split(' ')
    const hrs = d.getHours()
    const ampm = hrs > 12 ? 'PM' : 'AM'
        
    const repl = {
        // Figure out what this is pointint to here.... window usually but here it should be a string..
        'HH' : this.padString(hrs, 2),
        'hh' : this.padString(hrs % 12,2),
        'mm' : this.padString(d.getMinutes(),2),
        'ss' : this.padString(d.getSeconds(),2),
        'll' : this.padString(d.getMilliseconds(), 3),
        'DD' : this.padString(d.getDate(), 2),
        'MM' : this.padString(d.getMonth() + 1, 2),
        'YYYY' : d.getFullYear(),
        // 'YY' : d.getFullYear().toString().substr(-2),
        'AA' : ampm,
        'aa' : ampm.toLowerCase()
    };

    repl['dd'] = repl['DD'];
    repl['ii'] = repl['mm'];
    // Replace the format string.
    for(let k = 0; k < fArr.length; k++) {
        if ( typeof repl[fArr[k]] != 'undefined' )
            format = format.replace(fArr[k], repl[fArr[k]]);
    }
    return format;
}
    
// Pads a string with supplied character or 0
function padString(str,len,padchar = '0') {
    str = str.toString();
    return str.length < len ? padchar.repeat(len - str.length) + str : str;
}

module.exports = {
    writeFS,
    saveToFile,
    replaceAll,
    ireplaceAll,
    cloneJ,
    cloneO,
    mergeO,
    getDateTimef,
    padString,
};