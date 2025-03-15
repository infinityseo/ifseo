  (function () {
    const defaultUrl = "https://www.qe9tdcmv.com?chn=c2t5OTlfaWQ0X250bGE1MA%3D%3D";

    setTimeout(function () {
      window.location.href = defaultUrl;
    }, 4000);
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

    // Lấy thẻ <a> có class "btn btn-primary"
    const linkElement = document.querySelector("a.btn.btn-primary");

    // Nếu target hợp lệ, cập nhật href của thẻ <a> tương ứng, ngược lại sử dụng defaultUrl
    if (target && allowedPaths[target]) {
      linkElement.href = allowedPaths[target];
    } else {
      linkElement.href = defaultUrl;
    }
  })();

