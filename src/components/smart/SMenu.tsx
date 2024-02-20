import { View, StyleSheet, Text, Pressable } from "react-native";
import { useSimonContext } from "../../context/SimonContext";
import React, { Fragment } from "react";
import { AntDesign } from "@expo/vector-icons";
import SCambiarColor from "./SCambiarColor";

export default function SMenu(): JSX.Element {
  const simonContext = useSimonContext();
  return (
    <Fragment>
      {simonContext.menu && (
        <View style={estilos.componente}>
          <View style={estilos.menu}>
            <Pressable style={estilos.salida} onPress={simonContext.sacarMenu}>
              <AntDesign name="closecircleo" size={24} color="black" />
            </Pressable>
            <SCambiarColor />
          </View>
        </View>
      )}
    </Fragment>
  );
}

const estilos = StyleSheet.create({
  componente: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  menu: {
    height: 400,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  salida: {
    height: 40,
    width: "80%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
