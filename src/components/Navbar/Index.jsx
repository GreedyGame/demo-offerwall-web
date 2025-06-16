import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";

export default function Navbar(props) {
  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    const usersRef = collection(db, "apps", "my_app", "users");
    // Set up listener to read user balance
    const unsubscribe = onSnapshot(usersRef, (snapshot) => {
      const usersList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const WowUser = usersList.find((user) => user.id === props.userId);
      setUserBalance(WowUser?.balance || 0);
    });

    // Clean up on unmount
    return () => unsubscribe();
  }, []);

  return (
    <header className="fixed block top-0 inset-x-0 z-[10] h-full w-full max-w-screen max-h-[var(--nav-height)] bg-[var(--bg-dark)]">
      <div className="pl-32 pr-32 pt-5 pb-5 relative flex items-center justify-between">
        <img src="/pubscale-white.svg" />
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-2 ">
          <div className="bg-[#474125] w-32 rounded-3xl flex items-center justify-between p-1 border-2 border-[#C2C0C0]">
            <div className="coin">
              <img src="/user.svg" />
              {/* <UserIcon /> */}
            </div>
            <p className="balance text-white pr-1 text-[1rem]">
              {props.userId}
            </p>
          </div>
          <div className="bg-amber-300 w-32 rounded-3xl flex items-center justify-between p-1 border-2 border-[#C2C0C0]">
            <div className="coin">
              <img src="/coin.svg" />
            </div>
            <p className="balance text-[#F26D00] font-semibold pr-1 text-[1rem]">
              {userBalance}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
