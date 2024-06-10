import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController){
    this.formularioRegistro = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'nombre': new FormControl("", Validators.required)
    })
  }
    

  ngOnInit() {
    
    }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

      var usuario = {
        correo: f.correo,
        password: f.password,
        nombre: f.nombre
      }

      localStorage.setItem('usuario', JSON.stringify(usuario));

      const alert = await this.alertController.create({
        header: 'Usuario agregado',
        message: 'El usuario ha sido registrado exitosamente.',
        buttons: ['Aceptar']
    });

    await alert.present();
    }
  }
  
