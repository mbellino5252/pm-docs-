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
                        <div class="contentdate">Posted on: ${new Date(post.contentdate).toLocaleDateString()}</div>
                        
                `

				mainContainer.appendChild(postElement)
			})
		})
		.catch((error) => {
			console.error("Error loading posts:", error)
		})
})
