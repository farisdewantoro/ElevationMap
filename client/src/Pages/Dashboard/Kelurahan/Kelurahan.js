import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Paper,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableFooter,
  Typography,
  Grid,
} from "@material-ui/core";
import { dataKelurahan } from "../../../Mock/Data-Kelurahan";
import { contentStyles } from "../ContentStyle";

const Kelurahan = () => {
  const classes = contentStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Container className={classes.content} component={Paper}>
        <Grid container>
            <Grid item xs={6}>
              <Typography variant="h4">Kelurahan </Typography>
            </Grid>
            <Grid item xs={6}>
                <Button color="primary" variant="contained" className={classes.addBtn} size="small">Tambah Data</Button>
                <small>ENGKE DEUI AH TUNDUH</small>
            </Grid>
          </Grid>

        <Divider />
        <Box component="div" mt={2}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableColHeader} align="left">
                    No
                  </TableCell>
                  <TableCell className={classes.tableColHeader} align="left">
                    Nama Kelurahan
                  </TableCell>
                  <TableCell className={classes.tableColHeader} align="left">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataKelurahan
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((kelurahan, i) => (
                    <TableRow key={kelurahan.value}>
                      <TableCell component="th" scope="row">
                        {kelurahan.no + 1}
                      </TableCell>
                      <TableCell align="left">{kelurahan.label}</TableCell>
                      <TableCell align="left">
                        <ButtonGroup
                          variant="contained"
                          aria-label="contained button group"
                          size="small"
                        >
                          <Button color="primary">Edit</Button>
                          <Button color="secondary">Delete</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TableFooter>
              <TablePagination
                rowsPerPageOptions={[4, 8, 12]}
                component="div"
                count={dataKelurahan.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableFooter>
          </TableContainer>
        </Box>
      </Container>

      {/* <div>
            TABLE KELURAHAN
            FILTER
        </div>
        <div>
            CREATE
            <ul>
                <li>NAMA KELURAHAN</li>
                <li>FILE : IMAGE ELEVATION KECIL</li>
                <li>FILE : PETA KECIL</li>
                <li>FILE : IMAGE</li>
            </ul>
            EDIT
            <ul>
                <li>NAMA KELURAHAN</li>
                <li>FILE : IMAGE ELEVATION KECIL (Optional)</li>
                <li>FILE : PETA KECIL (Optional)</li>
                <li>FILE : IMAGE (Optional)</li>
            </ul>
        </div> */}
    </>
  );
};

export default Kelurahan;
