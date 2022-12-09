import {Usuario} from "./Usuario";

export interface IMC {
  imcId: number;
  altura: number;
  peso: number;
  resultado: number;
  classificacao: string;
  grau: string;
  criadoEm: string;

  usuario: Usuario;
}
