import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./BudgetTable.css";

const BudgetTable = ({
  arrayForBudgetTable,
  rowClassName,
  selectedBudgetItem,
  tableSelectedChange,
  handleItemDelete,
  amountTemplate,
  dateTemplate,
  exportBudget,
  createRef,
  editDesc
}) => {
  return (
    <Card style={{ marginBottom: 20 }} className="tableCard">
      <CardContent>
        <div className="d-flex">
          <div className="tableHeader">
            <Typography
              className="dashtext"
              variant="h4"
              color="textPrimary"
              gutterBottom
            >
              Budget Table
            </Typography>
          </div>
          <div className="buttonContainer ml-auto">
            <Button
              variant="contained"
              className="button csvButton"
              color="secondary"
              onClick={exportBudget}
            >
              EXPORT CSV
            </Button>
          </div>
        </div>
        <Typography className="tableHeader" color="textSecondary" gutterBottom>
          Click on headers to sort
        </Typography>
        <Typography className="tableHeader" color="textSecondary" gutterBottom>
          Double click on corresponding table row to delete a budget item
        </Typography>
        <DataTable
          ref={createRef}
          className="budget-table"
          paginator={true}
          rows={15}
          tableStyle={{ width: "100%" }}
          value={arrayForBudgetTable}
          rowClassName={rowClassName}
          selectionMode="single"
          selection={selectedBudgetItem}
          onSelectionChange={tableSelectedChange}
          onRowDoubleClick={handleItemDelete}
        >
          <Column
            className="table-data"
            field="date"
            sortable="true"
            header="Date"
            body={dateTemplate}
          />
          <Column
            className="table-data"
            field="description"
            header="Description"
            sortable="true"
          />
          <Column
            className="table-data"
            field="amount"
            sortable="true"
            header="Amount"
            body={amountTemplate}
          />
          <Column
            className="table-data"
            field="category"
            header="Category"
            sortable="true"
          />
          <Column
            className="table-data"
            field="income"
            header="Income"
            sortable="true"
          />
        </DataTable>
      </CardContent>
    </Card>
  );
};

export default BudgetTable;
