var SpacebookApp = function() {
    var posts = [
        // {text: "Hello world", id: 0, comments:[
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"}
        // ]},
        // {text: "Hello world", id: 0, comments:[
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"}
        // ]},
        // {text: "Hello world", id: 0, comments:[
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"},
        //   { text: "Man, this is a comment!"}
        // ]}
    ];

    // the current id to assign to a post
    var currentId = 0;
    var $posts = $('.posts');

    //USE THE POST IN THE HTML TO FIND THE POST IN THE ARRAY, RETURN THE POST IN THE ARRAY TO WHOEVER CALLED THIS FUNCTION
    var _findPostById = function(id) {
        for (var i = 0; i < posts.length; i += 1) {
            if (posts[i].id === id) {
                return posts[i];

            }
        }
    }

    var createPost = function(text) {
        var post = {
            text: text,
            id: currentId,
            comments: [],
        }

        currentId += 1;

        posts.push(post);
    }


    var renderPosts = function() {
        $posts.empty();

        for (var i = 0; i < posts.length; i += 1) {
            var post = posts[i];

            var commentsContainer = '<div class="comments-container">' +
                '<input type="text" class="comment-name">' +
                '<button class="btn btn-primary add-comment">Post Comment</button> </div>';

            $posts.append('<div class="post" data-id=' + post.id + '>' +
                '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
                commentsContainer + '<button> </div>');
        }
    }

    var removePost = function(currentPost) {
        var $clickedPost = $(currentPost).closest('.post');
        var id = $clickedPost.data().id;

        var post = _findPostById(id); //{text: lkfglkfg, id:689}

        //remove post from array
        posts.splice(posts.indexOf(post), 1);
        //remove post from HTML
        $clickedPost.remove();
    }

    // This function adds an event listener and a function to the post. eventually it should have a comment field with text 
    $('.posts').on('click', '.add-comment', function() {
        //             //     //this locates the a post and stores it. it locates it by the button that was pressed , then it goes UP to the closeset post
        var myPost = $(this).closest(".post");
        //             //     //this takes the stored post, then it locates the extracted comment's text by going DOWN from the post div. 
        var text = myPost.find(".comment-name").val();
        //             //     //this adds a new pargraph to the post, and inside of it the text of the comment
        myPost.append("<p>" + text + "</p>");
        //this adds the comment to an array of comments which are connected to the posts

    });

    var createComment = function(text) {

        var comment = כאן אתה רוצה להתחיל


    }


    // var toggleComments = function(currentPost) {
    //     var $clickedPost = $(currentPost).closest('.post');
    //     $clickedPost.find('.comments-container').toggleClass('show');
    // }

    return {
        createPost: createPost,
        renderPosts: renderPosts,
        removePost: removePost,

        createComment: createComment,
        renderComments: renderComments,


        // TODO: Implement

        // TODO: Implement


        // TODO: Implement
        // removeComment: removeComment,
        // toggleComments: toggleComments
    }

}

var app = SpacebookApp();

// immediately invoke the render method
app.renderPosts();

// Events
$('.add-post').on('click', function() {
    var text = $('#post-name').val();

    app.createPost(text);
    app.renderPosts();
});

$('.posts').on('click', '.remove', function() {
    app.removePost(this);
});

// $('.posts').on('click', '.show-comments', function() {
//     app.toggleComments(this);
// });

// creating a comment:


// }

//     app.createPost().comments.push(comment)




// app.createComment(text);
// // app.renderComments();