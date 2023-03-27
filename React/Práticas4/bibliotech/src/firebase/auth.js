import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth } from "./config"

export async function cadastrarEmailSenha(email,senha) {
  
  const resultado = await createUserWithEmailAndPassword(auth, email, senha)
  
  return resultado.user
}

export async function loginGoogle() {
  const provider = new GoogleAuthProvider()
  const resultado = await signInWithPopup(auth, provider)
  return resultado.user
}

export async function loginEmailSenha(email, senha) {
  const resultado = await signInWithEmailAndPassword
  return resultado.user
}