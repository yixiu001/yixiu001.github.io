var posts=["2024/07/13/freeboundlessemail/","2024/07/12/serv00-re/","2024/07/11/meiquappleid-md/","2024/07/11/cloudnsdomainsre-md/","2024/07/11/uskgdomainsre-md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };