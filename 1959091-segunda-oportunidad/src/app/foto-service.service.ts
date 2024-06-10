import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';
import { WebView } from '@capacitor/core';
import {Filesystem, Directory} from '@capacitor/filesystem';
import {Preferences} from '@capacitor/preferences';

import { Foto } from './foto.model'

@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {
  public fotos: Foto[] = [];

  constructor() {
    
   }

 
 
 public async addNewToGallery(): Promise<Foto | undefined> {
  try {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

   const foto: Foto = {
        filepath: '',
        webViewPath: capturedPhoto.webPath
      };

      this.fotos.unshift(foto);
      return foto;
    } catch (error) {
      console.error('Error al tomar la foto:', error);
      return undefined;
    }
  }
}