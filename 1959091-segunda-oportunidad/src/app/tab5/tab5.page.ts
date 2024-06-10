import { Component } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  nombrePlaylist: string = '';

  constructor(private playlistService: PlaylistService, private navController: NavController) {}

  crearPlaylist() {
    if (this.nombrePlaylist.trim() !== '') {
      const usuarioString3 = localStorage.getItem('usuario');
      if (usuarioString3) {
        const usuario = JSON.parse(usuarioString3);
        const nuevaPlaylist = {
          nombre: this.nombrePlaylist,
          canciones: [],
          usuario: usuario.nombre
        };
        this.playlistService.addPlaylist(nuevaPlaylist);
        this.navController.navigateBack('/tabs/tab4');
      }
    }
  }
  
}

