import ActivityList from '../components/mollecules/activities/ActivityList'
import { doGet } from '../libs/doFetch'
import { setActivity } from '../redux/actions/activityAction'

import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const IndexPage = () => {
  const dispatch = useDispatch()

  const syncActivity = async () => {
    const response = await doGet('/activity-groups?email=yudi.gunaone87@gmail.com')
    dispatch(setActivity(response.data))
  }

  useEffect(() => {
    syncActivity()
  }, [])

  return <ActivityList />
}

export default memo(IndexPage)
