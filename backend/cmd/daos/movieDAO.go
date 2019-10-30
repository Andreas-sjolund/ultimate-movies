package daos

import (
	"log"

	"github.com/trochimov/ultimate-movies/backend/cmd/models"

	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

// MovieDAO defines data access object
type MovieDAO struct {
	Server   string
	Database string
}

var db *mgo.Database

// Collection of movies
const (
	COLLECTION = "movies"
)

// Connect establishes a connection to the database
func (m *MovieDAO) Connect() {
	session, err := mgo.Dial(m.Server)
	if err != nil {
		log.Fatal(err)
	}
	db = session.DB(m.Database)
}

// FindAll movies
func (m *MovieDAO) FindAll() ([]models.Movie, error) {
	var movies []models.Movie
	err := db.C(COLLECTION).Find(bson.M{}).All(&movies)
	if err != nil {
		panic(err)
	}
	return movies, err
}

//FindByID finds a movie based on ID
func (m *MovieDAO) FindByID(id string) (models.Movie, error) {
	var movie models.Movie
	err := db.C(COLLECTION).FindId(bson.ObjectIdHex(id)).One(&movie)
	if err != nil {
		panic(err)
	}
	return movie, err
}

// Insert a movie into DB
func (m *MovieDAO) Insert(movie models.Movie) error {
	err := db.C(COLLECTION).Insert(&movie)
	if err != nil {
		panic(err)
	}
	return err
}

// Delete an exsisting movie
func (m *MovieDAO) Delete(movie models.Movie) error {
	err := db.C(COLLECTION).Remove(&movie)
	if err != nil {
		panic(err)
	}
	return err
}

// Update an existing movie
func (m *MovieDAO) Update(movie models.Movie) error {
	err := db.C(COLLECTION).UpdateId(movie.ID, &movie)
	if err != nil {
		panic(err)
	}
	return err
}
