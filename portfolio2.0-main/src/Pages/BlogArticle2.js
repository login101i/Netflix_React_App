import React from 'react'

const SingleBlog = () => {
    return (
        <div className="container-fluid " >
            <div className="row mt-5">
                <h2 style={{ textAlign: 'center' }} className="my-4" >Responsive Web Design</h2>
            </div>
            <div className="row mt-3  d-flex justify-content-center ">
                <div className="col-12">
                    <img src="https://bigtuna.com/wordpress/wp-content/uploads/2015/05/responsive_devices.png" alt="" className="img-fluid" />
                </div>


            </div>
            <div className="row mt-3">

                <div className="mt-3 col-12"><strong>In this article we gonna be describing the ten basic principles you need to know about responsive web design.</strong> <br /> <br />
                Responsive web desing is an awesome solutions to the multitude of different screen sizes and resolutions that we have to deal with. As digital designer this would be a great source of information if you are just getting started building websites whether it's desing or development and you want to make sure you have a firm grasp of the basics.</div>


                <h4 className="mt-3 col-12">Before we get started, personally I miss the days of pinching and zooming in my mobile browser on old-school websites. I thought that was really the best way to do it. I'am just kidding.</h4>

                <div className="mt-3 col-12">
                    <strong> The first principle</strong>    that you need to know about is the difference between responsive and adaptive web design. Your content is gonna blow. It's gonna squish and release consistently as the browser or devide size changes. Adaptive web design on the other hand is just going to adapt at certain sizes. There's no right or wrong answer. It just depends on which one you want.

            </div>
                <div className="mt-3 col-12">
                    <strong>   The second principle</strong>  that you need to know about is the flow. Every HTML documnent which websites are built a=on are made up of natural flow of the elements on that page. As screen starts to get smaller your content starts to take up more vertical space. It's something to keep mind if you'are not used to it.
            </div>


                <div className="mt-3 col-12">
                    <strong>The third principle</strong> that you need to know about is relative units of measurement. No longer you'd be designing with pixels or millimeters but we now have the opportunity to use relative units of measurement like percentages and viewport width and wiwport height as well.
                   As m adr rem's all of these measurements are relative to the browser size or relative to other elements on the page, relative units allow you to design responsive layouts so much more easily.
            </div>

                <div className="mt-3 col-12">
                    <strong>  The fourth basic principle</strong> of responsive web desing are breakpoints. Breakpoints are predefined areas of measurement that allow you to rearrange your layout dependent on the size of the browser of the device so if you have a desk with a really wide layout in twelve columns and it starts suishing down to tablet or mobile device sizes. You might want to insert a breakpoint that allows you to rearrange that twelve columns to a six or three or one column. This is really important because it allows you to take control your layout where things start to et a little funky and squished and no longer make sense.
            </div>
                <div className="mt-3 col-12">
                    <strong>  The fifth principle</strong>   that you need to know about are maximum and minimum values. Sometimes it makes sense for yur content to stretch 100% of the time. Other times it makes less sense and you might want to set a max width so it feels like there's a containing element that it stays in. As the browser starts to stretch your content never goes past certain point. This is really important for legible text you don't want to read measeres of text that are  3000 pixels wide. It's really hard for the eye and so. You want ot capture control gover and maintain with minimum and maximum values.
            </div>
                <div className="mt-3 col-12">
                    <strong> Number six on the list</strong>  of basic principles: you need to know that containers or nested objects sometimes it makes sense to take chunks of your content. Like a headline body copy an image that are related to each other and insert them inside of a div. You've now nested that content inside another containing elemen. Now your can control the containing element instead of constantly having to control each individual element. This makes a lot of sense if you look at a layout like a list of blog posts. All of those blog posts are contained most likely in a div or an article and each of the individual elements inside of them are relative to the parent container. So understanding hot ot use containers and nested elements is super iportant.
            </div>
                <div className="mt-3 col-12">
                    <strong>  The seventh basic </strong> The seventh basic that you need to know about is actually an ongoing debate of either mobile of desktop first.  How do your start designing? Do you start designing the full desktop experience or do you strip it down to that one column. Simplified: mobile first approach really it's an ongoing debate because there's no right or wrong answer. I think the ool thing to say is actually mobile first but I actually designed the desktop first because that's just how I roll basic number.
            </div>


                <div className="mt-3 col-12">
                    <strong>  Number Eight is </strong> Number Eight is web fonts versus system fonts.  Do you want that super duper trendy new tpography on your web li ke you shouldd have it but just keep in mind that every piece of thpography or font that oyu load up in you webite is gonna have to go out to a server and maek a request and come back and that's gonna slow down your load times. For the users who are browsing your site and so maybe consider a system fault because they don't have it on their system. It'll default to something else so finding the balance between those two is a basic thing to understand in responsive webiste.
            </div>

                <div className="mt-3 col-12">
                    <strong>  Number nine </strong>Number nine is understanding the difference between bitmap images and vector images. Bitmap images are contained information. If they're stretched up too much they start to look a little bit fuzzy or fi you have something that's really small on a Retina screen it's gonna look a little wonky so if you have that problem you can move over to vectors which is gonna be nice and clean. It's math something like an SVG but you've gotta balance how to use those. SVG's are great for simple graphics like logos and icons whereas an image really should be a mitmap because that's too much information to store in the SVG and so undestanding the difference how to balance therm and when to use them is a super-important basic foundatoin of responsive web design.
            </div>
                <div className="mt-3 col-12">
                    <strong>  Number ten </strong> Number ten and the final item on our list of foundational principles for a responsive web design was coined by Brad Frost and his famouse words were 'make it until you break it' which basically means make your webiste word as much as your possibly can wherever you can and then when it breaks maybe consider a break point or media query or a layour change or some kind of fix for it but you should try to make your layouts an your websites word as mush as you possibly can and as many different type of device sizes without having to intervene and create some soret of first aid scenario..
            </div>

                <div className="mt-3 col-12">
                    Well that's it. That's list of 10 foundational principles for responsive web desing. I hope you enjoyed this article
            </div>


            </div>
        </div>
    )
}

export default SingleBlog
