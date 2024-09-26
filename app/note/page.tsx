import { Container } from "@/components/shared/container";
import { Note } from "@/components/shared/note";

const NotePage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch note data from the API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/note?id=${id}`
  );

  if (!response.ok) {
    return (
      <Container className="ml-0 flex h-screen w-screen p-[50px]">
        <p>Note not found</p>
      </Container>
    );
  }

  const noteData = await response.json();

  return (
    <Container className="ml-0 flex h-screen w-screen p-[50px]">
      <Note
        id={noteData.id}
        title={noteData.title}
        content={noteData.content}
        folderId={noteData.folderId}
        createdAt={noteData.createdAt}
        userId={noteData.userId}
      />
    </Container>
  );
};

export default NotePage;
