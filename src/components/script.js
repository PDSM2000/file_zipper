import { HuffmanCoder } from "./huffman.js";

const coder = new HuffmanCoder();

export function encoder(file) {
  // Get reference to elements
  const treearea = document.getElementById("tree-display");
  const temptext = document.getElementById("info");
  const uploadedFile = file;
  if (uploadedFile === undefined) {
    alert("No file uploaded !");
    return;
  }
  const fileReader = new FileReader();
  fileReader.onload = function (fileLoadedEvent) {
    const text = fileLoadedEvent.target.result;
    if (text.length === 0) {
      alert("Text can not be empty ! Upload another file !");
      return;
    }
    let [encoded, tree_structure, info] = coder.encode(text);
    downloadFile(uploadedFile.name.split(".")[0] + "_encoded.txt", encoded);
    tree_structure="Huffman tree\n"+tree_structure;
    treearea.innerText = tree_structure;

    temptext.innerText = info;
  };
  fileReader.readAsText(uploadedFile, "UTF-8");
}
export function decoder(file) {
  const treearea = document.getElementById("tree-display");
  const temptext = document.getElementById("info");
  const uploadedFile = file;
  if (uploadedFile === undefined) {
    alert("No file uploaded !");
    return;
  }
  const fileReader = new FileReader();
  fileReader.onload = function (fileLoadedEvent) {
    const text = fileLoadedEvent.target.result;
    if (text.length === 0) {
      alert("Text can not be empty ! Upload another file !");
      return;
    }
    let [decoded, tree_structure, info] = coder.decode(text);
    downloadFile(uploadedFile.name.split(".")[0] + "_decoded.txt", decoded);
    tree_structure="Huffman tree\n"+tree_structure;
    treearea.innerText = tree_structure;
    temptext.innerText = info;
  };
  fileReader.readAsText(uploadedFile, "UTF-8");
}

function downloadFile(fileName, data) {
  let a = document.createElement("a");
  a.href = "data:application/octet-stream," + encodeURIComponent(data);
  a.download = fileName;
  a.click();
}
