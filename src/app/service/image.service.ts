import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL, listAll, StorageReference} from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(
    private storage: Storage
  ) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, "Imagenes/" + name)
    uploadBytes(imgRef, file)
    .then(response => this.getImages(imgRef))
    .catch(error => console.log(error))

  }

  getImages(imagesRef: StorageReference) {
    getDownloadURL(imagesRef)
    .then(async response => {
        this.url = response;
        console.log("La url es: " + this.url)  
    })
    .catch(error => console.log(error))
  }
}