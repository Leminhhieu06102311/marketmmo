import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface cookieState {
    access_token: string,
}
interface payloadAction {
    name: string,
    value: any,
    days: number
}
const initialState : cookieState = {
    access_token: ''
}
const cookieSlice = createSlice({
    name: 'cookie',
    initialState,
    reducers: {
        setCookie: (state,action :PayloadAction<payloadAction>) => {
            const {name, value, days} = action.payload
            var expires = "";
            if (days) {
              var date = new Date();
              date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
              expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
          
        },
        getCookie: (state, action : PayloadAction<{name: string}>) : any => {
            const {name} = action.payload
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) === ' ') c = c.substring(1, c.length);
              if (c.indexOf(nameEQ) === 0) {
                switch (name) {
                    case 'access_token':
                        state.access_token = c.substring(nameEQ.length, c.length);
                        break;
                
                    default:
                        break;
                }
              }
            }
            
        },
        deleteCookie: (state,action : PayloadAction<{name: string}>) => {
            const {name} = action.payload
            const expires = new Date();
            expires.setTime(expires.getTime() - 1); // Đặt thời gian hết hạn là quá khứ
            document.cookie = `${name}=; expires=${expires.toUTCString()}; path=/`;
        }
    }
})
export const {setCookie, getCookie,deleteCookie} = cookieSlice.actions
export default cookieSlice.reducer