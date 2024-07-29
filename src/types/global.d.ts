interface Trends {
    embed: {
      renderWidget: (type: string, id: string, options: { geo: string; guestPath: string }) => void;
    };
  }
  
  interface Window {
    trends: Trends;
  }
  