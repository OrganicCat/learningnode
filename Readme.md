This is my learning framework for starting Node. I played around with it creating the tutorial items a while back, now I'm taking the next step and manipulating those into my own project, learning as I go.

My first step was to follow the Node Beginner's guide, a very worthwhile e-book to get a grasp of how node worked. Understanding node was both a server and language was pretty simple. Parsing requests and feeding specific responses back was not enjoyable however. I shortly moved to using express.js which does most of the request/response basics.

I used a tutorial to build a file uploader, but I didn't find that it was very useful in actually teaching me the process, so I began to make heavy modifications and build my own system so that I would come across my own errors and be forced to solve them. Getting responses and passing them back was pretty easy, so I expanded upon the basic idea and implemented redis, which is where some new problems came in.

I'm familar with ORM databases, and hash keys, but the idea of a strictly hash key storage was pretty new to me (still is). I ran into some early problems of starting too large and not understanding some of the command structure. I was using hmset instead of hset for mobs.js which needs to be refactored. I did learn from it while implementing player.js though.

Another issue I ran into was how to return data when everything in Node.js was in an asynchronous state. My first idea was to chain callbacks or use javascript promises. I knew chaining callbacks was probably a bad idea, and I'm not super familar with promises, but I thought it could get it done. However async.js has all the implementations of promises built in, with more functions added on top like returning results as arrays or objects.

That's where I leave off currently, refactoring mob.js to use proper redis set commands, and configuring async to pass back results as needed.

My next step is to implement some back and forth functionality, allowing the user to select a mob, perform some functions to fight the mob, and then return results. After the basics of that are down, implementing a user login system is next on the list, which I'm leaning towards a global login using Twitter/Google.