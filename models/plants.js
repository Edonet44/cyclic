///SCHEMA DEL DATABASE

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlantsSchema = new Schema({
    // _id: ObjectId (Non è necessario specificare il tipo, MongoDB gestirà automaticamente ObjectId)
    _id: {
        type: String, // Se si desidera utilizzare un tipo diverso da ObjectId
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    plantingDate: {
        type: Date,
        required: true
    },
    initialHeight: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    },
    imageUrl: {
        type: String
    }
});

module.exports = mongoose.model('Plant', PlantsSchema);
