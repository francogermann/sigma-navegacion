# SIGMA

App de práctica de Desarrollo de Dispositivos Móviles. Usa Expo Router para navegar entre las pantallas de SIGMA.

## Pantallas

- `app/index.tsx`: inicio, con un Link a Equipos, Tareas y Nueva tarea.
- `app/equipos.tsx`: listado. Al tocar un equipo se usa `router.push` hacia el detalle.
- `app/equipos/[id].tsx`: detalle. Lee el id de la ruta con `useLocalSearchParams`.
- `app/tareas.tsx`: tareas pendientes.
- `app/nueva-tarea.tsx`: pantalla para una tarea nueva.
- `app/_layout.tsx`: el Stack, con el título de cada pantalla.

## Cómo ejecutarlo

```bash
npm install
npx expo start
```

Después se puede abrir en Expo Go o en el navegador.

## Capturas

Están en la carpeta `capturas/`.
