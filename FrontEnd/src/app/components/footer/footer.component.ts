import { WebsocketServiceStompJS } from 'src/app/services/websocket-service-StompJS/websocket.service';
import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket-service-SocketIO/websocket.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  constructor(
    // public wsService: WebsocketService
    public wsService: WebsocketServiceStompJS
  ) { }
}
