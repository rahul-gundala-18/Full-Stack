import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
const BlogDetails = () => {
    const { id } = useParams(); // Get the blog ID from the URL parameters
    const [blogDetails, setBlogDetails] = useState(null); // State to hold the blog details
    console.log('Blog ID:', id); // Log the blog ID to the console for debugging

    // Fetch the blog details using the ID
    const fetchBlogDetails = useCallback(async () => {
        try {
            const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
            const data = await response.json();
            console.log('Blog Details:', data); // Log the blog details to the console for debugging
            setBlogDetails(data); // Update the state with the fetched blog details
        } catch (error) {
            console.error('Error fetching blog details:', error);
        }
    }, [id]);
    useEffect(() => {
        fetchBlogDetails();
    }, [fetchBlogDetails]); // Re-run the effect if the ID changes


    return (
        <div>
            <h1>Blog Details</h1>
            {blogDetails && (
                <div>
                    <h2>{blogDetails.title}</h2>
                    <p>{blogDetails.content}</p>
                    <p>Author: {blogDetails.author}</p>
                    <img src={blogDetails.image_url} alt={blogDetails.title} width="200" />
                </div>
            )}
        </div>
    );
};

export default BlogDetails;