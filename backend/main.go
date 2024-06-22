package main

import (
	"backend/configs"
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	env := configs.LoadEnv()

	router := gin.Default()

	// Run database
	configs.ConnectDB()

	// Routes
	routes.UserRoute(router)

	router.Run("localhost:" + env.Port)
}
