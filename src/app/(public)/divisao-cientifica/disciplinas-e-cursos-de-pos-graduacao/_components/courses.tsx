import { getCourses } from '@mocks/courses/courses'
import { CourseCard } from './course-card'

export async function Courses() {
  const courses = await getCourses()

  return (
    <div className="space-y-8">
      {courses.map((course) => (
        <CourseCard course={course} key={course.id} />
      ))}
    </div>
  )
}
