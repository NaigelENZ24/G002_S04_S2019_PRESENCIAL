# Práctica 2 – Formulario de Registro

Proyecto desarrollado para la asignatura **Desarrollo Web** – UNEMI  
Guía: `G002_S04_S2019_PRESENCIAL`

## Descripción

Formulario de registro con campos de **Nombre**, **Correo** y **Contraseña**, construido en tres archivos separados siguiendo la estructura pedida en la guía de práctica.

## Estructura del proyecto

```
├── index.html   # Estructura HTML5 del formulario
├── style.css    # Estilos con Flexbox
├── script.js    # Validaciones con JavaScript
└── README.md    # Este archivo
```

## Instrucciones para ejecutar

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` directamente en cualquier navegador web (Chrome, Firefox, Edge, etc.).
3. No requiere servidor ni instalación adicional.

## Validaciones implementadas

- **Nombre**: no puede estar vacío.
- **Correo**: no puede estar vacío y debe tener formato válido (`usuario@dominio.com`).
- **Contraseña**: debe tener mínimo 8 caracteres.

Si hay errores, se muestran debajo de cada campo. Si todo es correcto, se muestra un `alert()` de bienvenida.
Naigel Enriquez
