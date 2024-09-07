var posts=["2024/09/07/ssh/","2024/08/16/kxsw/","2024/08/06/serv00-re-ProxySite/","2024/08/03/segfault-faq/","2024/08/03/segfault/","2024/07/13/freeboundlessemail/","2024/07/12/serv00-re/","2024/07/11/meiquappleid-md/","2024/07/11/cloudnsdomainsre-md/","2024/07/11/uskgdomainsre-md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };