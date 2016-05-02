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

## How Does It Work?

## Caveats and Limitations

At the moment, this is rather clunky as:

 * it requires a content_script with aggressive permissions,
 * it runs on all pages (though a safeguard short-circuits the extension if
   the common `#com-atlassian-confluence` ID cannot be found),
 * it's rather basic and supports only collapsible panels using some specific
   CSS rules.
