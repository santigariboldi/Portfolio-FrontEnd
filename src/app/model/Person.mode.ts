export class Person{
    id?: number;
    name: String;
    linkedin_url: String;
    instagram_url: String;
    github_url: String;
    whatsapp_url: String;
    banner_url: String;
    profile_image_url: String;
    ocupation: String;
    description: String;

    constructor( name: String, linkedin_url: String, instagram_url: String, github_url: String, whatsapp_url: String, banner_url: String, profile_image_url: String, ocupation: String, description: String){
        this.name = name;
        this.linkedin_url = linkedin_url;
        this.instagram_url = instagram_url;
        this.github_url = github_url;
        this.whatsapp_url = whatsapp_url;
        this.banner_url = banner_url;
        this.profile_image_url = profile_image_url;
        this.ocupation = ocupation
        this.description = description;
    }

}