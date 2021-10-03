import React from 'react';
import Tittle from '../Components/Tittle';
import allBlogs from '../Components/allBlogs';
import { Link } from 'react-router-dom'

function BlogsPage() {
    return (
        <div >
            <div className="b-title">
                <Tittle title={'Recent Blogs'} span={'Recent Blogs'} />
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog) => {
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <Link to={`./blog/${blog.param}`} className="blog-link">
                                    <img src={blog.image} alt="" />
                                    {blog.title}
                                </Link>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default BlogsPage;
