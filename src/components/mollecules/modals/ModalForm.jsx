import Button from '../../../components/atoms/Button'
import FormHeader from '../../../components/atoms/FormHeader'

import { doGet, doPatch, doPost } from '../../../libs/doFetch';
import { setModalForm } from '../../../redux/actions/ModalFormAction'
import { setSelectedActivity } from '../../../redux/actions/selectedActivityAction'

import { Suspense, lazy, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ButtonPriority = lazy(() => import('../../../components/atoms/ButtonPriority'))

const Input = lazy(() => import('../../../components/atoms/Input'))

const PriorityDD = lazy(() => import('../dropdowns/PriorityDD'))

const ModalForm = () => {
  const modalForm = useSelector((state) => state.modalForm)
  const selectedActivity = useSelector((state) => state.selectedActivity)
  const dispatch = useDispatch()

  const syncActivity = async () => {
    const response = await doGet(`/activity-groups/${selectedActivity.id}`)
    dispatch(setSelectedActivity(response))
  }

  const handleSubmit = async () => {
    const payload = {
      title: modalForm.title,
      priority: modalForm.priority === 'Medium' ? 'normal' : modalForm.priority.replace(' ', '-').toLowerCase(),
      activity_group_id: selectedActivity.id
    }

    if (!modalForm.title) {
      return
    }
    if (modalForm.titleForm === 'Tambah List Item') {
      await doPost('/todo-items', payload)
      await syncActivity()
      dispatch(setModalForm({ isOpen: false, isDropDownItem: false, title: '', priority: 'Very High' }))
    } else {
      await doPatch('/todo-items/' + modalForm.id, payload)
      await syncActivity()
      dispatch(setModalForm({ isOpen: false, isDropDownItem: false, title: '', priority: 'Very High' }))
    }
  }

  return (
    <div
      data-cy='modal-add'
      onClick={(e) => e.stopPropagation()}
      className='flex flex-col justify-between h-72 md:h-96 w-10/12 md:w-auto aspect-video rounded-lg divide-y translate-y-[-40%] divide-neutral-300 bg-white'
    >
      <FormHeader />
      <div className='flex flex-col justify-evenly w-full h-[80%] py-2 lg:py-4 px-4 lg:px-8 space-y-2 lg:space-y-4'>
        <section>
          <label data-cy='modal-add-name-title' htmlFor='item-name' className='uppercase text-neutral-800'>
            NAMA LIST ITEM
          </label>
          <Suspense fallback={null}>
            <Input />
          </Suspense>
        </section>

        <section>
          <div data-cy='modal-add-priority-title' className='tracking-wider uppercase text-neutral-900'>
            PRIORITY
          </div>
          <Suspense fallback={null}>
            <ButtonPriority />
          </Suspense>
          <Suspense fallback={null}>
            <PriorityDD />
          </Suspense>
        </section>
      </div>
      <Button
        onClick={handleSubmit}
        data-cy='modal-add-save-button'
        disabled={modalForm.title.length > 0 ? false : true}
        className={`w-1/3 md:w-1/4 mr-2 mb-2 md:mr-4 md:mb-4 ml-auto px-4 md:px-8 bg-sky-500 text-white ${
          modalForm.title.length > 0 ? 'opacity-100' : 'opacity-50'
        }`}
      >
        Simpan
      </Button>
    </div>
  )
}

export default memo(ModalForm)
