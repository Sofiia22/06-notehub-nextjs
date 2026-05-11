"use client";

import type { ComponentType } from "react";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";
import css from "./Pagination.module.css";

type ModuleWithDefault<T> = {
  default: T;
};

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

interface PaginationProps {
  totalPages: number;
  page: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  page,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={page - 1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      containerClassName={css.pagination}
      activeClassName={css.active}
      pageClassName={css.page}
      previousClassName={css.page}
      nextClassName={css.page}
      disabledClassName={css.disabled}
      previousLabel="<"
      nextLabel=">"
    />
  );
}
