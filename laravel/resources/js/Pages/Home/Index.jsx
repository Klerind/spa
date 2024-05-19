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
import Dropdown from '@/Components/Dropdown';

export default function Index({ auth, posts, products}) {

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
      e.preventDefault()
      post(route('login'));
  };
console.log(posts);
   const allposts = posts.map((post) =>
     <div>
      <img src={post.post_image}  />
      <h3>Name: {post.post_name}</h3>
      <p>Description: {post.post_description}</p>
      <time>Created_at: {post.created_at}</time>
     </div>)

   const allproducts = products.map((product) =>
     <div>
      <img src={product.product_image}  />
      <h3>Name: {product.product_name}</h3>
      <p>Description: {product.product_description}</p>
      <number>Price: {product.product_price}</number><hr />
      <time>Created_at: {product.created_at}</time>
     </div>)

    return (
      auth.user ?
        <AuthenticatedLayout
          user={auth.user}
          header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
      >
        <Head title="Home" />
        <div className="py-12">
          <div className="flex flex-row max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 bg-white shadow">
            <div className="w-full">
             <h2 className="font-semibold text-xl text-gray-800 leading-tight">
               All Posts
             </h2>
             {allposts && allposts}
            </div>
            <div className="w-full">
             <h2 className="font-semibold text-xl text-gray-800 leading-tight">
               All Products
             </h2>
             {allproducts && allproducts}
           </div>
          </div>
        </div>
      </AuthenticatedLayout>
      :
      <GuestLayout3
         header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
       >
      <Head title="Home" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 bg-white shadow">
             <Dropdown>
               <Dropdown.Trigger>trigger</Dropdown.Trigger>
               <Dropdown.Content>
                 <Dropdown.Link href='/login'>link</Dropdown.Link>
               </Dropdown.Content>
             </Dropdown>
        </div>
      </div>
      </GuestLayout3>
    );
}
