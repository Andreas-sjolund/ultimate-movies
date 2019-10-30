package models

import "gopkg.in/mgo.v2/bson"

// Movie represents a movie, we uses bson keyword to tell the mgo driver how to name
// the properties in mongodb document
type Movie struct {
	ID       bson.ObjectId `bson:"id" json:"id"`
	Title    string        `bson:"title" json:"title"`
	ImageURL string        `bson:"image_url" json:"image_url"`
	Director string        `bson:"director" json:"director"`
	Genre    string        `bson:"genre" json:"genre"`
}
