import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Foto } from '../foto.model';
import { PlaylistService } from '../playlist.service';
import { FotoServiceService } from '../foto-service.service';
import { Camera } from '@capacitor/camera';
import { CameraSource } from '@capacitor/camera';
import { CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  nombreUsuario: String = '';
  playlists: any[] = [];
  fotoUsuario: String | undefined = '';
  public fotos: Foto[] = [];

  isPlaying = false;

  constructor(private playlistService: PlaylistService, private fotoService: FotoServiceService){
    
   }

  ngOnInit() {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);
      this.nombreUsuario = usuario.nombre;
    }

    const usuarioString3 = localStorage.getItem('usuario');
    if (usuarioString3) {
      const usuario = JSON.parse(usuarioString3);
      this.nombreUsuario = usuario.nombre;
      this.playlists = this.playlistService.getPlaylists().filter(playlist => playlist.usuario === usuario.nombre);
    }


    const usuarioString2 = localStorage.getItem('usuario');
    if (usuarioString2) {
      const usuario = JSON.parse(usuarioString2);
      this.nombreUsuario = usuario.nombre;
      this.fotoUsuario = usuario.foto || '';
      this.fotos = usuario.fotos || [];
    }
  }

  async tomarFoto() {
    const nuevaFoto = await this.fotoService.addNewToGallery();
    if (nuevaFoto) {
      this.fotos.unshift(nuevaFoto);
      this.fotoUsuario = nuevaFoto.webViewPath;

      const usuarioString2 = localStorage.getItem('usuario');
      if (usuarioString2) {
        const usuario = JSON.parse(usuarioString2);
        usuario.fotos = this.fotos,
        usuario.foto = this.fotoUsuario;
        localStorage.setItem('usuario', JSON.stringify(usuario));
      }
    }
  }
  
}
