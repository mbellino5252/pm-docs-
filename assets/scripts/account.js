document.addEventListener("DOMContentLoaded", () => {
    const profileContainer = document.querySelector("#profilecontainer");

    let user = JSON.parse(localStorage.getItem("userData"));
    if (!user) {
        fetch("/assets/data/user.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user.json");
                }
                return response.json();
            })
            .then((data) => {
                user = data;
                localStorage.setItem("userData", JSON.stringify(user));
                updateProfileUI(user);
            })
            .catch((error) => {
                console.error("Error loading profile:", error);
            });
    } else {
        updateProfileUI(user);
    }
});

const editContainer = document.querySelector("#profileeditcontainer");
const editForm = document.querySelector("#profileeditform");
const editBtn = document.querySelector("#editbutton");
const saveBtn = document.querySelector("#savebutton");

editBtn.addEventListener("click", function () {
    editContainer.style.display = "grid";
    editBtn.style.display = "none";

    const user = JSON.parse(localStorage.getItem("userData"));
    if (user) {
		editForm.querySelector("#username").value = user.username;
        editForm.querySelector("#firstname").value = user.fname;
        editForm.querySelector("#lastname").value = user.lname;
        editForm.querySelector("#skilllevel").value = user.skilllevel;
        editForm.querySelector("#bio").value = user.bio;
    }
});

saveBtn.addEventListener("click", function () {
    const updatedData = {
		username: editForm.querySelector("#username").value,
        fname: editForm.querySelector("#firstname").value,
        lname: editForm.querySelector("#lastname").value,
        skilllevel: editForm.querySelector("#skilllevel").value,
        bio: editForm.querySelector("#bio").value,
    };

    localStorage.setItem("userData", JSON.stringify(updatedData));

    updateProfileUI(updatedData);

    editContainer.style.display = "none";
    editBtn.style.display = "block";
});

function updateProfileUI(user) {
    const profileContainer = document.querySelector("#profilecontainer");
    profileContainer.querySelector(
        ".profileusername"
    ).innerHTML = `@${user.username}`;
    profileContainer.querySelector(
        ".profilename"
    ).innerHTML = `${user.fname} ${user.lname}`;
    profileContainer.querySelector(".profileskill").innerHTML = user.skilllevel;
    profileContainer.querySelector(".profilebio").innerHTML = user.bio;
}
