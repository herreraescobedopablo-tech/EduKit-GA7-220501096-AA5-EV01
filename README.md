# Servicio Web de Autenticación EduKit

**Evidencia:** GA7-220501096-AA5-EV01
**Aprendiz:** Pablo Herrera
**Proyecto:** EduKit

## Descripción

Este proyecto consiste en el diseño y desarrollo de un servicio web para realizar el registro y el inicio de sesión de usuarios.

El servicio recibe un usuario y una contraseña y verifica las credenciales registradas. Si los datos son correctos, devuelve un mensaje de autenticación satisfactoria. Si los datos son incorrectos, devuelve un error de autenticación.

## Tecnologías utilizadas

* Node.js
* Express
* JavaScript
* JSON
* Git
* GitHub

## Funcionalidades

### Registro de usuario

Permite registrar un nuevo usuario mediante:

```text
POST /api/registro
```

Ejemplo de datos:

```json
{
  "usuario": "pablo",
  "contrasena": "123456"
}
```

Respuesta:

```json
{
  "mensaje": "Usuario registrado correctamente"
}
```

### Inicio de sesión

Permite verificar las credenciales mediante:

```text
POST /api/login
```

Si los datos son correctos:

```json
{
  "mensaje": "Autenticación satisfactoria"
}
```

Si los datos son incorrectos:

```json
{
  "error": "Error en la autenticación"
}
```

## Ejecución del proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir una terminal.
4. Instalar las dependencias:

```bash
npm install
```

5. Iniciar el servidor:

```bash
npm start
```

6. El servicio estará disponible en:

```text
http://localhost:3000
```

## Pruebas realizadas

Se realizaron las siguientes pruebas:

* Registro de un usuario.
* Inicio de sesión con credenciales correctas.
* Inicio de sesión con credenciales incorrectas.

Los resultados fueron satisfactorios.

## Control de versiones

El proyecto utiliza Git y GitHub para realizar el control de versiones y almacenar el código fuente del servicio web.

## Observación

Para esta evidencia se utiliza un almacenamiento temporal de usuarios en memoria. En una aplicación real, esta información podría almacenarse en una base de datos y las contraseñas deberían protegerse mediante mecanismos de cifrado o hash.
