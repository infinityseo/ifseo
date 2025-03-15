(function () {
  const allowedPaths = {
    livechat: "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE3",
    telegram: "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE3",
    login: "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE3",
    register: "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE3",
    official: "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE3",
    "download-apk": "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE3",
    "download-ios": "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE3",
    "aternatif-link": "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE3",
    whatsapp: "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE1MA%3D%3D",
    "join-us": "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE1MA%3D%3D",
  };


  const defaultUrl = "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE1MA%3D%3D";

  const params = new URLSearchParams(window.location.search);
  const target = params.get("url");


  if (target && allowedPaths[target]) {
    window.location.href = allowedPaths[target];
  } else {
    window.location.href = defaultUrl;
  }
})();
