import * as RxStomp from '@stomp/rx-stomp';
import * as SockJS from 'sockjs-client';
import { brokerEndPoint } from '../constants/constants';
import { environment } from 'src/environments/environment';



export const rxStompConfig: RxStomp.RxStompConfig = {

    connectHeaders: {
        login: 'guest',
        passcode: 'guest'
    },

    webSocketFactory: () => {
        return new SockJS(environment.wsUrlStomp + brokerEndPoint);
    },

    // Keep it off for production, it can be quit verbose
    // Skip this key to disable
    debug: function (str) {
        console.log('STOMP: ' + str);
    },

    // If disconnected, it will retry after 200ms
    reconnectDelay: 200,
};
