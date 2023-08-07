# Prueba Técnica Rocket Code

## Iniciar back-end y front-end

Para iniciar el tanto el back-end como front-end de la aplicación, debes abrir en la terminal los directorios root de client y de server:
```
\client
\server
```
Ahora deberás ejecutar el comando para instalar todas las dependencias necesarias para que el proyecto funcione, así en ambos directorios:
```bash
npm install
```
Luego de eso deberás ejecutar el comando para inicializar ambas partes de la apliación, así en ambos directorios nuevamente:
```bash
npm run dev
```

## Acceder a la aplicación

El servidor debería estar mostrando los siguientes mensajes:
```
Server ready at http://localhost:4000/
Connected to MySQL database!
Table users_test_andrescasas created or already exists!
```

Para visualizar la parte front-end puedes realizar ctrl+click en la url que sale en la ruta \client al iniciar el proyecto
```bash
➜ Local:   http://localhost:5173/
```
Si deseas revisar la base de datos para ver los usuarios guardados puedes hacerlo a través del sandbox de Apollo ingresando a su URL y ejecutando el siguiente query:
```
url: http://localhost:4000/
```

```graphql
query {
  users {
    name
    middle_name
    last_name
    second_last_name
    birth_date
    email
    phone
  }
}
```

Al presionar el botón de iniciar, los datos de ingresados se guardarán en variables de sesión con el key "clientInfo" utilizando el Session Storage, puedes verlos al inspeccionar la página, presionando la pestaña Application.

El resto de las instrucciones están en la aplicación, quedo atento a cualquier feedback o aporte para mi mejoría.