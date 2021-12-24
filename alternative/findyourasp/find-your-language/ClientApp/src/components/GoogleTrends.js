import React from "react";
import Script from "react-load-script";


export default function GoogleTrends({ type, keyword, url }) {
  const comparisonList =
     [{ "keyword":"python", "geo":"","time":"today 12-m" },
      { "keyword":"javascript", "geo":"","time": "today 12-m" },
      { "keyword":"C#", "geo": "","time":"today 12-m" },
      { "keyword":"java", "geo": "","time":"today 12-m" },
      { "keyword":"c++", "geo":"","time":"today 12-m" }]

  const handleScriptLoad = _ => {
    window.trends.embed.renderExploreWidgetTo(
      document.getElementById("widget"),
      type,
      {
        comparisonItem: comparisonList,
        category: 0,
        property: ""
      },
      {
        exploreQuery: `q=${encodeURI(keyword)}&date=today 12-m`,
        guestPath: "https://trends.google.com:443/trends/embed/"
      }
    );
  };

  const renderGoogleTrend = _ => {
    return <Script url={url} onLoad={handleScriptLoad} />;
  };


  return <div className="googleTrend">{renderGoogleTrend()}</div>;
}




