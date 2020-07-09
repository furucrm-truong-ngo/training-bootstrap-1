var i, j, x, menuObj;
x = "";
menuObj = [
    {
        "href": "#",
        "text": "Category",
        "children": [
            {
                "href": "#",
                "text": "Mobile",
                "children": [
                    {
                        "href": "#",
                        "text": "Apple"
                    },
                    {
                        "href": "#",
                        "text": "Samsung"
                    },
                    {
                        "href": "#",
                        "text": "Oppo"
                    }
                ]
            },
            {
                "href": "#",
                "text": "Tablet"
            },
            {
                "href": "#",
                "text": "Laptop",
                "children": [
                    {
                        "href": "#",
                        "text": "13 inch",
                        "children": [
                            {
                                "href": "#",
                                "text": "Apple"
                            },
                            {
                                "href": "#",
                                "text": "Samsung"
                            },
                            {
                                "href": "#",
                                "text": "Asus"
                            }
                        ]
                    },
                    {
                        "href": "#",
                        "text": "15 inch"
                    }
                ]
            },
        ]
    },
    {
        "href": "#",
        "text": "Sites",
        "children": [
            {
                "href": "#",
                "text": "My Blog"
            },
            {
                "href": "#",
                "text": "GitHub"
            }
        ]
    },
    {
        "href": "#",
        "text": "Sites 2",
    }
];


function myMenu1() {
    for (i in menuObj) {
        if (!jQuery.isEmptyObject(menuObj[i].children)) {
            x += '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="' + menuObj[i].href + '" data-toggle="dropdown">' + menuObj[i].text + '</a>' + myMenu2(menuObj[i]) + '</li>';
        } else {
            x += '<li class="nav-item"><a class="nav-link" href="' + menuObj[i].href + '">' + menuObj[i].text + "</a></li>";
        }
        $("#test").html(x);
    }
};

function myMenu2(miniObj) {
    y = '<ul class="dropdown-menu">';
    for (j in miniObj.children) {
        if (!jQuery.isEmptyObject(miniObj.children[j].children)) {
            y += '<li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="' + miniObj.children[j].href + '">' + miniObj.children[j].text + '</a>' + myMenu2(miniObj.children[j]) + "</li>";
        } else {
            y += '<li><a class="dropdown-item" href="' + miniObj.children[j].href + '">' + miniObj.children[j].text + "</a></li>";
        }
    }
    y += "</ul>";
    return y;
}