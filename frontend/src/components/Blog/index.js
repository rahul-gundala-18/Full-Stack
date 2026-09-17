import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogItem from '../BlogItem';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const response = await fetch('https://apis.ccbp.in/blogs');
        const data = await response.json();
        setBlogs(data);
    };
    return (
        <div>
            <h1>Blog List</h1>
            <div>
                {blogs.map(blog => (
                    <Link to={`/blog/${blog.id}`}>
                        <BlogItem key={blog.id} title={blog.title} content={blog.content} author={blog.author} image_url={blog.image_url} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogList;