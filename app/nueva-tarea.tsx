import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function NuevaTareaScreen() {
  const [titulo, setTitulo] = useState("");
  const [equipo, setEquipo] = useState("");
  const [aviso, setAviso] = useState("");

  function guardar() {
    if (titulo.trim().length === 0 || equipo.trim().length === 0) {
      setAviso("Completá el título y el equipo.");
      return;
    }
    setAviso("Tarea lista para registrar: " + titulo.trim());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva tarea</Text>
      <Text style={styles.subtitle}>Registrá una orden de mantenimiento.</Text>

      <Text style={styles.label}>Título</Text>
      <TextInput
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Ej: Revisar bomba de agua"
        style={styles.input}
      />

      <Text style={styles.label}>Equipo</Text>
      <TextInput
        value={equipo}
        onChangeText={setEquipo}
        placeholder="Ej: Bomba centrífuga 01"
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={guardar}>
        <Text style={styles.buttonText}>Guardar tarea</Text>
      </Pressable>

      {aviso ? <Text style={styles.aviso}>{aviso}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F5F8FA" },
  title: { fontSize: 26, fontWeight: "700", color: "#102A43" },
  subtitle: { color: "#52606D", fontSize: 16, marginTop: 6, marginBottom: 16 },
  label: { color: "#52606D", fontSize: 14, fontWeight: "700", marginTop: 12, marginBottom: 6 },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9E2EC",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  button: { backgroundColor: "#1877B9", padding: 16, borderRadius: 10, alignItems: "center", marginTop: 24 },
  buttonText: { color: "#FFFFFF", fontWeight: "700", fontSize: 16 },
  aviso: { marginTop: 16, color: "#102A43", fontSize: 15 },
});
