const express = require("express");
const cityController = require("../controller/city");
const clubController = require("../controller/club");
const eventController = require("../controller/event");
const performerController = require("../controller/perfomer");
const categoryController = require("../controller/category");
const drinkController = require("../controller/drink");
const pricelistController = require("../controller/pricelist");

const router = express.Router();

// CITY
router.post("/cities", cityController.createCity);
router.delete("/cities/:id", cityController.deleteCity);
router.get("/cities", cityController.getCities);
router.put("/cities/:id", cityController.updateCity);

// CLUB
router.post("/clubs", clubController.createClub);
router.delete("/clubs/:id", clubController.deleteClub);
router.get("/clubs", clubController.getClubs);
router.put("/clubs/:id", clubController.updateClub);

// EVENT
router.post("/events", eventController.createEvent);
router.delete("/events/:id", eventController.deleteEvent);
router.get("/events", eventController.getEvents);
router.put("/events/:id", eventController.updateEvent);

// PERFORMER
router.post("/performers", performerController.createPerformer);
router.delete("/performers/:id", performerController.deletePerformer);
router.get("/performers", performerController.getPerformers);
router.put("/performers/:id", performerController.updatePerformer);

// CATEGORY
router.post("/categories", categoryController.createCategory);
router.delete("/categories/:id", categoryController.deleteCategory);
router.get("/categories", categoryController.getCategories);
router.put("/categories/:id", categoryController.updateCategory);

// DRINK
router.post("/drinks", drinkController.createDrink);
router.delete("/drinks/:id", drinkController.deleteDrink);
router.get("/drinks", drinkController.getDrinks);
router.put("/drinks/:id", drinkController.updateDrink);

// PRICELIST
router.post("/pricelists", pricelistController.createPricelist);
router.delete("/pricelists/:id", pricelistController.deletePricelist);
router.get("/pricelists", pricelistController.getPricelists);
router.put("/pricelists/:id", pricelistController.updatePricelist);

module.exports = router;
