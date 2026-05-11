import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "./NoteDetails.client";
import css from "./NotesPage.module.css";
export default async function NoteDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", params.id],
    queryFn: () => fetchNoteById(params.id),
  });

  return (
    <main>
      <h1>Note details</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </main>
  );
}
