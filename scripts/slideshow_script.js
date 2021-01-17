var projectIDs = ["project1", "project2", "project3", "project4"];
var slideIndices = [1, 1, 1, 1]

window.onload = function()
{
	for (var i = 0; i < slideIndices.length; i++)
	{
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
	if (slideIndex > slides.length)
	{
		slideIndices[slideshowIndex] = 1;
	}
	else if (slideIndex < 1)
	{
		slideIndices[slideshowIndex] = slides.length;
	}

	for (i = 0; i < dots.length; i++)
	{
		dots[i].className = dots[i].className.replace(" active", "");
		slides[i].style.display = "none";
	}

	slides[slideIndices[slideshowIndex] - 1].style.display = "block";
	dots[slideIndices[slideshowIndex] - 1].className += " active";
}