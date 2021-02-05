// stores each tag and the number of times it appears in the page
var tagCountMap = new Map();

window.addEventListener("load", initFilter);

function initFilter()
{
	var tagElements = document.getElementsByClassName("projectSkills");

	for (var i = 0; i < tagElements.length; ++i)
	{
		var tagStartIndex = tagElements[i].innerText.indexOf(":") + 2; // this will be the first character after the colon and space characters
		var tagText = tagElements[i].innerText.substring(tagStartIndex);
		var tags = tagText.split(", ");

		for (var j = 0; j < tags.length; ++j)
		{
			if (tagCountMap.has(tags[j]))
			{
				tagCountMap.set(tags[j], tagCountMap.get(tags[j]) + 1);
			}
			else
			{
				tagCountMap.set(tags[j], 1);
			}

			tagElements[i].className += " " + tags[j];
		}
	}

	var filterMenu = document.getElementById("filterMenu-content");
	for (let [key, value] of tagCountMap)
	{
		filterMenu.innerHTML += "<p onclick='filterTag(\"" + key + "\")'>" + key + " (" + value + ")</p>";
	}
}

function filterTag(tagToFilter)
{
	var projects = document.getElementsByClassName("project");
	for (var i = 0; i < projects.length; ++i)
	{
		if (projects[i].getElementsByClassName(tagToFilter).length == 0)
		{
			projects[i].style.display = "none";
		}
	}

	var filterResult = document.getElementById("filterResult");
	filterResult.innerHTML = "<span class='cross'>&#65368;</span>";
	filterResult.innerHTML += tagCountMap.get(tagToFilter) + " result(s) for <em>" + tagToFilter + "</em>";
	filterResult.style.display = "block";

	document.getElementById("filterMenu").style.display = "none";
}

function clearFilter()
{
	var projects = document.getElementsByClassName("project");
	for (var i = 0; i < projects.length; ++i)
	{
		projects[i].style.display = "flex";
	}

	document.getElementById("filterResult").style.display = "none";
	document.getElementById("filterMenu").style.display = "inline-block";
}