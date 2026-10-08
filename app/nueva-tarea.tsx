import { StyleSheet, Text, View } from "react-native";

export default function NuevaTareaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nueva tarea</Text>
      <Text style={styles.texto}>Acá se va a registrar una orden de mantenimiento.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  texto: { fontSize: 16 },
});
