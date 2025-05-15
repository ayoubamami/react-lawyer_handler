import { useState } from "react";
import "../css/Sessions.css"; 


function Sessions() {
  const columnHeaders = [
    "caseNum",
    "caseType",
    "caseRes",
    "for",
    "against",
    "caseDate",
    "court",
    "courtPlace"
  ];

  const emptyRow = {
    caseNum: "",
    caseType: "",
    caseRes: "",
    for: "",
    against: "",
    caseDate: "",
    court: "",
    courtPlace: ""
  };

  const [rows, setRows] = useState([emptyRow]);

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([...rows, { ...emptyRow }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted sessions:", rows);
  };

  return (
    <div className="sessions-container">
      <h2 className="sessions-title">Sessions</h2>

      <form onSubmit={handleSubmit}>
        <div className="table-wrapper">
          <table className="sessions-table">
            <thead>
              <tr>
                {columnHeaders.map((header) => (
                  <th key={header} className="table-header">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columnHeaders.map((field) => (
                    <td key={field} className="table-cell">
                      <input
                        type={field === "caseDate" ? "date" : "text"}
                        name={field}
                        value={row[field]}
                        onChange={(e) =>
                          handleChange(rowIndex, field, e.target.value)
                        }
                        className="input-field"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="button-row">
          <button type="button" onClick={addRow} className="btn add-btn">
            Add Row
          </button>
          <button type="submit" className="btn submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Sessions;


