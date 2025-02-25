import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from "@/http/api";
import { MousePointerClick, BadgeCheck, Medal } from "lucide-react";

interface StatsProps {
  subscriberId: string;
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: accesCount } = await getSubscriberInviteClicks(subscriberId);
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId);
  const { position: rankingPosition } = await getSubscriberRankingPosition(
    subscriberId
  );

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="bg-gray-700 border border-gray-600 rounded-xl flex flex-col items-center justify-center gap-1 px-4 py-7 relative">
        <span className="font-heading text-2xl leading-none text-gray-200">
          {accesCount}
        </span>
        <span className="text-gray-300 text-sm leading-none text-center">
          Acessos ao link
        </span>
        <MousePointerClick className="absolute top-3 left-3 size-5 text-purple" />
      </div>
      <div className="bg-gray-700 border border-gray-600 rounded-xl flex flex-col items-center justify-center gap-1 px-4 py-7 relative">
        <span className="font-heading text-2xl leading-none text-gray-200">
          {inviteCount}
        </span>
        <span className="text-gray-300 text-sm leading-none text-center">
          Inscrições feitas
        </span>
        <BadgeCheck className="absolute top-3 left-3 size-5 text-purple" />
      </div>
      <div className="bg-gray-700 border border-gray-600 rounded-xl flex flex-col items-center justify-center gap-1 px-4 py-7 relative">
        <span className="font-heading text-2xl leading-none text-gray-200">
          {rankingPosition ? `${rankingPosition}º` : "-"}
        </span>
        <span className="text-gray-300 text-sm leading-none text-center">
          Posição no ranking
        </span>
        <Medal className="absolute top-3 left-3 size-5 text-purple" />
      </div>
    </div>
  );
}
