import React, { useEffect, useState } from "react";
import "./Crousel.css";
  
    

function Crousel() {
  /*const [posX1, setposX1] = useState(0);
  const [posX2, setposX2] = useState(0);*/
 // const [posInitial, setposInitial] = useState(0);
 // const [posFinal, setposFinal] = useState(0);
  const [index, setindex] = useState(0);
  const [allowShift, setallowshift] = useState(false);

  let posX1 : number = 0, posX2 : number = 0, posInitial : number = 0, posFinal : number = 0;

  const threshold = document.documentElement.clientWidth * 5;

  var slider = document.getElementById("slider"),
    sliderItems = React.useRef<HTMLDivElement>(null),
    prev = document.getElementById("prev"),
    next = document.getElementById("next"),
    slidesLength = sliderItems.current?.children.length;

  useEffect(() => {
    document
      .getElementById("items")
      ?.appendChild(
        document.getElementsByClassName("slide")[0].cloneNode(true)
      );
    document
      .getElementById("items")
      ?.insertBefore(
        document.getElementsByClassName("slide")[2].cloneNode(true),
        document.getElementsByClassName("slide")[0]
      );

    if (sliderItems.current) {
      sliderItems.current.addEventListener("touchstart", dragstart);
      sliderItems.current.addEventListener("touchend", dragend);
      sliderItems.current.addEventListener("touchmove", dragaction);
      sliderItems.current.addEventListener("transitionend", checkIndex);
    }
  }, []);

  function dragstart(e: any) {
    e.preventDefault();
    posInitial = sliderItems.current?.offsetLeft as number;
    if (e.type === "touchstart") {
      posX1 = e.clientX;
    }
    document.onmouseup = dragend;
    document.onmousemove = dragaction;
    console.log("drag started at " + posX1 + " and initial offset is " + posInitial)
  }

  function dragaction(e: any) {
    e.preventDefault();
    if (e.type === "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    if (sliderItems.current)
      sliderItems.current.style.left =
        sliderItems.current?.offsetLeft - posX2 + "px";
  }

  function dragend(e: any) {
    posFinal = sliderItems.current?.offsetLeft as number;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, "drag");
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, "drag");
    } else {
      if (sliderItems.current)
        sliderItems.current.style.left = posInitial + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
    console.log("drag ended");
  }

  function shiftSlide(dir: number, action: any) {
    sliderItems.current?.classList.add("shifting");

    if (allowShift) {
      if (!action) {
        posInitial = sliderItems.current?.offsetLeft as number;
      }

      if (dir == 1) {
        if (sliderItems.current)
          sliderItems.current.style.left =
            posInitial - sliderItems.current?.children.length + "px";
        setindex(index + 1);
      } else if (dir == -1) {
        if (sliderItems.current)
          sliderItems.current.style.left =
            posInitial + sliderItems.current?.children.length + "px";
        setindex(index - 1);
      }
    }

    setallowshift(false);
  }
  function checkIndex() {
    if (index == -1) {
      if (sliderItems.current)
        sliderItems.current.style.left =
          -(
            sliderItems.current?.children.length *
            document.documentElement.clientWidth
          ) + "px";
      setindex((sliderItems.current?.children.length as number) - 1);
    }

    if (index == slidesLength) {
      if (sliderItems.current)
        sliderItems.current.style.left =
          -(1 * document.documentElement.clientWidth) + "px";
      setindex(0);
    }

    setallowshift(true);
  }

  return (
    <>
      <div id="slider" className="slider">
        <div className="wrap">
          <div
            id="items"
            ref={sliderItems}
            className="items"
            onMouseDown={(e) => dragstart(e)}
          >
            {images.map((item) => {
              return (
                <span className="slide">
                  <img src={item} />
                </span>
              );
            })}
          </div>
        </div>
        <a id="prev" className="control prev">
          prev
        </a>
        <a id="next" className="control next">
          next
        </a>
      </div>
    </>
  );

}
export default Crousel;
