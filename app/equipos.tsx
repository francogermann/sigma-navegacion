import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const equipos = [
  { id: "eq-1", nombre: "Equipo 1" },
  { id: "eq-2", nombre: "Equipo 2" },
  { id: "eq-3", nombre: "Equipo 3" },
];

export default function EquiposScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Listado de equipos</Text>

      {equipos.map((equipo) => (
        <Pressable
          key={equipo.id}
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: "/equipos/[id]",
              params: { id: equipo.id },
            })
          }
        >
          <Text style={styles.buttonText}>{equipo.nombre}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  button: {
    backgroundColor: "#1877B9",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: { color: "#fff", fontSize: 16, textAlign: "center" },
});
