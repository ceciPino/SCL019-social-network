<img src="src/images/readme/logoReadme.png" height="50%" width="50%">
 
****

[Ir a Plantasia](src/index.html)

Plantasia es una red social orientada a conectar a personas amantes de las plantas, en un espacio dedicado específicamente al tema. La forma en la que Plantasia resuelve esta necesidad es a través de la posibilidad que da al usuario de publicar contenido, dar y recibir likes e incluso editar o borrar sus publicaciones. Así, nuestros usuarios podrán compartir dudas, consejos o simplemente actualizaciones respecto al estado de sus plantas. 

## Índice

* [1. Hallazgos](#1-hallazgos)
* [2. Historias de Usuario](#2-historias-de-usuario)
  * [2.1 HU1](#2.1-hu1)
  * [2.2 HU2](#2.2-hu2)
  * [2.3 HU3](#2.3-hu3)
* [3. Proceso de diseño](#3-proceso-de-diseño)
* [4. Tecnologías](#4-tecnologías)

## Hallazgos

La temática de nuestro proyecto la determinamos definiendo 3 propuestas iniciales, para luego decidir la opción que desarrollaríamos.  Encuestamos a un grupo de alrededor de 40 personas, quienes escogieron la opción de desarrollar una red social de plantas. 

Después de ya seleccionar la temática, se hicieron algunas encuestas para definir bien a nuestro usuario.



<!-- Con este input editamos nuestra primera historia de usuario añadiendo el diseño del logo de inicio y escogiendo una paleta de colores. -->

## Historias de Usuario

### HU1

En nuestra primera Historia de Usuario definimos la vista de registro de cuenta, investigando e implementando las funcionalidades de Firebase de crear usuario de forma manual o con una cuenta de Google.

#### **Criterios de Aceptación**

- Que el usuario pueda iniciar sesión con correo y contraseña (****)
- Que el usuario pueda usar su cuenta de google para iniciar sesión
- Que la contraseña se oculte/muestre
- Que el usuario si es que no tiene una cuenta, pueda dirigirse a la vista de registro.
- Que la plataforma responsive

#### **Prototipo formato mobile**

<img src="src/images/readme/protBajaFidelidadLogIn.jpeg" width="45%" >

<img src="src/images/readme/log in sin datos ingresados.jpg" width="45%" align = "left">
<img src="src/images/readme/log in datos ingresados.jpg" width="45%">

#### **Prototipo formato desktop**

<img src="src/images/readme/loginDesktop.png" width="96.5%">


### HU2
En la segunda Historia de Usuario definimos la vista de inicio de sesión, nuevamente investigando e implementando las funcionalidades de Firebase para iniciar sesión de forma manual, y/o utilizando la autenticación a través de una cuenta de Google. 

#### **Criterios de Aceptación**

- Que el usuario pueda crear una cuenta con correo, nombre de usuario y contraseña (****)
- Que el usuario pueda usar su cuenta de google para registrarse
- Que la contraseña se oculte/muestre
- Que el usuario si es que ya se creó una cuenta, pueda dirigirse a la vista de iniciar sesión.
- Que la plataforma responsive

<img src="https://user-images.githubusercontent.com/95260008/160394544-3203ef91-0079-4c7e-b5c3-3cc11d37b8b7.jpeg" width="48%" > 

<img src="src/images/readme/register.jpg" width="48%" >

### HU3

En nuestra tercera Historia de Usuario definimos la vista del muro en el cual se desplegan los posts de los usuarios. En nuestro prototipo de baja fidelidad aparecen post con texto y con imágenes, con botones para dar "me gusta" y comentar en cada post. En esta historia de usuario desarrollamos las funcionalidades de escribir un nuevo post, y que estos de desplieguen con el nombre de usuario, y que los posts aparezcan del más reciente al más antiguo. Además, añadimos el botón de "me gusta" y el contador de estos, con las condiciones de un "me gusta" por usuario en un post.

Una de las restricciones añadidas a través del ruteo de flujo de nuestra página web fue la de poder acceder al muro solo si el usuario ha iniciado sesión. 

#### **Criterios de Aceptación**

- Que el usuario pueda publicar texto en el muro con un text area y con un botón de publicar
- Que se guarden las publicaciones en tiempo real
- Que el usuario pueda ver las publicacione ordenadas desde el más reciente al más antiguo
- Que el usuario pueda darle like a un post
- Que usuario pueda ver un contador de likes por publicación
- Que la plataforma responsive

#### **Prototipo formato mobile**

<img src="src/images/readme/protBajaFidelidadHome.jpeg" width="45%" >

<img src="src/images/readme/homeTextMobile.jpg" width="45%" align = "left">
<img src="src/images/readme/homeText&Images.jpg" width="45%">

#### **Prototipo formato desktop**

<img src="src/images/readme/homeTextDesktop.jpg" width="96.5%">


## Proceso de diseño

<img src="src/images/readme/iteraciónLogo.png" height="34%" width="34%" align = "left">
<img src="src/images/readme/eleccionTipografica.png" height="34%" width="34%" >

## Tecnologías

![Icono JavaScript](https://img.icons8.com/color/40/ffffff/javascript--v1.png "JavaScript")
![Icono HTML5](https://img.icons8.com/color/40/ffffff/html-5--v1.png "HTML5")
![Icono CSS](https://img.icons8.com/color/40/ffffff/css3.png "CSS")
![Icono Firebase](https://img.icons8.com/color/40/ffffff/firebase.png "Firebase")
![Icono Git](https://img.icons8.com/color/40/ffffff/git.png "Git")
![Icono GitHub](https://img.icons8.com/ios-glyphs/40/ffffff/github.png "GitHub")
![Icono Visual Studio Code](https://img.icons8.com/color/40/ffffff/visual-studio-code-2019.png "Visual Studio Code")
![Icono Figma](https://img.icons8.com/color/40/ffffff/figma--v1.png "Figma")
![Icono Trello](https://img.icons8.com/color/40/000000/trello.png "Trello")

Palabras clave: JavaScript, HTML5, CSS3, Firebase, Git, GitHub, Visual Studio Code, Figma, Trello.
