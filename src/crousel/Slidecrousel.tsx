import React, { Component, useEffect, useRef } from "react";
import "./Slidecrousel.css";

interface slides {
  id: string;
  img: string;
}

interface slideStates {
  images: Array<string>;
  index: number;
  items: Array<slides>;
  refArr: Array<Object>;
}

interface props {}

export default class Slidecrousel extends React.Component<props, slideStates> {
  divRef = [React.createRef<HTMLElement>(), React.createRef<HTMLElement>()];

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
      ],
      index: 0,
      images: [
        "https://educationworld4u.com/images/college/1975992703-shri-ram-institute-of-technology-jabalpur-city-jabalpur-colleges-tthlike.jpg",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
      ],
      refArr: [],
    };
  }

  changeImage(id) {
    this.divRef[id].current?.scrollIntoView();
  }

  render() {
    return (
      <div className="fragment">
        {/* <img
alt = "" 
className = "imageBack" src = {this.state.images[this.state.index]} 
onTransitionEnd = {this.changeImage}
/> */}
        {this.state.items.map((item) => (
          <div ref={this.divRef[item.id]}>
            <img className="imageBack" alt="" src={item.img} />
          </div>
        ))}

        <div className="upperLayer">
          <button onClick={this.changeImage} />
        </div>
      </div>
    );
  }
}
