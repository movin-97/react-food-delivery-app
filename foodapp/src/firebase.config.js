import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_bxGG0WgOKDejZvER2fTq2xZZjfUs8zs",
  authDomain: "restaurantapp-c2ed6.firebaseapp.com",
  databaseURL: "https://restaurantapp-c2ed6-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-c2ed6",
  storageBucket: "restaurantapp-c2ed6.appspot.com",
  messagingSenderId: "174416156605",
  appId: "1:174416156605:web:2ec169ea4ef3e7bb25e4d4",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAPYw6U00H7540dA6P8vwu-VwKWXChg3_M",
//   authDomain: "food-delivery-app-2583f.firebaseapp.com",
//   databaseURL: "https://food-delivery-app-2583f-default-rtdb.firebaseio.com",
//   projectId: "food-delivery-app-2583f",
//   storageBucket: "food-delivery-app-2583f.appspot.com",
//   messagingSenderId: "690810005909",
//   appId: "1:690810005909:web:81704c2cd8b24b0067ee9c"
// };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
