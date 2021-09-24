
var projectBtn = document.getElementById("project");
var skillBtn = document.getElementById("skill");
var skillSet = document.querySelector(".skill-set");
var projects = document.querySelector(".projects");
projectBtn.addEventListener("click", function showProject() {
	skillSet.style = "display:none";
	projects.style = "display:grid";
	skillBtn.style = "border-bottom:none;";
	projectBtn.style = " border-bottom:3px solid rgb(173, 182, 215); font-weight:400;";
});
skillBtn.addEventListener("click", function showSkill() {
	skillSet.classList.add("animate__animated", "animate__zoomIn");
	skillSet.style = "display:block";
	projects.style = "display:none";
	skillBtn.style = " border-bottom:3px solid rgb(173, 182, 215); font-weight:400;";
	projectBtn.style = "";
});

const toggleNav = document.querySelectorAll(".ri-menu-3-fill")[0].addEventListener("click", openMenu);
var jesse = true;

function openMenu() {
	if (jesse) {
		var menuBar = document.querySelector(".menu-bar");
		$('.container_full').css({'overflow':'hidden'});
		menuBar.style.display = "flex";
		this.style.color = "white";
		this.className = "ri-close-line";
	} else {
		var menuBar = document.querySelector(".menu-bar");
		menuBar.style.display = "none";
		$('.container_full').css({'overflow':''});
	
			this.style.color = "black";
		this.className = "ri-menu-3-fill";
	}
	jesse = !jesse;
}

	var jamUp = document.querySelector(".playMusic");
	var flag = true;
	var myself = new Audio('Additives/myself.mp3');
	
	jamUp.addEventListener("click", function() {
		if (flag) {
			myself.play();
			document.querySelector('.jam-up i').className = `ri-pause-line`;
			
		} else {
			myself.pause();
			document.querySelector('.jam-up i').className = `ri-play-fill`
		}
		flag = !flag;
	})

