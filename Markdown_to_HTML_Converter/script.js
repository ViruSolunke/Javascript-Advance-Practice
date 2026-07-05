const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {

  let html = markdownInput.value;

  // Images
  html = html.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img alt="$1" src="$2">'
  );

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>'
  );

  // Bold
  html = html.replace(
    /\*\*(.*?)\*\*|__(.*?)__/g,
    (_, a, b) => `<strong>${a || b}</strong>`
  );

  // Italic
  html = html.replace(
    /\*(.*?)\*|_(.*?)_/g,
    (_, a, b) => `<em>${a || b}</em>`
  );

  // Headings
  html = html.replace(/^\s*### (.+)$/gm,"<h3>$1</h3>");
  html = html.replace(/^\s*## (.+)$/gm,"<h2>$1</h2>");
  html = html.replace(/^\s*# (.+)$/gm,"<h1>$1</h1>");

  // Blockquotes
  html = html.replace(
    /^\s*>\s(.+)$/gm,
    "<blockquote>$1</blockquote>"
  );

  // Remove line breaks
  html = html.replace(/\n/g,"");

  return html;
}

markdownInput.addEventListener("input", () => {

  const html = convertMarkdown();

  htmlOutput.textContent = html;

  preview.innerHTML = html;

});