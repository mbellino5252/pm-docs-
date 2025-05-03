How did you interpret and implement someone else’s idea?

    Seeing that SkiBuddy is essentially a social media platform, I used the classic 'feed' format of social media as the structure of the site. I had to trim down on some of the features as the project was pretty expansive, but I think every page has a unique feature that addresses one or more of the assignment requirements. From there I tried to create a kind of 'modular' format. I set up the feed structure that was able to use across all 3 content pages, and then was able to customize the content elements within that structure for each page. The account page also technically uses the feed structure but it only displays one 'content item'. 

What were the challenges in development and collaboration?

    I think the most challenging part of development was the account page. It has user data read from a json file in the repo, but also wanted to be able to update it with a form. I opted to use local storage for that since as far as I'm aware it would not be possible to update the json file without some kind of server infrastructure. Once the user edits their profile, it saves their data to local storage, and when loading their account in the future, it checks to see if they have profile data saved (if not it imports from the json template). It also involved showing/hiding elements and lots of eventListeners.

Which parts did you use AI tools for, and what did you learn from that?

    I mostly used AI (github copilot) to assist in filling in knowledge gaps when it came to interacting with json data and local storage. I learned about the .then function, and learned some more about local storage access. 