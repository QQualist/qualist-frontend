import { useEffect } from "react";

const AuditReminderEvent = () => {
  useEffect(() => {
    const eventSource = new EventSource(
      `${import.meta.env.VITE_API_URL}/audit-reminders/event`
    );

    eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);

        console.log(data);
    }

    return () => {
        eventSource.close();
    }
  }, []);
  return null;
};

export default AuditReminderEvent;
