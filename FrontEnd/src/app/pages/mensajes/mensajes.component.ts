import { WebsocketServiceStompJS } from 'src/app/services/websocket-service-StompJS/websocket.service';
import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket-service-SocketIO/websocket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {

  constructor(
    // public wsService: WebsocketService
    public wsService: WebsocketServiceStompJS
  ) { }

}
