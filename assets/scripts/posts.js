let postindex=1;


// Fetch the JSON data and dynamically insert DOM elements for each item
document.addEventListener("DOMContentLoaded", () => {
	const mainContainer = document.querySelector(".main")

	fetch("/assets/data/posts.json")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch posts.json")
			}
			return response.json()
		})
		.then((posts) => {
			posts.forEach((post) => {
				const postElement = document.createElement("div")
				postElement.classList.add("post")

				postElement.innerHTML = `
                    <div class="contentbox">
                        <div class="contenttitle">${post.contenttitle}</div>
                        <div class="contentauthor">${post.contentauthor}</div>
                        <div class="contentbody">${post.contentbody}</div>
						<img class="postphoto" src="https://picsum.photos/600/?random=${postindex}" alt="Post Photo">
                        <div class="contentdate">Posted on: ${new Date(post.contentdate).toLocaleDateString()}</div>
                        
                `

				mainContainer.appendChild(postElement)
				postindex++;
			})
		})
		.catch((error) => {
			console.error("Error loading posts:", error)
		})
})
