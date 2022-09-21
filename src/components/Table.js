import React, { Fragment } from "react";
import {
  useTable,
  useGlobalFilter,
  useRowSelect,
  useExpanded,
} from "react-table";

import Menu from "@mui/material/Menu";

import { List, ListItem, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import emptyIllustration from "../assets/images/emptyIllustration.svg";
import search from "../assets/images/search.svg";
import filter from "../assets/images/Filter.svg";
import PaginationControlled from "./forms/pagination";
import Text from "./Typography/Typography";

import ButtonDropdown from "../components/ButtonDropdown";

const Table = ({
  columns: userColumns,
  data,
  totalNumberOfPages,
  page,
  FormElement,
  formProps,
  handlePaginationChange,
  children,
  placeholder,
  isLoading,
  errorMessage,
  showChecked,
  ifExport = false,
  ifFilter = true,
  exportFunction,
  removePaginationAndFiltering = false,
  handleSearch,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: userColumns,
        data,
      },
      useGlobalFilter,
      useExpanded,
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((columns) => [
          // Let's make a column for selection
          {
            id: "selection",
            // The header can use the table's getToggleAllRowsSelectedProps method
            // to render a checkbox
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                {showChecked && (
                  <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                )}
              </div>
            ),
            // The cell can use the individual row's getToggleRowSelectedProps method
            // to the render a checkbox
            Cell: ({ row }) => (
              <div>
                {showChecked && (
                  <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                )}
              </div>
            ),
          },
          ...columns,
        ]);
      }
    );

  // Checkbox function
  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef();
      const resolvedRef = ref || defaultRef;

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      );
    }
  );

  const renderItem = () => {
    if (isLoading) {
      // <div className="lds-roller">
      //   <div></div>
      //   <div></div>
      //   <div></div>
      //   <div></div>
      //   <div></div>
      //   <div></div>
      //   <div></div>
      //   <div></div>
      // </div>;
    } else if (errorMessage) {
      return (
        <div className="w-full flex justify-center">
          {/* <Text variant="h3" color="font-bold not-italic">
            {errorMessage}
          </Text> */}
        </div>
      );
    } else {
      return (
        <>
          <tbody className="w-full " {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <Fragment key={i}>
                  <tr
                    key={row.id}
                    className="table-style"
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell, i) => {
                      return (
                        <Fragment key={i}>
                          <td
                            key={row.id}
                            className="border-t border-BUTTON_FILLED p-4"
                            {...cell.getCellProps()}
                          >
                            {cell.render("Cell")}
                          </td>
                        </Fragment>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </>
      );
    }
  };
  // overflow-x-auto we might need to put this back on the table
  return (
    <div className="py-2 w-full overflow-x-auto bg-white rounded-1xl p-4 whitespace-nowrap">
      <div className="w-full px-2 pb-6">{children}</div>
      {!removePaginationAndFiltering && (
        <div className="flex items-center w-full mt-2">
          <div className="" style={{ width: "95%" }}>
            <span className="px-2 font-normal focus:outline-none relative ml-1">
              <img
                src={search}
                alt="search"
                className="absolute left-3 top-1 w-4 h-4 ml-2"
                loading="lazy"
              />
              <input
                onKeyDown={(e) => handleSearch(e)}
                placeholder={placeholder}
                className="text-TITLE text-xs outline-none bg-NEUTRAL-_100 rounded-md pl-10 p-3"
                style={{ width: "100%" }}
              />
              <img
                src={filter}
                alt="filter"
                onClick={handleClick}
                className="absolute right-8 top-1 w-4 h-4 mr-2 cursor-pointer"
                loading="lazy"
              />
              <Text
                variant="sub"
                format="absolute right-3 top-1 w-4 h-4 mr-2 cursor-pointer"
              >
                Filter
              </Text>
            </span>
          </div>
          {ifFilter && (
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              transformOrigin={{ horizontal: "left", vertical: "top" }}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1,
                },
              }}
            >
              <div className="flex justify-between mx-6">
                <Text variant="h3" format="mr-4 mt-2 font-bold">
                  Filter
                </Text>
                <IconButton onClick={handleClose}>
                  <Close fontSize="small" />
                </IconButton>
              </div>
              <List>
                <ListItem className="mb-2 p-3">
                  {FormElement && <FormElement {...formProps} handleClose={handleClose} />}
                </ListItem>
              </List>
            </Menu>
          )}
          {/* <div className={`${!ifExport ? "hidden" : ""}`}>{ifExport && <ButtonDropdown />}</div> */}
        </div>
      )}

      <table className="w-full" {...getTableProps()} border="1">
        <thead className="w-full">
          {headerGroups.map((headerGroup, id) => (
            <tr key={id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, id) => (
                <th
                  key={id}
                  className="p-4 text-left font-bold text-sm text-TITLE uppercase"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {renderItem()}
      </table>
      {!removePaginationAndFiltering && data.length > 0 && !isLoading && (
        <div className="flex justify-end pt-3">
          <PaginationControlled
            handlePaginationChange={handlePaginationChange}
            totalNumberOfPages={totalNumberOfPages}
            page={page}
          />
        </div>
      )}
      {isLoading && (
        <div className="w-full flex flex-column justify-center items-center h-52">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {data.length < 1 && !isLoading && (
        <div className="w-full flex justify-center mt-4">
          <Text variant="h3" color="text-RED-_500 font-bold not-italic">
            {errorMessage}
          </Text>
        </div>
      )}

      {data.length < 1 && !isLoading && (
        <div className="flex flex-col items-center">
          <img src={emptyIllustration} alt="empty" className="w-40 h-40" />
          <Text variant="body" format="text-NEUTRAL-_000">
            Empty Table
          </Text>
        </div>
      )}
    </div>
  );
};

export default Table;
