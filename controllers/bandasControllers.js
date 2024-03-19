const bandas = require("../db");
let bandasControllers = {
    listadoBandas: function (req, res) {
        
        return res.render('listadoBandas', {
            index: bandas
        })
    },
//Validar que si el id de la banda que está en la URL no existe se muestre un mensaje ilustrativo -->

    detalleBandas: function (req, res) {
        let idEnviado = req.params.id
        let detalleBanda = []
        for (let i = 0; i < bandas.lista.length; i++) {
            if (idEnviado == bandas.lista[i].id) {
                detalleBanda.push(bandas.lista[i])
                return res.render('detallesBanda',{
                    index:detalleBanda
                })
            }
        }
        return res.render('idNovalido',{
            mensaje:'No existe el id:'+ idEnviado +', intente nuevamente con otro.'})
        

    },
    porGenero: function (req, res) {
        let generoEnviado = req.params.genero
        console.log("Genero enviado:", generoEnviado);

        let generoBanda = []
        for (let i = 0; i < bandas.lista.length; i++) {
            if (generoEnviado == bandas.lista[i].genero) {
                generoBanda.push(bandas.lista[i])
                return res.render('porGenero',{
                    bandas: generoBanda,
                    
                    generoEnviado: generoEnviado,
                })
            }
        }
        return res.render('idNovalido',{
            mensaje:'No existe el genero:'+ generoEnviado +', intente nuevamente con otro.'})
     },
     

}




module.exports = bandasControllers