import { Pressable, StyleSheet, View } from "react-native";
import { useSimonContext } from "../../context/SimonContext";
import { AntDesign } from "@expo/vector-icons";

export default function SMenu(): JSX.Element {
  const simonContext = useSimonContext();
  const mostrarMenu = (): void => {
    simonContext.agregarMensajes({
      mensajeTitulo: "Esto es el menu",
      mensajeBoton: "Volver",
    });
  };

  return (
    <View style={estilos.componente}>
      <Pressable onPress={mostrarMenu}>
        <AntDesign name="caretup" size={24} color="black" />
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  componente: {
    height: 40,
    marginTop: 30,
  },
  texto: {
    textAlign: "center",
  },
});
