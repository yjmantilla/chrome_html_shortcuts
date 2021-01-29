chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
    },
    function (tabs){
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    console.log(tab.url);
    //alert(tab.url);}
    var template = `<html>
    <head>\
    <meta http-equiv="refresh" content="0; url=${tab.url}" />
    </head>
    <body>
    </body>
    </html>
    `
    var htmlString = "";
    var blob = new Blob([template], {type: "text/html"});
    var url = URL.createObjectURL(blob);
    chrome.downloads.download
    (
        {
        url: url, // The object URL can be used as download URL
        saveAs: true,
        filename: tab.title.replace(/\W/g, '_').concat('.html')
        }
    );
}
);

//icon: https://icon-icons.com/icon/cool-bitty-kitty-emoji-emoticon-emo-cat-pixel-retro/179051
