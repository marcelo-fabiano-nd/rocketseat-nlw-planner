import { CircleDashed, UserCog } from "lucide-react";
import { PlannerButton } from "../../components/planner-button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">Jwssica White</span>
            <span className="block text-sm text-zinc-400 truncate">
              jessica.white44@yahoo.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">Dr. Rita Pacocha</span>
            <span className="block text-sm text-zinc-400 truncate">
              lacy.stiedemann@gmail.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      <PlannerButton kind="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </PlannerButton>
    </div>
  )
}