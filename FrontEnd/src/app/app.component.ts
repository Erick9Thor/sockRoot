import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket-service-SocketIO/websocket.service';
import { ChatService } from './services/chat-service/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    public wsService: WebsocketService,
    public chatServie: ChatService
  ) { }

  ngOnInit() {

    this.chatServie.getMessagesPrivate().subscribe( msg => {

      console.log(msg);

    });

  }

}
