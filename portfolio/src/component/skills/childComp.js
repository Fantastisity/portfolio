import react from "react";

export default function ChildComponent({ data }) {
  return (
    <div
      className="childComponent"
    >
      {data}
    </div>
  );
}