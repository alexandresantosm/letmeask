import { auth, firebase } from "./firebase";

type UserAuthenticate = {
  id: string;
  name: string;
  avatar: string;
};

export const authentication = {
  async execute(): Promise<UserAuthenticate> {
    let id = "";
    let name = "";
    let avatar = "";

    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }

      id = uid;
      name = displayName;
      avatar = photoURL;
    }

    return {
      id,
      name,
      avatar,
    };
  },
};
