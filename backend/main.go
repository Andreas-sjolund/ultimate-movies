package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/trochimov/ultimate-movies/backend/cmd/apis"
	. "github.com/trochimov/ultimate-movies/backend/cmd/daos"
	. "github.com/trochimov/ultimate-movies/backend/config"
)

var config = Config{}
var dao = MovieDAO{}

// Parse the configuration file 'config.toml', and establish a connection to DB
func init() {
	config.Read()
	dao.Server = config.Server
	dao.Database = config.Database
	dao.Connect()
}

// Define HTTP request routes
func main() {
	r := mux.NewRouter()
	r.HandleFunc("/movies", apis.GetAllMovies).Methods("GET")
	r.HandleFunc("/movies", apis.CreateMovie).Methods("POST")
	r.HandleFunc("/movies", apis.DeleteMovie).Methods("DELETE")
	r.HandleFunc("/movies", apis.UpdateMovie).Methods("PUT")
	r.HandleFunc("/movies/{id}", apis.GetMovieByID).Methods("GET")
	if err := http.ListenAndServe(":3000", r); err != nil {
		log.Fatal(err)
	}
}
