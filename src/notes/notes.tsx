import Subjects from "./subjects/subjects";

function Notes() {
  return (
    <>
      <div className="w-full h-[200px] flex items-center justify-center flex-col">
        <div className="text-xl font-bold"> Notes </div>
        <p>All Notes for every branch available here</p>
      </div>
      <Subjects />
    </>
  );
}

export default Notes;
