import {
  FC,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  useState,
} from 'react';
import { InputText, InputSelect } from '@psu/web-component-atoms';
import { Button } from '@psu/web-component-atoms';
import { TMetaResponse } from '@psu/entities';
import { ChangeEventHandler, DetailedHTMLProps, HTMLAttributes } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  ColumnDef,
} from '@tanstack/react-table';
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from 'react-icons/tb';
import { parseAsInteger, useQueryState } from 'next-usequerystate';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

export type TTable<T extends Record<string, unknown>> = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
> & {
  meta?: TMetaResponse;
  handleSearch?: ChangeEventHandler<HTMLInputElement>;
  createLink?: string;
  createLabel?: string;
  createIcon?: ReactNode;
  data: Array<T>;
  columns: ColumnDef<T>[];
  createAction?: MouseEventHandler<HTMLButtonElement>;
  filter?: Array<{
    label: string;
    value: string;
  }>;
};

export type TPagination = {
  meta?: TMetaResponse;
};

export const Pagination: FC<TPagination> = (props): ReactElement => {
  const { meta } = props;
  const [page, setPage] = useQueryState('page', parseAsInteger);
  const [perPage, setPerPage] = useQueryState('perPage', parseAsInteger);

  const totalPage = Number(meta?.meta?.totalPage) || 0;
  const currentPage = Number(meta?.meta?.currentPage) || 1;
  const maxButtons = 5;
  const halfMaxButtons = Math.floor(maxButtons / 2);

  let startPage = Math.max(currentPage - halfMaxButtons, 1);
  const endPage = Math.min(startPage + maxButtons - 1, totalPage);

  if (endPage - startPage < maxButtons - 1) {
    startPage = Math.max(endPage - maxButtons + 1, 1);
  }

  return (
    <div className="flex justify-start gap-x-2">
      <Button onClick={() => setPage(1)} variantType="secondary" size="sm">
        <span className="text-grey">
          <TbPlayerTrackPrevFilled />
        </span>
      </Button>

      <Button
        onClick={() => Number(page) > 1 && setPage(Number(page) - 1)}
        variantType="secondary"
        size="sm"
      >
        <span className="text-grey">Prev</span>
      </Button>

      {Array.from({ length: Math.min(maxButtons, totalPage) }, (_, i) => (
        <Button
          onClick={() => setPage(startPage + i)}
          key={startPage + i}
          variantType={startPage + i === currentPage ? 'primary' : 'secondary'}
          size="sm"
        >
          <span
            className={
              startPage + i === currentPage ? 'text-white' : 'text-grey'
            }
          >
            {startPage + i}
          </span>
        </Button>
      ))}

      <Button
        onClick={() =>
          Number(page) < Number(meta?.meta?.totalPage) &&
          setPage(Number(page) + 1)
        }
        variantType="secondary"
        size="sm"
      >
        <span className="text-grey">Next</span>
      </Button>

      <Button
        onClick={() => setPage(Number(meta?.meta?.totalPage))}
        variantType="secondary"
        size="sm"
      >
        <span className="text-grey">
          <TbPlayerTrackNextFilled />
        </span>
      </Button>
    </div>
  );
};

export const DataTable = <T extends Record<string, unknown>>(
  props: TTable<T>
): ReactElement => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });
  return (
    <section className="shadow-md bg-white h-fit overflow-y-hidden  p-4 rounded-lg w-full gap-y-4 flex flex-col overflow-x-auto">
      <h1 className="text-lg font-semibold">{props.title}</h1>
      <div className="flex md:flex-row flex-col md:gap-x-3 gap-y-4 md:items-center sticky z-10 w-full md:justify-between">
        <div className="flex md:flex-row flex-col md:gap-x-3 gap-y-4 md:items-center">
          <div className="w-fit">
            <InputText
              size="sm"
              placeholder="Cari nama kegiatan"
              onChange={props.handleSearch}
            />
          </div>
          {props.createLink && (
            <div>
              <Button href={props.createLink} variant="primary" size="md">
                {props.createLabel}
              </Button>
            </div>
          )}

          {props.createAction && (
            <div>
              <Button onClick={props.createAction} variant="primary" size="md">
                <span className="flex items-center gap-x-1">
                  {props.createIcon}
                  {props.createLabel}
                </span>
              </Button>
            </div>
          )}
        </div>
        <div>
          <InputSelect
            options={props.filter}
            placeholder="Pilih Opsi"
            size="lg"
          />
        </div>
      </div>
      <div className="overflow-x-auto min-w-max w-full h-fit flex bg-white shadow-md  relative">
        <table
          {...props}
          className="p-2 w-full table-auto border-collapse rounded-lg"
        >
          <thead className="bg-primary p-2 w-auto h-auto">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="text-white py-2 px-4 text-left text-sm select-none"
                    key={header.id}
                  >
                    <div
                      {...{
                        className: 'flex items-center',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}

                      {{
                        asc: (
                          <IoMdArrowDropup
                            size="1.5em"
                            style={{ marginLeft: '2px' }}
                          />
                        ),
                        desc: (
                          <IoMdArrowDropdown
                            size="1.5em"
                            style={{ marginLeft: '2px' }}
                          />
                        ),
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="even:bg-grey-100 odd:bg-grey-50">
                {row.getVisibleCells().map((cell, index) => (
                  <td
                    key={index}
                    className="p-4 text-grey-600 font-normal text-sm"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {props.meta && props?.data?.length > 0 && <Pagination {...props} />}
    </section>
  );
};
