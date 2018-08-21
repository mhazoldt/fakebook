// import { DeepPartial } from "../../../node_modules/redux";



function home(state = { posts: [] }, action: any) {
    switch(action.type) {
        case 'GET_POSTS': {
            let newState = Object.assign({}, state, {
                isFetching: true
            })

            return newState
        }

        case 'POSTS_FETCHED': {
            let newState = Object.assign({}, state, {
                posts: action.data,
                isFetching: false
            })

            return newState
        }

        case 'TOGGLE_COMMENTS': {

            let posts = state.posts.map((post: any) => {
                post.commentsVisible = (action.data === post.id) ?
                    !post.commentsVisible :
                    post.commentsVisible
                return post
            }) 
            console.log('reducer posts: ', {posts})
            let newState = Object.assign({}, state, {posts})

            return newState
        }

        default: {

            return state
        }

    }
}

export default home