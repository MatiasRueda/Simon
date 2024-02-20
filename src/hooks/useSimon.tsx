import { useEffect, useState } from "react";
import Simon, { PIEZA } from "../logic/simon";

type MetodosSimon = {
  empezarMostrar: () => void;
  coinciden: (pieza: PIEZA) => boolean | undefined;
  reiniciar: () => void;
  siguienteNivel: () => void;
  piezaActual: () => PIEZA;
};

export type UseSimon = {
  indiceMemorizar: number;
  nivel: number;
  mostrarResultado: boolean;
  piezas: PIEZA[];
  jugar: boolean;
  memorizando: boolean;
  metodos: MetodosSimon;
};

const simon: Simon = new Simon();

export default function useSimon(): UseSimon {
  const [indiceMemorizar, setIndiceMemorizar] = useState<number>(0);
  const [eleccion, setEleccion] = useState<number>(0);
  const [nivel, setNivel] = useState<number>(simon.nivel);
  const [piezas, setPiezas] = useState<PIEZA[]>(simon.resultado);
  const [mostrarResultado, setMostrarResultado] = useState<boolean>(false);
  const [memorizando, setMemorizando] = useState<boolean>(false);
  const [jugar, setJugar] = useState<boolean>(false);

  const empezarMostrar = () => {
    setMostrarResultado(true);
    setMemorizando(true);
    setJugar(true);
  };

  const piezaActual = (): PIEZA => {
    return piezas[indiceMemorizar];
  };

  const coinciden = (pieza: PIEZA): boolean | undefined => {
    if (!simon.coinciden(eleccion, pieza)) return false;
    if (simon.ganaste) return true;
    setEleccion((prev) => prev + 1);
    return undefined;
  };

  const reiniciar = () => {
    simon.reiniciar();
    setNivel(simon.nivel);
    setPiezas(simon.resultado);
    setEleccion(0);
    setJugar(false);
  };

  const siguienteNivel = () => {
    simon.siguienteNivel();
    setNivel(simon.nivel);
    setPiezas(simon.resultado);
    setEleccion(0);
    setJugar(false);
  };

  useEffect(() => {
    if (!mostrarResultado && !indiceMemorizar) {
      setMemorizando(false);
      return;
    }
    if (!mostrarResultado && !!indiceMemorizar) {
      setTimeout(() => {
        setMostrarResultado(true);
      }, 1000);
      return;
    }
    const delay = 3000;
    setTimeout(() => {
      setIndiceMemorizar((prev) => {
        setMostrarResultado(false);
        return prev! + 1 === piezas.length ? 0 : prev! + 1;
      });
    }, delay);
  }, [indiceMemorizar, mostrarResultado]);

  return {
    indiceMemorizar,
    piezas,
    nivel,
    mostrarResultado,
    jugar,
    memorizando,
    metodos: {
      reiniciar,
      siguienteNivel,
      coinciden,
      empezarMostrar,
      piezaActual,
    },
  };
}
