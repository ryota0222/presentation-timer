import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  TwitterAuthProvider,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();

export const useAuth = () => {
  const token = useState<string>("token", () => null);
  const user = useState<User>("token", () => null);
  // Googleログインの処理
  async function signInWithGoogle() {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth();
      return signInWithPopup(auth, googleProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          token.value = credential.accessToken;
          // The signed-in user info.
          user.value = result.user;
          resolve();
        })
        .catch(reject);
    });
  }
  // Twitterログインの処理
  async function signInWithTwitter() {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth();
      return signInWithPopup(auth, twitterProvider)
        .then((result) => {
          // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
          // You can use these server side with your app's credentials to access the Twitter API.
          const credential = TwitterAuthProvider.credentialFromResult(result);
          token.value = credential.accessToken;
          // The signed-in user info.
          user.value = result.user;
          resolve();
        })
        .catch(reject);
    });
  }
  // GitHubログインの処理
  async function signInWithGitHub() {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth();
      return signInWithPopup(auth, githubProvider)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          token.value = credential.accessToken;
          // The signed-in user info.
          user.value = result.user;
          resolve();
        })
        .catch(reject);
    });
  }
  //   ログアウト処理
  async function signOut() {
    return await new Promise<void>((resolve, reject) => {
      const auth = getAuth();
      firebaseSignOut(auth)
        .then(() => {
          token.value = null;
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  //   認証状態のチェック
  async function checkAuthState() {
    return await new Promise<void>((resolve, reject) => {
      // client only
      if (process.server) return resolve();
      const auth = getAuth();
      onAuthStateChanged(
        auth,
        (_user) => {
          if (_user) {
            user.value = _user;
            _user
              .getIdToken()
              .then((idtoken) => {
                token.value = idtoken;
                resolve();
              })
              .catch(reject);
          } else {
            token.value = null;
            user.value = null;
            resolve();
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  return {
    token,
    user,
    checkAuthState,
    signInWithGitHub,
    signInWithGoogle,
    signInWithTwitter,
    signOut,
  };
};
