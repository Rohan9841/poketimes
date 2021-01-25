const initState = {
    posts: [
        { id: '1', title: 'Squirtle laid an egg', body: 'Lorem ipsum dolor sit amet asedfasd asdf asdf  asdf  asdf  fdh fgd cx vx cv xcv xcg sd tfwe rwerwwwwwer we rwerwerwe ' },
        { id: '2', title: 'Charmander laid an egg', body: 'Lorem ipsum dolor sit amet asedfasd asdf asdf  asdf  asdf  fdh fgd cx vx cv xcv xcg sd tfwe rwerwwwwwer we rwerwerwe ' },
        { id: '3', title: 'a helix fossil was found', body: 'Lorem ipsum dolor sit amet asedfasd asdf asdf  asdf  asdf  fdh fgd cx vx cv xcv xcg sd tfwe rwerwwwwwer we rwerwerwe ' }
    ]
}

const RootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default RootReducer;