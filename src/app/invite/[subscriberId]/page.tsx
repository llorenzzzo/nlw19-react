import logo from "../../../assets/logo.svg";
import Image from "next/image";
import { Ranking } from "./ranking";
import { Stats } from "./stats";
import { InviteLinkInput } from "./invite-link-input";
import { promises } from "dns";

interface InvitePageProps {
  params: Promise<{
    subscriberId: string;
  }>;
}

export default async function InvitePage(props: InvitePageProps) {
  const { subscriberId } = await props.params;

  const inviteLink = `http://localhost:3333/invites/${subscriberId}`;

  return (
    <div className="min-h-dvh flex flex-col md:flex-row justify-between items-center gap-16">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <div>
          <Image src={logo} alt="logo-devstage" height={30} />
        </div>
        <div className="space-y-2">
          <h1 className="font-heading font-semibold text-4xl leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading font-semibold text-xl leading-none">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Para entrar no evento, acesse o link enviado para seu e-mail
            </p>
          </div>
          <InviteLinkInput inviteLink={inviteLink} />
          <Stats subscriberId={subscriberId} />
        </div>
      </div>
      <Ranking />
    </div>
  );
}
