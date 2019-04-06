var myDatabase = [{
        id: 1,
        first_name: "Zulema",
        last_name: "Sykora",
        email: "zsykora0@ox.ac.uk",
        gender: "Female",
        country: "France"
    },
    {
        id: 2,
        first_name: "Mariam",
        last_name: "Weiser",
        email: "mweiser1@thetimes.co.uk",
        gender: "Female",
        country: "Luxembourg"
    },
    {
        id: 3,
        first_name: "Goddard",
        last_name: "Rowson",
        email: "growson2@ted.com",
        gender: "Male",
        country: "Philippines"
    },
    {
        id: 4,
        first_name: "Noach",
        last_name: "Kempe",
        email: "nkempe3@artisteer.com",
        gender: "Male",
        country: "Argentina"
    },
    {
        id: 5,
        first_name: "Sayre",
        last_name: "Thomas",
        email: "sthomas4@businessweek.com",
        gender: "Male",
        country: "United States"
    },
    {
        id: 6,
        first_name: "Keir",
        last_name: "Evered",
        email: "kevered5@phoca.cz",
        gender: "Male",
        country: "Kazakhstan"
    },
    {
        id: 7,
        first_name: "Joly",
        last_name: "Simononsky",
        email: "jsimononsky6@hibu.com",
        gender: "Female",
        country: "Sweden"
    },
    {
        id: 8,
        first_name: "Sandye",
        last_name: "Clarae",
        email: "sclarae7@usda.gov",
        gender: "Female",
        country: "Indonesia"
    },
    {
        id: 9,
        first_name: "Nicolette",
        last_name: "Dorricott",
        email: "ndorricott8@example.com",
        gender: "Female",
        country: "Brazil"
    },
];

(function Avatars(db) {
    var init = function () {
        generateList();
        enterUser();
    }

    var generateList = function () {
        var parent = document.querySelector("#parent_avatars");
        var template = "";

        for (var i = 0; i < db.length; i++) {
            template += '<div class="col-sm-4">';
            template += '<div class="card">';
            template += '<div class="card-delete" data-card="' + [i] + '">X</div>';
            template += '<div class="card-block">';
            template += '<h3 class="card-title">' + db[i].first_name + " " + db[i].last_name + "</h3>";
            template += '<p class="card-text">';
            template += "<strong > Email </strong>:<span>" + db[i].email + "</span>";
            template += "</p>";
            template += '<p class="card-text">';
            template += "<strong>Gender</strong>:<span>" + db[i].gender + "</span>";
            template += "</p>";
            template += '<p class="card-text">';
            template += "<strong>Country</strong>:<span>" + db[i].country + "</span>";
            template += "</p>";
            template += "</div>";
            template += "</div>";
            template += "</div>";
        }
        parent.innerHTML = "";
        parent.insertAdjacentHTML("afterbegin", template);
    }

    var enterUser = function () {
        function grabUser() {
            var name = document.querySelector("#user_name").value;
            var mail = document.querySelector("#user_email").value;
            var age = document.querySelector("#user_age").value;

            var elements = [name, mail, age];

            if (validateUser(elements)) {
                document.querySelector('#myForm').reset();
                db.push({
                    name: name,
                    mail: mail,
                    age: age,
                })
                generateList();
            } else {
                document.querySelector("#error").style.display = "block";
                setTimeout(function () {
                    document.querySelector("#error").style.display = "none";
                }, 1500)
            }
        }

        document.querySelector("#myForm").addEventListener("submit", function (event) {
            event.preventDefault();
            grabUser();
        });
    }

    var validateUser = function (elements) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] === "") {
                return false;
            }
        }
        return true;
    }

    init();
})(myDatabase);