let reviewindex = 1;

document.addEventListener("DOMContentLoaded", () => {
	const mainContainer = document.querySelector(".reviews");

	fetch("/assets/data/gear.json")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch gear.json");
			}
			return response.json();
		})
		.then((reviews) => {
			reviews.forEach((review) => {
				const reviewElement = document.createElement("div");
				reviewElement.classList.add("review");

				reviewElement.innerHTML = `
                    <div class="reviewbox">
                        <div class="reviewtitle">${review.reviewtitle}</div>
                        <div class="reviewauthor">${review.reviewer}</div>
                        <div class="reviewcontent">
                        <div class="photo-container">
                            <img class="reviewphoto" src="https://picsum.photos/200/?random=${reviewindex}" alt="Review Photo">
                            <div class="rating-bubble">${review.rating}</div>
                        </div>
                        <div class="reviewbody hidden">${review.reviewbody}</div>
                        </div>
                    </div>
                `;

				// Add click event listener to toggle expansion
				reviewElement.addEventListener("click", () => {
					reviewElement.classList.toggle("expanded");
					const reviewBody = reviewElement.querySelector(".reviewbody");
					reviewBody.classList.toggle("hidden");
				});

				mainContainer.appendChild(reviewElement);
				reviewindex++;
			});
		})
		.catch((error) => {
			console.error("Error loading reviews:", error);
		});
});
