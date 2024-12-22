package main

import (
	"log"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"

	"github.com/xxthunderblastxx/neoshare-v2/ui"
)

func main() {
	// Initialize the PocketBase application
	app := pocketbase.New()

	// Bind the static file server to the PocketBase application
	app.OnServe().BindFunc(func(se *core.ServeEvent) error {
		// serves static files from the provided public dir (if exists)
		se.Router.GET("/{path...}", apis.Static(ui.DistDirFs, true)).
			BindFunc(func(e *core.RequestEvent) error {
				if e.Request.PathValue(apis.StaticWildcardParam) != "" {
					e.Response.Header().Set("Cache-Control", "max-age=1209600 stale-while-revalidate=86400")
				}

				return e.Next()
			})

		return se.Next()
	})

	// Start the PocketBase application
	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
