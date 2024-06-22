package controllers

import "github.com/gin-gonic/gin"

func InitialSetup() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.JSON(200, gin.H{
			"data": "Initial Setup completed successfully.",
		})
	}
}
