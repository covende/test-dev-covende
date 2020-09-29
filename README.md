<p style="text-align: center">
  <a href="https://covende.com/" target="blank">
    <img src="assets/images/Logo-CoVende.png" width="320" alt="Covende Logo" />
  </a>
</p>
  
# FRONTEND

## Tecnologias usadas 🛠️
* [ReactJS](https://reactjs.org) - Biblioteca de JavaScript para construir interfaces de usuario
* [Webpack](https://webpack.js.org) - Herramienta de compilación de dependencias
* [Redux](https://es.redux.js.org) - Es un contenedor de estados predecible de aplicaciones JavaScript
* [Redux Saga](https://redux-saga.js.org) - Biblioteca que maneja los efectos secundarios de la aplicación (es decir, cosas asincrónicas como la obtención de datos y cosas impuras como acceder al caché del navegador) sean más fáciles de administrar, más eficientes de ejecutar, fáciles de probar y mejores en el manejo de fallas.
* [Material-UI](https://material-ui.com/) - Framework popular para UI en React
* [Emotion](https://emotion.sh/docs/introduction) - Biblioteca diseñada para escribir estilos CSS con JavaScript
* [MochaJS](https://mochajs.org) - Framework para pruebas asincrónicas simples y divertidas.
* [ChaiJS](https://www.chaijs.com) - Biblioteca de aserciones BDD / TDD
* [EnzymeJS](https://enzymejs.github.io/enzyme/) - Utilitario para testing de componentes de React
* [JSDoc](https://jsdoc.app) - Generador de documentación API para JavaScript, similar a Javadoc o phpDocumentor



## Pre-requisitos 📋

* [NPM](https://www.npmjs.com) - Gestor de paquetes
* Sólido conocimiento en Javascript

## Estructura de carpetas

```
src
│   App.js
│   AppExampleTesting.js
│   AppExampleTesting.spec.js
│   index.html
│   index.js
│   theme.js
│
└───assets
│   │  *Todo archivos de contenido estático*
│
└───components
│   │
│   └───@covende-ui
│   │   │   Button
│   │   │   Link
│   │   │   Typography
│   │
│   └───[Component Name]
│   │   │ [PartialName].js
│   │   │ [PartialName].styles.js
│
└───constants
│   │  *Todo constantes para el manejo global de redux con el sistema*
│
└───helpers
│   │  *Recursos para el desarrollo del sistema*
│
└───layouts
│   │  *Diseños de secciones comunes del sistema*
│
└───pages
│   │   *Todas las páginas del sistema*
│
└───redux
│   │
│   └───[Redux section]
│   │   *Ajustes del redux*
│   │   [Redux saga files]
│
└───routes
│   │   *Todas las rutas del sistema*
│
└───services [Posiblemente se anule o se inserte en la carpeta 'helpers']
│   │   *Servicios para consumo de API y logs de users (por evaluar)*
│
test
│   dom.js
│   helpers.js
│
.babelrc
│
.eslintrc.json
│
.gitignore
│
.prettierrc
│
commitlint.config.js
│
jsdoc.conf.json
│
package.json
│
README.md
│
webpack.config.js
```

## Instalación
```sh
npm install
```

## Ejecutando
En desarrollo
```sh
npm run dev
```
En producción
```sh
npm run build
```

## Pruebas
Para ejecutar las pruebas unitarias:
```sh
npm run test:unit
```
