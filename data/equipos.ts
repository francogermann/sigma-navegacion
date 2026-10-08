import { Equipo } from "../types/equipo";

export const equipos: Equipo[] = [
  {
    id: "EQ-01",
    nombre: "Bomba centrífuga 01",
    ubicacion: "Sala de máquinas",
    estado: "En mantenimiento",
    descripcion: "Presenta vibración y pérdida de presión durante el arranque.",
  },
  {
    id: "EQ-02",
    nombre: "Compresor A2",
    ubicacion: "Taller",
    estado: "Operativo",
    descripcion: "Mantenimiento preventivo mensual al día.",
  },
  {
    id: "EQ-03",
    nombre: "Tablero eléctrico Norte",
    ubicacion: "Planta norte",
    estado: "Fuera de servicio",
    descripcion: "Hay borneras flojas y cables deteriorados por revisar.",
  },
];

export function getEquipoById(id?: string) {
  return equipos.find((equipo) => equipo.id === id);
}
