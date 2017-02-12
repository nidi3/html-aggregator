# html-aggregator 
Aggregate html snippets from other pages.

## Usage
Install with `npm install -g html-aggregator`.

Run with `html-aggregator --templateDir=<directory> --output=<file> --maxLen=<number> input files...`.

`templateDir` contains json files that define how to extract data from HTML files:
````json
{
    "title": "header.post-header h1",
    "content": "article.post-content",
    "static": {
        "name": "My Name"
    }
}
````

The values are CSS selectors that are applied to the input HTML files. `static` contains static strings.

`output` is a file defining how to render the scraped data:
````HTML
<h1>%title%</h1>
<div>By %name%</div>
<div>%content%</div>
````
The variables defined in a template are referenced by the expression`%var%`.

For every occurrence of `<aggregate url="..." template="..."></aggregate>` in every input file
- the contents of the given URL is fetched
- the contents is parsed with the given template
- `<aggregate>`'s child nodes are replaced with the `output` file having its variables replaced.
     