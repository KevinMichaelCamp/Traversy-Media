// until ES6 - older way to handle asynchronous
const posts = [{
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];

function getPosts() {
    // setTimeoute takes in a callback function and delays in ms (100 = 1sec)
    // setTimeout(function () {
    //     let output = '';
    //     posts.forEach(function (post) {
    //         output += `<li>${post.title}</li>`;
    //     });
    //     document.body.innerHTML = output;
    // }, 1000)

    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

// Using callback asynchronously
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({
    title: 'Post Three',
    body: 'This is post three'
}, getPosts);