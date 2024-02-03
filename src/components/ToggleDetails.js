function ToggleDetails({ handleToggle }) {
  return (
    <div className="toggle-details flex-row-center">
      <label className="switch">
        <input onClick={handleToggle} type="checkbox" />
        <span className="slider"></span>
      </label>
      <span className="toggle-text">Details</span>
    </div>
  );
}

export default ToggleDetails;