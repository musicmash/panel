import firebase from "firebase/app";
import "firebase/auth";

async function getToken() {
    return await firebase.auth().currentUser.getIdToken();
}

export default {
    getToken,
};
