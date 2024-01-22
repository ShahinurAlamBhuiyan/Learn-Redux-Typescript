import { connect } from "react-redux";
import { changePopUp, storeAllPost, storeSinglePost } from "../Redux/actions/postAction";
import { getAllPosts, getPopUpStatus, getSinglePost } from "../Redux/reducers/postReducer";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const AllPosts = ({ storeAllPosts, allPosts, storeSinglePost, singlePost, changePopUpStatus, popUpStatus }) => {
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
        changePopUpStatus(true);
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
            {
                popUpStatus ? <p>true</p> : <p>false</p>
            }
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

            <Modal
                show={popUpStatus}
                onHide={() => changePopUpStatus(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {singlePost.id}. {singlePost.slug}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{singlePost.title}</h4>
                    <p>
                        {singlePost.content}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => changePopUpStatus(false)}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

const mapStateToProps = (state) => ({
    allPosts: getAllPosts(state),
    singlePost: getSinglePost(state),
    popUpStatus: getPopUpStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
    storeAllPosts: (posts) => dispatch(storeAllPost(posts)),
    storeSinglePost: (post) => dispatch(storeSinglePost(post)),
    changePopUpStatus: (changedStatus) => dispatch(changePopUp(changedStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
