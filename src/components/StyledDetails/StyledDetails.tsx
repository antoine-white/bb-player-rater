import React from "react";
import { getChildrenOnDisplayName } from "../../utils/react";
import "./StyledDetails.css";

function StyledDetails({ children }: React.PropsWithChildren) {
  const summary = getChildrenOnDisplayName(children, Summary.name);
  const body = getChildrenOnDisplayName(children, Body.name);

  return (
    <details className="styled-details">
      <summary>{summary}</summary>
      <article>{body}</article>
    </details>
  );
}

const Summary = ({ children }: React.PropsWithChildren) => children;
const Body = ({ children }: React.PropsWithChildren) => children;

StyledDetails.Summary = Summary;
StyledDetails.Body = Body;

export default StyledDetails;
