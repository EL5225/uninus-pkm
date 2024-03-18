'use client';
import { FC, ReactElement } from 'react';
import { DataTable } from '@psu/web-component-organisms';
import { ColumnDef } from '@tanstack/react-table';
import {
  parseAsInteger,
  parseAsString,
  useQueryState,
} from 'next-usequerystate';
import { Button } from '@psu/web-component-atoms';
import { FaRegEdit } from 'react-icons/fa';
export const ActivityModule: FC = (): ReactElement => {
  const [page] = useQueryState('page', parseAsInteger.withDefault(1));
  const [search, setSearch] = useQueryState(
    'search',
    parseAsString.withDefault('')
  );
  const data = [
    {
      name: 'Webinar : Digital skill',
      periode: '20/02/2024 13.00 - 20/02/2024 14.00',
      status: 'sudah dilaporkan',
    },
  ];
  const columns: ColumnDef<any>[] = [
    {
      header: 'No',
      accessorKey: 'no',
      cell: ({ row }) => row.index + 1,
    },
    {
      header: 'Nama Kegiatan',
      accessorKey: 'name',
    },
    {
      header: 'Periode Kegiatan',
      accessorKey: 'periode',
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: ({ getValue }) => {
        const value = String(getValue<string>());
        return value === 'sudah dilaporkan' ? (
          <div className="bg-primary-200 text-primary-600 text-center w-full px-2 py-1 rounded-lg text-sm font-medium">
            Sudah Dilaporkan
          </div>
        ) : (
          <div className="bg-error-200 text-error-600 text-center w-full px-2 py-1 rounded-lg text-sm font-medium">
            Belum Dilaporkan
          </div>
        );
      },
    },
    {
      header: 'Aksi',
      cell: ({ row }) => {
        return (
          <section>
            <Button variant="secondary" size={'sm'}>
              <span className="flex items-center gap-x-1 text-grey-900">
                <FaRegEdit />
                Unggah Laporan
              </span>
            </Button>
          </section>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col h-full gap-y-6 mt-8 w-full">
      <DataTable
        data={data || []}
        columns={columns}
        handleSearch={(e) => setSearch(e.target.value)}
        meta={{
          meta: {
            totalPage: 10,
            total: 10,
            lastPage: 10,
            currentPage: 1,
            perPage: 1,
          },
        }}
      />
    </div>
  );
};
