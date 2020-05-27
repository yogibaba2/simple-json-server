module.exports = () => {
    const data = { 
        posts: [],
        comments: []            
    }

    let comment_id = 0;
    // Create 10 post
    for (let i = 0; i < 10; i++) {
      data.posts.push({ id: i, title: `post_${i}`, author: `author_${i}`, body: `${makeid(20)}` })

      //add 2 comments to each post
      data.comments.push({ id: comment_id++, "body": `${makeid(10)}`, "postId": i })
      data.comments.push({ id: comment_id++, "body": `${makeid(10)}`, "postId": i })
    }
    return data
  }

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }