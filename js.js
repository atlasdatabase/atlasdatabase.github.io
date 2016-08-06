https://atlasdatabase.github.io/img/plutonium.png

var itemslang = {
    "en": {
        "translation": {
          "plutonium": "Plutonium",
          "carbon": "Carbon",
          "heridium": "Heridium",
          "iron": "Iron",
          
          "isotope-commom": "Isotope Element - Commom",
          "isotope-rare": "Isotope Element - Rare",
          "silicate-common": "Silicate Element - Common",
          "oxide-common": "Oxide Element - Common",
          
        }
    },
        "br": {
        "translation": {
          "plutonium": "Plut�nio",
          "carbon": "Carbono",
          "heridium": "Heridium",
          "iron": "Ferro",
          
          "isotope-commom": "Elemento Is�topo - Comum",
          "isotope-rare": "Elemento Is�topo - Raro",
          "silicate-common": "Elemento Silicato - Comum",
          "oxide-common": "Elemento �xido - Comum",
          
		}
	}
};

$(document).ready(function () {
    i18n.init({
        "lng": 'en',
        "resStore": itemslang,
        "fallbackLng" : 'en'
    }, function (t) {
        $(document).i18n();
    });

    $('.lang').click(function () {
        var lang = $(this).attr('data-lang');
        i18n.init({
            lng: lang
        }, function (t) {
            $(document).i18n();
        });
    });
});