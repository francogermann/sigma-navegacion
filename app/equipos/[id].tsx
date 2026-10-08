import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const equipos = [
  { id: "eq-1", nombre: "Equipo 1", descripcion: "Bomba de la sala de máquinas." },
  { id: "eq-2", nombre: "Equipo 2", descripcion: "Compresor del taller." },
  { id: "eq-3", nombre: "Equipo 3", descripcion: "Tablero eléctrico norte." },
];

export default function DetalleEquipo() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const equipo = equipos.find((item) => item.id === id);

  if (!equipo) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Equipo no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Equipo seleccionado: {id}</Text>
      <Text style={styles.texto}>{equipo.nombre}</Text>
      <Text style={styles.texto}>{equipo.descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  texto: { fontSize: 16, marginBottom: 8 },
});
