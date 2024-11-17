//browser is aware that addition of file takes place inside browser object;
//document is root node and html is root element.
//html is child node of document..
//dom stores webpage in form of  a tree structure...
//head is child node of html.
//browser stors[(\n and space ) =>denoting text node] becoz there is space outside of head opening tag.
//title ...then content of title  and then (\n and space).
//then we have script tag and inside that we have javascript;
// then head tag is closed;
//then we have our body tag beginning;
//each enter key marks the presence of new line.
//................similarly h2 tag is accessed;
///at the end we have body tag closure;
//html closes
const rootNode = document.getRootNode();
const htmlElementNode =console.log(rootNode.childNodes);
//we get a node list.
const a1 = console.log(rootNode.childNodes[1]);//that is we can use our array indexing property on or file.
console.log(a1.childNodes);//childNodes can be applied on single tag or element