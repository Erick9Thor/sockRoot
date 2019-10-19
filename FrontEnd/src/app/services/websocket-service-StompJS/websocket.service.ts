import { Injectable } from '@angular/core';
import * as RxStomp from '@stomp/rx-stomp';
import { myRxStompConfig } from 'src/core/configurtions/stomp-configuration';
import { Usuario } from 'src/app/classes/usuario';
import { messageCallbackType, IMessage } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WebsocketServiceStompJS {

  private rxStomp: RxStomp.RxStomp;
  public socketStatus = false;
  public usuario: Usuario = null;

  constructor() {
    this.rxStomp = new RxStomp.RxStomp();
    this.rxStomp.configure(myRxStompConfig);
    // this.cargarStorage();
    // this.checkStatus();
  }

  connect(): void {
    this.rxStomp.activate();
  }

  disconnect(): void {
    this.rxStomp.deactivate();
  }

  checkStatus() {
    return this.rxStomp.active;
  }

  emit(destination: string, body?: any): void {
    this.rxStomp.publish({ destination, body });
  }

  listen(destination: string): Observable<IMessage> {
    return this.rxStomp.watch(destination)
  }

  loginWS(nombre: string) {
    /*
    return new Promise((resolve, reject) => {
      this.emit('configurar-usuario', { nombre }, resp => {
        this.usuario = new Usuario(nombre);
        this.guardarStorage();
        resolve();
      });
    });*/
  }

  getUsuario() {
    return this.usuario;
  }

  guardarStorage() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }

  cargarStorage() {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.loginWS(this.usuario.nombre);
    }
  }
}
