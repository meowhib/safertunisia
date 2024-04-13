"use client";

import { useEffect } from 'react';

export default function LiveChatBubble() {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/661946391ec1082f04e1a0f8/1hr9bkkf2';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.body.appendChild(script);
    
        const tawkScript = document.createElement('script');
        tawkScript.innerHTML = `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/661946391ec1082f04e1a0f8/1hr9bkkf2';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `;
        document.body.appendChild(tawkScript);
    
        return () => {
          // Cleanup function to remove the script when the component unmounts
          document.body.removeChild(script);
          document.body.removeChild(tawkScript);
        };
      }, []);
    
      return null;
}
