var mongoose = require('mongoose');
var <OBJECT> = mongoose.model('<OBJECT>');

module.exports = {
  index: function(req, res){
    OBJECT.find({}, function(err, OBJECTS) {
      if (err) {
        res.json({messsage: "Failed to return all objects", error: err});
      } else {
        res.json({message: "Success", <OBJECTS>: <OBJECTS>})
      }
    });
  },
  show: function(req, res){
    var id = req.params.id;
    OBJECT.findOne({_id: id}, function(err, OBJECT) {
      if (err) {
        res.json({message: "Failed to show one object", error: err});
      } else {
        res.json({msesage: "Succses", <OBJECT>: OBJECT});
      }
    });
  },

  create: function(req, res){
    var <OBJECT> = new <OBJECT>();
    // <OBJECT>.<NAME> = req.body.<NAME>;
    <OBJECT>.save(function(err) {
      if (err) {
        res.json({message: "Failed to create object", error: err});
      } else {
        res.json({message: "Success"});
      }
    });

    res.json({placeholder: "create"});
  },

  update: function(req, res) {
    var id = req.params.id;
    OBJECT.findOne({_id: id}, function(err, OBJECT) {
      if (err) {
        res.json({message: "Failed to update an object", error: err});
      } else {
        OBJECT.attribute = req.body.attribute_to_be_changed;
        OBJECT.save(function(err) {
          res.json({placeholder: "update"});
        })
      }
    });
  },

  delete: function(req, res) {
    var id = req.params.id;
    OBJECT.remove({_id: id}, function(err) {
      if (err) {
        res.json({message: "Failed to delete error", error: err});
      } else {
        res.json({message: "Success"});
      }
    });
    res.json({placeholder: "delete"})
  },

};