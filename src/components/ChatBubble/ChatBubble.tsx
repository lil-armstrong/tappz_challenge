import { formatDate } from "@/utils/date";
import { AspectRatio, Text } from "@mantine/core";
import clsx from "clsx";
import Image from "next/image";
import { BiCloudDownload } from "react-icons/bi";
import classes from "./style.module.css";
import { IBlobProps, IProps } from "./type";

const BlobRenderer = ({ url, alt, type }: IBlobProps) => {
  const width = 200;
  const height = 200;

  switch (type) {
    case "image": {
      return (
        <Image
          width={width}
          height={height}
          src={url}
          alt={alt}
          aria-description={alt}
        />
      );
    }
    case "video": {
      return (
        <video
          width={width}
          height={height}
          src={url}
          aria-label={alt}
          controls
        />
      );
    }
    case "audio": {
      return <audio src={url} aria-label={alt} controls />;
    }
    default:
      return (
        <a
          href={url}
          className={clsx(classes.doc_media, "fade_in")}
          role="link"
          download
          aria-label={alt}
        >
          <BiCloudDownload width={"100%"} />
          <Text size="xs" opacity={0.75}>
            Click to download
          </Text>
        </a>
      );
  }
};

const ChatBubble = ({ isSender = false, message }: IProps) => {
  const { timestamp, blob, type = "text", text = "" } = message;
  const date = formatDate(timestamp);

  return (
    <div
      className={clsx(
        isSender ? classes.sender_bubble : classes.recipient_bubble,
        classes.bubble,
        "fade_in"
      )}
    >
      {blob && (
        <AspectRatio
          classNames={{
            root: classes.media_container,
          }}
          ratio={16 / 9}
        >
          <BlobRenderer type={type} url={blob.url} alt={blob.alt} />
        </AspectRatio>
      )}

      <div className={classes.text_container}>
        <Text
          size="xs"
          classNames={{
            root: classes.timestamp,
          }}
        >
          {date}
        </Text>
        <Text className={classes.text}>{text}</Text>
      </div>
    </div>
  );
};

export default ChatBubble;
