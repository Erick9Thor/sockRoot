import { WebsocketServiceStompJS } from 'src/app/services/websocket-service-StompJS/websocket.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket-service-SocketIO/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor(
    // public wsService: WebsocketService,
    public wsService: WebsocketServiceStompJS,
    private router: Router
  ) { }

  canActivate() {
    if ( this.wsService.getUsuario() ) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
