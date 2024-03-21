'use client';
import { Button } from '@psu/web-component-atoms';
import { Form } from '@psu/web-component-templates';
import { ControlledFieldText } from '@psu/web-component-organisms';
import { useForm } from 'react-hook-form';
import { TLoginRequest } from '@psu/entities';
import { FC, ReactElement, useEffect, useState } from 'react';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';

const schema = z.object({
  email: z.string().email({ message: 'Email tidak valid' }),
  password: z
    .string({ required_error: 'Kata sandi wajib diisi' })
    .min(1, { message: 'Kata sandi wajib diisi' }),
});

export const AuthLoginModule: FC = (): ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TLoginRequest>({
    resolver: zodResolver(schema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.ok) {
        router.push('/dashboard');
      }

      if (res?.error) {
        setError(res?.error);
        console.log(res?.error);
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  });

  useEffect(() => {
    setTimeout(() => {
      setError(undefined);
    }, 5000);
  }, [error]);

  const TogglePassword = () => {
    return (
      <span
        className="cursor-pointer"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? <FaEye /> : <FaEyeSlash />}
      </span>
    );
  };

  return (
    <section className="bg-white rounded-l-2xl p-2 md:p-6 min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-2 mb-10 lg:hidden">
        <Image src="/assets/logo.svg" alt="logo" width={75} height={75} />
        <h1 className="text-2xl md:text-3xl font-bold text-black text-center">
          WISATA DESA BOJONGSARI
        </h1>
      </div>
      <Form
        onSubmit={onSubmit}
        className="shadow-none w-full sm:w-[50dvw] lg:w-[35dvw] border p-3 md:p-10 rounded-lg"
      >
        <h1 className="text-center text-3xl font-semibold">Login</h1>
        {error && (
          <span className="text-error bg-error-50 border-error border rounded-lg p-3">
            {error}
          </span>
        )}
        <section className="flex flex-col gap-y-3 mt-[18px]">
          <ControlledFieldText
            control={control}
            name="email"
            type="email"
            size="md"
            placeholder="Email"
            status={errors.email ? 'error' : 'default'}
            message={errors.email?.message}
          />
          <ControlledFieldText
            control={control}
            name="password"
            size="md"
            type={isVisible ? 'text' : 'password'}
            placeholder="Kata Sandi"
            append={<TogglePassword />}
          />
        </section>
        <div className="w-full my-4 flex justify-start">
          <Link
            href="/auth/forgot"
            className="font-semibold text-sm text-gray hover:text-black"
          >
            Lupa Kata Sandi?
          </Link>
        </div>
        <div className="flex justify-center px-8">
          <Button
            disabled={isValid || isLoading}
            type="submit"
            size="lg"
            className="bg-primary w-full py-2 text-white rounded-md hover:bg-primary-60% active:bg-primary-90% font-medium transition-all disabled:cursor-not-allowed disabled:hover:opacity-100 disabled:bg-primary-10% disabled:text-neutral-10%"
          >
            Masuk
          </Button>
        </div>
      </Form>
    </section>
  );
};
