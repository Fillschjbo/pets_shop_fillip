import {readPost} from "../../api/listing/read.js";

async function renderListing(){
    try{
        const data = await readPost()
        console.log(data)
    }catch (error){
        console.error(error)
    }
}
renderListing()