import {deletePost} from "../../src/js/api/listing/delete.js";

export async function onDeletePost(event) {

    if (confirm("are you sure you want to delete this post?")){

        const deletion = await deletePost(event);
        if (deletion) {
            window.location.href = "/";
            alert("Deleted post")
        } else {
            alert("Failed to delete post.");
        }
    }
}