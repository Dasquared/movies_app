export default class ExternalServices {
    constructor(word){
      this.search = word;
      this.data = null;
    }

    async getData() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '20c138aff4msh984f3bb3e22db99p18c2a5jsn394db2c70dec',
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
      };
      const baseURL = "https://movie-database-alternative.p.rapidapi.com/";
      await fetch(`${baseURL}?s=${this.search}&r=json&page=1`, options)
      .then(response => response.json())
      .then(response => {
        this.data = response;
      })
      .catch(err => {
        for(let message in err.message) {
          alertMessage(err.message[message]);
       }
      });
    }
}