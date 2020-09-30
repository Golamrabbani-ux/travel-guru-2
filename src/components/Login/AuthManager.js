import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializedFramework = () => {
    if(firebase.apps.length === 0){
      firebase.initializeApp(firebaseConfig)
    }
}

//create user with email and password 
export const createUserWithEmailAndPassword = (firstName, lastName ,email, password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        const newUserInfo = res.user;
        newUserInfo.success = true;
        newUserInfo.error = "";
        newUserInfo.firstName = firstName;
        newUserInfo.lastName = lastName;
        upDateUserInfo(newUserInfo.firstName + ' ' + newUserInfo.lastName);
        // console.log(newUserInfo)
        return newUserInfo;
    })
    .catch(err => {
        const newUserInfo = {};
        newUserInfo.success = false;
        newUserInfo.error = err.message;
        newUserInfo.firstName = "";
        newUserInfo.lastName = "";
        return newUserInfo;
    })
}

//sign in user with email and password 
export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
        const newUserInfo = res.user;
        newUserInfo.success = true;
        newUserInfo.error = "";
        newUserInfo.firstName = res.user.firstName;
        newUserInfo.lastName = res.user.lastName
        return newUserInfo
    })
    .catch(err => {
        const newUserInfo = {};
        // console.log(err.message);
        newUserInfo.success = false;
        newUserInfo.error = err.message;
        newUserInfo.firstName = "";
        newUserInfo.lastName = "";
        return newUserInfo;
    })
}

//sign in with google popup
export const signInWithGooglePopup = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res =>{
        const newUserInfo = res.user;
        newUserInfo.success = true;
        newUserInfo.error = "";
        return newUserInfo;
    })
    .catch(err => {
        const newUserInfo = {};
        newUserInfo.success = false;
        newUserInfo.error = err.message;
        return newUserInfo;
    })
}

//sign in with facebook popup
export const signInWithFacebookPopup = () =>{
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(fbProvider)
    .then(res => {
        const newUserInfo = res.user;
        newUserInfo.success = true;
        newUserInfo.error = "";
        return newUserInfo;
    })
    .catch(err => {
        const newUserInfo = {};
        newUserInfo.success = false;
        newUserInfo.error = err.message;
        return newUserInfo;
    })
}

// update user info
const upDateUserInfo = (name) =>{
    const  user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    })
    .then(res =>{
        //update successfully
        console.log('name update')
    })
    .catch(err =>{
        console.log(err.message)
    })
}


  