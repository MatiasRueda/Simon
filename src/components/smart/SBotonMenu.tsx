import { Pressable, StyleSheet } from "react-native";
import { useSimonContext } from "../../context/SimonContext";
import { AntDesign } from "@expo/vector-icons";

export default function SBotonMenu(): JSX.Element {
  const simonContext = useSimonContext();
  const mostrarMenu = (): void => {
    simonContext.mostrarMenu();
  };

  return (
    <Pressable onPress={mostrarMenu} style={estilos.componente}>
      <AntDesign name="caretup" size={24} color="black" />
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  componente: {
    height: 40,
    width: 50,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    textAlign: "center",
  },
});
