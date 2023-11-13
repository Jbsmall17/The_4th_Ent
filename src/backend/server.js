import {
    playlistFormat,
    eventFormat,
    blogFormat,
    subscribersFormat
} from "./helper"
import axios from "axios"
// import dotenv from "dotenv"
// dotenv.config()

// const Playlist = base(import.meta.env.PLAYLIST_ID);
// const Event = base(import.meta.env.EVENT_ID);
// const Blog = base(import.meta.env.BLOG_ID)

const BASE_ID = import.meta.env.VITE_BASE_ID || "appNbLKyw4Hoeg0sR"
const  EVENT_ID = import.meta.env.VITE_EVENT_ID || "tblg0vqYZoeB6A1oz"
const PLAYLIST_ID = import.meta.env.VITE_PLAYLIST_ID || "tblE30CiKSiktzlfE"
const BLOG_ID = import.meta.env.VITE_BLOG_ID || "tbln4KQucjjAR8Oqq"
const SUBSCRIBERS_ID = "tblMR4Au6tANNXRIH"
const TOKEN = import.meta.env.VITE_BASE_TOKEN || "patwOb4U9TbrHjmG5.a1f27bcc1610fc4e5e74da62f4590bdd941ad6d8337f3c5809a830a2aabbb700"


const ENDPOINT = `https://api.airtable.com/v0/${BASE_ID}`



async function fetchPlaylist(){
    try {
        let playlists = await axios.get(`${ENDPOINT}/${PLAYLIST_ID}`,{
            headers : {
                Authorization : `Bearer ${TOKEN}`  
            }
        })
        let thisWeekPlaylist = playlists.data.records
        .map(playlistFormat)
        .filter((playlist)=>{
            return playlist.url !== undefined
        });
        return { status: 200, message: 'Playlist fetched successfully', data : thisWeekPlaylist };
    } catch (error) {
        return { status: 500, message: 'Internal Server Error', error };
    }
}

async function fetchEvent(){
    try{
        const Events = await axios.get(`${ENDPOINT}/${EVENT_ID}`,{
            headers : {
                Authorization : `Bearer ${TOKEN}`  
            }
        })
        const formattedEvent = Events.data.records
        .map(eventFormat)
        .filter((event)=>{
            return event.name !== undefined
        });
        return { status: 200, message: "event fetched successfuly ", data : formattedEvent}
    }catch(error){
        return { status: 500, message : "Internal Server Error", error }
    }
}

async function fetchBlog(){
    try{
        const Blogs = await axios.get(`${ENDPOINT}/${BLOG_ID}`,{
            headers : {
                Authorization : `Bearer ${TOKEN}`  
            }
        })
        const formattedBlog = Blogs.data.records
        .map(blogFormat)
        .filter((blog)=> blog.title !== undefined);
        return { status: 200, message : "Blogs fetched successfully", data: formattedBlog}
    }
    catch(error){
        return { status : 200, message: "Blogs fetched successfully", error}
    }
}

async function postSubscriber(email){
    const endpoint = `${ENDPOINT}/${SUBSCRIBERS_ID}`

    const headers = {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
    }

    const postData = {
        fields: {
          email: email.trim(),
        },
      };

    try{
        const response = await axios.get(`https://api.airtable.com/v0/${BASE_ID}/subscribers?filterByFormula={email}='${email}'`,
        {headers})

        const emailExist = response.data.records.length > 0
        console.log(emailExist)
        if(!emailExist){
            const response = await axios.post(endpoint,postData,{headers})
            // console.log('Record created successfully:', response.data);
            return {status: 200, message: "Record created successfully", data : response.data}
        }
        else{
            return {status : 400, message: "Email Already Exist", data : email}
        }
    } catch(error){
        // console.error('Error creating record:', error);
        return {status : 500, message : "Internal server error", error}
    }
}


export {
    fetchPlaylist,
    fetchBlog,
    fetchEvent,
    postSubscriber
}