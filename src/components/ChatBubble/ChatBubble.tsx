import { formatDate } from "@/utils/date";
import { AspectRatio, Text } from "@mantine/core";
import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: isSender ? "100%" : "-100%", y: 50 }}
      animate={{ opacity: 1, x: "0%", y: 0 }}
      ref={ref}
      className={clsx(
        isSender ? classes.sender_bubble : classes.recipient_bubble,
        classes.bubble
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
    </motion.div>
  );
};

export default ChatBubble;
