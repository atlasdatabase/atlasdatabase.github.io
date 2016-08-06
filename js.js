var itemslang = {
    "en": {
        "translation": {
          "plutonium": "Plutonium",
        }
    },
        "br": {
        "translation": {
          "plutonium": "Plutônio",
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