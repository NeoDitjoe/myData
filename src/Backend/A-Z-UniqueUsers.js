import { readFile, writeFile } from 'fs';

readFile('src/backend/newFiles/uniqueUsers.json', 'utf8', (error, data) => {

  /**
   *  catch the error when the path does not exist
   */
  if (error) {
    console.error('Failed reading file!', error);
    return;
  }

  try {
    /**
     * turn the data from the uniqueUsers.json file into a Json 
     * in order to use JSON.strinfy, to creating a new json file
     */
    const users = JSON.parse(data);
    
    //sort the data from a to z 
    const sort = users.sort((a, b) => a.name.localeCompare(b.name) )

    /**
     * use writeFile from fs to create a new json file into a specificies path
     */
    writeFile('src/backend/newFiles/alphabeticalUniqueUsers.json', JSON.stringify(sort, null, 2), (error) => {

      //catches error when path does not exist or when the file name already exist in the spicified path
      if (error) {
        console.error('Failed to sort data', error);
        return;
      }

      // alerts user when request is successful
      console.log('success');
    });
  } catch (error) {
    console.error('Failed attempt', error);
  }
});