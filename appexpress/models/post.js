const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    titulo: String,
    usuario: String,
    fecha: Number,
    categoria: String,
    mensaje: String
});

module.exports = mongoose.model('Post', postSchema);