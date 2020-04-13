# Gestion de Calidad Software (Curso 2019/2020)

## Práctica 2. Ampliación de HeartStoneApp (Componentes)

#### Obligatorio
- Crear una clase modelo `CardDeck.model`
- Crear fichero .json que hará de mockups de datos local
- Cargar datos del fichero json en el controlador de la página CardDecksPage
- Mostrar los mazos de cartas modificando el template
- Crear componente que muestre un CardDeck individual con una propiedad de @input
- Añadir evento @output que comunique al componente padre que se ha hecho click, cambiar el color de fondo del mazo seleccionado y lo añada a un vector de mazos seleccionados


#### Opcional
- Añadir al evento de hacer click sobre un mazo el código necesario para que muestre una lista de sus cartas
- Modificar el proyecto para usar otras formas de comunicación e interacción entre componentes, haciendo uso de:
    - #referencias
    - @ViewChild

---
---

## Práctica 1. Crear app HeartStoneApp

#### Obligatorio
- Crear aplicación `HeartStoneApp` con la plantilla tab
- Crear página con el scaffolding, denominada Card-decks
- Cambiar enrutamiento del menú de tabs
- Introducción de componente <ion-list> que contienen componentes <ion-item>
- Introducción de <ion-list-header> con el texto 'Classes'


#### Opcional
- Página `About`
- Mensaje inicial de bienvenida al cargar la página (toast)
- Botón para salir de la App (pide confirmación)