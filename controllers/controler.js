let db = require("../db/index");

let controlers = {

    lista: function(req,res){
        res.send(db.lista)
    }

}