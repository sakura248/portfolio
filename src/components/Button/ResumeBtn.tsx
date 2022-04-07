import React from "react";
import { FiDownload } from "react-icons/fi";
import { Resume } from "./resumebtn.styles";

function ResumeBtn() {
  return (
    <Resume
      type="button"
      download
      href="/assets/resume/SakuraNishiya_Resume.pdf"
      className="resume"
    >
      <FiDownload />
      Resume
    </Resume>
  );
}

export default ResumeBtn;
