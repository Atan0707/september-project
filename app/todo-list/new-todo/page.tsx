"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Form from '@/app/components/form/Form';

// buat form kat sini

const CreateTodo = () => {
  const router = useRouter();

  const handleBack = (): void => {
    router.back();
  };

  return (
    <div className='m-5'>
      <h1>Create Todo</h1>
      <div className="form flex flex-col items-center justify-between p-24">
        <Form />
      </div>
      <div className="buttons flex items-center flex-row space-x-2 justify-center">
        <Button className='' onClick={handleBack}>Back</Button>
        <Button className=''>Save</Button>
      </div>
    </div>
  );
};

export default CreateTodo;