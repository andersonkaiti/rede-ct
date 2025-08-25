import { getCourses } from '@mocks/courses/courses'
import { CourseCard } from './course-card'

export async function Courses() {
  const courses = await getCourses()

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2">
      {courses.map((course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </div>
  )
}
