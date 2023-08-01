/* eslint-disable no-unused-vars */
import { ReactElement } from "react";

export type tableStructureItemType =
  | "date"
  | "text-long"
  | "text-short"
  | "tags"
  | "action";

export type TableStructure<T> = {
  name: string;
  actionName?: string;
  type: tableStructureItemType;
  modifier: (data: T) => any;
  action?: (data: T) => void;
  isDisabled?: boolean;
  isDisabledText?: string;
  component?: (data: T) => ReactElement;
};

export type TableDataElement<T> = {
  tableItem: TableStructure<T>;
  row: T;
  actionState?: {
    rowId: number;
  };
};
