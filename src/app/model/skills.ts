export class Skills {
    id: number;
    nombre: string;
    porcentaje: number;
    skill_image_url: string;

    constructor(nombre: string, porcentaje: number, skill_image_url: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.skill_image_url = skill_image_url;
    }
}
