export function connectToSSE(
    endpoint: string,
    eventName: string,
    onMessageCallback: (event: MessageEvent) => void,
    onErrorCallback: (event: Event) => void
  ): EventSource {
    const eventSource = new EventSource(`${import.meta.env.VITE_API_URL}${endpoint}`);
  
    eventSource.addEventListener(eventName, onMessageCallback);
    eventSource.onerror = onErrorCallback;
  
    return eventSource;
  }