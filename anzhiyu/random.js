var posts=["2024/11/08/gnamedomain/","2024/11/07/zidongjiedian/","2024/11/06/telegramre/","2024/11/04/wuxiangmail/","2024/09/08/serv00-singbox/","2024/09/07/jisousoso/","2024/09/07/ssh/","2024/08/06/serv00-re-ProxySite/","2024/08/03/segfault-faq/","2024/08/03/segfault/","2024/07/13/freeboundlessemail/","2024/07/12/serv00-re/","2024/07/11/meiquappleid-md/","2024/07/11/cloudnsdomainsre-md/","2024/07/11/uskgdomainsre-md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };