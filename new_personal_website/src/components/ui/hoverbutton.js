import React from "react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";

function ButtonDemo({ text = "Click me", onClick }) {
  return (
    <div className="w-full">
      <Button
        onClick={onClick}
        variant="outline"
        className="w-full mt-3 bg-white text-gray-800 border border-gray-300 shadow-sm hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
      >
        {text}
      </Button>
    </div>
  );
}

ButtonDemo.propTypes = {
  text: PropTypes.string,
};

export default ButtonDemo;
