const BlogItem = ({ title, content, author, image_url }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Author: {author}</p>
            <img src={image_url} alt={title} width="200" />
        </div>
    );
};

export default BlogItem;