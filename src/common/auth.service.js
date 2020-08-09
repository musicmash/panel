import firebase from "firebase/app";
import "firebase/auth";

function getToken() {
    return firebase.auth().currentUser.getIdToken();
}

export default {
    getToken,
};
