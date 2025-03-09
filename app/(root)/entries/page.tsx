import { getEntriesData } from '@/lib/utils';
import React from 'react'

const EntriesPage = async () => {

  const entries = await getEntriesData();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const entriesArr = entries.map((entry: any) => {
    return (
      <p key={entry._id}>{entry.title}</p>
    )
  })

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
        {entriesArr}
    </div>
  )
}

export default EntriesPage