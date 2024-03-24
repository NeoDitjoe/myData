import { readFile, writeFile } from 'fs';

readFile('src/backend/newFiles/uniqueUsers.json', 'utf8', (err, data) => {

  //If path does not exist function will stop due to the return used
  if (err) {
    console.error('Failed to reading file!');
    return;
  }

  try {
  
    const users = JSON.parse(data);


    //filter people in the Engineering department
    const engeering = users.filter((item) => item.department === 'ENGINEERING')

    /**
     * created this empty array which later stores filtered results according to the user
     * designation.
     */
    let reportToMichael = []

    /**
     * filter over the engineering users then push results into array
     * if designation is mechanic or mechanic assistant
     */
     engeering.filter((item) => {
      if(item.designation === 'MECHANIC' || item.designation === 'MECHANIC ASSISTANT'){
        reportToMichael.push(item)
      }
    }) 

    //number of the people who report to michael
    const reportToMichaelNo = reportToMichael.length

    //create a new array that includes the number of people 
    //who report to michael
    const results = [
      {
        title: 'People reporting Michael Phalane',
        'totalNumber': reportToMichaelNo
      }
    ]
    
    /**
     * use writeFile from fs to create a new json file using the results array
     */
    writeFile('src/backend/newFiles/report-to-michael.json', JSON.stringify(results, null, 2), (err) => {

      //catches error when path does not exist or when the file name already exist in the spicified path
      if (err) {
        console.error('Failed to create file', err);
        return;
      }

         // alerts user when request is successful
      console.log('success');
    });
  } catch (error) {
    console.error('Failed Attempt!', error);
  }
});