const Person = require('../models/person');

const createPerson = (name, age, favoriteFoods) => {
  const person = new Person({
    name,
    age,
    favoriteFoods,
  });

  return person.save();
};

const findPersonById = (personId) => {
  return Person.findById(personId);
};

const updatePersonById = (personId, newFavoriteFoods) => {
  return Person.findByIdAndUpdate(
    personId,
    { favoriteFoods: newFavoriteFoods },
    { new: true }
  );
};

const removeById = (personId) => {
  return Person.findByIdAndRemove(personId);
};

module.exports = {
  createPerson,
  findPersonById,
  updatePersonById,
  removeById,
};
