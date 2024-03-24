import { readFile, writeFile } from 'fs';

readFile('util/usersBackEnd.json', 'utf8', (error, data) => {
  if (error) {
    console.error('File does not exist');
    return;
  }

  try {
    const users = JSON.parse(data);

    // Count occurrences of each user based on name and surname
    const countUser = users.reduce((acc, user) => {
      const userKey = `${user.name}_${user.surname}`;
      acc[userKey] = (acc[userKey] || 0) + 1;
      return acc;
    }, {});

    // Format counted data into an array of objects containing name, surname, and count of duplicates
    const userDuplicates = Object.keys(countUser).map(key => {
      const [name, surname] = key.split('_');
      return {
        name,
        surname,
        count: countUser[key]
      };
    });

    // turn the array of objects into CSV format
    const results = userDuplicates.map(user => `${user.name}, ${user.surname}, ${user.count}`).join('\n');
    
    // Write CSV data to a new file
    writeFile('src/backend/newFiles/newCSVFile.csv', results, 'utf8', (error) => {
      if (error) {
        console.error('Failed attempt!', error);
        return;
      }
      console.log('success');
    });
  } catch (error) {
    console.error('Failed', error);
  }
});
