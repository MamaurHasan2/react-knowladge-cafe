import PropTypes from 'prop-types';

const Blog = ({blog}) => {

    const { title, cover,author_name,author_image,hashtags,post_date,reading_time} = blog;
    console.log(blog)
    return (
        <div>
            <img src={cover} alt={`Cover Picture of the title ${title}`} />
            <h3>{title}</h3>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;