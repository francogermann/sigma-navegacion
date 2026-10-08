import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { equipos } from "../data/equipos";

export default function EquiposScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipos</Text>
      <Text style={styles.subtitle}>Seleccioná un equipo para abrir su detalle.</Text>

      {equipos.map((equipo) => (
        <Link key={equipo.id} href={{ pathname: "/equipos/[id]", params: { id: equipo.id } }} asChild>
          <Pressable style={styles.card}>
            <Text style={styles.id}>{equipo.id}</Text>
            <Text style={styles.nombre}>{equipo.nombre}</Text>
            <Text style={styles.meta}>{equipo.ubicacion} · {equipo.estado}</Text>
          </Pressable>
        </Link>
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
