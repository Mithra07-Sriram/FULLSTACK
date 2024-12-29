async function LikeCode()
{
    return  new Promise((like)=>
    {
         like("post liked successfully")
    })
}
async function commentCode()
{
    return new Promise((commentPosted)=>
    {
        commentPosted("Comment posted successfully is the post")
    })
}
async function createPost()
{
    var post= new Promise((postCreated)=>
    {
        postCreated("Post created successfully")
    })
    var [post,like,comment]=await Promise.all([post,commentCode(),LikeCode()])//destructuring la only array can be used in right side ,w/o await keyword promise all doest work but promise alone will work;
   //when commentCOde is passed instead of commentcode() it shows op/[AsyncFunction: commentCode]
    console.log(post);
    console.log(like);
    console.log(comment);

}
createPost()