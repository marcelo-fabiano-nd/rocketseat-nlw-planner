import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { PlannerButton } from "../../../components/planner-button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  eventStartAndEndDates: DateRange | undefined
  openGuestsInput: () => void
  closeGuestsInput: () => void
  setDestination: (destination: string) => void
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  eventStartAndEndDates,
  openGuestsInput,
  closeGuestsInput,
  setDestination,
  setEventStartAndEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatepickerOpen] = useState(false);

  function openDatepicker() {
    setIsDatepickerOpen(true);
  }

  function closeDatepicker() {
    setIsDatepickerOpen(false);
  }

  const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to 
    ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ', format(eventStartAndEndDates.to, "d' de 'LLL"))
    : "Quando?";

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} onChange={event => setDestination(event.target.value)} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
      </div>

      <button onClick={openDatepicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 text-left w-[220px]">
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayedDate}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione as datas</h2>
                <button type="button" onClick={closeDatepicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

            <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
          </div>
        </div>
      )}


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