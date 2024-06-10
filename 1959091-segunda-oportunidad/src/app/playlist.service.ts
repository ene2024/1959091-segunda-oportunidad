import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private playlists: any[] = [];

  constructor() { 
    this.loadPlaylists();
  }

  loadPlaylists(){
    const playlistsString = localStorage.getItem('playlists');
    if (playlistsString){
      this.playlists = JSON.parse(playlistsString);
    }
  }

  getPlaylists(){
    return this.playlists;
  }

  addPlaylist(playlist: any){
    this.playlists.push(playlist);
    localStorage.setItem('playlists', JSON.stringify(this.playlists));
  }
}
