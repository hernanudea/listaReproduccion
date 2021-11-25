import {CancionModel} from "./cancion.model";

export interface ListaReproduccionModel {
  nombre: string;
  descripcion: string;
  canciones: CancionModel[];

}
