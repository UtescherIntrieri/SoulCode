import { addDoc, getDocs, doc ,getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { livrosCollection } from "./collections";

export async function addLivro(data) {
    await addDoc(livrosCollection, data);
}

export async function getLivros() {
    const snapshot = await getDocs(livrosCollection);
    let livros = [];
    snapshot.forEach(doc => {
        livros.push({...doc.data(), id: doc.id});
    })
    return livros;
}

export async function getLivro(id) {
  const document = await getDoc(doc(livrosCollection, id));
  return {...document.data(), id: document.id};
}

export async function updateLivro(id, data) {
  await updateDoc(doc(livrosCollection, id), data)
}

export async function deleteLivro(id) {
  await deleteDoc(doc(livrosCollection, id));
}