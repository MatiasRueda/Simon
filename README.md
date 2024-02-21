# Simón

![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Esta app ofrece al usuario un simple juego de Simón Dice donde podrá poner a prueba su memoria.

## Tabla de contenido
* [Introducción](#Introducción)
* [Tabla de contenido](#Tabla-de-contenido)
* [Tipo de proyecto](#Tipo-de-proyecto)
* [Capturas de pantalla](#Capturas-de-pantalla)
* [Estrategias](#Estrategias)
* [Tecnologías utilizadas](#Tecnologías-utilizadas)
* [Estructura](#Estructura)
* [Instalación](#Instalación)
* [Uso](#Uso)


## Tipo de proyecto
Proyecto individual.

## Capturas de pantalla 
<p align="center">
<img src="https://i.postimg.cc/4xH0cL7j/Screenshot-2024-02-20-20-48-59-199-com-matiasrueda-Simon.jpg" width=200/>
<img src="https://i.postimg.cc/jjKhjZzH/Screenshot-2024-02-20-20-49-07-946-com-matiasrueda-Simon.jpg" width=200/>
<img src="https://i.postimg.cc/nhwQy23V/Screenshot-2024-02-20-20-49-30-349-com-matiasrueda-Simon.jpg" width=200/>
</p>

## Estrategias
### Smart y Dumb Component
Se separaron los componentes que se utilizan en el proyecto en smart  y dumb component según la responsabilidad que tengan. Esto lo hice con el objetivo de obtener un código mas conciso y una mejor legibilidad </br> 
**Smart**:  Tendrán la lógica del componente, operaciones complejas , gestionan eventos y acciones del usuario.</br>
**Dumb**: No manejan la lógica, se encargan únicamente de la presentación.

## Tecnologías utilizadas
  - React native
  - Typescript
  - 
## Estructura 

```
Simon
├─ .gitignore
├─ .vscode
│  └─ .react
├─ app.json
├─ App.tsx
├─ assets
│  ├─ icon.png
│  └─ splash.png
├─ babel.config.js
├─ eas.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ auxiliar
│  │  └─ brillo.ts
│  ├─ components
│  │  ├─ dumb
│  │  │  ├─ DMenu.tsx
│  │  │  ├─ DNivel.tsx
│  │  │  ├─ DPieza.tsx
│  │  │  ├─ DPiezas.tsx
│  │  │  └─ DTitulo.tsx
│  │  └─ smart
│  │     ├─ SBotonMenu.tsx
│  │     ├─ SCambiarColor.tsx
│  │     ├─ SExplicacion.tsx
│  │     ├─ SJugar.tsx
│  │     ├─ SMensaje.tsx
│  │     ├─ SMenu.tsx
│  │     ├─ SNivel.tsx
│  │     └─ SSimon.tsx
│  ├─ context
│  │  └─ SimonContext.tsx
│  ├─ hooks
│  │  └─ useSimon.tsx
│  ├─ logic
│  │  └─ simon.ts
│  ├─ page
│  │  └─ inicio.tsx
│  └─ styles
│     └─ estilos.tsx
└─ tsconfig.json

```

## Instalación 
Antes de descargar o clonar el repositorio es necesario que usted instale Node (https://nodejs.org/en). </br>
Una vez descargado o clonado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
```
npm i
```
Esto instalara las dependencias que necesite el proyecto

## Uso
En caso de haber seguido los pasos de la instalación solo debe ejecutar el siguiente comando:
```
npm run start
```
y seguir las instrucciones en pantalla

En caso de saltarse los paso de instalación y querer probar la app para le dejo el link para su descarga en **android**: 
<a href="https://expo.dev/artifacts/eas/8J2BNrbzRY1FtHjwnoAWvB.apk">APK</a>


</br>

> [!NOTE]
> Recuerde que es una APK así que es necesario dar permisos para poder instalarla
