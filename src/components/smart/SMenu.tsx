import { useState } from "react";
import DMenu from "../dumb/DMenu";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function SMenu(): JSX.Element {
  const [menu, setMenu] = useState<boolean>(false);

  const mostrarMenu = () => {
    setMenu(true);
  };

  return (
    <View style={estilos.componente}>
      <Pressable onPress={mostrarMenu}>
        <Text style={estilos.texto}>Menu</Text>
      </Pressable>
      {menu && <DMenu />}
    </View>
  );
}

const estilos = StyleSheet.create({
  componente: {
    height: 30,
    backgroundColor: "red",
  },
  texto: {
    textAlign: "center",
  },
});
