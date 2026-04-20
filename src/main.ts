import { PDFParse } from "pdf-parse";
import { chunker } from "./textSplit/chunk.js";
const text = async function run() {
  const parser = new PDFParse({ url: "https://bitcoin.org/bitcoin.pdf" });
  const result = await parser.getText();
  chunker(result);
};
text();
