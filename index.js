const mongoose = require('mongoose');
const personService = require('./services/personService');

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const runApplication = async () => {
  try {
    const johnDoe = await personService.createPerson('John Doe', 25, [
      'Pizza',
      'Burger',
    ]);

    console.log('Person saved:', johnDoe);

    const foundPerson = await personService.findPersonById(johnDoe._id);
    console.log('Person found by ID:', foundPerson);

    const updatedPerson = await personService.updatePersonById(johnDoe._id, [
      'Sushi',
      'Pasta',
    ]);
    console.log('Updated person:', updatedPerson);

    const foundAgainPerson = await personService.findPersonById(johnDoe._id);
    console.log('Person found by ID after update:', foundAgainPerson);

    const removedPerson = await personService.removeById(johnDoe._id);
    console.log('Removed person:', removedPerson);

    const notFoundPerson = await personService.findPersonById(johnDoe._id);
    console.log('Person found by ID after removal:', notFoundPerson);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error:', error);
  }
};

runApplication();
