/*jslint browser: true, devel: true, indent: 4, maxerr: 1, maxlen: 85 */

var divs,
    paragraphs,
    index;

function printPositionStatus(i) {
    "use strict";

    paragraphs[0].innerHTML =
        "The first <code>&lt;div&gt;</code>’s position is <span>" +
        window.getComputedStyle(divs[0]).getPropertyValue("position") + "</span>";

    paragraphs[1].innerHTML =
        "The second <code>&lt;div&gt;</code>’s position is <span>" +
        window.getComputedStyle(divs[1]).getPropertyValue("position") + "</span>";

    paragraphs[2].innerHTML =
        "The third <code>&lt;div&gt;</code>’s position is <span>" +
        window.getComputedStyle(divs[2]).getPropertyValue("position") + "</span>";

    paragraphs[3].innerHTML =
        "The fourth <code>&lt;div&gt;</code>’s position is <span>" +
        window.getComputedStyle(divs[3]).getPropertyValue("position") + "</span>";

    paragraphs[i].getElementsByTagName("span")[0].id = "highlight";
}

function createSection() {
    "use strict";

    var section = document.createElement("section"),
        body = document.getElementsByTagName("body")[0],
        i;

    section.id = "msg";

    for (i = 0; i < 4; i += 1) {
        section.appendChild(document.createElement("p"));
    }

    body.appendChild(section);
}

window.onload = function () {
    "use strict";

    divs = document.getElementsByTagName("div");
    paragraphs = document.getElementsByTagName("p");
    index = 3;

    createSection();
    printPositionStatus(index);

    var x = setInterval(
        function () {
            divs[index].style.position = "absolute";
            var localIndex = index;

            printPositionStatus(localIndex);

            setTimeout(
                function () {
                    divs[localIndex].style.position = "static";
                    printPositionStatus(localIndex);
                },
                750
            );

            index -= 1;

            if (index === -1) {
                setTimeout(
                    function () {
                        clearInterval(x);
                    },
                    0
                );
            }
        },
        1500
    );
};
