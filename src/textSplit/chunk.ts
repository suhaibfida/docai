interface Chunk {
  text: string;
}

export const chunker = (data: Chunk, chunkSize = 200, overlap = 20) => {
  const dataa = data.text;
  const split = dataa.split(/\s+/);
  let array: string[] = [];
  let start = 0;
  while (start < split.length) {
    let process = split.slice(start, start + chunkSize).join(" ");
    array.push(process);
    start += chunkSize - overlap;
  }
  console.log(array);
};
