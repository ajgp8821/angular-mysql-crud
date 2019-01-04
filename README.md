# angular-mysql-crud

# Crear una carpeta "server", dentro de ella
$npm init --yes
# Crea un archivo "package.json"
# Instalamos dependencias
# express: Módulo para crear un servidor
# morgan: para ver en consola lo que las aplicaciones cliente van pidiendo (get, put, post)
# promise-mysql: para conectar node con mysql usando async away(es el módulo de conexión, no es la base de datos)
# cors: permite comunicar 2 servidores (Angular con Rest API)
$npm i express morgan promise-mysql cors
# Crear la carpeta "src", y dento un archivo "index.ts", a modo de ejemplo mandar por consola un texto de ejemplo
# Descargar e instalar Typescript
$npm install -g typescript
# Creamos el archivo "tsconfig.json"
$tsc --init
# Dentro del archivo cambiamos "target" a "es6"
# Descomentaos "outDir" (En donde coloca el código TS) y su valor a "./build"
# Escribimos en consola
$tsc
# Aparece la carpeta "build" y dentro un archivo "index.js", sería lo que está en "src" traducido a js
# Para ejecutar el código de build escribir en cónsola
$node build/index.js
# En "package.json" agregar un script, w: se queda vigilando cambios
"build": "tsc -w"
# Ejecutar en la primera cónsola npm run build
$npm run build
# Modificar el archivo "index.ts", abrir otra cónsola y ejecutar (dentro de la carpeta "server")
$node build/index.js
# Para evitar escribir el comando anterior, instlamos una dependencia de desarrollo (-D)
$npm install nodemon -D
# Crear otro comando en "package.json"
"dev": "nodemon build/index.js"
# En la segunda cónsola
$npm run dev
# La primera vigila TS y la segunda JS


############ Configurando EXpress usando Typescript ############

# Para agregar la librería de ayuda VisualStudioCode para TS
# Abrir otra consola en server
$npm install @types/express -D
# El archivo index.ts inica el server
# Se crea una carpeta "routes" donde se agregarán los archivos con las configuraciones de cara ruta
# En index.ts se importa morgan y cors, en cónsola se instalan los módulos
$npm install @types/morgan @types/cors -D
# Morgan se invoca en "index.ts"
# Cors se invoca en "index.ts"
# express.json se invoca en "index.ts"
# express.urlencoded({extended: false}) se invoca en "index.ts"


############ Databse MySQL ############ https://youtu.be/lxYB79ANJM8?t=3007

# Crear carpeta hermana de "server" llamada "database" y dentro un archivo llamdao "database.sql"
# Crear la base de datos en el archivo, junto a las tablas
# En cónsola
$mysql -u user -p
# Para conectar la app con la db creamos dos archivos dentro de "server/src" llamado "database.ts" y "keys.ts"
# "keys.ts" tendrá los datos de la conexión
# "database.ts tendrá la configuración para la conexión, se usará en donde se quieren hacer las consultas, en "routes"
# Crear carpeta llamada "controllers" y los archivos "indexController.ts" y "gameController.ts" donde se colocará en un método "index" el contenido del método "config" de "indexRoutes.ts
# En es estos archivos traemos la base de datos, importamos la clase database.ts y podemos usar query


############ REST API usando Nodejs y MySQL ############ https://youtu.be/lxYB79ANJM8?t=3908
# Crearemos las rutas del servidor que Angular utiliza para guardar datos

# Creamos los métodos para en Controller y agregamos la ruta con el tipo de petición en Routes


############ Creando el Frontend con Angular ############ https://youtu.be/lxYB79ANJM8?t=5585
# Creamos una carpeta para Angular
# Abrimos una terminal en la ruta del proyecto, no en "server"
# creamos el proyecto "client" --routing crea el módulo de rutas
$ng new client --ruoting
# Diseñamos la navegación y utilizar el enrutador de Angular
# Dentro de "client" g: generate, c: component
$ ng g c components/navigation
# Formulario para los juegos
$ ng g c components/games-form
# Para listar los juegos
$ ng g c components/games-list
# Modelar los datos (interfaces)
# Crear la carpeta "models"  dentro de "src/app" que tendrá los modelos de los datos
$ mkdir models
# Dentro crear la interfaz "Game.ts"
# Generamos los servicios s: service, contiene el archivo de testeo
$ ng g s services/game
#importamos Bootstrap por CDN y se coloca en "index.html"
# Colocamos el menú de navegación en "navigation.component.html"
# Agregamos la ruta en "app-routing.module.ts"
# En los servicios me conecto a la Rest API, se importa en providers en "app-module.ts"
#   Se importa "HttpClientModule" para completar el servicio
# Se crean los métodos en "game.service.ts" y la interface con lo datos en "Game.ts"
# En "games-list.component.ts" importamos "game.service.ts" y en el constructor le pasamos por parámetro un objeto de tipo             GameService, en ngOnInit hacemos la consulta de los juegos con un Subscribe
# En "games-list.component.html" creamos la vista de los juegos
# Crear el formulario para agregar nuevos juegos, modificamos "app-routing.module.ts" para que funcione el botón
## Para evitar que se haga una nueva petición al servidor se usa routerLink en "navigation.component.html"
# Crear el formulario en "games-from.component.html"
## En "app.module.ts" importamos FromsModule
# En "games-from.component.ts" se crea el objeto Game, y el método "saveNewGame", se importa el módulo Router para redirigir luego     de guardar un juego
# En "games-list.component.ts" se crea el objeto Game, y el método "deleteGame"
# https://youtu.be/lxYB79ANJM8?t=9987
# Para editar vamos a agregar en "app-routing.module.ts" la ruta con el componente "GamesFormComponent"
## Se agrega [routerLink] en "games-list.component.html"
## En "games-form.component.ts" en "ngOninit" hacemos la validación del parámetro, si es editar o agregar un nuevo juego con            ActivatedRoute instanciado en el constructor
##  Validamos que si tiene el id en la url se carga el formulario con los datos para editar
##  Creamos la variable edit:bool, cuando se edita sea true
##  En "games-form.component.html" se evalua la variable edit en el evento (click)
# https://youtu.be/lxYB79ANJM8?t=10797