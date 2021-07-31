export function AuthContextProvider(props) {
  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
  }

  return <AuthContext.Provider></AuthContext.Provider>;
}
