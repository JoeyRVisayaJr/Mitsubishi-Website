/*This is js-script for product */


var searchSuggestions = [
	"Mirage G4",
    "Xpander",
    "Outlander",
    "L300",
	"Strada",
	"Montero"

];

  function openPopup(list) {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    var popups = document.querySelectorAll('.popup');
    popups.forEach(popup => popup.style.display = 'none');

    if (list === 'List 1') {
      document.getElementById('popupList1').style.display = 'block';
    } else if (list === 'List 2') {
      document.getElementById('popupList2').style.display = 'block';
    }
  }

  function closePopup() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }
	
function toggleSearchBar() {
    var searchBar = document.getElementById("searchBarContainer");
    var searchLogo = document.querySelector(".search-logo");
    var brandText = document.querySelector(".right-nav p");

    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
        searchLogo.style.display = "none";
        brandText.style.display = "none";
    } else {
        searchBar.style.display = "none";
        searchLogo.style.display = "block";
        brandText.style.display = "block";
    }
}

function hideSearchBar() {
    var searchBar = document.getElementById("searchBarContainer");
    var searchLogo = document.querySelector(".search-logo");
    var brandText = document.querySelector(".right-nav p");

    searchBar.style.display = "none";
    searchLogo.style.display = "block";
    brandText.style.display = "block";
}
	

var searchInput = document.querySelector('.search-bar');
var suggestionsList = document.getElementById('suggestions-list');

searchInput.addEventListener('input', handleInput);

function handleInput() {
    var input = searchInput.value.toLowerCase();
    var filteredSuggestions = searchSuggestions.filter(suggestion => suggestion.toLowerCase().includes(input));

    suggestionsList.style.display = input.length === 0 || filteredSuggestions.length === 0 ? 'none' : 'block';
    suggestionsList.innerHTML = filteredSuggestions.map(suggestion => '<span>' + suggestion + '</span>').join('');

    suggestionsList.querySelectorAll('span').forEach(function (suggestionElement) {
        suggestionElement.addEventListener('click', function () {
            searchInput.value = suggestionElement.textContent; 
        });
    });
}

function handleSearch(event) {
    var input = searchInput.value.toLowerCase();
    var productCards = document.querySelectorAll('.product-card');
    var promoCars = document.querySelectorAll('.promo-cars .item');
    var matchFound = false;

    if (input.trim() === '') {

        productCards.forEach(card => {
            card.style.display = 'block';
        });

        promoCars.forEach(car => {
            car.style.display = 'block';
        });

        suggestionsList.style.display = 'none';
        return; 
    }

    if (event.key === 'Enter') {
        productCards.forEach(card => {
            var cardText = card.textContent.toLowerCase();
            var displayValue = cardText.includes(input) ? 'block' : 'none';
            card.style.display = displayValue;

            if (cardText.includes(input) && !matchFound) {
                matchFound = true;
                card.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        });

        promoCars.forEach(car => {
            var carText = car.textContent.toLowerCase();
            var displayValue = carText.includes(input) ? 'block' : 'none';
            car.style.display = displayValue;

            if (carText.includes(input) && !matchFound) {
                matchFound = true;
                car.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        });

        suggestionsList.style.display = 'none';
    }
}

searchInput.addEventListener('input', handleSearch);
	
 $(document).ready(function () {
    $('.dropdown-icon').click(function () {
      $(this).siblings('.dropdown-content').toggle();
    });

    $(document).on('click', function (event) {
      if (!$(event.target).closest('.option-box').length && !$(event.target).hasClass('dropdown-icon')) {
        $('.dropdown-content').hide();
      }
    });

    $('.dropdown-content p').click(function () {
      var selectedText = $(this).text();
      var optionBox = $(this).closest('.option-box');
      var spanElement = optionBox.find('span');
      spanElement.text(selectedText);

      optionBox.find('.dropdown-content').hide();
    });
  });
  
    function toggleAccordion(header) {
        var content = header.nextElementSibling;
        content.classList.toggle("active");
            var accordionItem = header.closest('.accordion-item');


    accordionItem.classList.toggle('opened');

    accordionItem.classList.toggle("active");
        var icon = header.querySelector('.icon');
        icon.classList.toggle("fa-minus");
        icon.classList.toggle("fa-plus");
	}
	

$(document).ready(function () {
    if (window.innerWidth > 990) {
        $('.accordion-header').eq(0).click();
        $('.accordion-header').eq(2).click();
        $('.accordion-header').eq(-1).click();

        $('.toggleCheckbox').change(function () {
            toggleTextVisibility($(this));
        });

        $('.toggleCheckbox').each(function () {
            toggleTextVisibility($(this));
        });
    }
});


function toggleTextVisibility(checkbox) {
    var targetId = checkbox.data('target');
    var isChecked = checkbox.prop('checked');
    $('#' + targetId).toggle(isChecked);
}


function generateEmailLink() {
  var testDriveOption = $("#testDriveBox .dropdown-content p.selected").data("option");
  var vehicleTypeOption = $("#vehicleTypeBox .dropdown-content p.selected").data("option");
  var locationOption = $("#locationBox .dropdown-content p.selected").data("option");
  var dateOption = $("#dateBox #dynamicParagraph").text();

  var emailSubject = "I want to Inquire a Test Drive";
  var emailBody = "Hello! I am (Put your name here) I would like to schedule a test drive for the following:\n\n" +
                  "Car: " + testDriveOption + "\n" +
                  "Vehicle Type: " + vehicleTypeOption + "\n" +
                  "Location: " + locationOption + "\n" +
                  "Date: " + dateOption;

  var emailLink = "mailto:ryanbarreto@gmail.com?subject=" + encodeURIComponent(emailSubject) + "&body=" + encodeURIComponent(emailBody);

  window.location.href = emailLink;
}

$(document).ready(function() {
  $(".dropdown-content p").click(function() {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
  });
});

$(document).ready(function() {
  function updateDate() {
    var currentDate = new Date();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var formattedDate = months[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear();
    $("#dynamicParagraph").text(formattedDate);
  }

  updateDate();
});

    function showDiv() {
    document.getElementById("id-accordion").style.display = "flex";
	document.getElementById("hideDiv").style.display = "block";
	document.getElementById("showDiv").style.display = "none";
	document.getElementById("products").style.display = "none";
	document.getElementById("top-option").style.display = "none";
    }

    function hideDiv() {
      document.getElementById("id-accordion").style.display = "none";
	  document.getElementById("hideDiv").style.display = "none";
	  document.getElementById("showDiv").style.removeProperty("display");
	document.getElementById("products").style.removeProperty("display");
	document.getElementById("top-option").style.removeProperty("display");
    }

