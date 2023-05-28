import { AddForm } from "./AddForm"

export const Teams = () => {
  return (
    <div className="mt-10 flex flex-col gap-6">
      <h2 className="text-main font-bold text-3xl">
        Teams
      </h2>
      <AddForm />
    </div>
  )
}