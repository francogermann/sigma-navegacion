import { StyleSheet, Text, View } from "react-native";

export default function TareasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tareas</Text>
      <Text style={styles.texto}>OT-104 - Revisar bomba de agua</Text>
      <Text style={styles.texto}>OT-105 - Cambiar filtro de aire</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  texto: { fontSize: 16, marginBottom: 8 },
});
