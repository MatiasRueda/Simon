export enum PIEZA {
  AMARILLO = "#ffff00",
  AZUL = "#0000ff",
  ROJO = "#ff0000",
  VERDE = "#008000",
}

export default class Simon {
  #nivel: number = 1;
  #posicion: number = 0;
  #ganaste: boolean = false;
  #resultado: Map<number, PIEZA> = new Map();

  constructor() {
    const pieza: PIEZA = this.#nuevaPieza();
    this.#resultado.set(this.#nivel, pieza);
  }

  #nuevaPieza(): PIEZA {
    const keys: string[] = Object.keys(PIEZA);
    const indice: number = Math.floor(Math.random() * keys.length);
    const pieza: PIEZA = PIEZA[keys[indice] as keyof typeof PIEZA];
    return pieza;
  }

  coinciden(posicion: number, pieza: PIEZA): boolean {
    if (this.#resultado.get(posicion) !== pieza) return false;
    if (posicion + 1 === this.#resultado.size) this.#ganaste = true;
    return true;
  }

  siguienteNivel(): void {
    const pieza = this.#nuevaPieza();
    this.#nivel = this.#nivel + 1;
    this.#resultado.set(this.#nivel, pieza);
  }

  reiniciar(): void {
    this.#resultado = new Map();
    this.#nivel = 1;
  }

  get resultado(): PIEZA[] {
    return Array.from(this.#resultado.values());
  }

  get nivel(): number {
    return this.#nivel;
  }

  get ganaste(): boolean {
    return this.#ganaste;
  }
}
