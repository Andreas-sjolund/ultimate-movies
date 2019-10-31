package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"./cmd/apis"
	. "./cmd/daos"
	. "./config"
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
	r.HandleFunc("/api/movies", apis.GetAllMovies).Methods("GET")
	r.HandleFunc("/api/movies", apis.CreateMovie).Methods("POST")
	r.HandleFunc("/api/movies/{id}", apis.DeleteMovie).Methods("DELETE")
	r.HandleFunc("/api/movies", apis.UpdateMovie).Methods("PUT")
	r.HandleFunc("/api/movies/{id}", apis.GetMovieByID).Methods("GET")
	if err := http.ListenAndServe(":3000", r); err != nil {
		log.Fatal(err)
	}
}
