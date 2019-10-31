export class Movie {
    public id?: string;
    public title: string;
    public director: string;
    public genre: string;
    public image_url: string;
    public description: string;

    constructor(id: string, title: string, director: string, genre: string, image_url: string, description: string) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.image_url = image_url;
        this.description = description;
    }
}