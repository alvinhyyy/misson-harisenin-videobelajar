import avatarProfile from '../assets/avatar-profile.png'
import { avatarOptions, initialCourses } from './courses.js'
import { lessons } from './curriculum.js'
import { ADMIN_FEE } from './payments.js'

export const initialProfile = {
  name: 'Jennie Ruby Jane',
  email: 'rubyjane@gmail.com',
  countryCode: '+62',
  phone: '81234567890',
  avatar: avatarProfile,
}

const course = (id) => initialCourses.find((item) => item.id === id)

const order = (id, courseId, status, paidAt, methodId = 'bca') => {
  const { title, image, price } = course(courseId)
  return {
    id,
    invoice: `HEL/VI/${id}`,
    courseId,
    courseTitle: title,
    courseImage: image,
    price,
    adminFee: ADMIN_FEE,
    total: price + ADMIN_FEE,
    methodId,
    status,
    createdAt: paidAt,
    paidAt: status === 'paid' ? paidAt : null,
  }
}

export const initialOrders = [
  order('10062023', '1', 'paid', '2023-06-10T14:17:00'),
  order('11062023', '4', 'paid', '2023-06-11T09:30:00'),
  order('12062023', '2', 'paid', '2023-06-12T19:05:00', 'ovo'),
  order('13062023', '6', 'failed', '2023-06-13T10:12:00'),
  order('14062023', '8', 'pending', '2023-06-14T08:45:00', 'mandiri'),
]

export const initialEnrollments = [
  { courseId: '1', completedLessons: lessons.map((lesson) => lesson.id), enrolledAt: '2023-06-10T14:17:00' },
  { courseId: '4', completedLessons: ['pretest', 'video-1'], enrolledAt: '2023-06-11T09:30:00' },
  { courseId: '2', completedLessons: [], enrolledAt: '2023-06-12T19:05:00' },
]

export const initialReviews = [
  {
    id: 'r1',
    courseId: null,
    name: 'Gregorius Edrik Lawanto',
    batch: 'Alumni Batch 2',
    avatar: avatarOptions[4],
    rating: 3.5,
    text: 'Materinya runtut dan mudah dipahami. Studi kasusnya sangat membantu untuk langsung praktik di pekerjaan.',
  },
  {
    id: 'r2',
    courseId: null,
    name: 'Nadia Kusuma',
    batch: 'Alumni Batch 4',
    avatar: avatarOptions[2],
    rating: 4.5,
    text: 'Tutornya profesional dan responsif. Quiz di setiap modul bikin aku lebih yakin dengan pemahamanku.',
  },
]
