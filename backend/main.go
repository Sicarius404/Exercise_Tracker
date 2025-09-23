package main

import (
	"context"
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5"
)

func main() {
    // Build connection string from env, with sensible local defaults.
    // Defaults assume running API on host and Postgres via docker-compose port mapping 5433:5432.
    getEnv := func(key, fallback string) string {
        if val := os.Getenv(key); val != "" {
            return val
        }
        return fallback
    }

    connStr := os.Getenv("DATABASE_URL")
    if connStr == "" {
        dbHost := getEnv("DB_HOST", "localhost")
        dbPort := getEnv("DB_PORT", "5433")
        dbUser := getEnv("DB_USER", "user")
        dbPass := getEnv("DB_PASSWORD", "password")
        dbName := getEnv("DB_NAME", "exercisetracker")
        sslMode := getEnv("DB_SSLMODE", "disable")
        connStr = fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=%s", dbUser, dbPass, dbHost, dbPort, dbName, sslMode)
    }
	conn, err := pgx.Connect(context.Background(), connStr)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v", err)
		os.Exit(1)
	}
	defer conn.Close(context.Background())

	fmt.Println("Successfully connected to the database!")

	r := gin.Default()

	// A simple health check endpoint
	r.GET("/", func(c *gin.Context) {
		// Ping the database to check the connection
		err := conn.Ping(context.Background())
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": "Database connection error",
				"error":   err.Error(),
			})
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello World! Database connection is healthy.",
		})
	})

	r.Run(":8080") // listen and serve on 0.0.0.0:8080
}
