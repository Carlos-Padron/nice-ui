import React from "react";

const VocabularyScreen = () => {
  return (
    <div className="header my-8  ">
      <h1 className="text-xl font-bold w-full sm:w-6/12">Vocabulary</h1>
      <h3 className="text-sm font-normal mt-1 text-slate-400 w-full sm:w-6/12">
        Custom vocabulary helps us when transcribing technical terms, proper
        nouns such as a company name or your cat's nickname.
      </h3>

      <h1 className="text-md mt-5 font-bold w-full sm:w-6/12 text-slate-600">
        Add words
      </h1>
      <div className="w-full sm:w-6/12 mt-2">
        <textarea
          className="textarea textarea-primary w-full"
          rows="3"
          placeholder="word 1&#10;word 2 &#10;..."
        ></textarea>
      </div>
      <div className="w-full sm:w-6/12 mt-2">
        <button className="btn btn-primary btn-sm text-white ">Save changes</button>
      </div>
    </div>
  );
};

export default VocabularyScreen;
