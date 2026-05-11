"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { fetchNotes } from "@/lib/api";
import type { Note } from "@/types/note";

export default function NotesClient() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes(),
  });

  if (isLoading) return <p>Loading, please wait...</p>;

  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <h2>Notes list:</h2>

      <ul>
        {data?.notes.map((note: Note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <Link href={`/notes/${note.id}`}>View details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
