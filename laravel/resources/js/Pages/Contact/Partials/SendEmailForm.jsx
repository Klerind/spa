import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function SendEmailForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const emailInput = useRef();
    const subjectInput = useRef();
    const messageInput = useRef();

    const {
        data,
        setData,
        put,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        email: '',
        subject: '',
        message: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => emailInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        put(route('email.sendEmailData'))
        reset();
    };

    return (
        <section className={`space-y-6 bg-white shadow${className}`}>
            <form className="p-6">
              <div className="mt-6">
                  <InputLabel htmlFor="email" value="Email:" />

                  <TextInput
                      id="email"
                      type="email"
                      name="email"
                      ref={emailInput}
                      value={data.email}
                      onChange={(e) => setData('email', e.target.value)}
                      className="mt-1 block w-3/4"
                      isFocused
                      placeholder="Email"
                  />

                  <InputError message={errors.email} className="mt-2" />
              </div>
              <div className="mt-6">
                  <InputLabel htmlFor="subject" value="Subject" />

                  <TextInput
                      id="subject"
                      type="text"
                      name="subject"
                      ref={subjectInput}
                      value={data.password}
                      onChange={(e) => setData('subject', e.target.value)}
                      className="mt-1 block w-3/4"
                      isFocused
                      placeholder="Password"
                  />

                  <InputError message={errors.subject} className="mt-2" />
              </div>
              <div className="mt-6">
                  <InputLabel htmlFor="message" value="Message" />

                  <TextInput
                      id="message"
                      type="text"
                      name="message"
                      ref={messageInput}
                      value={data.message}
                      onChange={(e) => setData('message', e.target.value)}
                      className="mt-1 block w-3/4"
                      isFocused
                      placeholder="Message"
                  />

                  <InputError message={errors.message} className="mt-2" />
              </div>
              <SecondaryButton onClick={closeModal} className="mt-6 flex justify-end">Send Mail</SecondaryButton>
            </form>
        </section>
    );
}
