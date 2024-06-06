import Movie from "./Movie.js"

export default class List{
    constructor(list){
        this.list = list;
    }

    prepareList(parent){
        this.list.forEach(element => {
            const movie = new Movie(element);
            movie.renderWithTemplate(parent);
        });
    }
}