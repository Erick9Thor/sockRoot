import { Component } from '@angular/core';
import $ from 'jquery';
import { WebsocketServiceStompJS } from 'src/app/services/websocket-service-StompJS/websocket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-check-socket',
  templateUrl: './check-socket.component.html',
  styleUrls: ['./check-socket.component.css']
})
export class CheckSocketComponent {

  constructor(
    private ws: WebsocketServiceStompJS
  ) { }

  connectToSocket() {
    this.ws.connect();
    this.setConnected(true);
    this.ws.listen('/topic/greetings').subscribe((greeting) =>
    this.showGreeting(JSON.parse(greeting.body).content));
  }

  sendName() {
    if (this.ws.checkStatus()) {
      this.ws.emit('/app/hello', JSON.stringify({ 'name': $('#name').val() }));
    } else {
      Swal.fire('Not connected!');
    }
  }

  showGreeting(message) {
    $('#greetings').append('<tr><td>' + message + '</td></tr>');
  }

  disconnectToSocket() {
    this.ws.disconnect();
  }

  setConnected(connected) {
    $('#connect').prop('disabled', connected);
    $('#disconnect').prop('disabled', !connected);
    if (connected) {
      $('#conversation').show();
    } else {
      $('#conversation').hide();
    }
    $('#greetings').html('');
  }

}
