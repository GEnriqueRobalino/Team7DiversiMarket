const Client = require('../model/Client');

const createClient = (req, res) => {
    // Validar reglas de negocio
    if (containsNumbers(req.body.nombre) || containsNumbers(req.body.apellido) || containsNumbers(req.body.ciudad)) {
        return res.status(400).json({ error: "El nombre, apellido y ciudad no deben contener números" });
    }

    const cedula = parseInt(req.body.cedula);
    if (isNaN(cedula) || cedula.toString().length !== 10 || cedula < 0) {
        return res.status(400).json({ error: "La cédula debe ser un número positivo de diez dígitos" });
    }

    const edad = parseInt(req.body.edad);
    if (isNaN(edad) || edad.toString().length !== 2 || edad < 0) {
        return res.status(400).json({ error: "La edad debe ser un número positivo de dos dígitos" });
    }

    // Crear el cliente
    const client = new Client({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        edad: req.body.edad,
        ciudad: req.body.ciudad,
    });

    client.save()
        .then(cli => res.status(200).json(cli))
        .catch(err => res.status(500).json(err.message));
};

const getClients = (req, res) => {
    Client.find()
        .then(clients => res.status(200).json(clients))
        .catch(err => res.status(500).send(err.message));
};

const updateClient = (req, res) => {
    Client.findOneAndUpdate({ name: req.body.name }, { new: true })
        .then(cli => res.status(200).send(cli))
        .catch(err => res.status(500).send(err.message));
};

const deleteClient = (req, res) => {
    Client.findOneAndDelete({ nombre: req.body.nombre })
        .then(cli => res.status(200).send(cli))
        .catch(err => res.status(501).send(err.message));
};

const getClientsforCity = (req, res) => {
    Client.find({ciudad: req.body.ciudad})
        .then(clients => { 
            if(clients.length > 0 ){
                res.status(200).json(clients)
            }else{
                res.status(200).send(`No hay clientes en la ciudad de ${req.body.ciudad}`)
            }
        })
        .catch(err => res.status(500).send(err.message));
};
module.exports = { createClient, getClients, updateClient, deleteClient, getClientsforCity };

// Función auxiliar para verificar si un string contiene números
function containsNumbers(str) {
    return /\d/.test(str);
}
