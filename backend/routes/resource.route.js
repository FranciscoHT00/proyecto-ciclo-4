let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let resourceSchema = require("../models/Resource");

// CREAR Recurso
router.route("/create-resource").post((req, res, next) => {
  resourceSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Recursos
router.route("/").get((req, res, next) => {
  resourceSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener un Recurso
router.route("/edit-resource/:id").get((req, res, next) => {
  resourceSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Actualizar Recurso
router.route("/update-resource/:id").put((req, res, next) => {
  resourceSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("User updated successfully !");
      }
    }
  );
});

// BORRAR Recurso
router.route("/delete-resource/:id").delete((req, res, next) => {
  resourceSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
