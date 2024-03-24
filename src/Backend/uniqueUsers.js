import { readFile, writeFile } from 'fs';

readFile('util/usersBackEnd.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Failed reading file!');
    return;
  }

  try {
    const users = JSON.parse(data);
    
    // Remove duplicates based on name and surname
    const uniqueUsers = users.filter((user, index, self) => 
      index === self.findIndex((u) => 
        u.name === user.name && u.surname === user.surname
      )
    );

    // Write unique users to uniqueUsers.json
    writeFile('util/uniqueUsers.json', JSON.stringify(uniqueUsers, null, 2), (err) => {
      if (err) {
        console.error('Error writing uniqueUsers.json:', err);
        return;
      }
      console.log('Unique users successfully written to uniqueUsers.json');
    });
  } catch (error) {
    console.error('Error parsing usersBackEnd.json:', error);
  }
});