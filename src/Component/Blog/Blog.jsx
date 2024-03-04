import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const { id,title, cover_pic_link,author_name,author_profile_link,hashtags,submit_date,reading_time} = blog;
    console.log(blog)
    return (
        <div>
            <img src={cover_pic_link} alt={`Cover Picture of the title ${title}`} />
            <div>
                <img className='w-14' src={author_profile_link} alt="" />
                <div>
                    <h4>{author_name}</h4>
                    <h4>{submit_date}</h4>
                </div>
            </div>
            
            <h3 className='text-5xl'>{title}</h3>
            <p>
                
            </p>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;