# SIGMA — Navegación con Expo Router

Aplicación de práctica para Desarrollo de Dispositivos Móviles. SIGMA (Sistema Inteligente de Gestión de Mantenimiento) muestra cómo navegar entre pantallas con Expo Router.

## Qué hace

La pantalla de inicio tiene un menú con tres opciones. Cada botón es un `Link` de Expo Router:

- **Equipos** abre el listado. Cada equipo navega a una ruta dinámica `equipos/[id]`.
- **Tareas** abre las órdenes de trabajo pendientes.
- **Nueva tarea** abre el formulario para registrar una orden.

Al tocar un equipo, Expo Router abre `app/equipos/[id].tsx` y la pantalla lee el `id` con `useLocalSearchParams`.

## Cómo ejecutarlo

Necesitás Node.js LTS.

```bash
npm install
npx expo start
```

Después podés abrir el proyecto en Expo Go (escaneando el QR), en un emulador, o en el navegador con `w`.

## Rutas

| Archivo | Ruta | Pantalla |
| --- | --- | --- |
| `app/index.tsx` | `/` | Inicio |
| `app/equipos.tsx` | `/equipos` | Listado de equipos |
| `app/equipos/[id].tsx` | `/equipos/EQ-01` | Detalle del equipo |
| `app/tareas.tsx` | `/tareas` | Tareas |
| `app/nueva-tarea.tsx` | `/nueva-tarea` | Nueva tarea |

## Capturas

Las capturas de la navegación están en la carpeta `capturas/`.
