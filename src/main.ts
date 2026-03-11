import { PDFParse } from "pdf-parse";
import { chunker } from "./chunk.js";
const text = async function run() {
  const parser = new PDFParse({ url: "https://bitcoin.org/bitcoin.pdf" });
  const result = await parser.getText();
  chunker(result);
  console.log(chunker(result));
};
text();
