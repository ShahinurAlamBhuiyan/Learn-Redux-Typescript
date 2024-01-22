import { connect } from "react-redux"
import { storeAllPost } from "../Redux/actions/postAction"
import { getAllPosts } from "../Redux/reducers/postReducer"
import { useEffect } from "react"

const AllPosts = ({ storeAllPosts }) => {
    const handleClick = () => {
        fetch('https://jsonplaceholder.org/posts')
            .then((res) => {
                return res.json();
            }).then((data) => {
                storeAllPosts(data)
            })
    }
    return (
        <div>
            <p>hello</p>
            <button onClick={() => { handleClick() }}>get data</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    allPosts: getAllPosts(state),
})

const mapDispatchToProps = (dispatch) => ({
    storeAllPosts: (posts) => dispatch(storeAllPost(posts))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);