// import { useEffect, useRef } from 'react';

// interface GoogleTrendsWidgetProps {
//   geo: string;
//   widgetType: 'dailytrends' | 'realtime';
// }

// const GoogleTrendsWidget: React.FC<GoogleTrendsWidgetProps> = ({ geo, widgetType }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://ssl.gstatic.com/trends_nrtr/3804_RC01/embed_loader.js';
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       if (window.trends && containerRef.current) {
//         window.trends.embed.renderWidget(widgetType, containerRef.current.id, {
//           geo,
//           guestPath: 'https://trends.google.com:443/trends/embed/',
//         });
//       }
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [geo, widgetType]);

//   return (
//     <div
//       id="trends-widget"
//       ref={containerRef}
//       className="w-full h-96 border rounded-lg"
//     ></div>
//   );
// };

// export default GoogleTrendsWidget;
