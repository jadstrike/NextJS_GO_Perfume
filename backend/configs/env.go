package configs

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type EnvConfig struct {
	MongoURI string
	Port     string
}

func LoadEnv() EnvConfig {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	return EnvConfig{
		MongoURI: os.Getenv("MONGOURI"),
		Port:     os.Getenv("PORT"),
	}
}
