// =====================================================
// SERVICIO WEB DE REGISTRO E INICIO DE SESIÓN
// Evidencia: GA7-220501096-AA5-EV01
// Proyecto: EduKit
// =====================================================

// Importamos Express para crear el servidor web.
const express = require("express");

// Creamos una instancia de la aplicación.
const app = express();

// Definimos el puerto donde funcionará el servicio.
const PORT = 3000;

// Permite que Express pueda recibir información en formato JSON.
app.use(express.json());

// -----------------------------------------------------
// BASE DE DATOS TEMPORAL
// -----------------------------------------------------
// Para esta evidencia utilizaremos un arreglo en memoria.
// Más adelante podría reemplazarse por una base de datos.
const usuarios = [];

// -----------------------------------------------------
// RUTA PRINCIPAL
// -----------------------------------------------------
// Permite comprobar que el servicio web está funcionando.
app.get("/", (req, res) => {
    res.json({
        mensaje: "Servicio web de autenticación EduKit funcionando correctamente"
    });
});

// -----------------------------------------------------
// REGISTRO DE USUARIO
// -----------------------------------------------------
// Método: POST
// Ruta: /api/registro
//
// Recibe:
// {
//     "usuario": "pablo",
//     "contrasena": "123456"
// }

app.post("/api/registro", (req, res) => {

    // Obtenemos los datos enviados por el usuario.
    const { usuario, contrasena } = req.body;

    // Verificamos que los campos sean obligatorios.
    if (!usuario || !contrasena) {
        return res.status(400).json({
            error: "El usuario y la contraseña son obligatorios"
        });
    }

    // Verificamos si el usuario ya existe.
    const usuarioExistente = usuarios.find(
        (item) => item.usuario === usuario
    );

    if (usuarioExistente) {
        return res.status(409).json({
            error: "El usuario ya está registrado"
        });
    }

    // Guardamos el nuevo usuario.
    usuarios.push({
        usuario: usuario,
        contrasena: contrasena
    });

    // Respondemos confirmando el registro.
    res.status(201).json({
        mensaje: "Usuario registrado correctamente"
    });
});

// -----------------------------------------------------
// INICIO DE SESIÓN
// -----------------------------------------------------
// Método: POST
// Ruta: /api/login
//
// Recibe:
// {
//     "usuario": "pablo",
//     "contrasena": "123456"
// }

app.post("/api/login", (req, res) => {

    // Obtenemos los datos enviados.
    const { usuario, contrasena } = req.body;

    // Buscamos un usuario que coincida con los datos.
    const usuarioEncontrado = usuarios.find(
        (item) =>
            item.usuario === usuario &&
            item.contrasena === contrasena
    );

    // Si encontramos el usuario, la autenticación es correcta.
    if (usuarioEncontrado) {
        return res.status(200).json({
            mensaje: "Autenticación satisfactoria"
        });
    }

    // Si no coincide, devolvemos un error de autenticación.
    res.status(401).json({
        error: "Error en la autenticación"
    });
});

// -----------------------------------------------------
// INICIAR SERVIDOR
// -----------------------------------------------------

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
