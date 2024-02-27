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
import { useForgot } from '@psu/web-auth';

const schema = z.object({
  email: z
    .string({ required_error: 'Email wajib diisi' })
    .email({ message: 'Email tidak valid' })
    .min(1, {
      message: 'Email wajib diisi',
    }),
});

export const AuthForgotModule: FC = (): ReactElement => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TLoginRequest>({
    resolver: zodResolver(schema),
    mode: 'all',
    defaultValues: {
      email: '',
    },
  });

  const { mutate } = useForgot();

  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    try {
      mutate(
        {
          email: data.email,
        },
        {
          onSuccess: () => {
            router.push('/auth/forgot/wait');
          },

          onError: (err) => {
            setError(err?.response?.data?.message);
          },
        }
      );
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

  return (
    <Form onSubmit={onSubmit}>
      <div className="w-full flex items-center justify-center mb-6">
        <svg
          width="222"
          height="148"
          viewBox="0 0 222 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_310_15611)">
            <path
              d="M79.6315 85.0998C87.2394 71.7651 101.752 61.5261 117.114 62.5125C105.782 74.7908 99.1746 90.667 98.4599 107.332C98.2077 113.76 98.5988 120.936 94.3153 125.749C91.65 128.744 87.576 130.195 83.5704 130.499C79.5646 130.803 75.5598 130.082 71.6075 129.364L70.6488 129.657C70.2838 114.323 72.0235 98.4346 79.6315 85.0998Z"
              fill="#F0F0F0"
            />
            <path
              d="M117.137 62.8336C105.777 68.2827 96.0901 77.3833 90.1436 88.4822C88.858 90.8817 87.7634 93.4274 87.286 96.1189C86.8083 98.8117 87.142 101.375 88.065 103.932C88.9089 106.271 90.0438 108.565 90.3026 111.067C90.5753 113.704 89.6016 116.169 87.8487 118.126C85.704 120.52 82.8238 122.004 79.9565 123.357C76.773 124.86 73.4424 126.371 71.1876 129.175C70.9144 129.515 70.4012 129.073 70.674 128.733C74.597 123.854 81.3122 122.937 85.9689 119.006C88.1417 117.172 89.7731 114.675 89.6701 111.748C89.5801 109.189 88.4118 106.822 87.5368 104.462C86.618 101.984 86.1599 99.4923 86.4893 96.8503C86.8264 94.1477 87.8233 91.5541 89.0418 89.1323C91.7895 83.6706 95.55 78.6564 99.8578 74.3219C104.809 69.3395 110.578 65.2377 116.918 62.1939C117.31 62.0057 117.527 62.6466 117.137 62.8336Z"
              fill="white"
            />
            <path
              d="M91.8853 84.7726C90.1438 83.5038 88.9116 81.6594 88.4088 79.5689C87.906 77.4784 88.1654 75.2779 89.1406 73.3604C89.3393 72.9731 89.9526 73.2625 89.7537 73.6503C88.8423 75.4343 88.6009 77.4841 89.0731 79.4298C89.5452 81.3755 90.6999 83.0889 92.3287 84.2608C92.6823 84.5159 92.237 85.0262 91.8853 84.7726Z"
              fill="white"
            />
            <path
              d="M87.4804 102.803C91.8444 102.167 95.8077 99.9166 98.5801 96.499C98.8545 96.1601 99.3678 96.6023 99.0937 96.9407C96.202 100.492 92.0728 102.826 87.5301 103.477C87.097 103.539 87.0497 102.864 87.4804 102.803Z"
              fill="white"
            />
            <path
              d="M105.144 70.1713C105.715 70.8021 106.434 71.2818 107.238 71.5671C108.041 71.8524 108.903 71.9345 109.745 71.8059C110.178 71.7387 110.224 72.4134 109.795 72.4802C108.863 72.6178 107.912 72.526 107.024 72.2128C106.135 71.8995 105.338 71.3743 104.7 70.683C104.635 70.6229 104.595 70.5401 104.588 70.4516C104.582 70.363 104.609 70.2753 104.665 70.2063C104.724 70.1388 104.808 70.0973 104.897 70.0908C104.987 70.0842 105.075 70.1131 105.144 70.1713Z"
              fill="white"
            />
            <path
              d="M147.681 104.579C147.413 104.628 147.144 104.678 146.873 104.733C143.266 105.418 139.72 106.395 136.272 107.653C136.004 107.746 135.733 107.844 135.468 107.945C127.192 111.063 119.569 115.685 112.987 121.576C110.37 123.923 107.936 126.464 105.705 129.179C102.626 132.928 99.5859 137.237 95.5614 139.682C95.1444 139.941 94.7117 140.175 94.2657 140.381L71.0822 130.8C71.0405 130.752 70.9963 130.709 70.9543 130.661L70.0111 130.32C70.1163 130.172 70.2286 130.021 70.3338 129.873C70.3945 129.787 70.4603 129.703 70.521 129.617C70.5631 129.56 70.6054 129.504 70.6402 129.45C70.6541 129.431 70.6683 129.412 70.68 129.399C70.7148 129.345 70.7527 129.299 70.7852 129.251C71.4107 128.403 72.0431 127.559 72.6827 126.718C72.6849 126.712 72.6849 126.712 72.6923 126.709C77.5817 120.311 83.0503 114.263 89.2663 109.234C89.4533 109.083 89.6423 108.926 89.84 108.779C92.6545 106.528 95.649 104.51 98.7935 102.745C100.518 101.784 102.291 100.91 104.105 100.128C108.795 98.1152 113.773 96.8501 118.858 96.3789C128.994 95.4411 139.318 97.7437 147.092 104.088C147.291 104.251 147.485 104.411 147.681 104.579Z"
              fill="#F0F0F0"
            />
            <path
              d="M147.507 104.85C135.144 102.386 121.91 103.842 110.456 109.136C107.979 110.281 105.567 111.657 103.559 113.519C101.551 115.383 100.268 117.63 99.4601 120.225C98.7211 122.599 98.2409 125.111 96.9358 127.264C95.5601 129.533 93.2927 130.918 90.7107 131.429C87.5515 132.054 84.3553 131.51 81.2482 130.871C77.7983 130.161 74.2263 129.369 70.7313 130.256C70.3079 130.363 70.1653 129.702 70.5881 129.595C76.6688 128.052 82.5848 131.348 88.678 131.004C91.5211 130.843 94.3329 129.827 96.019 127.429C97.4935 125.331 97.9909 122.741 98.7183 120.331C99.4822 117.802 100.622 115.537 102.481 113.626C104.384 111.67 106.747 110.197 109.183 108.994C114.677 106.282 120.71 104.534 126.768 103.657C133.732 102.649 140.817 102.835 147.718 104.208C148.145 104.293 147.931 104.935 147.507 104.85Z"
              fill="white"
            />
            <path
              d="M114.088 107.22C113.464 105.162 113.595 102.95 114.456 100.979C115.318 99.0085 116.855 97.4071 118.792 96.4611C119.185 96.271 119.5 96.8701 119.107 97.0604C117.301 97.938 115.87 99.4298 115.071 101.267C114.272 103.103 114.159 105.164 114.751 107.077C114.879 107.493 114.215 107.633 114.088 107.22Z"
              fill="white"
            />
            <path
              d="M99.6759 118.973C103.544 121.083 108.069 121.664 112.348 120.598C112.771 120.492 112.914 121.153 112.491 121.259C108.036 122.36 103.329 121.746 99.3081 119.541C98.925 119.331 99.2949 118.764 99.6759 118.973Z"
              fill="white"
            />
            <path
              d="M133.497 103.514C133.572 104.361 133.857 105.175 134.325 105.885C134.794 106.595 135.433 107.177 136.184 107.58C136.569 107.786 136.199 108.352 135.816 108.148C134.988 107.699 134.284 107.055 133.764 106.272C133.245 105.489 132.925 104.591 132.834 103.657C132.818 103.57 132.836 103.48 132.884 103.405C132.932 103.33 133.007 103.277 133.094 103.255C133.182 103.237 133.273 103.254 133.349 103.302C133.424 103.351 133.478 103.427 133.497 103.514Z"
              fill="white"
            />
            <path
              d="M103.518 120.386C100.271 104.744 96.2128 99.5293 96.2128 99.5293L94.6624 98.3313L92.7979 96.8882L92.8069 96.7027L92.3646 96.5529L92.2607 96.4725L92.0905 96.3423L92.0631 96.3716L92.0053 96.4312L83.5681 93.5737L72.864 89.9509L67.9073 83.5316C67.1 82.4861 66.0607 81.6411 64.8709 81.0628C63.681 80.4846 62.3729 80.1887 61.049 80.1985L45.219 80.3152C43.0786 80.331 41.0215 81.144 39.4522 82.5943L29.0474 92.2106L12.8347 99.9256L12.8073 99.8984L12.6371 100.02L10.132 101.213L10.2354 101.749L8.68497 102.864C8.68497 102.864 4.62648 107.716 1.37967 122.271C0.553723 125.974 0.14716 133.919 0.000412391 143.708C-0.00695872 144.203 0.0845502 144.695 0.269616 145.155C0.454682 145.614 0.729614 146.033 1.07843 146.386C1.42724 146.738 1.84297 147.019 2.30145 147.21C2.75993 147.401 3.25201 147.5 3.74908 147.5H90.3444L101.153 147.5C101.649 147.5 102.141 147.401 102.599 147.21C103.057 147.019 103.473 146.739 103.822 146.387C104.17 146.034 104.445 145.616 104.631 145.157C104.816 144.698 104.908 144.207 104.901 143.712C104.758 133.06 104.352 124.402 103.518 120.386Z"
              fill="#3F3D56"
            />
            <path
              d="M114.629 14.1411C111.26 14.1411 108.029 15.4746 105.646 17.8483C103.264 20.2219 101.926 23.4413 101.926 26.7982C101.926 30.155 103.264 33.3744 105.646 35.7481C108.029 38.1217 111.26 39.4552 114.629 39.4552H209.297C212.666 39.4552 215.897 38.1217 218.279 35.7481C220.662 33.3744 222 30.155 222 26.7982C222 23.4413 220.662 20.2219 218.279 17.8483C215.897 15.4746 212.666 14.1411 209.297 14.1411H114.629Z"
              fill="#E5E5E5"
            />
            <path
              d="M114.629 16.7026C111.941 16.7026 109.364 17.7663 107.464 19.6595C105.564 21.5528 104.496 24.1207 104.496 26.7982C104.496 29.4757 105.564 32.0435 107.464 33.9368C109.364 35.83 111.941 36.8937 114.629 36.8937H209.297C211.984 36.8937 214.561 35.83 216.461 33.9368C218.362 32.0435 219.429 29.4757 219.429 26.7982C219.429 24.1207 218.362 21.5528 216.461 19.6595C214.561 17.7663 211.984 16.7026 209.297 16.7026H114.629Z"
              fill="white"
            />
            <path
              d="M55.62 74.2728C67.0737 74.2728 76.3588 65.0213 76.3588 53.6091C76.3588 42.1968 67.0737 32.9453 55.62 32.9453C44.1662 32.9453 34.8811 42.1968 34.8811 53.6091C34.8811 65.0213 44.1662 74.2728 55.62 74.2728Z"
              fill="#9E616A"
            />
            <path
              d="M50.3145 73.2614C50.2259 73.067 50.1375 72.872 50.0494 72.6763C50.0834 72.6774 50.117 72.6822 50.151 72.6831L50.3145 73.2614Z"
              fill="#2F2E41"
            />
            <path
              d="M34.3044 33.8852C35.3533 33.0515 36.5792 32.2844 37.9203 32.3275C39.2614 32.3705 40.6213 33.5774 40.3435 34.8853C42.8067 30.5397 46.7275 27.1974 51.4176 25.4451C56.1077 23.6928 61.2673 23.6425 65.9909 25.303C69.324 26.4747 72.5926 28.8188 73.3583 32.2568C73.5548 33.1393 73.597 34.1071 74.1501 34.8237C74.8474 35.7273 76.1816 35.9317 77.2801 35.6138C77.2911 35.6107 77.3021 35.6074 77.313 35.6042C77.4986 35.541 77.699 35.5348 77.8881 35.5864C78.0773 35.6379 78.2466 35.7448 78.3741 35.8932C78.5016 36.0417 78.5815 36.2248 78.6034 36.419C78.6254 36.6132 78.5883 36.8094 78.497 36.9824L77.5539 38.7349C78.7428 38.9989 79.9781 38.9728 81.1545 38.6586C81.35 38.6075 81.5565 38.618 81.7457 38.6885C81.935 38.7589 82.0977 38.8861 82.2116 39.0523C82.3255 39.2186 82.385 39.416 82.3818 39.6172C82.3787 39.8185 82.3132 40.0139 82.1942 40.1766C79.0844 44.4307 73.8891 47.1777 68.5873 47.1454C64.8192 47.1225 61.0122 45.8286 57.345 46.692C55.9262 47.026 54.6006 47.6722 53.4652 48.5833C52.3299 49.4944 51.4136 50.6472 50.7837 51.9571C50.1538 53.267 49.8263 54.7008 49.825 56.1533C49.8238 57.6058 50.149 59.0402 50.7767 60.3511C49.6501 59.1233 47.4723 59.414 46.3199 60.6178C45.1675 61.8217 44.8691 63.6184 44.9853 65.278C45.1628 67.8163 46.161 70.2081 47.2132 72.536C38.3911 72.2593 30.0469 66.0931 27.2382 57.7533C24.4177 49.3785 27.3737 39.394 34.3044 33.8852Z"
              fill="#2F2E41"
            />
            <path
              opacity="0.2"
              d="M20.4124 115.664L26.2291 147.197L29.7193 147.5L20.4124 115.664Z"
              fill="black"
            />
            <path
              opacity="0.2"
              d="M84.4855 113.286L78.6687 147.174L75.1785 147.5L84.4855 113.286Z"
              fill="black"
            />
            <path
              d="M39.2656 23.2727C38.1503 23.7367 36.9866 23.2282 36.4985 22.0636C36.003 20.8812 36.4658 19.6809 37.599 19.2095C38.7323 18.738 39.8753 19.2477 40.3788 20.4492C40.8748 21.6326 40.417 22.7936 39.2656 23.2727ZM37.1292 16.8821L36.2424 17.2511C36.0209 17.3422 35.7731 17.3471 35.5481 17.2648C35.3232 17.1826 35.1373 17.0193 35.0274 16.8071L34.9836 16.7216C34.0294 15.007 33.9202 12.9232 34.6606 10.5313C35.3465 8.3856 35.6314 6.87656 35.0584 5.50944C34.396 3.9288 32.9815 3.43367 31.1777 4.15093C30.4781 4.442 30.2555 4.43736 29.7049 4.98154C29.5852 5.10135 29.4424 5.19591 29.2852 5.25957C29.128 5.32323 28.9595 5.35469 28.7898 5.35208C28.6257 5.35015 28.4638 5.31533 28.3135 5.24969C28.1633 5.18405 28.0278 5.08894 27.9153 4.97002C27.6984 4.74085 27.5769 4.43822 27.5753 4.12326C27.5737 3.8083 27.6922 3.50447 27.9067 3.27313C28.8321 2.30793 29.9482 1.54434 31.1847 1.03053C35.0603 -0.581933 37.0113 1.79864 37.9041 3.92903C38.7774 6.0128 38.2862 7.94619 37.4969 10.4501C36.8354 12.5307 36.874 14.0724 37.6253 15.6054C37.6796 15.7213 37.7097 15.8469 37.7141 15.9747C37.7184 16.1025 37.6967 16.2298 37.6503 16.3491C37.604 16.4683 37.534 16.577 37.4444 16.6686C37.3549 16.7602 37.2476 16.8329 37.1292 16.8821Z"
              fill="#009647"
            />
            <path
              d="M135.54 32.8348H116.704C116.644 32.8352 116.585 32.8238 116.53 32.8012C116.474 32.7787 116.424 32.7455 116.381 32.7034C116.339 32.6614 116.305 32.6115 116.282 32.5564C116.259 32.5014 116.247 32.4423 116.247 32.3827C116.247 32.3231 116.259 32.2641 116.282 32.209C116.305 32.154 116.339 32.104 116.381 32.062C116.424 32.02 116.474 31.9867 116.53 31.9642C116.585 31.9417 116.644 31.9303 116.704 31.9307H135.54C135.659 31.9315 135.774 31.9795 135.858 32.0642C135.943 32.1488 135.99 32.2634 135.99 32.3827C135.99 32.5021 135.943 32.6166 135.858 32.7013C135.774 32.786 135.659 32.8339 135.54 32.8348Z"
              fill="#009647"
            />
            <path
              d="M159.434 32.9851H140.598C140.538 32.9855 140.479 32.9742 140.424 32.9516C140.368 32.9291 140.318 32.8959 140.275 32.8538C140.233 32.8118 140.199 32.7619 140.176 32.7068C140.153 32.6518 140.141 32.5927 140.141 32.5331C140.141 32.4735 140.153 32.4144 140.176 32.3594C140.199 32.3044 140.233 32.2544 140.275 32.2124C140.318 32.1704 140.368 32.1371 140.424 32.1146C140.479 32.0921 140.538 32.0807 140.598 32.0811H159.434C159.493 32.0807 159.553 32.0921 159.608 32.1146C159.664 32.1371 159.714 32.1704 159.756 32.2124C159.799 32.2544 159.833 32.3044 159.856 32.3594C159.879 32.4144 159.89 32.4735 159.89 32.5331C159.89 32.5927 159.879 32.6518 159.856 32.7068C159.833 32.7619 159.799 32.8118 159.756 32.8538C159.714 32.8959 159.664 32.9291 159.608 32.9516C159.553 32.9742 159.493 32.9855 159.434 32.9851Z"
              fill="#009647"
            />
            <path
              d="M183.327 33.136H164.492C164.372 33.1352 164.258 33.0872 164.173 33.0025C164.089 32.9179 164.041 32.8033 164.041 32.684C164.041 32.5646 164.089 32.4501 164.173 32.3654C164.258 32.2807 164.372 32.2328 164.492 32.2319H183.327C183.387 32.2315 183.447 32.2429 183.502 32.2655C183.557 32.288 183.608 32.3212 183.65 32.3632C183.693 32.4053 183.726 32.4552 183.749 32.5103C183.772 32.5653 183.784 32.6244 183.784 32.684C183.784 32.7436 183.772 32.8026 183.749 32.8577C183.726 32.9127 183.693 32.9627 183.65 33.0047C183.608 33.0467 183.557 33.08 183.502 33.1025C183.447 33.125 183.387 33.1364 183.327 33.136Z"
              fill="#009647"
            />
            <path
              d="M207.221 33.2869H188.386C188.266 33.2861 188.152 33.2381 188.067 33.1534C187.983 33.0687 187.935 32.9542 187.935 32.8348C187.935 32.7155 187.983 32.601 188.067 32.5163C188.152 32.4316 188.266 32.3836 188.386 32.3828H207.221C207.341 32.3836 207.456 32.4316 207.54 32.5163C207.625 32.601 207.672 32.7155 207.672 32.8348C207.672 32.9542 207.625 33.0687 207.54 33.1534C207.456 33.2381 207.341 33.2861 207.221 33.2869Z"
              fill="#009647"
            />
            <path
              d="M126.081 28.6743C128.014 28.6743 129.581 27.1127 129.581 25.1863C129.581 23.2599 128.014 21.6982 126.081 21.6982C124.147 21.6982 122.58 23.2599 122.58 25.1863C122.58 27.1127 124.147 28.6743 126.081 28.6743Z"
              fill="#009647"
            />
            <path
              d="M150.119 28.6743C152.052 28.6743 153.619 27.1127 153.619 25.1863C153.619 23.2599 152.052 21.6982 150.119 21.6982C148.185 21.6982 146.618 23.2599 146.618 25.1863C146.618 27.1127 148.185 28.6743 150.119 28.6743Z"
              fill="#009647"
            />
            <path
              d="M174.157 28.6743C176.09 28.6743 177.658 27.1127 177.658 25.1863C177.658 23.2599 176.09 21.6982 174.157 21.6982C172.224 21.6982 170.656 23.2599 170.656 25.1863C170.656 27.1127 172.224 28.6743 174.157 28.6743Z"
              fill="#009647"
            />
            <path
              d="M198.195 28.6743C200.129 28.6743 201.696 27.1127 201.696 25.1863C201.696 23.2599 200.129 21.6982 198.195 21.6982C196.262 21.6982 194.694 23.2599 194.694 25.1863C194.694 27.1127 196.262 28.6743 198.195 28.6743Z"
              fill="#009647"
            />
          </g>
          <defs>
            <clipPath id="clip0_310_15611">
              <rect
                width="222"
                height="147"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-black text-left">
        Lupa Kata Sandi
      </h1>
      {error && (
        <span className="text-error bg-error-50 border-error border rounded-lg p-3">
          {error}
        </span>
      )}
      <section className="flex flex-col gap-y-3 mt-[18px]">
        <ControlledFieldText
          control={control}
          name="email"
          label="Email"
          type="email"
          size="md"
          placeholder="Contoh: email@example.com"
          status={errors.email ? 'error' : 'default'}
          message={errors.email?.message}
        />
      </section>
      <Button disabled={!isValid || isLoading} type="submit" size="lg">
        Kirim Sekarang
      </Button>
      <div className="w-full flex justify-between">
        <h1 className="font-regular text-xs sm:text-sm text-grey">
          Sudah ingat akun anda?
        </h1>
        <Link
          href="/auth/login"
          className="font-semibold text-xs sm:text-sm underline text-primary"
        >
          Klik untuk masuk kembali
        </Link>
      </div>
    </Form>
  );
};
