export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    educacion_image_url: string;

    constructor(nombreE: string, descripcionE: string, educacion_image_url: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.educacion_image_url = educacion_image_url;
    }
}
