import { useGotoRecoilSnapshot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { JobAtom, MessageAtom, NetworkAtom, NotificationAtom, totalCountSelector } from "./store/atoms/LinkAtom";

export const Link = () => {
  const networkCount = useRecoilValue(NetworkAtom);
  const jobsCount = useRecoilValue(JobAtom);
  const messageCount = useRecoilValue(MessageAtom);
  const notificationCount = useRecoilValue(NotificationAtom); // Changed to useRecoilValue
  const setMessageCount = useSetRecoilState(MessageAtom); // Declare useSetRecoilState at the top
    const totalvalue = useRecoilValue(totalCountSelector)
  const buttonUpdater = () => {
    setMessageCount((c) => c + 1); // Update the message count by incrementing it
  };

  return (
    <>
      <button>
        Networks {networkCount >= 100 ? "99+" : networkCount}
      </button>

      <button>Message {messageCount}</button>
      <button>Notifications {notificationCount >= 100 ? "99+" : notificationCount}</button>
      <button>Jobs {jobsCount}</button>
      <button >Me {totalvalue}</button>
    </>
  );
};
