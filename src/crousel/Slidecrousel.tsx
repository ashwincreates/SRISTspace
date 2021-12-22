import {FiArrowLeft, FiArrowRight} from "react-icons/fi";
import {useSpringCarousel} from "react-spring-carousel-js";

function Slide(props) {
	return (
	<div className="h-[500px] relative w-full overflow-hidden after:h-full after:w-full after:absolute after:opacity-30 after:top-0 after:bg-gradient-to-t after:from-black after:block">
		<img src={props.src} className="pointer-events-none object-cover h-[500px] w-full"/>
		<div className="md:block absolute bottom-6 text-white z-10 px-3 text-center w-full">
        <h5 className="text-xl font-medium">Web Development Classes</h5>
        <p>New Courses are available starting from 11th Jan.</p>
    </div>
	</div>
	)
}

function Slidecrousel() {
  const { carouselFragment, slideToPrevItem, slideToNextItem, } = useSpringCarousel({
    items: [
      {
        id: 'item-1',
        renderItem: <Slide src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>,
      },
      {
        id: 'item-2',
        renderItem: <Slide src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"/>,
      }
    ]
  })

  return (
		<div className="relative">
			<button className="hidden md:flex items-center justify-center left-0 z-10 top-0 absolute text-transparent hover:bg-black hover:bg-opacity-10 hover:text-white h-full w-24" onClick={slideToPrevItem}><FiArrowLeft className="transition-all ease-in-out" size={24}/></button>
			{carouselFragment}
			<button className="hidden md:flex items-center justify-center right-0 z-10 top-0 absolute text-transparent hover:bg-black hover:bg-opacity-10 hover:text-white h-full w-24" onClick={slideToNextItem}><FiArrowRight className="transition-all ease-in-out" size={24}/></button>
		</div>
	);
}

export default Slidecrousel;
