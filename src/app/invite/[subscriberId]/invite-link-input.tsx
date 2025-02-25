"use client";

import { IconButton } from "@/components/iconButton";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { Link, Copy } from "lucide-react";

interface InviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
    alert("Link copiado para a área de transferência!");
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField type="text" readOnly defaultValue={inviteLink} />
      <IconButton onClick={copyInviteLink} className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
