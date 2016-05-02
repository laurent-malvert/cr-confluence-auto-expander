# Confluence Auto-Expander for Chrom{e,ium}

`cr-confluence-auto-expander` is a simple Chrom{e,ium} extension
that will automatically expand any collapsed panels on any Confluence
wiki page you visit.

This is mostly handy if you often need to do a text search on wiki pages
that routinely contain collapsed panels. The content of these panels will
show up when doing a Wiki search, but won't yield any results when doing
an in-page search with your browser's search feature, as the panels are
collapsed and their content is not visible.

Rather than manually expanding all panels before performing a text-search
(or a screen capture, or any other use case where you need the page
content to be fully visible), let this extension take care of it for you
on document load.

## How to Install it?

Install it from the Google Chrome Web Store at:

https://chrome.google.com/webstore/detail/confluence-auto-expander/cikcpbiockeecaeogocphgojieohacpp

## How Does It Work?

At the moment, the extension uses:

 * a [Content Script][1] matching any domains for the http and https URL schemes,
 * the script then detects the tell-tale `#com-atlassian-confluence` ID to
   ensure it runs in a Confluence wiki page,
 * it then lookups all parent nodes for the selector
   `.expand-control > .icon:not(.expanded)`,
 * and finally it triggers a click on each of these parent nodes, to
   auto-expand them.

## Caveats and Limitations

At the moment, this is rather clunky as:

 * it requires a content_script with aggressive permissions,
 * it runs on all pages (though a safeguard short-circuits the extension if
   the common `#com-atlassian-confluence` ID cannot be found),
 * it's rather basic and supports only collapsible panels using some specific
   CSS rules.
