import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout3 from '@/Layouts/GuestLayout3';
import SendEmailForm from './Partials/SendEmailForm';

import { Head } from '@inertiajs/react';

export default function Index({ auth }) {
    return (
      <GuestLayout3
         header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contact</h2>}
       >
        <SendEmailForm />
      </GuestLayout3>
    );
}
