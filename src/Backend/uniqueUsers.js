import { readFile, writeFile } from 'fs';

readFile('util/usersBackEnd.json', 'utf8', (err, data) => {

  //If path does not exist function will stop due to the return used
  if (err) {
    console.error('Failed to reading file!');
    return;
  }

  try {
    /**
    * turn the data from the usersBackEnd.json file into a Json 
    * in order to use JSON.strinfy, to creating a new json file
    */
    const users = JSON.parse(data);

    const uniqueUsers = users.filter((user, index, self) =>
      index === self.findIndex((u) =>
        u.name === user.name && u.surname === user.surname
      )
    );

    
    /**
     * use writeFile from fs to create a new json file into a specificies path
     */
    writeFile('src/backend/newFiles/uniqueUsers.json', JSON.stringify(uniqueUsers, null, 2), (err) => {

      //catches error when path does not exist or when the file name already exist in the spicified path
      if (err) {
        console.error('Error writing uniqueUsers.json:', err);
        return;
      }

         // alerts user when request is successful
      console.log('success');
    });
  } catch (error) {
    console.error('Error parsing usersBackEnd.json:', error);
  }
});