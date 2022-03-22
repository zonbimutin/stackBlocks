import { initializeApp, getApp, getApps } from "firebase/app"

let app

const firebaseConfig = {
	apiKey: "AIzaSyDCqAoW1wHGPnIYnQ1uvo6jkJ_1oSdt28Q",
	authDomain: "stackblocks-bb082.firebaseapp.com",
	projectId: "stackblocks-bb082",
	storageBucket: "stackblocks-bb082.appspot.com",
	messagingSenderId: "230859765061",
	appId: "1:230859765061:web:5d480eb382403fdf6bba2c",
	measurementId: "G-KMXDKWW2VX"
};

if(getApps().length) {
	app = getApp()
} else {
	app = initializeApp(firebaseConfig)
}

export default app
