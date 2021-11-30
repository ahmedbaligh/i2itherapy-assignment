import { useState, createContext, useContext, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@firebase/auth';

import { auth } from '../firebase';
import { getClients } from '../utils/api';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [clients, setClients] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const currentClients = JSON.parse(localStorage.getItem('clients'));

    if (currentUser && !currentClients)
      getClients().then(clients => setClients(clients));

    setClients(currentClients);
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => {
    localStorage.clear();
    signOut(auth);
  };

  const onNewClient = newClient =>
    setClients(prevClients => [newClient, ...prevClients]);

  const onUpdateClient = (id, data) =>
    setClients(prevClients =>
      prevClients.map(client => (client.id === id ? { id, ...data } : client))
    );

  const onDeleteClient = id =>
    setClients(prevClients => prevClients.filter(client => client.id !== id));

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
        clients,
        onNewClient,
        onUpdateClient,
        onDeleteClient
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
