package ui

import (
	"embed"
	"io/fs"
)

//go:embed all:build/client
var FS embed.FS

var DistDirFs, _ = fs.Sub(FS, "build/client")
