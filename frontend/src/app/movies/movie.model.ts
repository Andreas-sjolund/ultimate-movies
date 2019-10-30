export class Movie {
    public title: string;
    public director: string;
    public genre: string;
    public image_url: string;
    public description: string;

    constructor(title: string, director: string, genre: string, image_url: string, description: string) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.image_url = image_url;
        this.description = description;
    }
}