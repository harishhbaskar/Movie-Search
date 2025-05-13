import {Client, Databases, Query, ID} from 'appwrite'

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID
const API_KEY = import.meta.env.VITE_APPWRITE_API_KEY

const client = new Client()
    .setEndpoint("https://cloud.appwrite.in/v1")
    .setProject(PROJECT_ID)
    .setKey(API_KEY)

const database = new Databases(client);

const updateSearchCount = async(searchTerm, movie) => {
    console.log("Creating new document:", searchTerm);

    try {
        const result = await database.listDocuments(DATABASE_ID,COLLECTION_ID, [
            Query.equal('searchTerm',searchTerm)
            
        ])
        if(result.documents.length > 0) {
            const doc = result.documents[0];

            await database.updateDocument(DATABASE_ID,COLLECTION_ID,doc.$id, {
                count: doc.count + 1
            })
        }else{
            await database.createDocument(DATABASE_ID,COLLECTION_ID,ID.unique(),{
                searchTerm,
                count : 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            })
        }
    } catch (error) {c
        console.log(error)
        console.error("Appwrite Error:", error.message, error.response);
    }
}
export default updateSearchCount 