function ToggleDetails({ handleToggle }) {
  return (
    <div>
      <span>Images</span>
      <span onClick={handleToggle}>[Toggle Switch]</span>
      <span>Details</span>
    </div>
  );
}

export default ToggleDetails;