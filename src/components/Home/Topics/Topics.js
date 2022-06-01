import "./Topics.scss";

function Topics({ type }) {
  return (
    <div className="topics-container-header">
      <p>{type}</p>
    </div>
  );
}

export default Topics;
