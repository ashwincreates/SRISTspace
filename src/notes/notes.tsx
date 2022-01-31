import Subjects from "./subjects/subjects";

function Notes() {
  return (
    <>
      <div className="w-full h-[200px] flex items-center justify-center flex-col bg-cover bg-center rounded-md mt-4" style={{backgroundImage: "url(https://res.cloudinary.com/sristspace/image/upload/v1630644139/Frame_10_jgz1cj.png)"}}>
        <div className="text-xl font-bold"> Notes </div>
        <p>All Notes for every branch available here</p>
      </div>
      <Subjects />
    </>
  );
}

export default Notes;
