import React, { Component, useEffect, useRef } from "react";
import Icons from "../icons/icons";
import "./Slidecrousel.css";

interface slides {
  id: string;
  img: string;
}

interface slideStates {
  index: number;
  items: Array<slides>;
}

interface props {
}

export default class Slidecrousel extends React.Component<props, slideStates> {
  divRef = [
    React.createRef<HTMLElement>(),
    React.createRef<HTMLElement>(),
    React.createRef<HTMLElement>(),
  ];

  constructor(props: any) {
    super(props);
    this.state = {
      items: [
        {
          id: "0",
          img: "https://educationworld4u.com/images/college/1975992703-shri-ram-institute-of-technology-jabalpur-city-jabalpur-colleges-tthlike.jpg",
        },
        {
          id: "1",
          img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
        },
        {
          id: "2",
          img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
      ],
      index: 0,
    };
    this.changeImageForward = this.changeImageForward.bind(this);
    this.changeImageBackWard = this.changeImageBackWard.bind(this);
  }

  interval : any;

  carousel = React.createRef<HTMLDivElement>();

  changeImageForward() {
    if (this.state.index < this.state.items.length - 1) {
      var a = this.state.index + 1;
      this.divRef[a].current?.scrollIntoView();
      this.setState({ index: a });
    }
  }

  changeImageBackWard() {
    if (this.state.index < this.state.items.length && this.state.index > 0) {
      var a = this.state.index - 1;
      this.divRef[a].current?.scrollIntoView();
      this.setState({ index: a });
    }
  }

  componentDidMount() {

    this.setIntervals();


  let options = {
	root : null,
	rootMargin: "0px",
	threshold: 1.0,
  }

   const observer = new IntersectionObserver((entities : any) => {
	const target = entities[0];
	if(!target.isIntersecting){
    clearInterval(this.interval) 
		console.log("Out of view...")
	}
	else {
		console.log("In View...")
    clearInterval(this.interval)
    this.setIntervals()
	}
}, options);
	if(this.carousel.current){
		observer.observe(this.carousel.current);
	}

  }


  setIntervals(){

    this.interval = setInterval(() => {
      if (this.state.index < this.state.items.length - 1) {
        this.divRef[this.state.index + 1].current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        this.setState({ index: this.state.index + 1 });
      } else {
        this.setState({ index: 0 });
        this.divRef[this.state.index].current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    }, 5000);

  }

  render() {
    return (
      <div className="super" ref={this.carousel}>
        <div className="fragment">
          {this.state.items.map((item) => (
            <div ref={this.divRef[item.id]}>
              <img className="imageBack" alt="" src={item.img} />
            </div>
          ))}
        </div>

        <div className="forward" onClick={this.changeImageForward}>
		<Icons name="forward" />
        </div>

        <div className="backward" onClick={this.changeImageBackWard}>
            
		<Icons name="backward" />
        </div>
      </div>
    );
  }
}
