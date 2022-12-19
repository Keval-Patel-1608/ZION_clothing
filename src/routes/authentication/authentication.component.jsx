// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authenticaton.styles.scss';
// import { 
  // auth, 
        // signInWithGooglePopup, 
        // createUserDocumentFromAuth, 
  // signInWithGoogleRedirect 
// } from '../../utils/firebase/firebase.utils';
  
const Authentication = () => {
  // useEffect( () => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);

  //     if(response){
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   fetchData();    
  // }, []);      
  
    return (
      <div className='authentication-container'>
        {/* <h1>Sign In Page</h1> */}
        {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
        <SignInForm />
        <SignUpForm />
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      </div>
    );
  };
  
  export default Authentication;