import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSimonContext } from "../../context/SimonContext";
import { Fragment } from "react";

export default function SMensajes(): JSX.Element {
  const simonContext = useSimonContext();

  const volver = (): void => {
    simonContext.sacarMensajes();
  };

  return (
    <Fragment>
      {simonContext.mensajes && (
        <View style={estilo.componente}>
          <Text style={estilo.texto}>
            {simonContext.mensajes.mensajeTitulo}
          </Text>
          <Pressable onPress={volver}>
            <View style={estilo.boton}>
              <Text>{simonContext.mensajes.mensajeBoton}</Text>
            </View>
          </Pressable>
        </View>
      )}
    </Fragment>
  );
}

const estilo = StyleSheet.create({
  componente: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  boton: {
    height: 50,
    width: 100,
    marginTop: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    color: "white",
    fontSize: 30,
  },
});
