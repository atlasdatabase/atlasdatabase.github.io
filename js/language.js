var itemslang = {
    "en": {
        "translation": {
          "Language": "Language:",
          /* MENU */
          "Galaxies": "Galaxies",
          "Stars": "Stars",
          "Resources": "Resources",
          "Exosuit": "Exosuit",
          "Starship": "Starship",
          "Multitool": "Multitool",
          "Resources": "Resources",
        }
    },
        "br": {
        "translation": {
          "Language": "Idioma:",
          /* MENU */
          "Galaxies": "Galáxias",
          "Stars": "Estrelas",
          "Resources": "Recursos",
          "Exosuit": "Exotraje",
          "Starship": "Nave",
          "Multitool": "Multiferramenta",
          "Resources": "Recursos",
		}
	}
};

$(document).ready(function() {
	var language = "en";
	if (localStorage.getItem("language") != null)
		language = localStorage.getItem("language");
	
    i18n.init({
        lng: language,
        resStore: itemslang,
        fallbackLng: "en"
    }, function(o) {
        $(document).i18n()
    }), $(".lang").click(function() {
        var o = $(this).attr("data-lang");
		
		localStorage.setItem("language", o);
		
        i18n.init({
            lng: o
        }, function(o) {
            $(document).i18n()
        })
    })
});