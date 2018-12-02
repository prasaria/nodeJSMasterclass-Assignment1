/*
* Helpers file
*/

const helpers = {};

// Helpers message
helpers.message = function(data) {
  let upperCase = data.trimmedPath.charAt(0).toUpperCase() + data.trimmedPath.substr(1);
  
  return {
    message: `${upperCase}, my name is Prasetya Aria Wibawa , nice to meet you all`
  };
};

// Parse a JSON string to an object in all cases, without throwing
helpers.parseJsonToObject = function(str) {
  try {
    let obj = {};
    if (typeof str == "string" && str.trim().length > 0) obj = JSON.parse(str);
    return obj;
  } catch (e) {
    console.log("Erorr helpers.parseJsonToObject: ", e);
    return {};
  }
};

module.exports = helpers;