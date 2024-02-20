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
        <View style={estilos.componente}>
          <Text style={estilos.texto}>
            {simonContext.mensajes.mensajeTitulo}
          </Text>
          <Pressable
            onPress={volver}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "black" : "white",
              },
              estilos.boton,
            ]}
          >
            {({ pressed }) => (
              <Text
                style={[
                  { color: pressed ? "white" : "black" },
                  estilos.textoBoton,
                ]}
              >
                {simonContext.mensajes?.mensajeBoton}
              </Text>
            )}
          </Pressable>
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

  boton: {
    height: 80,
    width: 170,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    color: "white",
    fontSize: 30,
  },

  textoBoton: {
    textAlign: "center",
    fontSize: 20,
  },
});
