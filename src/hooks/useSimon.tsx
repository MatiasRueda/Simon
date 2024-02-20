import { useEffect, useState } from "react";
import Simon, { PIEZA } from "../logic/simon";

type MetodosSimon = {
  empezarMostrar: () => void;
  coinciden: (posicion: number, pieza: PIEZA) => void;
  reiniciar: () => void;
  siguienteNivel: () => void;
  piezaActual: () => PIEZA;
};

export type UseSimon = {
  indice: number;
  nivel: number;
  mostrarResultado: boolean;
  piezas: PIEZA[];
  jugar: boolean;
  ganaste: boolean;
  perdiste: boolean;
  metodos: MetodosSimon;
};

const simon: Simon = new Simon();

export default function useSimon(): UseSimon {
  const [indice, setIndice] = useState<number>(0);
  const [nivel, setNivel] = useState<number>(simon.nivel);
  const [piezas, setPiezas] = useState<PIEZA[]>([PIEZA.AMARILLO, PIEZA.ROJO]);
  const [mostrarResultado, setMostrarResultado] = useState<boolean>(false);
  const [jugar, setJugar] = useState<boolean>(false);
  const [ganaste, setGanaste] = useState<boolean>(false);
  const [perdiste, setPerdiste] = useState<boolean>(false);

  const empezarMostrar = () => {
    setMostrarResultado(true);
    setJugar(true);
  };

  const piezaActual = (): PIEZA => {
    return piezas[indice];
  };

  const coinciden = (posicion: number, pieza: PIEZA) => {
    if (!simon.coinciden(posicion, pieza)) {
      setPerdiste(true);
      return;
    }
    if (simon.ganaste) setGanaste(true);
    setIndice((prev) => prev + 1);
  };

  const reiniciar = () => {
    simon.reiniciar();
    setNivel(simon.nivel);
    setPiezas(simon.resultado);
  };

  const siguienteNivel = () => {
    simon.siguienteNivel();
    setNivel(simon.nivel);
    setPiezas(simon.resultado);
  };

  useEffect(() => {
    if (!mostrarResultado && !indice) return;
    if (!mostrarResultado && !!indice) {
      setTimeout(() => {
        setMostrarResultado(true);
      }, 1000);
      return;
    }
    const delay = !indice ? 3000 : 3000 * indice;
    setTimeout(() => {
      setIndice((prev) => {
        setMostrarResultado(false);
        return prev! + 1 === piezas.length ? 0 : prev! + 1;
      });
    }, delay);
  }, [indice, mostrarResultado]);

  return {
    indice,
    piezas,
    nivel,
    mostrarResultado,
    ganaste,
    perdiste,
    jugar,
    metodos: {
      reiniciar,
      siguienteNivel,
      coinciden,
      empezarMostrar,
      piezaActual,
    },
  };
}
