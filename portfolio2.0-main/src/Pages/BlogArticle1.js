import React from 'react'

const SingleBlog = () => {
    return (
        <div className="container-fluid " >
            <div className="row mt-5">
                <h2 style={{ textAlign: 'center' }} className="my-4" >How Continous Integration can improve process of development?</h2>
            </div>
            <div className="row mt-3  d-flex justify-content-center ">
               
                    <img src="https://static.callstack.com/wp/2020/10/08161041/How-Continuous-Integration-CI-Can-Improve-Your-React-Native-Apps-700x368.jpg" alt="" />

               
              
            </div>
            <div className="row mt-3">
                
                <div className="mt-3">A lack of working Continuous Integration may seriously harm your apps on many different levels. It can slow down the development process, testing, and even can expose your final app to bugs and regressions that may decrease your income. In this article, I’ll show you how to avoid these unpleasant situations with Continuous Integration</div>
            

            <h4 className="mt-3">Issue: Lack of CI or having an unstable one means a longer feedback loop – you don’t know if your code works and you cooperate slowly with other developers.</h4>

            <div className="mt-3">
                What is equally important is how quickly you detect the potential regressions and whether finding them is a part of your daily development lifecycle. In other words – it all comes down to the feedback loop.

                
            </div>
            <div className="mt-3">
                For better context, let’s take a look at the early days of the development process. When you’re starting out, your focus is on shipping the first iteration (MVP) as fast as possible. Because of that, you may overlook the importance of the architecture itself. When you’re done with the changes, you submit them to the repository, letting other members of your team know that the feature is ready to be reviewed.
            </div>
                <div className="row p-3 my-5  d-flex justify-content-center">
                    <img
                      
                        style={{ background: 'rgba(255,255,255,0.6)' }}
                        src="https://static.callstack.com/wp/2020/10/08143331/An-example-of-workflow-on-Github-where-changes-are-proposed-in-a-form-of-a-PR-700x237.png" alt="" />
                    <p className="mt-3" style={{textAlign:'center'}}>An example of workflow on Github, where changes are proposed in a form of a PR.

</p>

            </div>
              
            </div>
                <h3>And why does this happen?</h3>
            <div>While this technique can be very useful, it is potentially dangerous on its own, especially as your team grows in size. Before you’re ready to accept a PR, you should not only examine the code but also clone it to your environment and test it thoroughly. At the very end of that process, it may turn out that the proposed changes introduce a regression that the original author hasn’t spotted.

            <div className="mt-3">
                    The reason for that is simple – we all have different configurations, environments, and ways of working
            </div>

                <div className="my-4">
                    While relying on the same configuration, similar principles of the development, and attention to details helps move faster at the early stages, it may result in shipping something that breaks the tests.
            </div>
                <h4 classname="my-5">
                    It’s harder to onboard new members to your organization. You can’t ship and test PRs and different contributions as they happen.
            </h4>
                <div className="mt-4">
                    If you’re testing your changes manually, you’re not only increasing the chances of shipping regressions to production. You’re also slowing down the overall pace of the development. Thankfully, with the right set of methodologies and a bit of automation, you can overcome this challenge once and for all.
            </div>
                <div className="mt-4">
                    This is when <strong>Continuous Integration (CI)</strong> comes into play. CI is a development practice where proposed changes are checked-in to the upstream repository several times a day by the development team. Next, they are verified by an automated build, allowing the team to detect changes early.
            </div>
                <div className="row d-flex justify-content-center">
                <img 
                    className="p-3 my-5 "
                src="https://static.callstack.com/wp/2020/10/08143555/works-for-me-700x351.png" alt=""/>
                </div>
                <div className="mt-4">
                    The automated builds are performed by a dedicated cloud-based CI provider that usually integrates with the place where you store your code. Most of the cloud providers available these days support Github, which is a Microsoft-owned platform for collaborating on projects that use git as their version control system.
            </div>

                <div className="mt-4">
                    Using a CI service, you can not only test your code but also build a new version of documentation for your project, build your app, and distribute it among testers or releases. This technique is called Continuous Deployment and focuses on the automation of releases.
            </div>
                <h3 className="mt-4">Solution: Use a CI provider (such as CircleCI) to build your application. Run all the required tests and make preview releases if possible.</h3>

                <div className="mt-4">
                    There are a lot of CI providers to choose from, with the most popular being CircleCI, Travis, and the recently released Github Actions. For the purposes of this section, we have selected the CircleCI.
            </div>
            <br/>

                <div className="mt-4">
                    With most of the CI providers, it is extremely important to study their configuration files before you do anything else.
            </div>

                <h3 className="mt-4">
                    Benefit of using a CI is simple: You get early feedback on added features, swiftly spot the regressions. Also, you don’t waste the time of other developers on testing the changes that don’t work.
            </h3>

                <div className="mt-4">
                    Using a CI service, you can not only test your code but also build a new version of documentation for your project, build your app, and distribute it among testers or releases. This technique is called Continuous Deployment and focuses on the automation of releases.
            </div>

                <h3 className="mt-5 py-3">
                   Summary
            </h3>
                <div className="mt-4">
                    To wrap everything up, Continuous Integration can help you and your app at many different levels. It can help you to avoid long feedback loops that slow down your development and testing process. Also, thanks to them you are able to spot any errors faster so you don’t waste time testing something that doesn’t work. All this allows you to provide your customers with a better product, which increases your chances of a higher income.
            </div>

</div>
        </div>
    )
}

export default SingleBlog
