import "./Topics.scss";

function Topics({ type, filterFunc }) {
  return (
    <div className="topics-container-header">
      <p onClick={filterFunc} id={type}>
        {type}
      </p>
    </div>
  );
}

export default Topics;
