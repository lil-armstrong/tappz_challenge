import { useChatStore } from "@/store/useChatStore";
import { ActionIcon, Indicator } from "@mantine/core";
import { FormEvent, useMemo, useRef, useState } from "react";
import { BiPaperclip, BiSend } from "react-icons/bi";
import classes from "./style.module.css";
import { IChatFormProps } from "./type";

const ChatForm = ({ onSendCallback }: IChatFormProps) => {
  const addMessage = useChatStore((state) => state.addMessage);
  const userId = useChatStore((state) => state.userId);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<{
    text: string;
    file: FileList | null;
  }>({
    text: "",
    file: null,
  });

  const resetForm = () => {
    setForm({
      text: "",
      file: null,
    });

    formRef.current && formRef.current.reset();
  };

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();

    await addMessage({
      senderId: userId,
      text: form.text,
      files: form.file,
    });

    onSendCallback && onSendCallback();

    resetForm();
  };

  const hasValidInput = useMemo(() => form.file || form.text, [form]);

  return (
    <form ref={formRef} className={classes.container} onSubmit={handleSend}>
      <textarea
        name="textbox"
        className={classes.textbox}
        placeholder="Enter message"
        defaultValue={form.text}
        onKeyDown={async (e) => {
          if (
            (e.ctrlKey || e.metaKey) &&
            e.key === "Enter" &&
            e.currentTarget.value.trim()
          ) {
            await handleSend(e);
          }
        }}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            text: e.target.value.trim(),
          }))
        }
      />
      <Indicator
        inline
        label={form.file?.length}
        disabled={!form.file?.length}
        size={16}
        offset={7}
      >
        <ActionIcon
          onClick={() => fileInputRef.current?.click()}
          size={"xl"}
          className={classes.file}
          variant="subtle"
          radius="md"
        >
          <BiPaperclip />
          <input
            ref={fileInputRef}
            id="file-upload"
            name="file"
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                file: e.target.files,
              }))
            }
            type="file"
            className={classes.file_upload}
          />
        </ActionIcon>
      </Indicator>
      <ActionIcon
        disabled={!hasValidInput}
        type="submit"
        radius={"md"}
        size={"xl"}
      >
        <BiSend />
      </ActionIcon>
    </form>
  );
};

export default ChatForm;
