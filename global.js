function set_default_search_category(categoryNumber) {
    var resultText;
    var resultValue;

    if (categoryNumber != undefined && categoryNumber.length > 3) {
        categoryNumber = categoryNumber.substring(0, categoryNumber.length - (categoryNumber.length - 3));
    }

    switch (categoryNumber) {
        case "001":
            resultText = "국내도서";
            break;
        case "002":
            resultText = "외국도서";
            break;
        case "003":
            resultText = "CD/LP";
            break;
        case "004":
            resultText = "DVD/BD";
            break;
        case "006":
            resultText = "문구/GIFT";
            break;
        case "009":
            resultText = "e러닝";
            break;
        case "017":
            resultText = "eBook";
            break;
        case "018":
            resultText = "중고샵";
            break;
        default:
            resultText = "통합검색";
            break;
    }
    set_search_category(resultText, resultValue);
}
