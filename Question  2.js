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