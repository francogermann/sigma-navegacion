import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>SIGMA</Text>
      <Text style={styles.texto}>Elegí una sección.</Text>

      <Link href="/equipos" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Equipos</Text>
        </Pressable>
      </Link>

      <Link href="/tareas" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Tareas</Text>
        </Pressable>
      </Link>

      <Link href="/nueva-tarea" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Nueva tarea</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  titulo: { fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  texto: { fontSize: 16, marginBottom: 24 },
  button: {
    backgroundColor: "#1877B9",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: { color: "#fff", fontSize: 16, textAlign: "center" },
});
