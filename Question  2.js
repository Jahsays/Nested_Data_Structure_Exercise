// 2.	Given the following nested object:
// var nestedObject = {
//   speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
//   data: {
//     continents: {
//       europe: {
//         countries: {
//           switzerland: {
//             capital: "Bern",
//             population: 8000000
//           }
//         }
//       }
//     },
//     languages: {
//       spanish: {
//           hello: "Hola"
//       },
//       french: {
//           hello: "Bonjour"
//       }
//     }
//   }
// }

// Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.
// Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
// Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.


function addSpeaker(){
      var speakerObject = nestedObject.speakers.push({name: "Williams"});
      console.log(nestedObject.speakers)
    }
    addSpeaker();
    
    function addLanguage(language){
      var languageObject = nestedObject.data.languages[language] = {hello: "bawo ni"}
      console.log(nestedObject.data.languages)
    }
    addLanguage("Yoruba") 

    function addCountry(country){
        nestedObject.data.continents.europe.countries[country] = {
    capital: "Kiev",
    population: 5000000
  }
console.log(nestedObject.data.continents.europe.countries)
  }
addCountry("Ukraine");