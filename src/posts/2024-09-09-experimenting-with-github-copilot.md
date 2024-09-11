I recently began building out [a new personal site](https://corwinharrell.com/) to showcase some of my recent work. While portfolio redesigns can sometimes be a dreaded part of the product designer’s journey, I found that in my particular case, the timing gave me a great excuse to experiment with some of the recent AI tech that has taken the world by storm, and to better understand their place within my own workflow.

At this point, many people are familiar with AI experiences like ChatGPT, Perplexity or Midjourney. It’s fascinating to witness how rapidly these tools are being developed and to think about the implications for the spread of information and the ability for people to exercise their creativity where they may have previously been more limited.

What has been most exciting for me is thinking about how editor-based tools like [Anysphere’s Cursor](https://www.cursor.com/) or [Github’s Copilot](https://github.com/features/copilot?OCID=AIDcmmb150vbv1_SEM__k_EAIaIQobChMI087605y5iAMV9CjUAR1zDQpcEAAYASAAEgJPmfD_BwE_k_) might augment the skillsets of those interested in creating software who may not _specialize_ in development, but are competent prototypers and are comfortable working in a code-based environment. I place myself firmly in this category: although I’ve contributed front-end code to various production codebases over the last decade and know enough to be dangerous, I certainly don’t consider myself an expert software developer. Having now experimented with Github Copilot as my AI pair-programming buddy, I can confidently say that for designers like me, tools like Copilot open up a whole new avenue for bringing ideas to fruition. Ideas that may have otherwise stayed stuck in our heads or on our screens in the form of static mockups or clickable prototypes can now be realized much more easily within the medium for which they were intended.

## Show & Tell

I want to share some of the ways that I’ve found Copilot to be a huge augmentation to my design and development workflow, some things I’ve observed during my experience, as well as some of the opportunities I see for improving the experience for people who, like me, boast a more generalized technical skillset.

To do this, I’ve used Copilot inside VSCode to implement a new portion of my personal site: a blog. The first post for this new blog will be this one, so if you’re reading this, you know it works! (I’ve also used Copilot all throughout my time building this site with a similar approach.) Hopefully this inspires those that feel limited in their ability to implement their ideas in code to test the waters. I’m certain that those that do will quickly realize that even in their current state, these tools grant superpowers that can significantly narrow the gap between idea and implementation.

_You may ask, why Github Copilot instead of Cursor or Claude? The answer is that I’m already comfortable in VSCode, so before trying out other tools like Cursor, etc., I’m experimenting with what is already available to me in my most familiar environment._

## Idea → Prompt → Prototype

I haven’t spent a huge amount of time learning the best-practices of prompt engineering, but like any software project, it’s always best to set the context so that everyone involved understands the primary goals and constraints. For this project, I began by providing Copilot with a summary of what I want to build via the VSCode chat extension, including some considerations and preferences that it should take into account. It had been a while since I’d built a blog, and in the past I’ve relied on static site generators like Middleman or Jekyll, so I was particularly interested in the approach it would recommend and how easy it would be to get a first version together:

![My initial prompt](../images/posts/blog-prompt.png)

I’ve been pleasantly surprised with the kinds of responses I’ve gotten from Copilot. Not only do they adhere very well to my prompts, but the structure of the responses is also super digestible and well-formatted. They often include:

1. **A summary** of the solution or recommended approach.
2. **Instructions** on installing necessary dependencies.
3. **Steps to implement** the functionality you’ve described.
4. **Contextual examples** for each step demonstrating changes in the context of relevant files and your codebase (more on this later).
5. **A summary and/or explanation** of the approach and core concepts.

![The initial prompt response](../images/posts/prompt-response.png)

After receiving Copilot’s response, my initial task is to review it to check a few boxes:

1. Is it roughly what I’d expect?
2. Does the solution seem straightforward or overly complex?
3. Does it correctly take into account the structure of my repository and things like relative paths to different files and assets?
4. Does the solution it recommends use any programming concepts or approaches for which I am unfamiliar?

Depending on how it meets these criteria, I may follow up by asking Copilot to explain different parts of the solution or to give me a TLDR of any core concepts with which I might not be familiar. I may also request it to take a different approach if I have one in mind, or to implement a particular piece of code in a way that is more modular, DRY, etc. I’ve found that for the majority of my needs so far (none of which have been all that complex), it has met and exceeded my expectations and propelled me forward _much_ faster than if I had been left to my own devices to scour the web for similar direction.

It doesn’t take much time to implement the changes Copilot recommends: 2-3 min in the case of the core functionality for this blog, all without the need to install but a single package to handle Markdown formatting. And just like that, I’m off to the races authoring, styling, and previewing my new blog in my local environment, with all of the configuration necessary for pulling content from my markdown and json files to generate my posts and their metadata in a nice new template.

![Authoring and styling my post](../images/posts/post-authoring.png)

In minutes, I’ve reached a point where I can focus on the meat of the work, and the things I enjoy: designing the blog itself and writing content for it. What would have taken me hours to learn or re-learn how to build from scratch (since I don’t do this type of work with regularity) took me minutes instead, and put me out in front of the frustration and sideways back and forth that I would have inevitably found myself experiencing had I needed to rely solely on google, official docs, and stack overflow.

## Development Efficiency & Rhythm

Following my initial project setup and after establishing a basic scaffold, I quickly fell into a very natural rhythm for developing the project further that looked something like this:

1. **Prompt Copilot with a description of a part of my project I wanted to implement, either by describing the design characteristics or behavior of a component I had in mind, or by describing a specific implementation approach.** This would often act as a “gut-check” to confirm that what I _thought_ was a good starting point was on the right track. Sometimes I’d copy-paste a template or code snippet as-is, but usually ended up making a couple minor modifications.

2. **Tinker with the generated code and adapt it to my needs to reach a functional first-version.** This is where my prior development experience was essential for effectively leveraging the suggestions that Copilot would provide. Without this, I’d be blindly copying and pasting code without sufficient foresight for how the implementation might scale or affect other components of the project as it evolved. That being said, I think that a baseline knowledge of HTML, CSS, and basic JS/React go a long way towards being able to modify the values and structure of snippets generated by Copilot to achieve functional results. This grants you a sense of momentum that you can build upon as you refine and refactor your work over time and as your abilities improve.

3. **Spend some time styling, refining, and adding visual and functional polish to my new feature / component.**

4. **Encounter an error? Prompt Copilot by simply pasting the error message into the chat interface.** This was often enough context for Copilot to recognize one or more possible causes of the error, and to suggest potential solutions to try. More often then not, the first solution worked in the way that I would have hoped, and also gave me a better understanding of its origin. This made me giddy. I can’t begin to articulate the frustration I’ve experienced in the past trying to debug code on my own or even with an engineering colleague as a pair-programmer. Undoubtedly, this has everything to do with Copilot’s ability to consider errors in context (See next section).

5. **Have a question about a piece of code or concept that I was unfamiliar with? Prompt Copilot to explain the behavior or concept, or to provide additional documentation so I could develop a more sufficient understanding using a more robust resource.**

6. **Finished implementing a new component or piece of functionality? Prompt Copilot for feedback or suggestions for how to optimize or refactor the code.**

7. **Rinse and Repeat.**

Here’s a fun little example of how I began with the implementation of the reading time estimate you see in the header of this post (eg “12 min read”):

![Example: Implementing a reading time estimate](../images/posts/reading-time.png)

What I notice immediately about this rhythm is that it is undoubtedly representative of one of the most common user/developer journeys that _every_ developer implementing something in code traverses, albeit via a path much less rocky or dependent on their ability to know where to look for help when they inevitably require it. Until now, this journey was often scattered and entirely reliant on the developer’s ability to either recall or manually unearth the right solutions from the right sources, and with little to no awareness of similar solutions from other developers of other projects.

Now with tools like GitHub CoPilot, AI removes friction at each and every stage of this journey, eliminating a huge amount of the tedium of searching for answers to questions, solutions to problems, relevant examples, and essential documentation.

## The Importance of Context

Even more critical than having everything at my fingertips is that everything these tools put there is, by default, sensitive to the context and needs of my particular project without any effort required on my part.

Without me having to describe the project’s structure or the different variables that may contribute to unexpected behavior, Copilot takes it into account when responding to my queries. Unless a human pair-programmer is intimately familiar with the same parts of the codebase as I am, it’s likely they’d need to put some serious effort into establishing even a fraction of the same context to be as effective and to provide as much support as Copilot gives me out of the box.

This context also extends _beyond_ my project. When I’d run into errors, Copilot not only had the context of my project, but also the context of all the instances in all the other projects it has observed on the web where it may have encountered something similar. It also has all the context around each and every dependency and their version histories, and takes into account their compatibility within my project.

## Learning Superpowers

Over the course of building my project, I found myself experiencing several “aha” moments related to this new AI-supported development workflow that I hadn’t initially anticipated, specifically related to how most people learn to code.

As most developers will tell anyone seeking to learn to code, the best way is to learn by building stuff. There is a difference though between learning by building something from a tutorial, and building something from your own imagination where you are intrinsically motivated to solve a problem that you care about, and spending time wrestling with the tools to eventually land on a solution. While I’d argue that the latter is much more effective in helping to cement new programming concepts and approaches to problems, the challenge is that without the “guidance” provided by tutorial or example-driven learning, less experienced developers are sort of left to figure things out on their own, especially if their project doesn’t closely mirror something that already exists that can be used as reference.

What is incredible about tools like Copilot are that they are naturally inclined to “teach” you about the subjects of your queries as you interact with them. If you want Copilot to elaborate on a particular concept, break it down in simpler terms, give multiple examples, or take into account specific constraints, it’s as simple as asking it to. All of a sudden, we have the ability to generate context-sensitive educational material made specifically for us and that pertains to the exact thing that we are trying to build in real time! This means fewer distractions from things that are tangential or irrelevant to our specific problem, and less time spent trying to draw parallels between arbitrary examples and the thing we are trying to build.

![Example: Reading time implementation explanation](../images/posts/explanation.png)

Ultimately, what this does is diminish a lot of the intimidating feelings we experience when trying to build things for which we lack all the necessary know-how. Suddenly, “figuring it out” seems more exciting than scary, since I know I have a form of support that is far less limited in its ability to give me exactly what I need when I need it, and to offer me a multitude of pathways to expand my knowledge and coding repertoire with each prompt. All I need is some idea of what I want to achieve, and I can trust that my AI pair-programmer can help me find my way with far less difficulty than I would have had to endure without them. How cool is that?

## My Wishlist

While the bulk of my initial experience using Copilot has been incredibly positive, there are a number of things I’m excited to see added or improved upon. Some of these things may be present to some degree, but I may not have encountered them yet in my limited time with it, so keep that in mind and feel free to let me know what I may have missed. I also realize that Copilot isn’t limited to the VSCode chat extension, and there are a whole host of features that span the Github platform that I haven’t yet had the pleasure of experiencing.

1. **Inline vs Chat Context:** My experience so far has mostly been with Copilot in the context of the VSCode chat extension. But, I also made an effort to use the inline code functions in attempts to fix errors, reformat code selections, or prompt around smaller chunks of code. Using Copilot inline didn’t feel nearly as intuitive as I would have hoped, and I often felt like it would generate responses or diffs that didn’t meet my expectations or weren’t as close to what I was hoping to achieve.

2. **Larger Edits / Multi-file edits:** Sometimes Copilot would recommend that I make a change to a piece of code that was “connected” to other files or components elsewhere in my codebase. I’d love to be able to direct copilot to make these changes across the board, so I didn’t feel like I was just as reliant on Find and Replace as I always have been, or like I was at risk of missing a connection point when making sweeping changes, resulting in broken code.

3. **Auto-suggest changes elsewhere in your codebase:** Similarly to #2, I’d love if Copilot would recognize when a change in my approach to implementing something in one place resembled code elsewhere, and would suggest I revisit other parts of my project to make updates or refactors to bring everything in line with a similar approach.

4. **Navigating the chat thread / recalling previous questions and answers:** As my chat thread within the Copilot extension has grown with my project, there were many times where I found myself recalling a previous exchange that I wanted to reference, and had difficulty finding what I was looking for. Just like when you try to find an old message in a group chat with your friends, the ways in which you can recall information in a Chat-based UI are limited and don’t lend themselves to navigating a long history. I’d love to see this developed further into some kind of way to manage my past Copilot chats, find relevant prompts or solutions, and save things I find useful or important so I can come back to them long after I’ve moved on from solving a particular problem.

5. **“Perplexity-like” sources:** Sometimes, I want to know more about how Copilot derived a solution. Is it the only solution? What are the alternatives? What are the pros and cons? What sources were referenced in order to derive a particular solution? I’d love a way to go deeper into Copilots logic and reasoning to understand some of these things and build trust that what it’s giving me is what is best.

6. **Agent commands:** I'm sure that to some extent, the prevalence of agents within AI tooling will grow quite quickly, although I'm sure we can't underestimate the complexity of their implementation. Ideally, once I've prompted Copilot with something I'd like to achieve and have reviewed the proposed changes, I could instruct a Copilot agent to go and make those changes on my behalf. To some extent this is possible when making small changes to code inline, where Copilot displays a diff which can then be "Accepted", but I'm curious to see this evolve and be extended as tools like this mature.

## Final Thoughts

Even after a few humble experiments, I can’t see myself building anything new without leveraging these tools moving forward. The myriad of ways that they augment the experience of prototyping and building software exceed anything I could have anticipated even in these early days, and the sentiment from around the design and development community echoes this. For people like me who don’t consider themselves “experts” in software development but who know enough to be dangerous, I think its a no-brainer to start considering their place in our design/prototyping/development workflows. I imagine that in the very near future, we’ll witness the barrier to entry for creating software slowly dissolve as AI tooling takes on more and more of the tedium of engineering, and more people like myself assume the role of designer and architect. It’s exciting to think about all the potential and even more exciting to behold.

I hope this perspective has been insightful and has maybe even inspired a few to experiment on their own! As I continue to dabble myself, I’m looking forward to spending more time with some of the other AI tools like Cursor, Claude, v0 and more, all of which seem to be generating a lot of buzz for many of the same reasons I’ve highlighted in this post.

_If there is any interest in seeing the final output of some of these experiments, the code for this site and blog are public and [hosted on Github](https://github.com/heycorwin/portfolio)_
