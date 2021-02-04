var projectIDs = [];
var slideIndices = [];

window.onload = function()
{
	var projects = document.getElementsByClassName("project")

	for (var i = 0; i < projects.length; ++i)
	{
		// fill out the arrays needed to perform the slideshow logic
		projectIDs[i] = "project" + i;
		slideIndices[i] = 0;

		// dynamically set up slideshow components so that the HTML code can be more modular and simple
		projects[i].id = projectIDs[i];

		var slides = projects[i].getElementsByClassName("slide");
		
		if (slides.length > 1)
		{
			// add arrows to slideshow
			var slideshowContainer = projects[i].getElementsByClassName("slideshow-container")[0];
			slideshowContainer.innerHTML += "<a class='prev' onclick='nextSlide(" + i + ", -1)'>&#10094;</a>";
			slideshowContainer.innerHTML += "<a class='next' onclick='nextSlide(" + i + ", 1)'>&#10095;</a>";

			// add dots under slideshow to allow users to change slides
			var dots = projects[i].getElementsByClassName("dots")[0];
			for (var j = 0; j < slides.length; ++j)
			{
				dots.innerHTML += "<span class='dot' onclick='changeSlide(" + i + ", " + j + ")'></span>"
			}
		}

		showSlides(i, slideIndices[i]);
	}
}


function nextSlide(slideshowIndex, increment)
{
	showSlides(slideshowIndex, slideIndices[slideshowIndex] + increment);
}

function changeSlide(slideshowIndex, newIndex)
{
	showSlides(slideshowIndex, newIndex);
}

function showSlides(slideshowIndex, slideIndex)
{
	var i;
	var slides = document.getElementById(projectIDs[slideshowIndex]).getElementsByClassName("slide");
	var dots = document.getElementById(projectIDs[slideshowIndex]).getElementsByClassName("dot");

	slideIndices[slideshowIndex] = slideIndex;
	if (slideIndex >= slides.length)
	{
		slideIndices[slideshowIndex] = 0;
	}
	else if (slideIndex < 0)
	{
		slideIndices[slideshowIndex] = slides.length - 1;
	}

	for (i = 0; i < dots.length; i++)
	{
		dots[i].className = dots[i].className.replace(" active", "");
		slides[i].style.display = "none";
	}

	slides[slideIndices[slideshowIndex]].style.display = "block";
	dots[slideIndices[slideshowIndex]].className += " active";
}