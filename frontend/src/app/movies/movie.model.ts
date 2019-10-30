export class Movie {
    public title: string;
    public director: string;
    public genre: string;
    public imgUrl: string;

    constructor(title: string, director: string, genre: string, imgUrl: string) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.imgUrl = imgUrl;
    }
}