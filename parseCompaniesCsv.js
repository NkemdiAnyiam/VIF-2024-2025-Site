const fs = require('fs');
const path = require('path');
const csvParse = require('csv-parse');

const parse = csvParse.parse;

(() => {
  const csvFilePath = path.resolve(__dirname, 'companyFairSubmissions.csv');
  
  // relevant column headers
  const headers = ['Company Name', 'Company Focus', 'Other Focuses', 'Position Types', 'Interviews', 'Company Website', 'Virtual Fair Times', 'In-Person Fair Times', 'Company Logo'];
  
  const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
  
  parse(fileContent, { delimiter: ',', skip_empty_lines: true}, (error, result) => {
    if (error) { throw error; }

    const columnIndices = headers.map((header) => {
      const index = result[0].indexOf(header);
      if (index === -1) { throw new Error(`ERROR: ${header} field not found`); }
      return index;
    });
  
    const companiesMap = new Map(); // using map to overwrite duplicate company names
    for (const row of result.slice(1)) {
      const tupleRecord = columnIndices.map(index => row[index]);
      const [companyName, companyFocuses, otherFocuses, positionTypes, interviews, website, virtualTimes, inPersonTimes, logoUrlCheckString] = tupleRecord;
      // get rid of 'Other' option from focuses
      const [focuses1, focuses2] = [companyFocuses.split(/\s*,\s*/).filter(str => str.toLowerCase() !== 'other').join(', '), otherFocuses];

      if (companiesMap.has(companyName.trim().toLowerCase())) { throw new Error(`ERROR: Duplicate company ${companyName} found`); }

      const companyObj = {
        companyName,
        // join focuses into string separated by commas
        focuses: focuses1 && focuses2 ? `${focuses1},${focuses2}`.split(/\s*,\s*/).join(', ') : focuses1 || focuses2,
        // split position types into an array
        positionTypes: positionTypes.split(/\s*,\s*/),
        website,
        interviews,
        virtualTimes,
        inPersonTimes,
        logoUrlCheckString
      }
      companiesMap.set(companyName.trim().toLowerCase(), companyObj);
    }

    // write data to .ts file
    const json = JSON.stringify(Array.from(companiesMap.values()), null, 2)
    const dataPath = path.resolve(`${__dirname}/src/data/companies.ts`);
    fs.writeFileSync(dataPath, `// generated by parseCompaniesCsv.js\nexport const data = JSON.parse(\`${json}\`);\n`);
  });
})();
