import { connect } from "react-redux";
import { storeAllPost, storeSinglePost } from "../Redux/actions/postAction";
import { getAllPosts, getSinglePost } from "../Redux/reducers/postReducer";

const AllPosts = ({ storeAllPosts, allPosts, storeSinglePost, singlePost }) => {
    const handleClick = () => {
        fetch("https://jsonplaceholder.org/posts")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                storeAllPosts(data);
            });
    };

    const handleSinglePost = (post) => {
        storeSinglePost(post);
    };
    console.log(singlePost);
    return (
        <div>
            <button
                onClick={() => {
                    handleClick();
                }}
            >
                store all data
            </button>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                }}
            >
                {allPosts.map((post) => (
                    <p
                        onClick={() => handleSinglePost(post)}
                        style={{
                            border: "1px solid black",
                            padding: "10px",
                            cursor: "pointer",
                        }}
                        key={post.id}
                    >
                        {post.id}. {post.slug}{" "}
                    </p>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    allPosts: getAllPosts(state),
    singlePost: getSinglePost(state),
});

const mapDispatchToProps = (dispatch) => ({
    storeAllPosts: (posts) => dispatch(storeAllPost(posts)),
    storeSinglePost: (post) => dispatch(storeSinglePost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
