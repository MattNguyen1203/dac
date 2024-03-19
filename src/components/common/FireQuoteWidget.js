'use client'
import React, { useEffect } from 'react';

function FireQuoteWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.fireant.vn/Scripts/web/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new FireAnt.QuoteWidget({
        container_id: 'fan-quote-360',
        symbols: 'INN',
        locale: 'vi',
        price_line_color: '#71BDDF',
        grid_color: '#999999',
        label_color: '#999999',
        height:'200px'
      });
    };

    return () => {
      script.remove();
    };
  }, []); 

  return (
    <>
      <div id="fan-quote-360"></div>
    </>
  );
}

export default FireQuoteWidget;
