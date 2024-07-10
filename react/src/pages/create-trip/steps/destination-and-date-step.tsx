import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { PlannerButton } from "../../../components/planner-button";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  openGuestsInput: () => void;
  closeGuestsInput: () => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  openGuestsInput,
  closeGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40" />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <PlannerButton onClick={closeGuestsInput} kind="secondary">
          Alterar local e data
          <Settings2 className="size-5" />
        </PlannerButton>
      ) : (
        <PlannerButton onClick={openGuestsInput} kind="primary">
          Continuar
          <ArrowRight className="size-5" />
        </PlannerButton>
      )}
    </div>
  )
}