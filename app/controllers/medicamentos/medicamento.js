var model = require('../../models');
var doc = model.medicamentos;

module.exports = {
    crear: (req, res) => {
        var Db = model.medicamentos;
        var medicamento = new Db();

        var data = req.body;
        
        medicamento.fecha= data.fecha;
        medicamento.medicamento= data.medicamento;
        medicamento.CHAAM= data.CHAAM;
        medicamento.JJV= data.JJV;
        medicamento.ADGH= data.ADGH;
        medicamento.MFV= data.MFV;
        medicamento.GG= data.GG;
        medicamento.MMV= data.MMV;
        medicamento.PPR= data.PPR;
        medicamento.CNB= data.CNB;
        medicamento.detalle= data.detalle;
        medicamento.key= data.key
        

        medicamento.save((error, result) => {
            if (!error) {
                if (result != undefined || result != null) {
                    res.status(200).send({
                        title: "Completado",
                        class: "success",
                        mensaje: "Los datos han sido registrados correctamente",
                        data: result
                    });
                } else {
                    res.status(400).send({
                        title: "Error",
                        class: "warning",
                        mensaje: "Error al intentar registrar los datos",
                        data: result
                    });
                }
            }
        });
    },
    listar: (req, res) => {
        doc.find((error, result) => {
            if (!error) {
                if (result != undefined || result != null) {
                    res.status(200).send({
                        titulo: "Registro correcto",
                        clase: "success",
                        mensaje: "Se muestran registros",
                        data: result
                    });
                } else {
                    res.status(404).send({
                        titulo: "Mensaje de Error",
                        clase: "danger",
                        mensaje: "No se encuentran registros en esta peticion",
                        data: false
                    });
                }
            } else {
                res.status(500).send({
                    title: "Internal Server Error",
                    class: "warning",
                    message: error,
                    data: null
                });
            }
        });
    },
    
    editar: (req, res) => {
        var id = req.params;
        var data = req.body;
        doc.findOneAndUpdate(id, data, (error, result) => {
            if (!error) {
                if (result != undefined || result != null) {
                    res.status(200).send({
                        titulo: "Registro correcto",
                        clase: "success",
                        mensaje: "Los datos han sido actualizados",
                        data: result
                    });
                } else {
                    res.status(404).send({
                        titulo: "Mensaje de Error",
                        clase: "danger",
                        mensaje: "No se ha podido editar los datos",
                        data: null
                    });
                }
            } else {
                res.status(500).send({
                    titulo: 'Mensaje de Error',
                    clase: 'warning',
                    mensaje: 'Error al actualizar el registro',
                    data: err
                });
            }
        });
    },

    eliminar: (req, res) => {
        var id = req.params;
        doc.findByIdAndRemove(id, (error, result) => {
            if (error) {
                res.status(500).send({
                    titulo: 'Mensaje de Error',
                    clase: 'warning',
                    mensaje: 'Error al eliminar registros',
                    data: error
                });
            } else if (result === undefined || result.length < 1) {
                res.status(404).send({
                    titulo: 'Mensaje de Error',
                    clase: 'danger',
                    mensaje: 'No se ha podido eliminar este registro',
                    data: null
                });
            } else {
                res.status(200).send({
                    titulo: 'Registro correcto',
                    clase: 'success',
                    mensaje: 'Se registro elimnado',
                    data: result
                });

            }
        });
    }
}