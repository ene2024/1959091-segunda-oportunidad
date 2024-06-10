import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormControl, 
  Validators, 
  FormGroup
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController, private navController: NavController) { 

    this.formularioLogin = this.fb.group({
      'correo': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit(): void {
    
  }

  async ingresar(){
    var f = this.formularioLogin.value;

     var usuarioString = localStorage.getItem('usuario');
     if(!usuarioString) {
      const alert = await this.alertController.create({
        header: 'Usuario no encontrado',
        message: 'No existe un usuario registrado con ese correo',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = JSON.parse(usuarioString);

    if (usuario.correo == f.correo && usuario.password == f.password) {
      this.navController.navigateForward('/tabs/tab4');
  } else {
      const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste no son correctos',
          buttons: ['Aceptar']
      });

      await alert.present();
  }
}
}
