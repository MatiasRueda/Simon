import { StyleSheet, View } from "react-native";
import DNivel from "../dumb/DNivel";
type Parametros = {
  mostrar: boolean;
  nivel: number;
};

export default function SNivel({ ...rest }: Parametros): JSX.Element {
  return (
    <View style={estilo.componente}>
      {rest.mostrar && <DNivel nivel={rest.nivel} />}
    </View>
  );
}

const estilo = StyleSheet.create({
  componente: {
    marginTop: 10,
    height: 25,
  },
});
