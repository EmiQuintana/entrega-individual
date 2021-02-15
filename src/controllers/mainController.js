const db = require('../database/models/index')

module.exports = {
    index: function(req, res){
        db.Nota.findAll ({
            where: {
            deleted_At: null,}
        })
        .then (function (notitasFiltradas){
            return res.render("./index",{
                notitasdb: notitasFiltradas,
            })
        })
    },
    create: function(req, res) {
       db.Nota.create ({
           titulo: req.query.titulo, 
           texto: req.query.texto
       })
       res.redirect("/");
    }, 
    delete: function(req, res){
        db.Nota.update ({
            deleted_At: Date.now()
        },
            {
                where: {
                    id:req.params.id
                }
            })
        .catch(function(error){
            console.log(error)
        })
        res.redirect("/");
    },  
    detail: function(req, res) {
        db.Nota.findByPk(req.params.id)
        .then(function(nota) {
            return res.render('./detail', {
                nota,
            })
        })
    },
    edit: function(req, res) {
        db.Nota.update({
            titulo: req.body.title,
            texto: req.body.message

        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(verQueOnda) {
            console.log(verQueOnda)
            return res.redirect('/detail/'+ req.params.id)
        })
    },
}