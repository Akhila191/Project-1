import { GoogleOAuthProvider,GoogleLogin  } from '@react-oauth/google';

function Auth(){
    return (
        <>
        <h1>Logging With Google</h1>
        <GoogleOAuthProvider clientId="328551018942-j35sd92jakctgvpbf0uqn2ip2g4r37v3.apps.googleusercontent.com">
          <GoogleLogin 
           onSuccess={(credentialResponse) => {
            console.log( "Logged In -->",credentialResponse.credential);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        </GoogleOAuthProvider>
        </>
     )
}

export default Auth;