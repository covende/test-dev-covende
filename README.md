# COVENDE

Descripción del proyecto Covende.

## Estructura de carpetas

```
src
│   App.js
│   index.js
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
│   └───shared
│   │   │   *Todos los componentes reusables o compartidos*
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
│   │  *Recursos para el desarrollo del sistema*
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
└───services [Posiblemente se anule]
│   │   *Servicios para consumo de API y logs de users (por evaluar)*
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

## Construyendo y ejecutando localmente

Primero instale dependencias:

```sh
npm install
```

Para crear una 'build' de producción:

```sh
npm run build
```

## Pruebas

Para correr las pruebas unitarias:

```sh
npm run test:unit
```
