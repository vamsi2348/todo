// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
    firebaseConfig : {
        apiKey: "AIzaSyDCzkMr4hRDeh-jJxJiLEC_bEs_gX4QDBA",
        authDomain: "todo-13558.firebaseapp.com",
        projectId: "todo-13558",
        storageBucket: "todo-13558.appspot.com",
        messagingSenderId: "92866964293",
        appId: "1:92866964293:web:2453361cddc0b8f893ac2c",
        measurementId: "G-2WHXT73MW2"
      }
}
// const firebaseConfig = {
//   apiKey: "AIzaSyDCzkMr4hRDeh-jJxJiLEC_bEs_gX4QDBA",
//   authDomain: "todo-13558.firebaseapp.com",
//   projectId: "todo-13558",
//   storageBucket: "todo-13558.appspot.com",
//   messagingSenderId: "92866964293",
//   appId: "1:92866964293:web:2453361cddc0b8f893ac2c",
//   measurementId: "G-2WHXT73MW2"
// };

// // Initialize Firebase
// export const app = initializeApp(environment.firebaseConfig);
// const analytics = getAnalytics(app);