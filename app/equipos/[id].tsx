import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { getEquipoById } from "../../data/equipos";

export default function DetalleEquipoScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const equipo = getEquipoById(id);

  if (!equipo) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Equipo no encontrado</Text>
        <Text style={styles.value}>No hay un equipo con el id {id}.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.id}>{equipo.id}</Text>
      <Text style={styles.title}>{equipo.nombre}</Text>

      <Text style={styles.label}>Ubicación</Text>
      <Text style={styles.value}>{equipo.ubicacion}</Text>

      <Text style={styles.label}>Estado</Text>
      <Text style={styles.value}>{equipo.estado}</Text>

      <Text style={styles.label}>Descripción</Text>
      <Text style={styles.value}>{equipo.descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#FFFFFF" },
  id: { color: "#1877B9", fontWeight: "800", fontSize: 16 },
  title: { color: "#102A43", fontSize: 28, fontWeight: "700", marginTop: 6, marginBottom: 12 },
  label: { color: "#52606D", fontSize: 14, fontWeight: "700", marginTop: 16 },
  value: { color: "#102A43", fontSize: 17, marginTop: 4, lineHeight: 24 },
});
