import { useState } from "react";
import "../css/Clients.css"; // Import the CSS file

function Clients() {
  const columnHeaders = ["id", "name", "contact", "payment"];

  const emptyRow = {
    id: "",
    name: "",
    contact: "",
    payment: "",
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
    console.log("Submitted clients:", rows);
  };

  return (
    <div className="clients-container">
      <h2 className="clients-title">Clients</h2>

      <form onSubmit={handleSubmit}>
        <div className="table-wrapper">
          <table className="clients-table">
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
                        type="text"
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

export default Clients;