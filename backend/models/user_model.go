package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	UserID      primitive.ObjectID  `json:"userId,omitempty"`
	Username    string              `json:"username,omitempty" validate:"required"`
	Email       string              `json:"email,omitempty" validate:"required"`
	Password    string              `json:"password,omitempty" validate:"required"`
	Address     string              `json:"address,omitempty" validate:"required"`
	PhoneNumber string              `json:"phoneNumber,omitempty" validate:"required"`
	UserRole    Role                `json:"userRole,omitempty" validate:"required" default:"customer"`
	CreatedAt   primitive.Timestamp `json:"createdAt,omitempty" validate:"required" default:"time.Now()"`
}

type Role string

const (
	Customer = "customer"
	Admin    = "admin"
)
