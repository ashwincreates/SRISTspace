function About() {
  return (
    <>
    <div className="flex items-center flex-col">
      <div className="mx-auto flex items-center justify-center h-[300px]">
        <h2 className="text-2xl max-w-4xl text-center">
          We are students of SRIST Computer Science Stream and We wanted to
          bring our College experience on an online platform .
        </h2>
      </div>
      <h2 className="text-2xl font-bold text-lime-500">Contributers</h2>
      <div className="flex flex-col gap-y-10 sm:gap-x-10 mt-10 sm:flex-row">
        <div className="aboutcontent flex items-center flex-col">
          <div className="ashwin h-20 w-20 rounded-full bg-gray-300">
          </div>
          <div className="flex items-center mt-4 flex-col aboutdata">
            <div className="text-xl text-lime-500 font-bold">Ashwin kumar sharma </div>

            <div className="role text-gray-500">Role</div>

            <div className="faculty font-bold text-gray-900">Full Stack & UI/UX</div>
          </div>
        </div>
        <div className="aboutcontent flex items-center flex-col">
          <div className="aboutimage ayush h-20 w-20 rounded-full bg-gray-300">
          </div>
          <div className="flex items-center flex-col aboutdata mt-4">
            <div className="name text-xl text-lime-500 font-bold">Ayush nigam</div>
            <div className="role text-gray-500">Role</div>
            <div className="faculty font-bold text-gray-900">Frontend Development</div>
          </div>
        </div>
        <div className="aboutcontent flex items-center flex-col">
          <div className="aboutimage utkarsh h-20 w-20 rounded-full bg-gray-300">
          </div>
          <div className="flex items-center flex-col aboutdata mt-4">
            <div className="name text-xl text-lime-500 font-bold">Utkarsh choudhary</div>
            <div className="role text-gray-500">Role</div>
            <div className="faculty font-bold text-gray-900">Frontend & Backend Development</div>
          </div>
        </div>
      
        </div>
      </div>
    
    </>
  );
}
export default About;
