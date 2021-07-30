export function AuthContextProvider(props) {
  const provider = new firebase.auth.GoogleAuthProvider();

  return <AuthContext.Provider></AuthContext.Provider>;
}
