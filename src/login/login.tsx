import { Dialog, Transition } from "@headlessui/react";
import { Component, Fragment } from "react";

import { GoogleLogin } from "react-google-login";
import Icons from "../icons/icons";

interface states {
  successOpen: boolean;
  open: boolean;
  rendered: string;
  email: string;
  password: string;
  pass1: string;
  response: string;
}

interface props {
  open: boolean;
  setOpen: Function;
}

export default class Login extends Component<props, states> {
  constructor(props: any) {
    super(props);
    this.state = {
      successOpen: true,
      open: true,
      rendered: "2",
      password: "",
      email: "",
      pass1: "",
      response: "",
    };
    this.closeDialog = this.closeDialog.bind(this);
    this.changeToLogin = this.changeToLogin.bind(this);
    this.changeToSignUp = this.changeToSignUp.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open != this.props.open)
      this.setState({...this.state, open: this.props.open})
    console.log("updated", this.props.open)
  }

  signUPToserver(event: any) {
    event.preventDefault();
    var url: string =
      "https://sristspace.herokuapp.com/adduser/" +
      this.state.email +
      "/" +
      this.state.password +
      "/sem/stream/branch";

    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    var isValid: boolean = false;
    if (!pattern.test(this.state.email)) {
      alert("Enter valid email address.");
      isValid = false;
    }

    if (this.state.pass1 != this.state.password) {
      alert("Password does not match.");
      isValid = false;
    } else {
      isValid = true;
    }

    if (isValid) {
      var output: string = "";
      fetch(url).then((response) => {
        response
          .text()
          .then((result) => {
            output = result;
          })
          .then(() => {
            if (output === "submit") {
              this.setState({ rendered: "2" });

              alert("user added , login to continue.");
            } else {
              alert("user already exists");
            }
          });
      });

      isValid = false;
    }
  }

  LoginToServer(event) {
    event.preventDefault();

    var url: string =
      "https://sristspace.herokuapp.com/getuser/" +
      this.state.email +
      "/" +
      this.state.password;
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    var isValid: boolean = false;
    if (!pattern.test(this.state.email)) {
      alert("Enter valid email address.");
      isValid = false;
    } else {
      isValid = true;
    }

    if (isValid) {
      fetch(url).then((response) => {
        response.json().then((result) => {
          console.log("login result : "  +result as string)
          if (result === "user does not exists") {
            alert("wrong password or email.");
          } else {
            // this.setState({rendered:"0"})
            this.closeDialog();
          }
        });
      });

      isValid = false;
    }
  }

  setEmail(email: string) {
    this.setState({ email: email });
  }

  setPassword(pass: string) {
    this.setState({ password: pass });
  }

  setPass1(pass: string) {
    this.setState({ pass1: pass });
  }

  changeToSignUp() {
    this.setState({ rendered: "1" });
  }

  changeToLogin() {
    this.setState({ rendered: "2" });
  }

  closeDialog() {
    this.setState({ open: false });
  }

  responseGoogleSuccess = (response) => {
    this.closeDialog();
  };

  responseGoogleFailure = (response) => {
    alert("unable to sign in with google.");
  };

  render() {
    switch (this.state.rendered) {
      case "0":
        return (
          <Transition appear show={this.state.open} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={() => {
                this.props.setOpen(!this.state.open)
              }}
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md sm:max-w-2xl p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <div className="Views">
                      <div>
                        <div className="flexrow">
                          <img
                            className="logoat"
                            alt=""
                            src="https://storage.googleapis.com/ezap-prod/colleges/7918/shri-ram-institute-of-science-and-technology-jabalpur-logo.jpg"
                          />
                          <div
                          >
                            <text>SRIST space</text>
                            <h1>v 1.0</h1>
                          </div>
                          <h1 className="udTxt" onClick={this.closeDialog}>
                            SKIP
                          </h1>
                        </div>
                      </div>
                      {/* <LoginWindows open={this.state.open} /> */}
                      <div>
                        <h1
                          style={{
                            textAlign: "center",
                            color: "black",
                          }}
                        >
                          Sign in to continue
                        </h1>
                        <button
                          className="commonButton"
                          onClick={this.changeToSignUp}
                        >
                          Sign up
                        </button>
                        <button
                          className="commonButton"
                          onClick={this.changeToLogin}
                        >
                          Login
                        </button>
                      </div>

                      <div className="or">
                        <h1
                          style={{
                            textAlign: "center",
                            color: "white",
                            marginTop: "15%",
                          }}
                        >
                          or
                        </h1>
                        <GoogleLogin
                          clientId="561872423103-p700sl1jeu9rhrmq2tr5n6mlodekr467.apps.googleusercontent.com"
                          className="googlesign"
                          onSuccess={this.responseGoogleSuccess}
                          onFailure={this.responseGoogleFailure}
                        />
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        );

      case "1":
        return (
          <Transition appear show={this.state.open} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={() => {
                // this.setState({ open: !this.state.open });
                this.props.setOpen(!this.state.open)
              }}
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <div className="flex flex-col gap-y-4 justify-center">
                        <h3 className="sec-head text-xl font-bold text-lime-500">Sign Up</h3>
                        <form className="text-fields flex flex-col gap-y-4">
                          <input
                            className="p-2 border rounded-lg focus:outline-lime-500 commonInputs1"
                            onChange={(evt) => {
                              this.setEmail(evt.target.value);
                            }}
                            placeholder={"Type Email Address"}
                            type="email"
                          ></input>
                          <input
                            className="p-2 border rounded-lg focus:outline-lime-500 commonInputs1"
                            onChange={(evt) => {
                              this.setPassword(evt.target.value);
                            }}
                            placeholder={"Type password"}
                            type="password"
                            name="password"
                          ></input>
                          <input
                            className="p-2 border rounded-lg focus:outline-lime-500 commonInputs1"
                            onChange={(evt) => {
                              this.setPass1(evt.target.value);
                            }}
                            placeholder={"Retype password"}
                            type="password"
                            name="password"
                          ></input>
                          <button
                            className="px-5 py-2 mt-3 bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-lg common2"
                            onClick={(Event) => {
                              this.signUPToserver(Event);
                            }}
                          >
                            Sign Up
                          </button>
                        </form>
                        <div className="link-text text-center">
                          Already have an account ? {" "}
                          <span className="text-lime-500 cursor-pointer" onClick={this.changeToLogin}>Login</span>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <h1 className="text-center">or Continue using</h1>
                      <div className="mt-4 flex justify-center">
                        <GoogleLogin
                          clientId="561872423103-p700sl1jeu9rhrmq2tr5n6mlodekr467.apps.googleusercontent.com"
                          className="googlesign"
                          onSuccess={this.responseGoogleSuccess}
                          onFailure={this.responseGoogleFailure}
                        />
                      </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        );

      case "2":
        return (
          <Transition appear show={this.state.open} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={() => {
                // this.setState({ open: !this.state.open });
                this.props.setOpen(!this.state.open)
              }}
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <div className="card-md Views flex flex-col gap-y-4 justify-center">
                      <h3 className="sec-head text-xl font-bold text-lime-500">Login</h3>
                      <form className="text-fields text-fields flex flex-col gap-y-4">
                        <input
                          placeholder="Enter registered email address"
                          className="p-2 border rounded-lg focus:outline-lime-500 commonInputs1"
                          onChange={(evt) => {
                            this.setEmail(evt.target.value);
                          }}
                        />
                        <input
                          placeholder="Enter password"
                          onChange={(evt) => {
                            this.setPassword(evt.target.value);
                          }}
                          type="password"
                          name="password"
                          className="p-2 border rounded-lg focus:outline-lime-500 commonInputs1"
                        />
                        <button
                          className="px-5 py-2 mt-3 bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-lg common2"
                          onClick={(Event) => {
                            this.LoginToServer(Event);
                          }}
                        >
                          Login
                        </button>
                      </form>
                      <div className="link-text text-center">
                        Create a new account. {" "}
                        <span className="text-lime-500 cursor-pointer" onClick={this.changeToSignUp}>Sign up</span>
                      </div>
                      <hr className="my-1" />

                      <h1 className="text-center">or Continue using</h1>
                      <div className="or mt-1 flex justify-center">
                        <GoogleLogin
                          clientId="561872423103-p700sl1jeu9rhrmq2tr5n6mlodekr467.apps.googleusercontent.com"
                          className="googlesign"
                          onSuccess={this.responseGoogleSuccess}
                          onFailure={this.responseGoogleFailure}
                        />
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        );
    }
  }
}
