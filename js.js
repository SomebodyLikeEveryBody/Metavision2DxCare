function deleteAll(pSubStr, pMainStr) {
    let retStr = pMainStr;

    while (retStr.indexOf(pSubStr) !== -1) {
        retStr = retStr.replace(pSubStr, '');
    }

    return retStr;
}

function translate(pInText) {
    const charCodes = [28];
    let retText = pInText;

    for (const charCode of charCodes) {
        retText = deleteAll(String.fromCharCode(charCode), retText);
    }

    return retText;
}

$(function () {
    let inTextEl = $('#in_text');
    let outTextEl = $('#out_text');
    let looperButtonEl = $('#copyrightLooper');

    inTextEl.focus(() => {
        inTextEl.select();
    });

    inTextEl.bind('input propertychange', () => {
        outTextEl.val(translate(inTextEl.val()));
    });

    inTextEl.focusout(() => {
        outTextEl.val(translate(inTextEl.val()));
    });

    outTextEl.focus(() => {
        outTextEl.select();
    });

    looperButtonEl.focus(() => {
        inTextEl.focus();
    });
});