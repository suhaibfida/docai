interface chunk {
  text: string;
}
export const chunker = (data: chunk, chunkSize = 500, overlap = 100) => {
  const text = data.text;

  const chunks: string[] = [];

  const split = text.split(/\s+/);
  console.log(split);
  let start = 0;
  while (start < split.length) {
    const process = split.slice(start, start + chunkSize).join(" ");
    console.log(process);
    chunks.push(process);
    start += chunkSize - overlap;
  }
  return chunks;
};
