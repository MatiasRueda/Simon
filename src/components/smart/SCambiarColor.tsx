import { View, Text, Pressable, StyleSheet } from "react-native";
import { useSimonContext } from "../../context/SimonContext";
import { LinearGradient } from "expo-linear-gradient";

export default function SCambiarColor(): JSX.Element {
  const simonContext = useSimonContext();

  const elegirColor = (color: string[]): void => {
    simonContext.cambiarColor({
      color1: color[0],
      color2: color[1],
    });
    simonContext.sacarMenu();
  };

  return (
    <View style={estilos.componente}>
      <Text style={estilos.texto}>Tema:</Text>
      <View style={estilos.colores}>
        {simonContext.colores.map((color, indice) => (
          <Pressable
            key={indice}
            onPress={() => {
              elegirColor(color);
            }}
          >
            <LinearGradient
              key={indice}
              colors={color}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={estilos.color}
            ></LinearGradient>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  componente: {
    flex: 1,
    paddingBottom: 80,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    marginBottom: 20,
    fontSize: 20,
  },

  colores: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  color: {
    height: 50,
    width: 50,
  },
});
