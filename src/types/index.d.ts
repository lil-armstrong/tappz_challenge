export type TBlobType = "image" | "video" | "audio" | "doc"| ("text" & string);

export interface IBlob {
  url: string;
  alt: string;
}
