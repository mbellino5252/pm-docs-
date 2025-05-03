document.addEventListener("DOMContentLoaded", () => {
	const profileContainer = document.querySelector("#profilecontainer");

	fetch("/assets/data/user.json")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Failed to fetch user.json");
			}
			return response.json();
		})
		.then((user) => {
			profileContainer.querySelector(
				".profileusername"
			).innerHTML = `@${user.username}`;
			profileContainer.querySelector(
				".profilename"
			).innerHTML = `${user.fname} ${user.lname}`;
			profileContainer.querySelector(".profileskill").innerHTML =
				user.skilllevel;
			profileContainer.querySelector(".profilebio").innerHTML = user.bio;
		})
		.catch((error) => {
			console.error("Error loading profile:", error);
		});
});

const editContainer = document.querySelector("#profileeditcontainer");
const editForm = document.querySelector("#profileeditform");
const editBtn = document.querySelector("#editbutton");
const saveBtn = document.querySelector("#savebutton");

editBtn.addEventListener("click", function () {
	editContainer.style.display = "grid";
	editBtn.style.display = "none";
});

saveBtn.addEventListener("click", function () {
	editContainer.style.display = "none";
	editBtn.style.display = "block";
	// save edited profile data to user.json
});
