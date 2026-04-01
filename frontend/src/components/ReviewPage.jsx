import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ReviewCard from './ReviewCard'

const ReviewPage = () => {

  const {reviewData} = useSelector(state => state.review)
  const [latestReview, setLatestReview] = useState(null)

  useEffect(()=>{
    setLatestReview(reviewData?.slice(0,6))
  },[reviewData])

  return (
    <div className='flex items-center my-10 justify-center flex-col'>
      <h1 className='md:text-[45px] text-[30px] font-semibold text-center mt-[30px] px-5 '>Real Reviews for Real Courses.</h1>
      
      <span className='lg-w-[50%] md-w-[80%] text-[15px] text-center my-10 px-5 '>Discover how our Cortex is Transforming learning experience through real feedback from students and professional worldwide.</span>

      <div className="w-full flex items-center flex-wrap justify-center gap-[50px] lg:p-[30px] p-2.5 mb-10 ">
        {
          latestReview?.map((review, index)=>(
            <ReviewCard key={index} comment={review.comment} rating={review.rating} photoUrl={review.user.photoUrl} courseTitle={review.course.title} description={review.user.description} name={review.user.name} />
          ))
        }
      </div>

    </div>
  )
}

export default ReviewPage
