# 📦 Proyecto: API REST con Node.js y MongoDB Dockerizado

Este proyecto es el resultado de la actividad evaluativa del Curso Nivelador del Máster en Full Stack Web Development de Three Points. La aplicación consiste en una API REST desarrollada en Node.js que se conecta a una base de datos MongoDB alojada en un contenedor Docker.

---

## 📁 Estructura del Proyecto

```
proyecto_tec_desar_web/
├── src/                    # Código fuente de la API
│   ├── controllers/        # Lógica de negocio
│   ├── models/             # Modelos de datos (Mongoose)
│   └── routes/             # Definición de rutas
├── .dockerignore           # Archivos ignorados por Docker
├── .gitignore              # Archivos ignorados por Git
├── Dockerfile              # Configuración de la imagen de la API
├── docker-compose.yml      # Orquestación de contenedores
├── index.js                # Punto de entrada de la aplicación
├── package.json            # Dependencias y scripts
└── README.md               # Este archivo
```
---

## ✅ Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (opcional, si deseas ejecutar la app fuera de Docker)

---

## 🚀 Instrucciones de Instalación y Ejecución


### 1. Clonar el Repositorio

```
git clone https://github.com/deivis9010/proyecto_tec_desar_web.git
cd proyecto_tec_desar_web
```


### 2. Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto y define las siguientes variables:
```
env

PORT=3000
MONGODB_URI=mongodb://mongo:27017/mi_basedatos
```
Nota: Asegúrate de que el nombre del servicio de MongoDB en docker-compose.yml coincida con el hostname en MONGODB_URI.

### 3. Construir y Levantar los Contenedores

```
docker-compose up --build
```
Este comando:

Construirá la imagen de la API definida en el Dockerfile.

Levantará un contenedor para MongoDB con persistencia de datos.

Iniciará la API y establecerá la conexión con la base de datos.

### 4. Verificar el Funcionamiento
Una vez que los contenedores estén en ejecución, puedes acceder a la API en:

```
http://localhost:8000/
Para probar los endpoints, puedes utilizar herramientas como Postman o curl.
```

### 🧪 Endpoints Disponibles
A continuación, se describen los endpoints principales de la API:

#### Obtener todas las calificaciones
#### Método: GET
```
URL: /api/getallgrades

Descripción: Retorna una lista de todos los usuarios en la base de datos.
```
#### Calificaciones aprobadas según que profesor
#### Método: PUT
```
URL: /api/getapprovedgrade/:nombre
Descripción: Obtiene dado el nombre de un profesor las calificaciones aprobados donde el aprobado es mayor o igual a 5
```
#### Establece si se puede repetir el examen de la calificación
#### Método: PUT
```
URL:  /api/CanRepeatExam/:grade_id
Body:
{
    "grade_id": "6",
    "class": "Clase6",
    "grade": 6,
    "professor": "Deivis",
    "canRepeatExam": false
}
Descripción: Este endpoint permite actualizar el campo canRepeatExam de una calificación dado su grade_id.
Si el grade ya existe y su nota es mayor o igual a 5, no se puede actualizar.
```
#### Elimina todas las calificaciones por un profesor dado su nombre
#### Método: DELETE
```
URL:  /api/deleteByProfessor/:professor


```


## 🛠️ Scripts Útiles
En el archivo package.json, se definen los siguientes scripts:

Iniciar la Aplicación:
```
npm start
```
Iniciar en Modo de Desarrollo (con nodemon):
```
npm run dev
```
Nota: Estos scripts son útiles si decides ejecutar la aplicación fuera de Docker.

## 🧹 Detener y Limpiar Contenedores
Para detener los contenedores:
```
docker-compose down
```
Para eliminar volúmenes y redes asociados:
```
docker-compose down --volumes --remove-orphans
```

## 📌 Consideraciones Finales

* La API está desarrollada utilizando el framework Express y utiliza Mongoose para interactuar con MongoDB.
* Se recomienda revisar y ajustar las configuraciones según las necesidades específicas del entorno de despliegue.
