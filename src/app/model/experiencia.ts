export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    experiencia_image_url: string;

    constructor(nombreE: string, descripcionE: string, experiencia_image_url: string){
        this.nombreE = nombreE
        this.descripcionE = descripcionE
        this.experiencia_image_url = experiencia_image_url
    }
}
