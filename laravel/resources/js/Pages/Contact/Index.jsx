import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout3 from '@/Layouts/GuestLayout3';
import SendEmailForm from './Partials/SendEmailForm';

import { Head } from '@inertiajs/react';

export default function Index({ auth }) {
    return (
      auth.user ?
        <AuthenticatedLayout
          user={auth.user}
          header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contact</h2>}
      >
       <Head title="Contact" />
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <SendEmailForm />
          </div>
        </div>
      </AuthenticatedLayout>
      :
      <GuestLayout3
         header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contact</h2>}
       >
        <Head title="Contact" />
        <div className="py-12">
         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <SendEmailForm />
        </div>
       </div>
      </GuestLayout3>
    );
}
