import { StyleSheet, Text, View } from "react-native";
import { tareas } from "../data/tareas";

export default function TareasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas</Text>
      <Text style={styles.subtitle}>Órdenes de trabajo pendientes.</Text>

      {tareas.map((tarea) => (
        <View key={tarea.id} style={styles.card}>
          <Text style={styles.id}>{tarea.id}</Text>
          <Text style={styles.nombre}>{tarea.titulo}</Text>
          <Text style={styles.meta}>{tarea.equipo} · Prioridad {tarea.prioridad}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F5F8FA", gap: 12 },
  title: { fontSize: 26, fontWeight: "700", color: "#102A43" },
  subtitle: { color: "#52606D", fontSize: 16, marginBottom: 4 },
  card: { backgroundColor: "#FFFFFF", padding: 16, borderRadius: 12, borderWidth: 1, borderColor: "#D9E2EC" },
  id: { color: "#1877B9", fontWeight: "800", fontSize: 14 },
  nombre: { color: "#102A43", fontSize: 18, fontWeight: "700", marginTop: 4 },
  meta: { color: "#52606D", fontSize: 14, marginTop: 4 },
});
