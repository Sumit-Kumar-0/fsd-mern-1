import { check, validationResult } from "express-validator";

export const validateCreatePlace = [
  check("title").notEmpty(),
  check("description").isLength({ min: 5 }),
  check("address").notEmpty(),
];

export const validatePlace = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};