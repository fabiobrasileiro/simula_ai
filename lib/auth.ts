import { auth } from "./firebase"; // Caminho para o arquivo firebase.ts
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";

// Registrar usuário
export const registerUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Fazer login
export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Fazer logout
export const logoutUser = async () => {
  const auth = getAuth(); // Obtém a instância de autenticação
  try {
    await signOut(auth);
    console.log("Usuário deslogado com sucesso!");
  } catch (error) {
    throw new Error(`Erro ao deslogar: ${console.error()}`);
  }
};


export const getLoggedInUser = async (): Promise<User | null> => {
  try {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe(); // Para de escutar depois que pegar o usuário
        resolve(user); // Retorna o usuário logado ou null
      });
    });
  } catch (error) {
    console.error("Erro ao obter o usuário logado", error);
    return null;
  }
};