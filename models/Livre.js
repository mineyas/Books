var db = require('../dbconnection')

var Livre = {

    getAllLivres: function (callback){
        return db.query("Select * from livre", callback)
    },
    getLivreById: function (id, callback){
        return db.query("select * from livre where id=?", [id], callback)

    },
    addLivre: function (Livre, callback){
        return db.query("insert into livre values(?,?,?,?)", [Livre.id, Livre.titre, Livre.auteur, Livre.pages], callback)
    },
    updateLivre: function (id, Livre, callback){
        return db.query("update livre set Titre=?, Auteur=?, Pages=? where id=?", [Livre.titre, Livre.auteur, Livre.pages, id], callback)
    },
    deleteLivre: function (id, callback){
        return db.query("delete from livre where id=?", [id], callback)
    },

}

module.exports = Livre