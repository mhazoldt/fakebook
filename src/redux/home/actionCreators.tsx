
function postsFetched(posts: any) {
    return { type: 'POSTS_FETCHED', data: posts }
}

function toggleComments(post: number) {
    return { type: 'TOGGLE_COMMENTS', data: post }
}

// thunks

function getPosts() {
    return async function(dispatch: any) {

        let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())

        let users = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

        posts = posts = posts.filter((post: any) => post.userId !== 1 && post.userId)

        let ts: Date
        posts = posts.map((post: any ) => {
            console.log({post})
            post.username = users.filter((user: any) => (user.id === post.userId))[0].username
            ts = new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
            post.timestamp = ts
            post.date = `${ts.getMonth()}/${ts.getDay() + 1}/${ts.getFullYear()}`
            return post
        })

        let comments = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())

        posts = posts.map((post: any ) => {
            post.comments = comments.filter((comment: any) => (comment.postId === post.id))
            post.comments = post.comments.map((c: any ) => {
                ts = new Date(+(new Date(post.timestamp)) + Math.floor(Math.random()*1000000000))
                c.timestamp = ts
                c.date = `${ts.getMonth()}/${ts.getDay() + 1}/${ts.getFullYear()}`
                return c
            })
            post.commentsVisible = false
            return post
        })

        let photos = await fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())

        let selectPhoto: number
        posts = posts.map((post: any ) => {
            
            if(Math.floor(Math.random() * 5) === 0) {
                selectPhoto = Math.floor(Math.random() * 20) + 10
                post.photo = photos.filter((photo: any) => (photo.id === post.userId + selectPhoto))[0]
            }

            post.userPhoto = photos.filter((photo: any) => (photo.id === post.userId))[0]
            return post
        })

        posts.sort(((x: any, y: any) => x.timestamp.getDate() - y.timestamp.getDate()))
        dispatch(postsFetched(posts))
    }
}


export { 
    getPosts,
    toggleComments 
}