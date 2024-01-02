/*This is js-script for homepage */

document.addEventListener('DOMContentLoaded', function () {
        var searchInput = document.querySelector('.search-bar');
        var suggestionsList = document.getElementById('suggestions-list');

        searchInput.addEventListener('input', function (event) {
            var searchTerm = searchInput.value.trim().toLowerCase();

            if (searchTerm !== '') {
                showSuggestions(searchTerm);
            } else {
                hideSuggestions();
            }
        });

        searchInput.addEventListener('focus', function () {
            var searchTerm = searchInput.value.trim().toLowerCase();
            if (searchTerm !== '') {
                showSuggestions(searchTerm);
            }
        });

        searchInput.addEventListener('blur', function () {
            hideSuggestions();
        });

        document.addEventListener('click', function (event) {
            if (!event.target.closest('.search-container')) {
                hideSuggestions();
            }
        });
    });

function showSuggestions(searchTerm) {
    var suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = '';

    var sections = ['Buy Outlander', 'Exclusive News', 'Get Started Now', 'Featured Cars', 'Social Media'];

    var matchingSections = sections.filter(function (section) {
        return section.toLowerCase().includes(searchTerm);
    });

    matchingSections.forEach(function (section) {
        var suggestionItem = document.createElement('div');
        suggestionItem.textContent = section;
        suggestionItem.className = 'suggestion-item';

        suggestionItem.addEventListener('mousedown', function () {
            document.querySelector('.search-bar').value = section;

            scrollToSection('section' + (sections.indexOf(section) + 1));
        });

        suggestionsList.appendChild(suggestionItem);
    });

    suggestionsList.style.display = 'block';
}


    function hideSuggestions() {
        document.getElementById('suggestions-list').style.display = 'none';
    }

    function searchSection() {
        var searchTerm = document.querySelector('.search-bar').value.trim().toLowerCase();
        if (event && event.key === 'Enter') {
            if (searchTerm === 'buy outlander') {
                scrollToSection('section1');
            } else if (searchTerm === 'exclusive news') {
                scrollToSection('section2');
            } else if (searchTerm === 'get started now') {
                scrollToSection('section3');
            } else if (searchTerm === 'featured cars') {
                scrollToSection('section4');
            } else if (searchTerm === 'social media') {
                scrollToSection('section5');
            }
        }
    }

   function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth' 
        });
    }
}