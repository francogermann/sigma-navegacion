import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

const opciones = [
  { href: "/equipos" as const, titulo: "Equipos", detalle: "Ver el inventario y abrir el detalle" },
  { href: "/tareas" as const, titulo: "Tareas", detalle: "Órdenes de trabajo pendientes" },
  { href: "/nueva-tarea" as const, titulo: "Nueva tarea", detalle: "Registrar una orden de mantenimiento" },
];

export default function InicioScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>SIGMA</Text>
      <Text style={styles.title}>Gestión de mantenimiento</Text>
      <Text style={styles.description}>
        Elegí una sección para navegar. Cada botón usa un Link de Expo Router.
      </Text>

      {opciones.map((opcion) => (
        <Link key={opcion.href} href={opcion.href} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonTitle}>{opcion.titulo}</Text>
            <Text style={styles.buttonDetail}>{opcion.detalle}</Text>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 24, backgroundColor: "#F5F8FA", gap: 12 },
  logo: { fontSize: 18, fontWeight: "800", color: "#1877B9", letterSpacing: 2 },
  title: { fontSize: 28, fontWeight: "700", color: "#102A43" },
  description: { fontSize: 16, lineHeight: 24, color: "#52606D", marginBottom: 8 },
  button: { backgroundColor: "#FFFFFF", padding: 16, borderRadius: 12, borderWidth: 1, borderColor: "#D9E2EC" },
  buttonTitle: { color: "#102A43", fontSize: 18, fontWeight: "700" },
  buttonDetail: { color: "#52606D", fontSize: 14, marginTop: 4 },
});
