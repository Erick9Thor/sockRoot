import { WebsocketServiceStompJS } from 'src/app/services/websocket-service-StompJS/websocket.service';
import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket-service-SocketIO/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nombre = '';

  constructor(
    // public wsService: WebsocketService,
    public wsService: WebsocketServiceStompJS,
    private router: Router
  ) { }

  ingresar() {
    this.wsService.loginWS(this.nombre)
      .then(() => {
        console.log('works?');
        this.router.navigateByUrl('/mensajes');
      });
  }
}
