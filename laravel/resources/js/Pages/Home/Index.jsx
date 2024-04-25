import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout3 from '@/Layouts/GuestLayout3';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ auth }) {

  const { data, setData, post, processing, errors, reset } = useForm({
      email: '',
      password: '',
      remember: false,
  });

  useEffect(() => {
      return () => {
          reset('password');
      };
  }, []);

  const submit = (e) => {
      e.preventDefault();

      post(route('login'));
  };

    return (
      auth.user ?
        <AuthenticatedLayout
          user={auth.user}
          header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
      >
        <Head title="Home" />

        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
               Home
            <UpdatePasswordForm className="max-w-xl" />

          </div>
        </div>
      </AuthenticatedLayout>
      :
      <GuestLayout3
         header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
       >
      <Head title="Home" />
        Home
      </GuestLayout3>
    );
}
