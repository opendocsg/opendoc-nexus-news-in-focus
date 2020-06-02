(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "README.md",
                title: "How to create a new Opendoc",
                url: "/opendoc-nexus-news-in-focus/readme",
                escapedPath: "README.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["",null,null]
            },
            
        
        
        {
                name: "index.md",
                title: "Index",
                url: "/opendoc-nexus-news-in-focus/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["",null,null]
            },
            
        {
                name: "main.md",
                title: "Main",
                url: "/opendoc-nexus-news-in-focus/issue_2_20/main.html",
                escapedPath: "issue_2_20/main.md",
                dir: "/issue_2_20/",
                tocId: "toc_/issue_2_20/",
                documentInfo: ["Issue 2/2020",null,["main.md"]]
            },
            
        {
                name: "main.md",
                title: "Main",
                url: "/opendoc-nexus-news-in-focus/issue_3_20/main.html",
                escapedPath: "issue_3_20/main.md",
                dir: "/issue_3_20/",
                tocId: "toc_/issue_3_20/",
                documentInfo: ["Issue 3/2020",null,["main.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()