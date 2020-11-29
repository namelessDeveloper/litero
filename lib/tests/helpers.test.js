const { 
  // saveToFile,
  // writeFS,
  cloneJ, // Will be removed when adding lodash
  cloneO, // Will be removed when adding lodash
  mergeO, // Will be removed when adding lodash
  formatDateTime,
  replaceAll,
  repeat,
} = require('../helpers')

describe('helpers.js', () =>{
  it('replaceAll correctly inserts data inside the template', () =>{
    const string = `
      somestuff
      %replaceme%
      morestuff
    `
    const replace = {
      '%replaceme%':'I have been replaced'
    }

    const expectedString = `
      somestuff
      I have been replaced
      morestuff
    `
    expect(replaceAll(string, replace)).toEqual(expectedString)
  })

  it('formatDateTime formats the date correcctly', () => {

    const date = new Date('2020-11-29T02:22:13.155Z');

    expect(formatDateTime(date)).toEqual("29/11/2020 03:22:13:155 AM")
  })

  it('repeat repeats the string n times correctly', () => {
    expect(repeat("x", 3)).toEqual("xxx")
  })
})