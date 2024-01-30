function ToggleDetails({ handleToggle }) {
  return (
    <div className="toggle-details flex-row-center">
      <label class="switch">
        <input onClick={handleToggle} type="checkbox" />
        <span class="slider"></span>
      </label>
      <span className="toggle-text">Details</span>
    </div>
  );
}

export default ToggleDetails;