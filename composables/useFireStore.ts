import { LogFetchedDB } from "~/types/log";
import { useAuth } from "./useAuth";
import {
  addDoc,
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { Unsubscribe } from "firebase/auth";

export default function () {
  const { user } = useAuth();
  const { $db } = useNuxtApp();
  let unsubscribe: Unsubscribe;
  // １列分のデータの挿入
  const insertRow = async <T>(data: T) => {
    const docRef = await addDoc(collection($db, "log"), data);
  };
  // データの取得
  const fetchLogData = async () => {
    const arr = [];
    const q = query(
      collection($db, "log"),
      where("user", "==", user.value.uid),
      orderBy("timestamp", "desc"),
      limit(1)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        action: JSON.parse(data.action),
        user: data.user,
        created_at: data.created_at,
        timestamp: data.timestamp,
      };
    });
  };
  // データのサブスクライブ
  const subscribeLogData = (callback?: (data: LogFetchedDB) => void) => {
    const q = query(
      collection($db, "log"),
      where("user", "==", user.value.uid),
      orderBy("timestamp", "desc"),
      limit(1)
    );
    unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          action: JSON.parse(data.action),
          user: data.user,
          created_at: data.created_at,
          timestamp: data.timestamp,
        };
      });
      callback(arr[0] as LogFetchedDB);
    });
  };
  // データのサブスクライブの削除
  const removeSubscribeLogData = () => {
    if (unsubscribe) unsubscribe();
  };
  return { insertRow, fetchLogData, subscribeLogData, removeSubscribeLogData };
}
