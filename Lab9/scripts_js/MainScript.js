(function (global) {

    var ns = {}; 

    var homeHtml = "snippets/Home.html";
    var allCategoriesUrl = "jsons/Main_catalog.json";
    var categoriesTitleHtml = "snippets/Title.html";
    var categoryHtml = "snippets/Item.html";

    var catalogItemsUrl = "jsons/categories/";
    var catalogItemsTitleHtml = "snippets/Title_Prod.html";
    var catalogItemHtml = "snippets/Item_Prod.html";

    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    var showLoading = function (selector) {
        var html = "<div>";
        html += "<img src='images/Loading.gif' alt='loading' ></div";
        insertHtml(selector, html);
    };

    var insertProperty = function (string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    };


    document.addEventListener("DOMContentLoaded", function (event) {
        showLoading("#Home");
        $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
            document.querySelector("#Home").innerHTML = responseText;
        }, false);

    });

    ns.loadCatalogCategories = function () {
        showLoading("#Home");

        $ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);
    };

    ns.loadHome = function () {
        showLoading("#Home"); 
        $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {

            switchHomeToActive();

            document.querySelector("#Home").innerHTML = responseText;
        }, false); 
    };

    function buildAndShowCategoriesHTML(categories) {
        $ajaxUtils.sendGetRequest(categoriesTitleHtml, function (categoriesTitleHtml) {
            $ajaxUtils.sendGetRequest(categoryHtml, function (categoryHTML) {

                switchCatalogToActive();

                var categoriesViewHtml = buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHTML);
                insertHtml("#Home", categoriesViewHtml); 
            }, false);
        }, false);
    }

    function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml) {

        var finalHTML = categoriesTitleHtml;
        finalHTML += "<section class='container3'>";

        for (var i = 0; i < categories.length; i++) {
            var html = categoryHtml;
            var name = "" + categories[i].name;
            var short_name = categories[i].short_name;
            html = insertProperty(html, "name", name);
            html = insertProperty(html, "short_name", short_name);
            finalHTML += html;
        }

        finalHTML += "</section>";
        finalHTML += "</div>";
        return finalHTML;
    }

    ns.loadCatalogItems = function (categoryShort) {
        showLoading("#Home");
        $ajaxUtils.sendGetRequest(catalogItemsUrl + categoryShort + ".json", buildAndShowCatalogItemsHTML);
    };

    function buildAndShowCatalogItemsHTML(categoryCatalogItems) {
        $ajaxUtils.sendGetRequest(catalogItemsTitleHtml, function (catalogItemTitleHtml) {
            $ajaxUtils.sendGetRequest(catalogItemHtml, function (catalogItemHtml) {

                switchCatalogToActive();

                var catalogItemsViewHtml = buildCatalogItemsViewHtml(categoryCatalogItems, catalogItemTitleHtml, catalogItemHtml);
                insertHtml("#Home", catalogItemsViewHtml);
            }, false);
        }, false);
    }

    function buildCatalogItemsViewHtml(categoryCatalogItems, catalogItemsTitleHtml, catalogItemHtml) {

        catalogItemsTitleHtml = insertProperty(catalogItemsTitleHtml, "name", categoryCatalogItems.category.name);

        catalogItemsTitleHtml = insertProperty(catalogItemsTitleHtml, "special_instructions", categoryCatalogItems.category.special_instructions);

        var finalHtml = catalogItemsTitleHtml;

        finalHtml += "<div class='container3'>"; 
        finalHtml += "<section class='container3'>";

        var catalogItems = categoryCatalogItems.catalog_items;
        var catShort_name = categoryCatalogItems.category.short_name;
        for (var i = 0; i < catalogItems.length; i++) {
            var html = catalogItemHtml;

            html = insertProperty(html, "short_name", catalogItems[i].short_name);

            html = insertProperty(html, "catShort_name", catShort_name);

            html = insertItemPrice(html, "price_retail", catalogItems[i].price_retail);

            html = insertItemAmount(html, "amount_retail", catalogItems[i].amount_retail);

            html = insertItemPrice(html, "price_wholesale", catalogItems[i].price_wholesale);

            html = insertItemAmount(html, "amount_wholesale", catalogItems[i].amount_wholesale);

            html = insertProperty(html, "name", catalogItems[i].name);

            html = insertProperty(html, "description", catalogItems[i].description);

            finalHtml += html;
        }

        finalHtml += "</section>";
        finalHtml += "</div>";
        return finalHtml;
    }

    function insertItemPrice(html, pricePropName, priceValue) {
        if (!priceValue) {
            return insertProperty(html, pricePropName, "");
        }
        priceValue = "$" + priceValue.toFixed(2);
        html = insertProperty(html, pricePropName, priceValue);
        return html;
    }

    function insertItemAmount(html, amountPropName, amountValue) {
        if (!amountValue) {
            return insertProperty(html, amountPropName, "");
        }
        amountValue = "(" + amountValue + ")";
        html = insertProperty(html, amountPropName, amountValue);
        return html;
    }

    var switchCatalogToActive = function () {
        var classes = document.querySelector("#Nav__LinkHome").className;
        classes = classes.replace(new RegExp("active", "g"), "");
        document.querySelector("#Nav__LinkHome").className = classes;

        classes = document.querySelector("#Nav__LinkCategory").className;
        if (classes.indexOf("active") === -1) {
            classes += " active";
            document.querySelector("#Nav__LinkCategory").className = classes;
        }
    };

    var switchHomeToActive = function () {
        var classes = document.querySelector("#Nav__LinkCategory").className;
        classes = classes.replace(new RegExp("active", "g"), "");
        document.querySelector("#Nav__LinkCategory").className = classes;

        classes = document.querySelector("#Nav__LinkHome").className;
        if (classes.indexOf("active") === -1) {
            classes += " active";
            document.querySelector("#Nav__LinkHome").className = classes;
        }
    };

    ns.loadSpecials = function (categoryShort) {
        showLoading("#Home");
        var randomCategoriesJSON = ["A", "B", "C", "D"].find((_, i, ar) => Math.random() < 1 / (ar.length - i));//ES6
        $ajaxUtils.sendGetRequest(catalogItemsUrl + randomCategoriesJSON + ".json", buildAndShowCatalogItemsHTML);
    };

    global.$ns = ns;

}
)(window);