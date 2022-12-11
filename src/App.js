import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DummyData } from "./Page/data";
function App() {
  const [data, setData] = React.useState(DummyData);
  const [state, setState] = React.useState();
  const [sortState, setSortState] = React.useState();

  const options = ["Default", "Sort By ASC", "Sort By DESC"];

  const data2 = [...DummyData].sort((a, b) =>
    a.first_name.toLowerCase() < b.first_name.toLowerCase() ? -1 : 1
  );
  const data3 = [...DummyData].sort((a, b) =>
    b.first_name.toLowerCase() < a.first_name.toLowerCase() ? -1 : 1
  );
  const handleSorting = (opt) => {
    setSortState(opt);
    if (sortState === "Sort By ASC") {
      setData(data2);
    } else if (sortState === "Sort By DESC") {
      setData(data3);
    } else {
      setData(DummyData);
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                first_name{" "}
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
              <TableCell>last_name</TableCell>
              <TableCell>email</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>ip_address</TableCell>
              <TableCell>airport_code</TableCell>
              <TableCell>time</TableCell>
              <TableCell>status</TableCell>
              <TableCell>mobile</TableCell>
              <TableCell>area</TableCell>
              <TableCell>show</TableCell>
              <TableCell>edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow
                onClick={() => setState(index)}
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: state == index ? "yellow" : "",
                }}
              >
                {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.first_name}</TableCell>
                <TableCell align="right">{row.last_name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.ip_address}</TableCell>
                <TableCell align="right">{row.airport_code}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell
                  align="right"
                  style={{ color: row.status ? "green" : "red" }}
                >
                  {row.status ? "True" : "False"}
                </TableCell>
                <TableCell align="right">{row.mobile}</TableCell>
                <TableCell align="right">{row.area}</TableCell>
                <TableCell align="right">
                  {row.show ? "True" : "False"}
                </TableCell>
                <TableCell align="right">
                  {row.edit ? "True" : "False"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={() => handleSorting(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default App;
