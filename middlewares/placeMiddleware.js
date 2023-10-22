import { check } from "express-validator";

export const validateCreatePlace = [
  check("title").notEmpty(),
  check("description").isLength({ min: 5 }),
  check("address").notEmpty(),
];

export const validateUpdatePlace = [
  check("title").notEmpty(),
  check("description").isLength({ min: 5 })
];