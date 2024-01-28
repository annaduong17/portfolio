function ToggleDetails({ handleToggle }) {
  return (
    <div className="toggle-details">
      <label class="switch">
        <input onClick={handleToggle} type="checkbox" />
        <span class="slider"></span>
      </label>
      <span className="toggle-text">Details</span>
    </div>
  );
}

export default ToggleDetails;