export enum EColor {
  azul, negro, rojo, verde
}

export interface IHeroe {
  name: string;
  fly: boolean;
  color: EColor;
}
