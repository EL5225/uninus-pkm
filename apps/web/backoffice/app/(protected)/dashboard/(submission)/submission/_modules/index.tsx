'use client';
import { FC, Fragment, ReactElement, useState } from 'react';
import {
  ControlledFieldText,
  ControlledFieldTextArea,
  DataTable,
  Modal,
} from '@psu/web-component-organisms';
import { ColumnDef } from '@tanstack/react-table';
import {
  parseAsInteger,
  parseAsString,
  useQueryState,
} from 'next-usequerystate';
import { IoDocumentText, IoEyeSharp } from 'react-icons/io5';
import { Button } from '@psu/web-component-atoms';
import { Form } from '@psu/web-component-templates';
import { FaRegEdit } from 'react-icons/fa';
import { useCreateActivity, useGetSubmission } from '@psu/web-modules';
import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
export const SubmissionModule: FC = (): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page] = useQueryState('page', parseAsInteger.withDefault(1));
  const [perPage] = useQueryState('per_page', parseAsInteger.withDefault(10));
  const [search, setSearch] = useQueryState(
    'search',
    parseAsString.withDefault('')
  );
  const { mutate } = useCreateActivity();
  const { data, isLoading, refetch } = useGetSubmission({
    page: String(page),
    perPage: String(perPage),
    search: search,
  });
  // const schema = z.object({
  //   name: z.string().min(1, { message: 'Nama kegiatan harus diisi' }),
  //   lead: z
  //     .string()

  // });
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    // resolver: zodResolver(schema),
    mode: 'all',
  });

  console.log(data);
  const onSubmit = handleSubmit(async (data) => {
    try {
      mutate(
        {
          name: data.name,
          lead: data.lead,
          description: data.description,
          location: data.location,
          startDate: data.startDate,
          endDate: data.endDate,
          budget: data.budget,
        },
        {
          onSuccess: () => {
            refetch();
            setIsModalOpen(false);
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
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
        if (value === 'berlangsung') {
          return (
            <div className="bg-primary-200 text-primary-600 text-center w-full px-2 py-1 rounded-lg text-sm font-medium">
              Berlangsung
            </div>
          );
        } else if (value === 'disetujui kemahasiswaan') {
          return (
            <div className="bg-secondary-200 text-secondary-600 text-center w-full px-3 py-1 rounded-lg text-sm font-medium">
              Disetujui Kemahasiswaan
            </div>
          );
        } else if (value === 'revisi') {
          return (
            <div className="bg-secondary-300 text-secondary-700 text-center w-full px-2 py-1 rounded-lg text-sm font-medium">
              Revisi
            </div>
          );
        } else if (value === 'ditolak') {
          return (
            <div className="bg-error-200 text-error-600 text-center w-full px-2 py-1 rounded-lg text-sm font-medium">
              Ditolak
            </div>
          );
        } else {
          return (
            <div className="bg-info-200 text-info-600 text-center w-full px-2 py-1 rounded-lg text-sm font-medium">
              Disetujui
            </div>
          );
        }
      },
    },
    {
      header: 'Aksi',
      cell: ({ row }) => {
        return (
          <section className="flex gap-x-2">
            <Button variant={'primary'} size={'sm'}>
              <span className="flex items-center gap-x-1">
                <IoEyeSharp />
                Lihat Detail
              </span>
            </Button>
            <Button variant="secondary" size={'sm'}>
              <span className="flex items-center gap-x-1 text-grey-900">
                <FaRegEdit />
                Revisi
              </span>
            </Button>
          </section>
        );
      },
    },
  ];

  return (
    <Fragment>
      <div className="flex flex-col h-full w-full gap-y-6 mt-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <DataTable
            createAction={() => {
              setIsModalOpen(!isModalOpen);
            }}
            createIcon={<IoDocumentText />}
            createLabel={'Buat Pengajuan'}
            data={data as []}
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
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        width="602px"
        height="578px"
        header={true}
        title="Buat Pengajuan"
        onClose={() => setIsModalOpen(false)}
      >
        <Form className="flex flex-col gap-y-3" onSubmit={onSubmit}>
          <ControlledFieldText
            control={control}
            name="name"
            type="text"
            size="sm"
            label="Nama Kegiatan/event"
            placeholder="Masukkan nama kegiatan"
            required
          />
          <ControlledFieldText
            control={control}
            name="lead"
            type="text"
            size="sm"
            label="Nama ketua Pelaksana"
            placeholder="Masukkan nama ketua pelaksana"
            required
          />
          <ControlledFieldText
            control={control}
            name="location"
            type="text"
            size="sm"
            label="Lokasi"
            placeholder="Masukkan ruangan yang akan dipinjam/luar kampus"
            required
          />
          <ControlledFieldText
            control={control}
            name="startDate"
            type="date"
            size="sm"
            label="Waktu kegiatan dimulai"
            placeholder="Masukkan waktu kegiatan"
            required
          />
          <ControlledFieldText
            control={control}
            name="endDate"
            type="date"
            size="sm"
            label="Waktu kegiatan berakhir"
            placeholder="Masukkan waktu kegiatan berakhir"
            required
          />
          <ControlledFieldText
            control={control}
            name="budget"
            type="text"
            size="sm"
            label="Estimasi Dana Yang dibutuhkan"
            placeholder="Masukkan estimasi dana"
            required
          />
          <ControlledFieldTextArea
            control={control}
            name="description"
            size="md"
            label="Deskripsi kegiatan"
            placeholder="Masukkan deskripsi kegiatan"
            required
          />
          <Button variant="primary">Submit</Button>
        </Form>
      </Modal>
    </Fragment>
  );
};
