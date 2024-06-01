// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { browser } from '$app/environment';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyDa8-9wvycHJjwZ3H9bMnZ9pc52OwEfMbM',
	authDomain: 'dropbox-clone-ayy.firebaseapp.com',
	projectId: 'dropbox-clone-ayy',
	storageBucket: 'dropbox-clone-ayy.appspot.com',
	messagingSenderId: '58494424378',
	appId: '1:58494424378:web:52993ff682412d22646c03',
	measurementId: 'G-9CNVHRJZJX'
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
if (browser) {
	getAnalytics(app);
}

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export { auth, db, storage };
