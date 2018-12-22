var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let medicamentoSchema = Schema({
    fecha: Date,
    medicamento: String,
    CHAAM: String,
    JJV: String,
    ADGH: String,
    MFV: String,
    GG: String,
    MMV: String,
    PPR: String,
    CNB: String,
    detalle: String,
    key: String
});

module.exports = mongoose.model('medicamentos', medicamentoSchema);
