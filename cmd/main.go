package main

import (
	"log"

	"github.com/pocketbase/pocketbase"
)

func main() {
	// Initialize the PocketBase application
	app := pocketbase.New()

	// Start the PocketBase application
	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
