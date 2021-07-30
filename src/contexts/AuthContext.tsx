export function AuthContextProvider(props) {
  const provider = new firebase.auth.GoogleAuthProvider();

  const result = await auth.signInWithPopup(provider);

  return <AuthContext.Provider></AuthContext.Provider>;
}
