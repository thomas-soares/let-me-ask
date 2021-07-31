export function AuthContextProvider(props) {
  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;
    }
  }

  return <AuthContext.Provider></AuthContext.Provider>;
}
