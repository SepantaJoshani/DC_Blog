import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "../../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStore, setLocalStore] = useState(null);
  const [successMsg, setSuccessMsg] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const storedDataRef = useRef();
  const commentRef = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      nameRef.current.value = window.localStorage.getItem("name");
      emailRef.current.value = window.localStorage.getItem("email");
    }

    return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const comment = commentRef.current.value;
    const storedData = storedDataRef.current.checked;

    if (!email || !name || !comment) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (typeof window !== "undefined") {
      // browser code
      if (storedData) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      } else {
        localStorage.removeItem("name", name);
        localStorage.removeItem("email", email);
      }
    }

    submitComment(commentObj)
      .then((res) => {
        setSuccessMsg(true);
        setTimeout(() => {
          setSuccessMsg(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg ">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">Comments</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentRef}
          className="w-full p-4 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
          <input
            type="text"
            ref={nameRef}
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            ref={emailRef}
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          {/* Checkbox */}
          <div>
            <input
              type="checkbox"
              ref={storedDataRef}
              id="storedData"
              name="storedData"
              value={true}
            />
            <label
              className="ml-2 text-gray-500 cursor-pointer"
              htmlFor="storedData"
            >
              Save my informations
            </label>
          </div>
        </div>
        {error && (
          <p className="text-xs text-red-500">All fields are required.</p>
        )}
        <div className="flex justify-center mt-8 md:justify-start">
          <button
            className="px-6 py-2 text-lg text-white transition duration-500 bg-pink-600 rounded-full cursor-pointer md:px-8 md:py-3 ease hover:bg-indigo-900 "
            type="submit"
          >
            Send Comment
          </button>
          {successMsg && (
            <span className="float-right mt-3 text-xl font-semibold text-green-500">
              Comment submitted
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4"></div>
      </form>
    </div>
  );
};

export default CommentsForm;
