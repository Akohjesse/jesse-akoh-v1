

const toggleNav = document.querySelectorAll(".ri-menu-3-fill")[0].addEventListener("click", openMenu);
var jesse = true;

function openMenu() {

		var menuBar = document.querySelector(".menu-bar");
		$('.container_full').css({'overflow':'hidden'});
		menuBar.style.display = "flex";

}

const closeNav = ()=>{
	var menuBar = document.querySelector(".menu-bar");
		menuBar.style.display = "none";
		$('.container_full').css({'overflow':''});
	
}