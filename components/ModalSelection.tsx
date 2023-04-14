'use client';

import useSWR from 'swr'
import Select from 'react-select'

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json())

function ModalSelection() {

    const {data: models, isLoading} = useSWR('models', fetchModels);
    const {data: model, mutate:setModel} = useSWR('model', {
        fallbackData: 'text-davinci-003'
    });

  return (
    <div className='mt-5'>
      <Select
        className='mt-2'
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
            control: (state) => "bg-secondary border-secondary rounded-2xl text-secondary_text focus:outline-none ",
        }}

        onChange={(e) => setModel(e.value)}
      />
    </div>
  )
}

export default ModalSelection
