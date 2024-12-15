"use client";
import React, { useState } from "react";

const PopPage = ({ onClose }) => {
  const [progress, setProgress] = useState(25); // Progress in percentage (out of 100)
  const [selectedOption, setSelectedOption] = useState(""); // For frequency (Just once, Every week, etc.)
  const [selectedBedroom, setSelectedBedroom] = useState(""); // For number of bedrooms
  const [selectedTimeline, setSelectedTimeline] = useState(""); // For service timeline
  const [currentStep, setCurrentStep] = useState(1); // Track the current step (1 = frequency, 2 = bedrooms, 3 = timeline)

  const handleNext = () => {
    if (currentStep === 1 && selectedOption) {
      setCurrentStep(2); // Move to the next step (bedroom selection)
      setProgress(50); // Set progress to 50% after the first step
    } else if (currentStep === 2 && selectedBedroom) {
      setCurrentStep(3); // Move to the timeline selection
      setProgress(75); // Set progress to 75% after the bedroom selection
    } else if (currentStep === 3 && selectedTimeline) {
      setProgress(100); // Set progress to 100% when all selections are made
    } else {
      alert("Please select an option!");
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1); // Go back to the first step (frequency selection)
      setProgress(25); // Reset progress to 25% when going back
    } else if (currentStep === 3) {
      setCurrentStep(2); // Go back to the second step (bedroom selection)
      setProgress(50); // Reset progress to 50%
    }
  };

  const handleSkip = () => {
    // When the skip button is clicked, move to the next step.
    if (currentStep === 1) {
      setCurrentStep(2); // Skip to bedroom selection
      setProgress(50); // Set progress to 50%
    } else if (currentStep === 2) {
      setCurrentStep(3); // Skip to timeline selection
      setProgress(75); // Set progress to 75%
    } else if (currentStep === 3) {
      setProgress(100); // Skip directly to completion
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handleBack}
            className={`text-gray-600 hover:text-gray-800 text-lg font-bold ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentStep === 1} // Disable the back button on the first step
          >
            &larr; {/* Left Arrow */}
          </button>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-lg font-bold"
          >
            &times; {/* Close Icon */}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-black h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Content based on current step */}
        {currentStep === 1 ? (
          <>
            <h2 className="text-lg font-semibold mb-4">How often do you need the service?</h2>

            {/* Service frequency options */}
            <div className="space-y-4">
              {["Just once", "Every week", "Every 2 weeks", "Once a month"].map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center space-x-2 border ${
                    selectedOption === option ? "border-blue-500" : "border-gray-300"
                  } p-2 rounded-lg cursor-pointer`}
                >
                  <input
                    type="radio"
                    name="frequency"
                    value={option}
                    className="hidden"
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex justify-center items-center ${
                      selectedOption === option
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-400"
                    }`}
                  >
                    {selectedOption === option && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </>
        ) : currentStep === 2 ? (
          <>
            {/* Bedroom selection options */}
            <h2 className="text-lg font-semibold mb-4">How many bedrooms are there?</h2>

            <div className="space-y-4">
              {["1", "2", "3", "4", "5"].map((bedroom, index) => (
                <label
                  key={index}
                  className={`flex items-center space-x-2 border ${
                    selectedBedroom === bedroom ? "border-blue-500" : "border-gray-300"
                  } p-2 rounded-lg cursor-pointer`}
                >
                  <input
                    type="radio"
                    name="bedroom"
                    value={bedroom}
                    className="hidden"
                    checked={selectedBedroom === bedroom}
                    onChange={() => setSelectedBedroom(bedroom)}
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex justify-center items-center ${
                      selectedBedroom === bedroom
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-400"
                    }`}
                  >
                    {selectedBedroom === bedroom && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-gray-700">{bedroom} Bedroom{bedroom > 1 ? "s" : ""}</span>
                </label>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Timeline options */}
            <h2 className="text-lg font-semibold mb-4">When would you like the service?</h2>

            <div className="space-y-4">
              {["Within 48 hours", "Within a week", "Flexible on timeline", "Specific date"].map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center space-x-2 border ${
                    selectedTimeline === option ? "border-blue-500" : "border-gray-300"
                  } p-2 rounded-lg cursor-pointer`}
                >
                  <input
                    type="radio"
                    name="timeline"
                    value={option}
                    className="hidden"
                    checked={selectedTimeline === option}
                    onChange={() => setSelectedTimeline(option)}
                  />
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex justify-center items-center ${
                      selectedTimeline === option
                        ? "border-blue-500 bg-blue-500"
                        : "border-gray-400"
                    }`}
                  >
                    {selectedTimeline === option && (
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </>
        )}

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            onClick={handleSkip} // Skip button functionality
          >
            Skip
          </button>
          <button
            onClick={handleNext}
            className={`bg-black text-white px-4 py-2 rounded-lg ${
              (selectedOption && currentStep === 1) ||
              (selectedBedroom && currentStep === 2) ||
              (selectedTimeline && currentStep === 3)
                ? "hover:bg-gray-800"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopPage;
