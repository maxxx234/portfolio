const conf = {
   appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
   appwriteProjectId: String(import.meta.env.VITE_PROJECT_URL),
   appwriteDatabasetId: String(import.meta.env.VITE_DATABASE_URL),
   appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_URL),
   appwriteBucketId: String(import.meta.env.VITE_BUCKET_URL)
}

export default conf