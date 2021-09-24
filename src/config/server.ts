import express from "express";
const cors = require("cors");
import { recipeData } from "./database/recipeData";

const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => console.log(`hosting @${PORT}`));

// Test Server
app.get("/", (req, res) => {
  res.send("<h1>Server Online</h1>");
});
// Get all recipes
app.get("/recipes", (req, res) => {
  res.send(recipeData);
});

// Get single recipe
app.get("/recipes/:id", (req, res) => {
  let id = req.params.id;
  const selectedRecipe = recipeData.find((recipe) => recipe.id === id);
  res.send(selectedRecipe);
});
