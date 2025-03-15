  (function() {
    const defaultUrl = "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE1MA%3D%3D";
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
      "join-us": "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE1MA%3D%3D"
    };

    // Lấy tham số 'url' từ query string của URL hiện tại
    const params = new URLSearchParams(window.location.search);
    const target = params.get("url");

    // Lấy thẻ <a> theo id "redirect-link"
    const linkElement = document.getElementById("redirect-link");

    // Kiểm tra nếu target hợp lệ thì cập nhật href, ngược lại sử dụng defaultUrl
    if (target && allowedPaths[target]) {
      linkElement.href = allowedPaths[target];
      window.location.href = allowedPaths[target];
    } else {
      linkElement.href = defaultUrl;
       window.location.href = defaultUrl;
    }
  })();
