import firebase from 'firebase/app';

import 'firebase/storage';

import 'firebase/auth';

import 'firebase/firestore';

const firebaseConfig = {
    // firebase config
};

if (!firebase?.apps?.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const db = firestore;
const storage = firebase.storage();

export default firebase;
export {
    auth,
    firestore,
    storage,
    db,
};
