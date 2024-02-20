import { ReactNode, createContext, useContext, useState } from "react";

type MensajesPantalla = {
  mensajeTitulo: string;
  mensajeBoton: string;
};

type UseSimonContext = {
  mensajes?: MensajesPantalla;
  agregarMensajes: (mensajes: MensajesPantalla) => void;
  sacarMensajes: () => void;
};

const Simon = createContext<UseSimonContext | undefined>(undefined);

export const useSimonContext = (): UseSimonContext => {
  return useContext(Simon)!;
};

export default function SimonContext(props: {
  children: ReactNode;
}): JSX.Element {
  const [mensajes, setMensajes] = useState<MensajesPantalla>();

  const agregarMensajes = (mensajes: MensajesPantalla): void => {
    setMensajes(mensajes);
  };

  const sacarMensajes = (): void => {
    setMensajes(undefined);
  };

  const value: UseSimonContext = {
    mensajes,
    agregarMensajes,
    sacarMensajes,
  };

  return <Simon.Provider value={value}>{props.children}</Simon.Provider>;
}
