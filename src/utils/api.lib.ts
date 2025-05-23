/**
 * Asynchronously retrieves details about the first file in a given `FileList`.
 *
 * @param files - A `FileList` object containing the files to process, or `null`.
 * @returns A promise that resolves to a tuple:
 * - The first element is a string representing the file type (`"image"`, `"audio"`, `"video"`, or `"doc"`).
 * - The second element is an object containing:
 *   - `url`: A string representing the data URL of the file.
 *   - `alt`: An empty string (reserved for future use).
 *   If no files are provided or an error occurs, the second element will be `undefined`.
 *
 * @throws Will reject the promise with a tuple `["text", undefined]` if an error occurs while reading the file.
 
 */
export async function getFileDetails(
  files: FileList | null
): Promise<[string, { url: string; alt: string } | undefined]> {
  if (!files || files.length === 0) {
    return ["text", undefined];
  }

  const file = files[0];
  const reader = new FileReader();

  // Determine the file type
  const type = (() => {
    if (file.type.startsWith("image/")) return "image";
    if (file.type.startsWith("audio/")) return "audio";
    if (file.type.startsWith("video/")) return "video";
    return "doc";
  })();

  // Read the file as a data URL
  return new Promise<[string, { url: string; alt: string } | undefined]>(
    (resolve, reject) => {
      reader.onload = () => {
        resolve([type, { url: reader.result as string, alt: "" }]);
      };
      reader.onerror = () => {
        reject(["text", undefined]);
      };
      reader.readAsDataURL(file);
    }
  );
}

export const isScrolledToMaxHeight = (elem: HTMLElement | null): boolean => {
  if (!elem) {
    return false;
  }

  const { scrollTop, scrollHeight, clientHeight } = elem;
  const buffer = 60; // Buffer to account for slight offsets
  return scrollTop + clientHeight + buffer >= scrollHeight;
};

export const handleScrollToBottom = (elem: HTMLElement | null): void => {
  if (elem && !isScrolledToMaxHeight(elem)) {
    elem.scrollTo({
      top: elem.scrollHeight,
      behavior: "smooth",
    });
  }
};
