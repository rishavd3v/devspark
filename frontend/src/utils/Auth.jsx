import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth/cordova';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../context/firebase';

const auth = getAuth(firebaseApp);

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
        setLoggedIn(true);
      } 
      else {
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  return { user, loggedIn, loading, setLoading};
}