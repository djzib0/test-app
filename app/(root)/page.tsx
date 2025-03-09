import { getEntriesData } from "@/lib/utils";

export default async function Home() {

  const entries = await getEntriesData();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const entriesArr = entries.map((entry: any) => {
    return (
      <p key={entry._id}>{entry.title}</p>
    )
  })

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>
        {entriesArr}
      </p>
    </div>
  );
}
