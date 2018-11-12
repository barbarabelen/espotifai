const invalidId = (resources, id) => id < 1 || id > resources.length;

module.exports = invalidId;
