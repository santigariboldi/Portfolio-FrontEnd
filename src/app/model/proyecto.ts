export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    proyecto_image_url: string;

    constructor(nombre: string, descripcion: string, proyecto_image_url: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.proyecto_image_url = proyecto_image_url;
    }
}
