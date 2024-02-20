import { ReactNode, createContext, useContext, useState } from "react";

type MensajesPantalla = {
  mensajeTitulo: string;
  mensajeBoton: string;
};

type Color = {
  color1: string;
  color2: string;
};

type UseSimonContext = {
  mensajes?: MensajesPantalla;
  agregarMensajes: (mensajes: MensajesPantalla) => void;
  sacarMensajes: () => void;
  color: string[];
  colores: string[][];
  cambiarColor: (color: Color) => void;
  menu: boolean;
  mostrarMenu: () => void;
  sacarMenu: () => void;
};

const Simon = createContext<UseSimonContext | undefined>(undefined);

export const useSimonContext = (): UseSimonContext => {
  return useContext(Simon)!;
};

export default function SimonContext(props: {
  children: ReactNode;
}): JSX.Element {
  const colores: Color[] = [
    { color1: "#F7CE68", color2: "#FBAB7E" },
    { color1: "#85FFBD", color2: "#FFFB7D" },
    { color1: "#8EC5FC", color2: "#E0C3FC" },
  ];

  const [mensajes, setMensajes] = useState<MensajesPantalla>();
  const [menu, setMenu] = useState<boolean>(false);
  const [color, setColor] = useState<Color>(colores[0]);

  const agregarMensajes = (mensajes: MensajesPantalla): void => {
    setMensajes(mensajes);
  };

  const sacarMensajes = (): void => {
    setMensajes(undefined);
  };

  const cambiarColor = (nuevoColor: Color) => {
    setColor({ ...color, ...nuevoColor });
  };

  const sacarMenu = () => {
    setMenu(false);
  };

  const mostrarMenu = () => {
    setMenu(true);
  };

  const value: UseSimonContext = {
    mensajes,
    agregarMensajes,
    sacarMensajes,
    color: Object.values(color),
    colores: colores.map((color) => Object.values(color)),
    cambiarColor,
    menu,
    mostrarMenu,
    sacarMenu,
  };

  return <Simon.Provider value={value}>{props.children}</Simon.Provider>;
}
